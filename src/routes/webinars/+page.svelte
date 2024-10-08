<script>
  // import {Search, Filter, WebinarOverview} from "$lib/index.js";
  import Search from "$lib/search.svelte";
  import Filter from "$lib/filter.svelte";
  import WebinarOverview from "$lib/webinar-overview.svelte";

  export let data
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter />

  <div>
    {#each data.webinars as webinar}
    <WebinarOverview {...webinar}/>
    {/each}
  </div>
</main>

<style>
  main {
    width: 100vw;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }
</style>