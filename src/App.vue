<template>
  <div id="app">
    <navigation/>
    <toolbar/>
    <editor/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import toolbar from './components/toolbar.vue'
import editor from './components/editor.vue'
export default {
  components: {
    navigation,
    toolbar,
    editor,
  }
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
