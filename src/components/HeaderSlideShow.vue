<script>
import Glide from '@glidejs/glide'
export default {
    name: 'HeaderSlideShow',
  mounted() {
    new Glide('.glide', {
      type: 'carousel',
      animationDuration: 2000,
      // go to next slide after 5 seconds
      autoplay: 4500,
      // show 1 slide, starting with first slide
      focusAt: '1',
      startAt: 1,
      perView: 1, 
      gap: 0,
    }).mount()
  },
}
</script>

<template>
    <div class="glide slide-div home">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide header-slide">
            <figure class="header-fig">
                <img src="../assets/sliderimage1.jpg" alt="cakes image" class="slide-img">
                <figcaption class="slide-text"> Order your perfect cake </figcaption>
            </figure>
          </li>
          <li class="glide__slide header-slide">
            <figure class="header-fig">
                <img src="../assets/sliderimage2.jpg" alt="cupcakes image" class="slide-img">
                <figcaption class="slide-text longtext"> Choose different flavours & toppings </figcaption>
            </figure>
          </li>
          <li class="glide__slide header-slide">
            <figure class="header-fig">
                <img src="../assets/sliderimage4.jpg" alt="made with love image" class="slide-img">
                <figcaption class="slide-text"> Everything made with love </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
:root {
  --pink: #ef4d93;
  --lightpink: #f594bf;
  --darkpink: #d1005c;
  --white: white;
  --black: black;
  --chicfont: "miller-display", serif;
}

.slide-div{
  margin: 0;
  padding: 0;
}
.header-slide{
  width: 100%;
  margin: 0;
  padding: 0;
}

.header-fig{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-img{
  width: 100%;
}

.slide-text{
  margin: 0;
  padding: 0;
  font-family: var(--chicfont);
  font-weight: 700;
  position: absolute;
  top: 50%;
  color: var(--white);
  font-size: 80px;
  background-color: #ef4d937f;
}

  /* -------------------------------------------- media queries */
  @media screen and (max-width: 1080px) {
    .slide-text{
      font-size: 55px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .header-slide{
      width: 100%;
    }
    .header-fig{
      width: auto;
      height: 100%;
    }

    .slide-text{
      font-size: 30px;
    }
    .longtext{
      font-size: 22px;
    }
  }

</style>