<template  >
 <div class="pokemon-info"  >
     <h3 class="title-page">{{ name }} </h3>
    <hr> 
   <div class="list-1" v-for="pokemon in data" :key="pokemon.id" > 
     <img :src="pokemon.imageUrl" :alt="pokemon.name" >
     <ul style="list-style: none;" >
       <li>
         <p>
          Name: {{ pokemon.name }}
         </p>       
       </li>
       <li>
         <p>
         Id: {{ pokemon.id }}  
         </p>
       </li>
       <li>
         <p>
          Type: {{ pokemon.types[0] }} 
         </p> 
       </li>
       <li v-for="resistance in pokemon.resistances" :key="resistance.id">
         <p>
          Resistances: {{ resistance.type }} 
         </p>
       </li>
       <li v-for="weaknesse in pokemon.weaknesses" :key="weaknesse.id">
         <p>
          Weaknesse: {{ weaknesse.type }} 
          <img :src="`${ baseUrl}${ weaknesse.type }.png`" 
          :alt="`${weaknesse.type} energy`" class="mx-1" width="20px" height="20px">
          {{ weaknesse.value }}
         </p>
       </li>
       <li>
         <p>
         HP: {{ pokemon.hp}}  
         <img v-if="pokemon.types" :src="`${ baseUrl}${ pokemon.types[0] }.png`" 
            :alt="pokemon.types[0]" class="mx-2" width="25px" height="25px" 
            :key="pokemon.types[0].id">
         </p>
       </li>
        <b-button v-b-modal.modalPopover>Info Attacks</b-button>
     </ul> 
      <div>
        <div v-for="attack in pokemon.attacks" :key="attack.id" >
         <b-modal  id="modalPopover" title="Info Attacks" ok-only>
            <div >
                    <template  v-for="energy in attack.cost">
                        <img v-if="energy != 'Free'" 
                        :src="`${ baseUrl}${ energy }.png`" 
                        :alt="`${energy} energy`" class="mx-1" width="20px" height="20px" 
                        :key="energy.id">
                    </template>
                 <div>
                    <p class="modal-attack">
                        {{ attack.name }}
                    </p>
                    <p >
                        {{ attack.text }}
                    </p>
                </div>
                <div class="modal-attack">
                   {{  attack.damage }}
                </div>
            </div>
         </b-modal>
        </div>
      </div>
      
    </div>       
  </div> 
</template>

<script>
import mixinPokemon from '../mixinPokemon';

export default {
  props: ['id'],
  mixins: [mixinPokemon],
  data() {
    return {
      data: {},
      baseUrl: process.env.BASE_URL
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: { 
    async getName() {
      const idP = this.$route.params.id;

      const res = await fetch(`https://api.pokemontcg.io/v1/cards/${idP}`);
      const data = await res.json();
      this.data = data;
    }
  },
}  
</script>

<style >
.list-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 2rem;
    align-items: center;
    list-style: none;
}
.btn-success {
  height: 35px;
  margin-left: 5px;
}
.modal-attack {
  font-size: 2rem;
}
</style>
