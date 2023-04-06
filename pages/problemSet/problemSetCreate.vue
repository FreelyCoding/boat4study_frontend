<template>
	<!-- 单体编辑录入界面 -->
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="题库创建" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="problem_content">

			<uni-section title="题库信息" type="line" class="select_box">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label="题库名称" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入题目" />
					</uni-forms-item>
					<uni-forms-item label="详细信息" required >
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入详细信息" />
					</uni-forms-item>
				</uni-forms>
			</uni-section>
			
			<view class="button-group">
				<button class="button" size="mini" type="primary"
					@click="submit()" style="background-color: #00aaff; text-align: center; margin: auto;">创建题库</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
