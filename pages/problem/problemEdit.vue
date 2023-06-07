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
					:clear="false" ></uni-data-select>
			</uni-section>
			
			<uni-section v-if="problem_type_select === 0" title="试题内容" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题目" required>
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
							<image class="item" @click="chooseImage(-1)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.title_pic && baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.title_pic" v-if="baseFormData.title_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic" v-else></image>
							<view @click.stop="DelImg(-1)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="index" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicLists[index].description" placeholder="请输入选项" />
							<button class="button" v-if="index>=2" size="mini" type="warn"
								@click="del_option(item.id)">删除</button>
							<image class="item" @click="chooseImage(index)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="dynamicLists[index].option_pic && dynamicLists[index].option_pic !== ''" @click="viewImage(index)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + dynamicLists[index].option_pic" v-if="dynamicLists[index].option_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="dynamicLists[index].option_pic" v-else></image>
							<view @click.stop="DelImg(index)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
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
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
							<image class="item" @click="chooseImage(-1)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.title_pic && baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.title_pic" v-if="baseFormData.title_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic" v-else></image>
							<view @click.stop="DelImg(-1)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicLists[index].description" placeholder="请输入选项" />
							<button class="button" v-if="index>=2" size="mini" type="warn"
								@click="del_option(item.id)">删除</button>
							<image class="item" @click="chooseImage(index)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="dynamicLists[index].option_pic && dynamicLists[index].option_pic !== ''" @click="viewImage(index)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + dynamicLists[index].option_pic" v-if="dynamicLists[index].option_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="dynamicLists[index].option_pic" v-else></image>
							<view @click.stop="DelImg(index)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
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
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
							<image class="item" @click="chooseImage(-1)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.title_pic && baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.title_pic" v-if="baseFormData.title_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic" v-else></image>
							<view @click.stop="DelImg(-1)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
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
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.title" placeholder="请输入题目" />
							<image class="item" @click="chooseImage(-1)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.title_pic && baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.title_pic" v-if="baseFormData.title_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic" v-else></image>
							<view @click.stop="DelImg(-1)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
					</uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="答案" required>
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.answer" placeholder="请输入答案" />
							<image class="item" @click="chooseImage(-2)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.answer_pic && baseFormData.answer_pic !== ''" @click="viewImage(-2)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.answer_pic" v-if="baseFormData.answer_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.answer_pic" v-else></image>
							<view @click.stop="DelImg(-2)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
					</uni-forms-item>
				</uni-forms>
			</uni-section>
			
			<uni-section title="试题分析" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="解析">
						<view class="form-item">
							<uni-easyinput v-model="baseFormData.analyse" placeholder="请输入解析" />
							<image class="item" @click="chooseImage(-3)" src="../../static/pic/problem/tupian.svg"
							 style="height: 20px; width: 20px; margin-left: 10px;"></image>
						</view>
						<view v-if="baseFormData.analyse_pic && baseFormData.analyse_pic !== ''" @click="viewImage(-3)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="myRequest.imageUrl() + baseFormData.analyse_pic" v-if="baseFormData.analyse_pic.indexOf('public') != -1"></image>
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.analyse_pic" v-else></image>
							<view @click.stop="DelImg(-3)"
								style="position: absolute; top:60px; right:5px; background-color:aliceblue;">
								<uni-icons type="closeempty" class="close" size="20"></uni-icons>
							</view>
						</view>
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
						确认编辑
					</button>
				</view>
				<view v-if="problem_type_select === 2">
					<button class="button" size="mini" type="primary"
						@click="update_judge_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						确认编辑
					</button>
				</view>
				<view v-if="problem_type_select === 3">
					<button class="button" size="mini" type="primary"
						@click="update_blank_problem()" 
						style="background-color: #00aaff; text-align: center; margin: auto;">
						确认编辑
					</button>
				</view>
			</view>
			
			<view>
				<!-- 分享示例 -->
				<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
					
				</uni-popup>
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
				problem_set_id:1,
				
				problem_difficulty_select: 0,
				
				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				option_name: [],
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
					title_pic: '',
					analyse_pic: '',
					answer_pic: '',
				},
				dynamicLists: [],
				
				temp_url: '',
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
			DelImg(index) {
				if (index < 0) {
					if (index == -1) {
						this.baseFormData.title_pic = '';
					} else if (index == -2) {
						this.baseFormData.answer_pic = '';
					} else if (index == -3) {
						this.baseFormData.analyse_pic = '';
					}
				} else {
					this.dynamicLists[index].option_pic = '';
				}
			},
			viewImage(index) {
				let imgurl = []
				if (index < 0) {
					if (index == -1) {
						imgurl.push(this.baseFormData.title_pic)
					} else if (index == -2) {
						imgurl.push(this.baseFormData.answer_pic)
					} else if (index == -3) {
						imgurl.push(this.baseFormData.analyse_pic)
					}
				} else {
					imgurl.push(this.dynamicLists[index].option_pic)
				}
				uni.previewImage({
					urls: imgurl,
					current: imgurl[0],
				})
			},
			chooseImage(index) {
				uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res)=> {
							console.log(res)
							if (index < 0) {
								if (index == -1) {
									this.baseFormData.title_pic = res.tempFilePaths[0]
								} else if (index == -2) { 
									this.baseFormData.answer_pic = res.tempFilePaths[0]
								} else if (index == -3) {
									this.baseFormData.analyse_pic = res.tempFilePaths[0]
								}
							} else {
								this.dynamicLists[index].option_pic = res.tempFilePaths[0]
							}
							
							/*
							console.log(this.newPath)
							this.$store.commit('set_photo', this.newPath)
							uni.navigateBack({
									delta: 1
							});*/
						}
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
					label: this.letter[temp],
					description: '',
					option_pic: '',
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
			
			async pic_upload() {
				console.log(this.baseFormData.analyse_pic)
				if (this.baseFormData.title_pic && this.baseFormData.title_pic != '') {
					if (this.baseFormData.title_pic.indexOf('/public/') == -1) {
						await this.upload_file(this.baseFormData.title_pic)
						this.baseFormData.title += '#'
						this.baseFormData.title += this.temp_url
					} else {
						this.baseFormData.title += '#'
						this.baseFormData.title += this.baseFormData.title_pic
					}
					//console.log(this.temp_url)
					
				}
				if (this.baseFormData.analyse_pic && this.baseFormData.analyse_pic != '') {
					if (this.baseFormData.analyse_pic.indexOf('/public/') == -1) {
						await this.upload_file(this.baseFormData.analyse_pic)
						this.baseFormData.analyse += '#'
						this.baseFormData.analyse += this.temp_url
					} else {
						this.baseFormData.analyse += '#'
						this.baseFormData.analyse += this.baseFormData.analyse_pic
					}
					//console.log(this.temp_url)
					
				}
				if (this.baseFormData.answer_pic && this.baseFormData.answer_pic != '') {
					if (this.baseFormData.answer_pic.indexOf('/public/') == -1) {
						await this.upload_file(this.baseFormData.answer_pic)
						this.baseFormData.answer += '#'
						this.baseFormData.answer += this.temp_url
					} else {
						this.baseFormData.answer += '#'
						this.baseFormData.answer += this.answer_pic
					}
					//console.log(this.temp_url)
					
				}
				for (var i=0;i<this.dynamicLists.length;i++) {
					if (this.dynamicLists[i].option_pic && this.dynamicLists[i].option_pic != '') {
						if (this.dynamicLists[i].option_pic.indexOf('/public/') == -1) {
							await this.upload_file(this.dynamicLists[i].option_pic)
							this.dynamicLists[i].description += '#'
							this.dynamicLists[i].description += this.temp_url
						} else {
							this.dynamicLists[i].description += '#'
							this.dynamicLists[i].description += this.dynamicLists[i].option_pic
						}
						
					}
				}
			},
			
			async upload_file(file_path) {
				let that = this;
				await myRequest.uploadFile('/upload/public', file_path, 'file', {}).then(
					function(res) {
						//console.log(res)
						if (res.statusCode == 200) {
							that.temp_url = JSON.parse(res.data).url;
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
			
			myIsNaN(value) {
			   return (typeof value === 'number' && !isNaN(value));
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
				if (!this.myIsNaN(this.baseFormData.answer)) {
					if (this.baseFormData.answer[0] == undefined) {
						myRequest.toast('题目答案不能为空')
						return;
					}
				}
				if (this.problem_type_select == 0 || this.problem_type_select == 1) {
					for (var i=0;i<this.dynamicLists.length;i++) {
						if (this.dynamicLists[i].description == '' && this.dynamicLists[i].option_pic == '') {
							myRequest.toast('题目选项不能为空')
							return;
						}
					}
				}
				
				await this.pic_upload()
			
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
							"choice": this.letter[i],
							"description": this.dynamicLists[i].description,
							"is_correct": true
						})
						k++;
					} else {
						data.choices.push({
							"choice": this.letter[i],
							"description": this.dynamicLists[i].description,
							"is_correct": false
						})
					}
				}
				console.log(data)
				data = JSON.stringify(data)
				
				var _this = this
				myRequest.request(api.problem_choice_update(), 'PUT', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							myRequest.toast('试题修改成功', 1500, true)
							_this.back()
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
					myRequest.toast('题目答案不能为空')
					return;
				}
				
				await this.pic_upload()
				
				var data = {
					"analysis": this.baseFormData.analyse,
					"answer": this.baseFormData.answer,
					"description": this.baseFormData.title,
					"is_public": true,
					"id": parseInt(this.problem_id),
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				var _this = this
				myRequest.request(api.problem_blank_update(), 'PUT', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							myRequest.toast('试题修改成功', 1500, true)
							_this.back()
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
				if (!this.myIsNaN(this.baseFormData.answer)) {
					myRequest.toast('题目答案不能为空')
					return;
				}
				
				await this.pic_upload()
				
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
				
				var _this = this
				myRequest.request(api.problem_judge_update(), 'PUT', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							myRequest.toast('试题修改成功', 1500, true)
							_this.back()
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
								this.baseFormData.title = res2.data.problems[0].description.split("#")[0]
								this.baseFormData.title_pic = res2.data.problems[0].description.split("#")[1]
								
								for (var j=0;j<res2.data.problems[0].choices.length;j++) {
									let temp = this.option_name.length
									this.dynamicLists.push({
										description: res2.data.problems[0].choices[j].description.split("#")[0],
										option_pic: res2.data.problems[0].choices[j].description.split("#")[1],
										rules: [{
											'required': true,
											errorMessage: '选项必填',
										}],
										id: Date.now()
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
											this.baseFormData.analyse = res1.data.analysis.split("#")[0]
											this.baseFormData.analyse_pic = res1.data.analysis.split("#")[1]
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
								this.baseFormData.title = res2.data.problems[0].description.split("#")[0]
								this.baseFormData.title_pic = res2.data.problems[0].description.split("#")[1]
								
								uni.request({
									url: myRequest.interfaceUrl() + api.problem_blank_answer(this.problem_id),
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res1) => {
										console.log(res1)
										if (res1.statusCode == 200) {
											this.baseFormData.answer = res1.data.answer.split("#")[0];
											this.baseFormData.answer_pic = res1.data.answer.split("#")[1];
											this.baseFormData.analyse = res1.data.analysis.split("#")[0]
											this.baseFormData.analyse_pic = res1.data.analysis.split("#")[1]
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
								this.baseFormData.title = res2.data.problems[0].description.split("#")[0]
								this.baseFormData.title_pic = res2.data.problems[0].description.split("#")[1]
								
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
											this.baseFormData.analyse = res1.data.analysis.split("#")[0]
											this.baseFormData.analyse_pic = res1.data.analysis.split("#")[1]
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
