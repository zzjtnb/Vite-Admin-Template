import { GET, POST } from '../libs/request'
export const login = (params) => POST('/api/v1/user/login', params);