// import {menuData} from '@/assets/json/menu'
import * as api from '@/service/getData'
// import * as util from '@/config/mUtils'
import * as types from './mutation-types'
export default {
  getMenuItem: ({commit}, params) => api['getMenuItem']().then((data) => {
    commit(types.MENU_ITEM, data.data)
    return data.data
  }),
  getTableData: ({commit}, params) => api['getTableData']().then((data) => data)
}
