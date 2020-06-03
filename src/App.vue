<template>
  <div id="app">
                    <div class="red"></div>
    <header>
     
			<div class="menu-bar menu-bar-animated" @click="clicked = !clicked">
				<div class="menu-bar--bar"></div>
			</div>
      <nav class="navigation_mobile" v-show="clicked">
         <router-link to="/"><i class="fas fa-house-user"></i> Home</router-link> 
         <router-link to="/about"><i class="far fa-address-card"></i> Rólunk</router-link>
         <router-link to="/contact"><i class="far fa-envelope"></i> Kapcsolat</router-link>
         <router-link to="/menu"><i class="fas fa-book-open"></i> Menü</router-link>
      </nav>
      <nav class="navigation">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">Rólunk</router-link>
         <router-link to="/contact">Kapcsolat</router-link>
         <router-link to="/menu">Menü</router-link>
      </nav>
               <router-link to="/"><img src="images/logo_1920.jpg"  alt="JBubble logo"></router-link>
    </header>
    <div class="main_section" v-on:click="clickClose()">
    <div class="sidenav">
        
     <div><router-link to="/Teak">Tea</router-link></div>
     <div><router-link to="/gyumolcsaroma">Gyümölcs Aroma</router-link></div>
     <div><router-link to="/tejesaroma">Tejes Aroma</router-link></div>
     <div><router-link to="/gyumBubi">Gyümölcs Buborékok</router-link></div>
     <div><router-link to="/zselek">Gyümölcs Zselék</router-link></div>
    </div> 
    <div class="content">
      <router-view></router-view> 
    </div>
    </div>
   <footer>
     <div class="social_icons">
     <img src="images/PNG/facebook.png" />
     </div>
     <p>Bubble Tea | 2020</p>
     <div>
     <img src="images/PNG/instagram.png" />
     </div>
   </footer>
  </div>
  
</template>
<script>
  export default {
    data: function() {
      return {
        clicked: false
      }
      },

      created() {
        this.clickClose;
      },
      methods: {
      clickClose() {
        this.clicked = false;
      }
      }
  }
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/header.css';
@import './assets/css/main.css';
@import './assets/css/footer.css';
@import './assets/css/menu.css';
@import './assets/css/slides.css';
@import './assets/css/sections.css';

</style>
