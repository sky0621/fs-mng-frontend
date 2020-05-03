<template>
  <v-row justify="center">
    <v-col md="auto">
      <div>Trying to callback</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ layout: 'uncertified' })
export default class LoginPage extends Vue {
  beforeCreate() {
    this.$router.push('/')
  }
}
</script>
