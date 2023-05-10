<script>
export default {
    name: "Footer",
}
</script>

<template>
    <footer class="footer">
        <ul class="company-list">
            <h1 class="company-h1"> Sugar & Sweet bakery </h1>
            <p class="company-p"> The sweetest bakery that will make your delicious dream come true!</p>
        </ul>
        <ul class="social-list">
            <h2 class="footer-h2"> Follow us </h2>
            <div class="social-icons">
                <img class="socialmedia-svg" alt="facebook" src="../assets/faceb.svg" fill="white">
                <img class="socialmedia-svg" alt="instagram" src="../assets/insta.svg">
                <img class="socialmedia-svg" alt="linkedin" src="../assets/linkedin.svg">
            </div>
        </ul>
        <ul class="adress-list">
            <h2 class="footer-h2"> Meet us </h2>
            <address class="adress"> Rachelsmolen 22 Eindhoven </address>
            <address class="adress"> +31 6 11 12 34 55</address>
        </ul>
    </footer>
</template>

<style>
:root {
    --pink: #ef4d93;
    --lightpink: #f594bf;
    --darkpink: #d1005c;
    --white: white;
    --black: black;
    --chicfont: "miller-display", serif;
}

.footer {
    width: 100%;
    background-color: var(--pink);
    color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
}

.company-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 70px;
    margin-top: 20px;
}

.company-h1 {
    font-size: 35px;
    font-family: "wreath", serif;
    margin-bottom: 10px;
}

.company-p {
    font-family: "wreath", serif;
    margin: 0;
}

.social-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 70px;
    margin-top: 20px;
}

.social-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.footer-h2 {
    font-size: 30px;
    font-family: "wreath", serif;
    margin-bottom: 10px;
}

.socialmedia-svg {
    height: 22px;
}

.adress-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 70px;
    margin-top: 20px;
}

.adress {
    font-family: var(--chicfont);
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }

    .company-list {
        margin-bottom: 0;
    }

    .company-h1 {
        text-align: center;
    }

    .social-list {
        margin-bottom: 0;
    }

    .footer-h2 {
        text-align: center;
    }

    .adress-list {
        margin-bottom: 50px;
    }
}
</style>