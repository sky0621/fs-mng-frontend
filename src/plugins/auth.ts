// @ts-ignore
export default function({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  console.log($auth)
  // const username = $auth.user.username
  // console.log(username)
}
