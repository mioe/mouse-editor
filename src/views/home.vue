<template>
  <div class="home-page">
    <toolbar />
    <input type="file" @change="test" >
    <button @click="read">go</button>
    <div v-html="compiledMarkdown" class="markdown-body"></div>
  </div>
</template>


<script>
const marked = require('marked')
const fs = require('fs')

import toolbar from '@/components/toolbar.vue'

export default {
  data() {
    return {
      file_path: null || './readme.md',
      input: '# test'
    }
  },

  computed: {
    compiledMarkdown() {
      return marked(this.input)
    }
  },

  methods: {
    test(e) {
      this.file_path = e.target.files[0]
    },

    read() {
      fs.readFile(this.file_path.path, (err, data) => {
        if (err) throw err;
        let text = new TextDecoder("utf-8").decode(data)
        this.input = text
      });
    }
  },

  components: {
    toolbar
  }
}
</script>