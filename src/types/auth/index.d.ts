import { Auth } from '@nuxtjs/auth'

declare module 'vue/types/vue' {
  interface Vue {
    // @ts-ignore
    readonly auth: Auth
  }
}
