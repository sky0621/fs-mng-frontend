<template>
  <v-container>
    <v-row justify="center">
      <v-col md="1">
        <v-btn to="new" fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col md="auto">
        <v-data-table :items="movies" :headers="headers">
          <template v-slot:item.movieUrl="{ item }">
            <video :src="item.movieUrl" width="160" height="90" style="margin: 12px" controls></video>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import { DataTableHeader } from '@/types/vuetify'
  import 'vue-apollo'
  import movies from '@/apollo/queries/movies.gql'

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
    movies: Movie[] = [];

    get headers(): DataTableHeader[] {
      return [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Preview', value: 'movieUrl' }
      ]
    }
  }
</script>
