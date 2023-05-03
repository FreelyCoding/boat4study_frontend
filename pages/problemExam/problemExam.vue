<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="顺序练习" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="contain">

			<view class="page_nav">
				<uni-pagination :show-icon="true" :total="problem_id_list.length" pageSize="1" v-model="cur_page" @change="load_next_pro()"/>
			</view>

			<view class="problem_title">
				<uni-tag text="单选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===0 && problem[cur_page-1].is_multiple === false" />
				<uni-tag text="多选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===0 && problem[cur_page-1].is_multiple === true" />
				<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===1" />
				<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===2" />
			</view>

			<view class="problem_content">
				<p>{{problem[cur_page-1].title}}</p>
			</view>

			<!-- 单选题 -->
			<view v-if="problem[cur_page-1].type === 0 && problem[cur_page-1].is_multiple === false">
				<view class="option_group">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="select_single_option(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_letter_box':problem[cur_page-1].options[index].selected==2,
							 'right_option_letter_box':problem[cur_page-1].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[cur_page-1].options[index].selected!=0}">
										{{problem[cur_page-1].options[index].name}}
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 多选题 -->
			<view v-if="problem[cur_page-1].type === 0 && problem[cur_page-1].is_multiple === true">
				<view class="option_group">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="select_multi_option(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_letter_box':problem[cur_page-1].options[index].selected==2,
							 'right_option_letter_box':problem[cur_page-1].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[cur_page-1].options[index].selected!=0}">
										{{problem[cur_page-1].options[index].name}}
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
					<button class="button" size="mini" type="primary" @click="submit_multi_option_answer()">提交</button>
				</view>
			</view>
			
			<!-- 填空题 -->
			<view v-if="problem[cur_page-1].type === 1">
				<view class="block_answer_box">
					<view class="block_answer_item">
						<uni-easyinput class="" v-model="problem[cur_page-1].my_answer" placeholder="请输入答案" />
					</view>
					<button class="button" size="mini" type="primary" @click="submit_block_answer()">提交</button>
				</view>
			</view>
			
			<!-- 判断题 -->
			<view v-if="problem[cur_page-1].type === 2">
				<view class="option_group">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="submit_judge_answer(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_letter_box':problem[cur_page-1].options[index].selected==2,
							 'right_option_letter_box':problem[cur_page-1].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[cur_page-1].options[index].selected!=0}">
										{{problem[cur_page-1].options[index].name}}
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</view>
			</view>
			
			<view v-if="problem[cur_page-1].answer_show == true">
				<view class="problem_answer_box_title">
					答案
				</view>
				<view class="problem_answer_box">
					<p>正确答案：{{problem[cur_page-1].correct_answer}}</p>
					<p>我的答案：{{problem[cur_page-1].my_answer}}</p>
				</view>
				<view class="problem_answer_box_title">
					解析
				</view>
				<view class="problem_answer_box">
					<p>{{problem[cur_page-1].analysis}}</p>
				</view>
			</view>
			
			<view>
				<div style="height: 30px;"></div>
			</view>
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import api from '@/common/api.js';
		
	export default {
		data() {
			return {
				problem_set_id: 0,
				problem_id_list:[],
				cur_page: 1,

				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				problem: [],

			}
		},
		watch: {
				cur_page(new_page, old_page) {
					if (new_page > this.problem.length) {
						this.load_one_problem_detail(new_page - 1)
					}
				}
		},
		onLoad: function(option) {
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			var _this = this
			
			uni.request({
				url: myRequest.interfaceUrl() + api.problem_set_all_problem({id:this.problem_set_id}),
				method: 'GET',
				header: {
					'X-Token': myRequest.getToken()
				},
				
				success: (res1) => {
					console.log(res1)
					if (res1.statusCode == 200) {
						this.problem_id_list = res1.data.problems
						this.load_one_problem_detail(0)
					}
					else if (res1.statusCode == 401) {
						myRequest.redirectToLogin()
					}
					else {
						myRequest.toast()
					}
				},
				
				fail: (res1) => {					
					console.log(res1)
					myRequest.toast()
				},
			})
			
		},
		methods: {
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			load_one_problem_detail(index) {
				if (this.problem_id_list[index].problem_type_id == 0) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_choice_all({id:this.problem_id_list[index].id}),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res2) => {
							console.log(res2)
							if (res2.statusCode == 200) {
								this.problem.push({
									type: 0,
									is_multiple: res2.data.problems[0].is_multiple,
									done: 0,
									right: 0,
									title: res2.data.problems[0].description,
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
								console.log(this.problem)
							
							}
							else if (res2.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						fail: (res2) => {					
							console.log(res2)
							myRequest.toast()
						},
					})
				} else if (this.problem_id_list[index].problem_type_id == 1) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_blank_all({id: this.problem_id_list[index].id}),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res2) => {
							console.log(res2)
							if (res2.statusCode == 200) {
								this.problem.push({
									type: 1,
									is_multiple: false,
									done: 0,
									right: 0,
									title: res2.data.problems[0].description,
									options: [],
									my_answer: '',
									correct_answer: '',
									analysis: '',
									answer_show: 0,
								})
								console.log(this.problem)
							}
							else if (res2.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						fail: (res2) => {					
							console.log(res2)
							myRequest.toast()
						},
					})
				} else if (this.problem_id_list[index].problem_type_id == 2) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_judge_all({id:this.problem_id_list[index].id}),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res2) => {
							console.log(res2)
							if (res2.statusCode == 200) {
								this.problem.push({
									type: 2,
									is_multiple: false,
									done: 0,
									right: 0,
									title: res2.data.problems[0].description,
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
								console.log(this.problem)
							}
							else if (res2.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						fail: (res2) => {					
							console.log(res2)
							myRequest.toast()
						},
					})
				}
			},
			select_single_option(i) {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].done = 1;
					
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_choice_answer(this.problem_id_list[pr_i].id),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res1) => {
							console.log(res1)
							var answer = res1.data.choice_problem_answer
							this.problem[pr_i].analysis = res1.data.analysis
							if (res1.statusCode == 200) {
								for (var k=0;k<answer.length;k++) {
									if (answer[k].is_correct == true) {
										this.problem[pr_i].correct_answer += String.fromCharCode(65+k);
									}
									if (i == k) {
										this.problem[pr_i].my_answer += String.fromCharCode(65+k);
									}
									if(answer[k].is_correct == true && i == k) {
										this.problem[pr_i].options[k].selected = 3;
									} else if (answer[k].is_correct == false && i == k) {
										this.problem[pr_i].options[k].selected = 2;
									} else if (answer[k].is_correct == true && i != k) {
										this.problem[pr_i].options[k].selected = 3;
									}
								}
							}
							else if (res1.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						
						fail: (res1) => {					
							console.log(res1)
							myRequest.toast()
						},
					})
					
					this.problem[pr_i].answer_show = 1;
				}
			},
			select_multi_option(i) {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					if (this.problem[pr_i].options[i].selected != 0) {
						this.problem[pr_i].options[i].selected = 0
					} else {
						this.problem[pr_i].options[i].selected = 1
					}
				}
			},
			submit_multi_option_answer() {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].done = 1;
					
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_choice_answer(this.problem_id_list[pr_i].id),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: (res1) => {
							console.log(res1)
							var answer = res1.data.choice_problem_answer
							this.problem[pr_i].analysis = res1.data.analysis
							if (res1.statusCode == 200) {
								for (var k=0;k<answer.length;k++) {
									if (answer[k].is_correct == true) {
										this.problem[pr_i].correct_answer += String.fromCharCode(65+k);
									}
									if (this.problem[pr_i].options[k].selected == 1) {
										this.problem[pr_i].my_answer += String.fromCharCode(65+k);
									}
									if(answer[k].is_correct == true && this.problem[pr_i].options[k].selected == 1) {
										this.problem[pr_i].options[k].selected = 3;
									} else if (answer[k].is_correct == false && this.problem[pr_i].options[k].selected == 1) {
										this.problem[pr_i].options[k].selected = 2;
									} else if (answer[k].is_correct == true && this.problem[pr_i].options[k].selected != 1) {
										this.problem[pr_i].options[k].selected = 3;
									}
								}
							}
							else if (res1.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						
						fail: (res1) => {					
							console.log(res1)
							myRequest.toast()
						},
					})
					
					this.problem[pr_i].answer_show = 1;
				}
			},
			submit_block_answer() {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].done = 1;
					
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_blank_answer(this.problem_id_list[pr_i].id),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: (res1) => {
							console.log(res1)
							if (res1.statusCode == 200) {
								this.problem[pr_i].correct_answer = res1.data.answer;
								this.problem[pr_i].analysis = res1.data.analysis;
							}
							else if (res1.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						
						fail: (res1) => {					
							console.log(res1)
							myRequest.toast()
						},
					})
					
					this.problem[pr_i].answer_show = 1;
				}
			},
			submit_judge_answer(index) {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].done = 1;
					
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_judge_answer(this.problem_id_list[pr_i].id),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: (res1) => {
							console.log(res1)
							var answer = res1.data.answer;
							this.problem[pr_i].analysis = res1.data.analysis;
							if (res1.statusCode == 200) {
								if (answer) {
									this.problem[pr_i].options[0].selected = 3;
									this.problem[pr_i].correct_answer = "正确";
									if (index == 1) {
										this.problem[pr_i].options[1].selected = 2;
									}
								} else {
									this.problem[pr_i].options[1].selected = 3;
									this.problem[pr_i].correct_answer = "错误";
									if (index == 0) {
										this.problem[pr_i].options[0].selected = 2;
									}
								}
								if (index == 1) {
									this.problem[pr_i].my_answer = "错误";
								} else {
									this.problem[pr_i].my_answer = "正确";
								}
							}
							else if (res1.statusCode == 401) {
								myRequest.redirectToLogin()
							}
							else {
								myRequest.toast()
							}
						},
						
						fail: (res1) => {					
							console.log(res1)
							myRequest.toast()
						},
					})
					
					this.problem[pr_i].answer_show = 1;
				}
			}
		},
	};
