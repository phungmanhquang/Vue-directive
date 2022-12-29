import helper from "@/utils/helper";

export default {
  bind(el, bind) {
    el.addEventListener("mouseover", (e) => {
      const tooltipEl = renderTooltipEl(bind.value, e.clientY + 7.5, e.clientX + 7.5);
      const appEl = document.getElementById("app");
      appEl.append(helper.htmlToElement(tooltipEl));
    });
    el.addEventListener("mouseout", () => {
      const tooltipEl = document.getElementById("tooltip");
      tooltipEl.remove();
    });
  },

  update(el, bind, vnode, oldVnode) {
    console.log('run', bind.value, oldVnode);
  }
};

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
