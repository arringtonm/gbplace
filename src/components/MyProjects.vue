<template>
  <div>
    <div class="block">
      <h3>{{ project.title }}</h3>
      <span class="titlelong">{{ project.titlelong }}</span><br>
      <span class="type">{{ project.type }}</span>
      <p class="content">{{ project.content }}</p>
    </div>
    <img :src="project.imagepath" class="project">
    <!-- v:bind for selected image -->
    <span v-if="project.imagecredit">{{ project.imagecredit }}</span>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  props: {
    project: Object
  },
  data: function() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.titlelong {
  font-weight: bold;
  margin-right: 10px;
}
img.project {
  width: 100vw;
}
</style>
