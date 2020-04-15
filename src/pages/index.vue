<template>
  <div>
    <MoviesCard />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import 'vue-apollo'
  import MoviesCard from '~/components/MoviesCard.vue'

  @Component({
    components: { MoviesCard }
  })
  export default class IndexPage extends Vue {}
</script>
