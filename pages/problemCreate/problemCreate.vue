<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="单题编辑录入" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
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
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入题目" />
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入选项" />
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
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入题目" />
					</uni-forms-item>
					<uni-forms-item label="选项" required style="margin-bottom: 0ch;"></uni-forms-item>
				</uni-forms>
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="left">
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="letter[index]">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入选项" />
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
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入题目" />
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
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入题目" />
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
				<button class="button" size="mini" type="primary"
					@click="submit()" style="background-color: #00aaff; text-align: center; margin: auto;">添加试题</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				// 基础表单数据
				baseFormData: {
					title: '',
					answer: '',
					analyse: '',
					difficulty: 0,
				},
				dynamicFormData: {
					domains: {}
				},
				dynamicLists: [{
					label: '选项',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}, {
					label: '选项',
					rules: [{
						'required': true,
						errorMessage: '选项必填'
					}],
					id: Date.now()
				}],
			};
		},
		methods: {
			change(e) {
				console.log("e:", e);
				this.baseFormData.title = ''
				this.baseFormData.answer = ''
				this.baseFormData.analyse = ''

			},
			add_option() {
				let temp = this.option_name.length
				this.dynamicLists.push({
					label: '选项',
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
