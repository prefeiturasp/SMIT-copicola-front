<template>
    <router-link  class="nav-link" :class="{'active':isLinkRoute}" :to="goto">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: ['goto'],
    data: function () {
        return {
            isLinkRoute: (this.$route.path).match(this.goto + "|" + this.goto + ".+") /* matches de path plus the dynamic path */
        }
    }
}
</script>

<style scoped>
    .nav-link {
        color: #fff;
        text-decoration: none;
        margin: 0 5px;
        padding: 5px 10px;
        font-weight: 600;
    }

    .active {
        background: var(--green)
    }

    
</style>