<template>
  <div id="app">
    <header>
      <nav class="navigation">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">Rólunk</router-link>
         <router-link to="/contact">Kapcsolat</router-link>
         <router-link to="/"><img src="images/logo_1920.jpg"  alt="JBubble logo"></router-link>
         
      </nav>
      
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

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    overflow-y:hidden;
    font-family: 'Oswald';
  }
  .content::-webkit-scrollbar {
  width: 8px;
  }
  
  .content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(173, 173, 173, 0.3);
  }
 
.content::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  outline: 1px solid rgb(196, 197, 197);
  border-radius: 5px;
  
}
  header {
    img {
    display: inline-block;
    width: 158px;
    margin-right: 48px;
    transform: scale(1.4);
    margin-top: 16px;
    }
  }
  .main_section {
    display: flex;
    width: 100vw;
    
  }
  .navigation {
    display: flex;
    height: 94px;
    background-color: #231F20;
    align-items: center;
    // width: calc(100vw - 158px);
    width: 100vw;
    overflow:hidden;
    a {
      display: inline-block;
      margin: 0 auto;
      text-decoration: none;
      color: #fff;
      font-size: 19px;
      letter-spacing: 2px;
    }
}
   
  .sidenav {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    background-color: rgb(139, 139, 139);
    img {
      height: 185px;
    }
  }
  .content {
    background-color: rgb(58, 58, 58);
    display: flex;
    width: 70%;
    height: 100vh;
    overflow-y: scroll !important;
    padding: 20px;
    line-height: 1.5;
    color: #fff;
    font-size: 20px;
  }
  .page {
    h3 {
      margin: 10px auto;
      text-align: center;
      width: 50%;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.616)
    }
    p {
      width: 70%;
      margin: 10px auto;
    }
  }
</style>
