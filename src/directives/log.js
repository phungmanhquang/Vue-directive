export default {
  bind(el, bind, vnode) {
    console.log({ el, bind, vnode });
    console.log("log --bind");
  },
  inserted: function (el, bind, vnode) {
    console.log("log --inserted");
  },
  update: (el, bind, vnode, oldVnode) => {
    console.log("log --update");
  },
  componentUpdated: function (el, bind, vnode, oldVnode) {
    console.log("log --componentUpdated");
  },
  unbind: function (el, bind, vnode) {
    console.log("log --unbind");
  }
}