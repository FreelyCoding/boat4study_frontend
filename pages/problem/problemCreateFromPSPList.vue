<template>
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="从其他题库录入" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		<view class="u-demo-block">
			<u-list customStyle="width: 94%; margin: auto; max-height: 350px; margin-top: 15px;">
				<u-list-item v-for="(item, index) in problem" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
							@click="jumpToPSPList(item)">
						<view>
							<uni-row>
								<uni-col :span="5" align="start">
									<view>
										<u-icon name="/static/pic/qb.svg" size="50px"></u-icon>
									</view>
								</uni-col>
								<uni-col :span="18" align="start">
									<div class="shuhei" style="margin-bottom: 5px;">
										<p style="font-size: 20px;">{{item.title}}</p>
									</div>
									<div style="font-size: 16px;">
										{{item.created_at}}
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
	
	export default{
		data() {
			return {
				problem_set_id: 0,
				source_set_id: 0,
				problem_id_list: [],
				
				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				problem: [],
				
			}
		},
		onLoad: function (option) {
			this.problem_set_id = option.id
			this.source_set_id = option.source_set_id
			console.log("problem_set_id:" + this.problem_set_id + " source_set_id:" + this.source_set_id)
			
			this.init_problem_id_list()
		
		},
		
		methods: {
			async init_problem_id_list() {
				var ret;
				await myRequest.request(api.problem_set_all_problem({id:this.source_set_id}), 'GET', {}).then(
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
				this.problem_id_list = ret
				for (var i=0;i<this.problem_id_list.length;i++) {
					await this.load_one_problem_detail(i)
				}
				console.log(this.problem)
			},
			
			async load_one_problem_detail(index) {
				var res2;
				
				if (this.problem_id_list[index].problem_type_id == 0) {
					await myRequest.request(api.problem_choice_all({id:this.problem_id_list[index].id}),
					 'GET', {}, null, null, true).then(
						function(res) {
							//console.log(res)
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 0,
							is_multiple: res2.data.problems[0].is_multiple,
							done: 0,
							right: 0,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							options: [],
							my_answer: '',
							correct_answer: '',
							analysis: '',
							answer_show: 0,
						})
						for (var j=0;j<res2.data.problems[0].choices.length;j++) {
							this.problem[this.problem.length-1].options.push({
								name: res2.data.problems[0].choices[j].description,
								selected: 0,
							})
						}
						//console.log(this.problem)
					}
				} else if (this.problem_id_list[index].problem_type_id == 1) {
					await myRequest.request(api.problem_blank_all({id: this.problem_id_list[index].id}),
					 'GET', {}, null, null, true).then(
						function(res) {
							//console.log(res)
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 1,
							is_multiple: false,
							done: 0,
							right: 0,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							options: [],
							my_answer: '',
							correct_answer: '',
							analysis: '',
							answer_show: 0,
						})
						//console.log(this.problem)
					}
				} else if (this.problem_id_list[index].problem_type_id == 2) {
					await myRequest.request(
						api.problem_judge_all({id:this.problem_id_list[index].id}),
						 'GET', {}, null, null, true).then(
						function(res) {
							//console.log(res)
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 2,
							is_multiple: false,
							done: 0,
							right: 0,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							options: [
								{
									name: "正确",
									selected: 0,
								},
								{
									name: "错误",
									selected: 0,
								}
							],
							my_answer: '',
							correct_answer: '',
							analysis: '',
							answer_show: 0,
						})
						//console.log(this.problem)
					}
					
				}
			},
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
		}
		
	}
</script>

<style>
</style>