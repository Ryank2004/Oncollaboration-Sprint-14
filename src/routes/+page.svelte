<script>
  import WebinarCard from "../lib/webinar-card.svelte";
  export let data; 
</script>

<main>
  {#each data.webinars as webinar}
  <WebinarCard 
    slug = {webinar.slug}
    thumbnail = {webinar.thumbnail}
    duration = {webinar.duration}
    title = {webinar.title}
    speakers = {webinar.speakers}
    categories = {webinar.categories} />
  {/each}
</main>

<style>
  main{
    display: flex;
  }
</style>
