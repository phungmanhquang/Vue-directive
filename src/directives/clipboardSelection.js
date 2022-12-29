import Vue from "vue";

let innerText;

export default {
  bind(el) {
    innerText = el.innerText;
    el.addEventListener("click", handlerClick);
  },
  unbind(el) {
    el.removeEventListener("click", handlerClick);
  }
};

function handlerClick() {
  const start = window.getSelection().baseOffset;
  const end = window.getSelection().focusOffset;
  let content = innerText.substring(start, end);
  if (!content || content === "") return;
  navigator.clipboard.writeText(content).then();
  Vue.$toast.success("Copied !");
}
