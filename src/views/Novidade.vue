<template>
  <div>
    <TheMainHeader/>
    <div class="container">
      <TheBreadCrumb/>
      <article>
        <header>
          <span>outros</span>
          <h1>{{ novidade.title.rendered}}</h1>
          <p class="excerpt" v-html="novidade.excerpt.rendered"> </p>
        </header>
        <section id="content" v-html="novidade.content.rendered"></section>
      </article>
    </div>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue'

export default {
    name: 'Novidade',
    components: {
        TheMainHeader,
        TheBreadCrumb
    },
    data: function () {
      return {
        novidade: {}
      }
    },
    methods: {
      fillBreadcrumb: function (name) {
        this.$route.meta.breadcrumb[1].name = name
        this.$route.meta.breadcrumb[1].link = '/novidades/' + this.$route.params.novidade_slug
      },
      loadNovidade: function (post_slug) {
        this.$http.wp.get('posts?slug=' + post_slug).then( (response) => {
          if(response.data.length != 0){
            this.novidade = response.data[0]
            /* fill breadcrumb */
            this.fillBreadcrumb(this.novidade.title.rendered)
          } else {
            this.$router.replace("/*")
          }
        }).catch( (e) => {
          alert(e)
        })
      }
    },
    mounted() {
      this.loadNovidade(this.$route.params.novidade_slug)  
    }
}
</script>

<style>

</style>