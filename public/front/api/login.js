function loginApi(data) {
    return $axios({
      'url': '/user/login',
      'method': 'post',
      data
    })
  }


function sendMsgApi(data) {
    // return this.$http['post']('/user/sendMsg', data)
    return $axios({
        'url': '/user/sendMsg',
        'method': 'post',
        data
    })
}

function loginoutApi() {
  return $axios({
    'url': '/user/loginout',
    'method': 'post',
  })
}

  