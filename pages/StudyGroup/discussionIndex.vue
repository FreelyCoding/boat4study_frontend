<template>
	<view>
		<uni-nav-bar title="所有讨论" background-color="#00aaff" color="#FFFFFF" status-bar="true">
			<block slot="left">
				<view class="discussion-navbar">
					<uni-icons type="left" color="#FFFFFF" size="18" @click="back" />
				</view>
			</block>
		</uni-nav-bar>
		
		<u-loading-icon :show="isLoading"></u-loading-icon>

		<view v-if="discussions && discussions.length != 0" style="margin-top: 10px;">
			<view v-for="(item, index) in discussions" :key="index">
				<uni-card isShadow border padding="15px 5px 0px 5px" margin="0px 15px 15px 15px"
					style="border-radius: 10px;" @click="cardClick(item)">
					<view class="u-demo-block">
						<view>
							<view>
								<text class="discussion-title">{{item.discussion_title}}</text>

								<uni-row v-if="item.pic" style="margin-top: 15px;">
									<uni-col :span="12">
										<view>
											<p class="discussion-content"> {{item.discussion_content ? item.discussion_content : "..."}}
											</p>
										</view>
									</uni-col>
									<uni-col :offset="3" :span="9">
										<view>
											<u--image :src="item.pic" width="250rpx" height="180rpx"
												radius="15"></u--image>
										</view>
									</uni-col>
								</uni-row>

								<uni-row v-else style="margin-top: 15px;">
									<uni-col :span="24">
										<view>
											<p class="discussion-content"> {{item.discussion_content}}</p>
										</view>
									</uni-col>
								</uni-row>

								<view style="margin-top: 5px;">
									<u--text type="info" :text="item.create_time" size="12px"></u--text>
								</view>

								<view style="margin-top: 10px;">
									<uni-row>
										<uni-col :span="2">
											<u-icon name="/static/pic/like.svg" size="30px"></u-icon>
										</uni-col>
										<uni-col :span="4">
											<button type="primary" size="mini"
												style="width: 60px; background-color: #00aaff; margin-left: 5px;">{{ item.like_count }}</button>
										</uni-col>
										<uni-col :offset="10" :span="2">
											<u-icon name="/static/pic/star.svg" size="30px"></u-icon>
										</uni-col>
										<uni-col :span="4">
											<button size="mini"
												style="width: 60px; background-color: #f9ae3d; color: white; margin-left: 5px;">
												{{ item.star_count }}</button>
										</uni-col>
									</uni-row>
								</view>


							</view>
						</view>
					</view>

				</uni-card>
			</view>
			
			<u-loadmore :status="status" line lineColor="#000000"/>
				
			<view style="padding-bottom: 20px;">
				<p style="text-align: center;">
					<button style="background-color: #00aaff; color: white; max-width: 92%;
					 margin-bottom: 10px;" @click="jumpToCreateDiscussion">
						创建讨论
					</button>
				</p>
			</view>
			
		</view>

		
		<view v-else-if="!isLoading" style="text-align: center;">
			<image src="../../static/pic/note/no_note.png"
				style="margin: auto; margin-top: 30px; height: 200px; width: 200px;"></image>
			<p style="font-size: 20px;margin-top: 30px;">暂无讨论</p>
		
			<view style="margin-top: 30px; padding-bottom: 20px;">
				<p style="text-align: center;">
					<button style="background-color: #00aaff; color: white; max-width: 92%;
					 margin-bottom: 10px;" @click="jumpToCreateDiscussion">
						创建讨论
					</button>
				</p>
			</view>
		</view>

	</view>
</template>

