<template>
  <div class="header">
    <div class="header-interior">
      <img src="images/gbplacemakinglogolofi.png">
      <div id="nav" class="dropdown">
        <a href="#">Home</a> |
        <span class="services-parent">
          <a href="#services" class="services-parent">Services</a> |
          <div class="services-content">
            <p><a href="#projectsTOD">Transit Oriented Development</a></p>
            <p><a href="#projectsTDD">Transit Designed for Development</a></p>
          </div>
        </span>
        <!-- TOD projects menu items -->
        <span class="projects-parent">
          <a href="#projectsTOD">Projects</a> |
          <div class="projects-content">
            <!-- <p class="nonselect">Transit Oriented Development</p> -->
            <p v-for="project in projectsTOD" :key="project.key"><a href="#projectsTOD" @click="selectedTODProject = project"> {{ project.title }}</a></p>
            <!-- <p class="nonselect">Transit Designed for Development</p> -->
            <hr>
            <p v-for="project in projectsTDD" :key="project.key"><a href="#projectsTDD" @click="selectedTDDProject = project"> {{ project.title }}</a></p>
          </div>
        </span>

        <a href="#contact">Contact</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    projectsTOD: Object,
    projectsTDD: Object,
    selectedTODProject: Object,
    selectedTDDProject: Object
  }
};
</script>

<style scoped lang="scss">
.header {
  top: 0px;
  background-color: white;
  // border-bottom: 1px solid #aaaaaa;
  .header-interior {
    background-color: white;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
}
#nav {
  margin-right: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}
.projects-content,
.services-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 450px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  a {
    font-weight: 400 !important;
  }
}
.services-parent:hover .services-content {
  display: block;
}
.projects-parent:hover .projects-content {
  display: block;
}
.projects-content,
.services-content {
  a {
    text-decoration: none;
    line-height: 2em;
  }
}
.projects-content,
.services-content {
  a:hover {
    text-decoration: underline;
  }
}
p.nonselect {
  color: grey;
}
hr {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
