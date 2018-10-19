<template>
  <div>
    <div class="carousel-container carousel-view">
      <img :src="slides[0].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 0}">
      <img :src="slides[1].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 1}">
      <img :src="slides[2].image" class="slide-image" :class="{ slide_visible : this.selectedSlide == 2}">
      <div class="quotes-holder">
        <p class="caption">{{ slides[selectedSlide].caption }}</p>
        <p>{{ slides[selectedSlide].captionsayer }}</p>
      </div> <!-- quotes-holder -->
    </div> <!-- carousel-container and carousel-view -->

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
  margin-bottom: 100px;
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
  z-index: 2;
  margin-top: auto;
  // margin-bottom: auto;
  color: white;
  background-color: rgba(00,00,00,0.5);
  // box-shadow: 0px 0px 20px 10px rgba(00,00,00,0.5);
  padding: 1em;
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
.caption, .captionsayer {
  // margin-top: 1em;
  font-size: 2em;
  font-weight: 400;
  // background-color: rgba(00,00,00,0.5);
  // box-shadow: 0px 0px 20px 10px rgba(00,00,00,0.5);
}
.captionsayer {
  font-size: 1em;
}
.slide_visible {
  opacity: 1;
}

</style>
