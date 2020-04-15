<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-list two-line subheader>
            <v-list-item v-for="movie in movies" :key="movie.id" link>
              <v-list-item-avatar>
                <v-icon>mdi-gift-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ movie.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ movie.movieUrl }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import 'vue-apollo'
  import movies from '~/apollo/queries/movies.gql'

  interface Movie {
    id: String
    name: String
    movieUrl: String
  }

  @Component({
    apollo: {
      movies: {
        prefetch: true,
        query: movies
      }
    }
  })
  export default class MoviesCard extends Vue {
    movies: Movie[] = []
  }
</script>
