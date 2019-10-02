const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let apiKey = '',
    grantType = 'client_credentials',
    secretKey = '',
    url = `https://aip.baidubce.com/oauth/2.0/token`

  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": 'pZ17hbjXl5vgQi3yxEVwz9Dah54R719e',
          "client_id": 'VZRLG6L9XlxjZf6YkTVrAAZv'
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}