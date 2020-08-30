// 导入接口域名列表
import base from './base';
// 每个模块都应该有自己的接口文件去统一管理api
import { GET, POST, PUT, PATCH, DELETE } from '@/utils/request'
import store from '../store/index'
let githubUsername = store.state.configuration.githubUsername

export const createGist = (params) => POST(`${base.github}/gists`, params);

export const editGist = (id, params) => PATCH(`${base.github}/gists/${id}`, params);

export const deleteGist = (id, params) => DELETE(`${base.github}/gists/${id}`, params);

export const getGist = (params) => GET(`${base.github}/users/${githubUsername}/gists`, params);

export const getSingle = (params) => GET(`${base.github}/gists/${params}`);

export const UploadImageApi = (name, form, params, config) => PUT(`${base.github}/repos/${githubUsername}/${form.repos}/contents${form.name}/${name}`, params, config);