<template>
  <div id="app">
    <div class="header">
      <div class="header-interior">
        <img src="./assets/gbplacemakinglogolofi.png">

        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/services">Services</router-link> |
          <router-link to="/contact">Contact</router-link>
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
  // border-top: 12px solid #aaaaaa;
  // position: fixed;
  top: 0px;
  // height: 100px;
  // z-index: 5000;
  // background: linear-gradient(to right, white, rgba(255,255,255,0.5)) ;
  // background: linear-gradient(to right, #aaaaaa 50%, #ffffff 50%);
  background-color: white;
  // width: 1000px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: space-between;

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
</style>
