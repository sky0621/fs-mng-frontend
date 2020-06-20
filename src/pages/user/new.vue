<template>
  <UserForm @submit="save" @cancel="moveToIndex" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'vue-apollo'
import UserForm from '~/components/UserForm.vue'
import { UserInput } from '~/gql-types'
import CreateUser from '~/apollo/mutations/users.gql'

@Component({
  components: { UserForm }
})
export default class UserNewPage extends Vue {
  async save(input: UserInput) {
    try {
      const res = await this.$apollo.mutate({
        mutation: CreateUser,
        variables: {
          object: {
            name: input.name
          }
        }
      })
      if (res) {
        this.$toast.success('ユーザーの登録に成功しました。')
        await this.$router.push('/user')
      } else {
        this.$toast.error('ユーザーの登録に失敗しました。')
      }
    } catch (err) {
      this.$toast.error(err)
    }
  }

  moveToIndex(): void {
    this.$router.push('/user')
  }
}
</script>
