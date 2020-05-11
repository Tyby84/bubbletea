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
      </nav>
      <nav class="navigation">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">Rólunk</router-link>
         <router-link to="/contact">Kapcsolat</router-link>
      </nav>
               <router-link to="/"><img src="images/logo_1920.jpg"  alt="JBubble logo"></router-link>

    </header>
    <div class="main_section" v-on:click="clickClose()">
    <div class="sidenav">
        
     <div><router-link to="/Teak">Teák</router-link></div>
     <div><router-link to="/gyumolcsaroma">Gyümölcs aroma</router-link></div>
     <div><router-link to="/tejesaroma">Tejes aroma</router-link></div>
     <div><router-link to="/Teak">Gyümölcs buborékok</router-link></div>
     <div><router-link to="/zselek">Zselék</router-link></div>
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

</style>
