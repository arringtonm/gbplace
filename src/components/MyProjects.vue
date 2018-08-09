<template>
  <div>
    <img :src="project.imagepath" class="project">
    <span v-if="project.imagecredit">{{ project.imagecredit }}</span>
    <h2>{{ project.title }}</h2>
    <span class="titlelong">{{ project.titlelong }}</span><br>
    <span class="type">{{ project.type }}</span>
    <p class="content">{{ project.content }}</p>
    {{  }}
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  props: {
    // image: String,
    project: Object
  },
  data: function() {
    return {
      // project: '',
      // bart: {
      //   title: 'BART Stations',
      //   titlelong: 'BART 21st Century Stations',
      //   type: 'Transit Designed For Development',
      //   content: "GB has a track record of helping clients move in a new direction in response to changing needs and trends. For BART, GB developed a transformational strategy guiding how BART connects to the community and creates people places while updating and modernizing its facilities. With its roots in the 1960s BART was designed to serve the bygone needs of a different era. Meeting the contemporary needs of tomorrow’s riders and a changing region required breaking the old mold. Twenty-first century stations use TOD and place making to help drive change while accomplishing three objectives: making transit work, connecting transit to the community and creating places people want to be. GB came up with a design toolbox and evolutionary station prototypes that provide practical and aspirational examples of how BART can evolve into a 21st century system.",
      //   imagepath: 'images/ART.jpg',
      //   imagecredit: false
      // }
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
