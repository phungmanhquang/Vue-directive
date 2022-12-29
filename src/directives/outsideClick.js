import store from "@/store"

let callback = null

export default {
  bind(el, bind, vnode) {
    callback = bind.value
    const bodyEl = document.getElementsByTagName('body')[0]
    bodyEl.addEventListener('click', handlerClick)

    el.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  },
  unbind(el, bind, vnode) {
    const bodyEl = document.getElementsByTagName('body')[0]
    bodyEl.removeEventListener('click', handlerClick)
  }
}

function handlerClick() {
  callback()
}