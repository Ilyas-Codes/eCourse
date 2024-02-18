import { writable } from "svelte/store";

// loading placeholders
export const isLoading = writable(true);

// search component visibility
export const isSearchVisible = writable(false);

// get the stored lesson pages from localStorage
export function getStoredLessons() {
  const storedLessons = localStorage.getItem("lessonsByCourse");
  return storedLessons ? JSON.parse(storedLessons) : {};
}

// store the lesson pages into localStorage
export function storeLessons(lessonsByCourse) {
  localStorage.setItem("lessonsByCourse", JSON.stringify(lessonsByCourse));
}

// sidebar component visibility
const sidebarValue = localStorage.getItem("isSidebarVisible");
export const isSidebarVisible = writable(
  sidebarValue === null ? true : JSON.parse(sidebarValue),
);

isSidebarVisible.subscribe((value) => {
  localStorage.setItem("isSidebarVisible", JSON.stringify(value));
});

// close sidebar when window resizes to 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    isSidebarVisible.set(false);
  } else {
    isSidebarVisible.set(true);
  }
});

// notifications alert UI
export const alert = writable({ show: false, message: "", type: "" });

let timeout = null;
let timeoutEnabled = true;

export function showAlert(message, type) {
  alert.set({ show: true, message, type });

  if (timeoutEnabled) {
    timeoutEnabled = false;
    timeout = setTimeout(() => {
      alert.set({ show: false, message: "", type: "" });
      timeoutEnabled = true;
    }, 5000);
  }
}

export function closeAlert() {
  alert.set({ show: false, message: "", type: "" });
  clearTimeout(timeout);
  timeoutEnabled = true;
}
