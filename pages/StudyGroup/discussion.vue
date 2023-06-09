<template>
	<view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="讨论" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="discussion-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		

		<view class="container">
			<!--作者信息, 笔记创建时间等信息-->
			
			<view class="title_wrapper">
				<textarea class="title" :maxlength="title_maxlength" :value="title" disabled="true"></textarea>
			</view>

			<!--分界线-->
			<!-- <u-line></u-line> -->

			<view>
				<u-row>
					<u-col :span="2">
						<view style="margin-left: 15px;">
							<u-avatar :src="authorInfo.avatar">
							</u-avatar>
						</view>
						
					</u-col>
					
					<u-col :span="4">
						<view>
							<text> {{ authorInfo.nickName }} </text>
						</view>
						
					</u-col>
					
					<u-col :span="6">
						<view style="display: flex; justify-content: flex-end; margin-right: 15px;">
							<text>{{ created_at }}</text>
							
						</view>
						
					</u-col>
				</u-row>
			</view>
			
			<!-- <u-line></u-line> -->

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

			<u-line></u-line>
			
			<view style="margin-top: 10px;">
				<uni-row>
					<uni-col :offset="1" :span="2">
						<view v-if="isLike" @click="clickLike()">
							<u-icon name="/static/pic/note/like.svg" size="26px"></u-icon>
						</view>
						
						<view v-else="!isLike" @click="clickLike()">
							<u-icon name="/static/pic/note/unlike.svg" size="26px"></u-icon>
						</view>
					</uni-col>
					
					<uni-col :span="4">
						<button type="primary" size="mini"
							style="width: 60px; background-color: #00aaff; margin-left: 5px;">{{ likeCount }}</button>
					</uni-col>
					<uni-col :offset="10" :span="2">
						<view v-if="isStar">
							<u-icon name="/static/pic/note/star.svg" size="28px" @click="clickStar"></u-icon>
						</view>
						
						<view v-else="!isStar">
							<u-icon name="/static/pic/note/unstar.svg" size="28px" @click="clickStar"></u-icon>
						</view>
					</uni-col>
					<uni-col :span="4">
						<button size="mini"
							style="width: 60px; background-color: #f9ae3d; color: white; margin-left: 5px;">
							{{ starCount }}</button>
					</uni-col>
				</uni-row>
			</view>


			<view v-if="authorInfo.id == userId">
				<!--悬浮按钮-->
				<uni-fab ref="fab" horizontal="right" vertical="bottom" direction="horizontal" :content="fabContent"
					@trigger="trigger"></uni-fab>
			</view>

			<!-- <u-line></u-line> -->

			<!--评论-->
			<!-- <comment-discussion :articleId="discussion_id" :authorId="authorInfo.id"></comment-discussion> -->

		</view>

		<!--模态框-->
		<tui-modal :show="show" title="提示" content="确定删除讨论吗" @click="handleModalClick" width="70%"></tui-modal>

	</view>
</template>

