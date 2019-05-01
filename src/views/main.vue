<template>
  <div class="view-main">
    <navigation
      @import="selectFile"
      @save="saveFile"
      @export="exportFile"
    />
    <toolbar/>
    <div class="editor">
      <input type="file" ref="hook-import-file" class="hideMe" @change="importFile">
      <div class="code">
        <textarea
          v-model="code"
        ></textarea>
      </div>
      <div
        class="preview"
        :class="markdownCss"
      >
        <div class="markdown-body" v-html="html"></div>
      </div>
    </div>
  </div>
</template>


<script>
const fs = require('fs'),
      markdownpdf = require('markdown-pdf')

import navigation from '../components/navigation.vue'
import toolbar from '../components/toolbar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    navigation,
    toolbar,
  },

  computed: {
    ...mapGetters({
      getMarkdown: 'getMarkdown',
      html: 'getHtml',
      markdownCss: 'getCurrentStyle',
      filePath: 'getFilePath'
    }),

    code: {
       get () { return this.getMarkdown },
       set (value) { this.setCode(value) }
    }
  },

  methods: {
    ...mapActions({
      setCode: 'setCode',
      setFilePath: 'setFilePath',
    }),

    selectFile() {
      this.$refs['hook-import-file'].click()
    },

    importFile(e) {
      let file = e.target.files[0]
      this.setFilePath(file.path)
      fs.readFile(file.path, (err, data) => {
        if (err) throw err
        let body = new TextDecoder("utf-8").decode(data)
        this.setCode(body)
      })
    },

    saveFile() {
      fs.writeFile(this.filePath, this.code, (err) => {
        if (err) {
          return alert(err)
        }
        alert("The file was saved!")
      })
    },

    exportFile() {
      const filePdf = this.filePath.substring(0, this.filePath.length - 2) + 'pdf'
      fs.createReadStream(this.filePath)
        .pipe(markdownpdf())
        .pipe(fs.createWriteStream(filePdf))
    },
  }
}
</script>


<style lang="scss" scoped>
.view-main {
  position: relative;
  width: 100%;
  display: flex;
  overflow-y: hidden;
}

.editor {
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
  overflow: auto;
  padding: 10px 30px;
  display: block;
}

.hideMe {
  display: none;
}
</style>
