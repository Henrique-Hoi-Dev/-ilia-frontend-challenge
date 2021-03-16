<template>
  <div>
    <input type="text"
           aria-label="Search" 
           name="Search" 
           class="py-2 px-4 mr4"
          v-model="searchterm"
          @keydown.enter="getUrl()">
    <button class="py-2 px-4"
            @click="getUrl()">Search</button>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchterm: '',
      searchPokemon: 'https://api.pokemontcg.io/v1/cards?name=',
    };
  },
  methods: {
    getUrl() {
      const searchUrl = `${this.searchPokemon}${this.searchterm}`;
      this.$emit('searching', searchUrl)
    },
  },
}
</script>

<style scoped>

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}
.py-2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.font-bold {
    font-weight: 700;
}
.rounded {
    border-radius: .25rem;
}
button {
    background-color: #3490dc;
    margin-left: 5px;
}

</style>
