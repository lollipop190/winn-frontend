import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: '',//先不设置了,
    timeout: 5000
  })

  // instance.interceptors.request.use(config=>{
  //   return config
  // }, error => {
  //
  // })
  //
  // instance.interceptors.request.use(res =>{
  //   return res.data
  // }, error => {
  //   console.log(error);
  // })

  return instance(config);
}

export function citiAccountBind (config) {
  const instance = axios.create({
    timeout: 5000
  })
  return instance(config);
}


