<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="题目详情" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="contain">
		
			<view class="problem_title">
				<uni-tag text="单选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[0].type===0 && problem[0].is_multiple === false" />
				<uni-tag text="多选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[0].type===0 && problem[0].is_multiple === true" />
				<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[0].type===1" />
				<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[0].type===2" />
			</view>
		
			<view class="problem_content">
				<p>{{problem[0].title}}</p>
				<view v-if="problem[0].title_pic != ''">
					<image style="width: 100%; height: 200px; margin-top: 20px;"
					:src="myRequest.imageUrl() + problem[0].title_pic"></image>
				</view>
			</view>
		
			<!-- 单选题 -->
			<view v-if="problem[0].type === 0 && problem[0].is_multiple === false">
				<view class="option_group">
					<view v-for="(item, index) in problem[0].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[0].options[index].selected==1,
							 'wrong_option_item':problem[0].options[index].selected==2,
							 'right_option_item':problem[0].options[index].selected==3}" @click="select_single_option(index)">
							<u-row style="width: 100%;">
								<u-col :span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[0].options[index].selected==1,
							 'wrong_option_letter_box':problem[0].options[index].selected==2,
							 'right_option_letter_box':problem[0].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col :span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[0].options[index].selected!=0}">
										{{problem[0].options[index].name}}
										<view v-if="problem[0].options[index].option_pic != ''">
											<image style="width: 80%; height: 150px; margin-top: 20px;"
											:src="myRequest.imageUrl() + problem[0].options[index].option_pic"></image>
										</view>
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 多选题 -->
			<view v-if="problem[0].type === 0 && problem[0].is_multiple === true">
				<view class="option_group">
					<view v-for="(item, index) in problem[0].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[0].options[index].selected==1,
							 'wrong_option_item':problem[0].options[index].selected==2,
							 'right_option_item':problem[0].options[index].selected==3}" @click="select_multi_option(index)">
							<u-row>
								<u-col :span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[0].options[index].selected==1,
							 'wrong_option_letter_box':problem[0].options[index].selected==2,
							 'right_option_letter_box':problem[0].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col :span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[0].options[index].selected!=0}">
										{{problem[0].options[index].name}}
										<view v-if="problem[0].options[index].option_pic != ''">
											<image style="width: 80%; height: 150px; margin-top: 20px;"
											:src="myRequest.imageUrl() + problem[0].options[index].option_pic"></image>
										</view>
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 填空题 -->
			
			<!-- 判断题 -->
			<view v-if="problem[0].type === 2">
				<view class="option_group">
					<view v-for="(item, index) in problem[0].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[0].options[index].selected==1,
							 'wrong_option_item':problem[0].options[index].selected==2,
							 'right_option_item':problem[0].options[index].selected==3}" @click="submit_judge_answer(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box" :class="{'selected_option_letter_box':problem[0].options[index].selected==1,
							 'wrong_option_letter_box':problem[0].options[index].selected==2,
							 'right_option_letter_box':problem[0].options[index].selected==3}">{{letter[index]}}</view>
								</u-col>
								<u-col span="11">
									<view class="option_item_content"
										:class="{'selected_option_item_content':problem[0].options[index].selected!=0}">
										{{problem[0].options[index].name}}
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</view>
			</view>
			
			<view class="problem_answer_box_title">
				答案
			</view>
			<view class="problem_answer_box">
				<p>{{problem[0].correct_answer}}</p>
				<view v-if="problem[0].answer_pic != ''">
					<image style="width: 100%; height: 200px; margin-top: 20px;"
					:src="myRequest.imageUrl() + problem[0].answer_pic"></image>
				</view>
			</view>
			<view class="problem_answer_box_title">
				解析
			</view>
			<view class="problem_answer_box">
				<p>{{problem[0].analysis}}</p>
				<view v-if="problem[0].analysis_pic != ''">
					<image style="width: 100%; height: 200px; margin-top: 20px;"
					:src="myRequest.imageUrl() + problem[0].analysis_pic"></image>
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
				problem: [],
				
				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				
				problem_id: 0,
				problem_type_id: 0,
			}
		},
		onLoad: function(option) {
			this.problem_id = option.problem_id;
			this.problem_type_id = option.problem_type_id;
			this.load_one_problem_detail();
		},
		methods: {
			load_one_problem_detail(index) {
				if (this.problem_type_id == 0) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_choice_all({id:this.problem_id}),
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
									title: res2.data.problems[0].description.split("#")[0],
									title_pic: '',
									options: [],
									my_answer: '',
									correct_answer: '',
									answer_pic: '',
									analysis: '',
									analysis_pic: '',
									answer_show: 0,
								})
								if (res2.data.problems[0].description.split("#").length > 1) {
									this.problem[0].title_pic = res2.data.problems[0].description.split("#")[1]
								}
								for (var j=0;j<res2.data.problems[0].choices.length;j++) {
									this.problem[this.problem.length-1].options.push({
										name: res2.data.problems[0].choices[j].description.split("#")[0],
										option_pic: '',
										selected: 0,
									})
									if (res2.data.problems[0].choices[j].description.split("#").length > 1) {
										this.problem[0].options[j].option_pic = res2.data.problems[0].choices[j].description.split("#")[1]
									}
								}
								
								uni.request({
									url: myRequest.interfaceUrl() + api.problem_choice_answer(this.problem_id),
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res1) => {
										console.log(res1)
										if (res1.statusCode == 200) {
											var answer = res1.data.choice_problem_answer
											this.problem[0].analysis = res1.data.analysis.split("#")[0]
											if (res1.data.analysis.split("#").length > 1) {
												this.problem[0].analysis_pic = res1.data.analysis.split("#")[1]
											}
											for (var k=0;k<answer.length;k++) {
												if (answer[k].is_correct == true) {
													this.problem[0].correct_answer += String.fromCharCode(65+k);
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
				} else if (this.problem_type_id == 1) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_blank_all({id: this.problem_id}),
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
									title: res2.data.problems[0].description.split("#")[0],
									title_pic: '',
									options: [],
									my_answer: '',
									correct_answer: '',
									answer_pic: '',
									analysis: '',
									analysis_pic: '',
									answer_show: 0,
								})
								if (res2.data.problems[0].description.split("#").length > 1) {
									this.problem[0].title_pic = res2.data.problems[0].description.split("#")[1]
								}
								uni.request({
									url: myRequest.interfaceUrl() + api.problem_blank_answer(this.problem_id),
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res1) => {
										console.log(res1)
										if (res1.statusCode == 200) {
											this.problem[0].correct_answer = res1.data.answer.split("#")[0]
											if (res1.data.answer.split("#").length > 1) {
												this.problem[0].answer_pic = res1.data.answer.split("#")[1]
											}
											this.problem[0].analysis = res1.data.analysis.split("#")[0]
											if (res1.data.analysis.split("#").length > 1) {
												this.problem[0].analysis_pic = res1.data.analysis.split("#")[1]
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
				} else if (this.problem_type_id == 2) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_judge_all({id:this.problem_id}),
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
									title: res2.data.problems[0].description.split("#")[0],
									title_pic: '',
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
									answer_pic: '',
									analysis: '',
									analysis_pic: '',
									answer_show: 0,
								})
								if (res2.data.problems[0].description.split("#").length > 1) {
									this.problem[0].title_pic = res2.data.problems[0].description.split("#")[1]
								}
								
								uni.request({
									url: myRequest.interfaceUrl() + api.problem_judge_answer(this.problem_id),
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res1) => {
										console.log(res1)
										if (res1.statusCode == 200) {
											var answer = res1.data.is_correct;
											this.problem[0].analysis = res1.data.analysis.split("#")[0]
											if (res1.data.analysis.split("#").length > 1) {
												this.problem[0].analysis_pic = res1.data.analysis.split("#")[1]
											}
											if (answer) {
												this.problem[0].correct_answer = "正确";
											} else {
												this.problem[0].correct_answer = "错误";
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
			
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
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
		min-height: 40px;
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
		margin: 10px 0 10px 30px;
		width: 100%;
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
	}
	
</style>