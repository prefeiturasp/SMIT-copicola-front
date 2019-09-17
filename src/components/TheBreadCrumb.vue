<template>
  <section id="breadcrumb">
    <span v-for="(item, i) in items" :key="i">
      <router-link class="breadcrumb-link" :style="{color: contrastColor}" :to="item.link">
        {{ item.name }}
      </router-link>
      <span :style="{color: contrastColor}" v-if="i != (items.length - 1)">
        >
      </span>
    </span>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data: function() {
    return {
      items: this.$route.meta.breadcrumb
    } 
  },
  computed: {
    contrastColor: function() {
      return this.$store.state.rootCSS.colorSets[this.$store.state.rootCSS.actualColorSet].contrast
    }
  }
}
</script>

<style>
#breadcrumb, .breadcrumb-link{
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: lowercase;
  text-decoration: none;
  margin-top: 0.8rem;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}
</style>