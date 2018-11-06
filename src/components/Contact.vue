<template>
  <div id="contact">
    <div class="block upmargin">
      <img src="images/1GBArringtonBW-min.jpg" alt="GB Arrington" class="gbarrington">
      <h3>Contact Us</h3>
        <form action="https://formspree.io/arrington.gb@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="_replyto" placeholder="Email">
        <input type="submit" value="Send">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
