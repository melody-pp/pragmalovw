import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios.create({
  headers: {'Content-Type': 'application/json'}
})
