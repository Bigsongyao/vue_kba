import store from '../store'
import { getCookie } from '@/assets/js/cookie.js'

export default {
    //检查帐号状态
    check: function () {
        let Base64 = require('js-base64').Base64;
        var userjson = Base64.decode(getCookie('11a0_user'));
        if (userjson.length > 0) {
            var userdata = JSON.parse(userjson);
            var arr = Object.keys(userdata);
            if (arr.length > 0) {
                store.commit('setuserdata', userdata);
                return userdata;
            }
        }
        return false;
    }
}
