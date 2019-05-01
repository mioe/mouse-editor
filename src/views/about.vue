<template>
  <div class="view view-about">
    <top-header :title="'About'"/>
    <div class="view-body">
      hello
    </div>
  </div>
</template>


<script>
import topHeader from '../components/header.vue'
export default {
  components: {
    topHeader
  }
}
</script>
