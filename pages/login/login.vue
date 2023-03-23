<template>
	<view>
		<uni-section title="注册" type="circle">			
			<u--form
					labelPosition="left"
					:model="model1"
					ref="form1"
			>
				<u-form-item
					label="昵称"
					borderBottom
					ref="item1"
				>
					<u--input
						v-model="model1.userInfo.username"
						border="none"
					></u--input>
					
				</u-form-item>	
				
				<u-form-item
					label="密码"
					borderBottom
					ref="item2"
				>
					<u--input
						v-model="model1.userInfo.password"
						border="none"
					></u--input>
					
					
				</u-form-item>	
			</u--form>
			<u-button @click="register_submit">提交</u-button>
		</uni-section>
		
		<uni-section title="登录" type="circle">
			<u--form
					labelPosition="left"
					:model="model2"
					ref="form2"
			>
				<u-form-item
					label="昵称"
					borderBottom
					ref="item3"
				>
					<u--input
						v-model="model2.userInfo.username"
						border="none"
					></u--input>
					
				</u-form-item>	
				
				<u-form-item
					label="密码"
					borderBottom
					ref="item4"
				>
					<u--input
						v-model="model2.userInfo.password"
						border="none"
					></u--input>
					
					
				</u-form-item>	
			</u--form>
			<u-button @click="login_submit">提交</u-button>
		</uni-section>
		
		<uni-section title="登出" type="circle">
			<u-button @click="logout">登出</u-button>
		</uni-section>
		
		<uni-section title="查询当前登录状态" type="circle">
			<u--text :text="username"></u--text>
			
			<u-button @click="query">查询</u-button>
		</uni-section>
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			model1: {
				userInfo: {
					username: '',
					password: "123456"
				},
			},
			
			model2: {
				userInfo: {
					username: "test_name",
					password: "123456"
				}
			},
			
			username: "",
			
			radio: '',
			switchVal: false
		};
	},
	methods: {
		sexSelect(e) {
			this.model1.userInfo.sex = e.name
			this.$refs.form1.validateField('userInfo.sex')
		},
		
		register_submit(e) {
			// console.log(this.model1);
			let userInfo = {
				"name": this.model1.userInfo.username,
				"password": this.model1.userInfo.password
			}
			console.log(userInfo);
			
			uni.request({
				url: "http://123.249.3.32:9000/register",
				data: JSON.stringify(userInfo),
				method: 'POST',
				
				success: res => {
					console.log(res)
					if (res.statusCode == 200) {
						console.log("注册成功")
					}
				}
			})
			
			// this.model1.userInfo.name = ''
			// this.model1.userInfo.password = ''
		},
		
		login_submit(e) {
			let userInfo = {
				"username": this.model2.userInfo.username,
				"password": this.model2.userInfo.password
			}
			
			console.log(userInfo)
			
			uni.request({
				url: "http://123.249.3.32:9000/login",
				method: 'POST',
				data: JSON.stringify(userInfo),
				
				success: res => {
					console.log(res)
					if (res.statusCode == 200) {
						console.log('登录成功')
						console.log(res.data.token)
						uni.setStorage({
							key: 'token',
							data: res.data.token
						})
						uni.switchTab({
							url: '/pages/homePage/homePage'
						})
					}
					this.query(e);
				},
				
				fail: res => {
					this.query(e);
				}
			});
			
		},
		
		logout(e) {
			var token;
			
			uni.getStorage({
				key: 'token',
				
				success: res => {
					console.log(res.data)
					token = res.data
				}
			})
			
			if (!token) return;
			
			uni.request({
				url: "http://123.249.3.32:9000/logout",
				header: {
					"X-Token": token
				},
				
				method: 'GET',
				
				success: res => {
					console.log(res)
				}
			})
			
			uni.removeStorage({
				key: 'token'
			})
			
			this.username = "未登录"
			
		},
		
		query(e) {
			console.log(2222);
			
			var token;
			
			uni.getStorage({
				key: 'token',
				
				success: res => {
					console.log(res.data)
					token = res.data
				}
			})
			
			if (!token) {
				this.username = "未登录"
				return
			}
			
			console.log('token', token);
			
			uni.request({
				url: "http://123.249.3.32:9000/user/info",
				header: {
					"X-Token": token
				},
				
				method: 'GET',
				
				success: res => {
					console.log(res)
					if (res.statusCode == 200)
						this.username = res.data.user_name;
					else 
						this.username = "未登录"
				},
			})
			
		}
	},
	
	onReady() {
		this.query();
    },
};
</script>