<template>
  <div class="p-96">
    <button
      class="mb-10 bg-slate-600 text-white p-3 rounded-lg"
      @click="isShow = !isShow"
      v-text="isShow ? 'Close' : 'Show'"
    />
    <p v-log="'val text'">{{ text }}</p>
    <div v-if="isShow">
      <input v-model="text" class="border-2 border-slate-600 p-3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      isShow: false,
    };
  },
};
</script>
