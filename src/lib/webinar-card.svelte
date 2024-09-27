<script>
  export let slug = "";
  export let thumbnail = "";
  export let duration = "";
  export let title = "";
  export let speakers = [];
  export let categories = [];
</script>

<article>
  <a href="/webinar/{slug}">
    <div class="container-image">
      <img src="https://fdnd-agency.directus.app/assets/{thumbnail}" alt="thumbnail">
      <p class="duration">{duration}</p>
    </div>
    <h3>{title}</h3>
    {#each speakers as speaker}
      <p class="speaker">{speaker}</p>
    {/each} 
    <div class="categories">
      {#each categories as category}
        <p class="category">{category}</p>
      {/each}  
    </div>
  </a>
</article>

<style>
  * {
    margin: 0;
  }

  article {
    margin-inline: .5rem;
    max-width: 384px;
  }

  article a {
    color: black;
    text-decoration: none;
  }

  article p {
    font-size: 9px;
  }

  article .container-image{
    position: relative;
  }  

  article .container-image img {
    width: 100%;
    height: 80%;
    object-fit: contain;
    border-radius: 10px;
  }


  article .container-image .duration {
    position: absolute;
    background-color: #1F000B;
    color: white;
    margin: 0;
    padding: 4px;
    bottom: 10px;
    right: 10px;
    border-radius: 5px;
    z-index: 1;
  }

  article h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  article .speaker {
    text-transform: uppercase;
    color: #6A6A6A;
    margin-block: .2rem;
  }

  article .category {
    display: none;
    padding: 4px;
    width: fit-content;
    background-color: #6A002580;
    border-radius: 5px;
  }

  article:first-of-type{
    margin-left: 0;
  }
  
  @media only screen and (min-width: 600px){
    article {
      margin-inline: 1rem;
    }

    article p {
      font-size: 13px;
    }

    article h3 {
      -webkit-line-clamp: 2;
      font-size: 20px;
    }

    article .category {
      display: block;
    }
  }
</style>