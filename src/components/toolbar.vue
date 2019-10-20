<template lang="pug">
.toolbar
  .item.logo
    logo/
  .item
    p edit
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Logo from '@/components/logo.vue'

@Component({
  components: {
    Logo,
  },
})
export default class Toolbar extends Vue {}
</script>


<style scoped lang="sass">
.toolbar
  position: relative
  width: 100%
  height: 100%
  background: #24292e
  border-right: 2px solid #30373E

.item
  position: relative
  width: 100%
  height: 50px
  cursor: pointer
  &:hover
    background: #282D33

.logo
  position: sticky
  border-bottom: 2px solid #30373E
  svg
    position: absolute
    width: 30px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
