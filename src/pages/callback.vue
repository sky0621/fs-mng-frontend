<template>
  <v-row justify="center">
    <v-col md="auto">
      <div>Trying to callback</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Store } from 'vuex'

@Component({ layout: 'unCertified' })
export default class LoginPage extends Vue {
  fetch({ store }: { store: Store<any> }) {
    console.log('====== fetch called =====')
    // console.log(store)
  }

  beforeCreate() {
    console.log('====== beforeCreate called =====')
    // this.$router.push('/')
  }

  created() {
    console.log('====== created called =====')
    this.$router.push('/')
  }
}
</script>
