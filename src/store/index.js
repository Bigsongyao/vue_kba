import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
const _User = {
  // 存储状态值
  state: {
    userdata: {}
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    setuserdata(state, data) {
      if (data === undefined || data === null) {
        data = {}
      } else if (typeof data !== 'object') {
        data = {}
      }
      state.userdata = data;
    },
    deluserdata(state) {
      state.userdata = {};
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    isUser: state => {
      var arr = Object.keys(state.userdata);
      return arr.length > 0 ? true : false;
    },
    userinfo: state => {
      return state.userdata;
    }
  },
  actions: {
    
  }
};
const _Config = {
  // 存储状态值
  state: {
    siteinfo: []
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    refreshData(state, data) {
      state.siteinfo = data;
    },
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {},
  
  actions: { 
    GetConfig(context, object) {
      Vue.http.post('http://www.homegikk.com/app/index.php?i=2&c=entry&do=ajax&m=we7_jkj&op=done&fun=get_config').then(function(response) {
            const json = response.data.content
            context.commit('refreshData', json);
        }, function(response) {
            console.log('Interface error')
        });

    }
  }
}
const store = new Vuex.Store({
  modules: {
    User: _User,
    config: _Config
  }
})

export default store;