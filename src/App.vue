<template>
  <div id="app">
    <div class="header">
      <div class="header-interior">
        <img src="images/gbplacemakinglogolofi.png">
        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/services">Services</router-link> |
          <router-link to="/projects">Projects</router-link> |
          <router-link to="/team">Team</router-link> |
          <router-link to="/contact">Contact</router-link>
        </div> -->
        <div id="nav">
        <!-- <div id="nav" class="dropdown"> -->

          <a href="#">Home</a> |
          <!-- <a href="#services">Services</a> | -->
          <a href="#projects">Projects</a> |
          <a href="#contact">Contact</a>
          <div class="dropdown-content">
            <span>Item 1</span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
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
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#nav {
  margin-right: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 400px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
