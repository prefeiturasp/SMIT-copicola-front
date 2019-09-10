<template>
  <a class="btn" :href="href">
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
    text-decoration: none;
    text-align: center;
    display: inline-block;
    padding: 10px 50px;
    background-color: var(--red);
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
</style>