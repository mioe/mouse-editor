<template>
  <div class="page-default">
    <toolbar />
    <slot />
  </div>
</template>


<script>
import toolbar from '@/components/toolbar.vue'

export default {
  components: {
    toolbar
  }
}
</script>
