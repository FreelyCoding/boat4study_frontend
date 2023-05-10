<template>
	<view>
		<view>
			<!--自定义navbar-->
			<view>
				<view>
					<uni-nav-bar backgroundColor="#00aaff" fixed=false color="#ffffff" shadow="true" statusBar="true"
						title="创建笔记">

						<block slot="left">
							<view class="note-navbar">
								<!-- <uni-icons type="closeempty" color="#e45656" size="18" /> -->
								<i-icon :size="20" color="#ffffff" name="more-2-fill" @click="toggle"></i-icon>
								<!-- <i-icon size="20px" color="#e45656" name="close-fill" @click="clickClose"></i-icon> -->

								<!-- <i-icon size="20px" color="#18b566" name="check-fill" @click="submit" style="margin-left: 5px;"></i-icon> -->
							</view>
						</block>

						<block slot="right">
							<view class="note-navbar">
								<!-- <i-icon size="20px" color="#f29100" name="price-tag-fill"></i-icon> -->
								<!-- <uni-icons type="checkmarkempty" color="#19be6b" size="18"></uni-icons> -->
							</view>
						</block>
					</uni-nav-bar>
				</view>
			</view>

			<!--气泡弹窗-->
			<tui-bubble-popup :show="popupShow" @close="toggle" maskBgColor="transparent" left="8px" :top="popupTop"
				width="120px" backgroundColor="#4c4c4c" triangleLeft="10px" triangleTop="-22rpx">
				<view class="tui-popup-item"
					:class="{ 'tui-start': index === 0, 'tui-last': index === itemList.length - 1 }"
					hover-class="tui-item-active" :hover-stay-time="150" @tap="handleClick(index)"
					v-for="(item, index) in itemList" :key="index">
					<!-- <tui-icon :name="item.icon" color="#fff" :size="40" unit="rpx" v-if="item.icon && !isImage"></tui-icon> -->
					<i-icon :name="item.icon" color="#fff" :size="20"></i-icon>
					<text class="tui-bubble-popup_title" style="margin-left: 10px;">{{ item.title }}</text>
				</view>
			</tui-bubble-popup>


			<!--笔记标题-->
			<view class="title_wrapper">
				<textarea class="title" v-model=title :placeholder="title_placeholder" :maxlength="title_maxlength"
					placeholder-class="title_placeholder"></textarea>
			</view>

			<!--模态框-->
			<tui-modal :show="show" title="提示" content="确定取消修改吗" @click="handleModalClick" width="70%"></tui-modal>

			<!--分界线-->
			<u-line></u-line>
			
			<!--笔记内容-->
			<view class="page-body">
				<view class='wrapper'>

					<view class="editor-wrapper">
						<editor id="editor" class="ql-container" :placeholder="content_placeholder" showImgToolbar
							@statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
						</editor>
					</view>
					

					<view class='toolbar' @tap="format" style="height: 120px;overflow-y: auto;">
						<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
						</view>
						<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti"
							data-name="italic"></view>
						<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
							data-name="underline"></view>
						<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
							data-name="strike"></view>
						<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
							data-name="align" data-value="left"></view>
						<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
							data-name="align" data-value="center"></view>
						<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
							data-name="align" data-value="right"></view>
						<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi"
							data-name="align" data-value="justify"></view>
						<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height"
							data-name="lineHeight" data-value="2"></view>
						<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing"
							data-name="letterSpacing" data-value="2em"></view>
						<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju"
							data-name="marginTop" data-value="20px"></view>
						<view :class="formats.previewarginBottom ? 'ql-active' : ''"
							class="iconfont icon-723bianjiqi_duanhouju" data-name="marginBottom" data-value="20px">
						</view>
						<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
						<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font"
							data-name="fontFamily" data-value="Pacifico"></view>
						<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize"
							data-name="fontSize" data-value="24px"></view>

						<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color"
							data-name="color" data-value="#0000ff"></view>
						<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
							class="iconfont icon-fontbgcolor" data-name="backgroundColor" data-value="#00ff00"></view>

						<view class="iconfont icon-date" @tap="insertDate"></view>
						<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
						<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
							data-name="list" data-value="ordered"></view>
						<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
							data-name="list" data-value="bullet"></view>
						<view class="iconfont icon-undo" @tap="undo"></view>
						<view class="iconfont icon-redo" @tap="redo"></view>

						<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
						<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
						<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
						<view class="iconfont icon-charutupian" @tap="insertImage"></view>
						<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
							data-name="header" :data-value="1"></view>
						<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao"
							data-name="script" data-value="sub"></view>
						<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao"
							data-name="script" data-value="super"></view>
						<view class="iconfont icon-shanchu" @tap="clear"></view>
						<view :class="formats.direction === 'rtl' ? 'ql-active' : ''"
							class="iconfont icon-direction-rtl" data-name="direction" data-value="rtl"></view>
						
					</view>
				</view>
			</view>
			
			<!--弹出层选择要插入的题目-->
			<!-- <view>
				<u-popup
					:safeAreaInsetBottom="true"
					:safeAreaInsetTop="true"
					mode="center"
					:show="problemSelectShow"
					:overlay="true"
					:closeable="true"
					:closeOnClickOverlay="true"
					@close="problemSelectClose"
				>
					<scroll-view
						class="u-popup-slot"
						:style="{
							width: '300px',
							marginTop: '0',
						}"
						scroll-y="true"
					>
					
						<view>
							<tui-list-view title="所有题目" style="width: 100%;">
									<tui-list-cell v-for="(item, index) in problemList" :key="item.id" @click="addProblem(item)">			
										<text>{{ item.id + '. ' + item.description }}</text>
									</tui-list-cell>
							</tui-list-view>
						</view>
					</scroll-view>
				</u-popup>			
			</view> -->
			
			<!--选择题库弹出层-->
			<u-popup
				:safeAreaInsetBottom="true"
				:safeAreaInsetTop="true"
				mode="center"
				:show="problemSetSelectShow"
				:overlay="true"
				:closeable="true"
				:closeOnClickOverlay="true"
				@open="loadProblemSet"
				@close="problemSetSelectClose"
			>
				
				<scroll-view
					class="u-popup-slot"
					:style="{
						width: '300px',
						marginTop: '0',
					}"
					scroll-y="true"
				>
						
					<u-list customStyle="width: 94%; margin: auto; margin-top: 15px;">
						<u-list-item v-for="(item, index) in problemSet" :key="index">
							<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
									@click="loadProblemList(item.id)">
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
										
				</scroll-view>
			</u-popup>
			
			<!--选择题目弹出层-->
			<u-popup
				:safeAreaInsetBottom="true"
				:safeAreaInsetTop="true"
				mode="center"
				:show="problemListSelectShow"
				:overlay="true"
				:closeable="true"
				:closeOnClickOverlay="true"
				@close="problemListSelectClose"
			>
				<scroll-view
					class="u-popup-slot"
					:style="{
						width: '300px',
						marginTop: '0',
					}"
					scroll-y="true"
				>
					
					
					<u-list customStyle="width: 94%; margin: auto; margin-top: 25px;">
						<u-list-item v-for="(item, index) in problemList" :key="index">
							<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
								@click="select(item)">
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
											<u-icon name="/static/pic/problemSet/fxxz.svg" size="25px" v-if="item.selected === 1"></u-icon>
											<u-icon name="/static/pic/problemSet/fxwxz.svg" size="25px" v-if="item.selected === 0"></u-icon>
										</uni-col>
									</uni-row>
									<u-divider> </u-divider>
								</view>
							</uni-card>
				
						</u-list-item>
						
						<u-list-item style="margin-top: 15px; margin-bottom: 15px;">
							<u-row>
								<!-- <u-col span="4"></u-col> -->
								<u-col span="3" offset="2">
									<u-button type="primary" text="添加" @click="addToRelativeProblem"></u-button>
								</u-col>
								<u-col span="3" offset="2">
									<u-button type="success" text="全选" @click="selectAll"></u-button>
								</u-col>
							</u-row>
						</u-list-item>
						
					
					</u-list>
										
				</scroll-view>
			</u-popup>
			
			
			<!--相关题目弹出层-->
			<view>
				<u-popup 
					:safeAreaInsetBottom="true"
					:safeAreaInsetTop="true"
					:show="relativeProblemShow" 
					mode="left"
					:overlay="true"
					:closeable="true"
					:closeOnClickOverlay="true"
					@close="relativeProblemClose"
				>
					
					<scroll-view
						class="u-popup-slot"
						:style="{
							height: '100%',
							width: '280px',
							marginTop: '0',
						}"
						scroll-y="true"
					>
					
						<u-list customStyle="width: 94%; margin: auto; margin-top: 15px;">
							<u-list-item style="margin-bottom: 15px;">
								<u-row>
									<u-col span="6" offset="3">
										<u-button type="success" text="添加相关题目" @click="showProblemSet"></u-button>
									</u-col>
								</u-row>
							</u-list-item>
							
								
							<u-list-item v-for="(item, index) in relativeProblem" :key="index">
								<uni-card spacing="0" padding="0" margin="10px 0px 0px 10px" 
									@click="select(item)">
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
												<div class="shuhei problem-title" style="margin-bottom: 5px;">
													<p style="font-size: 20px;">{{item.description}}</p>
												</div>
											</uni-col>
											
											<uni-col span="4" align="start">
												<i-icon name="delete-bin-fill" color="red" :size="15" style="float: right;" @click="removeRelativeProblem(index)"></i-icon>
											</uni-col>
										
										</uni-row>
										<u-divider> </u-divider>
									</view>
								</uni-card>
										
							</u-list-item>

						</u-list>
					</scroll-view>
					
				</u-popup>
			</view>
		
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import tuiModal from '@/components/tui-modal/tui-modal.vue';
	import tuiBubblePopup from '@/components/tui-bubble-popup/tui-bubble-popup.vue';
	import tRtPopup from '@/components/t-rt-popup/t-rt-popup';
	import uPopup from '@/uni_modules/uview-ui/components/u-popup/u-popup.vue'
	import tuiListView from '@/components/tui-list-view/tui-list-view.vue'
	import tuiNoData from '@/components/tui-no-data/tui-no-data.vue'
	
	export default {
		components: {
			tuiModal,
			tuiBubblePopup,
			tRtPopup,
			uPopup
		},
		data() {
			return {
				popupTop: '12rpx',

				show: false,
				readOnly: false,
				formats: {},
				title: "",
				title_placeholder: "笔记标题",
				title_maxlength: 50,
				content_placeholder: "笔记内容",
				token: "",

				relativeProblemShow: false,
				relativeProblem: [
					
				],
				
				options1: [{
					text: '删除'
				}],

				itemList: 
				[
					{
						title: '保存',
						icon: 'save-fill'
					},
					{
						title: '取消',
						icon: 'delete-back-fill'
					},
					{
						title: '相关题目',
						icon: 'link'
					}
				],
				
				problemListSelectShow: false,
				problemList: [
					
				],
				
				popupShow: false,
				
				problemSetSelectShow: false,
				problemSet: [],
			}
		},
		methods: {
			
			selectAll() {
				for (var i = 0; i < this.problemList.length; i ++) {
					this.problemList[i].selected = 1
				}
			},
			
			select(item) {
				item.selected = 1 - item.selected
			},
			
			addToRelativeProblem() {
				for (var i = 0; i < this.problemList.length; i ++) {
					var item = this.problemList[i]
					
					if (item.selected == 0) continue;
					
					if (this.relativeProblem.indexOf(item) == -1) {
						this.relativeProblem.push(item)
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
				
				this.initProblemList(problemSetId)
			},
			
			initProblemList(problemSetId) {
				console.log('initProblemList')
				var ret;
				
				uni.request({
					url: myRequest.interfaceUrl() + `/problem_set/all_problem/${problemSetId}`,
					method: 'GET',
					header: {
						'X-Token': myRequest.getToken()
					},
					
					success: (res) => {
						if (res.statusCode == 200) {
							ret = res.data.problems
							
							this.problemList = []
							
							for (var i = 0; i < ret.length; i ++) {
								this.problemList.push({
									id: ret[i].id,
									type: ret[i].problem_type_id,
									selected: 0,
									description: ret[i].description,
								})
							}
							
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
									pic: "",
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
			
			relativeProblemClose() {
				this.relativeProblemShow = false;
			},
			
			removeRelativeProblem(index) {
				this.relativeProblem.splice(index, 1)
			},
			
			problemSetSelectClose() {
				this.problemSetSelectShow = false;
			},
			
			problemListSelectClose() {
				this.problemListSelectShow = false;
			},
		
			toggle() {
				this.popupShow = !this.popupShow;
			},
			handleClick(index) {
				if (index == 0) {
					this.submit()
				} 
				else if (index == 1) {
					this.show = true;
				}
				else if (index == 2) {
					this.relativeProblemShow = true;
				}

				this.toggle()
			},

			clickClose() {
				this.show = true;
			},

			handleModalClick(e) {
				let index = e.index
				if (index == 0) {
					this.show = false;
				} else {
					this.show = false;
					uni.switchTab({
						url: '/pages/homePage/noteIndex'
					})
				}
			},

			getCtx() {
				var that = this;
				that.editorCtx.getContents({
					success: function(data) {
						console.log(data)
					}
				})
			},
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
			},
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.getCtx();
				this.editorCtx.redo()
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
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success")
					}
				})
			},
			removeFormat() {
				this.editorCtx.removeFormat()
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},

			insertImage() {
				let that = this;
				uni.chooseImage({
					count: 1,
					success: (res) => {
						uni.uploadFile({
							url: myRequest.interfaceUrl() + '/upload/public',
							filePath: res.tempFilePaths[0],
							name: 'file',
							header: {
								'X-Token': myRequest.getToken()
							},
							success: res => {

								if (res.statusCode == 200) {
									var data = JSON.parse(res.data);

									that.editorCtx.insertImage({

										src: myRequest.imageUrl() + data.url,
										alt: '图像',
										success: function() {
											console.log('insert image success')
										}
									})
								} else {
									myRequest.toast()
								}
							}
						})
					}
				})
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
						}
						else {
							myRequest.toast()
						}
					}
				})
			},
			
			addProblem(item) {
				if (this.relativeProblem.indexOf(item) == -1) {
					this.relativeProblem.push(item)
					myRequest.toast('添加题目成功')
				}
				else {
					myRequest.toast('已添加过该题目')
				}
			},
			
			async submit() {
				if (!myRequest.isLogin()) {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					return;
				}

				if (!this.title) {
					myRequest.toast('标题不能为空')
					return;
				}

				console.log(uni.getStorageSync('token'))

				var html_content;

				this.editorCtx.getContents({
					success: res => {
						html_content = res.html

						if (!res.text.replace(/[\r\n\t\s]*/, "")) {
							myRequest.toast('内容不能为空')
						} else {
							var is_public = true
							
							var problems = []
							
							for (var i = 0; i < this.relativeProblem.length; i ++) {
								var item = this.relativeProblem[i]
								problems.push(item.id)
							}
							
							// TODO: 后续更改is_public字段
							var data = JSON.stringify({
								"content": html_content,
								"title": this.title,
								"is_public": is_public,
								"problems": problems
							})

							myRequest.request(`/note/create`, 'POST', data).then(
								function(res) {
									console.log(res)
									if (res.statusCode == 200) {
										myRequest.toast('笔记创建成功')
										uni.switchTab({
											url: '/pages/homePage/noteIndex',
											success() {
												let page = getCurrentPages().pop(); //跳转页面成功之后
												if (!page) return;
												page.$vm.refresh(); //如果页面存在，则重新刷新页面
											}
										})
									} else if (res.statusCode == 401) {
										if (myRequest.isLogin()) {
											myRequest.toast('请重新登录')
										} else {
											myRequest.toast('请登录')
										}
										uni.redirectTo({
											url: '/pages/login/login'
										})
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
						}
					}
				})
				
				
			}
		},
		onLoad() {
			// #ifdef H5
			this.popupTop = 44 + uni.upx2px(12) + 'px';
			// #endif

			// #ifndef H5
			this.popupTop = 12 + 96 + 'px'; // ios var(--status-bar-height)为48 
			// #endif
		}
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
		top: var(--status-bar-height);
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

	/* 主体css */

	.page-body {
		height: calc(100vh - var(--window-top) - var(--status-bar-height));
	}

	.wrapper {
		height: 100%;
	}

	.editor-wrapper {
		height: calc(100vh - var(--window-top) - var(--status-bar-height) - 140px);
		background: #fff;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.title_placeholder {
		font-size: 25px;
		/* color: #303133; */
		/* font-weight: bold; */
		font-family: 黑体;
		/* font-style: italic; */
	}

	.title {
		box-sizing: border-box;
		padding: 10px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 10px;
		line-height: 1.5;

		color: #303133;
		font-size: 25px;
		font-family: 黑体;
		font-weight: bold;
		/* font-style: italic;	 */
	}

	.title_wrapper {
		height: 30px;
		margin-bottom: 50px;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 10px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 10px;
		font-size: 16px;
		line-height: 1.5;
	}

	.ql-active {
		color: #06c;
	}

	.tui-popup-item {
		/* padding: 34rpx; */
		padding-top: 34rpx;
		padding-bottom: 34rpx;
		padding-left: 15rpx;
		display: flex;
		align-items: flex-start;
		font-size: 25rpx;
		/* position: relative; */
	}

	.tui-start {
		border-top-left-radius: 8rpx;
		border-top-right-radius: 8rpx;
	}

	.tui-last {
		border-bottom-left-radius: 8rpx;
		border-bottom-right-radius: 8rpx;
	}

	.tui-item-active {
		background-color: #444;
	}
	
	.u-popup-slot {
		width: 200px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
