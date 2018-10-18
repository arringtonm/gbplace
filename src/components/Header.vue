<template>
  <div class="header">
    <div class="header-interior">
      <img src="images/gbplacemakinglogolofi.png">
      <div id="nav" class="dropdown">
        <a href="#">Home</a> |
        <a href="#services" class="services-parent">Services</a> |
        <span class="projects-parent">
          <a href="#projects">Projects</a> |
          <div class="projects-content">
            <p v-for="project in projectsTOD" :key="project.key"> {{ project.title }}</p>
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
    projectsTDD: Object
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
.projects-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.services-parent:hover {
  .services-content {
    display: block;
  }
}
.projects-parent:hover .projects-content {
  display: block;
}
</style>
