<template>
    <header class="container-fluid">
        <div class="row add-fluid-padding inside"> 
            <router-link to="/"> 
                <img class="logo" src="../assets/copi-logo-1.svg" alt="CopiCola Logo, click para ir para página principal">
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
    }
}
</script>

<style lang="css" scoped>
    header {
        height: 110px;
        background: var(--red);
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