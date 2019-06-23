<template>
  <div class="view">
    <navigation/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import navigation from '../components/navigation.vue';

@Component({
  components: {
    navigation,
  },
})
export default class Main extends Vue {}
</script>
