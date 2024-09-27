<script>
  import WebinarCard from "../lib/webinar-card.svelte";
  export let data;
</script>

<h1>Welcome to SvelteKit "Fractionation"</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<main>
  <WebinarCard 
  title = {data.webinars.title}
  speakers = {data.webinars.vacancies}
  categories = {data.webinars.vacancies} />

  <WebinarCard 
  title = "26th FARO Webinar: Updated management in glioma WHO grade 2-3"
  speakers = ""
  categories = "Gastrointestinal"/>
</main>
<style>
  main{
    display: flex;
  }
</style>
