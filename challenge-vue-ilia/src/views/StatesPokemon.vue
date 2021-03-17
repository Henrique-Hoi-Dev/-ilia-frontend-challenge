<template>
 <div>
    <h1> {{ name }} </h1>    
    <pokemon-info >
    </pokemon-info>
 </div>     
</template>

<script>
import mixinPokemon from '../mixinPokemon';
import PokemonInfo from '@/components/PokemonInfo.vue'

export default {
  props: {  },
  components: { PokemonInfo },
  name: 'StatesPokemon',
  mixins: [mixinPokemon]
}
</script>

<style>

</style>
