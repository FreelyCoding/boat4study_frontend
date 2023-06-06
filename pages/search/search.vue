<template>
	<view>
		<view style="background-color: #f1f1f1;">
			<!--自定义navbar-->
			<view class="status-bar">
				<uni-nav-bar title="搜索" background-color="#00aaff" color="#FFFFFF" status-bar="true">
					<block slot="left">
						<view class="note-navbar">
							<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
						</view>
					</block>
				</uni-nav-bar>
			</view>

			<view class="m-middle-2" style="padding-top: 10px; padding-bottom: 5px; display: flex;">
				<u--input placeholder="搜索题库、小组、笔记" prefixIcon="search" prefixIconStyle="font-size: 20px;color: #909399"
					shape="circle" v-model="searchValue" customStyle="background-color: white;">
				</u--input>
				<button class="mini-btn search-btn" size="mini">
					<view style="height: 100%;display:flex;align-items:center;justify-content:center;">
						搜索
					</view>
				</button>
			</view>
		</view>

		<view>
			<uni-row>
				<uni-col>
					<view style="display:flex;align-items:center;justify-content:center;">
						<u-tabs :is-scroll="false" :list="search_type_list" @click="click_area_tab"
							:current="select_area" style="font-size: 50px;"></u-tabs>
					</view>
				</uni-col>
			</uni-row>
		</view>

		<view v-if="select_area == 0 && problemSet.length != 0">
			<view class="u-demo-block">
				<u-list customStyle="margin: auto; margin-top: 10px;">
					<u-list-item v-for="(item, index) in problemSet" :key="index">
						<uni-card isShadow border padding="10px 0px 10px 0px" margin="0px 10px 15px 10px"
							style="border-radius: 10px;" @click="jumpToPS(item)">
							<view>
								<uni-row>
									<uni-col :span="2" align="start">
										<view v-if="item.user_id == 0" style="max-width: 30px;">
											<p class="official_PS_tag">
												官方题库
											</p>
										</view>
										<view v-else-if="item.group_id == 0" style="max-width: 30px;">
											<div class="personal_PS_tag">
												个人题库
											</div>
										</view>
										<view v-else-if="item.group_id != 0" style="max-width: 30px;">
											<div class="group_PS_tag">
												小组题库
											</div>
										</view>
									</uni-col>
									<uni-col :span="2" align="start">
									</uni-col>
									<uni-col :span="7" align="start">
										<p style="margin: auto;">
											<u-avatar :src="myRequest.imageUrl() + '/public'
											+ item.user_info.avatar_path" size="70px"></u-avatar>
										<div style="margin-top: 10px; font-family: shuhei; margin: auto;">
											{{item.user_info.nick_name}}
										</div>
										</p>
									</uni-col>
									<uni-col :span="1" align="start">
									</uni-col>
									<uni-col :span="12" align="start">
										<div class="shuhei" style="margin-bottom: 5px;margin-top: 18px;">
											<p style="font-size: 22px;">{{item.name}}</p>
										</div>
										<div style="font-size: 16px; margin-top: 5px;">
											{{item.problem_number}} 道题目
										</div>
									</uni-col>
								</uni-row>
							</view>
						</uni-card>

					</u-list-item>
				</u-list>
			</view>
		</view>

		<view v-else-if="select_area == 0 && problemSet.length == 0" style="text-align: center;">
			<image src="../../static/pic/note/no_note.png"
				style="margin: auto; margin-top: 30px; height: 200px; width: 200px;"></image>
			<p style="font-size: 20px;margin-top: 30px;">没有搜到相应的题库(╥﹏╥)</p>
		</view>

		<view>

		</view>


	</view>
</template>

