<template>
  <div class="carousel-container carousel-view">
    <transition-group name="fade" mode="out-in">
      <img v-if="this.selectedSlide == 0" :src="slides[0].image" alt="" class="slide-image" key="0">
      <img v-else-if="this.selectedSlide == 1" :src="slides[1].image" alt="" class="slide-image" key="1">
      <img v-else-if="this.selectedSlide == 2" :src="slides[2].image" alt="" class="slide-image" key="2">
    </transition-group>
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
      if (this.selectedSlide == 2) {
        this.selectedSlide = 0;
      } else {
        this.selectedSlide++;
      }
    }
  },
  created: function() {
    setInterval(() => {
      this.switchSlide();
    }, 9500);
  }
};
</script>

<style scoped lang="scss">
.carousel-container {
  margin-bottom: 80px;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
}
.slide-image {
  width: 100vw;
}
.fade-enter-active {
  transition: opacity 1s ease-in;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
