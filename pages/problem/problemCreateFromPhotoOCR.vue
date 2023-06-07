<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar">
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

			<uni-section title="识别结果" type="line" class="select_box">
				<text selectable>{{ocr_result}}</text>
				<view style="margin-top: 15px; margin-bottom: 15px; display: flex; justify-content: space-around;">
					<button type="primary" size="mini"
					 style="background-color: #00aaff;" @click="copyToClipBoard(ocr_result)">复制内容到剪贴板</button>
				</view>
			</uni-section>

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
						<view v-if="baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic"></image>
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
						<view v-if="dynamicLists[index].option_pic !== ''" @click="viewImage(index)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="dynamicLists[index].option_pic"></image>
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
						<view v-if="baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic"></image>
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
						<view v-if="dynamicLists[index].option_pic !== ''" @click="viewImage(index)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="dynamicLists[index].option_pic"></image>
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
						<view v-if="baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic"></image>
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
						<view v-if="baseFormData.title_pic !== ''" @click="viewImage(-1)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.title_pic"></image>
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
						<view v-if="baseFormData.answer_pic !== ''" @click="viewImage(-2)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.answer_pic"></image>
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
						<view v-if="baseFormData.analyse_pic !== ''" @click="viewImage(-3)">
							<image
							style="width: 100%; height: 200px; margin-top: 20px;"
							:src="baseFormData.analyse_pic"></image>
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
  import upload from '../../uni_modules/uview-ui/libs/config/props/upload';
	import { pathToBase64, base64ToPath } from 'image-tools'
	
	export default {
		data() {
			return {
				problem_set_id:1,
				
				problem_difficulty_select: 0,
				
				ocr_result: '',

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
					title_pic: '',
					analyse_pic: '',
					answer_pic: '',
				},
				dynamicLists: [{
					label: 'A',
					description: '',
					option_pic: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}, {
					label: 'B',
					description: '',
					option_pic: '',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}],
				
				temp_url: '',
			};
		},
		computed: {
			photo_path() {
				return this.$store.state.photo_path 
			}
		},
		onLoad: function (option) {
			this.problem_set_id = option.id
			console.log("problem_set_id: "+this.problem_set_id)
		},
		onShow: function() {
			var _this = this
			console.log(this.photo_path)
			pathToBase64(this.photo_path).then( base64 => {
			   //console.log('result 转换为base64：', base64);
				 var data = {
					 image_base64: base64,
					 raw_result: false,
				 }
			    myRequest.request(api.special_picture_ocr(), 'POST', data).then(
			    	function(res) {
			    		console.log(res)
			    		if (res.statusCode == 200) {
			    			_this.ocr_result = res.data.replaceAll("\n","")
			    
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
			}).catch(error => {
			    console.error(error)
			})
			this.$store.commit("set_photo", '')
		},
		methods: {
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
			
			copyToClipBoard(value) {
				uni.setClipboardData({
					data:value,//要被复制的内容
					success:()=>{//复制成功的回调函数
						uni.showToast({//提示
							title:'复制成功'
						})
					}
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
				console.log(this.baseFormData.title_pic)
				if (this.baseFormData.title_pic != '') {
					await this.upload_file(this.baseFormData.title_pic)
					//console.log(this.temp_url)
					this.baseFormData.title += '#'
					this.baseFormData.title += this.temp_url
				}
				if (this.baseFormData.analyse_pic != '') {
					await this.upload_file(this.baseFormData.analyse_pic)
					//console.log(this.temp_url)
					this.baseFormData.analyse += '#'
					this.baseFormData.analyse += this.temp_url
				}
				if (this.baseFormData.answer_pic != '') {
					await this.upload_file(this.baseFormData.answer_pic)
					//console.log(this.temp_url)
					this.baseFormData.answer += '#'
					this.baseFormData.answer += this.temp_url
				}
				for (var i=0;i<this.dynamicLists.length;i++) {
					if (this.dynamicLists[i].option_pic != '') {
						await this.upload_file(this.dynamicLists[i].option_pic)
						this.dynamicLists[i].description += '#'
						this.dynamicLists[i].description += this.temp_url
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
				
				myRequest.request(api.problem_choice_create(), 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request(api.problem_set_add(temp_problem_set_id, res.data.id), 'POST', data).then(
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
					myRequest.toast('题目答案不能为空')
					return;
				}
				
				await this.pic_upload()
				
				var data = {
					"analysis": this.baseFormData.analyse,
					"answer": this.baseFormData.answer,
					"description": this.baseFormData.title,
					"is_public": true,
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request(api.problem_blank_create(), 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request(api.problem_set_add(temp_problem_set_id, res.data.id), 'POST', data).then(
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
				}
				if (this.baseFormData.answer == 1) {
					data.is_correct = false;
				}
				
				console.log(data)
				data = JSON.stringify(data)
				
				myRequest.request(api.problem_judge_create(), 'POST', data).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							
							myRequest.request(api.problem_set_add(temp_problem_set_id, res.data.id), 'POST', data).then(
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
