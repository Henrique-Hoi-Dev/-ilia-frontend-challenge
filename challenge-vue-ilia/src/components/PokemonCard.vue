<template>
  <div class="max-w-xxs mb-6 mx-4" >
    <div class=" shadow-md rounded-lg text-none">
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
.w-full {
    width: 100%;
}
.max-w-xxs {
    max-width: 13rem;
}
img {
  height: auto;
}
</style>

