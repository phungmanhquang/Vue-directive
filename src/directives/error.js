export default {
  bind(el, bind) {
    el.addEventListener('error', function (e) {
      const defaultImageUrl = './assets/image/default.png'
      if (e.target.src !== defaultImageUrl) e.target.src = defaultImageUrl
    })
  }
}