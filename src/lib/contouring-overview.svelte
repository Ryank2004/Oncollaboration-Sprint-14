<script>
  export let slug = "";
  export let image_scan = "";
  export let title = "";
<<<<<<< HEAD:src/lib/countouring-overview.svelte
  export let user = ["Sergio Eijben"];
  export let categories = "";  
=======
  export let user_id = "";
  export let categories = [];  
>>>>>>> origin/main:src/lib/contouring-overview.svelte
</script>

<article>
  <a href="/contourings/{slug}">
    <div>
      <img src="https://fdnd-agency.directus.app/assets/{image_scan.id}" alt="CT-Scans" width="384" height="384" />
      {#each categories as category}
        <span>{category.avl_categories_id.name}</span>
      {/each} 
    </div>
    <h3>{title}</h3>
    <p>{user_id.fullname}</p>
  </a>
</article>

<style>
  article {
    max-width: var(--card-max-width);
  }

  div {
    position: relative;
    width: 100%;
  }

  span {
    position: absolute;
    color: var(--text-color);
    font-size: var(--font-size-2);
    font-weight: 700;
    border-radius: var(--border-radius-small);
    padding: 5px;
    gap: 10px;
    background-color: white;
    bottom: 10px;
    right: 10px;
    opacity: 0;
    visibility: hidden;
  }

  img {
    height: auto;
    width: 100%;
    border-radius: var(--border-radius-big);
  }

  h3,
  p,
  a {
    margin: 0;
    padding: 0;
    color: var(--text-color);
    text-decoration: none;
  }

  h3 {
    font-size: var(--font-size-0);
  }

  p {
    font-size: var(--font-size-00);
  }

  @media screen and (min-width: 600px) {
    span {
      opacity: 1;
      visibility: visible;
    }

    h3 {
      font-size: var(--font-size-4);
    }

    p {
      font-size: var( --font-size-2);
    }
  }
</style>
