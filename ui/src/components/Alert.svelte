<script>
  import { alert, closeAlert } from "../lib/store";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
</script>

{#if $alert.show}
  <div
    transition:fly={{ duration: 250, x: 10, opacity: 0.001 }}
    class={$alert.type === "success"
      ? "fixed bottom-5 right-5 z-10 overflow-hidden rounded-md bg-dark p-3 shadow-2xl shadow-dark outline outline-2 outline-emerald-400/10 sm:left-5"
      : $alert.type === "fail" &&
        "fixed bottom-5 right-5 z-10 overflow-hidden rounded-md bg-dark p-3 shadow-2xl shadow-dark outline outline-2 outline-red-400/10 sm:left-5"}
  >
    <div class="flex w-full items-center justify-between gap-3">
      <h1 class="flex gap-2 text-balance">
        {#if $alert.type === "success"}
          <Icon
            class="flex-shrink-0 text-xl text-emerald-400"
            icon="ph:check-circle"
          />
        {:else if $alert.type === "fail"}
          <Icon
            class="flex-shrink-0 text-xl text-red-400"
            icon="ph:warning-circle"
          />
        {/if}
        {$alert.message}
      </h1>
      <button
        on:click={closeAlert}
        class="rounded-full bg-transparent p-2 transition hover:bg-white/5"
      >
        <Icon class="flex-shrink-0" icon="ph:x" />
      </button>
    </div>
    <div
      class={$alert.type === "success"
        ? "progress absolute bottom-0 left-0 h-[2px] bg-emerald-400/50"
        : $alert.type === "fail" &&
          "progress absolute bottom-0 left-0 h-[2px] bg-red-400/50"}
    ></div>
  </div>
{/if}

<style>
  .progress {
    animation: progress 5s linear;
  }

  @keyframes progress {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
</style>
