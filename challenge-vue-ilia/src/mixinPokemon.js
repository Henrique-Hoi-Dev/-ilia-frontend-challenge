export default {
  data() {
    return {
      url: 'https://api.pokemontcg.io/v1/cards',
      modalOpen: false,
      pokemonData: {},
      name: 'Informações do Pokemon',
    };
  },
  methods: {
    thePokemon(pokemon) {
      this.$router.push({ path: 'statesPokemon' });
      this.pokemonData = pokemon;
      console.log(pokemon.name)
      console.log(pokemon.id)
    },
  },
}