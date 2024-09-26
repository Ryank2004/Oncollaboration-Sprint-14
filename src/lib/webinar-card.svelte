<script>
  export let width = '270px';
</script>

<article style="--width: {width};">
  <a href="/">
    <div class="container-image">
      <img src="https://fdnd-agency.directus.app/assets/ed2c1154-3eac-4b96-819d-64d7fb2ad1a9" alt="thumbnail">
      <p class="duration">1:43:39</p>
    </div>
    <h3>IROS CME Webinar: Fractionation in Head & Neck and CNS malignancies; Radiobiology Perspective</h3>
    <p class="speaker">Prof. R.P. (Rob) Coppes, PhD</p>
    <div class="categories">
      <p class="category">Head & Neck</p>
    </div>
  </a>
</article>

<style>
  * {
    margin: 0;
  }

  article {
    margin-right: 1rem;
    max-width: var(--width);
    
    & a {
      color: black;
      text-decoration: none;
    }

    & p {
      font-size: 9px;
    }

    & .container-image{
      position: relative;

      & img {
        width: 100%;
        height: 80%;
        object-fit: contain;
        border-radius: 10px;
      }

      & .duration {
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
    }

    & h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      word-break: break-all;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & .speaker {
      text-transform: uppercase;
      color: #6A6A6A;
      margin-block: .2rem;
    }

    & .category {
      display: none;
      padding: 4px;
      width: fit-content;
      background-color: #6A002580;
      border-radius: 5px;
    }
  }

  @media only screen and (min-width: 600px){
    article {
      margin-right: 2rem;
      max-width: 384px;
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