<template>
	<view>
		<view>
			<!--自定义navbar-->
			<uni-nav-bar title="笔记" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
						<i-icon name="link" color="#FFFFFF" size="16px" style='margin-left: 15px;'
							@click="relativeProblemOpen"></i-icon>
					</view>
				</block>

				<!--
				<block slot="right">
					<view class="note-navbar">
						<i-icon size="20px" color="#ffffff" name="share-fill"></i-icon>
						<i-icon size="20px" color="#ffffff" name="more-2-fill"></i-icon>
					</view>
				</block>-->
			</uni-nav-bar>
		</view>


		<view class="container">
			<!--作者信息, 笔记创建时间等信息-->

			<view class="title_wrapper">
				<textarea class="title" :maxlength="title_maxlength" :value="title" disabled="true"></textarea>
			</view>

			<!--分界线-->
			<!-- <u-line></u-line> -->

			<view>
				<u-row>
					<u-col :span="2">
						<view style="margin-left: 15px;">
							<u-avatar :src="authorInfo.avatar">
							</u-avatar>
						</view>

					</u-col>

					<u-col :span="4">
						<view>
							<text> {{ authorInfo.nickName }} </text>
						</view>

					</u-col>

					<u-col :span="6">
						<view style="display: flex; justify-content: flex-end; margin-right: 15px;">
							<text>{{ created_at }}</text>

						</view>

					</u-col>
				</u-row>
			</view>

			<!-- <u-line></u-line> -->

			<!--笔记内容-->
			<view class="page-body">
				<view class='wrapper'>
					<view class="editor-wrapper">
						<editor id="editor" class="ql-container" @statuschange="onStatusChange" read-only
							@ready="onEditorReady">
						</editor>
					</view>
				</view>
			</view>

			<!-- <uni-fab class="fab" horizontal="right" vertical="bottom" icon="icon-edit" -->
			<!-- icon_size="28" :pattern="pattern"/> -->

			<u-line></u-line>

			<view style="margin-top: 10px;">
				<uni-row>
					<uni-col :offset="1" :span="2">
						<view v-if="isLike" @click="clickLike()">
							<u-icon name="/static/pic/note/like.svg" size="26px"></u-icon>
						</view>

						<view v-else="!isLike" @click="clickLike()">
							<u-icon name="/static/pic/note/unlike.svg" size="26px"></u-icon>
						</view>
					</uni-col>

					<uni-col :span="4">
						<button type="primary" size="mini"
							style="width: 60px; background-color: #00aaff; margin-left: 5px;"
							@click="clickLike">{{ likeCount }}</button>
					</uni-col>
					<uni-col :offset="10" :span="2">
						<view v-if="isStar">
							<u-icon name="/static/pic/note/star.svg" size="28px" @click="clickStar"></u-icon>
						</view>

						<view v-else="!isStar">
							<u-icon name="/static/pic/note/unstar.svg" size="28px" @click="clickStar"></u-icon>
						</view>
					</uni-col>
					<uni-col :span="4">
						<button size="mini"
							style="width: 60px; background-color: #f9ae3d; color: white; margin-left: 5px;"
							@click="clickStar">
							{{ starCount }}</button>
					</uni-col>
				</uni-row>
			</view>

			<view v-if="authorInfo.id == userId">
				<!--悬浮按钮-->
				<uni-fab ref="fab" horizontal="right" vertical="bottom" direction="horizontal" :content="fabContent"
					@trigger="trigger"></uni-fab>
			</view>


			<!-- <u-line></u-line> -->

			<!--评论-->
			<comment-eg :articleId="note_id" :authorId="authorInfo.id"></comment-eg>

		</view>

		<!--模态框-->
		<tui-modal :show="show" title="提示" content="确定删除笔记吗" @click="handleModalClick" width="70%"></tui-modal>

		<!--选择题库弹出层-->
		<u-popup :safeAreaInsetBottom="true" :safeAreaInsetTop="true" mode="center" :show="problemSetSelectShow"
			:overlay="true" :closeable="true" :closeOnClickOverlay="true" @open="loadProblemSet"
			@close="problemSetSelectClose">

			<scroll-view class="u-popup-slot" :style="{
					width: '300px',
					marginTop: '0',
				}" scroll-y="true">

				<!-- <u-list customStyle="width: 94%; margin: auto; margin-top: 15px;">
					<u-list-item v-for="(item, index) in problemSet" :key="index">
						<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="loadProblemList(item.id)">
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
								<u-divider> </u-divider>
							</view>
						</uni-card>

					</u-list-item>
				</u-list> -->
			
				<view v-for="(item, index) in problemSet">
					<uni-card isShadow border padding="10px 0px 10px 0px" margin="15px 10px 15px 10px"
						style="border-radius: 10px;" @click="loadProblemList(item.id)">
						<view>
							<uni-row>
								<uni-col :span="3" align="start">
									<view v-if="item.user_id == 0" style="max-width: 30px;">
										<p class="official_PS_tag">
											官方题库
										</p>
									</view>
									<view v-else-if="item.group_id == 0" style="max-width: 30px;">
										<div class="personal_PS_tag">
											个人题库
										</div>
									</view>
									<view v-else-if="item.group_id != 0" style="max-width: 30px;">
										<div class="group_PS_tag">
											小组题库
										</div>
									</view>
								</uni-col>
								<uni-col :offset="1" :span="7" align="start">
									<p style="margin: auto;">
										<u-avatar :src="myRequest.imageUrl() + '/public'
											+ item.user_info.avatar_path" size="70px"></u-avatar>
									<div class="user_name" style="margin-top: 10px; font-family: shuhei; margin: auto; text-align: center;">
										{{item.user_info.nick_name}}
									</div>
									</p>
								</uni-col>
								
								<uni-col :offset="2" :span="10" align="start">
									<div class="shuhei" style="margin-bottom: 5px;margin-top: 18px;">
										<p style="font-size: 22px;">{{item.name}}</p>
									</div>
									<div style="font-size: 16px; margin-top: 5px;">
										{{item.problem_number}} 道题目
									</div>
								</uni-col>
							</uni-row>
						</view>
					</uni-card>
				</view>
			</scroll-view>
		</u-popup>

		<!--选择题目弹出层-->
		<u-popup :safeAreaInsetBottom="true" :safeAreaInsetTop="true" mode="center" :show="problemListSelectShow"
			:overlay="true" :closeable="true" :closeOnClickOverlay="true" @close="problemListSelectClose">
			<scroll-view class="u-popup-slot" :style="{
					width: '300px',
					marginTop: '0',
				}" scroll-y="true">


				<!-- <u-list customStyle="width: 94%; margin: auto; margin-top: 25px;">
					<u-list-item v-for="(item, index) in problemList" :key="index">
						<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="select(item)">
							<view>
								<uni-row>
									<uni-col :span="6" align="start">
										<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff"
											v-if="item.type===0" />
										<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
											v-if="item.type===1" />
										<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
											v-if="item.type===2" />
									</uni-col>
									<uni-col :span="14" align="start">
										<div class="shuhei problem-title" style="margin-bottom: 5px;">
											<p style="font-size: 20px;">{{item.description}}</p>
										</div>
									</uni-col>
									<uni-col :span="4" align="start">
										<u-icon name="/static/pic/problemSet/fxxz.svg" size="25px"
											v-if="item.selected === 1"></u-icon>
										<u-icon name="/static/pic/problemSet/fxwxz.svg" size="25px"
											v-if="item.selected === 0"></u-icon>
									</uni-col>
								</uni-row>
								<u-divider> </u-divider>
							</view>
						</uni-card>

					</u-list-item>

					<u-list-item style="margin-top: 15px; margin-bottom: 15px;">
						<u-row>
							<u-col span="3" offset="2">
								<u-button type="primary" text="添加" @click="addToRelativeProblem"></u-button>
							</u-col>
							<u-col span="3" offset="2">
								<u-button type="success" text="全选" @click="selectAll"></u-button>
							</u-col>
						</u-row>
					</u-list-item>
				</u-list> -->

				<view class="u-demo-block" style="margin-top: 30px;">
					<u-list :customStyle="{height:'400px'}" @scrolltolower="loadNewProblem()">
						<u-list-item v-for="(item, index) in problemList" :key="index">
							<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="select(item)">
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
							<u-button type="primary" shape="circle" text="加入题库" @click="addToRelativeProblem"></u-button>
						</u-col>
						<u-col span="2"></u-col>
						<u-col span="3">
							<u-button type="success" shape="circle" text="全选" @click="selectAll"></u-button>
						</u-col>
						<u-col span="2"></u-col>
					</u-row>
				</view>


			</scroll-view>
		</u-popup>


		<!--相关题目弹出层-->
		<view>
			<u-popup :safeAreaInsetBottom="true" :safeAreaInsetTop="true" :show="relativeProblemShow" mode="left"
				:overlay="true" :closeable="true" :closeOnClickOverlay="true" @close="relativeProblemClose">

				<scroll-view class="u-popup-slot" :style="{
						height: '100%',
						width: '280px',
						marginTop: '0',
					}" scroll-y="true">

					<!-- <u-list customStyle="width: 94%; margin: auto; margin-top: 15px;">

						<u-list-item style="margin-bottom: 15px;">
							<view v-if="authorInfo.id == userId">
								<u-row>
									<u-col span="6" offset="3">
										<u-button type="success" text="添加相关题目" @click="showProblemSet"></u-button>
									</u-col>
								</u-row>

							</view>

						</u-list-item>


						<u-list-item v-for="(item, index) in relativeProblem" :key="index">
							<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" @click="select(item)">
								<view>
									<uni-row>
										<uni-col :span="6" align="start">
											<uni-tag text="选择题" type="primary" customStyle="background-color: #00aaff"
												v-if="item.type===0" />
											<uni-tag text="填空题" type="primary" customStyle="background-color: #00aaff"
												v-if="item.type===1" />
											<uni-tag text="判断题" type="primary" customStyle="background-color: #00aaff"
												v-if="item.type===2" />
										</uni-col>
										<uni-col :span="12" align="start">
											<div class="shuhei problem-title" style="margin-bottom: 5px;"
												@click="problemClick(item)">
												<p style="font-size: 20px;">{{item.description}}</p>
											</div>
										</uni-col>

										<uni-col span="4" align="start">
											<view v-if="authorInfo.id == userId">
												<i-icon name="delete-bin-fill" color="red" :size="15"
													style="float: right;"
													@click="removeRelativeProblem(item, index)"></i-icon>
											</view>

										</uni-col>

									</uni-row>
									<u-divider> </u-divider>
								</view>
							</uni-card>

						</u-list-item>

					</u-list> -->
					
					
					<view class="u-demo-block" style="margin-top: 15px;">
						<u-list :customStyle="{height:'400px'}">
							<u-list-item style="margin-bottom: 10px;">
								<view v-if="authorInfo.id == userId">
									<u-row>
										<u-col span="6" offset="3">
											<u-button type="success" text="添加相关题目" @click="showProblemSet"></u-button>
										</u-col>
									</u-row>
							
								</view>
							</u-list-item>
							
							<u-list-item v-for="(item, index) in relativeProblem" :key="index">
								<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px">
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
											<uni-col :offset="1" :span="14" align="start">
												<div class="shuhei problem-title" style="margin-bottom: 5px;" @click="problemClick(item)">
													<p style="font-size: 20px;">{{item.title}}</p>
												</div>
											</uni-col>
											<uni-col :span="4" align="start">
												<view v-if="authorInfo.id == userId">
													<i-icon name="delete-bin-fill" color="red" :size="30"
														style="margin-left: 10px;"
														@click="removeRelativeProblem(item, index)"></i-icon>
												</view>
											</uni-col>
										</uni-row>
										<u-divider> </u-divider>
									</view>
								</uni-card>
					
							</u-list-item>	
						</u-list>
						
					</view>
					
				</scroll-view>

			</u-popup>
		</view>


	</view>
