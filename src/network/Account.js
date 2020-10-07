import {request} from './request'
const apiPath = '/api/v1/account/info'
export function getAccountInfo () {
    return request({
      url: apiPath
    })
}
