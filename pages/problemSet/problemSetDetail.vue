<template>
	<view class="container">
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="题库详情" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		<view class="main-body">
			<view class="title-line">
				<u-row>
					<u-col span="6" style="font-size: 20px; font-weight: bold;">
						{{proSetTitle}}
					</u-col>
					<u-col span="3">
						<button class="mini-btn" type="warn" size="mini">举报</button>
					</u-col>
					<u-col span="3">
						<button class="mini-btn" type="primary" size="mini">编辑</button>
					</u-col>
				</u-row>
			</view>
			<view class="owner_info_box">
				<u-row>
					<u-col span="2">
						<u--image width="50px" height="50px" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></u--image>
					</u-col>
					<u-col span="9">
						<view class="" style="font-size: 16px;">
							{{proSetOwnerName}}
						</view>
						<view class="" style="font-size: 14px; color: darkgray;">
							<u-row>
								<u-col span="4">
									2023-3-31
								</u-col>
								<u-col span="4">
									{{proTotalNum}}题
								</u-col>
							</u-row>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="proSetStatis">
				<u-row>
					<u-col span="4">
						<view class="" style="text-align: center;">
							<uni-icons type="close" size="40" style="color: red;"></uni-icons>
						</view>
						<view class=""  style="text-align: center; font-size: 15px;">
							我的错题
						</view>
						<view class=""  style="text-align: center; font-size: 12px; color: darkgrey;">
							(51)
						</view>
					</u-col>
					<u-col span="4">
						<view class="" style="text-align: center;">
							<uni-icons type="star-filled" size="40" style="color: green;"></uni-icons>
						</view>
						<view class=""  style="text-align: center; font-size: 15px;">
							我的收藏
						</view>
						<view class=""  style="text-align: center; font-size: 12px; color: darkgrey;">
							(4)
						</view>
					</u-col>
					<u-col span="4">
						<view class="" style="text-align: center;">
							<uni-icons type="folder-add-filled" size="40" style="color: skyblue;"></uni-icons>
						</view>
						<view class=""  style="text-align: center; font-size: 15px;">
							我的笔记
						</view>
						<view class=""  style="text-align: center; font-size: 12px; color: darkgrey;">
							(0)
						</view>
					</u-col>
				</u-row>
			</view>
			
			<view class="practise-box">
				<view class="" style="font-size: 18px;">
					练习模式
				</view>
			</view>
			
			
		</view>
		
		<view class="footer">
			<u-row>
				<u-col span="2"></u-col>
				<u-col span="3">
					<u-button type="primary" shape="circle" text="分享"></u-button>
				</u-col>
				<u-col span="2"></u-col>
				<u-col span="3">
					<u-button type="success" shape="circle" text="收藏"></u-button>
				</u-col>
				<u-col span="2"></u-col>
			</u-row>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proSetTitle: "计算机组成",
				proSetOwnerName: "丁真",
				proTotalNum: 114,
				
			}
		},
		methods: {
			
			
		},
	}
</script>

<style lang="scss">
	.container {
		height: 100%;
	}
	
	.main-body {
		margin: 0 10px 0 10px;
	}
	.title-line {
		margin: 15px 0 15px 0;
	}
	.owner_info_box {
		margin-bottom: 20px;
	}
	.proSetStatis {
		margin-bottom: 40px;
	}
	
	.footer {
		margin: 0;
		padding-top: 10px;
		width: 100vw;
		background-color: #fcfcfc;
		position: fixed;
		bottom: 0;
		height: 50px;
		overflow: auto;
	}
</style>