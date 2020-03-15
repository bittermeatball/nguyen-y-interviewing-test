<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import("@/common/Layout/Navbar.vue"),
    Footer: () => import("@/common/Layout/Footer.vue")
  }
};
</script>
<style lang="scss">
* {
  font-family: Arial;
  color: rgb(68, 68, 68);
}
body {
  margin: 0;
}
</style>
