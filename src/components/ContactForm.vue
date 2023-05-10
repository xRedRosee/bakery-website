<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            email: "",
            firstname: "",
            lastname: "",
            message: "",
            modalAlreadyOpen: false,
        };
    },
    methods: {
        submit() {
            // open modal
            this.modalAlreadyOpen = true;
        },
        returnToPage() {
            // close modal
            this.modalAlreadyOpen = false;

            // make form empty
            this.email = "",
                this.firstname = "",
                this.lastname = "",
                this.message = ""
        }
    }
}
</script>

<template>
    <form class="contact-form" v-on:submit.prevent="submit">
        <input v-model="email" placeholder="Email" required="true" class="email" type="email" />
        <span class="name">
            <input v-model="firstname" placeholder="First name" required="true" class="firstname" />
            <input v-model="lastname" placeholder="Last name" required="true" class="lastname" />
        </span>
        <textarea v-model="message" placeholder="Enter your message" class="message"></textarea>
        <button class="submit" type="submit">Send</button>
    </form>
    <div class="modal" v-if="modalAlreadyOpen">
        <article class="popup-block">
            <h1 class="modal-h1"> Your message has been send! </h1>
            <p class="modal-p"> Thank you <span class="name-input">{{ firstname }}</span> for your message. </p>
            <p class="modal-p"> We'll contact you during the next 5 work days with more information. </p>
            <button @click="returnToPage" class="returnbtn"> Return </button>
        </article>
    </div>
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

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 341px;
}

.email {
    width: 320px;
    margin: 0;
    padding: 0;
    border: none;
    padding: 10px;
    margin-block: 6px;
    font-family: var(--chicfont);
    background-color: rgba(255, 255, 255, 0.771);
    border-radius: 6px;
}

.name {
    width: 341px;
    display: flex;
    margin-block: 6px;
    justify-content: space-between;
}

.firstname {
    width: 145px;
    margin: 0;
    padding: 0;
    border: none;
    padding: 10px;
    font-family: var(--chicfont);
    background-color: rgba(255, 255, 255, 0.771);
    border-radius: 6px;
}

.lastname {
    width: 145px;
    margin: 0;
    padding: 0;
    border: none;
    padding: 10px;
    font-family: var(--chicfont);
    background-color: rgba(255, 255, 255, 0.771);
    border-radius: 6px;
}

.message {
    width: 320px;
    height: 150px;
    resize: none;
    margin: 0;
    padding: 0;
    border: none;
    padding: 10px;
    margin-block: 6px;
    font-family: var(--chicfont);
    background-color: rgba(255, 255, 255, 0.771);
    border-radius: 6px;
}

.submit {
    margin: 0;
    padding: 0;
    border: none;
    padding-inline: 10px;
    padding-block: 5px;
    margin-block: 6px;
    font-family: var(--chicfont);
    background-color: rgba(255, 255, 255, 0.771);
    border-radius: 6px;
    width: 100px;
}

.email:focus {
    outline: none;
    border: #d1005c 2px solid;
}

.firstname:focus {
    outline: none;
    border: #d1005c 2px solid;
}

.lastname:focus {
    outline: none;
    border: #d1005c 2px solid;
}

.message:focus {
    outline: none;
    border: #d1005c 2px solid;
}

.submit:focus {
    outline: none;
    border: #d1005c 2px solid;
}

/* --------------------------- modal pop up  */
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.351);
    z-index: 99;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.popup-block {
    width: 400px;
    height: 280px;
    background-color: var(--pink);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal-h1 {
    color: var(--white);
    font-size: 24px;
    font-family: var(--chicfont);
}

.modal-p {
    color: var(--white);
    font-family: var(--chicfont);
    font-size: 18px;
    text-align: center;
    width: 90%;
}

.name-input {
    color: var(--black);
}

.returnbtn {
    font-family: var(--chicfont);
    border: none;
    outline: none;
    background: var(--lightpink);
    border: 2px solid var(--white);
    color: var(--white);
    padding-block: 6px;
    padding-inline: 20px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
}

.returnbtn:hover {
    background: none;
    border: 2px solid var(--white);
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .contact-form {
        width: 322px;
    }

    .email {
        width: 300px;
    }

    .name {
        width: 322px;
    }

    .firstname {
        width: 143px;
    }

    .lastname {
        width: 143px;
    }

    .message {
        width: 300px;
    }
}
</style>