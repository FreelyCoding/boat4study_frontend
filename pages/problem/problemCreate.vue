<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="单题编辑录入" background-color="#00aaff" color="#FFFFFF" status-bar="true">
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
					:clear="false"></uni-data-select>
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
								@click="del_option(item.id)">删除</button>
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
								@click="del_option(item.id)">删除</button>
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
						@click="create_choice_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						添加试题
					</button>
				</view>
				<view v-if="problem_type_select === 2">
					<button class="button" size="mini" type="primary"
						@click="create_judge_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						添加试题
					</button>
				</view>
				<view v-if="problem_type_select === 3">
					<button class="button" size="mini" type="primary"
						@click="create_blank_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						添加试题
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
	
	export default {
		data() {
			return {
				problem_set_id:1,
				
				problem_difficulty_select: 0,

				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				option_name: [{
						"value": 0,
						"text": "A"
					},
					{
						"value": 1,
						"text": "B",
					},
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
					answer: '',
					analyse: '',
					difficulty: 0,
				},
				dynamicLists: [{
					label: 'A',
					description: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}, {
					label: 'B',
					description: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}],
			};
		},
		onLoad: function (option) {
			this.problem_set_id = option.id
			console.log("problem_set_id: "+this.problem_set_id)
		},
		methods: {
			back() {
				uni.navigateBack({
				    delta: 1
				});
				/*
				uni.navigateTo({
					url: "/pages/problemSet/problemSetDetail?id="+this.problem_set_id
				})*/
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
					label: this.letter[temp],
					description: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				})
				this.option_name.push({
					"value": temp,
					"text": this.letter[temp],
				})
			},
			del_option(id) {
				let len_option = this.option_name.length
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
				this.option_name.splice(len_option - 1, 1)
			},
			async create_choice_problem() {
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
					"choices": [],
					"description": this.baseFormData.title,
					"is_public": true,
				}
				var k=0
				for (var i=0;i<this.dynamicLists.length;i++) {
					if ((i == this.baseFormData.answer[k] && this.problem_type_select == 1) 
						|| (i == this.baseFormData.answer && this.problem_type_select == 0)) {
						data.choices.push({
							"choice": this.dynamicLists[i].label,
							"description": this.dynamicLists[i].description,
							"is_correct": true
						})
						k++;
					} else {
						data.choices.push({
							"choice": this.dynamicLists[i].label,
							"description": this.dynamicLists[i].description,
							"is_correct": false
						})
					}
				}
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request('/problem/choice/create', 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request('/problem_set/'+temp_problem_set_id+'/add?problem_id='+res.data.id, 'POST', data).then(
								function(res2) {
									console.log(res2)
									if (res2.statusCode == 200) {
										myRequest.toast('试题添加成功', 1500, true)
										setTimeout(() => {
											uni.hideToast();
											//关闭提示后跳转
											uni.redirectTo({
												url: '/pages/problem/problemCreate?id='+temp_problem_set_id
											});
										}, 1000)
									} else if (res2.statusCode == 401) {
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
			
			async create_blank_problem() {
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
					"answer": this.baseFormData.answer,
					"description": this.baseFormData.title,
					"is_public": true,
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request('/problem/blank/create', 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request('/problem_set/'+temp_problem_set_id+'/add?problem_id='+res.data.id, 'POST', data).then(
								function(res2) {
									console.log(res2)
									if (res2.statusCode == 200) {
										myRequest.toast('试题添加成功', 1500, true)
										setTimeout(() => {
											uni.hideToast();
											//关闭提示后跳转
											uni.redirectTo({
												url: '/pages/problem/problemCreate?id='+temp_problem_set_id
											});
										}, 1000)
									} else if (res2.statusCode == 401) {
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
			
			async create_judge_problem() {
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
					"description": this.baseFormData.title,
					"is_correct": true,
					"is_public": true,
				}
				if (this.baseFormData.answer == 1) {
					data.is_correct = false;
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request('/problem/judge/create', 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request('/problem_set/'+temp_problem_set_id+'/add?problem_id='+res.data.id, 'POST', data).then(
								function(res2) {
									console.log(res2)
									if (res2.statusCode == 200) {
										myRequest.toast('试题添加成功', 1500, true)
										setTimeout(() => {
											uni.hideToast();
											//关闭提示后跳转
											uni.redirectTo({
												url: '/pages/problem/problemCreate?id='+temp_problem_set_id
											});
										}, 1000)
									} else if (res2.statusCode == 401) {
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
			}
		}
	};
</script>

<style lang="scss">
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
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
