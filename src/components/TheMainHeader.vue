<template>
  <header class="container-fluid" :style="{background: primaryColor}">
    <div class="row add-fluid-padding inside"> 
      <router-link to="/"> 
          <img class="logo" :src="logoURL" alt="CopiCola Logo, click para ir para página principal">
      </router-link>
      <nav id="nav">
          <BaseHeaderLink goto="/guias">guias</BaseHeaderLink>
          <BaseHeaderLink goto="/agenda">agenda</BaseHeaderLink>
          <BaseHeaderLink goto="/quem-somos">quem somos</BaseHeaderLink>
      </nav>
    </div>
  </header>
</template>

<script>
import BaseHeaderLink from '@/components/BaseHeaderLink.vue'

export default {
    name: "TheMainHeader",
    components: {
        BaseHeaderLink
    },
    computed: {
        primaryColor: function () {
            return this.$store.state.rootCSS.colorSets[this.$store.state.rootCSS.actualColorSet].primary
        },
        contrastColor: function() {
            return this.$store.state.rootCSS.colorSets[this.$store.state.rootCSS.actualColorSet].contrast
        },
        logoURL: function () {
            return require('../assets/' + this.$store.state.rootCSS.colorSets[this.$store.state.rootCSS.actualColorSet].logo)
        }
    }
}
</script>

<style lang="css" scoped>
    header {
        height: 110px;
    }

    .inside {
        justify-content: space-between;
        align-items: center;
        align-content: center;
    }

    .logo {
        max-width: 75px;
        width: auto;
    }
</style>