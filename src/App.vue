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
        <div class="topsoc">
        <a target="_blank" href="https://www.facebook.com/jkoktelbubbletea/"><i class="fab fa-facebook-f"></i></a>
        <a target="_blank" href="https://www.instagram.com/jkoktelbubbletea/"><i class="fab fa-instagram"></i></a>
        <a class="contact" target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4743db8da860d687:0xe6555099849f565b?utm_source=mstt_1">
<i class="fas fa-map-marked-alt"></i></a>
        </div>
         <router-link to="/">Home</router-link> 
         <router-link to="/about">Rólunk</router-link>
         <router-link to="/contact">Kapcsolat</router-link>
         <router-link to="/menu">Menü</router-link>
      </nav>
               <router-link to="/"><img src="images/logo.png"  alt="JBubble logo"></router-link>
    </header>
    <div class="main_section" v-on:click="clickClose()">
    <div class="sidenav">
      
     <div><router-link to="/Teak">Teák</router-link></div>
     <div><router-link to="/gyumolcsaroma">Gyümölcs Aromák</router-link></div>
     <div><router-link to="/tejesaroma">Tejes Aromák</router-link></div>
     <div><router-link  to="/gyumBubi">Gyümölcs Buborékok</router-link></div>
     <div><router-link  to="/zselek">Gyümölcs Zselék</router-link></div>
    </div> 
    <div class="content">
      <transition name="fade">
        <keep-alive>
      <router-view></router-view>
        </keep-alive>
    </transition> 
    </div>
    </div>
   <footer>
      
     <p>&copy; jkoktelbubbletea | 2020</p>
     
   </footer>
   <div class="footer">
     <div class="social_icons">
     <a target="_blank" href="https://www.facebook.com/jkoktelbubbletea/"><img src="images/PNG/facebook.png" /></a>
     </div>
     <p>&copy; jkoktelbubbletea | 2020</p>
     <div>
     <a target="_blank" href="https://www.instagram.com/jkoktelbubbletea/"><img src="images/PNG/instagram.png" /></a>
     </div>
   </div>
  </div>
  
</template>
<script>
  export default {
    data: function() {
      return {
        clicked: false
      }
      },
      mounted() {
        this.clickClose;
        this.onscroll;
        /* if (location.hash) {
  location.replace(location.hash.replace('#', ''))
} */
      },
      methods: {
      clickClose() {
        this.clicked = false;
      },
      onscroll() {
        let oldal = document.getElementsByClassName('page');
        console.log(oldal);
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
@import './assets/css/page.css';
</style>
