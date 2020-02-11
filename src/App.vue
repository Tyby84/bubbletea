<template>
  <div id="app">
    <header>
      <nav class="navigation">
         <router-link to="/">Home</router-link> 
         <router-link to="/about">About</router-link>
      </nav>
    </header>
    <div class="main_section">
    <div class="sidenav">
        <router-link to="/Teak">Teak</router-link>
        <router-link to="/Teak">Gyumolcs iz</router-link>
        <router-link to="/Teak">Teljes iz</router-link>
    </div> 
    <div class="content">
      <router-view></router-view> 
    </div>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main_section {
    display: flex;
    width: 100vw;
  }
  .navigation {
    background: url('assets/logo_1920.jpg') no-repeat 90% 38%;
    max-width: 100vw;
    height: 17vh;
    background-size: 20%;
    background-color: #231F20;
}
   
  .sidenav {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 83vh;
    background-color: rgb(139, 139, 139);
  }
  .content {
    background-color: rgb(58, 58, 58);
    display: flex;
    width: 70%;
  }
</style>
