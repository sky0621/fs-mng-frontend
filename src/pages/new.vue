<template>
  <div>
    <MovieForm @success="moveToIndex" @cancel="moveToIndex" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import 'vue-apollo'
  import MovieForm from '~/components/MovieForm.vue'

  @Component({
    components: { MovieForm }
  })
  export default class NewPage extends Vue {
    moveToIndex(): void {
      this.$router.push('/')
    }
  }
</script>
