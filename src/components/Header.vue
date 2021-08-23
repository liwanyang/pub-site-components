<template>
    <section class="header">
        <header class="site-header" @click="goHome">
            <img src="../assets/images/pub-dev-logo.svg" alt="">
        </header>
    </section>
</template>
<script>
export default {
    methods: {
        goHome() {
            this.$router.push({name: "home"})
        }
    }
}
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    .site-header {
      cursor: pointer;
      height: 0.5rem;
      background-color: #1c2834;
      display: flex;
      img {
        width: 135px;
        margin-left: 50px;
      }
    }
  }
</style>