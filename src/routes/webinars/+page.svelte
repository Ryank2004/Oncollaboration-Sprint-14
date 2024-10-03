<script>
  import Search from "$lib/search.svelte"
  import Filter from "$lib/filter.svelte";
  import WebinarCard from "$lib/webinar-card.svelte";

  export let data
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter />

  <section>
    {#each data.webinars as webinar}
    <WebinarCard 
      slug = {webinar.slug}
      thumbnail = {webinar.thumbnail}
      duration = {webinar.duration}
      title = {webinar.title}
      speakers = {webinar.speakers}
      categories = {webinar.categories} />
    {/each}
  </section>
</main>

<style>
  main {
    width: 100vw;
  }

  section {
    display: flex;
  }
</style>