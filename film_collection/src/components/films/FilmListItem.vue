<template lang="pug">
  .content
    v-dialog(v-model='isInfoPopupVisible' width="800")
      v-card
        v-btn(type='button' @click='closeInfoPopup')
         v-icon mdi-close
        v-img(:src='source()' alt='Poster' height="500" width="600" )
        v-card-title {{model.title}}
        v-card-text
          p Vote / Votes {{model.vote_average}} {{model.vote_count}}
          p Popularity {{model.popularity}}
          p Original Title {{model.original_title}}
          p Genre {{model.genre_ids}}
          p About {{model.overview}}
    v-list-item
      v-list-item-content(@click='showPopupInfo')
        v-img(:src='source()' alt='Poster')
        v-list-item-title {{model.title}}
        v-list-item-subtitle
          span {{ model.genre_ids }}
          span {{ model.release_date }}
          span {{ model.vote_average }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FilmModel } from '@/mc/FilmModel';
import Modal from "@/components/Modal.vue";


@Component({
  components: {Modal}
})
export default class FilmListItem extends Vue {
    isInfoPopupVisible: boolean = null;

  showPopupInfo(): boolean{
    return this.isInfoPopupVisible = true;
  }
  closeInfoPopup(): boolean{
    return this.isInfoPopupVisible = false;
  }
    source(): string{
    return `https://image.tmdb.org/t/p/w500${this.model.poster_path}`
  }

  @Prop(FilmModel) readonly model: FilmModel;

}

</script>

<style scoped >
</style>