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
    <WebinarOverview 
    slug = {webinar.slug}
    thumbnail = {webinar.thumbnail}
    duration = {webinar.duration}
    title = {webinar.title}
    speakers = {webinar.speakers}
    categories = {webinar.categories}/>
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