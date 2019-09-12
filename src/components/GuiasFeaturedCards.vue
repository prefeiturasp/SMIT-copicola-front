<template>
  <div class="guias-container">
      <router-link class="guia-card" v-for="(guia, index) in guias" :key="index" :to="'/guias/' + guia.slug">
          <GuiaCard :name="guia.title.rendered" :img-url="featured_images[index]"/>
      </router-link>
  </div>
</template>

<script>
import GuiaCard from '@/components/GuiaCard.vue'

export default {
  name: 'GuiasFeaturedCards',
  components: {
    GuiaCard
  },
  props: {
    filter: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      guias: [],
      isLoading: false,
      error: ""
    }
  },
  computed: {
    featured_images: function () {
      const featured_media = this.guias.map( (guia) => {
        const featured_media = ("wp:featuredmedia" in guia["_embedded"]) ? guia["_embedded"]["wp:featuredmedia"] : null 
        return featured_media
      })
      const img_urls = []
      featured_media.forEach(element => {
        let exist_element = element ? element[0].source_url : null
        img_urls.push(exist_element)
      });
      return img_urls
    }
  },
  methods: {
    loadGuias: function () {
      this.isLoading = true
      this.error = ""

      this.$http.wp.get('guias?categories=9&_embed').then( (response) => {
        this.guias = response.data
        this.isLoading = false
      }).catch((e) => {
        this.error = e.toString()
      })

    }
  },
  mounted() {
    this.loadGuias()
  }
}
</script>

<style scoped>
  .guias-container {
    display: flex;
    margin: 0 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .guia-card {
    margin: 0.8rem 0.8rem;
  }
</style>