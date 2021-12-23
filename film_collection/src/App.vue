<template lang="pug">
  v-app
    FilmList

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilmList from "@/components/films/FilmList.vue";


@Component({
  components: {
    FilmList
  },
})
export default class App extends Vue {}
</script>
