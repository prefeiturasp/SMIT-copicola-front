<template>
  <div class="card">
    <img :src="imgUrl" :alt="name">
    <div class="lead"> 
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props:['imgUrl', 'name']
}
</script>

<style scoped>
  img {
    width: 100%
  }
  
  .card {
    background: var(--soft-dark-grey);
    width: 280px;
    height: 280px;
    position: relative;
  }

  .lead{
    position: absolute;
    bottom: 0;
    height: 80px;
    padding: 5px;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    background: var(--red)
  }

  .lead h2 {
    color: #fff;
    font-size: 1rem;

  }
  
</style>