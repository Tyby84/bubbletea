<template>
  <div id="app">
    <header>
      <nav class="navigation">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">About</router-link>
         
      </nav>
      <img src="/images/logo_1920.jpg"  alt="JBubble logo">
    </header>
    <div class="main_section">
    <div class="sidenav">
        <router-link to="/Teak"><img src="/images/ananasz_aroma.png" alt=""></router-link>
        <router-link to="/Teak"><img src="/images/ananasz_aroma.png" alt=""></router-link>
        <router-link to="/Teak"><img src="/images/ananasz_aroma.png" alt=""></router-link>
        <router-link to="/Teak">Gyumolcs iz</router-link>
        <router-link to="/Teak">Teljes iz</router-link>
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
  header {
    display: flex;
    width: 100vw;
    .img_wrap {
      
    }
    img {
      display: inline-block;
      width: 158px;
    }
  }
  .main_section {
    display: flex;
    width: 100vw;
  }
  .navigation {
    display: flex;
    height: 17vh;
    background-color: #231F20;
    align-items: center;
    width: 90%;
    a {
      display: inline-block;
      margin: 0 auto;
      text-decoration: none;
      display: inline-block;
      color: #fff;
      
    }
}
   
  .sidenav {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 83vh;
    background-color: rgb(139, 139, 139);
    img {
      height: 270px;
    }
  }
  .content {
    background-color: rgb(58, 58, 58);
    display: flex;
    width: 70%;
  }
</style>
