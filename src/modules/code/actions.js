export const actions = {
  setCode({ commit }, code) {
    commit('setMarkdown', code)
    commit('setHtml', code)
  }
}
