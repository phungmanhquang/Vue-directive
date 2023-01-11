<template>
  <div class="max-w-xl mx-auto py-20">
    <!-- clipboard -->
    <div>
      <button
        class="mb-20 bg-slate-600 text-white p-3 rounded-lg"
        @click="test"
        v-clipboard="valueCopy"
      >
        v-clipboard
      </button>
      <p v-clipboard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro
        voluptatem ea expedita soluta recusandae, <span>abc</span>iure labore
        beatae in at voluptatibus animi incidunt non repellendus itaque
        reprehenderit eveniet magnam dolorum.
      </p>
    </div>

    <!-- clipboard selection -->
    <p
      class="mb-20 bg-slate-500 text-white p-10 rounded-md text-justify"
      v-clipboard-selection
    >
      {{ text1 }}
    </p>

    <!-- tooltip -->
    <div v-tooltip="'tooltip data'" class="bg-gray-300 py-2 rounded-md mb-20">
      Tooltip
    </div>

    <!-- tooltip -->
    <p class="text-justify mb-20 p-10 border-2 border-slate-500 rounded-md">
      Lorem ipsum dolor sit .
      <span class="text-orange-600" v-tooltip="tooltip1" v-clipboard>
        Dignissimos
      </span>
      {{ tooltip1 }}
      <span
        class="text-orange-600"
        v-tooltip="'Dignissimos tool tip data 1233'"
        v-clipboard
      >
        Dignissimos 12
      </span>
      facere quas possimus iusto cumque fuga modi ut.
      <span
        v-tooltip="'Recusandae tooltip data'"
        class="text-orange-600"
        v-clipboard
      >
        Recusandae
      </span>
      , suscipit adipisci, iure omnis vitae doloribus culpa voluptates
      doloremque iste voluptate voluptatibus!
    </p>

    <!-- search & outside click -->
    <p
      class="text-justify mb-20 p-10 border-2 border-slate-500 rounded-md"
      v-search
    >
      {{ text2 }}
    </p>

    <!-- error image -->
    <img src="asd" class="w-80 h-80" v-error />
  </div>
</template>

<script>
import MyComponents from "@/components/MyComponents.vue";
// @ is an alias to /src

export default {
  components: { MyComponents },
  name: "HomeView",
  data() {
    return {
      valueCopy: "Copy data",
      tooltip1: "Dignissimos tool tip data",
      text1:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quodsimilique harum. Consequatur numquam vel veniam fugit nesciunt nihil ipsa in maiores corporis, ipsum ullam omnis non, delectus animi quod.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis quaerat nobis doloribus rerum, aut sapiente accusamus dolore praesentium ullam quam aliquam. Unde, illum at! Dolorem accusamus alias cupiditateaut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, repellat. Tenetur eum iure adipisci, consectetur modilaudantium, optio harum fuga neque, veritatis illo! Repudiandae, rationedolores quia modi perspiciatis vel.",
    };
  },
  methods: {
    test() {
      console.log("test run");
    },
  },

  mounted() {
    setTimeout(() => {
      this.tooltip1 = "changed";
    }, 3000);
  },
};
</script>
