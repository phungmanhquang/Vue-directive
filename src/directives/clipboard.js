import Vue from 'vue'

export default {
  bind(el, bind) {
    el.addEventListener('click', () => {
      let content = ''
      if (bind.value) {
        content = bind.value
      } else {
        content = el.innerText
      }
      if (!content || content == '') return
      navigator.clipboard.writeText(content).then()
      Vue.$toast.success('Copied !')
    })
  }
}