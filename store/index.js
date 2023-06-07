import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // vue的插件机制

// Vuex.Store 构造器选项
const store = new Vuex.Store({
    // 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
    state: {
        // 用户信息
        photo_path: '',
    },
		mutations: {
			set_photo(state, new_path) {
				state.photo_path = new_path
				//console.log(state.photo_path)
			}
		}
})

export default store
