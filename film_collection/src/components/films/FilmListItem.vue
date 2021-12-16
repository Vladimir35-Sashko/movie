<template lang="pug">
  v-list-item
  v-list-item-poster {{model.poster_path}}


</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FilmModel } from '@/mc/FilmModel';

@Component({})
export default class FilmListItem extends Vue {
  @Prop(FilmModel) readonly model: FilmModel;
}
</script>

<style scoped>

</style>