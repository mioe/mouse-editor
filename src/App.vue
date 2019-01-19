<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import defaultLayout from '@/layouts/default.vue'
import clearLayout from '@/layouts/clear.vue'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout'
    },
  },
  components: {
    defaultLayout,
    clearLayout,
  }
}
</script>
