<template>
  <div class="editor">
    <div class="code">
      <textarea
        v-model="code"
      ></textarea>
    </div>
    <div class="preview"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      code: ''
    }
  }
}
</script>


<style lang="scss" scoped>
.editor {
  position: relative;
  width: calc(100% - 128px);
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.code {
  position: relative;
  width: 100%;
  height: 100vh;
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
}
</style>
