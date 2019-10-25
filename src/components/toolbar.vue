<template lang="pug">
.toolbar.dontTouchMe(v-click-outside="closeSubMenu")
  .tools
    vuescroll(:ops="ops")
      .item.logo(@click="toggleSubMenu")
        logo/
      .group(v-for="(g, key) in itemsToolbar" :key="key")
        .item(v-for="(i, k) in g" :key="k")
          fa(:icon="i.icon")/
  .sub-menu(:class="{'open': flags.subMenuOpened}")
    vuescroll(:ops="ops")
      .group(v-for="(g, key) in itemsSubMenu" :key="key")
        .item(v-for="(i, k) in g" :key="k").
          {{ i.name }}
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
    [
      { icon: ['fa', 'grin-hearts'], name: 'grin-hearts' },
      { icon: ['fa', 'anchor'], name: 'strikethrough' },
      { icon: ['far', 'image'], name: 'image' },
      { icon: ['fa', 'code'], name: 'image' },
    ],
    [
      { icon: ['fa', 'bold'], name: 'bold' },
      { icon: ['fa', 'strikethrough'], name: 'strikethrough' },
      { icon: ['fa', 'italic'], name: 'clock' },
      { icon: ['fa', 'quote-left'], name: 'quote-left' },
    ],
    [
      { icon: ['fa', 'list-ul'], name: 'bold' },
      { icon: ['fa', 'list-ol'], name: 'strikethrough' },
      { icon: ['fa', 'minus'], name: 'clock' },
    ],
  ]

  private itemsSubMenu: any = [
    [
      { name: 'New File' },
      { name: 'Open File..' },
      { name: 'Save' },
      { name: 'Save As..' },
      { name: 'Export File to PDF' },
    ],
    [
      { name: 'Settings' },
      { name: 'Documentation Page' },
      { name: 'Welcome Page' },
    ],
    [
      { name: 'About Mouse Editor' },
      { name: 'Exit' },
    ],
  ]

  private flags: any = {
    subMenuOpened : false,
  }

  private toggleSubMenu() {
    this.flags.subMenuOpened = !this.flags.subMenuOpened
  }

  private closeSubMenu() {
    this.flags.subMenuOpened = false
  }
}
</script>


<style scoped lang="sass">
.toolbar
  position: relative

.item
  width: 100%
  height: 50px
  cursor: pointer
  color: #fff
  &:hover
    background: #0B55B8

.group
  border-bottom: 2px solid #30373E

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

.tools
  position: relative
  width: 100%
  height: 100vh
  background: #24292e
  z-index: 2
  .item
    display: flex
    justify-content: center
    align-items: center

.sub-menu
  position: fixed
  top: 0
  left: -300px
  width: 300px
  height: 100vh
  background: rgba(36, 41, 46, .95)
  z-index: 1
  &.open
    left: 52px
    .item
      display: flex
      justify-content: flex-start
      align-items: center
      padding:
        left: 15px
</style>
