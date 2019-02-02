<template>
  <div class="view-main">
    <!-- toolbar -->
    <div class="tool">
      <div @click="selectFile" :class="{'is-active': body.length > 0}" class="btn-white-default">
        <fa icon="file-import"/>
        <p>Импорт md</p>
        <input type="file" ref="hook-import-file" class="hideMe" @change="importFile">
      </div>
      <div @click="flags.editor = !flags.editor" :class="{'is-active': flags.editor}" class="btn-white-default">
        <fa icon="mug-hot"/>
        <p>Редактировать файл</p>
      </div>
    </div>
    <!-- toolbar !end -->

    <drag v-if="flags.editor">
      <div class="editor"
        :w="optionsEditor.width"
        :h="optionsEditor.height"
      >
        <textarea v-model="body"></textarea>
      </div>  
    </drag>

    <div v-html="compiledMarkdown" class="markdown-body"></div>
  </div>
</template>


<script>
const marked = require('marked')
const fs = require('fs')

export default {
  data() {
    return {
      optionsEditor: {
        width: 200,
        height: 200
      },

      flags: {
        editor: false
      }
    }
  },

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