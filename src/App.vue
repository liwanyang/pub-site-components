<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
  setup() {
    return { }
  },
  mounted() {
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (clientWidth > 320) {
            win.RATE = clientWidth / 640;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
              docEl.style.fontSize = "100px";
            } else {
              docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
            }
          }
        };

      if (!doc.addEventListener) return;
      recalc();
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);

    // window.addEventListener("scroll", this.handleScroll, false);
  },
  unmounted() {
    // if (this.isIE11()) {
    //   window.removeEventListener("scroll", this.handleScroll);
    // }
  },
}
</script>

<style>
html, body,#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
