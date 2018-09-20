<template>
  <div class="carousel-container carousel-view">
    <transition name="fade">
      <img :src="slides[this.selectedSlide].image" alt="" :key="slides[this.selectedSlide].id" class="slide-image" >
    </transition>
    <p>{{ slides[selectedSlide].caption }}</p>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    project: String,
    slides: Array
  },
  data: function() {
    return {
      selectedSlide: 0
    };
  },
  methods: {
    switchSlide: function() {
      this.selectedSlide = this.selectedSlide == 0 ? 1 : 0;
    }
  },
  created: function() {
    // setInterval(()=>{ this.switchSlide() }, 5000)
  }
};
</script>

<style scoped lang="scss">
.carousel-container {
  margin-bottom: 80px;
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
  transition: transform 0.5s ease-in-out;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
