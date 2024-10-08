<script>
  // import {ContouringOverview, Search, WebinarOverview} from "$lib/index.js";
  import ContouringOverview from "$lib/CountouringOverview.svelte";
  import Search from "$lib/Search.svelte";
  import WebinarOverview from "$lib/WebinarOverview.svelte";

  export let data; 
</script>

<main>  
    <h1>OVERVIEW</h1>
    <Search />
    <section>
      <h2>Webinars</h2>
      <div class="carrousel">
        {#each data.webinars as webinar}
          <div class="kaart">
            <WebinarOverview {...webinar} />
          </div>
        {/each}
      </div>
      <a href="/webinars">SEE MORE</a>
    </section>

    <section>
      <h2>Contourings</h2>
      <div class="carrousel">
        {#each data.contourings as contouring}
          <div class="contouringkaart">
            <ContouringOverview {...contouring} />
          </div>
        {/each} 
      </div> 
      <a class="margin" href="/contourings">SEE MORE</a>  
    </section>
</main>

<style>
  main {
    margin-top: 1.2em;
    margin-right: 1em;
    margin-left: 1em;
  }

  h1 {
    font-size: var(--font-size-4);
  }

  h2 {
    font-size: var(--font-size-2);
    margin-bottom: .8em;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  a {
    color: white;
    background-color: var(--primary-color);
    font-size: var(--font-size-0);
    font-weight: 700;
    padding: 5px 43px;
    border-radius: 5px;
    margin-left: auto;
    margin-bottom: 1em;
  }

  .margin {
    margin-bottom: 50px;
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

  .kaart:focus-within {
    outline: var(--focus);
    border-radius: var(--border-radius-small);
  }

  .kaart {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .contouringkaart {
    flex: 0 0 calc(100% - 42%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .contouringkaart:focus-within {
    outline: var(--focus);
    border-radius: var(--border-radius-small);
  }

 .carrousel::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 500px){
    .kaart {
      flex: 0 0 auto;
    }

    .contouringkaart {
      flex: 0 0 auto;
    }
  }

  @media screen and (min-width: 600px){
    h1 {
      font-size: var(--font-size-6);
    }

    h2 {
      font-size: var(--font-size-5);
    }

    a {
      font-size: var(--font-size-2);
    }
  }

  @media screen and (min-width: 1000px){
    .carrousel {
      margin: 0;
    }
  }
</style>
