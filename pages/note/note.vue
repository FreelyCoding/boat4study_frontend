<template>
	<view>
		<view class="status-bar">
			
		</view>
		
		<view class="container">
			<!--自定义navbar-->
			<view>
				<view>
					<uni-nav-bar shadow="true" title="笔记">
						<block slot="left">
							<view class="note-navbar" >
								<i-icon size="20px" color="#666" name="arrow-left-line" ></i-icon>
							</view>
						</block>
						
						<block slot="right">
							<view class="note-navbar">
								<i-icon size="20px" color="#666" name="share-fill"></i-icon>
								<i-icon size="20px" color="#666" name="more-2-fill"></i-icon>
							</view>
							
						</block>
					</uni-nav-bar>
				</view>
			</view>
			
			<view class="title_wrapper">
				<textarea class="title" :maxlength="title_maxlength" :value="title" disabled="true"></textarea>
			</view>
			
			<!--分界线-->
			<u-line></u-line>
			
			<!--笔记内容-->
			<view class="page-body">			
				<view class='wrapper'>
				
					<view class="editor-wrapper">
						<editor id="editor" class="ql-container" showImgSize showImgToolbar showImgResize
						 @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
						</editor>
					</view>
				</view>
			</view>
			
			<!-- <uni-fab class="fab" horizontal="right" vertical="bottom" icon="icon-edit" -->
						<!-- icon_size="28" :pattern="pattern"/> -->
						
						
			<!--悬浮按钮-->
			<uni-fab ref="fab" horizontal="right" vertical="bottom" 
			direction="horizontal" :content="content" @trigger="trigger"></uni-fab>
			
			
			<u-line></u-line>
			
			<!--评论-->
			<comment-eg :articleId="'article1'"></comment-eg>
			
			<!-- <uni-list :border="false"> -->
				
				<!-- <uni-list-chat v-for="item in listData" :avatar-circle="true" :key="item.id" :title="item.author_name" :avatar="item.cover" -->
				 <!-- :note="item.title" :time="item.published_at" :clickable="false">				 -->

					<!-- <view class="chat-custom-right"> -->
						<!-- <text class="chat-custom-text">刚刚</text> -->
						<!-- 需要使用 uni-icons 请自行引入 -->
						<!-- <i-icon name="thumb-up-line"></i-icon> -->
						<!-- <uni-icons type="checkempty" color="#999" size="18"></uni-icons> -->
					<!-- </view> -->

				<!-- </uni-list-chat> -->
				
			<!-- </uni-list> -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "基物实验笔记",
				readOnly: true,
				formats: {},
				title_maxlength: 50,
				
				pattern: {
					buttonColor: "#f3f4f6",
					iconColor: "#18b566"
				},
				
				content: [{
						iconPath: '/static/pic/note/edit-fill.png',
						selectedIconPath: '/static/pic/note/edit-fill-active.png',
						text: '编辑',
						active: false
					},
					{
						iconPath: '/static/pic/note/heart.png',
						selectedIconPath: '/static/pic/note/heart-active.png',
						text: '喜欢',
						active: false
					},
					{
						iconPath: '/static/pic/note/star.png',
						selectedIconPath: '/static/pic/note/star-active.png',
						text: '收藏',
						active: false
					}
				],
				
				listData: [
					{
						id: "1",
						author_name: "用户1",
						cover: "https://img.36krcdn.com/20200406/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png",
						title: "测试内容",
						published_at: "2020-02-02 20:20"
					},
					{
						id: "2",
						author_name: "用户2",
						cover: "https://img.36krcdn.com/20200406/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png",
						title: "helloghrweuioheeo",
						published_at: "2020-02-02 20:20"
					}
				]
			}
		},
		methods: {
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					// this.editorCtx = res.context
					res.context.setContents({
						html: "<p><strong>基物实验</strong></p><p><em>111</em></p><p><em><s><u>diwjfweiohu</u></s></em></p>"
					});
				}).exec()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				// console.log('format', name, value)
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			
			trigger(e) {
				// console.log(e)
				this.content[e.index].active = !e.item.active
				// uni.showModal({
				// 	title: '提示',
				// 	content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
				// 	success: function(res) {
				// 		if (res.confirm) {
				// 			console.log('用户点击确定')
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消')
				// 		}
				// 	}
				// })
			},
		}
	}
</script>

<style>
	@import "./editor-icon.css";
	
	/* navbar css */
	/* $nav-height: 30px;
	 */
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	
	.navbar {
		position: fixed;
		top: var(--status-bar-height);
	}

	.note-navbar {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.container {
		top: var(--status-bar-height);
	}
	
	/* 主体css */

	.page-body {
		height: calc(100vh - var(--window-top) - var(--status-bar-height));
	}

	.wrapper {
		height: 100%;
	}

	.editor-wrapper {
		height: calc(100vh - var(--window-top) - var(--status-bar-height) - 140px);
		background: #fff;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.title_placeholder {
		font-size: 25px;
		/* color: #303133; */
		/* font-weight: bold; */
		font-family: 黑体;
		/* font-style: italic; */
	}

	.title {		
		box-sizing: border-box;
		padding: 10px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 10px;
		line-height: 1.5;
		
		color: #303133;
		font-size: 25px;
		font-family: 黑体;
		font-weight: bold;
		/* font-style: italic;	 */
	}
	
	.title_wrapper {
		height: 30px;
		margin-bottom: 50px;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 10px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 10px;
		font-size: 16px;
		line-height: 1.5;
	}

	.ql-active {
		color: #06c;
	}
</style>
