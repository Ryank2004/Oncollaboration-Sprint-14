<main>
    <article class="contouring-card">
            <a href="#" aria-label="#">
                <div class="main-image">
                    <img src="/images/scan-test.png" alt="#" width="384" height="384" />
                    <span>LUNG</span>
                </div>
                <h1>IMA-431</h1>
                <p>Sergio Eijben</p>
            </a>
        </article>
</main>

<style>
    
    article {
        padding: 10px;
        width: 384px;
        height: 458px;
    }

    .main-image {
        position: relative;
        max-width: 100%;
    }

    span {
        position: absolute;
        z-index: 2;
        color: black;
        border-radius: 5px;
        padding: 5px;
        background-color: white;
        top: 88%;
        left: 80%;
    }

    img {
        border-radius: 10px;
    }

    h1,
    p,
    a {
        margin: 0;
        padding: 0;
        color: black;
        text-decoration: none;
    }

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        span {
            opacity: 0;
            visibility: hidden;
        }

        p {
            font-size: 12px;
        }

        h1 {
            font-size: 18px;
        }

        img {
            height: 154px;
            width: 154px;
        }
    }
</style>
