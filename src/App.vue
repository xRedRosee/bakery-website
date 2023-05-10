<script setup>
import NavBar from './components/NavBar.vue'
import HeaderSlideShow from './components/HeaderSlideShow.vue'
import ColorBlock from './components/ColorBlock.vue'
import ServiceCards from './components/ServiceCards.vue'
import ShowcaseCard from './components/ShowcaseCard.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <NavBar />
  <HeaderSlideShow />
  <ColorBlock headerText="About us"
    normalText="We are a cake, muffin and donuts bakery based in Eindhoven. We were founded in 2011 by two friends wo both loved to create the most deliccious food for people. After all these years our company has grown into what it is now today: a lovely bakery with people who all love to fulfill their job."
    backgroundColor="#f594bf" blockName="aboutus" id="aboutus" />

  <section class="servicecards-container" id="offers" data-aos="fade-right">
    <h1 class=" services-h1"> Our delicious offers </h1>
    <div class="offer-cards">
      <ServiceCards Img="src/assets/icons/cake.svg" headerText="Cakes"
        normalText="Delicious cakes, can contain 1, 2 or 3 layers." priceText="Prices starting from €41,99" />
      <ServiceCards Img="src/assets/icons/brownie.svg" headerText="Brownies" normalText="Delicious chocolate brownies"
        priceText="Prices starting from €24,99" />
      <ServiceCards Img="src/assets/icons/donut.svg" headerText="Donuts"
        normalText="Can have different toppings and fillings" priceText="Prices starting from €16,50" />
      <ServiceCards Img="src/assets/icons/cupcake.svg" headerText="Cupcakes"
        normalText="Choose different toppings and sprinkles" priceText="Prices starting from €18,99" />
    </div>
  </section>

  <ColorBlock headerText="Make your order now!"
    normalText="Order your special birthday cake, wedding cake, graduation donuts or party cupcakes now! Each food item is made with lots of love and can be fully personalized! You can choose between different flavours, toppings and sprinkels! Fill in the contact form below or call us for more information."
    backgroundColor="#ef4d93" blockName="ordernow" />

  <section class="showcase-container" data-aos="fade-right">
    <h1 class="services-h1"> Our food showcased </h1>
    <div class="showcase-list">
      <ShowcaseCard v-for="p in products" :key="p.id" :Name="p.name" :Img="p.img"></ShowcaseCard>
    </div>
  </section>

  <section class="contact-container" id="contact">
    <h1 class="contact-h1"> Contact us! </h1>
    <div class="form-field" data-aos="fade-up">
      <ContactForm></ContactForm>
      <img src="src/assets/redvelvetcake.jpg" class="form-img">
      <img src="src/assets/cupcakes.jpg" class="form-img">
    </div>
  </section>

  <Footer></Footer>
</template>

<style scoped>
.servicecards-container {
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-h1 {
  font-family: var(--chicfont);
  width: 80%;
  color: var(--darkpink);
  font-size: 40px;
}

.offer-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px
}

.showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
}

.showcase-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: var(--lightpink);
}

.contact-h1 {
  font-family: var(--chicfont);
  width: 80%;
  color: var(--white);
  font-size: 40px;
}

.form-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 60px;
}

.form-img {
  height: 300px;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 1080px) {
  .form-field {
    width: 90%;
  }

  .form-img {
    height: 200px;
  }
}

@media screen and (max-width: 768px) {
  .services-h1 {
    text-align: center;
  }

  .form-field {
    flex-direction: column;
    gap: 20px
  }

  .form-img {
    height: 250px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  methods: {
    getProducts() {
      fetch('./public/products.json')
        .then(res => res.json())
        .then(data => this.products = data.showCase)
    },
    animateOnScroll() {
      AOS.init({
        duration: 1200,
        easing: 'ease-in',
        delay: 100,
        offset: 300
      });
    }
  },
  beforeMount() {
    this.getProducts()
    this.animateOnScroll()
  }
}
</script>