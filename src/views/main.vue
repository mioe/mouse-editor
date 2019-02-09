<template>
  <div class="view-main">
    <!-- toolbar -->
    <div class="tool dontTouchMe">
      <div class="tool-left">
        <div @click="selectFile" :class="{'is-active': body.length > 0}" class="btn-white-default">
          <fa icon="file-import"/>
          <p>Импорт md</p>
          <input type="file" ref="hook-import-file" class="hideMe" @change="importFile">
        </div>
        <div @click="flags.editor = !flags.editor" :class="{'is-active': flags.editor}" class="btn-white-default">
          <fa icon="mug-hot"/>
          <p>Редактор</p>
        </div>
      </div>
      <div class="logo">
        🐭
      </div>
      <div class="tool-right">
        <div class="btn-white-default">
          <fa icon="puzzle-piece"/>
          <p>Сохранить</p>
        </div>
        <div class="btn-white-default">
          <fa icon="file-export"/>
          <p>Експорт pdf</p>
        </div>
      </div>
    </div>
    <!-- toolbar !end -->

    <drag v-if="flags.editor"
      :w="optionsEditor.width"
      :h="optionsEditor.height"
      :x="optionsEditor.x"
      :y="optionsEditor.y"
      :draggable="optionsEditor.pushpin"
      :resizable="optionsEditor.pushpin"
      @dragging="onDragEditor" 
      @resizing="onResizeEditor"
    >
      <div class="editor" :class="{'is-opacity': optionsEditor.opacity}">
        <div class="tool-editor">
          <div @click="pushpinEditor" class="btn-black-mini">
            <fa icon="thumbtack"/>
          </div>
          <div @click="opacityEditor" class="btn-black-mini">
            <fa :icon="['far', 'eye']"/>
          </div>
        </div>
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
        height: 200,
        x: 0,
        y: 0,
        pushpin: true,
        opacity: false
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
    },

    onDragEditor(x,y) {
      this.optionsEditor.x = x
      this.optionsEditor.y = y
    },

    onResizeEditor(x, y, width, height) {
      this.optionsEditor.x = x
      this.optionsEditor.y = y
      this.optionsEditor.width = width
      this.optionsEditor.height = height
    },

    pushpinEditor() {
      this.optionsEditor.pushpin = !this.optionsEditor.pushpin
    },

    opacityEditor() {
      this.optionsEditor.opacity = !this.optionsEditor.opacity
    }
  },
}
</script>