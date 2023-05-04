<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="编辑题目" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="problem_content">

			<uni-section title="试题类型" type="line" class="select_box">
				<uni-data-select v-model="problem_type_select" :localdata="problem_type" @change="change"
					:clear="false" disabled></uni-data-select>
			</uni-section>

			<uni-section v-if="problem_type_select === 0" title="试题内容" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题目" required>
						<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="index" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicLists[index].description" placeholder="请输入选项" />
							<button class="button" v-if="index>=2" size="mini" type="warn"
								@click="del_option(index)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add_option"
						style="background-color: #00aaff;">添加选项</button>
				</view>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="答案" required>
						<uni-data-checkbox v-model="baseFormData.answer" :localdata="option_name" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>

			<uni-section v-if="problem_type_select === 1" title="试题内容" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题目" required>
						<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicLists[index].description" placeholder="请输入选项" />
							<button class="button" v-if="index>=2" size="mini" type="warn"
								@click="del_option(index)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add_option"
					style="background-color: #00aaff;">添加选项</button>
				</view>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="答案" required>
						<uni-data-checkbox v-model="baseFormData.answer" multiple :localdata="option_name" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>

			<uni-section v-if="problem_type_select === 2" title="试题内容" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题目" required>
						<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
					</uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="答案" required>
						<uni-data-checkbox v-model="baseFormData.answer" :localdata="judge_option_name" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>

			<uni-section v-if="problem_type_select === 3" title="试题内容" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题目" required>
						<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
					</uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="答案" required>
						<uni-easyinput v-model="baseFormData.answer" placeholder="请输入答案" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>

			<uni-section title="试题分析" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="解析">
						<uni-easyinput v-model="baseFormData.analyse" placeholder="请输入解析" />
					</uni-forms-item>
					<uni-forms-item label="难度" style="margin-bottom: 0ch;">
						<uni-rate v-model="problem_difficulty_select" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>
			
			<view class="button-group">
				<view v-if="problem_type_select === 0 || problem_type_select === 1">
					<button class="button" size="mini" type="primary"
						@click="update_choice_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						完成编辑
					</button>
				</view>
				<view v-if="problem_type_select === 2">
					<button class="button" size="mini" type="primary"
						@click="update_judge_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						完成编辑
					</button>
				</view>
				<view v-if="problem_type_select === 3">
					<button class="button" size="mini" type="primary"
						@click="update_blank_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						完成编辑
					</button>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import list from '../../uni_modules/uview-ui/libs/config/props/list';
	import toast from '../../uni_modules/uview-ui/libs/config/props/toast';
	import api from '@/common/api.js';
	
	export default {
		data() {
			return {
				problem_set_id:0,
				
				problem_id: 0,
				problem_type_id: 0,
				
				problem_difficulty_select: 0,

				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				
				judge_option_name: [{
						"value": 0,
						"text": "正确"
					},
					{
						"value": 1,
						"text": "错误"
					},
				],

				problem_type_select: 0,
				problem_type: [{
						value: 0,
						text: "单选题"
					},
					{
						value: 1,
						text: "多选题"
					},
					{
						value: 2,
						text: "判断题"
					},
					{
						value: 3,
						text: "填空题"
					},
				],
				
				// 题目信息
				baseFormData: {
					title: '',
					answer: [],
					analyse: '',
					difficulty: 0,
				},
				dynamicLists: [],
				option_name: [],
			};
		},
		onLoad: function (option) {
			this.problem_id = option.problem_id;
			this.problem_type_id = option.problem_type_id;
			this.load_one_problem_detail();
		},
		methods: {
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
			change(e) {
				console.log("e:", e);
				this.baseFormData.title = ''
				this.baseFormData.answer = ''
				this.baseFormData.analyse = ''

			},
			add_option() {
				let temp = this.option_name.length
				this.dynamicLists.push({
					description: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
				})
				this.option_name.push({
					"value": temp,
					"text": this.letter[temp],
				})
			},
			del_option(index) {
				let len_option = this.option_name.length
				this.dynamicLists.splice(index, 1)
				this.option_name.splice(len_option - 1, 1)
			},
			
			async update_choice_problem() {
				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return;
				}
				console.log(uni.getStorageSync('token'))
				var temp_problem_set_id = this.problem_set_id
				console.log(this.baseFormData)
				if (!this.baseFormData.title) {
					myRequest.toast('题目内容不能为空')
					return;
				}
				if (!this.baseFormData.answer) {
					if (this.baseFormData.answer != 0) {
						myRequest.toast('题目答案不能为空')
						return;
					}
				}
				if (this.problem_type_select == 0 || this.problem_type_select == 1) {
					this.dynamicLists.forEach((item) => {
						if (!item.description) {
							myRequest.toast('题目选项不能为空')
							return;
						}
					})
				}
				console.log(this.dynamicLists)

				var data = {
					"analysis": this.baseFormData.analyse,
					"choices": [],
					"description": this.baseFormData.title,
					"is_public": true,
					"id": parseInt(this.problem_id),
				}
				var k=0
				for (var i=0;i<this.dynamicLists.length;i++) {
					if ((i == this.baseFormData.answer[k] && this.problem_type_select == 1) 
						|| (i == this.baseFormData.answer && this.problem_type_select == 0)) {
						data.choices.push({
							"choice": this.option_name[i].text,
							"description": this.dynamicLists[i].description,
							"is_correct": true
						})
						k++;
					} else {
						data.choices.push({
							"choice": this.option_name[i].text,
							"description": this.dynamicLists[i].description,
							"is_correct": false
						})
					}
				}
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request(api.problem_choice_update(), 'PUT', data).then(
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
					}
				)
				
			},
			
			async update_blank_problem() {
				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return;
				}
				console.log(uni.getStorageSync('token'))
				var temp_problem_set_id = this.problem_set_id
				console.log(this.baseFormData)
				if (!this.baseFormData.title) {
					myRequest.toast('题目内容不能为空')
					return;
				}
				if (!this.baseFormData.answer) {
					if (this.baseFormData.answer != 0) {
						myRequest.toast('题目答案不能为空')
						return;
					}
				}
				
				var data = {
					"analysis": this.baseFormData.analyse,
					"answer": this.baseFormData.answer,
					"description": this.baseFormData.title,
					"is_public": true,
					"id": parseInt(this.problem_id),
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request(api.problem_blank_update(), 'PUT', data).then(
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
					}
				)
				
			},
			
			async update_judge_problem() {
				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return;
				}
				console.log(uni.getStorageSync('token'))
				var temp_problem_set_id = this.problem_set_id
				console.log(this.baseFormData)
				if (!this.baseFormData.title) {
					myRequest.toast('题目内容不能为空')
					return;
				}
				if (!this.baseFormData.answer) {
					if (this.baseFormData.answer != 0) {
						myRequest.toast('题目答案不能为空')
						return;
					}
				}
				
				var data = {
					"analysis": this.baseFormData.analyse,
					"description": this.baseFormData.title,
					"is_correct": true,
					"is_public": true,
					"id": parseInt(this.problem_id),
				}
				if (this.baseFormData.answer == 1) {
					data.is_correct = false;
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request(api.problem_judge_update(), 'PUT', data).then(
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
					}
				)
			},
			
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
								
								if (res2.data.problems[0].is_multiple) {
									this.problem_type_select = 1
								} else {
									this.problem_type_select = 0
								}
								this.baseFormData.title = res2.data.problems[0].description
								for (var j=0;j<res2.data.problems[0].choices.length;j++) {
									let temp = this.option_name.length
									this.dynamicLists.push({
										description: res2.data.problems[0].choices[j].description,
										rules: [{
											'required': true,
											errorMessage: '选项必填'
										}],
									})
									this.option_name.push({
										"value": temp,
										"text": this.letter[temp],
									})
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
											this.baseFormData.analyse = res1.data.analysis
											if (this.problem_type_select == 1) {
												for (var k=0;k<answer.length;k++) {
													if (answer[k].is_correct == true) {
														this.baseFormData.answer.push(k);
													}
												}
											} else {
												for (var k=0;k<answer.length;k++) {
													if (answer[k].is_correct == true) {
														this.baseFormData.answer = k;
														break;
													}
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
								
								this.problem_type_select = 3
								this.baseFormData.title = res2.data.problems[0].description
								
								uni.request({
									url: myRequest.interfaceUrl() + api.problem_blank_answer(this.problem_id),
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res1) => {
										console.log(res1)
										if (res1.statusCode == 200) {
											this.baseFormData.answer = res1.data.answer;
											this.baseFormData.analyse = res1.data.analysis;
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
								
								this.problem_type_select = 2
								this.baseFormData.title = res2.data.problems[0].description
								
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
											this.baseFormData.analyse = res1.data.analysis;
											if (answer) {
												this.baseFormData.answer = 0;
											} else {
												this.baseFormData.answer = 1;
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
			
			
			
		}
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

	.problem_content {
		padding: 0 5% 5% 5%;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
		
	}
</style>
