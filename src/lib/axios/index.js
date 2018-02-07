import Vue from 'vue'
import axios from 'axios'

let lang
const language = navigator.language
if (language.includes('zh')) {
  lang = 'cn'
} else if (language === 'en') {
  lang = 'en'
} else {
  lang = 'jp'
}
Vue.prototype.axios = axios.create({
  headers: {'Content-Type': 'application/json'},
  baseURL: `/${lang}/index.php/Api`
})
