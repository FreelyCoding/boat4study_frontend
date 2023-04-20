<template>
	<view>
		<view class="status-bar"></view>
		<view>
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
			<u-list customStyle="width: 94%; margin: auto; max-height: 350px; margin-top: 15px;">
				<u-list-item v-for="(item, index) in problemSet" :key="index">
					<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
							@click="jumpToPSPList(item)" v-if="item.id != problem_set_id">
						<view>
							<uni-row>
								<uni-col :span="5" align="start">
									<view>
										<u-icon name="/static/pic/qb.svg" size="50px"></u-icon>
									</view>
								</uni-col>
		
								<uni-col :span="18" align="start">
									<div class="shuhei" style="margin-bottom: 5px;">
										<p style="font-size: 20px;">{{item.name}}</p>
									</div>
									<div style="font-size: 16px;">
										{{item.problem_number}} 道题目
										&ensp; &ensp;
										{{item.created_at}}
									</div>
								</uni-col>
							</uni-row>
							<u-divider v-if="(index != Math.min(3,problemSet.length - 1))"> </u-divider>
						</view>
					</uni-card>
		
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
		
	export default{
		data() {
			return {
				problem_set_id: 0,
				problemSet: [],
			};
		},
		onLoad: function (option) {
			this.problem_set_id = option.id;
			console.log("problem_set_id: "+this.problem_set_id);
			
			myRequest.checkLogin()
			uni.request({
				url: myRequest.interfaceUrl() + '/user/problem_set',
				method: 'GET',
				header: {
					'X-Token': myRequest.getToken()
				},
			
				success: (res) => {
					console.log(res)
					if (res.statusCode == 200) {
						this.problemSet = []
						for (var i = 0; i < res.data.length; i++) {
							var t = {
								id: res.data[i].id,
								description: res.data[i].description,
								name: res.data[i].name,
								pic: "../../static/pic/dataStructure.jpg",
								created_at: res.data[i].created_at.slice(0, 10),
								problem_number: res.data[i].problem_count,
							}
							this.problemSet.push(t);
						}
					} else if (res.statusCode == 401) {
						if (myRequest.isLogin()) {
							myRequest.toast('请重新登录')
						} else {
							myRequest.toast('请登录')
						}
						uni.navigateTo({
							url: '/pages/login/login'
						})
					} else {
						myRequest.toast()
					}
				},
			
				fail: (res) => {
					console.log(res)
					myRequest.toast()
				}
			})
		},
		methods: {
			back() {
				uni.navigateBack({
				    delta: 1
				});
			},
			jumpToPSPList(item) {
				console.log(item.id)
				uni.navigateTo({
					url: "/pages/problem/problemCreateFromPSPList?id="+this.problem_set_id+"&source_set_id="+item.id
				})
			}
		}
	}
	
</script>

<style>
</style>