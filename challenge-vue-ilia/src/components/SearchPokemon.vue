<template>
  <div>
    <input type="text"
           aria-label="Search" 
           class="input-search"
           name="Search" 
          v-model="searchterm"
          @keydown.enter="getUrl()">
    <b-button variant="success"
            @click="getUrl()">Search</b-button>      
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
.input-search {
  padding: .3rem;
  border: 3px solid;
  border-radius: 8px;
}

button {
  margin-left: 5px;
}

</style>
