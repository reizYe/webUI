import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)
const messages = {
  'ZH': Object.assign(require('@/assets/common/lang/zh'), zhLocale),   // 中文语言包
  'EN': Object.assign(require('@/assets/common/lang/en'), enLocale)    // 英文语言包
}

export default new VueI18n({
  locale: 'ZH',    // 语言标识
  messages: messages
})
