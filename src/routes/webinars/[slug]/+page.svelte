<script>
  export let data; 
</script>

<video controls width="250">
  <source src="https://fdnd-agency.directus.app/assets/{data.webinar.video.id}">
  <track kind="captions">
</video>

<h1>{data.webinar.title}</h1>

<div class='description'>
  {@html data.webinar.description}
</div>

<style>
  .description :global(p) {
    padding-block: .2rem;
  }

  video {
    width: 90vw;
    margin: var(--margin-center);
  }

  @media screen and (min-width: 600px){
    video {
      width: 50vw;
    }
  }
</style>