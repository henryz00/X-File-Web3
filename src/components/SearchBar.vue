<template>
  <div class="font-display font-extrabold">
    <div class="flex items-center w-4/5 max-w-lg mx-auto border">
      <input
        class="w-full h-9 px-3"
        placeholder="type an ENS domain"
        v-model="content"
        id="domain"
        @keyup.enter="doSearch"
      />
      <div class="search" @click="doSearch">Search</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class SearchBar extends Vue {
  content = "";

  doSearch(): void {
    if (!this.content) return;
    this.$router.push(`/profile/${this.content}`);
  }
}
</script>

<style scoped>
.search {
  @apply leading-9
          px-5
          cursor-pointer
          bg-mainGreen
          text-white
          align-middle
          hover:bg-green-500
          transition-all
          duration-500;
  border-left: 0.15em solid black;
}
</style>
