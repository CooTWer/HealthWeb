var httpMethod = {

     postMethod(url, obj) {
        const req = new XMLHttpRequest()
        req.onload = function () {
            alert("Message publish success");
        }
        req.open('POST', url)
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        req.setRequestHeader('authorization', localStorage.token)
        req.send(JSON.stringify(obj))
    }
};

export default httpMethod;

