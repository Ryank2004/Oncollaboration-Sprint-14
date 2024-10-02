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
            <h1>{title}</h1>
            <p>{user}</p>
        </a>
    </article>

<style>
    
    .contouring-card {
        padding: 10px;
        width: 384px;
        height: 458px;
        margin-inline: .5rem;
        max-width: var(--card-max-width);
    }

    .main-image {
        position: relative;
        max-width: 100%;
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
        top: 88%;
        left: 80%;
    }

    img {
        border-radius: var(--border-radius-big);
    }

    h1,
    p,
    a {
        margin: 0;
        padding: 0;
        color: var(--text-color);
        text-decoration: none;
    }

    h1 {
        font-size: var(--font-size-4);
    }

    p {
        font-size: var(--font-size-2);
    }

    @media screen and (max-width: 600px) {
        span {
            opacity: 0;
            visibility: hidden;
        }

        h1 {
            font-size: var(--font-size-0);
        }

        p {
            font-size: var( --font-size-00);
        }

        img {
            height: 154px;
            width: 154px;
        }
    }
</style>
