<template>
  <footer id="main-footer">
    <span class="pattern"></span>
    <div class="container-fluid add-fluid-padding main-content">
      <div class="row spaced-row">
        <div class="col">
          <div class="row">
            <section class="col">
              <h1>Realização:</h1>
            </section>
            <section class="col">
              <h1>Parceiros:</h1>
            </section>
          </div>
          <div class="row">
            <section class="col">
              <h1>Apoio:</h1>
            </section>
          </div>
        </div>
        <section class="col">
          <h1>Contato:</h1>
          <p>(011).Lab - Laboratório de Inovação em Governo da Prefeitura de São Paulo</p>
          <a href="mailto:copicola@prefeitura.sp.gov.br">copicola@prefeitura.sp.gov.br</a>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

#main-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15rem;
}

.pattern {
  display: block;
  height: 100px;
  width: 100%;
  background: url('../assets/img/grey-lines-pattern.svg');
  background-repeat: repeat-x;
}

h1{
  color: var(--red);
}

.spaced-row {
  justify-content: space-between;
}

.col{
  width: 100%;
  max-width: 40%;
}

.main-content {
  margin-top: 1.5rem;
}

</style>