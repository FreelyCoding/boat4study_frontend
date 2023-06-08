<template>
	<view class="comment-discussion">
		<note-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
			:cmData="commentData" v-if="commentData"></note-comment>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	export default {
		name: 'comment-discussion',
		props: {
			articleId: {
				type: String,
				default: () => {
					return null;
				}
			},
			authorId: {
				
			}
		},
		watch: {
			articleId: {
				handler: function(newVal, oldVal) {
					if (newVal) {
						this.getComment(newVal);
					}
				},
				immediate: true
			}
		},
		data() {
			return {
				"commentData": null,
				"reqFlag": false // 请求标志，防止重复操作，true表示请求中

			}
		},
		methods: {
			// 登录校验
			checkLogin() {
				// TODO 此处填写登录校验逻辑
				if (myRequest.isLogin()) {
					return true;
				} else {
					uni.showModal({
						title: '提示',
						content: '请先登录',
						confirmText: '前往登录',
						success: function(res) {
							if (res.confirm) {
								uni.redirectTo({
									url: '/pages/login/login'
								});
							}
						}
					});
					return false;
				}
			},
			// 输入框聚焦
			focusOn() {
				this.checkLogin();
			},
			// 获取评论
			async getComment(articleId) {
				// TODO 接入真实接口
				// this.$u.api.commentList(articleId).then(res => {
				// this.commentData = {
				// 	"readNumer": res.readNumer,
				// 	"commentSize": res.commentList.length,
				// 	"comment": this.getTree(res.commentList)
				// };
				// }).catch(res => {})
				
				var commentList = []
				
				uni.request({
					url: myRequest.interfaceUrl() + `/discussion_review/get?discussion_id=${articleId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: async (res) => {
						if (res.statusCode == 200) {
							var data = res.data
							
							if (data.total_count == 0) {
								this.commentData = {
									// "readNumer": res.readNumer,
									"commentSize": 0,
									"comment": []
								}
								return
							}
							
							for (var i = 0; i < data.discussion_reviews.length; i ++) {
								var review = data.discussion_reviews[i]
								
								var promise = await myRequest.request(`/user/info/${review.user_info.user_id}`, 'GET')
								
										
								if (promise.statusCode == 200) {
									var avatar = myRequest.imageUrl() + '/public/' + promise.data.avatar_path
									var t = {
										"id": review.id,
										"owner": review.user_id == myRequest.getUID() || myRequest.getUID() == this.authorId,
										"hasLike": review.is_liked,
										"likeNum": review.like_count,
										"avatarUrl": avatar ,
										"nickName": promise.data.nick_name,
										"content": review.content,
										"parentId": null,
										"createTime": review.created_at.slice(0, 10)
									}
									commentList.push(t)
								}
								else {
									myRequest.toast()
								}
								
							}
							
							this.commentData = {
								"commentSize": commentList.length,
								"comment": this.getTree(commentList)
							}
							
						}
						else if (res.statusCode == 401) {
							uni.showModal({
								title: '提示',
								content: '请先登录',
								confirmText: '前往登录',
								success: function(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: '/pages/login/login'
										});
									}
								}
							})
						}
						else {
							console.log('wrong')
							myRequest.toast()
							uni.switchTab({
								url: '/pages/discussion/index'
							})
						}
					},
					
					fail: (res) => {
						myRequest.toast()
						uni.switchTab({
							url: '/pages/discussion/index'
						})
					}
					
				})
				
			},
			// 新增评论
			add(content) {
				
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				
				this.reqFlag = true;
				// TODO 接入真实接口
				// let params = {
				// 	"articleId": this.articleId,
				// 	"pId": req.pId,
				// 	"content": req.content
				// }
				// this.$u.api.commentAdd(params).then(res => {
				// 	uni.showToast({
				// 		title: '操作成功！',
				// 		duration: 3000
				// 	});
				// 	this.$refs.hbComment.addComplete();
				// 	this.getComment();
				// 	this.reqFlag = false;
				// }).catch(res => {
				// 	this.reqFlag = false;
				// })
				// 下边假装请求成功
				
				var data = JSON.stringify({
					'content': content,
					'discussion_id': this.articleId,
					'title': 'title'
				})
				
				uni.request({
					url: myRequest.interfaceUrl() + '/discussion_review/add',
					header: {
						'X-Token': myRequest.getToken()
					},
					method: 'POST',
					data: data,
					
					success: res => {
						this.reqFlag = false
						if (res.statusCode == 200) {
							myRequest.toast('添加评论成功')
							this.$refs.hbComment.addComplete();
							this.getComment(this.articleId)
						}
						else if (res.statusCode == 401) {
							uni.showModal({
								title: '提示',
								content: '请先登录',
								confirmText: '前往登录',
								success: function(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: '/pages/login/login'
										});
									}
								}
							})
						}
						else {
							console.log('wrong')
							myRequest.toast()
						}
					},
					
					fail: res => {
						this.reqFlag = false
						myRequest.toast()
					}
				})
				
				// this.reqFlag = false;
				// this.$refs.hbComment.addComplete();
				// this.getComment(this.articleId);
			},
			
			getAuthorInfo(user_id) {
				uni.request({
					url: myRequest.interfaceUrl() + `/user/info/${user_id}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					success: res => {
						
					}
					
				})
				
			},
			
			id2Comment(commentId) {
				for (var i = 0; i < this.commentData.comment.length; i ++) {
					if (this.commentData.comment[i].id == commentId) {
						return i;
					}
				}
				return -1;
			},
			
			// 点赞评论
			like(commentId) {
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				this.reqFlag = true;
				
				var index = this.id2Comment(commentId)
				
				if (!this.commentData.comment[index].hasLike) {
					
					uni.request({
						url: myRequest.interfaceUrl() + `/discussion_review/like/${commentId}`,
						method: 'POST',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: res => {
							this.reqFlag = false
							if (res.statusCode == 200) {
								this.$refs.hbComment.likeComplete(commentId);
							}
							else if (res.statusCode == 401) {
								uni.showModal({
									title: '提示',
									content: '请先登录',
									confirmText: '前往登录',
									success: function(res) {
										if (res.confirm) {
											uni.redirectTo({
												url: '/pages/login/login'
											});
										}
									}
								})
							}
							else {
								console.log('wrong')
								myRequest.toast()
							}
							
						},
						
						fail: res => {						
							this.reqFlag = false
							myRequest.toast()
						}
						
					})
				}
				else {
					
					uni.request({
						url: myRequest.interfaceUrl() + `/discussion_review/unlike/${commentId}`,
						method: 'POST',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: res => {
							this.reqFlag = false
							if (res.statusCode == 200) {
								this.$refs.hbComment.likeComplete(commentId);
							}
							else if (res.statusCode == 401) {
								uni.showModal({
									title: '提示',
									content: '请先登录',
									confirmText: '前往登录',
									success: function(res) {
										if (res.confirm) {
											uni.redirectTo({
												url: '/pages/login/login'
											});
										}
									}
								})
							}
							else {
								myRequest.toast()
							}
						},
						
						fail: res => {	
							this.reqFlag = false
							myRequest.toast()
						}
					})
				}
				// TODO 接入真实接口
				// this.$u.api.commentLike(commentId).then(res => {
				// 	this.$refs.hbComment.likeComplete(commentId);
				// 	this.reqFlag = false;
				// }).catch(res => {
				// 	this.reqFlag = false;
				// })
				// 下边假装请求成功
				// this.reqFlag = false;
				// this.$refs.hbComment.likeComplete(commentId);
			},
			// 删除评论
			del(commentId) {
				console.log('commentId')
				console.log(commentId)
				
				if (!this.checkLogin()) {
					return
				}
				if (this.reqFlag) {
					uni.showToast({
						title: '操作频繁',
						duration: 1000
					});
					return
				}
				// this.reqFlag = true;
				// TODO 接入真实接口
				// this.$u.api.commentDelete(commentId).then(res => {
				// 	this.reqFlag = false;
				// 	this.$refs.hbComment.deleteComplete(commentId);
				// }).catch(res => {
				// 	this.reqFlag = false;
				// })
				// 下边假装请求成功
				// this.reqFlag = false;
				// this.$refs.hbComment.deleteComplete(commentId);
				
				this.reqFlag = true
				
				uni.request({
					url: myRequest.interfaceUrl() + `/discussion_review/remove/${commentId}`,
					header: {
						'X-Token': myRequest.getToken()
					},
					method: 'DELETE',
					
					success: res => {
						this.reqFlag = false
						if (res.statusCode == 200) {
							myRequest.toast('删除评论成功')
							this.$refs.hbComment.deleteComplete(commentId);
						}
						else if (res.statusCode == 401) {
							uni.showModal({
								title: '提示',
								content: '请先登录',
								confirmText: '前往登录',
								success: function(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: '/pages/login/login'
										});
									}
								}
							})
						}
						else {
							console.log('wrong')
							myRequest.toast()
						}
					},
					
					fail: res => {
						this.reqFlag = false
						myRequest.toast()
					}
				})
				
				
			},
			// 列表按照父子转换成树
			getTree(data) {
				let result = [];
				let map = {};
				data.forEach(item => {
					map[item.id] = item;
				});
				data.forEach(item => {
					let parent = map[item.parentId];
					if (parent) {
						(parent.children || (parent.children = [])).push(item);
					} else {
						result.push(item);
					}
				});
				return result;
			}
		}
	};
</script>

<style>
</style>
