<template>
  <div class="view-main">
    <!-- toolbar -->
    <div class="tool">
      <div @click="selectFile" class="btn-white-default">
        <fa icon="file-import"/>
        <p>Импорт md</p>
        <input type="file" ref="hook-import-file" class="hideMe" @change="importFile">
      </div>
    </div>
    <!-- toolbar !end -->

    <vue-draggable-resizable>
      <div class="editor">
        <textarea v-model="body"></textarea>
      </div>  
    </vue-draggable-resizable>

    <div v-html="compiledMarkdown" class="markdown-body"></div>
  </div>
</template>


<script>
const marked = require('marked')
const fs = require('fs')

export default {
  computed: {
    body: {
      get () { return this.$store.getters.getBody }, 
      set (value) { this.$store.commit('changeBody', value) }
    },

    compiledMarkdown() {
      return marked(this.body)
    }
  },


  methods: {
    selectFile() {
      this.$refs['hook-import-file'].click()
    },

    importFile(e) {
      let file = e.target.files[0]
      fs.readFile(file.path, (err, data) => {
        if (err) throw err
        let body = new TextDecoder("utf-8").decode(data)
        this.$store.dispatch('importBody', body)
      });
    }
  },
}
</script>