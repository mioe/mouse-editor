<template lang="pug">
.toolbar(v-click-outside="toggleSubMenu")
  vuescroll(:ops="ops")
    .item.logo(@click="flags.subMenuOpened = true")
      logo/
    .item(v-for="(i, key) in itemsToolbar" :key="key")
      fa(:icon="i.icon")/
  .sub-menu(:class="{'open': flags.subMenuOpened}")
    vuescroll(:ops="ops")
      .item(v-for="i in 20" :key="i")
        fa(:icon="['far', 'clock']")/
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
import Logo from '@/components/logo.vue'
import ClickOutside from '@/helpers/click-outside.ts'

@Component({
  components: {
    Logo,
    vuescroll,
  },
  directives: {
    ClickOutside,
  },
})
export default class Toolbar extends Vue {
  private ops: any = {
    vuescroll: {},
    scrollPanel: {},
    rail: {
      size: '0',
    },
    bar: {
      size: '0',
    },
  }

  private itemsToolbar: any = [
    { icon: ['far', 'clock'], name: 'clock' },
  ]

  private flags: any = {
    subMenuOpened : false,
  }

  private toggleSubMenu() {
    this.flags.subMenuOpened = !this.flags.subMenuOpened
  }
}
</script>


<style scoped lang="sass">
.toolbar
  position: relative
  width: 100%
  height: 100vh
  background: #24292e
  & > div:first-of-type
    z-index: 2

.item
  width: 100%
  height: 50px
  cursor: pointer
  &:hover
    background: #0B55B8

.logo
  position: sticky
  top: 0
  border-bottom: 2px solid #30373E
  background: #24292e
  svg
    position: absolute
    width: 30px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

.sub-menu
  position: fixed
  top: 0
  left: -100%
  width: 300px
  height: 100vh
  background: rgba(36, 41, 46, .95)
  z-index: 1
  &.open
    left: 52px
</style>
