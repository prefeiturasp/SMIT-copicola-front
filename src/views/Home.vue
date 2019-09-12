<template>
  <div>
    <TheMainHeader/>
    <section id="guias" class="container-fluid">
      <h1 class="add-fluid-padding title">Conheça <br> <strong>Nossos Guias</strong></h1>
      <GuiasFeaturedCards class="featured-guias"/>
      <div class="row btn-container">
        <BaseButton href="/guias">veja todos os guias</BaseButton>
      </div>
    </section>
    <section id="novidades" class="container">
      <h1 class="title">Últimas <br> <strong>Novidades</strong></h1>
      <NovidadesFeaturedCards/>
      <div class="row btn-container">
        <BaseButton>mais novidades</BaseButton>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheMainHeader from '@/components/TheMainHeader.vue'
import GuiasFeaturedCards from '@/components/GuiasFeaturedCards.vue'
import BaseButton from '@/components/BaseButton.vue'
import NovidadesFeaturedCards from '@/components/NovidadesFeaturedCards.vue'

export default {
  name: 'home',
  components: {
    TheMainHeader,
    GuiasFeaturedCards,
    NovidadesFeaturedCards,
    BaseButton
  }
}
</script>

<style scoped>
.featured-guias {
  margin-top: 2rem;
}

.btn-container {
  justify-content: center;
  margin-top: 1rem;
}

.title {
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
}

.title strong {
  padding-left: 2.3rem;
}

#guias .title {
  color: var(--orange);
  margin-top: 2rem;
}

#novidades {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#novidades .title{
  color: var(--dark-purple)
}

</style>
