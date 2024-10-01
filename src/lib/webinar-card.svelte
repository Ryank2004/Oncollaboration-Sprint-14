<script>
  export let slug = "";
  export let thumbnail = "";
  export let duration = "";
  export let title = "";
  export let speakers = ["Prof. R.P. (Rob) Coppes, PhD", "William Breen, MD"];
  export let categories = ["Lung", "Head & Neck"];
</script>

<article>
  <a href="/webinar/{slug}">
    <div class="container-image">
      <img src="https://fdnd-agency.directus.app/assets/{thumbnail}" alt="thumbnail">
      <p class="duration">{duration}</p>
    </div>
    <h3>{title}</h3>
    <div class="speakers">
      {#each speakers as speaker}
        <p class="speaker">{speaker}</p>
      {/each} 
    </div>
    <div class="categories">
      {#each categories as category}
        <p class="category">{category}</p>
      {/each}  
    </div>
  </a>
</article>

<style>
  article {
    margin-inline: .5rem;
    max-width: var(--card-max-width);
  }

  article a {
    color: var(--text-color);
    text-decoration: none;
  }

  article p {
    font-size: var(--font-size-00);
  }

  article .container-image{
    position: relative;
  }  

  article .container-image img {
    width: 100%;
    height: 80%;
    object-fit: contain;
    border-radius: var(--border-radius-big);
  }

  article .container-image .duration {
    position: absolute;
    background-color: #1F000B;
    color: white;
    padding: var(--padding-label);
    bottom: 10px;
    right: 10px;
    border-radius: var(--border-radius-small);
    z-index: 1;
  }

  article h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    font-size: var(--font-size-0);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  article .speakers {
    display: flex;
    gap: .2rem;
  }

  article .speakers .speaker {
    text-transform: uppercase;
    color: var(--primary-color);
    margin-block: .2rem;
  }

  article .speakers .speaker:not(:first-child)::before {
    content: "—";
  }

  article .categories {
    display: flex;
  }

  article .categories .category {
    display: none;
    margin-inline-end: .5rem;
    padding: var(--padding-label);
    width: fit-content;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-small);
  }

  article:first-of-type{
    margin-left: 0;
  }
  
  @media only screen and (min-width: 600px){
    article {
      margin-inline: 1rem;
    }

    article p {
      font-size: var(--font-size-0);
    }

    article h3 {
      -webkit-line-clamp: 2;
      font-size: var(--font-size-3);
    }

    article .categories .category {
      display: block;
    }
  }
</style>