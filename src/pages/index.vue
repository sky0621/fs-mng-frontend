<template>
  <v-row justify="center">
    <v-col md="auto">
      <div>TOP PAGE</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  async beforeCreate() {
    console.log('beforeCreate')
    const refToken = await this.$auth.getRefreshToken('auth0')
    console.log(refToken)
    // const token = await this.$auth.getToken('auth0')
    // console.log(token)
  }
}
</script>
