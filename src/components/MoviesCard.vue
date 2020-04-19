<template>
  <v-container>
    <v-row justify="center">
      <v-col md="1">
        <v-btn fab @click="move">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col md="auto">
        <v-data-table :items="movies" :headers="headers">
          <template v-slot:item.movieUrl="{ item }">
            <video
              :src="item.movieUrl"
              width="160"
              height="90"
              style="margin: 12px"
              controls
            ></video>
          </template>
          <template v-slot:item.scale="{ item }">
            {{ item.scale | scale }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { DataTableHeader } from '@/types/vuetify'
import 'vue-apollo'
import { Movie } from '~/gql-types'

@Component({})
export default class MoviesCard extends Vue {
  @Prop({ default: () => {} })
  readonly movies!: Movie[]

  get headers(): DataTableHeader[] {
    return [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Preview', value: 'movieUrl' },
      { text: 'Scale', value: 'scale' }
    ]
  }

  @Emit('move')
  move(): void {}
}
</script>