<script>
	import note from '@/pages/note/note.vue'
	import myRequest from '../../common/request';
	import api from '@/common/api.js';
	export default {
		data() {
			return {
				searchValue: "",
				problemSet: [],
				group: [],
				notes: [],
				search_type_list_show: false,
				select_area: 0,
				limit: 10,
				offset: 0,
				isLoading: false,
				status: 'loading',
				platfrom: uni.getSystemInfoSync().uniPlatform,
				search_type_list: [{
					name: '题库',
				}, {
					name: '小组',
				}, {
					name: '笔记'
				}],
			}
		},
		onLoad() {
			this.refresh()
		},
		methods: {
			back() {
				uni.navigateBack()
			},

			jumpToPS(item) {
				uni.navigateTo({
					url: "/pages/problemSet/problemSetDetail?id=" + item.id
				})
			},

			jumpToGroup(item) {
				uni.navigateTo({
					url: `/pages/StudyGroup/StudyGroup?id=` + item.id,
				})
			},

			jumpToNote(item) {
				uni.navigateTo({
					url: `/pages/note/note?id=${item.id}`,
				})
			},

			switch_area(index) {
				this.select_area = index;
				this.problemSet_type_list_show = false;
				this.problemSet = []
				this.load_one_page()
			},
			click_area_tab(item) {
				this.select_area = item.index;
				this.problemSet = []
				this.load_one_page()
			},

			refresh() {

			},

			load_problem_set() {
				var _this = this
				var the_api = api.search_problem_set({
					keywork: this.searchValue,
					limit: this.page_size,
					offset: this.loaded_num
				})
				myRequest.request(the_api, 'GET', {}).then(
					function(res) {
						console.log(res)
						console.log(_this.searchValue)
						if (res.statusCode == 200) {
							if (res.data.problem_set && res.data.problem_set.length > 0) {
								for (var i = 0; i < res.data.problem_set.length; i++) {
									var t = {
										id: res.data.problem_set[i].id,
										description: res.data.problem_set[i].description,
										name: res.data.problem_set[i].name,
										pic: "",
										created_at: res.data.problem_set[i].created_at.slice(0, 10),
										problem_number: res.data.problem_set[i].problem_count,
										user_id: res.data.problem_set[i].user_id,
										group_id: res.data.problem_set[i].group_id,
										user_info: res.data.problem_set[i].user_info,
									}
									_this.problemSet.push(t);
								}
							}
						} else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						} else {
							myRequest.toast()
						}
					}
				).catch(
					function(res) {
						console.log(res)
						myRequest.toast()
					})


				this.isLoading = true
				console.log(this.platfrom)
				myRequest.checkLogin()
				this.problemSet = []
				this.offset = 0
				this.status = 'loading'

				uni.request({
					url: myRequest.interfaceUrl() +
						`/search/problem_set?keyword=${this.searchValue}&limit=${this.limit}&offset=${this.offset}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.problemSet = []
							if (res.data.problem_set == null) {
								this.status = 'nomore'
								return;
							}

							this.status = 'loading'
							this.offset += res.data.problem_set.length

							if (res.data.problem_set && res.data.problem_set.length > 0) {
								for (var i = 0; i < res.data.problem_set.length; i++) {
									var t = {
										id: res.data.problem_set[i].id,
										description: res.data.problem_set[i].description,
										name: res.data.problem_set[i].name,
										pic: "",
										created_at: res.data.problem_set[i].created_at.slice(0, 10),
										problem_number: res.data.problem_set[i].problem_count,
										user_id: res.data.problem_set[i].user_id,
										group_id: res.data.problem_set[i].group_id,
										user_info: res.data.problem_set[i].user_info,
									}
									_this.problemSet.push(t);
								}
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
			},


			//note
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
				for (var i = start; i < this.notes.length; i++) {
					var html = this.notes[i].note_html
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

					this.notes[i].note_content = plainText
					// console.log(this.notes[i].note_content)
					this.notes[i].pic = this.extractImage(this.notes[i].note_html)
				}
			},


			load_note() {
				this.isLoading = true

				console.log(this.platfrom)
				myRequest.checkLogin()
				this.notes = []
				this.offset = 0
				this.status = 'loading'

				uni.request({
					url: myRequest.interfaceUrl() + `/search/note`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.notes = []
							if (res.data.notes == null) {
								this.status = 'nomore'
								return;
							}

							this.status = 'loading'
							this.offset += res.data.notes.length

							if (res.data.notes && res.data.notes.length > 0) {
								for (var i = 0; i < res.data.notes.length; i++) {
									var t = {
										note_content: "",
										note_html: res.data.notes[i].content,
										note_title: res.data.notes[i].title,
										pic: "",
										create_time: res.data.notes[i].created_at.slice(0, 10),
										id: res.data.notes[i].id,
										like_count: res.data.notes[i].like_count,
										star_count: res.data.notes[i].favorite_count
									}
									this.notes.push(t);
								}
							}
							this.loadData(0)
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
			},

			load_one_page() {
				var _this = this

				if (this.select_area == 0) {
					_this.load_problem_set()
				} else if (this.select_area == 1) {
					var the_api = api.search_group({
						keywork: this.searchValue,
						limit: this.page_size,
						offset: this.loaded_num
					})
				} else {
					var the_api = api.search_note({
						keywork: this.searchValue,
						limit: this.page_size,
						offset: this.loaded_num
					})
				}

			},

		}
	}
</script>

<style>
	page {
		background: #f1f1f1;
	}

	.search-btn {
		background-color: #f1f1f1;
		color: #00aaff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 5px;
		padding: 5px;
		line-height: 100%;
	}

	.search-btn::after {
		border: none;
	}
</style>