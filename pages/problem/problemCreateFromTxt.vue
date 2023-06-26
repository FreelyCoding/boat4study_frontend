<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="批量导入" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="problem_content">
			
			<uni-section title="Step1. 学习批量导入模板" type="line" class="select_box">
				<view style="margin: 0 20px 0 20px;">
					<text selectable>{{model_text}}</text>
					<view style="margin-top: 15px; margin-bottom: 15px; display: flex; justify-content: space-around;">
						<button type="primary" size="mini"
						 style="background-color: #00aaff;" @click="copyToClipBoard(model_text)">复制模板到剪贴板</button>
					</view>
				</view>
			</uni-section>
			
			<uni-section title="Step2. 按照模板输入题目文本" type="line" class="select_box">
				<view style="margin: 0 20px 0 20px;">
					<uni-easyinput type="textarea" autoHeight v-model="input_text"
					 placeholder="请输入内容" maxlength="-1"></uni-easyinput>
				</view>
				<view style="margin-top: 15px; margin-bottom: 15px; display: flex; justify-content: space-around;">
					<button type="primary" size="mini"
					 style="background-color: #00aaff;" @click="createProBatch()">一键批量导入</button>
				</view>
			</uni-section>
			
			

		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import list from '../../uni_modules/uview-ui/libs/config/props/list';
	import toast from '../../uni_modules/uview-ui/libs/config/props/toast';
	import api from '@/common/api.js';
  import upload from '../../uni_modules/uview-ui/libs/config/props/upload';
	
	export default {
		data() {
			return {
				problem_set_id: 0,
				input_text: '',
				model_text: "选择题\n"+
					"\n" + 
					"1. 兰伯特可以放置多少块板子（   ）\n"+
					"A. 4\n"+
					"B. 5\n"+
					"C. 6\n"+
					"D. 7\n"+
					"[答案] BC\n"+
					"[解析] 由题意知，兰伯特最多可以放置5块板子，因为第6块板子放置后，第7块板子就会与第1块板子重合。\n"+
					"\n" + 
					"2. 瓦尔基里使用天际俯冲飞行高度是多少米（   ）\n"+
					"A. 100\n"+
					"B. 120\n"+
					"C. 140\n"+
					"D. 180\n"+
					"[答案] C\n"+
					"[解析] 由题意知，瓦尔基里使用天际俯冲飞行高度是140米。\n"+
					"\n" + 
					"判断题\n"+
					"\n" + 
					"1. 由于兰伯特的板子是一样的，所以兰伯特可以放置多少块板子都可以。\n"+
					"[答案] 错误\n"+
					"[解析] 由题意知，兰伯特的板子是不一样的，所以兰伯特最多可以放置5块板子。\n"+
					"\n" + 
					"填空题\n"+
					"\n" + 
					"1. 瓦尔基里使用天际俯冲飞行的速度是每秒（   ）米。\n"+
					"[答案] 7\n"+
					"[解析] 由题意知，瓦尔基里使用天际俯冲飞行的速度是每秒7米。\n"+
					"\n" + 
					"2. 瓦尔基里使用天际俯冲飞行的时间是（   ）秒。\n"+
					"[答案] 20\n"+
					"[解析] 由题意知，瓦尔基里使用天际俯冲飞行的时间是20秒。"
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
			
			createProBatch() {
				var _this = this
				var data = String.raw`${this.input_text}`
				console.log(data)
				myRequest.request('/problem/batch?problem_set_id='+this.problem_set_id, 'POST', data).then(
					function(res2) {
						console.log(res2)
						if (res2.statusCode == 200) {
							myRequest.toast('试题添加成功', 1500, true)
							_this.$store.commit('set_pro_id_batch', res2.data.problems)
							uni.navigateTo({
								url: "/pages/problem/problemCreateBatch?id="+_this.problem_set_id
							})
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
			},
			
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
		padding: 10px 10px 30px 10px;
	}

	
</style>
