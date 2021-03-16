<template>
<div>
  <search-pokemon @searching="url = $event"></search-pokemon>
  <fetch-json :url="url">
    <div slot-scope="{ response: cards, loading }">
      <p v-if="loading">Loading... <b-spinner variant="success" label="Spinning" /></p>
        <div v-else>
          <div class="grid-list">
            <pokemon-card v-for="pokemon in cards.cards" :key="pokemon.id" >
            <img slot="image" :src="pokemon.imageUrl" :alt="pokemon.name" class="w-full max-w-xxs" @click="thePokemon(pokemon)">
            <div slot="name" class="text-info">Name:{{ pokemon.name }} </div>
            <div slot="name" class="text-info">Id:{{ pokemon.id }} </div>
          </pokemon-card>
        </div>     
      </div>
    </div>
  </fetch-json>
</div>   
</template>

<script>
import SearchPokemon from "@/components/SearchPokemon";
import FetchJson from '@/components/FetchJson.vue';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: { SearchPokemon, FetchJson, PokemonCard },
  data() {
    return {
      url: 'https://api.pokemontcg.io/v1/cards',
      modalOpen: false,
      pokemonData: {},
    };
  },
  methods: {
    thePokemon(pokemon) {
      this.modalOpen = true;
      this.pokemonData = pokemon;
      console.log(pokemon)
    },
  },
};
</script>

<style scoped lang="scss">
.grid-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.text-info {
  font-family: 'Fira Code', monospace;
  color: #000!important;
}
</style>
