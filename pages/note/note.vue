<template>
	<view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="笔记" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
					</view>
				</block>

				<!--
				<block slot="right">
					<view class="note-navbar">
						<i-icon size="20px" color="#ffffff" name="share-fill"></i-icon>
						<i-icon size="20px" color="#ffffff" name="more-2-fill"></i-icon>
					</view>
				</block>-->
			</uni-nav-bar>

		</view>

		<view class="container">
			<view class="title_wrapper">
				<textarea class="title" :maxlength="title_maxlength" :value="title" disabled="true"></textarea>
			</view>

			<!--分界线-->
			<u-line></u-line>

			<!--笔记内容-->
			<view class="page-body">
				<view class='wrapper'>

					<view class="editor-wrapper">
						<editor id="editor" class="ql-container" @statuschange="onStatusChange" read-only
							@ready="onEditorReady">
						</editor>
					</view>
				</view>
			</view>

			<!-- <uni-fab class="fab" horizontal="right" vertical="bottom" icon="icon-edit" -->
			<!-- icon_size="28" :pattern="pattern"/> -->


			<!--悬浮按钮-->
			<uni-fab ref="fab" horizontal="right" vertical="bottom" direction="horizontal" :content="fabContent"
				@trigger="trigger"></uni-fab>


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


		<!--模态框-->
		<tui-modal :show="show" title="提示" content="确定删除笔记吗" @click="handleModalClick" width="70%"></tui-modal>

	</view>
</template>

<script>
	import myRequest from '../../common/request'
	export default {
		data() {
			return {
				title: "",
				show: false,
				valid: false,
				note_html: "",
				note_id: "",
				
				like_index: 2, 
				star_index: 3,

				fabContent: [
					{
						iconPath: '/static/pic/note/delete-bin-line.png',
						selectedIconPath: '/static/pic/note/delete-bin-fill.png',
						text: '删除',
						active: false
					},
					{
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

				listData: [{
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
			handleModalClick(e) {
				let index = e.index
				if (index == 0) {
					this.show = false;
					this.fabContent[0].active = !this.fabContent[0].active
				} else {
					this.show = false;
					this.fabContent[0].active = !this.fabContent[0].active

					console.log(123)
					console.log(this.note_id)

					myRequest.request(`/note/delete/${this.note_id}`, 'DELETE').then(
						function(res) {
							console.log(222)
							console.log(res)
							if (res.statusCode == 200) {
								uni.switchTab({
									url: '/pages/note/index'
								})
							} else if (res.statusCode == 401) {
								uni.redirectTo({
									url: '/pages/login/login'
								})
							} else {
								myRequest.toast()
							}
						}
					).catch(function(res) {
						console.log(res)
						myRequest.toast()
					})
				}
			},

			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
					
					var pages = getCurrentPages();
					var curRoutes = pages[pages.length - 1].route
					var curParam = pages[pages.length - 1].options;
					
					var id = curParam['id']
					
					if (!myRequest.isLogin()) {
						myRequest.toast('请先登录')
						uni.redirectTo({
							url: '/pages/login/login'
						})
						return
					}
					
					if (!id) {
						uni.switchTab({
							url: '/pages/note/index'
						})
					}
					else {
						this.note_id = id;
						
						uni.request({
							url: myRequest.interfaceUrl() + `/note/all?id=${id}`,
							method: 'GET',
							header: {
								'X-Token': myRequest.getToken()
							},
							success: (res) => {
								if (res.statusCode == 200) {
									console.log(res)
									if (res.data == null) {
										myRequest.toast()
										uni.switchTab({
											url: '/pages/note/index'
										})
										return
									}
									var data = res.data[0];
									
									this.title = data.title;
									this.note_html = data.content;
									this.note_id = data.id;
									
									if (data.is_liked) {
										this.fabContent[this.like_index].active = true
									}
									if (data.is_favorite) {
										this.fabContent[this.star_index].active = true
									}
									
									this.editorCtx.setContents({
										html: this.note_html
									})
								}
								else if (res.statusCode == 401) {
									myRequest.toast('请先登录')
									uni.redirectTo({
										url: '/pages/login/login'
									})
								}
								else {
									console.log('wrong')
									myRequest.toast()
									uni.switchTab({
										url: '/pages/note/index'
									})
								}
							},
							
							fail: (res) => {
								myRequest.toast()
								uni.switchTab({
									url: '/pages/note/index'
								})
							}
						})	
					}	
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
				this.fabContent[e.index].active = !e.item.active
				var t = this.fabContent[e.index].active

				if (e.index == 0) {
					this.show = true;
				}
				if (e.index == 1) {
					uni.redirectTo({
						url: `/pages/note/edit_note?id=${this.note_id}`
					})
					return
				}
				
				if (e.index == this.like_index || e.index == this.star_index) {
					
					var url;
					if (e.index == this.like_index && !t) url = `/note/unlike/${this.note_id}`
					else if (e.index == this.like_index && t) url = `/note/like/${this.note_id}`
					else if (e.index == this.star_index && !t) url = `/note/unfavorite/${this.note_id}`
					else url = `/note/favorite/${this.note_id}`
					
					uni.request({
						url: myRequest.interfaceUrl() + url,
						method: 'POST',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res) => {
							if (res.statusCode == 200) {
								console.log(res)
							}
							else if (res.statusCode == 401) {
								myRequest.toast('请先登录')
								uni.redirectTo({
									url: '/pages/login/login'
								})
							}
							else {
								console.log('wrong')
								myRequest.toast()
								uni.switchTab({
									url: '/pages/note/index'
								})
							}
						},
						
						fail: (res) => {
							myRequest.toast()
							uni.switchTab({
								url: '/pages/note/index'
							})
						}
					})	
				
				}

			},

			back() {
				var pages = getCurrentPages()
				if (pages.length > 1) {
					let page = pages[pages.length - 2]; //跳转页面成功之后
					
					if (page.route == 'pages/note/index') {
						page.refresh(); //如果页面存在，则重新刷新页面
					}
					uni.navigateBack()
				}
				else {
					uni.switchTab({
						url: '/pages/note/index'
					})
				}
			},

		},

		onLoad() {
			var pages = getCurrentPages();
			var curRoutes = pages[pages.length - 1].route
			var curParam = pages[pages.length - 1].options;
			
			var id = curParam['id']
			
			if (id) this.note_id = id
		},
	}
</script>

<style>
	@import "./editor-icon.css";
	@import url('note.css');

	/* navbar css */
	/* $nav-height: 30px;
	 */
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.navbar {
		position: fixed;
		/*top: var(--status-bar-height);*/
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
</style>
