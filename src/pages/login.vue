<template>
  <v-row justify="center">
    <v-col md="auto">
      <div>fs-mng-app</div>
    </v-col>
    <v-col md="auto">
      <v-btn @click="login">Log in</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ layout: 'unCertified' })
export default class LoginPage extends Vue {
  async login() {
    try {
      await this.$auth.loginWith('auth0')
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
