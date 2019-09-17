<template>
  <div>
    <TheMainHeader/>
    <div class="container">
      <TheBreadCrumb/>
      <div class="row">
        <span class="category-icon" :style="{backgroundImage : 'url('+categoryIcon+')'}"></span>
        <article>
          <header>
            <span class="category-name">outros</span>
            <h1>{{ novidade.title.rendered}}</h1>
            <p class="excerpt" v-html="novidade.excerpt.rendered"> </p>
          </header>
          <section id="content" v-html="novidade.content.rendered"></section>
        </article>
        <aside> 
          barra lateral
        </aside>
      </div>
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
    computed: {
      categoryIcon: function () {
        return require('@/assets/img/' + this.$store.state.Novidades.categories[0].iconLarge);
      }
    },
    mounted() {
      this.loadNovidade(this.$route.params.novidade_slug)  
    },
    created() {
      this.$store.commit('defineColorSet', 'novidades')
    }
}
</script>

<style scoped>
  .row {
    margin-top: 2rem;
  }

  article {
    width: 70%;
  }

  #content {
    font-size: 1.3rem;
  }

  #content >>> p, .excerpt {
    margin-bottom: 1rem;
  }

  article header h1 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  .excerpt, .category-name {
    font-size: 1.3rem;
    color: var(--soft-dark-grey);
  }

  .category-icon {
    background-repeat: none;
    background-position: center;
    background-size: contain;
    display: block;
    width: 45px;
    height: 90px;
    margin-top: 2rem;
    margin-right:  1rem;
  }

  .category-name{
    font-weight: 300;
  }


</style>