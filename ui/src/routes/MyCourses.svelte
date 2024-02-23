<script>
  import { onMount } from "svelte";
  import { currentUser, fetchRecords } from "../lib/pocketbase";
  import { isLoading } from "../lib/store";
  import Sidebar from "../components/Sidebar.svelte";
  import Courses from "../components/Courses.svelte";
  import { navigate } from "svelte-routing";
  import Title from "../components/Title.svelte";
  import { t } from "../lib/i18n";

  onMount(async () => {
    if ($currentUser) {
      $isLoading = true;
      await fetchRecords();
      $isLoading = false;
    } else {
      navigate("/login");
    }
  });
</script>

<Title suffix={$t("myCourses")} />

{#if $currentUser}
  <main class="flex h-dvh justify-between lg:overflow-x-hidden">
    <Sidebar />
    <Courses />
  </main>
{/if}
