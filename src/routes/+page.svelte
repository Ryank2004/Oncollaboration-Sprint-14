<script>
  import ContouringOverview from "$lib/countouring-overview.svelte";
  import WebinarCard from "$lib/webinar-card.svelte";
  import Search from "$lib/search.svelte";

  export let data; 
</script>

<main>  
    <h1>OVERVIEW</h1>
    <Search />
    <h2>Webinars</h2>

    <section class="carrousel">
      {#each data.webinars as webinar}
        <div class="kaart">
          <WebinarCard 
            slug = {webinar.slug}
            thumbnail = {webinar.thumbnail}
            duration = {webinar.duration}
            title = {webinar.title}
            speakers = {webinar.speakers}
            categories = {webinar.categories} />
        </div>
      {/each}
    </section>

    <a href="/webinars">SEE MORE</a>
  
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
  
    <a href="/contourings">SEE MORE</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    margin-top: 1.2em;
    margin-right: 1em;
    margin-left: 1em;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: .8em;
  }

  a {
    color: white;
    background-color: var(--primary-color);
    font-size: 11px;
    font-weight: 700;
    padding: 5px 43px;
    border-radius: 5px;
    margin-left: auto;
  }

  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    margin: 0 auto;
    gap: 10px;
  }

  .kaart {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

 .carrousel::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 500px){
    .kaart {
      flex: 0 0 auto;
    }
  }

  @media screen and (min-width: 1000px){
    .carrousel {
      margin: 0;
    }
  }
</style>
