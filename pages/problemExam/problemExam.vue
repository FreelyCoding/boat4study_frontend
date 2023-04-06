<template>
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="顺序练习" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="contain">

			<view class="page_nav">
				<uni-pagination :show-icon="true" :total="problem.length" pageSize="1" v-model="cur_page" @change="load_next_pro()"/>
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
			<view v-if="problem[cur_page-1].type === 1 && problem[cur_page-1].is_multiple === true">
				<view class="option_group">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="select_multi_option(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box">{{letter[index]}}</view>
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
					<uni-easyinput class="block_answer_box" v-model="baseFormData.analyse" placeholder="请输入答案" />
				</view>
				<button class="button" size="mini" type="primary" @click="submit_block_answer()">提交</button>
			</view>
			
			<!-- 判断题 -->
			<view v-if="problem[cur_page-1].type === 2">
				<view class="option_group">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="select_single_option(index)">
							<u-row>
								<u-col span="1">
									<view class="option_letter_box">{{letter[index]}}</view>
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
			
			<view>
				<div style="height: 30px;"></div>
			</view>
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
		
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
		onLoad: function(option) {
			if (!myRequest.isLogin()) {
				myRequest.toast('请先登录')
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}
			
			console.log(uni.getStorageSync('token'))
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			var _this = this
			
			uni.request({
				url: myRequest.interfaceUrl() + '/problem_set/'+this.problem_set_id+'/all_problem?is_favorite='+0,
				method: 'GET',
				header: {
					'X-Token': myRequest.getToken()
				},
				
				success: (res1) => {
					console.log(res1)
					if (res1.statusCode == 200) {
						this.problem_id_list = JSON.parse(JSON.stringify(res1.data))
						
						for (var i=0;i<this.problem_id_list.length;i++) {
							if (this.problem_id_list[i].problem_type_id == 0) {

								uni.request({
									url: myRequest.interfaceUrl() + '/problem/choice/'+this.problem_id_list[i].problem_id,
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res2) => {
										console.log(res2)
										if (res2.statusCode == 200) {
											this.problem.push({
												type: 0,
												is_multiple: res2.data.is_multiple,
												done: 0,
												right: 0,
												title: res2.data.description,
												options: [],
											})
											for (var j=0;j<res2.data.choices.length;j++) {
												this.problem[this.problem.length-1].options.push({
													name: res2.data.choices[j].description,
													selected: 0,
												})
											}
											console.log(this.problem)
										
										}
										else if (res2.statusCode == 401) {
											if (myRequest.isLogin()) {
												myRequest.toast('请重新登录')
											}
											else {
												myRequest.toast('请登录')
											}
											uni.navigateTo({
												url: '/pages/login/login'
											})
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
							
						}

					}
					else if (res1.statusCode == 401) {
						if (myRequest.isLogin()) {
							myRequest.toast('请重新登录')
						}
						else {
							myRequest.toast('请登录')
						}
						uni.navigateTo({
							url: '/pages/login/login'
						})
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
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			select_single_option(i) {
				let pr_i = this.cur_page - 1
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].options.forEach((item) => {
						item.selected = 0;
					})
					this.problem[pr_i].options[i].selected = 2;
					
					uni.request({
						url: myRequest.interfaceUrl() + '/problem/choice/answer/'+this.problem_id_list[i].problem_id,
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						
						success: (res1) => {
							console.log("!!!"+this.problem_id_list[i].problem_id)
							console.log(res1)
							if (res1.statusCode == 200) {
							
							
							
							}
							else if (res1.statusCode == 401) {
								if (myRequest.isLogin()) {
									myRequest.toast('请重新登录')
								}
								else {
									myRequest.toast('请登录')
								}
								uni.navigateTo({
									url: '/pages/login/login'
								})
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
					
					this.problem[pr_i].done = 1;
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
				let index = 0
				let answer_index = 0
				if (this.problem[pr_i].done == 0) {
					this.problem[pr_i].done = 1;
					this.problem[pr_i].options.forEach((item) => {
						if (item.selected != 0) {
							item.selected = 2
						}
						if(answer_index < this.problem[pr_i].answer.length && this.problem[pr_i].answer[answer_index] == index) {
							item.selected = 3
							answer_index = answer_index + 1
						}
						index = index + 1
					})
				}
			}
		},
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
		//background-color: #ebebeb;
	}

	.selected_option_item {
		background-color: #55aaff;
	}

	.wrong_option_item {
		background-color: #c30421;
	}

	.right_option_item {
		background-color: #0ca006;
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
		background-color: #c3c3c3;
	}
	.selected_option_letter_box {
		background-color: #55aaff;
		color: #ffffff;
	}
	.wrong_option_letter_box {
		background-color: #c30421;
		color: #ffffff;
	}
	.right_option_letter_box {
		background-color: #0ca006;
		color: #ffffff;
	}

	.option_item_content {
		font-size: 16px;
		margin-left: 35px;
	}

	.selected_option_item_content {
		margin-left: 35px;
		color: #ffffff;
	}

	.option_group {
		margin-bottom: 50px;
	}
	
	.block_answer_box {
		margin: 20px 0 20px 0;
	}
</style>
