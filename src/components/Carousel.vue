<!-- <template>
  <div class="hello">
    <div class="carousel-container">
      <img :src="image">
      <div class="overlay">
        <p>"GB’s work changed the face of transit and land use in Portland"</p>
        <p>Presidential Design Award, The White House, Westside Light Rail</p>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class='carousel-container'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides"
        class='slide'
        :key="slide.id">
        <img :src="slide.image">
        <p>{{ slide.caption }}</p>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="slidePrevious">prev</button>
      <button class='carousel-controls__button' @click="slideNext">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    project: String,
    slides: Array
  },
  methods: {
    slideNext () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    slidePrevious () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
};
</script>

<style scoped lang="scss">
.carousel-container {
  top: 0px;
  position: relative;
  margin-bottom: 80px;
}
img {
  width: 100%;
}
.overlay {
  background: rgba(00, 00, 00, 0.5);
  width: 100%;
  position: absolute;
  bottom: 7px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.slide {
  // flex: 0 0 20em;
  // height: 20em;
  // margin: 1em;
  display: flex;
  opacity: 1;
  justify-content: center;
  // align-items: center;
  // border: 0.1em dashed #000;
  // border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>
