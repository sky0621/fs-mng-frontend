<template>
  <div>
    <ViewersCard :viewers="viewers" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'vue-apollo'
import ViewersCard from '~/components/ViewersCard.vue'
import viewers from '~/apollo/queries/viewer.gql'
import { Viewer } from '~/gql-types'

@Component({
  components: { ViewersCard },
  apollo: {
    viewers: {
      prefetch: true,
      query: viewers
    }
  }
})
export default class IndexPage extends Vue {
  private readonly viewers: Viewer[] = []
}
</script>
