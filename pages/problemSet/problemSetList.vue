<template>
	<view class="container">
		<view style="background-color: #f1f1f1;">
			<!--自定义navbar-->
			<uni-nav-bar title="题库分类" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" />
					</view>
				</block>
			</uni-nav-bar>
			
			<view class="m-middle-2" style="padding-top: 5px; padding-bottom: 5px; display: flex;">
				<u--input placeholder="请输入想要搜索的考试名称" prefixIcon="search"
					prefixIconStyle="font-size: 20px;color: #909399" shape="circle" v-model="searchValue"
					customStyle="background-color: white;">
				</u--input>
				<button class="mini-btn search-btn" size="mini">
					<view style="height: 100%;display:flex;align-items:center;justify-content:center;">
					搜索
					</view>
				</button>
			</view>
		</view>
		
		<view style="margin: 0; padding: 0; height: 100%;">
			<view class="left-bar">
				<view class="nav-tab-item" :class="{'nav-tab-item-now':scroll_attention == 1}" @click="scroll_to(1)">
					<view class="tag" :class="{'tag-now':scroll_attention == 1}"></view>
					<view>中考高考</view>
				</view>
				<view class="nav-tab-item" :class="{'nav-tab-item-now':scroll_attention == 2}" @click="scroll_to(2)">
					<view class="tag" :class="{'tag-now':scroll_attention == 2}"></view>
					<view>大学科目</view>
				</view>
				<view class="nav-tab-item" :class="{'nav-tab-item-now':scroll_attention == 3}" @click="scroll_to(3)">
					<view class="tag" :class="{'tag-now':scroll_attention == 3}"></view>
					<view>英语考试</view>
				</view>
				<view class="nav-tab-item" :class="{'nav-tab-item-now':scroll_attention == 4}" @click="scroll_to(4)">
					<view class="tag" :class="{'tag-now':scroll_attention == 4}"></view>
					<view>考公考编</view>
				</view>
				<view class="nav-tab-item" :class="{'nav-tab-item-now':scroll_attention == 5}" @click="scroll_to(5)">
					<view class="tag" :class="{'tag-now':scroll_attention == 5}"></view>
					<view>考研笔试</view>
				</view>
				
				
			</view>
			<scroll-view class="main-body" scroll-y="true" scroll-with-animation :scroll-top="scroll_top" @scroll="scrollEvent" ref="scrollDiv">
				
				<div class="subject-list" id="list_1">
					<view class="subject-title" :class="{'subject_title_now':scroll_attention == 1}">
						中考高考
					</view>
					<view class="subject-list-box">
						<view class="subject-list-item">
							语文
						</view>
						<view class="subject-list-item">
							数学
						</view>
						<view class="subject-list-item">
							英语
						</view>
						<view class="subject-list-item">
							物理
						</view>
						<view class="subject-list-item">
							历史
						</view>
						<view class="subject-list-item">
							化学
						</view>
						<view class="subject-list-item">
							政治
						</view>
						<view class="subject-list-item">
							生物
						</view>
						<view class="subject-list-item">
							地理
						</view>
					</view>
				</div>
				
				<div class="subject-list" id="list_2">
					<view class="subject-title" :class="{'subject_title_now':scroll_attention == 2}">
						大学科目
					</view>
					<view class="subject-list-box">
						<view class="subject-list-item">
							高等数学
						</view>
						<view class="subject-list-item">
							线性代数
						</view>
						<view class="subject-list-item">
							C语言程序设计
						</view>
						<view class="subject-list-item">
							大学物理
						</view>
						<view class="subject-list-item">
							马克思主义
						</view>
						<view class="subject-list-item">
							习近平概论
						</view>
					</view>
				</div>
				
				<div class="subject-list" id="list_3">
					<view class="subject-title" :class="{'subject_title_now':scroll_attention == 3}">
						英语考试
					</view>
					<view class="subject-list-box">
						<view class="subject-list-item">
							CET4
						</view>
						<view class="subject-list-item">
							CET6
						</view>
						<view class="subject-list-item">
							专业八级
						</view>
						<view class="subject-list-item">
							雅思
						</view>
						<view class="subject-list-item">
							托福
						</view>
					</view>
				</div>
				
				<div class="subject-list" id="list_4">
					<view class="subject-title" :class="{'subject_title_now':scroll_attention == 4}">
						考公考编
					</view>
					<view class="subject-list-box">
						<view class="subject-list-item">
							教师招聘
						</view>
						<view class="subject-list-item">
							国家公务员
						</view>
						<view class="subject-list-item">
							公安政法干警
						</view>
						<view class="subject-list-item">
							社区工作者招聘
						</view>
						<view class="subject-list-item">
							军队文职
						</view>
						<view class="subject-list-item">
							三支一扶
						</view>
						<view class="subject-list-item">
							事业单位联考
						</view>
						<view class="subject-list-item">
							事业单位非联考
						</view>
					</view>
				</div>
				
				<div class="subject-list" id="list_5">
					<view class="subject-title" :class="{'subject_title_now':scroll_attention == 5}">
						考研笔试
					</view>
					<view class="subject-list-box">
						<view class="subject-list-item">
							考研政治
						</view>
						<view class="subject-list-item">
							考研英语一
						</view>
						<view class="subject-list-item">
							考研英语二
						</view>
						<view class="subject-list-item">
							考研数学一
						</view>
						<view class="subject-list-item">
							考研数学二
						</view>
						<view class="subject-list-item">
							数据结构
						</view>
						<view class="subject-list-item">
							计算机组成
						</view>
						<view class="subject-list-item">
							操作系统
						</view>
						<view class="subject-list-item">
							计算机网络
						</view>
						<view class="subject-list-item">
							408综合
						</view>
						<view class="subject-list-item">
							912综合
						</view>
					</view>
				</div>
				
			</scroll-view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				scroll_top: 0,
				list_height:[0,0,0,0,0],
				scroll_attention: 1,
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			
			for(let i = 1; i < this.list_height.length; i++) {
				query.select('#list_'+i.toString()).boundingClientRect(data => {
						this.list_height[i] = data.height + this.list_height[i-1];
				}).exec();
			}
			


		},
		methods: {
			scrollEvent (e) {
				console.log(e.detail.scrollTop);
				for(let i = 0; i < this.list_height.length; i++) {
					if (e.detail.scrollTop >= this.list_height[i] && e.detail.scrollTop <= (this.list_height[i] + 47)) {
						this.scroll_attention = i+1;
						break;
					}
				}
			},
			scroll_to(x) {
				this.scroll_top = this.list_height[x-1];
				for(let i = 0; i < this.list_height.length; i++) {
					if (this.scroll_top >= this.list_height[i] && this.scroll_top <= (this.list_height[i] + 47)) {
						this.scroll_attention = i+1;
						break;
					}
				}
			}
		},
	};
