<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="@/static/pic/login/bg_login.png" class="tui-bg-img"></image>
			<image src="@/static/pic/boat4study.png" class="tui-photo"></image>
			<view class="tui-login-name">学舟</view>
		</view>
		<form :report-submit="true" @submit="formLogin">
			<view class="tui-login-from">
				<view class="tui-line-cell">
					<tui-icon name="people" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="username" placeholder="请输入用户名"
						maxlength="20" v-model="username"/>
				</view>
				<view class="tui-line-cell tui-top28">
					<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="password" placeholder="请输入密码" password="true"
						maxlength="30" v-model="password"/>
				</view>
				
				<view style="margin-top: 10px;">
					<u-row>
						<u-col :span="6">
							<u--text color="#5c8dff" text="忘记密码？" align="left"
								size="18" margin="10rpx" @click="toPassword"></u--text>
						</u-col>
						
						<u-col :span="6">
							<u--text color="#5c8dff" text="注册" align="right"
								size="18" margin="10rpx" @click="toRegister"></u--text>
						</u-col>
					</u-row>
				</view>

				
				<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover"
					form-type="submit">登录</button>
				<!-- <view class="tui-protocol" hover-class="opcity" :hover-stay-time="150">
					点击"登录"即表示已同意
					<text class="tui-protocol-red">《用户协议》</text>
				</view> -->
				<!-- 
				<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover"
					@click="toWxLogin">微信登录</button> -->
			</view>
		</form>
		
		<!-- #ifdef MP-WEIXIN -->
		<view style="margin-top: 50px;">
			<view style="display: flex; justify-content: center;">
				<u-icon name="weixin-circle-fill"
					size="50px" color="#32df73" @click="wxLogin"></u-icon>
			</view>
		</view>
		<!-- #endif -->
		
		<tui-modal :show="show" @cancel="hide" :custom="true" fadeIn>
			<view class="tui-modal-custom">
				<view class="tui-prompt-title">请完善信息</view>
				
				<form :report-submit="true" @submit="formRegister">
					<view class="register-form">
						<view class="tui-line-cell">
							<tui-icon name="people" :size="20" color="#6d7a87"></tui-icon>
							<input placeholder-class="tui-phcolor" class="tui-input" name="r_username" placeholder="请输入用户名"
								maxlength="35" v-model="r_username"/>
						</view>
						
						<view class="tui-line-cell tui-top28">
							<tui-icon name="mail" :size="20" color="#6d7a87"></tui-icon>
							<input placeholder-class="tui-phcolor" class="tui-input" name="email" placeholder="请输入邮箱"
								maxlength="256" v-model="email" />
						</view>
						
						<view class="tui-line-cell tui-top28">
							<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
							<input placeholder-class="tui-phcolor" class="tui-input" name="code" placeholder="请输入验证码"
								maxlength="6" v-model="code" />
							<tui-button width="182rpx" height="56rpx" :size="24" type="primary" shape="circle" :plain="true" :disabled="disabled"
								@click="btnSend">{{ btnText }}</tui-button>
						</view>
						
						<view class="tui-line-cell tui-top28">
							<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
							<input placeholder-class="tui-phcolor" class="tui-input" name="r_password" placeholder="请输入密码" password="true"
								maxlength="35" v-model="r_password"/>
						</view>
						
						<view class="tui-line-cell tui-top28">
							<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
							<input placeholder-class="tui-phcolor" class="tui-input" name="r_confirm" placeholder="请再次确认密码" password="true"
								maxlength="35" v-model="r_confirm"/>
						</view>
				
						<view style="margin-top: 10px;">
							<tui-button height="72rpx" :size="28" shape="circle" formType="submit">立即提交</tui-button>
						</view>
						
					</view>
				</form>
				
			</view>
		</tui-modal>
	</view>
</template>

