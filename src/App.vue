<template>
  <div id="app">
    <navigation/>
    <toolbar/>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import toolbar from './components/toolbar.vue'
export default {
  name: 'App',

  components: {
    navigation,
    toolbar,
  },
}
</script>


<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  display: flex;
  overflow-y: hidden;
}
</style>
