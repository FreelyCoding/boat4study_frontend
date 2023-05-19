<template>
	<view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="讨论" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
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
			<u-line></u-line>

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
			<comment-eg :articleId="note_id"></comment-eg>

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
	
	export default {
		data() {
			return {
				title: "",
				show: false,
				valid: false,
				note_html: "",
				note_id: "",
				reqFlag: false,

				remove_index: 0,
				edit_index: 1,
				
				userId: null,
				
				like_index: 2, 
				star_index: 3,

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
			problemClick(item) {
				console.log('click')
				uni.navigateTo({
					url: `/pages/problem/problemDetail?problem_id=${item.id}&problem_type_id=${item.type}`
				})
				
			},
			
			getRelativeProblem() {
				this.relativeProblem = []
				
				uni.request({
					url: myRequest.interfaceUrl() + `/note/problem_list/${this.note_id}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: res => {
						if (res.statusCode == 200) {
							var data = res.data
							
							if (data == null) return
							
							for (var i = 0; i < data.length; i ++) {
								this.relativeProblem.push({
									id: data[i].id,
									type: data[i].problem_type_id,
									description: data[i].description,
								})
							}
						} else if (res.statusCode == 401) {
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							this.relativeProblemShow = false
							myRequest.toast()
						}
					},
					
					fail: res => {
						myRequest.toast()
						this.relativeProblemShow = false
					}
					
				})
			},
			
			selectAll() {
				for (var i = 0; i < this.problemList.length; i ++) {
					this.problemList[i].selected = 1
				}
			},
			
			select(item) {
				item.selected = 1 - item.selected
			},
			
			addToRelativeProblem() {
				for (var i = 0; i < this.problemList.length; i ++) {
					var item = this.problemList[i]
					
					if (item.selected == 0) continue;
					
					var flag = false;
					
					for (var j = 0; j < this.relativeProblem.length; j ++) {
						if (this.relativeProblem[j].id == item.id) {
							flag = true;
							break;
						} 
					}
					
					if (flag) continue;
					
					if (this.relativeProblem.indexOf(item) == -1) {
						this.relativeProblem.push(item)
						uni.request({
							url: myRequest.interfaceUrl() + `/note/add_problem/${this.note_id}?problem_id=${item.id}`,
							method:'POST',
							header: {
								'X-Token': myRequest.getToken()
							}
						})
					}
				}
				
				if (this.problemList.length > 0) {
					myRequest.toast('添加题目成功')
				}
			},
			
			loadProblemList(problemSetId) {
				this.problemSetSelectShow = false
				this.problemListSelectShow = true
				
				console.log('yyy')
				console.log(problemSetId)
				
				this.initProblemList(problemSetId)
			},
			
			initProblemList(problemSetId) {
				console.log('initProblemList')
				var ret;
				
				uni.request({
					url: myRequest.interfaceUrl() + `/problem_set/all_problem/${problemSetId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res) => {
						if (res.statusCode == 200) {
							ret = res.data.problems
							
							this.problemList = []
							
							for (var i = 0; i < ret.length; i ++) {
								this.problemList.push({
									id: ret[i].id,
									type: ret[i].problem_type_id,
									selected: 0,
									description: ret[i].description,
								})
							}
							
						} else if (res.statusCode == 401) {
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							this.problemListSelectShow = false
							myRequest.toast()
						}
					},
					
					fail: res => {
						this.problemListSelectShow = false
						myRequest.toast()
					}
					
				})
				
			},
			
			loadProblemSet() {
				
				myRequest.checkLogin()
				uni.request({
					url: myRequest.interfaceUrl() + '/user/problem_set',
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
				
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.problemSet = []
							for (var i = 0; i < res.data.length; i++) {
								var t = {
									id: res.data[i].id,
									description: res.data[i].description,
									name: res.data[i].name,
									pic: ".",
									created_at: res.data[i].created_at.slice(0, 10),
									problem_number: res.data[i].problem_count,
								}
								this.problemSet.push(t);
							}
						} else if (res.statusCode == 401) {
							if (myRequest.isLogin()) {
								myRequest.toast('请重新登录')
							} else {
								myRequest.toast('请登录')
							}
							uni.navigateTo({
								url: '/pages/login/login'
							})
						} else {
							myRequest.toast()
						}
					},
				
					fail: (res) => {
						console.log(res)
						myRequest.toast()
					}
				})
			},
			
			relativeProblemOpen() {
				this.relativeProblemShow = true;
			},
			
			relativeProblemClose() {
				this.relativeProblemShow = false;
			},
			
			removeRelativeProblem(item, index) {
				this.relativeProblem.splice(index, 1)
				
				uni.request({
					url: myRequest.interfaceUrl() + `/note/remove_problem/${this.note_id}?problem_id=${item.id}`,
					method: 'DELETE',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: res => {
						if (res.statusCode == 200) {
							
						} else if (res.statusCode == 401) {
							if (myRequest.isLogin()) {
								myRequest.toast('请重新登录')
							} else {
								myRequest.toast('请登录')
							}
							uni.navigateTo({
								url: '/pages/login/login'
							})
						} else {
							myRequest.toast()
						}
					},
					
					fail: res => {
						myRequest.toast()
					}
					
				})
				
			},
			
			problemSetSelectClose() {
				this.problemSetSelectShow = false;
			},
			
			problemListSelectClose() {
				this.problemListSelectShow = false;
			},
			
			showProblemSet() {
				this.problemSetSelectShow = true;
				this.relativeProblemShow = false
				
				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return
				}
				
				uni.request({
					url: myRequest.interfaceUrl() + '/problem/blank/all',
					header: {
						"X-Token": myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							this.problemList = res.data.problems
							console.log(this.problemList)
						}
						else {
							myRequest.toast()
						}
					}
				})
			},
			
			
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
									url: '/pages/homePage/noteIndex',
									success() {
										// console.log(getCurrentPages())
										// let page = getCurrentPages().pop(); //跳转页面成功之后
										// if (!page) return;
										// console.log(page.route)
										// if (page.route == 'pages/homePage/noteIndex' 
										// 		|| page.route == '/pages/personal/personalNote'
										// 		|| page.route == '/pages/personal/starNotes') {
										// 	page.$vm.refresh(); //如果页面存在，则重新刷新页面
										// }
										
										uni.navigateBack()
									}
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
							url: '/pages/homePage/noteIndex'
						})
					}
					else {
						this.note_id = id;
						
						this.userId = myRequest.getUID()
						
						uni.request({
							url: myRequest.interfaceUrl() + `/note/all?id=${id}`,
							method: 'GET',
							header: {
								'X-Token': myRequest.getToken()
							},
							success: (res) => {
								if (res.statusCode == 200) {
									console.log(res)
									if (res.data.notes == null) {
										myRequest.toast()
										uni.switchTab({
											url: '/pages/homePage/noteIndex'
										})
										return
									}
									var data = res.data.notes[0];
									
									this.title = data.title;
									this.note_html = data.content;
									this.note_id = data.id;
									this.created_at = data.created_at.slice(0, 10)
									
									this.authorInfo.id = data.user_id
									
									if (data.is_liked) {
										this.fabContent[this.like_index].active = true
									}
									if (data.is_favorite) {
										this.fabContent[this.star_index].active = true
									}
									
									if (data.user_id != myRequest.getUID()) {
										this.fabContent = this.fabContent.slice(2)
										this.like_index = 0
										this.star_index = 1
										this.remove_index = 1000
										this.edit_index = 1000
									}
									
									this.editorCtx.setContents({
										html: this.note_html
									})
									
									this.loadAuthorInfo(data.user_id)
									
									this.getRelativeProblem()
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
										url: '/pages/homePage/noteIndex'
									})
								}
							},
							
							fail: (res) => {
								myRequest.toast()
								uni.switchTab({
									url: '/pages/homePage/noteIndex'
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
						url: `/pages/StudyGroup/editDiscussion?id=${this.note_id}`
					})
					return
				}
				
				if (e.index == this.like_index || e.index == this.star_index) {
					
					var url, method;
					if (e.index == this.like_index && !t) {
						url = `/note/unlike/${this.note_id}`
						method = 'POST'
					}
					else if (e.index == this.like_index && t) {
						url = `/note/like/${this.note_id}`
						method = 'POST'
					}
					else if (e.index == this.star_index && !t) {
						url = `/note/unfavorite/${this.note_id}`	
						method = 'DELETE'
					}
					else {
						url = `/note/favorite/${this.note_id}`
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
								uni.switchTab({
									url: '/pages/homePage/noteIndex'
								})
							}
						},
						
						fail: (res) => {
							myRequest.toast()
							uni.switchTab({
								url: '/pages/homePage/noteIndex'
							})
						}
					})	
				
				}

			},

			back() {
				var pages = getCurrentPages()
				if (pages.length > 1) {
					let page = pages[pages.length - 2]; //跳转页面成功之后
					
					if (page.route == 'pages/homePage/noteIndex'
						|| page.route == 'pages/personal/personalNote'
						|| page.route == 'pages/personal/starNotes') {
						page.$vm.refresh(); //如果页面存在，则重新刷新页面
					}
					uni.navigateBack()
				}
				else {
					uni.redirectTo({
						url: '/pages/StudyGroup/discussionIndex'
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
			
			// if (id) this.note_id = id	
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
	
	.u-popup-slot {
		width: 200px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 主体css */
</style>
