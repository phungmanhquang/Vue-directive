import Vue from "vue"

export default {
  bind(el) {
    el.addEventListener('click', () => {
      const start = window.getSelection().baseOffset
      const end = window.getSelection().focusOffset
      let content = el.innerText.substring(start, end)
      if (!content || content === "") return
      navigator.clipboard.writeText(content).then()
      Vue.$toast.success('Copied !')
    })
  }
}