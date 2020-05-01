<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ layout: 'login' })
export default class LoginPage extends Vue {
  public beforeCreate() {
    if (process.client) {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>
