<template>
	<view class="content" v-if="showHeader"
		style="position: fixed;top: 0;left: 0;z-index: 777;width: 100%;height: 100vh;background-color: #FFFFFF;">
		<camera :binderror="handleCameraError" :device-position="devicePosition" flash="off"
			style="width: 100%; height: 80vh;">
		</camera>
		<view class="btns" style="width: 100%;height: 20vh;background: #e7e7e7;">
			<image class="item" @click="chooseImage" src="../../static/pic/problem/chakanxiangce.svg"></image>
			<image class="item" @click="takePhotoByHead" src="../../static/pic/problem/takephoto.svg"></image>
			<image class="item" @click="reverseCamera" src="../../static/pic/problem/change.svg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				authCamera: false,
				showHeader: true,
				ctxHeader: null,
				devicePosition:'front'
			}
		}, 
		watch:{
			showHeader(val){
				console.log(val)
				return
				var that = this;
				//获取相机权限
				uni.getSetting({
					success(res) {
						console.log('相机权限:', res)
						if (res.authSetting["scope.camera"]) {
							that.authCamera = true
						} else {
							that.authCamera = false
						}
					}
				})
			}
		},
		onShow() {
			var that = this;
			//获取相机权限
			uni.getSetting({
				success(res) {
					console.log('相机权限:', res)
					if (res.authSetting["scope.camera"]) {
						that.authCamera = true
					} else {
						that.authCamera = false
					}
				}
			})
		},
		onLoad() {

		},
		methods: {
			chooseImage(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res)=> {
						this.newPath = res.tempFilePaths[0]
						console.log(this.newPath)
						this.$store.commit('set_photo', this.newPath)
						uni.navigateBack({
						    delta: 1
						});
				    }
				});
			},
			//拍摄头像
			takePhotoByHead() {
				this.showHeader = true //开启拍照
				this.ctxHeader = uni.createCameraContext();
				this.ctxHeader.takePhoto({
					quality: 'high',
					success: (res) => {
						console.log(res)
						uni.compressImage({
							src: res.tempImagePath,
							quality: 90, //压缩比例
							success: ress => {
								this.newPath = ress.tempFilePath; //图片
								console.log(this.newPath)
								this.$store.commit('set_photo', this.newPath)
								uni.navigateBack({
								    delta: 1
								});
							}
						})


					}
				});
			},
			handleCameraError() {
				uni.showToast({
					title: '用户拒绝使用摄像头',
					icon: 'none'
				})
			},
			reverseCamera() {
				this.devicePosition = (("back" === this.devicePosition) ? "front" : "back")
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: center;
		background: #fff;
		box-sizing: border-box;
		height: 100%;
		width: 100vw;

		.btns {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.item {
				width: 100rpx;
				height: 100rpx;
			}

		}
	}
</style>
