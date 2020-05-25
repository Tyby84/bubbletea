<template>
  <div class="page">
    <section class="slidesec">
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
      <div class="cetli"><img src="/images/section/Cetli1.png" width="100%" alt="Barack Tea"></div>
      <div class="tea"><img src="/images/section/barack_tea.png" width="100%" alt="Barack Tea"></div>
      
    </section>
    <section class="lime">
      <div><img src="/images/section/Cetli2.png" width="100%" alt=""></div>
      <div><img src="/images/section/Teafuvek.png" width="100%" alt=""></div>
    </section>
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

