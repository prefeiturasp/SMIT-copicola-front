<template>
  <a :href="href">
    <slot></slot>
  </a> 
</template>

<script>
export default {
  props: ['href']
}
</script>

<style scoped>
  .btn {
    padding: 10px 20px;
    background: var(--red);
  }
</style>