<script>
export default {
  name: 'ServiceCard',
  props:{
    headerText: String,
    normalText: String,
    priceText: String,
    Img: {
      type: String,
      required: true
    },
  }
}
</script>

<template>
        <v-card class="service-block">
            <img class="img" :src=Img>
            <v-card-title class="header-text"> {{ headerText }} </v-card-title>
            <v-card-text class="normal-text"> {{ normalText }} </v-card-text>
            <p class="price-text"> {{ priceText }}</p>
        </v-card>
</template>

<style scoped>
:root {
  --pink: #ef4d93;
  --lightpink: #f594bf;
  --lightestpink: #f1cede;
  --darkpink: #d1005c;
  --white: white;
  --black: black;
  --chicfont: "miller-display", serif;
}
.img { 
  width: 80px;
}
.service-block{
    height: 300px;
    width: 300px;
    background-color: var(--lightestpink);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.header-text{
    font-family: var(--chicfont);
    font-weight: 600;
    font-size: 40px;
}

.normal-text{
    font-family: var(--chicfont);
    font-size: 20px;
    width: 70%;
    text-align: center;
}

.price-text{
    font-family: var(--chicfont);
    font-size: 18px;
}

.service-block:hover .img{
  width: 85px;
}

  /* -------------------------------------------- media queries */
  @media screen and (max-width: 768px) {
    .service-block{
        height: 200px;
    }

    .header-text{
    font-size: 30px;
    }

    .normal-text{
        font-size: 16px;
    }

    .price-text{
        font-size: 16px;
    }

    .img{
      width: 60px;
      margin-top: 2px;
    }

    .service-block:hover .img{
      width: 65px;
    }
  }
</style>