import { Auth } from '@nuxtjs/auth'

export default function authHandler({ $auth }: { $auth: Auth }) {
  console.log('authHandler!')
  console.log($auth)

  $auth.onRedirect(() => {
    console.log('$auth.onRedirect !!!')
  })

  $auth.onError((error: Error, name: string, endpoint: any) => {
    console.log('$auth.onError !!!')
    console.log(error)
    console.log(name)
    console.log(endpoint)
  })
}
