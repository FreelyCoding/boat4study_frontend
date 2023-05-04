<template>
	<view class="comment-eg">
		<note-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
			:cmData="commentData" v-if="commentData"></note-comment>
	</view>
</template>

<script>
import myRequest from '../../common/request';
	export default {
		name: 'comment-eg',
		props: {
			articleId: {
				type: String,
				default: () => {
					return null;
				}
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
			getComment(articleId) {
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
					url: myRequest.interfaceUrl() + `/note_review/get?note_id=${articleId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res) => {
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
							
							for (var i = 0; i < data.note_reviews.length; i ++) {
								var review = data.note_reviews[i]
								var avatar = myRequest.imageUrl() + myRequest.getUserAvatar()
								
								var t = {									
									"id": review.id,
									"owner": review.user_id == myRequest.getUID(),
									"hasLike": review.is_liked,
									"likeNum": review.like_count,
									"avatarUrl": avatar ,
									"nickName": myRequest.getUserName(),
									"content": review.content,
									"parentId": null,
									"createTime": review.created_at.slice(0, 10)
								}
								
								commentList.push(t)
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
				
				
				// 下边假装请求成功
				// let res = {
				// 	"readNumber": 193,
				// 	"commentList": [{
				// 			"id": 1,
				// 			"owner": false,
				// 			"hasLike": false,
				// 			"likeNum": 2,
				// 			"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
				// 			"nickName": "超长昵称超长...",
				// 			"content": "啦啦啦啦",
				// 			"parentId": null,
				// 			"createTime": "2021-07-02 16:32:07"
				// 		},
				// 		{
				// 			"id": 2,
				// 			"owner": false,
				// 			"hasLike": false,
				// 			"likeNum": 2,
				// 			"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797761970/0",
				// 			"nickName": "寂寞无敌",
				// 			"content": "我是评论的评论",
				// 			"parentId": 1,
				// 			"createTime": "2021-07-02 17:05:50"
				// 		},
				// 		{
				// 			"id": 4,
				// 			"owner": true,
				// 			"hasLike": true,
				// 			"likeNum": 1,
				// 			"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797763270/0",
				// 			"nickName": "name111",
				// 			"content": "评论啦啦啦啦啦啦啦啦啦啦",
				// 			"parentId": null,
				// 			"createTime": "2021-07-13 09:37:50"
				// 		},
				// 		{
				// 			"id": 5,
				// 			"owner": false,
				// 			"hasLike": false,
				// 			"likeNum": 0,
				// 			"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
				// 			"nickName": "超长昵称超长...",
				// 			"content": "超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论",
				// 			"parentId": null,
				// 			"createTime": "2021-07-13 16:04:35"
				// 		},
				// 		{
				// 			"id": 13,
				// 			"owner": false,
				// 			"hasLike": false,
				// 			"likeNum": 0,
				// 			"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
				// 			"nickName": "超长昵称超长...",
				// 			"content": "@寂寞无敌 你怕不是个大聪明",
				// 			"parentId": 1,
				// 			"createTime": "2021-07-14 11:01:23"
				// 		}
				// 	]
				// };
				// this.commentData = {
				// 	// "readNumer": res.readNumer,
				// 	"commentSize": res.commentList.length,
				// 	"comment": this.getTree(res.commentList)
				// };
			
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
					'note_id': this.articleId,
					'title': 'title'
				})
				
				uni.request({
					url: myRequest.interfaceUrl() + '/note_review/add',
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
						url: myRequest.interfaceUrl() + `/note_review/like/${commentId}`,
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
						url: myRequest.interfaceUrl() + `/note_review/unlike/${commentId}`,
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
					url: myRequest.interfaceUrl() + `/note_review/remove/${commentId}`,
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
