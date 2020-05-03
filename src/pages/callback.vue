<template>
  <div>Trying to callback</div>
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
