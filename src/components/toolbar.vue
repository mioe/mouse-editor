<template lang="pug">
.toolbar
  vuescroll
    .item.logo
      logo/
    .item(v-for="i in 20" :key="i")
      p {{ i }}
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
import Logo from '@/components/logo.vue'

@Component({
  components: {
    Logo,
    vuescroll,
  },
})
export default class Toolbar extends Vue {}
</script>


<style scoped lang="sass">
.toolbar
  position: relative
  width: 100%
  height: 100vh
  background: #24292e

.item
  width: 100%
  height: 50px
  cursor: pointer
  background: #24292e
  &:hover
    background: #282D33

.logo
  position: sticky
  top: 0
  border-bottom: 2px solid #30373E
  svg
    position: absolute
    width: 30px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
