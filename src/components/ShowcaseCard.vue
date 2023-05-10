<script>
export default {
  name: 'ShowcaseCard',
  props:{
    Img: {
      type: String,
      required: true
    },
    Name: String
  }
}
</script>

<template>
    <figure class="showcase-card">
        <img class="showcase-img" :src=Img>
        <div class="overlay"></div>
        <h1 class="showcase-name"> {{ Name }}</h1>
    </figure>
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
    .showcase-card{
      height: 300px;
      width: 300px;
      background-color: var(--lightpink);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin: 0;
    }

    .showcase-img{
      height: 300px;
    }

    .overlay{
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 29%, rgba(253,187,45,0) 100%);
      opacity: 0;
      position: absolute;
      height: 300px;
      width: 300px;
      transition: 0.3s;
    }

    .showcase-name{
      position: absolute;
      color: var(--lightpink);
      text-align: center;
      width: 80%;
      transition: 0.3s;
      opacity: 0;
    }

    .showcase-card:hover .overlay{
      opacity: 0.5;
    }

    .showcase-card:hover .showcase-name{
      opacity: 1;
    }

      /* -------------------------------------------- media queries */
  @media screen and (max-width: 768px) {
    .showcase-card{
      height: 240px;
      width: 240px;
    }

    .showcase-img{
      height: 240px;
    }

    .overlay{
      height: 240px;
      width: 240px;
      opacity: 0.5;
    }

    .showcase-name{
      opacity: 1;
    }
  }
</style>