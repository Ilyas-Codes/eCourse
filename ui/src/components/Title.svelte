<script>
  import customize from "../../customize.json";
  const { name } = customize;

  export let title = name;
  export let suffix = "";

  let documentTitle;

  $: if (suffix === "") {
    documentTitle = title;
  } else {
    documentTitle = `${title} - ${suffix}`;
  }
</script>

<svelte:head>
  <title>{documentTitle}</title>
</svelte:head>
