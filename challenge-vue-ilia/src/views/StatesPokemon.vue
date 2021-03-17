<template>
 <div class="pokemon-info" >
     <h1>{{ name }} </h1>
    <hr> 
   <div v-for="pokemon in data" :key="pokemon.id"> 
    <p >{{ pokemon.name }} -- {{ pokemon.id }}</p>
     <img :src="pokemon.imageUrl" :alt="pokemon.name" >
   </div>
    <h2>Veio para page</h2> 
    <b-modal>
      
    </b-modal>
  </div> 
</template>

<script>
import mixinPokemon from '../mixinPokemon';

export default {
  props: ['id'],
  mixins: [mixinPokemon],
  data() {
    return {     
      data: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: { 
    async getName(){
      const idP = this.$route.params.id;

      const res = await fetch(`https://api.pokemontcg.io/v1/cards/${idP}`);
      const data = await res.json();
      this.data = data;

      console.log(idP.name)
    }
  }
}  
</script>

<style>

</style>
