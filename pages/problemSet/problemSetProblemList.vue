<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="所有题目" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
					</view>
				</block>
			</uni-nav-bar>
		</view>

		<view class="u-demo-block" v-if="have_access">
			<u-list :customStyle="{height:scrollH+'px'}" @scroll="scrollEvent" @scrolltolower="load_new_page">
				<u-list-item v-for="(item, index) in problem_id_list" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="select(item)">
						<view>
							<uni-row>
								<uni-col :span="5" align="start">
									<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff;"
										v-if="item.type===0" />
									<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===1" />
									<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===2" />
								</uni-col>
								<uni-col :span="9" align="start">
									<div class="shuhei problem-title" style="justify-content: center;"
										@click="jumpToProbelmDetail(index)">
										<p style="font-size: 18px;">{{item.title}}</p>
									</div>
								</uni-col>
								<uni-col :span="5" align="start">
									<button class="button" size="mini" type="primary" @click="jumpToProblemEdit(index)"
										style="background-color: #00aa7f; text-align: center; margin: auto;">编辑</button>
								</uni-col>
								<uni-col :span="5" align="start">
									<button class="button" size="mini" type="primary" @click="deleteProblem(index)"
										style="background-color: #ff5500; text-align: center; margin: auto;">删除</button>
								</uni-col>
							</uni-row>
							<u-divider> </u-divider>
						</view>
					</uni-card>

				</u-list-item>
			</u-list>
		</view>
		
		<view class="u-demo-block" v-if="!have_access">
			<u-list :customStyle="{height:scrollH+'px'}" @scroll="scrollEvent" @scrolltolower="load_new_page">
				<u-list-item v-for="(item, index) in problem_id_list" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="select(item)">
						<view>
							<uni-row>
								<uni-col :span="5" align="start">
									<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff;"
										v-if="item.type===0" />
									<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===1" />
									<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===2" />
								</uni-col>
								<uni-col :span="19" align="start">
									<div class="shuhei problem-title" style="justify-content: center;"
										@click="jumpToProbelmDetail(index)">
										<p style="font-size: 18px;">{{item.title}}</p>
									</div>
								</uni-col>
							</uni-row>
							<u-divider> </u-divider>
						</view>
					</uni-card>
		
				</u-list-item>
			</u-list>
		</view>

	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import api from '@/common/api.js';

	export default {
		data() {
			return {
				problem_id_list: [],
				problem_set_id: 0,
				page_size: 12,
				loaded_num: 0,
				
				proDetail: {
					user_id: -1,
					title: "",
					created_at: '',
					ownerName: "",
					ownerAvatar: "",
					totalNum: 0,
					descrip: '',
					is_favorite: false,
					is_public: false,
					wrong_problem_count: 0,
					fav_problem_count: 0,
				},
				
				have_access: false,
			}
		},
		computed: {
			scrollH: function() {
				let sys = uni.getSystemInfoSync();
				let winHeight = parseInt(sys.windowHeight) - 50
				return winHeight
			}
		},
		onLoad: function(option) {
			console.log(uni.getSystemInfoSync())
			myRequest.checkLogin()
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			
			this.onloadFunc()
		},
		onShow: function() {
		},
		methods: {
			jumpToProbelmDetail(i) {
				uni.navigateTo({
					url: "/pages/problem/problemDetail?problem_id=" + this.problem_id_list[i].id +
						"&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			jumpToProblemEdit(i) {
				uni.navigateTo({
					url: "/pages/problem/problemEdit?problem_id=" + this.problem_id_list[i].id +
						"&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			scrollEvent(e) {
				//console.log(e);
			},
			
			async onloadFunc() {
				await this.get_proset_detail()
				await this.load_new_page()
			},
			
			async get_proset_detail() {
				var _this = this
				
				await myRequest.request('/check/problem_set/' + this.problem_set_id
				, 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							_this.have_access = true
						} else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						} else if (res.statusCode == 403) {
							_this.have_access = false
						} else if (res.statusCode == 404) {
							_this.have_access = false
						} else {
							myRequest.toast()
						}
					}
				).catch(
					function(res) {
						console.log(res)
						myRequest.toast()
				})
				
				await myRequest.request('/problem_set/all?id=' + this.problem_set_id
				, 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							_this.proDetail.title = res.data.problem_set[0].name
							_this.proDetail.created_at = res.data.problem_set[0].created_at.slice(0, 10)
							_this.proDetail.totalNum = res.data.problem_set[0].problem_count
							_this.proDetail.descrip = res.data.problem_set[0].description
							_this.proDetail.is_favorite = res.data.problem_set[0].is_favorite
							_this.proDetail.user_id = res.data.problem_set[0].user_id
							_this.proDetail.is_public = res.data.problem_set[0].is_public
							console.log(_this.proDetail)
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
				
				await myRequest.request('/problem_set/statistic/wrong_count?id=' + this.problem_set_id
				, 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							_this.proDetail.wrong_problem_count = res.data
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
				
				await myRequest.request('/problem_set/statistic/fav_count?id=' + this.problem_set_id
				, 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							_this.proDetail.fav_problem_count = res.data
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
				
			},
			
			async load_new_page() { 
				var ret;
				var _this = this;
				
				if (this.loaded_num < this.proDetail.totalNum) {
					await myRequest.request(api.problem_set_all_problem({id:this.problem_set_id,
					 limit:this.page_size,offset:this.loaded_num}), 'GET', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {
								ret = res.data.problems
								_this.loaded_num += _this.page_size
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
					
					for (var i=0;i<ret.length;i++) {
						await this.problem_id_list.push({
							id: ret[i].id,
							type: ret[i].problem_type_id,
							selected: 0,
							title: ret[i].description.split("#")[0],
						})
					}
				} else {
					uni.showToast({
						title: "加载完毕",
						duration: 500
					})
				}

			},

			deleteProblem(index) {
				if (this.problem_id_list[index].type == 0) {
					myRequest.request(api.problem_choice_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {} else if (res.statusCode == 401) {
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
				} else if (this.problem_id_list[index].type == 1) {
					myRequest.request(api.problem_blank_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {} else if (res.statusCode == 401) {
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
				} else if (this.problem_id_list[index].type == 2) {
					myRequest.request(api.problem_judge_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {} else if (res.statusCode == 401) {
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
				}
				this.problem_id_list.splice(index, 1)
			},

			back() {
				uni.navigateBack({
					delta: 1,
				})
			}
		},
	}
</script>

<style>
	.main-body {
		margin: 20px;
	}

	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.problem-title {
		width: 90%;
		overflow: hidden;
	}
</style>