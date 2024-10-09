<script>
  import {Search, Filter, WebinarOverview} from "$lib/index.js";
  export let data
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter />

  <ul>
    {#each data.webinars as webinar}
    <li>
      <WebinarOverview {...webinar}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100vw;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-left: auto;
  }
</style>