<script>
  import ContouringOverview from "$lib/countouring-overview.svelte";
  import WebinarCard from "$lib/webinar-card.svelte";
  import Search from "$lib/search.svelte";

  export let data; 
</script>

<main>
  <h1>Home</h1>
  
  <Search />
  
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

  <section>
    {#each data.contourings as contouring}
    <ContouringOverview
      slug = {contouring.slug}
      image_scan = {contouring.image_scan}
      title = {contouring.title}
      user = {contouring.user}
      categories = {contouring.categories} />
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
