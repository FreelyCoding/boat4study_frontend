<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="从其他题库录入" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18"  @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		<view class="u-demo-block">
			<u-list :customStyle="{height:scrollH+'px'}" @scrolltolower="loadNewProblem()">
				<u-list-item v-for="(item, index) in problem_id_list" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
						@click="select(item)">
						<view>
							<uni-row>
								<uni-col :span="5" align="start">
									<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===0" />
									<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===1" />
									<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
										v-if="item.type===2" />
								</uni-col>
								<uni-col :span="15" align="start">
									<div class="shuhei problem-title" style="margin-bottom: 5px;">
										<p style="font-size: 20px;">{{item.title}}</p>
									</div>
								</uni-col>
								<uni-col :span="4" align="start">
									<u-icon name="/static/pic/problemSet/fxxz.svg" size="25px" v-if="item.selected === 1"></u-icon>
									<u-icon name="/static/pic/problemSet/fxwxz.svg" size="25px" v-if="item.selected === 0"></u-icon>
								</uni-col>
							</uni-row>
							<u-divider> </u-divider>
						</view>
					</uni-card>
		
				</u-list-item>	
			</u-list>
			
		</view>
		
		<view class="footer">
			<u-row>
				<u-col span="2"></u-col>
				<u-col span="3">
					<u-button type="primary" shape="circle" text="加入题库" @click="add_to_ps()"></u-button>
				</u-col>
				<u-col span="2"></u-col>
				<u-col span="3">
					<u-button type="success" shape="circle" text="全选" @click="select_all()"></u-button>
				</u-col>
				<u-col span="2"></u-col>
			</u-row>
		</view>
		
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import api from '@/common/api.js';
	
	export default{
		data() {
			return {
				problem_set_id: 0,
				source_set_id: 0,
				problem_id_list: [],
				if_select_all: 0,
				limit: 10,
				offset: 0,
				status: 'loading'
			}
		},
		onLoad: function (option) {
			this.problem_set_id = option.id
			this.source_set_id = option.source_set_id
			console.log("problem_set_id:" + this.problem_set_id + " source_set_id:" + this.source_set_id)
			this.init_problem_id_list()
		},
		
		computed: {
			scrollH: function() {
				let sys = uni.getSystemInfoSync();
				let winHeight = parseInt(sys.windowHeight) - 50
				return winHeight
			}
		},
		
		methods: {
			select_all() {
				if (this.if_select_all == 0) {
					this.if_select_all = 1
					for (var i=0;i<this.problem_id_list.length;i++) {
						this.problem_id_list[i].selected = 1;
					}
				} else {
					this.if_select_all = 0
					for (var i=0;i<this.problem_id_list.length;i++) {
						this.problem_id_list[i].selected = 0;
					}
				}
			},
			
			async add_to_ps() {
				for (var i = 0; i < this.problem_id_list.length;i++) {
					if (this.problem_id_list[i].selected != 0) {
						await myRequest.request(api.problem_set_migrate_problem(this.problem_set_id, this.problem_id_list[i].id), 'POST', {}).then(
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
					}
				}
			},
			
			async init_problem_id_list() {
				var ret;
				await myRequest.request(api.problem_set_all_problem({id:this.source_set_id, limit: this.limit, offset: this.offset}), 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							ret = res.data.problems
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
				
				if (ret == null) {
					this.status = 'nomore'
					return
				}
				
				this.offset += ret.length
				
				if (ret.length < this.limit) {
					this.status = 'nomore'
				}
				
				for (var i=0;i < ret.length;i++) {
					await this.problem_id_list.push({
						id: ret[i].id,
						type: ret[i].problem_type_id,
						selected: 0,
						title: ret[i].description,
					})
				}
				console.log(this.problem_id_list)
				
				/*
				for (var i=0;i<this.problem_id_list.length;i++) {
					await this.load_one_problem_detail(i)
				}
				console.log(this.problem)*/
			},
			
			/*
			async load_one_problem_detail(index) {
				var res2;
				
				if (this.problem_id_list[index].problem_type_id == 0) {
					await myRequest.request(api.problem_choice_all({id:this.problem_id_list[index].id}),
					 'GET', {}, null, null, true).then(
						function(res) {
							//console.log(res)
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 0,
							is_multiple: res2.data.problems[0].is_multiple,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							selected: 0,
						})
					}
				} else if (this.problem_id_list[index].problem_type_id == 1) {
					await myRequest.request(api.problem_blank_all({id: this.problem_id_list[index].id}),
					 'GET', {}, null, null, true).then(
						function(res) {
							//console.log(res)
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 1,
							is_multiple: false,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							selected: 0,
						})
					}
				} else if (this.problem_id_list[index].problem_type_id == 2) {
					await myRequest.request(
						api.problem_judge_all({id:this.problem_id_list[index].id}),
						 'GET', {}, null, null, true).then(
						function(res) {
							res2 = res;
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
					if (res2.statusCode == 200) {
						this.problem.push({
							type: 2,
							is_multiple: false,
							title: res2.data.problems[0].description,
							created_at: res2.data.problems[0].created_at.slice(0, 10),
							selected: 0,
						})
					}
					
				}
			},*/
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
			select(item) {
				if (item.selected == 0) {
					item.selected = 1
				} else {
					item.selected = 0
				}
			},
			loadNewProblem() {
				let that = this;
				
				var ret;
				
				myRequest.request(api.problem_set_all_problem({id:this.source_set_id, limit: this.limit, offset: this.offset}), 'GET', {}).then(
					function(res) {
						console.log(res)
						if (res.statusCode == 200) {
							ret = res.data.problems
						} else if (res.statusCode == 401) {
							myRequest.redirectToLogin()
						} else {
							myRequest.toast()
						}
						
						if (ret == null) {
							this.status = 'nomore'
							return;
						}
						
						that.offset += ret.length
						
						if (ret.length < that.limit) {
							that.status = 'nomore'
						}
						
						for (var i = 0; i < ret.length; i++) {
							that.problem_id_list.push({
								id: ret[i].id,
								type: ret[i].problem_type_id,
								selected: 0,
								title: ret[i].description,
							})
						}
					}
				).catch(
					function(res) {
						console.log(res)
						myRequest.toast()
				})
			}
		}
		
	}
</script>

<style>
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.problem-title {
		width: 90%;
		overflow: hidden;
	}
	
	.footer {
		margin: 0;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 100vw;
		background-color: #fcfcfc;
		position: fixed;
		bottom: 0px;
		height: 40px;
		overflow: auto;
	}
</style>