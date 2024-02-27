<script>
  import customize from "../../customize.json";
  import { onMount } from "svelte";
  import { slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import { pb } from "../lib/pocketbase";
  import { navigate } from "svelte-routing";
  import Title from "../components/Title.svelte";
  import { t } from "../lib/i18n";

  const { name, logo, logo_size } = customize;

  let isMounted = false;
  let username = "";
  let password = "";

  let isLoading = false;
  let isUsernameValid = false;
  let isPasswordValid = false;

  let isFormSubmitted = false;
  let loginError = false;

  $: isUsernameValid = username.length >= 3 && !/\s/.test(username);
  $: isPasswordValid = password.length >= 8;

  onMount(() => {
    isMounted = true;
  });

  function submitForm() {
    isFormSubmitted = true;
  }

  async function login() {
    submitForm();
    if (isUsernameValid && isPasswordValid) {
      isLoading = true;
      try {
        await pb.collection("users").authWithPassword(username, password);
        navigate("/");
      } catch (err) {
        loginError = true;
      }
      isLoading = false;
    }
  }
</script>

<Title suffix="Login" />

<main class="flex h-dvh flex-col items-center justify-between px-5 py-10">
  <img
    aria-hidden="true"
    on:click={() => navigate("/")}
    style="width: {logo_size}px;"
    class="cursor-pointer transition hover:opacity-80"
    src={logo}
    alt={`${name} Logo`}
  />
  {#if isMounted}
    <div
      transition:scale={{ duration: 500, opacity: 0.001, start: 0.98 }}
      class="flex w-[500px] flex-col gap-5 sm:w-full"
    >
      <div class="w-full space-y-1">
        <h2 class="text-balance text-xl">{$t("welcomeTo")} {name}</h2>
        <h3 class="text-balance text-base text-white/50">
          {$t("pleaseLogin")}
        </h3>
      </div>

      {#if loginError}
        <h3
          in:slide={{ duration: 300, easing: quintOut }}
          class="text-balance text-red-400"
        >
          {$t("loginFailed")}
        </h3>
      {/if}

      <form class="flex flex-col gap-4" on:submit|preventDefault>
        <input
          bind:value={username}
          class={!isUsernameValid && isFormSubmitted
            ? "rounded-md bg-red-400/5 p-2 text-red-400 outline outline-[1.5px] outline-red-400/10 transition-all placeholder:text-red-400/50 focus:outline-red-400/20"
            : "rounded-md bg-white/5 p-2 outline outline-[1.5px] outline-white/10 transition-all placeholder:text-white/50 focus:outline-white/20"}
          placeholder={$t("username")}
          type="text"
        />
        {#if !isUsernameValid && isFormSubmitted}
          <h3
            in:slide={{ duration: 300, easing: quintOut }}
            class="text-balance text-red-400"
          >
            {$t("usernameNotValid")}
          </h3>
        {/if}

        <input
          bind:value={password}
          class={!isPasswordValid && isFormSubmitted
            ? "rounded-md bg-red-400/5 p-2 text-red-400 outline outline-[1.5px] outline-red-400/10 transition-all placeholder:text-red-400/50 focus:outline-red-400/20"
            : "rounded-md bg-white/5 p-2 outline outline-[1.5px] outline-white/10 transition-all placeholder:text-white/50 focus:outline-white/20"}
          placeholder={$t("password")}
          type="password"
        />
        {#if !isPasswordValid && isFormSubmitted}
          <h3
            in:slide={{ duration: 300, easing: quintOut }}
            class="text-balance text-red-400"
          >
            {$t("passwordNotValid")}
          </h3>
        {/if}
        <button
          on:click={login}
          class={isLoading
            ? "pointer-events-none flex items-center justify-center gap-2 rounded-md bg-main p-2 opacity-50"
            : "flex items-center justify-center gap-2 rounded-md bg-main p-2 transition hover:bg-main/80"}
        >
          {#if isLoading}
            {$t("loggingIn")}
            <Icon
              class="flex-shrink-0 animate-spin text-base"
              icon="fluent:spinner-ios-16-regular"
            />
          {:else}
            {$t("login")}
            <Icon class="flex-shrink-0 text-base" icon="ph:arrow-right" />
          {/if}
        </button>
      </form>
      <button
        on:click={() => navigate("/")}
        class="mx-auto w-fit text-white/50"
      >
        {$t("alreadyLogin")}
        <span class="text-white underline transition hover:text-white/80"
          >{$t("myCourses")}</span
        >
      </button>
    </div>
  {/if}
  <p class="text-balance text-center text-white/50">
    Copyright © {new Date().getFullYear()}
    {name}
  </p>
</main>