<script>
	import tuiCard from '@/components/tui-card/tui-card.vue';
	import tuiListCell from '@/components/tui-list-cell/tui-list-cell.vue';
	import tuiNoData from '@/components/tui-no-data/tui-no-data.vue';
	import myRequest from '../../common/request';

	export default {
		components: {
			tuiNoData
		},
		data() {
			return {
				searchValue: "",
				flag: false,
				discussions: [],
				group_id: null,
				limit: 5, 
				offset: 0,
				status: "loading",
				isLoading: false
			}
		},
		onShow: function() {
			var pages = getCurrentPages();
			var curRoutes = pages[pages.length - 1].route
			var curParam = pages[pages.length - 1].options;
			
			this.group_id = curParam['group_id']
			
			if (!this.group_id) {
				uni.switchTab({
					url: "/pages/homePage/homePage"
				})
			}
			
			this.refresh()
		},

		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			extractImage(htmlStr) {
				// 从html中提取出第一个图片
				var img = htmlStr.match(/<img.*?(?:>|\/>)/gi);
				if (img) {
					img = img[0].match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);
					if (img) {
						img = img[1];
					}
				}
				return img;
			},

			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			},

			loadData(start) {
				for (var i = start; i < this.discussions.length; i++) {
					var html = this.discussions[i].discussion_html
					var plainText = html.replace(/<[^>]+>/g, "");
					var plainText = html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(
						/&gt;/g, ">").replace(/&amp;/g, "&");

					// console.log(plainText)

					// 替换所有换行符为空格
					plainText = plainText.replace(/[\r\n\t]/g, " ");
					// 替换所有空格为一个空格
					plainText = plainText.replace(/\s+/g, " ");
					// 去除首尾空格
					plainText = plainText.replace(/(^\s*)|(\s*$)/g, "");

					this.discussions[i].discussion_content = plainText
					// console.log(this.discussions[i].discussion_content)
					this.discussions[i].pic = this.extractImage(this.discussions[i].discussion_html)

				}
			},

			cardClick(item) {
				console.log(item)

				uni.navigateTo({
					url: `/pages/StudyGroup/discussion?id=${item.id}&group_id=${this.group_id}`,
				})
			},
			back() {
				uni.switchTab({
					url: '/pages/homePage/homePage'
				})
			},
			jumpToCreateDiscussion() {
				uni.navigateTo({
					url: `/pages/StudyGroup/createDiscussion?group_id=${this.group_id}`
				})
			},
			refresh() {
				myRequest.checkLogin()
				this.discussions = []
				this.offset = 0
				this.isLoading = true

				uni.request({
					url: myRequest.interfaceUrl() + `/discussion/all?group_id=${this.group_id}&limit=${this.limit}&offset=0`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.discussions = []
							
							if (res.data.discussions == null) {
								this.status = 'nomore'
								return;
							}
							
							this.status = 'loading'
							this.offset += res.data.discussions.length
							
							if (res.data.discussions && res.data.discussions.length > 0) {
								
								for (var i = 0; i < res.data.discussions.length; i++) {
									var t = {
										discussion_content: "",
										discussion_html: res.data.discussions[i].content,
										discussion_title: res.data.discussions[i].title,
										pic: "",
										create_time: res.data.discussions[i].created_at.slice(0, 10),
										id: res.data.discussions[i].id,
										like_count: res.data.discussions[i].like_count,
										star_count: res.data.discussions[i].favorite_count
									}
									this.discussions.push(t);
								}
							}
							this.loadData(0)
							
							if (res.data.discussions.length < this.limit) {
								this.status = 'nomore'
							}
							
						} else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						} else {
							myRequest.toast()
						}
					},

					fail: (res) => {
						console.log(res)
						myRequest.toast()
					},
					complete: () => {
						this.isLoading = false
					}
				})
			}
		},
		
		onReachBottom() {
			console.log('reach bottom')
			
			this.isLoading = true
			
			uni.request({
				url: myRequest.interfaceUrl() + `/discussion/all?group_id=${this.group_id}&limit=${this.limit}&offset=${this.offset}`,
				method: 'GET',
				header: {
					'X-Token': myRequest.getToken()
				},
			
				success: (res) => {
					console.log(res)
					if (res.statusCode == 200) {
						
						if (res.data.discussions == null) {
							this.status = 'nomore'
							console.log('null')
							return;
						}
						
						this.status = 'loading'
						var lastOffset = this.offset
						this.offset += res.data.discussions.length
						
						for (var i = 0; i < res.data.discussions.length; i++) {
							var t = {
								discussion_content: "",
								discussion_html: res.data.discussions[i].content,
								discussion_title: res.data.discussions[i].title,
								pic: "",
								create_time: res.data.discussions[i].created_at.slice(0, 10),
								id: res.data.discussions[i].id,
								like_count: res.data.discussions[i].like_count,
								star_count: res.data.discussions[i].favorite_count
							}
							this.discussions.push(t);
						}
						console.log(this.discussions)
					
						this.loadData(lastOffset)
						
						if (res.data.discussions.length < this.limit) {
							this.status = 'nomore'
						}
						
					} else if (res.statusCode == 401) {
						myRequest.redirectToLogin()
					} else {
						myRequest.toast()
					}
				},
			
				fail: (res) => {
					console.log(res)
					myRequest.toast()
				},
				
				complete: () => {
					this.isLoading = false
				}
			})
		}
	}
</script>

<style>

	page {
		background: #EDEDED;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}


	.discussion-img {
		max-height: 150px;
	}

	.discussion-title {
		font-size: 18px;
		color: black;
		font-weight: bold;
		margin-bottom: 5px;
	}
</style>