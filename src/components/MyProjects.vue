<template>
  <div class="block projectblock">
    <div class="left">
      <h3>{{ project.title }}</h3>
      <span class="titlelong">{{ project.titlelong }}</span><br>
      <span class="type">{{ project.type }}</span>
      <p class="content">{{ project.content }}</p>
      <ul>
        <li v-for="item in project.bullets" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right">
      <img :src="project.imagepath">
      <!-- v:bind for selected image -->
      <span v-if="project.imagecredit">{{ project.imagecredit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  props: {
    project: Object
  },
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  margin-left: 1em;
}
.projectinfo {
  display: flex;
  flex-direction: row;
}
.projectblock {
  width: 1000px;
  display: flex;
  flex-direction: row;
  img {
    width: 600px;
  }
  .left {
    width: 300px;
    margin-right: 40px;
  }
  .right {
    display: flex;
    flex-direction: column;
  }
}
.titlelong {
  font-weight: bold;
  margin-right: 10px;
}
img.project {
  width: 100vw;
}
</style>
