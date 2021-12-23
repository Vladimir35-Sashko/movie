<template lang="pug">
  div
    modal(v-if='isInfoPopupVisible' @closepopup='closeInfoPopup')
      .lightbox__overlay(ref='popup_wrapper')
      .lightbox__content
        button.lightbox__button(type='button' data-action='close-lightbox' @click='closeInfoPopup')
        img.lightbox__image(:src='source()' alt='Poster')
        .lightbox__information
          h2.lightbox__title  {{model.title}}
          ul.lightbox__list.list
            li.lightbox__list__item
              p.item__list-title  Vote / Votes
              p
                span.content__rating  {{model.vote_average}}
                span.content__vote {{model.vote_count}}
            li.lightbox__list__item
              p.item__list-title Popularity
              p.item-info-popul
                | {{model.popularity}}
            li.lightbox__list__item
              p.item__list-title Original Title
              span.item-info-orig
                | {{model.original_title}}
            li.lightbox__list__item
              p.item__list-title Genre
              span.item-info-gen {{model.genre_ids}}
          h3.lightbox__about About
          p.lightbox__text
            | {{model.overview}}
    ul.content__cards
      li.content__card.content__card__show__info(@click='showPopupInfo')
        .poster__wrapper
          img.content__poster(:src='source()' alt='Poster')
        .card__description
          p.content__title {{ model.title}}
          p.content__info
            span.content__genres {{ model.genre_ids }}
            span.content__year {{ model.release_date }}
            span.content__rating {{ model.vote_average }}


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
    return `https://image.tmdb.org/t/p/w300${this.model.poster_path}`
  }

  @Prop(FilmModel) readonly model: FilmModel;

}

</script>

<style scoped >
.content__card{
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  }
.content__card {
  transition: transform 200ms ease;
}

.poster__wrapper {
  pointer-events: none;
  background-color: #f7f7f7;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  border-radius: 5px;
}

.content__poster {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
}

.card__description {
  pointer-events: none;
padding-block: 10px;
}

.content__title,
.content__info {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
}
.content__title {
  margin-bottom: 2px;
}
.content__info {
  font-size: 11px;
  color:  #ff6b08;
  text-transform: none;
}
.content__rating {
  margin-left: 3px;
  padding-block: 1px;
  padding-inline: 6px;
  color: #fff;
  background-color:#ff6b01;
  border-radius: 5px;
}
.lightbox__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}
.lightbox__content {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fff;
  padding: 50px 30px;
  transform: translate(-50%, -50%);
  width: 90%;
  max-height: 100%;
  overflow-y: auto;
  max-width: 480px;
}
.lightbox__image {
  width: auto;
  height: auto;
  border-radius: 3%;
  margin: 0 auto 30px;
}
.lightbox__button {
  height: 30px;
  width: 30px;
  display: block;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  fill: #000000;
  background: none no-repeat center;
  transform: rotate(-90deg);
  border-radius: 50%;
}
.lightbox__button:hover,
.lightbox__button:focus {
  background-color: rgba(0, 0, 0, 0.5);
}
.lightbox__title {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
}
.lightbox__list {
  margin-top: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.lightbox__list__item {
  display: flex;
}
.item__list-title {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #8c8c8c;
  min-width: 108px;
}
.item-info-popul {
  font-weight: 500;
  line-height: 1.17;
  font-size: 12px;
}
.item-info-orig {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  align-items: center;
  text-transform: uppercase;
}
.item-info-gen {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  word-wrap: break-word;
}
.lightbox__list__item:not(:last-child) {
  margin-bottom: 10px;
}
.content__vote {
  margin-left: 3px;
  padding-block: 1px;
  padding-inline: 6px;
  background: #f7f7f7;
  border-radius: 5px;
  font-weight: 500;
  line-height: 1.17;
  font-size: 12px;
}
.lightbox__list__item .content__rating {
  line-height: 1.17;
  font-size: 12px;
  font-weight: 500;
}

.lightbox__about {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  margin-top: 20px;
}
.lightbox__text {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  margin-top: 20px;
  margin-bottom: 20px;
}
  .lightbox__image {
    margin-right: 30px;
  }
  .lightbox__title {
    font-weight: 500;
    font-size: 30px;
    line-height: 1.167;
  }
  .lightbox__button {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #ff4500;
    background-color: #fff;
    min-width: 30px;
    min-height: 30px;
    top: 10px;
    right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
  }
</style>