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
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides"
        class='slide'
        :key="slide.id">
        <h4> {{ slide.title }} </h4>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    image: String,
    project: String
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
</style>
