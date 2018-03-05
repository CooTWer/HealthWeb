var httpMethod = {

  postMethod(url, obj) {
    const req = new XMLHttpRequest()
    req.onload = function () {
      alert("Message publish success");
    }
    req.open('POST', url)
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    req.setRequestHeader('authorization', localStorage.token)
    req.setRequestHeader('Access-Control-Allow-Origin','*')
    req.setRequestHeader('Access-Control-Allow-Headers','x-requested-with,content-type')
    req.send(JSON.stringify(obj))
  },

  getMethod(url) {
    const req = new XMLHttpRequest()
    req.onload = function () {
      return req.responseText;
    }
    req.open('GET', url, false)
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    req.setRequestHeader('authorization', localStorage.token)
    req.setRequestHeader('Access-Control-Allow-Origin','*')
    req.setRequestHeader('Access-Control-Allow-Headers','x-requested-with,content-type')
    return req.send()
  },

   getUserInfo : {
    uri: 'http://localhost:8080/getMyAllMessages',
    qs: {
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'authorization': localStorage.token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'x-requested-with,content-type'
    },
    json: true
  },

    getMyInfo : {
    uri: 'http://localhost:8080/getMyMessages',
    qs: {
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'authorization': localStorage.token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'x-requested-with,content-type'
    },
    json: true
  },

    getRankInfo : {
        uri: 'http://localhost:8080/getMessageByLove',
        qs: {
        },
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': localStorage.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'x-requested-with,content-type'
        },
        json: true
    },
    
    getFollowByStatus(param) {
        return {
            uri: 'http://localhost:8080/getPeopleForFollow',
            qs: {
                status: param
            },
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'authorization': localStorage.token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'x-requested-with,content-type'
            },
            json: true      
        }
    },

    postMyMessage(text, image, publish_Date) {
        return {
            method: 'POST',
            uri: 'http://localhost:8080/putMyAllMessage',
            qs: {
                Id_P : 1,
                Publish_Date : publish_Date,
                Text : text,
                Image : image
            },
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'authorization': localStorage.token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'x-requested-with,content-type'
            },
            json: true
        }
    },
  
};

export default httpMethod;

