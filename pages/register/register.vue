<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="@/static/pic/login/bg_login.png" class="tui-bg-img"></image>
			<image src="@/static/pic/login/mine_def_touxiang_3x.png" class="tui-photo"></image>
			<view class="tui-login-name">学舟</view>
		</view>
		<form :report-submit="true" @submit="formRegister">
			<view class="tui-login-from">
				<view class="tui-line-cell">
					<tui-icon name="people" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="username" placeholder="请输入用户名"
						maxlength="35" v-model="username"/>
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
					<tui-button width="182rpx" height="56rpx" :size="24" :type="type" shape="circle" :plain="true"
						:disabled="disabled" @click="btnSend">{{ btnText }}</tui-button>
				</view>
				
				<view class="tui-line-cell tui-top28">
					<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="password" placeholder="请输入密码" password="true"
						maxlength="35" v-model="password"/>
				</view>
				
				<view class="tui-line-cell tui-top28">
					<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="confirm" placeholder="请再次确认密码" password="true"
						maxlength="35" v-model="confirm"/>
				</view>
				
				
				<u--text color="#5c8dff" text="已有账号？登录" align="right"
					size="18" margin="10rpx" @click="toLogin"></u--text>
				
				
				<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover"
					form-type="submit">注册</button>
				<view class="tui-protocol" hover-class="opcity" :hover-stay-time="150">
					点击"注册"即表示已同意
					<text class="tui-protocol-red">《用户协议》</text>
				</view>
			</view>
		</form>
		
	</view>
</template>

<script>
	import form from '@/components/tui-validation/tui-validation.js'
	import tuiButton from '@/components/tui-button/tui-button.vue'
	import tuiIcon from '@/components/tui-icon/tui-icon.vue'
	import tuiToast from '@/components/tui-toast/tui-toast.vue'
	import myRequest from '../../common/request'
	
	import util from '@/util/thor_utils/util.js'
	export default {
		data() {
			return {
				disabled: false,
				username: '',
				password: '',
				confirm: '',
				type: 'primary',
				
				btnText: '获取验证码',
				email: '',
				code: ''
			};
		},
		methods: {
			checkPassword() {
				// 检查密码的强度
				let password = this.password;
				
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
					"name": this.username,
					"password": this.password,
					"email": this.email,
					"v_code": this.code
				}
				uni.request({
					url: myRequest.interfaceUrl() + "/register",
					data: JSON.stringify(userInfo),
					method: 'POST',
					
					success: res => {
						if (res.statusCode == 200) {
							myRequest.toast('注册成功', 500, true)
							setTimeout(() => {
								uni.hideToast();
								//关闭提示后跳转
								uni.redirectTo({
									url: "/pages/login/login"
								});
							}, 800)	
						}
						else if (res.statusCode == 400) {
							this.tui.toast("验证码错误或已过期")
						}
						else if (res.statusCode == 409){
							this.tui.toast("用户名已存在");
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
				let password = e.detail.value.password;
				let username = e.detail.value.username;
				let confirm = e.detail.value.confirm;
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
			},
			toLogin() {
				uni.redirectTo({
					url: "/pages/login/login"
				})
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

	.tui-input {
		font-size: 32rpx;
		flex: 1;
		display: inline-block;
		padding-left: 32rpx;
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
</style>