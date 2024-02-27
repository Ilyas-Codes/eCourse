<script>
  import { onMount } from "svelte";
  import { navigate, useLocation } from "svelte-routing";
  import { currentUser } from "../lib/pocketbase";
  import Icon from "@iconify/svelte";
  import Title from "../components/Title.svelte";
  import { t } from "../lib/i18n";

  export let page = "page";
  const location = useLocation();

  onMount(() => {
    if (!$currentUser) {
      navigate("/login");
    }
  });
</script>

<Title title="404" />

{#if $currentUser}
  <main class="m-auto flex h-dvh items-center justify-center">
    <div
      class="flex flex-col items-center justify-between gap-5 overflow-clip p-5 text-center"
    >
      <h3
        class="rounded-md bg-red-400/10 p-2 leading-none text-red-400 outline outline-[1.5px] outline-red-400/20"
      >
        404 Not Found
      </h3>
      <p class="w-full text-base text-white/50">
        The {page} at
        <span class="text-wrap break-words text-white"
          >{$location.pathname}</span
        > does not exist.
      </p>
      <button
        on:click={() => navigate("/")}
        class="flex items-center justify-center gap-2 rounded-md bg-main px-4 py-2 transition hover:bg-main/80 2xs:w-full 2xs:px-0"
      >
        <Icon class="flex-shrink-0" icon="ph:arrow-left" />
        {$t("myCourses")}</button
      >
    </div>
  </main>
{/if}
