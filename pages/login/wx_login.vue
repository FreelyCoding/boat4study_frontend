<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="@/static/pic/login/bg_login.png" class="tui-bg-img"></image>
			<image src="@/static/pic/login/mine_def_touxiang_3x.png" class="tui-photo"></image>
			<view class="tui-login-name">学舟</view>
		</view>
		<view>
			<!--微信小程序登录弹出授权登录框-->
			
			<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover"
				@click="submit">登录</button>
			
		</view>
	</view>
</template>

<script>
	import form from '@/components/tui-validation/tui-validation.js'
	import tuiButton from '@/components/tui-button/tui-button.vue'
	import tuiIcon from '@/components/tui-icon/tui-icon.vue'
	import tuiToast from '@/components/tui-toast/tui-toast.vue'
	
	import util from '@/util/thor_utils/util.js'
	import myRequest from '../../common/request'
	
	export default {
		data() {
			return {
				disabled: false,
				username: '',
				password: '',
				type: 'primary',
				msg: ''
			};
		},
		methods: {
			login() {
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
								var t = res.data
								console.log(res)
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
			submit() {
				this.login()
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