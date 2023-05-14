<template>
	<view class="box">
		<view class="status-bar">
			<uni-nav-bar title="学习小组" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		<view style="display: flex; align-items: center;">
			<u-icon name="/static/pic/studyGroup/more.svg" size="25px" style="margin-left: 10px;"
			@click="group_type_list_show = true"
			></u-icon>
			<u-tabs :list="group_type_list" @click="click"></u-tabs>
			
		</view>
		
		<u-popup :show="group_type_list_show" :round="10" mode="bottom" @close="close" @open="open">
			<view style="margin: 10px 10px 10px 10px;">
				<view style="display: flex; align-items: center; margin-bottom: 10px;">
					<text style="font-size: 18px; font-weight: bold;">全部分区</text>
					<text style="font-size: 14px; color: #8c8c8c; margin-left: 10px;">点击进入分区</text>
					<u-icon name="/static/pic/studyGroup/close1.svg" size="25px"
					 style="margin: 0 10px 0 10px; position: absolute; right: 0;"
					@click="close"
					></u-icon>
				</view>
				<u-grid
					:border="false"
					col="3"
				>
					<u-grid-item
						v-for="(listItem,listIndex) in group_type_list"
						:key="listIndex"
					>
						<view class="grid-item">{{listItem.name}}</view>
					</u-grid-item>
				</u-grid>
				
			</view>
		</u-popup>
		

		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" placeholder="请输入要搜索的学习小组名称"
			cancelButton="none" maxlength="50" style="margin-left: 5px; margin-right: 5px;">
		</uni-search-bar>


		<view v-if="groups && groups.length != 0" style="margin-top: 5px;">
			<view v-for="(item, index) in groups" :key="index">
				<uni-card :title="item.name" :extra="'创建于' + item.create_time" :thumbnail="item.pic"
					@click="cardClick(item)" isShadow border padding="15px 5px 15px 5px" margin="0px 15px 15px 15px"
					style="border-radius: 10px;">
					<text class="uni-body">{{item.description}}</text>
				</uni-card>
			</view>
		</view>

		<view v-else style="text-align: center;">
			<image src="../../static/pic/note/no_note.png"
				style="margin: auto; margin-top: 30px; height: 200px; width: 200px;"></image>
			<p style="font-size: 20px;margin-top: 30px;">暂无学习小组 </p>
		</view>

		<view style="padding: 10px 0 10px 0; position: sticky; bottom: 0; background-color: #EDEDED;">
			<p style="text-align: center;">
				<button style="background-color: #00aaff; color: white; max-width: 92%;
				 margin-bottom: 10px;" @click="jumpToCreateGroup">
					创建小组
				</button>
			</p>
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
				groups: [],
				group_type_list_show: false,
				group_type_list: [{
						name: '综合',
				}, {
						name: '计算机',
				}, {
						name: '经济金融'
				}, {
						name: '电子信息'
				}, {
						name: '数学'
				}, {
						name: '生物'
				}, {
						name: '医学'
				}, {
						name: '物理'
				}, {
						name: '化学'
				}, {
						name: '历史'
				}, {
						name: '建筑'
				}, {
						name: '交通'
				}, {
						name: '人文社科'
				}, {
						name: '外语'
				}, {
						name: '体育健康'
				}, {
						name: '公务员'
				}, {
						name: '教师'
				}, {
						name: '天文学'
				}, {
						name: '地理'
				}, {
						name: '政治'
				}, {
						name: '其他'
				},
				],
			}
		},
		onShow: function() {
			this.refresh()
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			close() {
				this.group_type_list_show = false;
			},

			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			},

			cardClick(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/StudyGroup/StudyGroup?id=` + item.id,
				})
			},
			jumpToCreateGroup() {
				uni.navigateTo({
					url: '/pages/StudyGroup/StudyGroupCreate'
				})
			},


			back() {
				uni.navigateBack()
			},
			refresh() {
				myRequest.checkLogin()
				this.groups = []

				uni.request({
					url: myRequest.interfaceUrl() + '/group/all',
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							for (var i = 0; i < res.data.group.length; i++) {
								var t = {
									description: res.data.group[i].description,
									name: res.data.group[i].name,
									pic: "/static/pic/personal_group.svg",
									create_time: res.data.group[i].created_at.slice(0, 10),
									id: res.data.group[i].id,
								}
								this.groups.push(t);
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
					}
				})
			}
		},

	}
</script>

<style>
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	page {
		background: #EDEDED;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.grid-item{
		margin: 5px 0 5px 0;
		width: 80%;
		height: 30px;
		border-radius: 15px;
		align-items: center;
		justify-content: center;
		display: flex;
		background-color: #f0f0f0;
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

	.btn-box {
		position: absolute;
		bottom: 10px;
		margin: auto;
		left: 0;
		right: 0;
	}
</style>