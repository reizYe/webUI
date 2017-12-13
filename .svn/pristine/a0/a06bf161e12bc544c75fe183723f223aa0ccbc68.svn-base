import {getInfo} from '@/config/axios'
import apiPath from './apiPath'
const url = process.env.NODE_ENV === 'development' ? '' : ''
/**
 * 登录接口
 * @param {}
 */
const login = (params) => getInfo(url + apiPath.login, params, 'post', false)
/**
 * 测试列表数据接口
 */
const getTableData = (params) => getInfo(url + apiPath.tableApi, params, 'post', false)
/**
 * 获取菜单接口
 */
const getMenuItem = (params) => getInfo(url + apiPath.getMenuList, params, 'post', false)
export {
  login,             // 登录
  getTableData,
  getMenuItem        // 获取菜单
}
