<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col md="auto">
          <v-text-field v-model="input.name" placeholder="Name"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="auto">
          <v-text-field
            v-model="input.email"
            placeholder="Email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="auto">
          <v-btn @click="save">登録</v-btn>
          <v-btn @click="cancel">キャンセル</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import 'vue-apollo'
import { UserInput } from '~/gql-types'

class UserInputImpl implements UserInput {
  name!: string
  email: string
  constructor() {
    this.name = ''
    this.email = ''
  }
}

@Component({})
export default class UserForm extends Vue {
  // 入力フォームの初期化
  input: UserInput = new UserInputImpl()

  save() {
    // TODO: バリデーション実装
    this.$emit('submit', this.input)
  }

  @Emit('cancel')
  cancel(): void {}
}
</script>
