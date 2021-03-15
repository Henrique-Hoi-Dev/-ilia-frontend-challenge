<template>
<div>
  <SearchPokemon />
</div>   
</template>

<script>
import SearchPokemon from "@/components/SearchPokemon";

export default {
  name: 'cards',
  components: { SearchPokemon },
  data() {
    return {
      name: '',
      searchText: '',
      cardList: []
    };
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
.media {
  img {
    width: 150px;
  }
}
</style>
