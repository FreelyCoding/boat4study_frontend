<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="错题练习" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="contain">

			<view class="page_nav">
				<uni-row>
					<uni-col :span="6">
						<uni-tag text="上一题" type="primary" class="tag-unfav"
						 custom-style="font-size: 16px;background-color: #e8e8e8;color: #000000;border: 0px;"
						@click="pre_pro()"/>
					</uni-col>
					<uni-col :span="12" align="center">
						{{cur_page}}/{{proDetail.wrong_problem_count}}
					</uni-col>
					<uni-col :span="6" align="end" >
						<view style="text-align: right;">
							<uni-tag text="下一题" type="primary" class="tag-unfav"
							 custom-style="font-size: 16px;background-color: #e8e8e8;color: #000000;border: 0px;"
							@click="next_pro()"/>
						</view>
					</uni-col>
				</uni-row>
			</view>

			<view class="problem_title" align="start">
				<uni-row>
					<uni-col :span="12">
						<uni-tag text="单选题" type="primary" class="tag-pro_type"
							v-if="problem[cur_page-1].type===0 && problem[cur_page-1].is_multiple === false" />
						<uni-tag text="多选题" type="primary" class="tag-pro_type"
							v-if="problem[cur_page-1].type===0 && problem[cur_page-1].is_multiple === true" />
						<uni-tag text="填空题" type="primary" class="tag-pro_type"
							v-if="problem[cur_page-1].type===1" />
						<uni-tag text="判断题" type="primary" class="tag-pro_type"
							v-if="problem[cur_page-1].type===2" />
					</uni-col>
					<uni-col :span="12" align="end" >
						<view style="text-align: right;">
							<uni-tag text="收藏" type="primary" class="tag-unfav"
							 custom-style="font-size: 16px;background-color: #e8e8e8;color: #000000;border: 0px;"
							@click="fav_pro(cur_page-1)"
								v-if="!problem[cur_page-1].favorite" />
							<uni-tag text="已收藏" type="primary" class="tag-fav" 
							 custom-style="background-color: #f9ae3d;font-size: 16px;border: 0px;"
							@click="unfav_pro(cur_page-1)"
								v-if="problem[cur_page-1].favorite" />
						</view>
					</uni-col>
				</uni-row>
			</view>

			<view class="problem_content_exam">
				<p>{{problem[cur_page-1].title}}</p>
				<view v-if="problem[cur_page-1].title_pic != ''">
					<image style="width: 100%; height: 200px; margin-top: 20px;" 
					:src="myRequest.imageUrl() + problem[cur_page-1].title_pic"></image>
				</view>
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
										<view v-if="problem[cur_page-1].options[index].option_pic != ''">
											<image style="width: 80%; height: 150px; margin-top: 20px;"
											:src="myRequest.imageUrl() + problem[cur_page-1].options[index].option_pic"></image>
										</view>
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
										<view v-if="problem[cur_page-1].options[index].option_pic != ''">
											<image style="width: 80%; height: 150px; margin-top: 20px;"
											:src="myRequest.imageUrl() + problem[cur_page-1].options[index].option_pic"></image>
										</view>
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
					<view v-if="problem[cur_page-1].answer_pic != ''">
						<image style="width: 100%; height: 200px; margin-top: 20px;"
						:src="myRequest.imageUrl() + problem[cur_page-1].answer_pic"></image>
					</view>
				</view>
				<view class="problem_answer_box_title" v-if="problem[cur_page-1].type === 1">
					答案自查
				</view>
				<view class="problem_answer_box" v-if="problem[cur_page-1].type === 1">
					<view v-for="(item, index) in problem[cur_page-1].options" :key="index">
						<view class="option_item" :class="{'selected_option_item':problem[cur_page-1].options[index].selected==1,
							 'wrong_option_item':problem[cur_page-1].options[index].selected==2,
							 'right_option_item':problem[cur_page-1].options[index].selected==3}" @click="self_check_blank_answer(index)">
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
				<view class="problem_answer_box_title">
					解析
				</view>
				<view class="problem_answer_box">
					<p>{{problem[cur_page-1].analysis}}</p>
					<view v-if="problem[cur_page-1].analysis_pic != ''">
						<image style="width: 100%; height: 200px; margin-top: 20px;"
						:src="myRequest.imageUrl() + problem[cur_page-1].analysis_pic"></image>
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
	import api from '@/common/api.js';
		
	export default {
		data() {
			return {
				proDetail: {
					user_id: -1,
					title: "",
					created_at: '',
					ownerName: "",
					ownerAvatar: "",
					totalNum: 0,
					descrip: '',
					is_favorite: false,
					wrong_problem_count: 0,
					fav_problem_count: 0,
				},
				
				problem_set_id: 0,
				problem_id_list:[],
				cur_page: 1,

				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				problem: [],
				page_size: 10,
				loaded_num: 0,
			}
		},
		watch: {
				cur_page(new_page, old_page) {
					if (new_page > this.problem.length) {
						this.load_one_problem_detail(new_page - 1)
					}
					if (this.proDetail.totalNum > this.problem_id_list.length) {
						if (new_page > this.problem_id_list.length-2) {
							this.load_new_page(0)
						}
					}
				}
		},
		onLoad: function(option) {
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			var _this = this
			
			this.on_load()
			
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
			
			fav_pro(index) {
				myRequest.request(api.problem_favorite(this.problem_id_list[index].id), 'POST', {}, null, null, true).then(
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
				this.problem[index].favorite = true;
			},
			unfav_pro(index) {
				myRequest.request(api.problem_unfavorite(this.problem_id_list[index].id), 'DELETE', {}, null, null, true).then(
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
				this.problem[index].favorite = false;
			},
			
			async on_load() {
				await this.get_proSet_info()
				await this.load_new_page(1)
			},
			
			next_pro() {
				if (this.cur_page < this.proDetail.totalNum) {
					this.cur_page++;
				}
			},
			pre_pro() {
				if (this.cur_page > 1) {
					this.cur_page--;
				}
			},
			
			get_proSet_info() {
				uni.request({
					url: myRequest.interfaceUrl() + '/problem_set/all?id=' + this.problem_set_id,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
				
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.proDetail.title = res.data.problem_set[0].name
							this.proDetail.created_at = res.data.problem_set[0].created_at.slice(0, 10)
							this.proDetail.totalNum = res.data.problem_set[0].problem_count
							this.proDetail.descrip = res.data.problem_set[0].description
							this.proDetail.is_favorite = res.data.problem_set[0].is_favorite
							this.proDetail.user_id = res.data.problem_set[0].user_id
							console.log(this.proDetail)
							uni.request({
								url: myRequest.interfaceUrl() +
									`/user/info/${res.data.problem_set[0].user_id}`,
								method: 'GET',
								header: {
									'X-Token': myRequest.getToken()
								},
				
								success: (res2) => {
									console.log(res2)
									if (res2.statusCode == 200) {
										this.proDetail.ownerName = res2.data.nick_name
										this.proDetail.ownerAvatar = res2.data.avatar_path
									} else if (res2.statusCode == 401) {
										myRequest.redirectToLogin()
									} else {
										myRequest.toast()
									}
								},
				
								fail: (res2) => {
									console.log(res2)
									myRequest.toast()
								},
							})
				
						} else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						} else {
							myRequest.toast()
						}
					},
				
					fail: (res) => {
						console.log(res)
						myRequest.toast()
					}
				})
				
				uni.request({
					url: myRequest.interfaceUrl() +
						'/problem_set/statistic/wrong_count?id=' + this.problem_set_id,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
								
					success: (res2) => {
						console.log(res2)
						if (res2.statusCode == 200) {
							this.proDetail.wrong_problem_count = res2.data
						} else if (res2.statusCode == 401) {
							myRequest.redirectToLogin()
						} else {
							myRequest.toast()
						}
					},
								
					fail: (res2) => {
						console.log(res2)
						myRequest.toast()
					},
				})
			},
			
			shuffle(arr) {
					var len = arr.length;
					for (var i = 0; i < len - 1; i++) {
							var index = parseInt(Math.random() * (len - i));
							var temp = arr[index];
							arr[index] = arr[len - i - 1];
							arr[len - i - 1] = temp;
					}
					return arr;
			},
			
			load_new_page(flag) {
				uni.request({
					url: myRequest.interfaceUrl() +
					 api.problem_set_all_problem({id:this.problem_set_id,is_wrong:true,
					 limit:this.page_size,offset:this.loaded_num}),
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res1) => {
						//console.log(res1)
						if (res1.statusCode == 200) {
							this.loaded_num += this.page_size
							this.problem_id_list = this.problem_id_list.concat(res1.data.problems)
							if (flag == 1) {
								this.load_one_problem_detail(0)
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
						//console.log(res1)
						myRequest.toast()
					}
				})
			},
			
			load_one_problem_detail(index) {
				let last_index = this.problem.length
				if (this.problem_id_list[index].problem_type_id == 0) {
					uni.request({
						url: myRequest.interfaceUrl() + api.problem_choice_all({id:this.problem_id_list[index].id}),
						method: 'GET',
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res2) => {
							//console.log(res2)
							if (res2.statusCode == 200) {
								this.problem.push({
									type: 0,
									favorite: res2.data.problems[0].is_favorite,
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
									this.problem[last_index].title_pic = res2.data.problems[0].description.split("#")[1]
								}
								for (var j=0;j<res2.data.problems[0].choices.length;j++) {
									this.problem[this.problem.length-1].options.push({
										name: res2.data.problems[0].choices[j].description.split("#")[0],
										selected: 0,
										option_pic: '',
									})
									if (res2.data.problems[0].choices[j].description.split("#").length > 1) {
										this.problem[last_index].options[j].option_pic = res2.data.problems[0].choices[j].description.split("#")[1]
									}
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
									favorite: res2.data.problems[0].is_favorite,
									is_multiple: false,
									done: 0,
									right: 0,
									title: res2.data.problems[0].description.split("#")[0],
									title_pic: '',
									options: [
										{
											name: "我的答案正确",
											selected: 0,
										},
										{
											name: "我的答案错误",
											selected: 0,
										}
									],
									my_answer: '',
									check_answer: 0,
									correct_answer: '',
									answer_pic: '',
									analysis: '',
									analysis_pic: '',
									answer_show: 0,
								})
								if (res2.data.problems[0].description.split("#").length > 1) {
									this.problem[last_index].title_pic = res2.data.problems[0].description.split("#")[1]
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
									favorite: res2.data.problems[0].is_favorite,
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
									this.problem[last_index].title_pic = res2.data.problems[0].description.split("#")[1]
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
				}
			},
			record_wrong(i) {
				uni.request({
					url: myRequest.interfaceUrl() + api.wrong_record_create(this.problem_id_list[i].id),
					method: 'POST',
					header: {
						'X-Token': myRequest.getToken()
					},
					success: (res1) => {
						console.log(res1)
						if (res1.statusCode == 200) {
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
							this.problem[pr_i].analysis = res1.data.analysis.split("#")[0]
							if (res1.data.analysis.split("#").length > 1) {
								this.problem[pr_i].analysis_pic = res1.data.analysis.split("#")[1]
							}
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
										this.record_wrong(pr_i);
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
							var if_right = true;
							this.problem[pr_i].analysis = res1.data.analysis.split("#")[0]
							if (res1.data.analysis.split("#").length > 1) {
								this.problem[pr_i].analysis_pic = res1.data.analysis.split("#")[1]
							}
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
										if_right = false;
									} else if (answer[k].is_correct == true && this.problem[pr_i].options[k].selected != 1) {
										this.problem[pr_i].options[k].selected = 3;
										if_right = false;
									}
								}
								if (!if_right) {
									this.record_wrong(pr_i);
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
								this.problem[pr_i].correct_answer = res1.data.answer.split("#")[0]
								if (res1.data.answer.split("#").length > 1) {
									this.problem[pr_i].answer_pic = res1.data.answer.split("#")[1]
								}
								this.problem[pr_i].analysis = res1.data.analysis.split("#")[0]
								if (res1.data.analysis.split("#").length > 1) {
									this.problem[pr_i].analysis_pic = res1.data.analysis.split("#")[1]
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
			self_check_blank_answer(index) {
				let pr_i = this.cur_page - 1
				console.log("!!!!")
				if (this.problem[pr_i].check_answer == 0) {
					this.problem[pr_i].check_answer = 1;
					if (index == 1) {
						this.problem[pr_i].options[1].selected = 2;
						this.record_wrong(pr_i)
					} else if (index == 0) {
						this.problem[pr_i].options[0].selected = 3;
					}
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
							var answer = res1.data.is_correct;
							this.problem[pr_i].analysis = res1.data.analysis.split("#")[0]
							if (res1.data.analysis.split("#").length > 1) {
								this.problem[pr_i].analysis_pic = res1.data.analysis.split("#")[1]
							}
							if (res1.statusCode == 200) {
								if (answer) {
									this.problem[pr_i].options[0].selected = 3;
									this.problem[pr_i].correct_answer = "正确";
									if (index == 1) {
										this.problem[pr_i].options[1].selected = 2;
										this.record_wrong(pr_i);
									}
								} else {
									this.problem[pr_i].options[1].selected = 3;
									this.problem[pr_i].correct_answer = "错误";
									if (index == 0) {
										this.problem[pr_i].options[0].selected = 2;
										this.record_wrong(pr_i);
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
	
	.tag-pro_type {
		background-color: #00aaff;
		border: 0px;
		font-size: 16px;
	}
	.tag-unfav {
		font-size: 16px;
		background-color: #e8e8e8;
		color: #000000;
		border: 0px;
	}
	.tag-fav {
		background-color: #f9ae3d;
		font-size: 16px;
		border: 0px;
	}

	.page_nav {
		margin-bottom: 30px;
	}

	.problem_title {
		margin-bottom: 20px;
		font-size: 20px;
	}

	.problem_content_exam {
		font-size: 16px;
		margin-bottom: 30px;
		line-height: 30px;
	}

	.option_item {
		border-radius: 5px;
		//height: 40px;
		padding-top: 8px;
		padding-bottom: 8px;
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
		width: 270px;
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
		width: 100px;
		justify-content: center;
		text-align: center;
		height: 25px;
		border-radius: 10px;
	}
	.problem_answer_box {
		font-size: 16px;
	}
</style>
