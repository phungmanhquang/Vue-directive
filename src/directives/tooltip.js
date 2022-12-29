import helper from "@/utils/helper";

let bindValue = null;

export default {
  bind(el, bind) {
    bindValue = bind;
    el.addEventListener("mouseover", handlerMouseover);
    el.addEventListener("mouseout", handlerMouseout);
  },

  update(el, bind, vnode, oldVnode) {
    el.removeEventListener("mouseover", handlerMouseover);
    el.removeEventListener("mouseout", handlerMouseout);
  },
};

function handlerMouseover(e) {
  const tooltipEl = renderTooltipEl(
    bindValue.value,
    e.clientY + 7.5,
    e.clientX + 7.5
  );
  const appEl = document.getElementById("app");
  appEl.append(helper.htmlToElement(tooltipEl));
}

function handlerMouseout() {
  const tooltipEl = document.getElementById("tooltip");
  tooltipEl.remove();
}

function renderTooltipEl(value, top, left) {
  return `
        <div 
          id="tooltip" 
          class="bg-zinc-600 text-white px-2 rounded-sm opacity-90"  
          style="position: fixed;top: ${top}px; left: ${left}px">
          ${value}
        </div>
      `;
}
