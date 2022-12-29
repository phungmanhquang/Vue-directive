<template>
  <div
    v-if="searchLine.show"
    class="bg-slate-700 text-white rounded-sm max-w-md p-4 px-2 rounded-md"
    :style="{
      position: 'fixed',
      top: `${searchLine.top}px`,
      left: `${searchLine.left}px`,
    }"
    v-outside-click="outsideClick"
  >
    <div class="mb-3 truncate">
      keyword: <span class="text-orange-600"> {{ searchLine.keyWord }} </span>
    </div>
    <div>
      <div
        v-for="item in 3"
        :key="item"
        class="truncate mb-1 cursor-pointer hover:bg-slate-500 p-2 text-left text-sm rounded-sm transition"
      >
        <div class="underline">
          {{ randomTitle() }}
        </div>
        {{ randomPrefix() }}
        <span
          class="text-orange-600"
          v-tooltip="`${searchLine.keyWord} tool tip data`"
        >
          {{ searchLine.keyWord }}
        </span>
        {{ randomSuffix() }}
      </div>
    </div>
  </div>
</template>

<script>
import helper from "@/utils/helper";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchLine"]),
  },
  methods: {
    outsideClick() {
      console.log("outsideClick");
      if (!this.searchLine.show) return;
      this.$store.commit("TOGGLE_SHOW_SEARCH_LINE");
    },
    randomTitle() {
      const title = {
        0: "Distinctio",
        1: "Necessitatibus",
        2: "Labore",
        3: "Repudiandae",
        4: "Sapiente",
        5: "Dolor",
      };
      const key = helper.randomIntFromInterval(0, 5);
      return title[key];
    },
    randomPrefix() {
      const prefix = {
        0: "...",
        1: "Distinctio inventore id",
        2: "Necessitatibus est ipsum facere.",
        3: "...",
        4: "Sapiente consequuntur",
        5: "maxime labore quibusdam voluptate.",
      };
      const key = helper.randomIntFromInterval(0, 5);
      return prefix[key];
    },
    randomSuffix() {
      const suffix = {
        0: "Dolor ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit",
        1: "porro laboriosam autem accusantium exercitationem architecto, ipsa impedit cupiditate amet? ",
        2: "vitae atque eius ipsa illo tenetur, facilis accusamus ipsam repudiandae maxime labore quibusdam voluptate! Dignissimos, molestiae?",
        3: "Labore animi quos neque nihil, minus unde accusantium molestias quae sint nostrum. ",
        4: "Repudiandae quos, iste dignissimos ex inventore eaque nostrum dolorem dicta?",
        5: "Sapiente quisquam neque officiis consequuntur quae minima.",
      };
      const key = helper.randomIntFromInterval(0, 5);
      return suffix[key];
    },
  },
};
</script>

<style></style>
