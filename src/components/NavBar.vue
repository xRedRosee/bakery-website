<script>
export default {
  name: 'NavBar',
  data() {
    return {
      hamburgerMenuPressed: false,
    }
  },
  methods: {
    hamburgerMenu() {
      // select the items from HTML
      const line1 = document.querySelector('#line1');
      const line2 = document.querySelector('#line2');
      const line3 = document.querySelector('#line3');
      const exit = document.querySelector('#exit');
      const navbarList = document.querySelector('.nav-items');

      if (this.hamburgerMenuPressed == false) {
        // open hamburger
        line1.style.setProperty('display', 'none');
        line2.style.setProperty('display', 'none');
        line3.style.setProperty('display', 'none');
        exit.style.setProperty('display', 'block');
        navbarList.style.setProperty('display', 'flex');
        document.querySelector("#exit").innerText = 'X';
        return this.hamburgerMenuPressed = true;
      } else if (this.hamburgerMenuPressed == true) {
        // close hamburger
        line1.style.setProperty('display', 'block');
        line2.style.setProperty('display', 'block');
        line3.style.setProperty('display', 'block');
        exit.style.setProperty('display', 'none');
        navbarList.style.setProperty('display', 'none');
        document.querySelector("#exit").innerText = 'X';
        return this.hamburgerMenuPressed = false;
      }
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <h1 class="nav-h1"> Sugar & Sweet </h1>
    <ul class="nav-items">
      <li class="nav-li"><a class="nav-a" href="home"> Home </a></li>
      <li class="nav-li"><a class="nav-a" href="#aboutus"> About </a></li>
      <li class="nav-li"><a class="nav-a" href="#offers">Products </a></li>
      <li class="nav-li"><a class="nav-a" href="#contact"> Contact </a></li>
    </ul>
    <button class="hamburgermenu" @click="hamburgerMenu">
      <span id="line1"></span>
      <span id="line2"></span>
      <span id="line3"></span>
      <span id="exit"> X </span>
    </button>
  </nav>
</template>

<style scoped>
@import url("https://use.typekit.net/egb7qeb.css");

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.695); */
  background-color: white;
  position: absolute;
  top: 0;
  z-index: 99;
}

.nav-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.nav-li {
  font-family: "wreath", serif;
}

.nav-h1 {
  margin: 0;
  font-family: "wreath", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 36px;
  cursor: pointer;
  color: #D1005C;
  width: 350px;
  margin-left: 20px;
}

.nav-a {
  font-family: "wreath", serif;
  font-weight: 300;
  font-style: normal;
  font-size: 24px;
  cursor: pointer;
  color: #EF4D94;
  text-decoration: none;
}

.nav-a:hover {
  color: #F594BF;
}


.hamburgermenu {
  background-color: none;
  outline: none;
  border: none;
  background: none;
  display: none;
}

#line1 {
  width: 1.5em;
  height: 0.2em;
  background-color: #D1005C;
  margin-block: 2px;
  display: none;
}

#line2 {
  width: 1.5em;
  height: 0.2em;
  background-color: #D1005C;
  margin-block: 2px;
  display: none;
}

#line3 {
  width: 1.5em;
  height: 0.2em;
  background-color: #D1005C;
  margin-block: 2px;
  display: none;
}

#exit {
  display: none;
  font-size: 1.5em;
  font-family: arbotek, sans-serif;
  font-weight: 100;
  color: #D1005C;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }

  .nav-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    position: absolute;
    right: 0;
    width: 50%;
    top: 40px;
    background-color: white;
  }

  .nav-li {
    margin-right: 16px;
  }

  .hamburgermenu {
    display: block;
  }

  #line1 {
    display: block;
  }

  #line2 {
    display: block;
  }

  #line3 {
    display: block;
  }

  #exit {
    display: none;
  }

}
</style>