<template lang="pug">
#app
  toolbar
  router-view
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Toolbar from '@/components/toolbar.vue'

@Component({
  components: {
    Toolbar,
  },
})
export default class App extends Vue {}
</script>
