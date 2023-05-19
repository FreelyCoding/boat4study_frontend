<template>
	<view class="hb-comment">
		<!-- 阅读数-start -->
		<!-- <view>
			<i-icon name="eye-line" color="#666" size="20px"></i-icon>
			<uni-icons type="eye" color="#666" size="22px"></uni-icons>
			<span class="top-read">{{commentData.readNumer}}</span>
			<span class="top-read"><u--text :text="192" size="18px" type="info"></u--text></span>
		</view> -->
		<!-- 阅读数-end -->
		<!-- 阅读数下边那条线-start -->
		<!-- <view class="seg_line_box">
			<view class="seg_line"></view>
			<view class="seg_dot"></view>
			<view class="seg_line"></view>
		</view> -->
		<!-- 阅读数下边那条线-end -->
		
		<!-- 评论主体-start -->
		<view class="comment-list" v-if="commentData && commentData.comment && commentData.comment.length != 0">
			<!-- 评论主体-顶部数量及发表评论按钮-start -->
			<view class="comment-num">
				<view><uni-section :title="'共' + commentData.comment.length + '条评论'" titleColor="#666" type="line"></uni-section></view>
				<view class="add-btn">
					<button type="primary" size="mini" @click="commentInput">发表评论</button>
				</view>
			</view>
			
			<!-- 评论主体-顶部数量及发表评论按钮-end -->
			<!-- 评论列表-start -->
			<view class="comment-box" v-for="(item, index) in commentData.comment" :key="item.id">
				<view class="comment-box-item">
					<view>
						<u-avatar :src="item.avatarUrl || emptyAvatar" mode="aspectFill" :size="avatar_size"></u-avatar>
						<!-- <image :src="item.avatarUrl || emptyAvatar" mode="aspectFill" class="avatar"></image> -->
					</view>
					<view class="comment-main">
						<!-- 父评论体-start -->
						<view class="comment-main-top">
							
							<view class="nick-name-box">
								<!-- <view class="comLogo com1" v-if="index == 0">沙发</view>
								<view class="comLogo com2" v-if="index == 1">板凳</view>
								<view class="comLogo com3" v-if="index == 2">地板</view>
								<view class="comLogo com4" v-if="index > 2">{{index + 1}}楼</view> -->
								<!-- <view class="nick-name">{{item.nickName}}</view> -->
								<view><u--text :text="item.nickName" type="primary"></u--text></view>
							</view>
							<view class="zan-box">
								<span :class="item.hasLike ? 'isLike' : 'notLike'">{{item.likeNum}}</span>
								
								<view class="comment-thumb-up">
									<i-icon name="thumb-up-line" size="15px" v-if="!item.hasLike" @click="like(item.id)"></i-icon>
									<i-icon name="thumb-up-fill" size="15px" color="#2979ff" v-else @click="like(item.id)"></i-icon>
								</view>								
								
							</view>
						</view>
						
						<view class="comment-main-content">
							<view v-if="item.content.length <= 60">
								<u--text :text="item.content"></u--text>
							</view>
							<!-- <u--text :text="item.content.length > 60 ? item.content.slice(0, 59) : item.content"></u--text> -->
							<view v-else>
								<view>
									<u--text :text="item.hasShowMore ? item.content : item.content.slice(0, 59) + '...'"></u--text>
									<!-- <view class="foot-btn" @click="showMore(item.id)"> -->
										<u--text :text="item.hasShowMore ? '收起' : '展开'" type="primary" @click="showMore(item.id)" class="foot-btn"></u--text>
									<!-- </view> -->
								</view>
							</view>
						</view>
						
						<view class="comment-main-foot">
							<view class="foot-time">{{item.createTime}}</view>
							<!-- <view class="foot-btn" @click="reply(item.nickName,item.nickName,item.id)">回复</view> -->
							<view class="foot-btn" v-if="item.owner" @click="confirmDelete(item.id)">删除</view>
						</view>
						<!-- 父评论体-end -->
						
					</view>
				</view>
			</view>
			<!-- 评论列表-end -->
		</view>
		<!-- 评论主体-end -->
		
		<!-- 无评论-start -->
		<view class="comment-none" v-else>
			暂无评论，<span @click="commentInput" style="color: #007AFF;">抢沙发</span>
		</view>
		<!-- 无评论-end -->
		
		<!-- 新增评论-start -->
		<view class="comment-submit-box" v-if="submit" @click="closeInput">
			<!-- 下边的click.stop.prevent用于让上边的click不传下去，以防点到下边的空白处触发closeInput方法 -->
			<view class="comment-add" @click.stop.prevent="stopPrevent" :style="'bottom:' + KeyboardHeight + 'px'">
				<view class="comment-submit">
					<view class="btn-click cancel" @click="closeInput">取消</view>
					
					<view class="btn-click" @click="add">发布</view>
					
				</view>
				<textarea class="textarea" v-model="commentReq.content" :placeholder="placeholder" :adjust-position="false" :show-confirm-bar="false"
					@blur="blur" @focus="focusOn" :focus="focus" maxlength="800"></textarea>
			</view>
		</view>
		<!-- 新增评论-end -->
	</view>