<script>
	import form from '@/components/tui-validation/tui-validation.js'
	import tuiButton from '@/components/tui-button/tui-button.vue'
	import tuiIcon from '@/components/tui-icon/tui-icon.vue'
	import tuiToast from '@/components/tui-toast/tui-toast.vue'
	import tuiModal from '@/components/tui-modal/tui-modal.vue'
	import uIcon from '@/uni_modules/uview-ui/components/u-icon/u-icon.vue'
	
	import util from '@/util/thor_utils/util.js'
	import myRequest from '../../common/request'
	
	export default {
		components: {
			uIcon,
			tuiModal,
			tuiButton,
			tuiToast,
			tuiIcon
		},
		data() {
			return {
				username: '',
				password: '',
				type: 'primary',
				msg: '',
				
				token: null,
				show: false,
				disabled: false,
				r_username: '',
				r_password: '',
				r_confirm: '',
				btnText: '获取验证码',
				email: '',
				code: ''
			};
		},
		onShow() {
			uni.preloadPage({url: "/pages/homePage/homePage"});
		},
		methods: {
			hide() {
				this.show = false
			},
			
			wxLogin() {
				console.log('waiting login')
				
				uni.login({
					provider: 'weixin',
					univerifyStyle: true,
					success: (res) => {
						console.log(res)
						var code = res.code
						var data = JSON.stringify({
							"code": code
						})
						
						console.log(data)
						
						uni.request({
							url: myRequest.interfaceUrl() + '/weixin-login',
							method:'POST',
							data: data,
							success: res => {
								
								console.log(res)
								if (res.statusCode == 200) {
									var t = res.data
									if (t.code == 200) {
										this.store(res.data.token)
									}
									else if (t.code == 201) {
										this.token = t.token
										this.show = true
										console.log(this.token)
									}
								}
								else {
									myRequest.toast()
								}
							},
							fail: () => {
								myRequest.toast()
								console.log('fail')
							}
						})
					},
					
					fail: (res) => {
						myRequest.toast()
					}
				})
			},
			
			store(token) {
				uni.setStorage({
					key: 'token',
					data: token
				})
				
				uni.request({
					url: myRequest.interfaceUrl() + '/user/info',
					method: 'GET',
					header: {
						"X-Token": token,	
					},
					
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							uni.setStorage({
								key: 'user_info',
								data: res.data
							})
							
							uni.switchTab({
								url: '/pages/homePage/homePage'
							})
						}
						else {
							myRequest.toast()
						}
					},
					
					fail: res => {
						console.log(res)
						myRequest.toast()
					}
				})
			},
			
			login(e) {
				let userInfo = {
					"username": this.username,
					"password": this.password
				}
				
				uni.request({
					url: myRequest.interfaceUrl() + "/login",
					method: 'POST',
					data: JSON.stringify(userInfo),
					dataType: 'json',
					
					success: res => {
						if (res.statusCode == 200) {
							this.tui.toast('登录成功')
							this.store(res.data.token)
						}
						else {
							this.tui.toast('用户名或密码错误')
						}
					},
					
					fail: res => {
						if (res == null) {
							myRequest.toast("res为null")
						}
						else {
							
						}
						// myRequest.toast("调用接口失败")
					}
				});				
			},
			formLogin: function(e) {
				let password = e.detail.value.password;
				let username = e.detail.value.username;
				let rules = [{
						name: 'username',
						rule: ['required'],
						msg: ['请输入用户名']
					},
					{
						name: 'password',
						rule: ['required'],
						msg: ['请输入密码']
					}
				];
				//进行表单检查
				let formData = {
					username: username,
					password: password
				};
				let checkRes = form.validation(formData, rules);
				if (checkRes) {
					this.tui.toast(checkRes);
					return;
				}
				this.login(e)
			},
			toRegister() {
				uni.redirectTo({
					url: "/pages/register/register"
				})
			},
			toPassword() {
				uni.redirectTo({
					url: "/pages/login/forget_password"
				})
			},
			
			checkPassword() {
				// 检查密码的强度
				let password = this.r_password;
				
				// 最少8位,包含大小写字母、数字和特殊字符
				let strongRegex = new RegExp(
					"^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
					"g"
				);
				
				// 最少8位,包含大小写字母和数字	
				let mediumRegex = new RegExp(
					"^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$",
					"g"
				);
			
				if (strongRegex.test(password)) {
					return 3;
				} else if (mediumRegex.test(password)) {
					return 2;
				} else {
					return 1;
				}
			
			},
					
			doLoop: function(seconds) {
				seconds = seconds ? seconds : 60;
				this.btnText = seconds + 's后获取';
				let countdown = setInterval(() => {
					if (seconds > 0) {
						this.btnText = seconds + 's后获取';
						--seconds;
					} else {
						this.btnText = '获取验证码';
						this.disabled = false;
						this.type = 'primary';
						clearInterval(countdown);
					}
				}, 1000);
			},
			
			btnSend: function() {
				let rules = [{
					name: 'email',
					rule: ['required', 'isEmail'],
					msg: ['请输入邮箱', '请输入正确的邮箱']
				}];
				//进行表单检查
				let formData = {
					email: this.email
				};
				let checkRes = form.validation(formData, rules);
				if (!checkRes) {
					this.disabled = true;
					this.btnText = '请稍候...';
					this.type = 'gray';
			
					setTimeout(() => {
						this.doLoop(60);
					}, 500);
					
					uni.request({
						url: myRequest.interfaceUrl() + `/send-email?email=${this.email}`,
						method: 'POST',
						success: res => {
							console.log(res)
							if (res.statusCode == 200) {
								this.tui.toast('已发送验证码')
							}
							else {
								this.tui.toast()
							}
						}
					})
					
				} else {
					this.tui.toast(checkRes);
				}
			},
			
			register(e) {
				let userInfo = {
					"name": this.r_username,
					"password": this.r_password,
					"email": this.email,
					"verify_code": this.code
				}
				
				console.log(userInfo)
				
				uni.request({
					url: myRequest.interfaceUrl() + "/weixin-complete",
					data: JSON.stringify(userInfo),
					method: 'POST',
					header: {
						"X-Token": this.token
					},
					
					success: res => {
						if (res.statusCode == 200) {
							myRequest.toast('完善信息成功', 500, true)
							this.store(this.token)
						}
						else if (res.statusCode == 400) {
							console.log(res)
							this.tui.toast(res.data)
							
						}
						else {
							this.tui.toast("发生未知错误")
						}
					},
					fail: res => {
						this.tui.toast('发生未知错误')
					}
				})
				
			},
			
			formRegister: function(e) {
				let password = e.detail.value.r_password;
				let username = e.detail.value.r_username;
				let confirm = e.detail.value.r_confirm;
				let email = e.detail.value.email;
				let code = e.detail.value.code;
				
				let rules = [
					{
						name: 'username',
						rule: ['required'],
						msg: ['请输入用户名'],
					},
					{
						name: 'email',
						rule: ['required', 'isEmail'],
						msg: ['请输入邮箱', '请输入正确的邮箱']
					},
					{
						name: 'code',
						rule: ['required'],
						msg: ['请输入验证码']
					},
					{
						name: 'password',
						rule: ['required'],
						msg: ['请输入密码']
					},
					{
						name: 'confirm',
						rule: ['required', 'isSame:password'],
						msg: ['请再次确认密码', '两次输入的密码不一致']
					}
				];
				//进行表单检查
				let formData = {
					username: username,
					email: email,
					code: code,
					password: password,
					confirm: confirm
				};
				
				let checkRes = form.validation(formData, rules);
				if (checkRes) {
					this.tui.toast(checkRes);
					return;
				}
				
				if (this.checkPassword() == 1) {
					this.tui.toast('密码强度过低，应至少为8位大小写字母和数字组合')
					return;
				}
				
				this.register(e)
			}
			
		}
	};
