<script>
  export let data
</script>

<article>
  <a href="/{data.webinar.slug}">
    <div class="container-image">
      <img src="{data.webinar.image}" alt="{data.webinar.category}">
      <p>{data.webinar.duration}</p>
    </div>
    <h3>{data.webinar.title}</h3>
    <p>{data.webinar.speaker}</p>
    <div class="category-watch">
      <p class="category">{data.webinar.category}</p>
      <p class="watch-link">Watch</p>
    </div>
  </a>
</article>