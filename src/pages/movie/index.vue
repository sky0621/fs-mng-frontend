<template>
  <div>
    <MoviesCard :movies="movies" @move="moveToNew" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'vue-apollo'
import MoviesCard from '~/components/MoviesCard.vue'
import movies from '~/apollo/queries/movies.gql'
import { Movie } from '~/gql-types'

@Component({
  components: { MoviesCard },
  apollo: {
    movies: {
      prefetch: true,
      query: movies
    }
  }
})
export default class MovieIndexPage extends Vue {
  private readonly movies: Movie[] = []

  moveToNew(): void {
    this.$router.push('/movie/new')
  }
}
</script>