</script>

<style>
	page {
		background-color: #fff;
	}
	
	.tui-bg-box {
		width: 100%;
		box-sizing: border-box;
		position: relative;
		padding-top: 44rpx;
	}

	.tui-photo {
		height: 138rpx;
		width: 138rpx;
		display: block;
		margin: 10rpx auto 0 auto;
		border-radius: 50%;
		position: relative;
		z-index: 2;
	}

	.tui-login-name {
		width: 128rpx;
		height: 40rpx;
		font-size: 40rpx;
		color: #fff;
		margin: 36rpx auto 0 auto;
		text-align: center;
		position: relative;
		z-index: 2;
	}

	.tui-bg-img {
		width: 100%;
		height: 346rpx;
		display: block;
		position: absolute;
		top: 0;
	}

	.tui-login-from {
		width: 100%;
		padding: 128rpx 104rpx 0 104rpx;
		box-sizing: border-box;
	}

	.register-form {
		width: 100%;
		/* padding: 128rpx 104rpx 0 104rpx; */
		box-sizing: border-box;
	}

	.tui-input {
		font-size: 32rpx;
		flex: 1;
		display: inline-block;
		padding-left: 32rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.my-input {
		font-size: 32rpx;
		flex: 1;
		display: inline-block;
		padding-left: 5rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-line-cell {
		padding: 27rpx 0;
		display: -webkit-flex;
		display: flex;
		-webkiit-align-items: center;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-line-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #e0e0e0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-top28 {
		margin-top: 28rpx;
	}

	.tui-btn-class {
		width: 196rpx !important;
		height: 54rpx !important;
		border-radius: 27rpx !important;
		font-size: 28rpx !important;
		padding: 0 !important;
		line-height: 54rpx !important;
	}

	.tui-btn-submit {
		margin-top: 60rpx;
	}

	.tui-protocol {
		color: #333;
		font-size: 24rpx;
		text-align: center;
		width: 100%;
		margin-top: 29rpx;
	}

	.tui-protocol-red {
		color: #f54f46;
	}
	
	.tui-button-primary {
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		background: linear-gradient(-90deg, #5677fc, #5c8dff);
		border-radius: 45rpx;
		color: #fff;
		font-size: 36rpx;
	}
	
	.tui-button-hover {
		color: #d5d4d9;
		background: linear-gradient(-90deg, #4a67d6, #4e77d9);
	}
	
	.tui-phcolor {
		color: #ccc;
		font-size: 32rpx;
		overflow: visible;
	}
	
	.tui-tips-img {
		width: 80rpx;
		height: 80rpx;
		margin-top: 20rpx;
	}
	
	.tui-modal-custom-text {
		font-size: 30rpx;
		color: #333;
		padding: 30rpx 0 50rpx;
	}
	
	.tui-prompt-title {
		padding-bottom: 20rpx;
		font-size: 34rpx;
	}
	
	.tui-input__box {
		width: 80%;
		height: 82rpx;
		margin: 30rpx auto 50rpx;
	}
	
	.tui-modal-input {
	
		border-bottom: 1rpx solid #e6e6e6;
		height: 80rpx;
		font-size: 28rpx;
		text-align: center;
	}
	
	.tui-hidden-input {
		/* #ifdef MP-WEIXIN */
		width: 0;
		/* #endif */
	}
	
	.tui-line-cell {
		padding: 27rpx 0;
		display: -webkit-flex;
		display: flex;
		-webkiit-align-items: center;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.tui-line-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #e0e0e0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}
	
	.tui-top28 {
		margin-top: 28rpx;
	}
	
</style>