<template>
  <div>
    <MovieForm @submit="save" @cancel="moveToIndex" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'vue-apollo'
import MovieForm from '~/components/MovieForm.vue'
import { MovieInput } from '~/gql-types'
import CreateMovie from '~/apollo/mutations/movies.gql'

@Component({
  components: { MovieForm }
})
export default class MovieNewPage extends Vue {
  async save(input: MovieInput) {
    try {
      const res = await this.$apollo.mutate({
        mutation: CreateMovie,
        variables: {
          object: {
            name: input.name,
            movieFile: input.movieFile,
            scale: input.scale
          }
        }
      })
      if (res) {
        console.log(res)
        await this.$router.push('/movie')
      } else {
        console.log('no res')
      }
    } catch (err) {
      // TODO: エラーハンドリング実装！
      console.log(err)
    }
  }

  moveToIndex(): void {
    this.$router.push('/movie')
  }
}
</script>
