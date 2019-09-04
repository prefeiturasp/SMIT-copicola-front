<template>
  <div>
    <TheMainHeader/>
    <div class="container">
      <div class="row">
        <div >
          <h3>BreadCrumb HERE</h3>
          <h1>{{ guia.titulo }}</h1>
        </div>
      </div>
      <article class="row content">
        <div class="main-content">    
          <TheGuiaVideo class="video">
            <source src="../assets/video.mp4">
          </TheGuiaVideo>
        </div>
        <aside class="desc-guia">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Labore nesciunt eaque suscipit! Quod suscipit inventore esse quibusdam, earum quisquam dignissimos. 
            Ea vero autem eligendi assumenda? Cumque exercitationem eum rem soluta?
          </p>
          <h2>MATERIAIS PARA DOWNLOAD</h2>
          <BaseButton>download</BaseButton>
        </aside>
      </article>
    </div>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'
import TheGuiaVideo from '@/components/TheGuiaVideo.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Guia',
  components: {
    TheMainHeader,
    TheGuiaVideo,
    BaseButton
  },
  data: function () {
    return {
      guia: {
        titulo: 'Guia'
      }
    }
  }
}
</script>

<style lang="css" scoped>
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
</style>