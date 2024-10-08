<script>
  import {Search, Filter, WebinarOverview} from "$lib/index.js";

  export let data
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter />

  <div>
    {#each data.webinars as webinar}
    <WebinarOverview {...webinar} />
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