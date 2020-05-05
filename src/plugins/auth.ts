export default function authHandler({ $auth }: any) {
  console.log('authHandler!')
  console.log($auth)

  if (!$auth.loggedIn) {
    return
  }

  console.log('loggedIn !')
  // const username = $auth.user.username
  // console.log(username)
}
