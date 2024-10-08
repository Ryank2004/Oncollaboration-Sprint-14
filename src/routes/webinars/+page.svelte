<script>
  // import {Search, Filter, WebinarOverview} from "$lib/index.js";
  import Search from "$lib/Search.svelte";
  import Filter from "$lib/Filter.svelte";
  import WebinarOverview from "$lib/WebinarOverview.svelte";

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