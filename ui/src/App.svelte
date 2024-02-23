<script>
  import { Router, Route } from "svelte-routing";
  import { currentUser } from "./lib/pocketbase";
  import NotFound from "./routes/NotFound.svelte";
  import Login from "./routes/Login.svelte";
  import MyCourses from "./routes/MyCourses.svelte";
  import Lesson from "./routes/Lesson.svelte";
  import Search from "./components/Search.svelte";
  import Alert from "./components/Alert.svelte";
  import { t, locale, locales } from "./lib/i18n";
</script>

{#if $currentUser}
  <Search />
  <Alert />
{/if}

<Router>
  <Route path="/" component={MyCourses} />
  <Route path="/login" component={Login} />
  <Route path="/:lessonTitle" component={Lesson} />
  <Route component={NotFound} />
</Router>
