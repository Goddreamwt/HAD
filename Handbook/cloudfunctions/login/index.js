exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    openid: event.userInfo.openId,
  }
}
