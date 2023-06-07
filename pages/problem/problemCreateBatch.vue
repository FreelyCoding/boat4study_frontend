<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="批量导入题目编辑" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
			
		<view class="u-demo-block">
			<u-list :customStyle="{height:scrollH+'px'}" @scroll="scrollEvent" @scrolltolower="load_new_page">
				<u-list-item v-for="(item, index) in problem_id_list" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
						@click="select(item)">
						<view>
							<uni-row>
								<uni-col :span="4" align="start">
									<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===0" />
									<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===1" />
									<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===2" />
								</uni-col>
								<uni-col :span="10" align="start">
									<div class="shuhei problem-title" style="margin-bottom: 5px;" @click="jumpToProbelmDetail(index)">
										<p style="font-size: 20px;">{{item.title}}</p>
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
				
				pro_batch: [],
			}
		},
		computed:{
			scrollH:function(){
				let sys = uni.getSystemInfoSync();
				let winHeight =parseInt(sys.windowHeight)-50
				return winHeight	
			},
			the_pro_batch() {
				return this.$store.state.pro_id_batch 
			},
		},
		onLoad: function(option) {
			
			console.log(uni.getSystemInfoSync())
			
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id

		},
		onShow: function() {
			this.pro_batch = this.the_pro_batch
			this.$store.commit('set_pro_id_batch', [])
			console.log(this.pro_batch)
			this.load_new_page()
		},
		methods: {
			jumpToProbelmDetail(i) {
				uni.navigateTo({
					url: "/pages/problem/problemDetail?problem_id=" + this.problem_id_list[i].id + "&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			jumpToProblemEdit(i) {
				uni.navigateTo({
					url: "/pages/problem/problemEdit?problem_id=" + this.problem_id_list[i].id + "&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			scrollEvent (e) {
				//console.log(e);
			},
			
			
			async load_new_page() {
				for (var i=0;i<this.pro_batch.length;i++) {
					await this.problem_id_list.push({
						id: this.pro_batch[i].ProblemId,
						type: this.pro_batch[i].ProblemType,
						selected: 0,
						title: this.pro_batch[i].Description.split("#")[0],
					})
				}
			},
			
			deleteProblem(index) {
				if (this.problem_id_list[index].type == 0) {
					myRequest.request(api.problem_choice_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {
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
				} else if (this.problem_id_list[index].type == 1) {
					myRequest.request(api.problem_blank_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {
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
				} else if (this.problem_id_list[index].type == 2) {
					myRequest.request(api.problem_judge_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
						function(res) {
							console.log(res)
							if (res.statusCode == 200) {
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
		height: 20px;
	}
</style>