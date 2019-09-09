<template>
  <div>
    <TheMainHeader/>
    <div class="container wrapper">
      <div class="row">
        <div >
          <TheBreadCrumb/>
          <h1 class="title">{{ guia.title.rendered }}</h1>
        </div>
      </div>
      <article class="row content">
        <div class="main-content">    
          <TheGuiaVideo class="video" controls v-if="guia.acf['guia-video-destaque']">
            <source :src="guia.acf['guia-video-destaque'].url">
          </TheGuiaVideo>
        </div>
        <aside class="desc-guia">
          <p v-html="guia.content.rendered"></p>
          <h2 class="title">MATERIAIS PARA DOWNLOAD</h2>
          <BaseButton>download</BaseButton>
        </aside>
      </article>
    </div>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue'
import TheGuiaVideo from '@/components/TheGuiaVideo.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Guia',
  components: {
    TheMainHeader,
    TheBreadCrumb,
    TheGuiaVideo,
    BaseButton
  },
  data: function () {
    return {
      guia: {},
      error: ""
    }
  },
  methods: {
    loadPost: function(post_slug) {
      /* load wp post */
      this.$http.wp.get('guias?slug=' + post_slug).then( (response) => {
        if(response.data.length != 0){
          this.guia = response.data[0]
          /* fill breadcrumb */
          this.fillBreadcrumb(this.guia.title.rendered)
        } else {
          this.$router.replace("/*")
        }
        
      }).catch( (e) => {
        this.error = e.toString()
      })
    },

    fillBreadcrumb: function(name) {
      this.$route.meta.breadcrumb[1].name = name
      this.$route.meta.breadcrumb[1].link = '/guias/' + this.$route.params.guia_slug
    }
  },
  mounted() {
    this.loadPost(this.$route.params.guia_slug)    
  }
}
</script>

<style scoped>
  .content {
    justify-content: space-between
  }

  .main-content {
    width: 60%;
  }

  .desc-guia {
    width: 35%
  }

  .video {
    width: 100%;
  }

  .title {
    text-transform: uppercase;
    margin: 1.2rem 0;
  }

  .wrapper {
    margin-bottom: 5rem;
  }
</style>