<script>
	import myRequest from '../../common/request'
	
	import tuiModal from '@/components/tui-modal/tui-modal.vue';
	import tuiBubblePopup from '@/components/tui-bubble-popup/tui-bubble-popup.vue';
	import tRtPopup from '@/components/t-rt-popup/t-rt-popup';
	import uPopup from '@/uni_modules/uview-ui/components/u-popup/u-popup.vue'
	import tuiListView from '@/components/tui-list-view/tui-list-view.vue'
	import uRow from '@/uni_modules/uview-ui/components/u-row/u-row.vue'
	import uCol from '@/uni_modules/uview-ui/components/u-col/u-col.vue'
	import uAvatar from '@/uni_modules/uview-ui/components/u-avatar/u-avatar.vue'
	import tuiNoData from '@/components/tui-no-data/tui-no-data.vue'
	import commentDiscussion from '@/components/comment-discussion/comment-discussion.vue'
	
	export default {
		components: {
			commentDiscussion
		},
		
		data() {
			return {
				title: "",
				show: false,
				valid: false,
				discussion_html: "",
				discussion_id: null,
				group_id: null,
				reqFlag: false,

				remove_index: 0,
				edit_index: 1,
				
				userId: null,
				
				like_index: 2, 
				star_index: 3,
				
				isLike: false,
				isStar: false,
				likeCount: 0,
				starCount: 0,

				authorInfo: {
					id: null,
					avatar: null,
					nickName: null
				},
				
				created_at: null,

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
					}
				],

				problemListSelectShow: false,
				problemList: [		
				],
				
				problemSetSelectShow: false,
				problemSet: [],
				
				relativeProblemShow: false,
				relativeProblem: [
					
				],
				
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
					console.log(this.discussion_id)

					myRequest.request(`/discussion/delete/${this.discussion_id}`, 'DELETE').then(
						function(res) {
							console.log(222)
							console.log(res)
							if (res.statusCode == 200) {
								if (getCurrentPages().length > 1) {
									uni.navigateBack()
								}
								else {
									uni.redirectTo({
										url: '/pages/StudyGroup/StudyGroupIndex',
									})
								}
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
					var group_id = curParam['group_id']
					
					if (!myRequest.isLogin()) {
						myRequest.toast('请先登录')
						uni.redirectTo({
							url: '/pages/login/login'
						})
						return
					}
					
					if (!id || !group_id) {
						if (getCurrentPages().length > 1) {
							uni.navigateBack()
						}
						else (
							uni.redirectTo({
								url: '/pages/StudyGroup/StudyGroupIndex'
							})
						)
					}
					else {
						this.discussion_id = id;
						this.group_id = group_id
						
						this.userId = myRequest.getUID()
						
						uni.request({
							url: myRequest.interfaceUrl() + `/discussion/all?id=${id}&group_id=${group_id}`,
							method: 'GET',
							header: {
								'X-Token': myRequest.getToken()
							},
							success: (res) => {
								if (res.statusCode == 200) {
									console.log(res)
									if (res.data.discussions == null) {
										myRequest.toast()
										uni.redirectTo({
											url: '/pages/StudyGroup/StudyGroupIndex'
										})
										return
									}
									var data = res.data.discussions[0];
									
									this.title = data.title;
									this.discussion_html = data.content;
									this.discussion_id = data.id;
									this.created_at = data.created_at.slice(0, 10)
									
									this.authorInfo.id = data.user_info.user_id
									
									this.isLike = data.is_liked
									this.isStar = data.is_favorite
									this.likeCount = data.like_count
									this.starCount = data.favorite_count
									
									
									console.log('author id')
									console.log(data.user_info.user_id)
									
									if (data.user_info.user_id != myRequest.getUID()) {
										this.fabContent = this.fabContent.slice(2)
										this.remove_index = 1000
										this.edit_index = 1000
									}
									
									this.editorCtx.setContents({
										html: this.discussion_html
									})
									
									this.loadAuthorInfo(data.user_info.user_id)
									
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
									uni.redirectTo({
										url: '/pages/StudyGroup/StudyGroupIndex'
									})
								}
							},
							
							fail: (res) => {
								myRequest.toast()
								uni.redirectTo({
									url: '/pages/StudyGroup/StudyGroupIndex'
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
				this.editorCtx.getContents({
					success: res => {
						console.log(res.html)
					}
				})
				
				// console.log(e)
				this.fabContent[e.index].active = !e.item.active
				var t = this.fabContent[e.index].active

				if (e.index == this.remove_index) {
					this.show = true;
				}
				if (e.index == this.edit_index) {
					uni.redirectTo({
						url: `/pages/StudyGroup/editDiscussion?id=${this.discussion_id}&group_id=${this.group_id}`
					})
					return
				}
				
				if (e.index == this.like_index || e.index == this.star_index) {
					
					var url, method;
					if (e.index == this.like_index && !t) {
						url = `/discussion/unlike/${this.discussion_id}`
						method = 'POST'
					}
					else if (e.index == this.like_index && t) {
						url = `/discussion/like/${this.discussion_id}`
						method = 'POST'
					}
					else if (e.index == this.star_index && !t) {
						url = `/discussion/unfavorite/${this.discussion_id}`	
						method = 'POST'
					}
					else {
						url = `/discussion/favorite/${this.discussion_id}`
						method = 'POST'
					}					
					uni.request({
						url: myRequest.interfaceUrl() + url,
						method: method,
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
								uni.redirectTo({
									url: '/pages/StudyGroup/StudyGroupIndex'
								})
							}
						},
						
						fail: (res) => {
							myRequest.toast()
							uni.redirectTo({
								url: '/pages/StudyGroup/StudyGroupIndex'
							})
						}
					})	
				
				}

			},
			
			clickLike() {
				var url, method;
				if (this.isLike) {
					url = `/discussion/unlike/${this.discussion_id}`
					method = 'POST'
				}
				else {
					url = `/discussion/like/${this.discussion_id}`
					method = 'POST'
				}	
				uni.request({
					url: myRequest.interfaceUrl() + url,
					method: method,
					header: {
						'X-Token': myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							console.log(res)
							this.isLike = !this.isLike
							if (this.isLike) {
								this.likeCount += 1
							}
							else {
								this.likeCount -= 1
							}
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
								url: '/pages/StudyGroup/discussionIndex'
							})
						}
					},
					
					fail: (res) => {
						myRequest.toast()
						uni.switchTab({
							url: '/pages/StudyGroup/discussionIndex'
						})
					}
				})	
			},
			
			clickStar() {
				var url, method;
				if (this.isStar) {
					url = `/discussion/unfavorite/${this.discussion_id}`	
					method = 'POST'
				}
				else {
					url = `/discussion/favorite/${this.discussion_id}`
					method = 'POST'
				}			
				uni.request({
					url: myRequest.interfaceUrl() + url,
					method: method,
					header: {
						'X-Token': myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							console.log(res)
							this.isStar = !this.isStar
							if (this.isStar) {
								this.starCount += 1
							}
							else {
								this.starCount -= 1
							}
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
								url: '/pages/StudyGroup/discussionIndex'
							})
						}
					},
					
					fail: (res) => {
						myRequest.toast()
						uni.switchTab({
							url: '/pages/StudyGroup/discussionIndex'
						})
					}
				})	
			},

			back() {
				var pages = getCurrentPages()
				if (pages.length > 1) {
					uni.navigateBack()
				}
				else {
					uni.redirectTo({
						url: `/pages/StudyGroup/discussionIndex?group_id=${this.group_id}`
					})
				}
			},
			
			loadAuthorInfo(userId) {
				uni.request({
					url: myRequest.interfaceUrl() + `/user/info/${userId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: res => {
						if (res.statusCode == 200) {
							var data = res.data
							this.authorInfo.avatar = myRequest.imageUrl() + '/public/' + data.avatar_path
							this.authorInfo.nickName = data.nick_name
							
							console.log('avatar')
							console.log(this.authorInfo.avatar)
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
						}
					},
					
					fail: res => {
						myRequest.toast()
					}
				})
			}
			
		},

		onLoad() {
			console.log(uni.getStorageSync('user_info'))
			console.log(myRequest.getUID())
			console.log(myRequest.getUserAvatar())
			// var pages = getCurrentPages();
			// var curRoutes = pages[pages.length - 1].route
			// var curParam = pages[pages.length - 1].options;
			
			// var id = curParam['id']
			
			// if (id) this.discussion_id = id	
		},
		
	}
</script>

<style>
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

	.discussion-navbar {
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
	
	.u-popup-slot {
		width: 200px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 主体css */
</style>
