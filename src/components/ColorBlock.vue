<script>
export default {
  name: 'ColorBlock',
  props:{
    headerText: String,
    normalText: String,
    backgroundColor: String,
    blockName: String,
  },
}
</script>

<template>
        <article class="color-block" :style="{ backgroundColor }" v-bind:class="{ blockName }">
            <figcaption class="block-text">
                <h1 class="header-text">{{ headerText }}</h1>
                <p class="normal-text"> {{ normalText }}</p>
            </figcaption>
        </article>
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

.color-block{
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block-text{
    width: 80%;
    position: absolute;
}
.header-text{
    font-family: var(--chicfont);
    color: var(--white);
    font-size: 40px;
}

.normal-text{
    font-family: var(--chicfont);
    color: var(--white);
    width: 75%;
    font-size: 20px;
}

  /* -------------------------------------------- media queries */
  @media screen and (max-width: 768px) {
    .color-block{
      min-height: 400px;
      padding-block: 10px;
    }

    .normal-text[data-v-3ef159e7] {
      width: 100%;
    }
  }
</style>