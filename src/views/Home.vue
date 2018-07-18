<template>
  <div class="home">
    <Carousel/>
    <div class="block">
      <h3>
        Transformative experience you can count on.
      </h3>
      <p>GB Arrington is one of the world’s most respected innovators in Transit Oriented development (TOD). GB’s focus is in strategically forging the link between transit and development to catalyze community revitalization, resiliency and place making. GB brings the insights and knowledge garnered from four decades of successfully shaping public policies, land use plans and transit projects at the scale of the region, the corridor and individual sites.</p>

    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  }
};
</script>

<style lang="scss">
.block {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.home {
  // width: 1000px;
  // width: minmax(50px,150px);
  // height: 100vh;
  // width: 100vw;
  // margin-left: auto;
  // margin-right: auto;
}
h3 {
  margin-bottom: 20px;
}
</style>
