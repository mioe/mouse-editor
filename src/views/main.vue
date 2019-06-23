<template>
  <div class="view">
    <logo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import logo from '../components/logo.vue';

@Component({
  components: {
    logo,
  },
})
export default class Main extends Vue {}
</script>
