<script>
  export let slug = "";
  export let image_scan = "";
  export let title = "";
  export let user = ["Sergio Eijben"];
  export let categories = ["LUNG"];  
</script>

<article class="contouring-card">
  <a href="/contourings/{slug}">
    <div class="main-image">
      <img src="https://fdnd-agency.directus.app/assets/{image_scan}" alt="#" width="384" height="384" />
      <span>{categories}</span>
    </div>
    <h3>{title}</h3>
    <p>{user}</p>
  </a>
</article>

<style>
  .contouring-card {
    padding: 10px;
    margin-inline: .5rem;
    max-width: var(--card-max-width);
  }

  .main-image {
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
