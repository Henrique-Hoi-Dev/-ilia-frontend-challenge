<template>
    <div >
      <div class="m-auto">
          
        <div >
         <row container gutter={12} > 
            <column xs="{12}" md="{4}" lg="{3}" class="column-1">
                <img :src="card.imageUrl" :alt="card.name" :title="card.name" > 
                <h2 class="w-1" >Name: {{ card.name }}</h2>
                <div class="id">
                  <h2 class="w-2" v-if="card.id && card.hp != 'None'">ID: {{ card.id }}</h2>
                  <img v-if="card.types" :src="`${ baseUrl}${ card.types[0] }.png`" :alt="card.types[0]"  width="25px" height="25px"  :key="card.types[0].id">
                </div>
            </column> 

        </row>  
                
            <p  v-if="card.evolvesFrom">{{ card.subtype }}, Evolves from {{ card.evolvesFrom }}</p>
            <div  v-if="card.ability || card.text">
                <div class="text-left">
                    <p  v-if="card.text">
                        {{ card.text[0] }}
                    </p>
                    <p v-if="card.ability">
                        <img :src="`${ baseUrl}${ card.ability.type }.png`" :alt="card.ability.type" width="70px" height="20px" :key="card.ability.type.id">
                        {{ card.ability.name }}
                    </p>
                    <p class="text leading-normal" v-if="card.ability">
                        {{ card.ability.text }}
                    </p>
                </div>
            </div>
            <div  v-for="attack in card.attacks" :key="attack.id">
                <div >
                    <template  v-for="energy in attack.cost">
                        <img v-if="energy != 'Free'" :src="`${ baseUrl}${ energy }.png`" :alt="`${energy} energy`"  width="20px" height="20px" :key="energy.id">
                    </template>
                </div>
                <div>
                    <p >
                        {{ attack.name }}
                    </p>
                    <p >
                        {{ attack.text }}
                    </p>
                </div>
                <div >
                   {{ attack.damage }}
                </div>
            </div>
            <div >
                <div  v-if="card.weaknesses">
                    <p >Weaknesses</p>
                    <div v-for="weakness in card.weaknesses" :key="weakness.id">
                        <img :src="`${ baseUrl}${ weakness.type }.png`" :alt="`${weakness.type} energy`" class="mx-1" width="20px" height="20px">
                        {{ weakness.value }}
                    </div>
                </div>
                <div  v-if="card.resistances">
                    <p >Resistances</p>
                    <div >
                        <template v-for="resistance in card.resistances" >
                            <img  :key="resistance.id" :src="`${ baseUrl}${ resistance.type }.png`" :alt="`${resistance.type} energy`" class="mx-1" width="20px" height="20px">
                            <p class="mx-1" :key="resistance.id">{{ resistance.value }}</p>
                        </template>
                    </div>
                </div>
                <div  v-if="card.retreatCost">
                    <p >Retreat Cost</p>
                    <div >
                        <template v-for="retreatCost in card.retreatCost">
                            <img :key="retreatCost.id" :src="`${ baseUrl}${ retreatCost }.png`" :alt="`${retreatCost.type} energy`" class="mx-1" width="20px" height="20px">
                        </template>
                    </div>
                </div>
                <div  v-if="card.rarity">
                    <p >Rarity</p>
                    <p >{{ card.rarity }}</p>
                </div>
            </div>
        
        </div>
       
      </div>
    </div>
</template>

<script>
export default {
  props: ["show", "card"],
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL
    };
  },
  
  methods: {
    dismiss() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.m-auto {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.avartar-init {
    display: flex;
    flex-direction: row;
}
.column-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.id {
    display: flex;
    flex-direction: row;
    align-items: center;
}
p {
    font-family: 'Fira code', sans-serif;
    font-weight: 400;
}

</style>