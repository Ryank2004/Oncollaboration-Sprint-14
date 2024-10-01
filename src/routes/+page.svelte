<script>
  import WebinarCard from "../lib/webinar-card.svelte";
  export let data; 
</script>

<main>
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
</main>

<style>
  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    width: 100vw;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  .kaart {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    padding: 10px;
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
</style>
