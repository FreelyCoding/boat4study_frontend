<template>
	<view>
		<view class="status-bar">
			<uni-nav-bar title="我的笔记" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		
		<view v-if="notes && notes.length != 0" style="margin-top: 10px; padding-bottom: 10px;">
			<view v-for="(item, index) in notes" :key="index">
				<uni-card isShadow border padding="15px 5px 0px 5px"
					margin="0px 15px 15px 15px" style="border-radius: 10px;" @click="cardClick(item)">
					<view class="u-demo-block">
						<view>
							<view>
								<text class="note-title">{{item.note_title}}</text>
					
								<uni-row v-if="item.pic" style="margin-top: 15px;">
									<uni-col :span="12">
										<view>
											<p class="note-content"> {{item.note_content ? item.note_content : "..."}}</p>
										</view>
									</uni-col>
									<uni-col :offset="3" :span="9">
										<view>
											<u--image :src="item.pic" width="250rpx" height="180rpx" radius="15"></u--image>
										</view>
									</uni-col>
								</uni-row>
								
								<uni-row v-else style="margin-top: 15px;">
									<uni-col :span="24">
										<view>
											<p class="note-content"> {{item.note_content}}</p>
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
		</view>
		
		<view v-else style="text-align: center;">
			<image src="../../static/pic/note/no_note.png" style="margin: auto; margin-top: 30px; height: 200px; width: 200px;" ></image>
			<p style="font-size: 20px;margin-top: 30px;">暂无笔记</p>
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
				notes: [
				]
			}
		},
		onShow: function() {
			this.refresh()
		},
		methods: {
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
			
			loadData() {
				for (var i = 0; i < this.notes.length; i ++ ) {
					var html = this.notes[i].note_html
					var plainText = html.replace(/<[^>]+>/g, "");
					var plainText = html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

					// console.log(plainText)
					// 替换所有换行符为空格
					plainText = plainText.replace(/[\r\n\t]/g, " ");
					// 替换所有空格为一个空格
					plainText = plainText.replace(/\s+/g, " ");
					// 去除首尾空格
					plainText = plainText.replace(/(^\s*)|(\s*$)/g, "");
					
					this.notes[i].note_content = plainText
					// console.log(this.notes[i].note_content)
					this.notes[i].pic = this.extractImage(this.notes[i].note_html)
					
				}
			},
				
			cardClick(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/note/note?id=${item.id}`,
				})
			},
			back() {
				uni.navigateBack()
			},
			refresh() {
				let _this = this
				myRequest.checkLogin()
				this.notes = []
				let uid = myRequest.getUID();
				uni.request({
					url: myRequest.interfaceUrl() + '/note/all?user_id=' + uid ,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							if (res.data.notes && res.data.notes.length > 0) {
								for (var i = 0; i < res.data.notes.length; i ++) {
									var t = {
										note_content: "", 
										note_html: res.data.notes[i].content, 
										note_title: res.data.notes[i].title,
										pic: "",
										create_time:  res.data.notes[i].created_at.slice(0,10),
										id: res.data.notes[i].id,
										like_count: res.data.notes[i].like_count,
										star_count: res.data.notes[i].favorite_count 
									}
									_this.notes.push(t);
								}
								_this.loadData()
							}
						}
						else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						}
						else {
							myRequest.toast()
						}
					},
					
					fail: (res) => {					
						console.log(res)
						myRequest.toast()
					}
				})
			}
		},

	}
	
</script>

<style>
	page {
		background: #EDEDED;
	}
	
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	
	.note-img {
		max-height: 150px;
	}
	
	.note-title {
		font-size: 18px;
		color: black;
		font-weight: bold;
		margin-bottom: 5px;
	}
	
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}

</style>