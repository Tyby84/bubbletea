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
        <router-link to="/Teak"><img src="images/ananasz_aroma.png" alt=""></router-link>
        <router-link to="/Teak"><img src="images/ananasz_aroma.png" alt=""></router-link>
        <router-link to="/Teak"><img src="images/ananasz_aroma.png" alt=""></router-link>
        <!-- <router-link to="/Teak">Gyumolcs iz</router-link> -->
        <!-- <router-link to="/Teak">Teljes iz</router-link> -->
    </div> 
    <div class="content">
      <router-view></router-view> 
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
      
    }
  }
</script>

<style>
@import './assets/css/header.css';

</style>
