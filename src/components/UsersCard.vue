<template>
  <v-container>
    <v-row justify="center">
      <v-col md="1">
        <v-btn fab @click="move">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col md="auto">
        <v-data-table :items="users" :headers="headers"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { DataTableHeader } from '@/types/vuetify'
import 'vue-apollo'
import { User } from '~/gql-types'

@Component({})
export default class UsersCard extends Vue {
  @Prop({ default: () => {} })
  readonly users!: User[]

  get headers(): DataTableHeader[] {
    return [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' }
    ]
  }

  @Emit('move')
  move(): void {}
}
</script>
