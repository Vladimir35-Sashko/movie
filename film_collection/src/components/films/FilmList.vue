<template lang="pug">
  .content_cards
    FilmListItem(v-for="item in collection"
     :key="item.id"
     :model="item")
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import {FilmCollection} from "@/mc/FilmCollection";
import FilmListItem from "@/components/films/FilmListItem.vue";


@Component({
  components: { FilmListItem },
})
export default class FilmList extends Vue {
  collection = new FilmCollection()

  @Prop({ type: Object, default: () => ({}) }) readonly filters: Record<string, any>;

  @Watch('filters', {immediate:true})
  async fetch(): Promise<void> {
    await this.collection.fetch(this.filters);
  }
}

</script>

<style scoped>
.content_cards {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-auto-rows: max-content;
  grid-gap: 30px;
  align-items: stretch;
  justify-content: center;
  transition: opacity 200ms ease;
}

</style>