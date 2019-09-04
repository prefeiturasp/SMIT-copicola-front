<template>
  <div>
    <TheMainHeader/>
    <section class="container">
      <div class="row">
        <div>
          <img src="../assets/frederico.svg" alt="Personagem frederico, mascote do CopiCola sorrindo">
          <h1>Página não encontrada.</h1>
          <p>Não encontramos a página que você está procurando. <router-link to="/">Clique aqui</router-link> para voltar para a página inicial.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheMainHeader from "@/components/TheMainHeader.vue"

export default {
    name: "NotFound",
    components: {
        TheMainHeader
    }
}
</script>

<style scoped>
  
  .container {
    padding-top: 2rem;
    text-align: center;
    height: 100%;
  }

  .row {
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
  }

  img {
    width: 100%;
    max-width: 250px;
  }

</style>