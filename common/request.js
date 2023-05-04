/**
 * 常用方法封装 请求，文件上传等
 * 修改自httpRequest.js 
 **/ 

const myRequest = {
	interfaceUrl: function() {
		return 'http://123.249.3.32:9000';
	},
	imageUrl: function() {
		return 'http://123.249.3.32:9091';
	},
	toast: function(text, duration, success) {
		uni.showToast({
			title: text || "出错啦~",
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	modal: function(title, content, showCancel, callback, confirmColor, confirmText) {
		uni.showModal({
			title: title || '提示',
			content: content,
			showCancel: showCancel,
			cancelColor: "#555",
			confirmColor: confirmColor || "#5677fc",
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			}
		})
	},
	isAndroid: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android"
	},
	isPhoneX: function() {
		const res = uni.getSystemInfoSync();
		let iphonex = false;
		let models = ['iphonex', 'iphonexr', 'iphonexsmax', 'iphone11', 'iphone11pro', 'iphone11promax']
		const model = res.model.replace(/\s/g, "").toLowerCase()
		if (models.includes(model)) {
			iphonex = true;
		}
		return iphonex;
	},
	constNum: function() {
		let time = 0;
		// #ifdef APP-PLUS
		time = this.isAndroid() ? 300 : 0;
		// #endif
		return time
	},
	delayed: null,
	showLoading: function(title, mask = true) {
		uni.showLoading({
			mask: mask,
			title: title || '请稍候...'
		})
	},
	/**
	 * 请求数据处理
	 * @param string url 请求地址
	 * @param string method 请求方式
	 *  GET or POST
	 * @param {*} postData 请求参数
	 * @param bool isDelay 是否延迟显示loading
	 * @param bool isForm 数据格式
	 *  true: 'application/x-www-form-urlencoded'
	 *  false:'application/json'
	 * @param bool hideLoading 是否隐藏loading
	 *  true: 隐藏
	 *  false:显示
	 */
	request: async function(url, method, postData, isDelay, isForm, hideLoading) {
		//接口请求
		let loadding = false;
		myRequest.delayed && uni.hideLoading();		// 如果delayed不为null先执行hideLoading
		clearTimeout(myRequest.delayed);
		myRequest.delayed = null;
		if (!hideLoading) {
			if (isDelay) {
				myRequest.delayed = setTimeout(() => {
					loadding = true
					myRequest.showLoading()
				}, 1000)
			} else {
				loadding = true
				myRequest.showLoading()
			}
		}

		return new Promise((resolve, reject) => {
			uni.request({
				url: myRequest.interfaceUrl() + url,
				data: postData,
				header: {
					'X-Token': myRequest.getToken()
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					clearTimeout(myRequest.delayed)
					myRequest.delayed = null;
					if (loadding && !hideLoading) {
						uni.hideLoading()
					}
					resolve(res)
				},
				fail: (res) => {
					clearTimeout(myRequest.delayed)
					myRequest.delayed = null;
					myRequest.toast("网络不给力，请稍后再试~")
					reject(res)
				}
			})
		})
	},
	/**
	 * 上传文件
	 * @param string url 请求地址
	 * @param string src 文件路径
	 * @param string name 文件对应的key
	 * @param Object formData Http请求中其他额外的form data
	 */
	uploadFile: function(url, src, name, formData) {
		myRequest.showLoading()
		return new Promise((resolve, reject) => {
			const uploadTask = uni.uploadFile({
				url: myRequest.interfaceUrl() + url,
				filePath: src,
				name: name,
				header: {
					'X-Token': myRequest.getToken()
				},
				formData: formData,
				success: res => {
					uni.hideLoading()
					// let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
					// if (d.code % 100 == 0) {
					// 	//返回图片地址
					// 	let fileObj = d.data;
					// 	resolve(fileObj)
					// } else {
					// 	that.toast(res.msg);
					// }
					
					if (res.statusCode == 200) {
						resolve(res);
					}
					else {
						reject(res)
						that.toast(res.msg)
					}
					
				},
				fail: function(res) {
					reject(res)
					that.toast(res.msg);
				}
			})
		})
	},
	//设置用户信息
	setUserInfo: function(token) {
		uni.setStorageSync("token", token)
	},
	//获取token
	getToken() {
		return uni.getStorageSync("token")
	},
	getUID() {
		return uni.getStorageSync("user_info").user_id
	},
	getUserAvatar() {
		return uni.getStorageSync("user_info").avatar_path
	},
	getUserName() {
		return uni.getStorageSync('user_info').user_name
	},
	
	getNickName() {
		return uni.getStorageSync('user_info').nick_name
	},
	
	queryUserInfo() {
		uni.request({
			url: myRequest.interfaceUrl() + '/user/info',
			method: 'GET',
			header: {
				'X-Token': myRequest.getToken()
			},
			
			success: (res) => {
				console.log(res)
				if (res.statusCode == 200) {
					return res.data;
				}
				else if (res.statusCode == 401) {
					myRequest.redirectToLogin()
				}
				else {
					myRequest.toast()
				}
			},
			
			fail: (res) => {					
				console.log(res)
				myRequest.toast()
			}
		})
	},
	
	getUserId() {
		uni.request({
			url: myRequest.interfaceUrl() + '/user/info',
			method: 'GET',
			header: {
				'X-Token': myRequest.getToken()
			},
			
			success: (res) => {
				console.log(res)
				if (res.statusCode == 200) {
					return res.data.user_id;
				}
				else if (res.statusCode == 401) {
					myRequest.redirectToLogin()
				}
				else {
					myRequest.toast()
				}
			},
			
			fail: (res) => {					
				console.log(res)
				myRequest.toast()
			}
		})
	},
	//判断是否登录
	isLogin: function() {
		return uni.getStorageSync("token") ? true : false
	},
	checkLogin: function () {
		if (!myRequest.isLogin()) {
			myRequest.toast('请先登录')
			uni.redirectTo({
				url: '/pages/login/login'
			})
		}
		console.log(uni.getStorageSync('token'))
	},
	redirectToLogin: function() {
		if (myRequest.isLogin()) {
			myRequest.toast('请重新登录')
		}
		else {
			myRequest.toast('请登录')
		}
		uni.navigateTo({
			url: '/pages/login/login'
		})
	},
	//跳转页面，校验登录状态
	href(url, isVerify) {
		if (isVerify && !myRequest.isLogin()) {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	}
}

export default myRequest