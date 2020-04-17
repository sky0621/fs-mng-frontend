<template>
  <v-container>
    <v-form>
      <div>
        Name: <v-text-field v-model="input.name"></v-text-field>
      </div>
      <div>
        <video :src="uploadTargetUrl" width="320" height="180" controls></video>
      </div>
      <div>
        <v-file-input v-model="input.movieFile" @change="getUploadTargetFileUrl" accept=".mp4"></v-file-input>
      </div>
      <div>
        <v-btn @click="save()">登録</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import 'vue-apollo'
  import createMovie from '@/apollo/mutations/movies.gql'

  @Component({})
  export default class MovieForm extends Vue {
    private uploadTargetUrl: string = '';
    getUploadTargetFileUrl(): void {

    }
  }
</script>
