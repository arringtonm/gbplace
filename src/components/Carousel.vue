<template>
  <div>
    <div class="carousel-container carousel-view">
      <img :src="slides[0].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 0}">
      <img :src="slides[1].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 1}">
      <img :src="slides[2].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 2}">
    </div>
    <div class="quotes-holder">
      <p class="caption">{{ slides[selectedSlide].caption }}</p>
      <p>{{ slides[selectedSlide].captionsayer }}</p>
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
  margin-bottom: 1em;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 45vw;
}
.quotes-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.slide-image {
  position: absolute;
  top: 1;
  left: 1;
  opacity: 0;
  width: 100vw;
  height: 45vw;
  transition: all 2s;
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
.caption {
  margin-top: 1em;
  font-size: 1.5em;
  font-weight: 400;
}
.slide_visible {
  opacity: 1;
}

</style>
