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
    method:"get",
    url:"https://sandbox.apihub.citi.com/gcb/api/authCode/oauth2/authorize",
    withCredentials:true,
    params:formData
  }).then((res)=>{
    console.log(res);
    //todo
  });

}


