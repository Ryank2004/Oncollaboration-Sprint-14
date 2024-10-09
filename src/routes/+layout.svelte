<script>
  import {Navigation} from '$lib/index.js'
</script>

<Navigation />

<div class="slot">
  <slot />
</div>

<style>

@media (min-width: 1080px) {
  .slot {
    margin-top: 64px;
    }
}

/* @media (min-width: 1080px) {
  .slot {
    margin-top: 64px;
    }
} */

@media (min-width: 1920px) {
  .slot {
    margin-top: 72px;
    }
}
</style>