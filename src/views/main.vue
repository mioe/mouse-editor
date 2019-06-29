<template>
  <div class="view main-view">
    <navigation/>
    <toolbar/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import navigation from '../components/navigation.vue';
import toolbar from '../components/toolbar.vue';

@Component({
  components: {
    navigation,
    toolbar,
  },
})
export default class Main extends Vue {}
</script>
