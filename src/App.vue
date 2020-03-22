<template>
  <div id="app">
    <header>
     
			<div class="menu-bar menu-bar-animated" @click="clicked = !clicked">
				<div class="menu-bar--bar"></div>
			</div>
      <nav class="navigation" :class="{show : clicked}">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">Rólunk</router-link>
         <router-link to="/contact">Kapcsolat</router-link>
      </nav>
                <div class="red"></div>
               <router-link to="/"><img src="images/logo_1920.jpg"  alt="JBubble logo"></router-link>

    </header>
    <div class="main_section">
    <div class="sidenav">
        
     <div><router-link to="/Teak">Teák</router-link></div>
     <div><router-link to="/gyumolcsaroma">Gyümölcs aroma</router-link></div>
     <div><router-link to="/tejesaroma">Tejes aroma</router-link></div>
     <div><router-link to="/Teak">Gyümölcs buborékok</router-link></div>
     <div><router-link to="/Teak">Zselék</router-link></div>
    </div> 
    <div class="content">
      <router-view></router-view> 
    </div>
    </div>
   <footer>
     <img src="images/PNG/facebook.png" />
     <img src="images/PNG/instagram.png" />
   </footer>
  </div>
  
</template>
<script>
  export default {
    data: function() {
      return {
        clicked: false
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
