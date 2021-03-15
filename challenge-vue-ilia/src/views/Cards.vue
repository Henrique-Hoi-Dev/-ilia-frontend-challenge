<template>
  <div class="container">
    <h1>Cards</h1>
    <form class="form-inline">
      <input
        class="form-control mb-2 mr-sm-2"
        type="text"
        placeholder="pokemon name, ex: Charizard, Pikachu"
        v-model="name"
      />
      <button @click="searchByName" class="btn btn-primary mb-2">Search</button>
      <input
        class="form-control ml-3 mb-2 mr-sm-2"
        type="text"
        placeholder="filter for HP"
        v-model="searchText"
      />
    </form>
    <p v-if="searchText">You filtered for:  HP</p>
    <p class="mt-3">We found:  cards.</p>
    <ul class="mt-5 list-unstyled row">
      <li
        class="media col-sm-3 "
        v-for="item in filteredList(cardList)"
        :key="item.id"
      >
        <div class="media-body">
          <img :src="item.imageUrl" alt="Generic placeholder image" />
          <p class="mt-1 mb-3">
            <a @click="handleGetDetail(item.id);"
              > HP: </a
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

import Pokemon from "pokemontcgsdk";
export default {
  name: "cards",
  components: {},
  data() {
    return {
      name: "",
      searchText: "",
      cardList: []
    };
  },
  created: function() {
    this.getCards();
  },
  methods: {
    handleGetDetail: function(i) {
      Pokemon.card
        .find(i)
        .then(result => {
          alert(JSON.stringify(result));
        })
        .catch(error => {
          alert(JSON.stringify(error));
        });
    },
    searchByName: function() {
      const self = this;
      this.cardList = [];
      Pokemon.card.all({ name: this.name, pageSize: 1 }).on("data", card => {
        self.cardList.push(card);
      });
    },
    getCards: function() {
      const self = this;
      Pokemon.card.all({ name: "Blastoise", pageSize: 1 }).on("data", card => {
        return self.cardList.push(card);
      });
    },
    filteredList(list) {
      return list.filter(item => {
        if (item.hp) {
          return item.hp.toLowerCase().includes(this.searchText.toLowerCase());
        }
        return list;
      });
    }
  }
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