</script>

<style lang="scss">
	.container {
		height: 100%;
	}
	
	.m-middle-2 {
		width: 96%;
		margin: auto;
	}
	
	.search-btn {
		background-color: #f1f1f1;
		color: #00aaff;
		display:flex;
		align-items:center;
		justify-content:center;
		margin-left: 5px;
		padding: 5px;
		line-height: 100%;
	}
	.search-btn::after {
		border: none;
	}
	
	.left-bar {
		margin: 0;
		padding: 0;
		width: 90px;
		background-color: #f1f1f1;
		position: fixed;
		height: 100%;
		overflow: auto;
	}
	
	.main-body {
		margin-left: 100px;
		padding-right: 10px;
		width: calc(100vw - 110px);
		height: 70vh;
	}
	
	.nav-tab-item {
		padding: 20px 0 20px 0;
		text-align: center;
		font-size: 16px;
		justify-content: center;
		align-items: center;
		display: flex;
		.tag {
			width: 5px;
			height: 10px;
			margin-right: 5px;
		}
		.tag-now {
			background-color: #00aaff;
			transition: 1s;
		}
	}
	.nav-tab-item-now {
		color: #00aaff;
		background-color: #ffffff;
		transition: 0.5s;
	}
	
	.subject-list {
		.subject-title {
			font-weight: bold;
			padding: 10px 0 10px 0;
			font-size: 20px;
		}
		.subject_title_now {
			color: #00aaff;
			transition: 0.5s;
		}
		.subject-list-box {
			.subject-list-item:first-child {
				margin: 0 0 10px 0;
			}
			.subject-list-item:last-child {
				margin: 10px 0 0 0;
			}
			.subject-list-item {
				border-radius: 8px;
				background-color: #f0f0f0;
				padding: 10px;
				margin: 10px 0 10px 0;
				font-size: 16px;
			}
		}
	}

</style>