import httpRequest                  from 'superagent';

const APIUtils = {

  fetchData: function (dataObj = {}) {
    // {
    //   url: 'url';
    //   query: 'query parameter';
    //   method: 'request method, get, post';
    //   postData: 'posted data';
    //   type: '区分请求'
    // }

    const url = dataObj.url;
    const query = dataObj.query || {};
    const postData = dataObj.postData || {};
    const type = dataObj.type;
    const method = dataObj.method || 'GET';
    query.ts = new Date().getTime();

    return new Promise((resolve, reject) => {

      var request = httpRequest.get(url);
      if (method === "PUT") {
        request = httpRequest.put(url);
      }
      if (method === "POST") {
        request = httpRequest.post(url);
      }
      if (method === "DEL") {
        request = httpRequest.delete(url);
      }

      request
        .query(query)
        .send(postData)
        .end((err, res) => {
            if (res && res.ok) {
              return res;
            }
            return reject(err);
          }
        )
    });
  },

};

export default APIUtils;
