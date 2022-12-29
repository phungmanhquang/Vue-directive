import store from "@/store"

export default {
  bind(el) {
    el.addEventListener('contextmenu', (e) => {
      const top = e.clientY + 10
      const left = e.clientX + 5

      const start = window.getSelection().baseOffset
      const end = window.getSelection().focusOffset
      let content = el.innerText.substring(start, end)

      if (!content || content === '') return

      store.commit('SET_SEARCH_LINE', {
        keyWord: content,
        top,
        left
      })
      store.commit('TOGGLE_SHOW_SEARCH_LINE')
    })
  }
}