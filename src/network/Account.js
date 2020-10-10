import {request} from './request'
import axios from 'axios'
const apiPath = '/api/v1/account/info'
export function getAccountInfo () {
    return request({
      url: apiPath,

    })
}
export function bindCitiAccount (formData) {
  axios({
    method:"post",
    url:"api/account/bind",
    headers: {
      "Cookie: session-id=${value}": "require",
      "Content-Type: string" : "require",
      "Uuid: string" : "require"
    },
    withCredentials:true,
    data:formData
  }).then((res)=>{
    console.log(res);
  });

}


