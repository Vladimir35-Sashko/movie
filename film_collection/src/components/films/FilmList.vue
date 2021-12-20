<template >
  <div>
  <FilmListItem
  v-for="item in collection"
  :key="item.id"
  :model="item"
  ></FilmListItem>
  </div>
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

</style>