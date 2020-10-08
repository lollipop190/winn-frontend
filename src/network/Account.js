import { request } from './request'
const apiPath = '/api/v1/account/info'
export function getAccountInfo() {
  return request({
    url: apiPath
  })
}
export function bindCitiAccount(data) {
  return request({
    url: 'api/account/bind',
    method: 'post'
    // todo update data
  })
}
