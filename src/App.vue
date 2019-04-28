<template>
  <div id="app">
    <navigation/>
    <toolbar/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import toolbar from './components/toolbar.vue'
export default {
  components: {
    navigation,
    toolbar
  }
}
</script>


<style lang="scss" scoped>
#app {
  position: relative;
}
</style>
