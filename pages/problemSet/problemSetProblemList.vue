<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="所有题目" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
			
		<view class="u-demo-block">
			<u-list customStyle="width: 94%; margin: auto; max-height: 600px; margin-top: 15px;">
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
									<button class="button" size="mini" type="primary" @click="deleteProblem()"
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
				
			}
		},
		onLoad: function(option) {
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			
			this.init_problem_id_list()
		},
		methods: {
			jumpToProbelmDetail(i) {
				uni.navigateTo({
					url: "/pages/problem/problemDetail?problem_id=" + this.problem_id_list[i].id + "&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			
			async init_problem_id_list() {
				var ret;
				await myRequest.request(api.problem_set_all_problem({id:this.problem_set_id}), 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							ret = res.data.problems
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
						title: ret[i].description,
					})
				}
				console.log(this.problem_id_list)
				
				/*
				for (var i=0;i<this.problem_id_list.length;i++) {
					await this.load_one_problem_detail(i)
				}
				console.log(this.problem)*/
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