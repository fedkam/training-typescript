// полезности

function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed()
    }
    return x.toString()
}



class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    title = 'error title'
}

function handle(res: MyError | MyResponse) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.title
        }
    }

}



type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
    return 0
}
setAlertType('warning') //передача только 'success' | 'danger' | 'warning'