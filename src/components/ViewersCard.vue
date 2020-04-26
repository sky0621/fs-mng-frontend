<template>
  <v-container>
    <v-row justify="center">
      <v-col md="auto">
        <v-data-table :items="viewers" :headers="viewersHeader"> </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { DataTableHeader } from '@/types/vuetify'
import 'vue-apollo'
import { Viewer } from '~/gql-types'

@Component({})
export default class ViewersCard extends Vue {
  @Prop({ default: () => {} })
  readonly viewers!: Viewer[]

  get viewersHeader(): DataTableHeader[] {
    return [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'NickName', value: 'nickname' }
    ]
  }
}
</script>