</template>

<script>
	import myRequest from '../../common/request'

	import tuiModal from '@/components/tui-modal/tui-modal.vue';
	import tuiBubblePopup from '@/components/tui-bubble-popup/tui-bubble-popup.vue';
	import tRtPopup from '@/components/t-rt-popup/t-rt-popup';
	import uPopup from '@/uni_modules/uview-ui/components/u-popup/u-popup.vue'
	import tuiListView from '@/components/tui-list-view/tui-list-view.vue'
	import uRow from '@/uni_modules/uview-ui/components/u-row/u-row.vue'
	import uCol from '@/uni_modules/uview-ui/components/u-col/u-col.vue'
	import uAvatar from '@/uni_modules/uview-ui/components/u-avatar/u-avatar.vue'
	import tuiNoData from '@/components/tui-no-data/tui-no-data.vue'

	import api from '@/common/api.js'

	export default {
		data() {
			return {
				title: "",
				show: false,
				valid: false,
				note_html: "",
				note_id: "",
				reqFlag: false,

				remove_index: 0,
				edit_index: 1,

				userId: null,

				like_index: 2,
				star_index: 3,

				isLike: false,
				isStar: false,
				likeCount: 0,
				starCount: 0,

				authorInfo: {
					id: null,
					avatar: null,
					nickName: null
				},

				created_at: null,

				fabContent: [{
						iconPath: '/static/pic/note/delete-bin-line.png',
						selectedIconPath: '/static/pic/note/delete-bin-fill.png',
						text: '删除',
						active: false
					},
					{
						iconPath: '/static/pic/note/edit-fill.png',
						selectedIconPath: '/static/pic/note/edit-fill-active.png',
						text: '编辑',
						active: false
					}
				],

				problemListSelectShow: false,
				problemList: [],

				problemSetSelectShow: false,
				problemSet: [],

				relativeProblemShow: false,
				relativeProblem: [

				],
				
				limit: 5, 
				offset: 0,
				curProblemSetId: 0
				

			}
		},
		methods: {
			loadNewProblem() {
				let that = this;
				
				var ret;
				
				myRequest.request(api.problem_set_all_problem({id:this.curProblemSetId, limit: this.limit, offset: this.offset}), 'GET', {}).then(
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
							return;
						}
						
						that.offset += ret.length
						
						for (var i = 0; i < ret.length; i++) {
							that.problemList.push({
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
			},
			
			problemClick(item) {
				console.log('click')
				uni.navigateTo({
					url: `/pages/problem/problemDetail?problem_id=${item.id}&problem_type_id=${item.type}`
				})

			},

			getRelativeProblem() {
				this.relativeProblem = []

				uni.request({
					url: myRequest.interfaceUrl() + `/note/problem_list/${this.note_id}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: res => {
						if (res.statusCode == 200) {							
							var ret = res.data

							if (ret == null) return

							for (var i = 0; i < ret.length; i++) {
								this.relativeProblem.push({
									id: ret[i].id,
									type: ret[i].problem_type_id,
									selected: 0,
									title: ret[i].description,
								})
							}
						} else if (res.statusCode == 401) {
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							this.relativeProblemShow = false
							myRequest.toast()
						}
					},

					fail: res => {
						myRequest.toast()
						this.relativeProblemShow = false
					}

				})
			},

			selectAll() {
				for (var i = 0; i < this.problemList.length; i++) {
					this.problemList[i].selected = 1
				}
			},

			select(item) {
				item.selected = 1 - item.selected
			},

			addToRelativeProblem() {
				for (var i = 0; i < this.problemList.length; i++) {
					var item = this.problemList[i]

					if (item.selected == 0) continue;

					var flag = false;

					for (var j = 0; j < this.relativeProblem.length; j++) {
						if (this.relativeProblem[j].id == item.id) {
							flag = true;
							break;
						}
					}

					if (flag) continue;

					if (this.relativeProblem.indexOf(item) == -1) {
						this.relativeProblem.push(item)
						uni.request({
							url: myRequest.interfaceUrl() +
								`/note/add_problem/${this.note_id}?problem_id=${item.id}`,
							method: 'POST',
							header: {
								'X-Token': myRequest.getToken()
							}
						})
					}
				}

				if (this.problemList.length > 0) {
					myRequest.toast('添加题目成功')
				}
			},

			loadProblemList(problemSetId) {
				this.problemSetSelectShow = false
				this.problemListSelectShow = true

				console.log('yyy')
				console.log(problemSetId)

				this.curProblemSetId = problemSetId
				this.initProblemList(problemSetId)
			},

			initProblemList(problemSetId) {
				console.log('initProblemList')
				var ret;

				uni.request({
					url: myRequest.interfaceUrl() + `/problem_set/all_problem/${problemSetId}?offset=${this.offset}&limit=${this.limit}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						if (res.statusCode == 200) {
							ret = res.data.problems

							if (ret == null) {
								return;
							}
							
							this.problemList = []

							for (var i = 0; i < ret.length; i++) {
								this.problemList.push({
									id: ret[i].id,
									type: ret[i].problem_type_id,
									selected: 0,
									title: ret[i].description,
								})
							}
							
							console.log(this.problemList)

						} else if (res.statusCode == 401) {
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							this.problemListSelectShow = false
							myRequest.toast()
						}
					},

					fail: res => {
						this.problemListSelectShow = false
						myRequest.toast()
					}

				})

			},

			loadProblemSet() {

				myRequest.checkLogin()
				uni.request({
					url: myRequest.interfaceUrl() + '/problem_set/all',
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: (res) => {
						console.log(res)
						if (res.statusCode == 200) {
							this.problemSet = []
							
							if (res.data.problem_set == null) {
								return
							}
							
							for (var i = 0; i < res.data.problem_set.length; i++) {
								var t = {
									id: res.data.problem_set[i].id,
									description: res.data.problem_set[i].description,
									name: res.data.problem_set[i].name,
									pic: "",
									created_at: res.data.problem_set[i].created_at.slice(0, 10),
									problem_number: res.data.problem_set[i].problem_count,
									user_id: res.data.problem_set[i].user_id,
									group_id: res.data.problem_set[i].group_id,
									user_info: res.data.problem_set[i].user_info,
								}
								
								this.problemSet.push(t);
							}
							
							console.log('this problemSet')
							console.log(this.problemSet)
							
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

			relativeProblemOpen() {
				this.relativeProblemShow = true;
			},

			relativeProblemClose() {
				this.relativeProblemShow = false;
			},

			removeRelativeProblem(item, index) {
				this.relativeProblem.splice(index, 1)

				uni.request({
					url: myRequest.interfaceUrl() + `/note/remove_problem/${this.note_id}?problem_id=${item.id}`,
					method: 'DELETE',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: res => {
						if (res.statusCode == 200) {

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

					fail: res => {
						myRequest.toast()
					}

				})

			},

			problemSetSelectClose() {
				this.problemSetSelectShow = false;
			},

			problemListSelectClose() {
				this.problemListSelectShow = false;
			},

			showProblemSet() {
				this.problemSetSelectShow = true;
				this.relativeProblemShow = false

				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return
				}

				uni.request({
					url: myRequest.interfaceUrl() + '/problem/blank/all',
					header: {
						"X-Token": myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							this.problemList = res.data.problems
							console.log(this.problemList)
						} else {
							myRequest.toast()
						}
					}
				})
			},


			handleModalClick(e) {
				let index = e.index
				if (index == 0) {
					this.show = false;
					this.fabContent[0].active = !this.fabContent[0].active
				} else {
					this.show = false;
					this.fabContent[0].active = !this.fabContent[0].active

					console.log(123)
					console.log(this.note_id)

					myRequest.request(`/note/delete/${this.note_id}`, 'DELETE').then(
						function(res) {
							console.log(222)
							console.log(res)
							if (res.statusCode == 200) {
								/*uni.switchTab({
									url: '/pages/homePage/noteIndex',
									success() {								
										uni.navigateBack()
									}
								})*/
								myRequest.toast('删除成功', 1500, true)
								setTimeout(() => {
									uni.hideToast();
									//关闭提示后跳转
									uni.navigateBack({
										delta: 1
									})
								}, 1000)
							} else if (res.statusCode == 401) {
								uni.redirectTo({
									url: '/pages/login/login'
								})
							} else {
								myRequest.toast()
							}
						}
					).catch(function(res) {
						console.log(res)
						myRequest.toast()
					})
				}
			},

			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context

					var pages = getCurrentPages();
					var curRoutes = pages[pages.length - 1].route
					var curParam = pages[pages.length - 1].options;

					var id = curParam['id']

					if (!myRequest.isLogin()) {
						myRequest.toast('请先登录')
						uni.redirectTo({
							url: '/pages/login/login'
						})
						return
					}

					if (!id) {
						uni.switchTab({
							url: '/pages/homePage/noteIndex'
						})
					} else {
						this.note_id = id;

						this.userId = myRequest.getUID()

						uni.request({
							url: myRequest.interfaceUrl() + `/note/all?id=${id}`,
							method: 'GET',
							header: {
								'X-Token': myRequest.getToken()
							},
							success: (res) => {
								if (res.statusCode == 200) {
									console.log(res)
									if (res.data.notes == null) {
										myRequest.toast()
										uni.switchTab({
											url: '/pages/homePage/noteIndex'
										})
										return
									}
									var data = res.data.notes[0];

									this.title = data.title;
									this.note_html = data.content;
									this.note_id = data.id;
									this.created_at = data.created_at.slice(0, 10)

									this.authorInfo.id = data.user_id

									this.isLike = data.is_liked
									this.isStar = data.is_favorite
									this.likeCount = data.like_count
									this.starCount = data.favorite_count

									if (data.user_id != myRequest.getUID()) {
										this.fabContent = this.fabContent.slice(2)
										this.like_index = 0
										this.star_index = 1
										this.remove_index = 1000
										this.edit_index = 1000
									}

									this.editorCtx.setContents({
										html: this.note_html
									})

									this.loadAuthorInfo(data.user_id)

									this.getRelativeProblem()
								} else if (res.statusCode == 401) {
									myRequest.toast('请先登录')
									uni.redirectTo({
										url: '/pages/login/login'
									})
								} else {
									console.log('wrong')
									myRequest.toast()
									uni.switchTab({
										url: '/pages/homePage/noteIndex'
									})
								}
							},

							fail: (res) => {
								myRequest.toast()
								uni.switchTab({
									url: '/pages/homePage/noteIndex'
								})
							}
						})
					}
				}).exec()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				// console.log('format', name, value)
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},

			trigger(e) {
				this.editorCtx.getContents({
					success: res => {
						console.log(res.html)
					}
				})

				// console.log(e)
				this.fabContent[e.index].active = !e.item.active
				var t = this.fabContent[e.index].active

				if (e.index == this.remove_index) {
					this.show = true;
				}
				if (e.index == this.edit_index) {
					uni.redirectTo({
						url: `/pages/note/edit_note?id=${this.note_id}`
					})
					return
				}

				if (e.index == this.like_index || e.index == this.star_index) {

					var url, method;
					if (e.index == this.like_index && !t) {
						url = `/note/unlike/${this.note_id}`
						method = 'POST'
					} else if (e.index == this.like_index && t) {
						url = `/note/like/${this.note_id}`
						method = 'POST'
					} else if (e.index == this.star_index && !t) {
						url = `/note/unfavorite/${this.note_id}`
						method = 'DELETE'
					} else {
						url = `/note/favorite/${this.note_id}`
						method = 'POST'
					}
					uni.request({
						url: myRequest.interfaceUrl() + url,
						method: method,
						header: {
							'X-Token': myRequest.getToken()
						},
						success: (res) => {
							if (res.statusCode == 200) {
								console.log(res)
							} else if (res.statusCode == 401) {
								myRequest.toast('请先登录')
								uni.redirectTo({
									url: '/pages/login/login'
								})
							} else {
								console.log('wrong')
								myRequest.toast()
								uni.switchTab({
									url: '/pages/homePage/noteIndex'
								})
							}
						},

						fail: (res) => {
							myRequest.toast()
							uni.switchTab({
								url: '/pages/homePage/noteIndex'
							})
						}
					})

				}
			},

			clickLike() {
				var url, method;
				if (this.isLike) {
					url = `/note/unlike/${this.note_id}`
					method = 'POST'
				} else {
					url = `/note/like/${this.note_id}`
					method = 'POST'
				}
				uni.request({
					url: myRequest.interfaceUrl() + url,
					method: method,
					header: {
						'X-Token': myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							console.log(res)
							this.isLike = !this.isLike
							if (this.isLike) {
								this.likeCount += 1
							} else {
								this.likeCount -= 1
							}
						} else if (res.statusCode == 401) {
							myRequest.toast('请先登录')
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							console.log('wrong')
							myRequest.toast()
							uni.switchTab({
								url: '/pages/homePage/noteIndex'
							})
						}
					},

					fail: (res) => {
						myRequest.toast()
						uni.switchTab({
							url: '/pages/homePage/noteIndex'
						})
					}
				})
			},

			clickStar() {
				var url, method;
				if (this.isStar) {
					url = `/note/unfavorite/${this.note_id}`
					method = 'DELETE'
				} else {
					url = `/note/favorite/${this.note_id}`
					method = 'POST'
				}
				uni.request({
					url: myRequest.interfaceUrl() + url,
					method: method,
					header: {
						'X-Token': myRequest.getToken()
					},
					success: (res) => {
						if (res.statusCode == 200) {
							console.log(res)
							this.isStar = !this.isStar
							if (this.isStar) {
								this.starCount += 1
							} else {
								this.starCount -= 1
							}
						} else if (res.statusCode == 401) {
							myRequest.toast('请先登录')
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							console.log('wrong')
							myRequest.toast()
							uni.switchTab({
								url: '/pages/homePage/noteIndex'
							})
						}
					},

					fail: (res) => {
						myRequest.toast()
						uni.switchTab({
							url: '/pages/homePage/noteIndex'
						})
					}
				})
			},

			back() {
				var pages = getCurrentPages()
				if (pages.length > 1) {
					let page = pages[pages.length - 2]; //跳转页面成功之后

					if (page.route == 'pages/homePage/noteIndex' ||
						page.route == 'pages/personal/personalNote' ||
						page.route == 'pages/personal/starNotes') {
						page.$vm.refresh(); //如果页面存在，则重新刷新页面
					}
					uni.navigateBack()
				} else {
					uni.switchTab({
						url: '/pages/homePage/noteIndex'
					})
				}
			},

			loadAuthorInfo(userId) {
				uni.request({
					url: myRequest.interfaceUrl() + `/user/info/${userId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},

					success: res => {
						if (res.statusCode == 200) {
							var data = res.data
							this.authorInfo.avatar = myRequest.imageUrl() + '/public/' + data.avatar_path
							this.authorInfo.nickName = data.nick_name

							console.log('avatar')
							console.log(this.authorInfo.avatar)
						} else if (res.statusCode == 401) {
							myRequest.toast('请先登录')
							uni.redirectTo({
								url: '/pages/login/login'
							})
						} else {
							console.log('wrong')
							myRequest.toast()
						}
					},

					fail: res => {
						myRequest.toast()
					}
				})
			}

		},

		onLoad() {
			console.log(uni.getStorageSync('user_info'))
			console.log(myRequest.getUID())
			console.log(myRequest.getUserAvatar())
			// var pages = getCurrentPages();
			// var curRoutes = pages[pages.length - 1].route
			// var curParam = pages[pages.length - 1].options;

			// var id = curParam['id']

			// if (id) this.note_id = id	
		},

	}
</script>

<style>
	/* navbar css */
	/* $nav-height: 30px;
	 */
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.navbar {
		position: fixed;
		/*top: var(--status-bar-height);*/
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

	.input-uni-icon {
		line-height: $nav-height;
	}

	.container {
		top: var(--status-bar-height);
	}

	.u-popup-slot {
		width: 200px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 主体css */
</style>