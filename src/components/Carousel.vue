<template>
  <div class="hello">
    <div class="carousel-container">
      <img :src="image">
      <!-- {{ image }} -->
      <div class="overlay">
        <p>"GB’s work changed the face of transit and land use in Portland"</p>
        <p>Presidential Design Award, The White House, Westside Light Rail</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-container {
  top: 0px;
  position: relative;
  margin-bottom: 50px;
  // border-bottom: 12px solid #aaaaaa;
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
