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

<!-- EDIT TO GET RID OF SWAP, ADD TIMER, REPLACE CONTENT AND KEEP TRANSITION FADE -->
<template>
  <div class='carousel-container carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides"
        class='slide'
        :key="slide.id">
        <img :src="slide.image" class="slide-image">
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
    slideNext() {
      // const first = this.slides.shift();
      // this.slides = this.slides.concat(first);
    },
    slidePrevious() {
      // const last = this.slides.pop();
      // this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style scoped lang="scss">
.carousel-container {
  // top: 0px;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // margin-bottom: 80px;
}
img {
  // width: 100vh;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  // align-items: center;
  // overflow: hidden;
}
.slide {
  opacity: 1;
  transition: transform 0.3s ease-in-out;
  // flex: 0 0 20em;
  // height: 20em;
  // margin: 1em;
  // width: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // border: 0.1em dashed #000;
  // border-radius: 50%;
}
.slide-image {
  width: 100vw;
}
// .slide:first-of-type {
//   opacity: 0;
// }
// .slide:last-of-type {
//   opacity: 0;
// }
</style>
