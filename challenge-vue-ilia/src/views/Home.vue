<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
             <pokemon-info
                :show="modalOpen"
                @close="modalOpen = false"
                :card= "pokemonData">{{ pokemonData }}</pokemon-info>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import PokemonInfo from '@/components/PokemonInfo.vue';

export default {
  props: { prokemonData: Object },
  name: 'Home',
  components: { HelloWorld, PokemonInfo
  },
};
</script>
