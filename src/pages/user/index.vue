<template>
  <UsersCard :users="users" @move="moveToNew" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'vue-apollo'
import UsersCard from '~/components/UsersCard.vue'
import users from '~/apollo/queries/users.gql'
import { User } from '~/gql-types'

@Component({
  components: { UsersCard },
  apollo: {
    users: {
      prefetch: true,
      query: users
    }
  }
})
export default class UserIndexPage extends Vue {
  private readonly users: User[] = []

  moveToNew(): void {
    this.$router.push('/user/new')
  }
}
</script>
