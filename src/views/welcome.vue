<template lang="pug">
.view-welcome
  h1 Welcome!
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Welcome extends Vue {}
</script>


<style scoped lang="sass">
.view-welcome
  background: #24292e
  display: flex
  justify-content: center
  align-items: center
  color: #fff
</style>
