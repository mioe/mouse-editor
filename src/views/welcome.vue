<template lang="pug">
.view-welcome
  p test
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Welcome extends Vue {}
</script>


<style scoped lang="sass">
.view-welcome
  background: #eee
</style>
