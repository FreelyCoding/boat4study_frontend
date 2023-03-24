<template>
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="做题" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="contain">

			<view class="page_nav">
				<uni-pagination :show-icon="true" :total="problem.length" pageSize="1" v-model="cur_page" />
			</view>

			<view class="problem_title">
				<uni-tag text="单选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===0" />
				<uni-tag text="多选题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===1" />
				<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===2" />
				<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
					v-if="problem[cur_page-1].type===3" />
			</view>

			<view>
				<p class="problem_content">{{problem[cur_page-1].title}}</p>
			</view>

			<view>
				<div style="height: 30px;"></div>
			</view>

			<view class="option_group">
				<view v-for="(item, index) in problem[0].options" :key="index">
					<view class="option_item" :class="{'selected_option_item':problem[0].options[index].selected==1,
						 'wrong_option_item':problem[0].options[index].selected==2,
						 'right_option_item':problem[0].options[index].selected==3}" @click="select_single_option(index)">
						<u-row>
							<u-col span="1">
								<view class="option_letter_box">{{letter[index]}}</view>
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
			
			<view>
				<div style="height: 30px;"></div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cur_page: 1,

				letter: [
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],

				problem: [{
						type: 0,
						done: 0,
						answer: 1,
						right: 0,
						title: "第一题：1一般来说， 上学，到底应该如何实现。 卡莱尔曾经说过，过去一切时代的精华尽在书中。带着这句话，我们还要更加慎重的审视这个问题： 要想清楚，上学，到底是一种怎么样的存在。 一般来说， 既然如何， 吉姆·罗恩在不经意间这样说过，要么你主宰生活，要么你被生活主宰。带着这句话，我们还要更加慎重的审视这个问题： 一般来讲，我们都必须务必慎重的考虑考虑。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 现在，解决上学的问题，是非常非常重要的。 所以， 问题的关键究竟为何? ",
						options: [{
								name: '苹果',
								selected: 0,
							},
							{
								name: '香蕉',
								selected: 0,
							},
							{
								name: '橙子',
								selected: 0,
							}, {
								name: '榴莲',
								selected: 0,
							}, {
								name: '榴莲2',
								selected: 0,
							}, {
								name: '榴莲3',
								selected: 0,
							},	{
								name: '榴莲4',
								selected: 0,
							}
						]
					},
					{
						type: 1,
						title: "第二题：2",
						options: [{
								name: '苹果',
								disabled: false
							},
							{
								name: '香蕉',
								disabled: false
							},
							{
								name: '橙子',
								disabled: false
							}, {
								name: '榴莲',
								disabled: false
							}
						]
					},
					{
						type: 2,
						title: "第三题：3",
						options: [],
					},
					{
						type: 3,
						title: "第四题：4",
						options: [],
					},
				]

			}
		},
		methods: {
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			select_single_option(i) {
				if (this.problem[0].done == 0) {
					this.problem[0].options.forEach((item) => {
						item.selected = 0;
					})
					this.problem[0].options[i].selected = 2;
					this.problem[0].options[this.problem[0].answer].selected = 3;
					if (i == this.problem[0].answer)
						this.problem[0].right = 1;
					this.problem[0].done = 1;
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
	}

	.option_item {
		border-radius: 5px;
		height: 40px;
		display: flex;
		align-items: center;
		margin: 10px 0 10px 0;
		background-color: #ebebeb;
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

	.option_item_content {
		font-size: 16px;
		margin-left: 35px;
	}

	.selected_option_item_content {
		margin-left: 35px;
		color: #ffffff;
	}

</style>
