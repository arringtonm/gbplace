<template>
  <div>
    <div class="block smallerblock">
      <h3>{{ project.title }}</h3>
    </div>
    <div class="block projectblock">
      <div class="left">
        <span class="titlelong">{{ project.titlelong }}</span><br>
        <span class="titlelong">{{ project.type }}</span>
        <p class="content">{{ project.content }}</p>
        <ul>
          <li v-for="item in project.bullets" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="right">
        <img :src="project.imagepath">
        <img v-if="project.imageextra" :src="project.imageextra">
        <!-- v:bind for selected image -->
        <span v-if="project.imagecredit" class="imagecredit">{{ project.imagecredit }}</span>
      </div>
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
.imagecredit {
  font-size: 0.75em;
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
    img {
      margin-bottom: 1em;
    }
  }
}
.smallerblock {
  margin-bottom: 2em;
}
.titlelong {
  font-weight: bold;
  margin-right: 10px;
}
img.project {
  width: 100vw;
}
</style>
