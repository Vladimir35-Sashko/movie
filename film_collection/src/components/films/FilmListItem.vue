<template>
  <ul class="content__cards">
    <li
        class="content__card content__card__show__info">
<!--        @click="showPopupInfo"-->

<!--      <a href="#" :data-id="model.id" class="content__link">-->
        <div class="poster__wraper">
<!--          <img :src="source" :alt="posterAlt" class="content__poster" />-->
        </div>
        <div class="card__description">
          <p class="content__title">{{ model.title}}</p>
          <p class="content__info">
            <span class="content__genres">{{ model.genre_ids }}</span>
            <span class="content__year">{{ model.release_date }}</span>
            <span class="content__rating">{{ model.vote_average }}</span>
          </p>
        </div>
<!--      </a>-->
    </li>
  </ul>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FilmModel } from '@/mc/FilmModel';

@Component({})
export default class FilmListItem extends Vue {
  @Prop(FilmModel) readonly model: FilmModel;
}
</script>

<style scoped >
.content__cards{
  list-style: none;
  margin: 0;
  padding: 0;
  }
.card__description{
  cursor: pointer;
}
</style>