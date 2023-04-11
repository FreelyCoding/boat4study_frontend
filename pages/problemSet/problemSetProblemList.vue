<template>
	<view>
		<view class="status-bar"></view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="所有题目" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()"/>
					</view>
				</block>
			</uni-nav-bar>
		</view>
			
		<view class="main-body">
			<view v-for="(item,index) in problem" :key="index">
				<view class="problem-card">
					{{item.title}}
				</view>
			</view>
			
		</view>
			
	</view>
</template>

<script>
	import myRequest from '../../common/request';
		
	export default {
		data() {
			return {
				problem: [],
				
			}
		},
		onLoad: function(option) {
			myRequest.checkLogin()
			
			console.log(option.id); //打印出上个页面传递的参数。
			this.problem_set_id = option.id
			var _this = this
			
			uni.request({
				url: myRequest.interfaceUrl() + '/problem_set/'+this.problem_set_id+'/all_problem',
				method: 'GET',
				header: {
					'X-Token': myRequest.getToken()
				},
				
				success: (res1) => {
					console.log(res1)
					if (res1.statusCode == 200) {
						this.problem_id_list = JSON.parse(JSON.stringify(res1.data.problems))
						
						for (var i=0;i<this.problem_id_list.length;i++) {
							if (this.problem_id_list[i].problem_type_id == 0) {
								uni.request({
									url: myRequest.interfaceUrl() + '/problem/choice/'+this.problem_id_list[i].id,
									method: 'GET',
									header: {
										'X-Token': myRequest.getToken()
									},
									success: (res2) => {
										if (res2.statusCode == 200) {
											this.problem.push({
												type: 0,
												is_multiple: res2.data.is_multiple,
												title: res2.data.description,
											})
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
						}
						
						console.log(this.problem)
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
		methods: {
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
</style>