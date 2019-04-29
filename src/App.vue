<template>
  <div id="app">
    <navigation/>
    <toolbar/>
    <div class="editor">
      <div class="code">
        <textarea
          v-model="code"
        ></textarea>
      </div>
      <div class="preview" v-html="html"></div>
    </div>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import toolbar from './components/toolbar.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',

  components: {
    navigation,
    toolbar,
  },

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
#app {
  position: relative;
  width: 100%;
  display: flex;
  overflow-y: hidden;
}

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
