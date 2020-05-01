export default (error: any, context: any) => {
  // console.log('###################################')
  console.log(error)
  // console.log('###################################')
  // const { graphQLErrors, networkError } = error
  // console.log(networkError.statusCode)
  // console.log(graphQLErrors)
  // console.log(networkError)
  context.error({ statusCode: 304, message: 'Server error' })
}