</script>

<style lang="scss">
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.note-navbar {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}

	.contain {
		margin: 5% 5% 20% 5%;
	}

	.page_nav {
		margin-bottom: 5%;
	}

	.problem_title {
		margin-bottom: 20px;
		font-size: 20px;
	}

	.problem_content {
		font-size: 16px;
		margin-bottom: 30px;
		line-height: 30px;
	}

	.option_item {
		border-radius: 5px;
		height: 40px;
		display: flex;
		align-items: center;
		margin: 10px 0 10px 0;
		border: #dadada solid 1px;
		transition: 0.2s;
		//background-color: #ebebeb;
	}

	.selected_option_item {
		border: #55aaff solid 1px;
		transition: 0.2s;
		//background-color: #55aaff;
	}

	.wrong_option_item {
		border: #c30421 solid 1px;
		transition: 0.2s;
		//background-color: #c30421;
	}

	.right_option_item {
		border: #0ca006 solid 1px;
		transition: 0.2s;
		//background-color: #0ca006;
	}

	.option_letter_box {
		font-weight: bold;
		font-size: 16px;
		border-radius: 20%;
		text-align: center;
		line-height: 15px;
		height: 15px;
		width: 15px;
		padding: 5px;
		margin-left: 10px;
		background-color: #e0e0e0;
		transition: 0.2s;
	}
	.selected_option_letter_box {
		background-color: #55aaff;
		color: #ffffff;
		transition: 0.2s;
	}
	.wrong_option_letter_box {
		background-color: #c30421;
		color: #ffffff;
		transition: 0.2s;
	}
	.right_option_letter_box {
		background-color: #0ca006;
		color: #ffffff;
		transition: 0.2s;
	}

	.option_item_content {
		font-size: 16px;
		margin-left: 35px;
	}

	.selected_option_item_content {
		//margin-left: 35px;
		//color: #ffffff;
	}

	.option_group {
		margin-bottom: 50px;
	}
	
	.block_answer_box {
		margin: 0 0 50px 0;
	}
	.block_answer_item {
		margin: 20px 0 20px 0;
	}
	
	.problem_answer_box_title {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 18px;
		background-color: #00aaff;
		color: white;
		width: 50px;
		justify-content: center;
		text-align: center;
		height: 25px;
		border-radius: 10px;
	}
	.problem_answer_box {
		font-size: 16px;
		p {
			margin-bottom: 5px;
		}
	}
</style>
