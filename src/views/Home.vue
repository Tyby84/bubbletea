<template>
  <div class="page">

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
     />
  <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
</vueper-slides>
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
      title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
      content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
    },
    {
      id: 'slide-2',
      title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
      content: '<img src="/images/newBg.png" width="60%" alt="J Bubble Tea">'
    },
    // Other slides...
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

