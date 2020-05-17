<template>
  <MovieForm @submit="save" @cancel="moveToIndex" />
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
        this.$toast.success('動画コンテンツの登録に成功しました。')
        await this.$router.push('/movie')
      } else {
        this.$toast.error('動画コンテンツの登録に失敗しました。')
      }
    } catch (err) {
      this.$toast.error(err)
    }
  }

  moveToIndex(): void {
    this.$router.push('/movie')
  }
}
</script>
