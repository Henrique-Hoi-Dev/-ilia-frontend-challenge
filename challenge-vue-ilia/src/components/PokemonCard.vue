<template>
  <div class="card-search" >
    <div class="card-info">
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>
<style scoped>
.card-search {
  max-width: 13rem;

  margin-bottom: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.card-info {
  margin-bottom: .5rem;
}
</style>

