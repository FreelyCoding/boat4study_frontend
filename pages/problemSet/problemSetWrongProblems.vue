<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="所有错误题目" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
			
		<view class="u-demo-block">
			<u-list :customStyle="{height:scrollH+'px'}" @scroll="scrollEvent" @scrolltolower="load_new_page">
				<u-list-item v-for="(item, index) in problem_id_list" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
						@click="select(item)">
						<view>
							<uni-row>
								<uni-col :span="4" align="start">
									<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===0" />
									<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===1" />
									<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===2" />
								</uni-col>
								<uni-col :span="12" align="start">
									<div class="shuhei problem-title" style="margin-bottom: 5px;" @click="jumpToProbelmDetail(index)">
										<p style="font-size: 20px;">{{item.title}}</p>
									</div>
								</uni-col>
								
								<uni-col :span="8" align="start">
									<view>
										错误{{item.wrong_count}}次
									</view>
									<button class="button" size="mini" type="primary" @click="deleteWrongRecord(index)"
										style="background-color: #ff5500; text-align: center; margin: auto;">删除记录</button>
								</uni-col>
							</uni-row>
							<u-divider> </u-divider>
						</view>
					</uni-card>
		
				</u-list-item>
			</u-list>
		</view>
			
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import api from '@/common/api.js';
		
	export default {
		data() {
			return {
				problem_id_list: [],
				problem_set_id: 0,
				page_size: 12,
				loaded_num: 0,
				
			}
		},
		computed:{
			scrollH:function(){
				let sys = uni.getSystemInfoSync();
				let winHeight =parseInt(sys.windowHeight)-50
				return winHeight	
			}
		},
		onLoad: function(option) {
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			
			this.load_new_page()

		},
		methods: {
			jumpToProbelmDetail(i) {
				uni.navigateTo({
					url: "/pages/problem/problemDetail?problem_id=" + this.problem_id_list[i].id + "&problem_type_id=" + this.problem_id_list[i].type,
				})
			},
			scrollEvent (e) {
				//console.log(e);
			},
			
			deleteWrongRecord(index) {
				myRequest.request(api.wrong_record_delete(this.problem_id_list[index].id), 'DELETE', {}).then(
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
				this.problem_id_list.splice(index,1);
			},
			
			async load_new_page() {
				var ret;
				var _this = this
				await myRequest.request(api.problem_set_all_problem({id:this.problem_set_id, is_wrong:true,
				 limit:this.page_size,offset:this.loaded_num}), 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							ret = res.data.problems
							_this.loaded_num += _this.page_size
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
				
				for (var i=0;i<ret.length;i++) {
					await this.problem_id_list.push({
						id: ret[i].id,
						type: ret[i].problem_type_id,
						selected: 0,
						title: ret[i].description.split("#")[0],
						wrong_count: 0,
					})
					this.get_problem_wrong_count(this.problem_id_list.length-1)
				}
			},
			
			async get_problem_wrong_count(i) {
				var ret;
				await myRequest.request(api.wrong_record_get(this.problem_id_list[i].id), 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							ret = res.data.records[0].count
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
				this.problem_id_list[i].wrong_count = ret
			},
			
			back() {
				uni.navigateBack({
					delta: 1,
				})
			}
		},
	}
</script>

<style>
	.main-body {
		margin: 20px;
	}
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.problem-title {
		width: 90%;
		overflow: hidden;
		height: 20px;
	}
</style>