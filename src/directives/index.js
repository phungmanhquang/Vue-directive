import clipboard from "./clipboard";
import clipboardSelection from "./clipboardSelection";
import error from "./error";
import log from "./log";
import outsideClick from "./outsideClick";
import search from "./search";
import tooltip from "./tooltip";

export default {
  install(Vue) {
    Vue.directive('log', log)
    Vue.directive('clipboard', clipboard)
    Vue.directive('clipboard-selection', clipboardSelection)
    Vue.directive('tooltip', tooltip)
    Vue.directive('search', search)
    Vue.directive('outside-click', outsideClick)
    Vue.directive('error', error)
  }
}