// function to scroll to a course
export function scrollToCourse(target) {
  const courses = document.getElementById(target);

  if (courses) {
    const coursesContainer = findCoursesContainer(courses);

    if (coursesContainer) {
      const offset = courses.offsetTop;

      coursesContainer.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }
}

// function to find the scrollable parent container around the courses
function findCoursesContainer(element) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.classList.contains("overflow-y-scroll")) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return null;
}