</template>

<script>
	export default {
		name: 'hb-comment',
		props: {
			cmData: {
				type: Object,
				default: () => {
					return null;
				}
			},
			deleteTip: {
				type: String,
				default: () => {
					return '操作不可逆，如果评论下有子评论，也将被一并删除，确认？';
				}
			},
		},
		watch: {
			cmData: {
				handler: function(newVal, oldVal) {
					this.init(newVal);
				},
				immediate: true
			}
		},
		data() {
			return {
				"avatar_size": "32px",
				"placeholder": "请输入评论",
				"commentData": null,
				"commentReq": {
					"pId": null, // 评论父id
					"content": null // 评论内容
				},
				"pUser": null, // 标签-回复人
				"showTag": false, // 标签展示与否
				"focus": false, // 输入框自动聚焦
				"submit": false, // 弹出评论
				"KeyboardHeight": 0 // 键盘高度
			};
		},
		mounted: function() {
			uni.onKeyboardHeightChange(res => {
				this.KeyboardHeight = res.height;
			})
		},
		methods: {
			// 初始化评论
			init(cmData) {
				// for (var i in cmData.comment) {
				// 	cmData.comment[i].hasShowMore = false;
				// 	for (var j in cmData.comment[i].children) {
				// 		cmData.comment[i].children[j].hasShowMore = false;
				// 	}
				// }
				this.commentData = cmData;
			},
			// 没用的方法，但不要删
			stopPrevent() {},
			// 回复评论
			reply(pUser, reUser, pId) {
				this.pUser = pUser;
				this.commentReq.pId = pId;
				if (reUser) {
					this.commentReq.content = '@' + reUser + ' ';
				} else {
					this.commentReq.content = '';
				}
				this.showTag = true;
				this.commentInput();
			},
			// 删除评论前确认
			confirmDelete(commentId) {
				var that = this;
				uni.showModal({
					title: '警告',
					content: that.deleteTip,
					confirmText: '确认删除',
					success: function(res) {
						if (res.confirm) {
							that.$emit('del', commentId);
						}
					}
				});
			},
			// 新增评论
			add() {
				if (this.commentReq.content == null || this.commentReq.content.length < 2) {
					uni.showToast({
						title: '评论内容过短',
						duration: 2000
					});
					return
				}
				
				this.$emit('add', this.commentReq.content);
			},
			// 点赞评论
			like(commentId) {
				this.$emit('like', commentId);
			},
			// 新增完成
			addComplete() {
				this.commentReq.content = null;
				this.tagClose();
				this.closeInput();
			},
			// 点赞完成-本地修改点赞结果
			likeComplete(commentId) {
				for (var i in this.commentData.comment) {
					if (this.commentData.comment[i].id == commentId) {
						this.commentData.comment[i].hasLike ? this.commentData.comment[i].likeNum-- : this.commentData
							.comment[i].likeNum++;
						this.commentData.comment[i].hasLike = !this.commentData.comment[i].hasLike;
						return
					}
					for (var j in this.commentData.comment[i].children) {
						if (this.commentData.comment[i].children[j].id == commentId) {
							this.commentData.comment[i].children[j].hasLike ? this.commentData.comment[i].children[j]
								.likeNum-- : this.commentData.comment[i].children[j].likeNum++;
							this.commentData.comment[i].children[j].hasLike = !this.commentData.comment[i].children[j]
								.hasLike;
							return
						}
					}
				}
			},
			// 删除完成-本地删除评论
			deleteComplete(commentId) {
				for (var i in this.commentData.comment) {
					for (var j in this.commentData.comment[i].children) {
						if (this.commentData.comment[i].children[j].id == commentId) {
							this.commentData.comment[i].children.splice(Number(j), 1);
							return
						}
					}
					if (this.commentData.comment[i].id == commentId) {
						this.commentData.comment.splice(Number(i), 1);
						return
					}
				}
			},
			// 展开评论
			showMore(commentId) {
				for (var i in this.commentData.comment) {
					if (this.commentData.comment[i].id == commentId) {
						this.commentData.comment[i].hasShowMore = !this.commentData.comment[i].hasShowMore;
						this.$forceUpdate();
						return
					}
					for (var j in this.commentData.comment[i].children) {
						if (this.commentData.comment[i].children[j].id == commentId) {
							this.commentData.comment[i].children[j].hasShowMore = !this.commentData.comment[i].children[j]
								.hasShowMore;
							this.$forceUpdate();
							return
						}
					}
				}
			},
			// 输入框失去焦点
			blur() {
				this.focus = false;
			},
			// 输入框聚焦
			focusOn() {
				this.$emit('focusOn');
			},
			// 标签关闭
			tagClose() {
				this.showTag = false;
				this.pUser = null;
				this.commentReq.pId = null;
			},
			// 输入评论
			commentInput() {
				// TODO 调起键盘方法
				this.submit = true;
				setTimeout(() => {
					this.focus = true;
				}, 50)
			},
			// 关闭输入评论
			closeInput() {
				this.focus = false;
				this.submit = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.hb-comment {
		padding: 10rpx;
	}

	.top-read {
		display: inline-block;
		padding-left: 8rpx;	
	}

	.comment-thumb-up {
		display: inline-block;
		padding-left: 8rpx;
	}

	.seg_line_box {
		display: flex;
		height: 5rpx;
		justify-content: space-between;
		margin: 5rpx 0;
	}

	.seg_line {
		width: 45%;
		border-bottom: 1rpx solid #e1e1e1;
	}

	.seg_dot {
		width: 8%;
		border-bottom: 5rpx dotted #dbdbdb;
	}

	.comment-num {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
	}

	.comment-box {
		padding: 10rpx 0;
	}

	.comment-box-item {
		display: flex;
	}

	.comment-main {
		padding-left: 20rpx;
	}

	.comment-main-top {
		width: 600rpx;
		padding-top: 6rpx;
		display: flex;
		justify-content: space-between;
	}

	.sub-comment-main-top {
		width: 510rpx;
		padding-top: 6rpx;
		display: flex;
		justify-content: space-between;
	}

	.avatar {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.nick-name-box {
		display: flex;
		align-items: center;
	}

	.comLogo {
		margin-right: 18rpx;
		font-size: 22rpx;
		border-radius: 10rpx;
		padding: 5rpx 15rpx;
		color: #FFFFFF;
	}

	.com1 {
		background-color: #d218b1;
	}

	.com2 {
		background-color: #f19c0b;
	}

	.com3 {
		background-color: #c8da85;
	}

	.com4 {
		background-color: #bfd0da;
	}

	.nick-name {
		color: #2d8cf0;
	}

	.isLike {
		font-size: 16px;
		color: #2d8cf0;
	}

	.notLike {
		font-size: 16px;
		color: #999999;
	}

	.comment-main-content {
		padding: 10rpx 10rpx 10rpx 0;
	}

	.comment-main-foot {
		display: flex;
		font-size: 22rpx;
	}

	.replayTag {
		color: #909399;
		margin-bottom: 5px;
		border: 1px solid #c8c9cc;
		background-color: #f4f4f5;
		border-radius: 3px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 16rpx;
		padding: 5px 10px;
	}

	.replyTagClose {
		font-size: 20px;
		line-height: 12px;
		padding: 0 0 2px 5px;
	}

	.foot-btn {
		padding-left: 10rpx;
		color: #007AFF;
	}

	.comment-sub-box {
		padding: 20rpx 0;
	}

	.comment-sub-item {
		display: flex;
	}

	.comment-none {
		padding: 20rpx;
		width: 100%;
		text-align: center;
		color: #999999;
	}

	.comment-submit-box {
		position: fixed;
		display: flex;
		align-items: flex-end;
		z-index: 9900;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		background-color: rgba($color: #000000, $alpha: 0.5);
		width: 100%;
	}

	.comment-add {
		position: fixed;
		background-color: #FFFFFF;
		width: 100%;
		padding: 5rpx;
		border: 1px solid #ddd;
		transition: .3s;
		-webkit-transition: .3s;
	}

	.btn-click {
		color: #007AFF;
		font-size: 28rpx;
	}

	.cancel {
		color: #606266;
	}

	.textarea {
		height: 100px;
		padding: 16rpx;
		width: 100%;
	}

	.comment-submit {
		padding: 5rpx 20rpx 0 20rpx;
		border-bottom: 1px dashed #ddd;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
