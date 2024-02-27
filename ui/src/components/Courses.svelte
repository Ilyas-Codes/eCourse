<script>
  import {
    lessons,
    courses,
    progress,
    updateProgressStatus,
  } from "../lib/pocketbase";
  import Icon from "@iconify/svelte";
  import slugify from "slugify";
  import {
    isSidebarVisible,
    isLoading,
    getStoredLessons,
    storeLessons,
  } from "../lib/store";
  import { navigate } from "svelte-routing";
  import { tick } from "svelte";
  import { t } from "../lib/i18n";

  let isOpen = {};
  let loading = {};
  let openCourseId = "";
  let enableReactivity = true;

  // only courses that match a progress record with "In Progress" status are set to open
  $: if (enableReactivity) {
    $progress.forEach((progressRecord) => {
      if (progressRecord.status === "In Progress") {
        isOpen[progressRecord.course] = true;
      }
    });
  }

  // scroll into view of open courses
  $: {
    (async () => {
      await tick();
      if (isOpen[openCourseId]) {
        const courseElement = document.getElementById(openCourseId);
        if (courseElement) {
          courseElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    })();
  }

  // function to toggle opening & closing a course
  const toggleCourse = (courseId) => {
    isOpen[courseId] = !isOpen[courseId];
    openCourseId = courseId;
  };

  // function to navigate to the first lesson of a course and update the status to "In Progress"
  async function goToFirstLessonOfCourse(courseId) {
    const progressRecord = $progress.find(
      (progressRecord) => progressRecord.course === courseId,
    );

    if (progressRecord.status === "Not Started") {
      const updatedProgressRecord = await updateProgressStatus(
        progressRecord.id,
        "In Progress",
      );
      if (updatedProgressRecord) {
        await tick();
        $progress = $progress.map((progressRecord) => {
          if (progressRecord.course === courseId) {
            return { ...progressRecord, status: "In Progress" };
          }
          return progressRecord;
        });
      }
    }

    const lessonsByCourse = getStoredLessons();
    const currentLesson = lessonsByCourse[courseId];

    if (currentLesson) {
      navigate(
        `/${slugify(currentLesson.title, { lower: true, strict: true })}`,
      );
    } else {
      const firstLesson = $lessons.find((lesson) => lesson.course === courseId);
      if (firstLesson) {
        navigate(
          `/${slugify(firstLesson.title, { lower: true, strict: true })}`,
        );

        lessonsByCourse[courseId] = firstLesson;
        storeLessons(lessonsByCourse);
      }
    }
  }

  // function to reset the status of a course back to "Not Started"
  async function resetProgress(courseId) {
    const progressRecord = $progress.find(
      (progressRecord) => progressRecord.course === courseId,
    );

    if (
      progressRecord.status === "Completed" ||
      progressRecord.status === "In Progress"
    ) {
      loading[courseId] = true;
      const updatedProgressRecord = await updateProgressStatus(
        progressRecord.id,
        "Not Started",
      );

      if (!updatedProgressRecord) {
        loading[courseId] = false;
      }

      if (updatedProgressRecord) {
        await tick();

        $progress = $progress.map((progressRecord) => {
          if (progressRecord.course === courseId) {
            return { ...progressRecord, status: "Not Started" };
          }
          return progressRecord;
        });

        openCourseId = "";
        enableReactivity = false;
        loading[courseId] = false;
        isOpen[courseId] = false;

        const lessonsByCourse = getStoredLessons();
        delete lessonsByCourse[courseId];
        storeLessons(lessonsByCourse);
      }
    }
  }
</script>

<section class="flex flex-1 flex-col gap-5 overflow-y-scroll bg-dark p-5">
  <div
    class="flex w-full items-center justify-between gap-5 sm:flex-col sm:items-start"
  >
    <div class="flex items-center gap-3">
      <button
        on:click={() => ($isSidebarVisible = !$isSidebarVisible)}
        class="group flex items-center justify-center rounded-full bg-transparent p-2 text-xl transition hover:bg-white/10"
      >
        <Icon
          class="flex-shrink-0 text-white/50 transition group-hover:text-white"
          icon="ph:list"
        />
      </button>
      <h1 class="flex items-center gap-2 text-base">
        <Icon class="flex-shrink-0" icon="ph:graduation-cap" />
        {$t("myCourses")}
      </h1>
    </div>
    {#if $isLoading}
      <div
        class="w-full max-w-56 animate-pulse rounded-full bg-white/10 p-1 sm:hidden"
      ></div>
    {:else if $courses.length > 0}
      <h2 class="text-white/50 sm:hidden">
        {$courses.length}
        {$courses.length === 1 ? $t("courseAssigned") : $t("coursesAssigned")}
      </h2>
    {/if}
  </div>

  {#if $isLoading}
    <div
      class="flex w-full flex-1 animate-pulse items-center justify-center rounded-md bg-white/10 p-5"
    >
      <Icon
        class="flex-shrink-0 text-6xl text-white/10"
        icon="svg-spinners:bars-scale-fade"
      />
    </div>
  {:else if $courses.length === 0}
    <div class="flex w-full flex-1 items-center justify-center">
      <div
        class="flex w-[500px] flex-col items-center gap-5 text-center sm:w-full"
      >
        <Icon
          class="flex-shrink-0 text-6xl text-main"
          icon="ph:book-open-text-fill"
        />
        <div class="space-y-3">
          <h1 class="text-balance text-30px leading-snug">
            {$t("noCourseAssigned")}
          </h1>
          <p class="text-base text-white/50">
            {$t("courseAssignedCheck")}
          </p>
        </div>
      </div>
    </div>
  {:else}
    {#each $courses as course (course.id)}
      <div
        id={course.id}
        class={isOpen[course.id]
          ? "w-full rounded-md outline outline-[1.5px] outline-white/20 transition-all hover:outline-white/20"
          : "w-full rounded-md outline outline-[1.5px] outline-white/10 transition-all hover:outline-white/20"}
      >
        <div
          aria-hidden="true"
          on:click={() => toggleCourse(course.id)}
          class={isOpen[course.id]
            ? "w-full cursor-pointer space-y-5 rounded-b-none rounded-t-md bg-white/5 p-5"
            : "w-full cursor-pointer space-y-5 rounded-md bg-white/5 p-5"}
        >
          {#each $progress as progressRecord (progressRecord.id)}
            {#if course.id === progressRecord.course}
              <div
                class="flex w-full items-center justify-between gap-5 sm:flex-col"
              >
                <div
                  class="flex items-center gap-3 sm:w-full xs:flex-col xs:items-start"
                >
                  <h3
                    class={progressRecord.status === "Completed"
                      ? "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-400/70"
                      : progressRecord.status === "In Progress"
                        ? "rounded-full bg-amber-400/10 px-3 py-1 text-amber-400/70"
                        : "rounded-full bg-white/10 px-3 py-1 text-white/70"}
                  >
                    {progressRecord.status === "Completed"
                      ? $t("completed")
                      : progressRecord.status === "In Progress"
                        ? $t("inProgress")
                        : $t("notStarted")}
                  </h3>
                  <h3 class="flex items-center gap-2 text-white/50">
                    <Icon class="flex-shrink-0 text-lg" icon="ph:book-open" />
                    {$lessons.filter((lesson) => lesson.course === course.id)
                      .length}
                    {$lessons.filter((lesson) => lesson.course === course.id)
                      .length === 1
                      ? $t("lessonInThisCourse")
                      : $t("lessonsInThisCourse")}
                  </h3>
                </div>
                <div class="flex items-center gap-3 sm:w-full">
                  {#if progressRecord.status === "Completed" || progressRecord.status === "In Progress"}
                    <button
                      on:click|stopPropagation
                      on:click={() => resetProgress(course.id)}
                      class={loading[course.id]
                        ? "pointer-events-none line-clamp-1 flex items-center justify-center gap-2 truncate rounded-md px-4 py-2 text-red-400 opacity-50 outline outline-[1.5px] outline-red-400/20 transition hover:bg-red-400/20 sm:w-full sm:flex-1 sm:px-0"
                        : "line-clamp-1 flex items-center justify-center gap-2 truncate rounded-md px-4 py-2 text-red-400 outline outline-[1.5px] outline-red-400/20 transition hover:bg-red-400/20 sm:w-full sm:flex-1 sm:px-0"}
                      >{$t("resetProgress")}
                      {#if loading[course.id]}
                        <Icon
                          class="flex-shrink-0 animate-spin text-base"
                          icon="fluent:spinner-ios-16-regular"
                        />
                      {/if}
                    </button>
                  {/if}
                  <button
                    on:click|stopPropagation
                    on:click={() => goToFirstLessonOfCourse(course.id)}
                    class="line-clamp-1 truncate rounded-md bg-white/10 px-4 py-2 outline outline-[1.5px] outline-white/20 transition hover:bg-white/20 sm:w-full sm:flex-1 sm:px-0"
                    >{progressRecord.status === "Completed"
                      ? $t("openCourse")
                      : progressRecord.status === "In Progress"
                        ? $t("continueCourse")
                        : $t("startCourse")}</button
                  >
                </div>
              </div>
            {/if}
          {/each}
          <div class="w-full space-y-2">
            <h1 class="text-base leading-relaxed">{course.title}</h1>
            {#if course.description}
              <h3 class="leading-relaxed text-white/50">
                {course.description}
              </h3>
            {/if}
          </div>
        </div>
        {#each $lessons as lesson (lesson.id)}
          {#if course.id === lesson.course}
            {#if isOpen[course.id]}
              <div
                class="flex w-full items-center justify-between gap-5 border-t-[1.5px] border-t-white/10 p-5"
              >
                <div class="flex items-center gap-3">
                  {#if lesson.video}
                    <Icon
                      class="flex-shrink-0 text-3xl text-main"
                      icon="ph:video"
                    />
                  {:else if lesson.content}
                    <Icon
                      class="flex-shrink-0 text-3xl text-main"
                      icon="ph:text-align-left"
                    />
                  {/if}
                  <h3
                    class="line-clamp-1 truncate text-wrap break-all text-base"
                  >
                    {lesson.title}
                  </h3>
                </div>
                <button
                  on:click={() =>
                    navigate(
                      `/${slugify(lesson.title, { lower: true, strict: true })}`,
                    )}
                  class="flex items-center gap-2 p-2 text-white/50 transition hover:text-white"
                >
                  <Icon class="flex-shrink-0 text-lg" icon="ph:eye" />
                  {$t("view")}</button
                >
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    {/each}
  {/if}
</section>
