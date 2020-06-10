<template>
  <div class="page">
    <div class="onlySm">
      <section id="top" class="slidesec">
      <vueper-slides
      ref="myVueperSlides"
      autoplay
      :pause-on-hover="pauseOnHover"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true">
      <vueper-slide
        v-for="(slide) in slides"
        :key="slide.id"
        :title="slide.title"
        :content="slide.content"
        :image="slide.image"
        />
      <!-- <template v-slot:pause>
        <i class="icon pause_circle_outline"></i>
      </template> -->
      </vueper-slides>
      <div>
        <h3>#jkoktelbubbletea</h3>
    </div>
    </section>
    <section class="baracksec">
      <img class="cetli" src="/images/section/Cetli1.png" width="100%" alt="Barack Tea">
      <div class="tea"><img src="/images/section/barack_tea.png" width="100%" alt="Barack Tea"></div>
    </section>

    <section class="lime">
      <img class="cetli" src="/images/section/Cetli2.png" alt="">
      <div class="tea"><img src="/images/section/Teafuvek.png" width="100%" alt=""></div>
    </section>

    <section class="korte">
      <img class="cetli" src="/images/section/cetli3.png" width="50%" alt="">
        <img class="osszetett" src="/images/section/osszetett.png" width="100%" alt="">
        
    </section>
  <section class="shop">
    <img class="cetli" src="/images/section/Cetli4.png" width="100%" alt="">
    
    <img class="utolsokep" src="/images/section/utolsofooldalkep.png" width="100%" alt="">    
  </section>
  <a href="#top" class="totop" ><i class="fas fa-chevron-up"></i></a>
  
    </div>
    <div class="onlyLg">
      <img class="cetli" src="/images/section/Cetli1.png" width="65%" alt="">
      <img src="/images/homeLg/felso.png" width="100%" alt="">

      <img class="cetli2" src="/images/section/cetli3.png" width="30%" alt="">
      <img src="/images/homeLg/kozepso.png" width="100%" alt="">
      <img class="cetli3" src="/images/section/Cetli2.png" alt="">

      <img class="alsoPic" src="/images/homeLg/also.png" width="100%" alt="">
      <img class="cetli4" src="/images/section/Cetli4.png" width="100%" alt="">
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import CategoryLink from '@/components/CategoryLink.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  
  name: 'home',
  components: { VueperSlides, VueperSlide },
  data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
  slides: [
    {
      id: 'slide-1',
      //title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          image: '/images/dia1.jpg',
    },
    {
      id: 'slide-2',
      //title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          image: '/images/dia2.jpg',
    },
    {
      id: 'slide-3',
      //title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          image: '/images/dia3.jpg',
    }
  ]
})
}
</script>
<style scoped>
.content {
  overflow: hidden;
}
  h3 {
    padding-bottom: 8px;
    border: none;
  }
</style>

