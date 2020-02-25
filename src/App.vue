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
    display: flex;
    background-color: #231F20;
    justify-content: space-between;
    height: 100px;
    img {
    display: inline-block;
    width: 158px;
    margin-right: 48px;
    transform: scale(1.4);
    height: 100px;
    }
  }
  .main_section {
    display: flex;
    width: 100vw;
    
  }
  .navigation {
    opacity: 0;
    display: flex;
    flex-direction: column;
    border-radius: 22px 0px 22px 0px;
    background-color: rgba(22, 68, 167, 0.8);
    align-items: center;
    width: 150px;
     margin: 31px 0px 0px 60px;
    z-index: 8; 
    height: fit-content;
    padding: 5px 20px 50px 20px;  
    a {
      display: inline-block;
      margin: 0px auto 5px auto;
      text-decoration: none;
      color: #fff;
      font-size: 19px;
      letter-spacing: 2px;
    }
}
   .show {
      opacity: 1;
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
    z-index: 99;
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
  .menu-bar {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 2rem;
		left: 2rem;
		z-index: 20;
		cursor: pointer;
		transition: transform .3s ease-out;
		animation: barUp 2s ease-out 1s;
		animation-fill-mode: backwards;
		 
	&:hover {
   
	}
		
		&::before {
			content: "";
			position: absolute;
			top:8px;
			left:0;
			width: 20px;
			height: 3px;
			background-color: #fff;
			transition: all .3s ease-out;
			
		}
		&--bar{
			
			position: absolute;
			top:0px;
			left:0;
			width: 20px;
			height: 3px;
			background-color: #fff;
			transition: all .3s ease-out;
	}
			
			&::after {
			content: "";
			position: absolute;
			top:16px;
			left:0;
			width: 20px;
			height: 3px;
			background-color: #fff;
				transition: all .3s ease-out;
			}
			
		
	&--close {
		&::before {
			
				transform: rotate(-45deg);
				top: 5px;
				background-color: #fff;
			}
		.menu-bar--bar {
			
			transform: rotate(45deg);
			top: 5px;
			background-color: #fff;
		}
		&::after {
				opacity: 0;
			}
		
	}
	
	}
</style>
