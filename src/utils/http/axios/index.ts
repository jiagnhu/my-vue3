/*
 * @@Author: 唐亿开
 * @Date: 2022-01-24 19:30:43
 * @LastEditors: 唐亿开
 * @LastEditTime: 2022-01-25 16:33:56
 * @FilePath: /my-vue3/src/utils/http/axios/index.ts
 * @kjj1: 图案快捷键：window：ctrl+alt+j, mac：ctrl+cmd+j
 * @kjj2: 首部注释快捷键：window：ctrl+alt+i, mac：ctrl+cmd+i
 */
import axios from 'axios'

const baseURL: any = import.meta.env.VITE_APP_API_BASEURL + '/api/'
console.log(baseURL)
axios.defaults.baseURL = baseURL
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'

// 超时时间
axios.defaults.timeout = 120000
// axios.defaults.withCredentials = true

// 头部
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 上传图片
export const instance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

// 上传Excel实例
export const uploadExcel = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {},
})

//  Excel实例
export const downloadExcel = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {},
  responseType: 'blob', // 表明返回服务器返回的数据类型
})

//  tikTok实例
export const tikTok = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    // cookie:
    //   'x-jupiter-uuid=16407436825348374; source=bd.pcpz.1; MONITOR_WEB_ID=1a6b1835-5310-44f5-ab67-d735a7b64493; MONITOR_DEVICE_ID=75015c1c-2f44-4d98-b193-4d5c1a938b49; _tea=TEA-d8921b99-a779-ac23-7daf-bbe0330572a7; fxg_guest_session=eyJhbGciOiJIUzI1NiIsInR5cCI6InR5cCJ9.eyJndWVzdF9pZCI6IkNnc0lBUkR6SEJnQklBRW9BUkkrQ2p5VHhwRlV6Q0tnYlp2OTJTa3pFRUdxZTZLekVWOXNsNTZzczNsakdVVi9GTlEwUXVsZ0Q1UUt2Nzg2RUxCWVVqOGt4dTduWXJTTkRMa09aaDBhQUE9PSIsImlhdCI6MTY0MDc0MzY4NiwibmJmIjoxNjQwNzQzNjg2LCJleHAiOjE2NDIwMzk2ODZ9.ec2b8890e374ce2ef6e1514c0cee46449e2b1e1a7049a6ef3b7e7826c7eb251e; ttcid=d31126db2fd94e56b45f0b41f4ebf3d830; MONITOR_WEB_ID=ef610f8c-9b7f-4009-821f-740173bd2c0b; passport_csrf_token_default=2874057f582d5a778c17d8a7da9eaeee; passport_csrf_token=2874057f582d5a778c17d8a7da9eaeee; Hm_lvt_b6520b076191ab4b36812da4c90f7a5e=1640743681,1640743810; sso_uid_tt=b996189ec6423ade27affb951d03ac16; sso_uid_tt_ss=b996189ec6423ade27affb951d03ac16; toutiao_sso_user=c73575530bab667ff432687bcc35b367; toutiao_sso_user_ss=c73575530bab667ff432687bcc35b367; sid_ucp_sso_v1=1.0.0-KGIzZTFiZGM5MDA2MmY0NzBlZWEwZWZjYmZlNDc3ZTU1MjY5NTczMTYKFgie5_DDj4yOBxCGh6-OBhiwITgIQCYaAmxmIiBjNzM1NzU1MzBiYWI2NjdmZjQzMjY4N2JjYzM1YjM2Nw; ssid_ucp_sso_v1=1.0.0-KGIzZTFiZGM5MDA2MmY0NzBlZWEwZWZjYmZlNDc3ZTU1MjY5NTczMTYKFgie5_DDj4yOBxCGh6-OBhiwITgIQCYaAmxmIiBjNzM1NzU1MzBiYWI2NjdmZjQzMjY4N2JjYzM1YjM2Nw; n_mh=PzxX0W_oL74S25T-T7Z4arqBVkaSpOA7x99vawB9yC4; ttwid=1%7CgemYsFjhb1BOKiy6AZ1qL5rwaiSsroI5eHtrTUE1YPg%7C1640743814%7C8c41b2c83399d0932b02834b7ae2054bcd8311660555e25585f1eb16b7c93cb9; msToken=JxHVNrEhgZxi-2xc2AC1Iy4HfR2I5Jf6Y6n9AZeKPX84ocEs10iS6o0HGvZvTFaVcP-BPoYFz3dv8QIn_QawNf-CkNO-DcIjuyS6mkyuwH7o5R8=; passport_auth_status_ss=e86b7985086e015ce2b5c34873c18833%2C4f13ef063ec8a748e0c9a31d361d0dfe; passport_auth_status=e86b7985086e015ce2b5c34873c18833%2C4f13ef063ec8a748e0c9a31d361d0dfe; uidpasaddaehruigqreajf=0; ucas_sso_c0_ss=CkEKBTEuMC4wEI2Iksy_7_DlYRjmJiDP4NCyj4ziBiiwITCe5_DDj4yOB0CNh6-OBkiNu-uQBlCpvNTexYiEk2FYcBIUFAN9fGQJCEZ8YDp8OIQaHc4Rb80; ucas_sso_c0=CkEKBTEuMC4wEI2Iksy_7_DlYRjmJiDP4NCyj4ziBiiwITCe5_DDj4yOB0CNh6-OBkiNu-uQBlCpvNTexYiEk2FYcBIUFAN9fGQJCEZ8YDp8OIQaHc4Rb80; ucas_c0_ss=CkEKBTEuMC4wEIeIgMSH8PDlYRjmJiDP4NCyj4ziBiiwITCe5_DDj4yOB0CNh6-OBkiNu-uQBlCpvNTexYiEk2FYcBIUtaFYTPSg7KOeeU1XReC685sXcUk; sid_guard=3ad52c37d8f3aa84523745fb5757d362%7C1640743821%7C5184000%7CSun%2C+27-Feb-2022+02%3A10%3A21+GMT; uid_tt=7e34fccbc3666eeaf8ffa8a499e3ded6; uid_tt_ss=7e34fccbc3666eeaf8ffa8a499e3ded6; sid_tt=3ad52c37d8f3aa84523745fb5757d362; sessionid=3ad52c37d8f3aa84523745fb5757d362; sessionid_ss=3ad52c37d8f3aa84523745fb5757d362; sid_ucp_v1=1.0.0-KGNjOTU2NTkxOTUzZWM0ZDIxZmVlNGY0NTE3MzE0ZGM5N2NjYTNkYmYKFgie5_DDj4yOBxCNh6-OBhiwITgIQCYaAmxmIiAzYWQ1MmMzN2Q4ZjNhYTg0NTIzNzQ1ZmI1NzU3ZDM2Mg; ssid_ucp_v1=1.0.0-KGNjOTU2NTkxOTUzZWM0ZDIxZmVlNGY0NTE3MzE0ZGM5N2NjYTNkYmYKFgie5_DDj4yOBxCNh6-OBhiwITgIQCYaAmxmIiAzYWQ1MmMzN2Q4ZjNhYTg0NTIzNzQ1ZmI1NzU3ZDM2Mg; ucas_c0=CkEKBTEuMC4wEIeIgMSH8PDlYRjmJiDP4NCyj4ziBiiwITCe5_DDj4yOB0CNh6-OBkiNu-uQBlCpvNTexYiEk2FYcBIUtaFYTPSg7KOeeU1XReC685sXcUk; PHPSESSID=0b889f595636deae608a8935058489e3; PHPSESSID_SS=0b889f595636deae608a8935058489e3; need_choose_shop=0; login_info=%7B%22for_im_reply%22%3A%220b889f595636deae608a8935058489e3%22%7D; gftoken=M2FkNTJjMzdkOHwxNjQwNzQzODI4ODN8fDAGBgYGBgY; s_v_web_id=verify_kxqwj4xt_gCbG6cD7_Is8f_4n8J_AQtF_WwVhJtJpJAeI; SHOP_ID=22838891; PIGEON_CID=4002638810854302; _tea_utm_cache_2018=undefined; Hm_lpvt_b6520b076191ab4b36812da4c90f7a5e=1640747788; tt_scid=G1snkXif7CAWYQarM4loS.BP7m9zgCQHpoUdrrsZnBb.SwBHpa8k3d7fkCfzBFQl122a'
  },
})

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put') {
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axios
