<template>
  <router-link class="link" :to="link">
    <span class="tipo">{{ tipo }}</span>
    <div class="row card">
      <span class="tipo-icon"></span>
      <h2>{{ title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    tipo: {
      type: String,
      default: 'outros'
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}

.tipo {
  color: var(--light-grey);
  font-size: 1.2rem;
  font-weight: 300;
}

.card {
  margin-top: 0.5rem;
  
}

.tipo-icon {
  min-width: 25px;
  height: 50px;
  background: var(--purple);
  margin-right: 0.4rem;
  flex-shrink: none;
}

.card h2 {
  font-weight: 400;
}

</style>