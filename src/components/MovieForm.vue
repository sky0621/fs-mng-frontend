<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col md="auto">
          Name: <v-text-field v-model="input.name"></v-text-field>
          <video
            :src="uploadTargetUrl"
            width="800"
            height="450"
            controls
            @loadedmetadata="setMovieDuration"
          ></video>
          <v-file-input
            v-model="input.movieFile"
            accept=".mp4"
            @change="getUploadTargetFileUrl"
          ></v-file-input>
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
import { MovieInput } from '~/gql-types'

class MovieInputImpl implements MovieInput {
  movieFile: any
  name!: string
  scale!: number
}

@Component({})
export default class MovieForm extends Vue {
  // 入力フォームの初期化
  input: MovieInput = new MovieInputImpl()

  // ローカルにある動画を取得したら、videoタグでプレビュー表示させるためにURL生成
  private uploadTargetUrl: string = ''
  getUploadTargetFileUrl(): void {
    if (this.input.movieFile) {
      this.uploadTargetUrl = URL.createObjectURL(this.input.movieFile)
    }
  }

  // ローカルにある動画のメタ情報を読み込んだタイイングで発火
  // 動画の秒数を取得し、登録フォームの要素に自動的に格納
  setMovieDuration(e: Event): void {
    if (e && e.target) {
      const t: any = e.target
      this.input.scale = Math.round(t.duration) // 少数->整数に四捨五入して丸める
    }
  }

  save() {
    // TODO: バリデーション実装
    this.$emit('submit', this.input)
  }

  @Emit('cancel')
  cancel(): void {}
}
</script>
