import axios from 'axios'
/**
 * 一些常见的http状态码信息
 */
let httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

// 创建一个axios的自定义的实例service，并且可以自定义其配置
const service = axios.create({

})


/**
 * 统一封装GET请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [`params` 是即将与请求一起发送的 URL参数,请求时携带的参数]
 * @param {Object} config [请求时配置]
 */
export const GET = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'GET',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 统一封装POST请求
 * @param {String} url [请求的url地址]
 * @param {Object} data  [`data` 是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH']
 * @param {Object} config [请求时配置]
 */
export const POST = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'POST',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 统一封装PUT请求
 * @param {String} url [请求的url地址]
 * @param {Object} data  [`data` 是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH']
 * @param {Object} config [请求时配置]
 */
export const PUT = (url, data, config) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'PUT',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 统一封装PATCH请求
 * @param {String} url [请求的url地址]
 * @param {Object} data  [`data` 是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH']
 * @param {Object} config [请求时配置]
 */
export const PATCH = (url, data, config) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'PATCH',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 统一封装DELETE请求
 * @param {String} url [请求的url地址]
 * @param {Object} data  [`data` 是作为请求主体被发送的数据,只适用于这些请求方法 'PUT', 'POST', 和 'PATCH']
 * @param {Object} config [请求时配置]
 */
export const DELETE = (url, data, config) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'DELETE',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
export default service
