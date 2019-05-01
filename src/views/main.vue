<template>
  <div class="view-main">
    <div class="code">
      <textarea
        v-model="code"
      ></textarea>
    </div>
    <div class="preview" v-html="html"></div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getMarkdown: 'getMarkdown',
      html: 'getHtml'
    }),

    code: {
       get () { return this.getMarkdown },
       set (value) { this.setCode(value) }
    }
  },

  methods: {
    ...mapActions({
      setCode: 'setCode'
    })
  }
}
</script>


<style lang="scss" scoped>
.view-main {
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.code {
  position: relative;
  width: 100%;
  height: 100%;
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    background: #fafbfc;
    border: none;
    border-right: 1px solid #e1e4e8;
  }
}

.preview {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
