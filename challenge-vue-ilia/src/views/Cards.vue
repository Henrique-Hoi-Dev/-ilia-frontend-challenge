<template>
<div>
  <search-pokemon @searching="url = $event"></search-pokemon>
  <fetch-json :url="url">
    <div slot-scope="{ response: cards, loading }">
      <p v-if="loading">Loading... <b-spinner variant="success" label="Spinning" /></p>
        <div v-else>
          <div class="grid-list">
            <pokemon-card v-for="pokemon in cards.cards" :key="pokemon.id" >
            <img slot="image" :src="pokemon.imageUrl" :alt="pokemon.name"  @click="thePokemon(pokemon)" >
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
// import StatesPokemon from '@/views/StatesPokemon.vue';
import mixinPokemon from '../mixinPokemon';

export default {
  components: { SearchPokemon, FetchJson, PokemonCard },
  mixins: [mixinPokemon]
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
img {
  width: 100%;
  height: auto;
}

</style>

