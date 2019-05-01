const marked = require('marked')

export const mutations = {
  setMarkdown(state, payload) {
    state.markdown = payload
  },

  setHtml(state, payload) {
    state.html = marked(payload)
  },

  setFilePath(state, payload) {
    state.filePath = payload
  },
}
