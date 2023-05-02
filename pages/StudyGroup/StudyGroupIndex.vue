<template>
	<view>
		<uni-nav-bar title="学习小组" background-color="#00aaff" color="#FFFFFF" status-bar="true">
			<block slot="left">
				<view class="note-navbar">
					<uni-icons type="left" color="#FFFFFF" size="18" @click="back"/>
				</view>
			</block>
		</uni-nav-bar>
		
		
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" 
						placeholder="请输入要搜索的学习小组名称" cancelButton="none" maxlength="50"
						style="margin-left: 5px; margin-right: 5px;">
		</uni-search-bar>
		
		<view v-if="groups && groups.length != 0" style="margin-top: 10px;">
			<view v-for="(item, index) in groups" :key="index">
				<uni-card shadow :title="item.name" :extra="'创建于' + item.create_time" :thumbnail="item.pic" @click="cardClick(item)">
					<text class="uni-body">{{item.description}}</text>
				</uni-card>
			</view>
		</view>
		
		<view v-else style="text-align: center;">
			<image src="../../static/pic/note/no_note.png" style="margin: auto; margin-top: 30px; height: 200px; width: 200px;" ></image>
			<p style="font-size: 20px;margin-top: 30px;">暂无学习小组</p>
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
				groups: [
				]
			}
		},
		onLoad: function() {
			this.refresh()
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},

			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			},
				
			cardClick(item) {
				console.log(item)
				
				uni.navigateTo({
					url: `/pages/StudyGroup/StudyGroup`,
				})
			},
			
			back() {
				uni.navigateBack()
			},
			refresh() {
				myRequest.checkLogin()
				this.notes = []
				
				uni.request({
					url: myRequest.interfaceUrl() + '/group/all',
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							for (var i = 0; i < res.data.group.length; i ++) {
								var t = {
									description: res.data.group[i].description, 
									name: res.data.group[i].name,
									pic: "/static/pic/personal.png",
									create_time:  res.data.group[i].created_at.slice(0,10),
									id: res.data.group[i].id,
								}
								this.groups.push(t);
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
	@import url('../homePage/homePage.css');
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

</style>