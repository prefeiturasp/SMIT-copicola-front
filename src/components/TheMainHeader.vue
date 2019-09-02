<template>
    <header class="container-fluid">
        <div class="container inside"> 
            <router-link to="/"> 
                <img class="logo" src="../assets/copi-logo-1.svg" alt="CopiCola Logo, click para ir para página principal">
            </router-link>
            <nav id="nav">
                <router-link class="nav-link" to="/about">guia</router-link>
                <router-link class="nav-link" to="/about">agenda</router-link>
                <router-link class="nav-link" to="/about">quem somos</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    header {
        height: 110px;
        background: var(--red);
    }

    .inside {
        justify-content: space-between;
        align-content: center;
    }

    .logo {
        max-width: 75px;
        width: auto;
    }

    .nav-link {
        text-decoration: none;
    }


</style>