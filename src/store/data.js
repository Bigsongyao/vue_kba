import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default {
  phone: function(seso) {
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(seso))){
      return true
    }else{
      return false
    }
  }
}