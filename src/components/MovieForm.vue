<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col md="auto">
            Name: <v-text-field v-model="input.name"></v-text-field>
            <video :src="uploadTargetUrl" width="800" height="450" controls></video>
            <v-file-input v-model="input.movieFile" @change="getUploadTargetFileUrl" accept=".mp4"></v-file-input>
            <v-btn @click="save">登録</v-btn>
            <v-btn @click="cancel">キャンセル</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
  import {Vue, Component, Emit} from 'nuxt-property-decorator'
  import 'vue-apollo'
  import createMovie from '@/apollo/mutations/movies.gql'
  import {MovieInput} from "~/gql-types";

  @Component({})
  export default class MovieForm extends Vue {
    // 入力フォームの初期化
    input: MovieInput = new MovieInputImpl()

    private uploadTargetUrl: string = '';
    getUploadTargetFileUrl(): void {
      // FIXME:
    }

    save(): void {
      // FIXME:
      console.log(this.input)
      this.success()
    }

    @Emit('success')
    success(): void {}

    @Emit('cancel')
    cancel(): void {}
  }

  class MovieInputImpl implements MovieInput {
    movieFile: any
    name!: string
    scale!: number
    constructor() {}
  }
</script>
