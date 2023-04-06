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
		</view>
	</view>
</template>

<script>
	import myRequest from '../../common/request';
	import tuiModal from '@/components/tui-modal/tui-modal.vue';
	import tuiBubblePopup from '@/components/tui-bubble-popup/tui-bubble-popup.vue';
	import tRtPopup from '@/components/t-rt-popup/t-rt-popup';

	export default {
		components: {
			tuiModal,
			tuiBubblePopup,
			tRtPopup
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

				itemList: [{
						title: '保存',
						icon: 'save-fill'
					},
					{
						title: '取消',
						icon: 'delete-back-fill'
					}
				],
				popupShow: false
			}
		},
		methods: {
			toggle() {
				this.popupShow = !this.popupShow;
			},
			handleClick(index) {
				if (index == 0) {
					this.submit()
				} else if (index == 1) {
					this.show = true;
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
						url: '/pages/note/index'
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
							// TODO: 后续更改is_public字段
							var data = JSON.stringify({
								"content": html_content,
								"title": this.title
							})

							var is_public = true

							myRequest.request(`/note/create?is_public=${is_public}`, 'POST', data).then(
								function(res) {
									console.log(res)
									if (res.statusCode == 200) {
										myRequest.toast('笔记创建成功')
										uni.switchTab({
											url: '/pages/note/index',
											success() {
												let page = getCurrentPages().pop(); //跳转页面成功之后
												if (!page) return;
												page.refresh(); //如果页面存在，则重新刷新页面
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

				// // 找到html中的所有图片的临时地址src，将图片上传到服务器，获取到图片的url，替换html中的临时地址
				// var imgReg = /<img.*?(?:>|\/>)/gi; // 匹配图片中的img标签
				// // 匹配以blob开头的src
				// var srcReg = /src=[\'\"]?blob:([^\'\"]*)[\'\"]?/i;

				// var arr = html_content.match(imgReg); //筛选出所有的img
				// var img_src = [];
				// if (arr) {
				// 	for (var i = 0; i < arr.length; i++) {
				// 		var src = arr[i].match(srcReg);
				// 		//获取图片地址
				// 		if (src && src[1]) {
				// 			img_src.push(src[1]);
				// 		}
				// 	}
				// }

				// for (var i = 0; i < img_src.length; i ++) {

				// 	try {
				// 		var result = await myRequest.uploadFile('/upload/public', img_src[i], "file", {})

				// 		var data = JSON.parse(result.data);
				// 		// 替换html中的临时地址
				// 		html_content = html_content.replace(img_src[i], myRequest.imageUrl() + data.url);
				// 		html_content = html_content.replace("data-local=\"" + img_src[i] + "\"", "")
				// 	} catch(res) {
				// 		myRequest.toast();
				// 		break;
				// 	}

				// } 
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
	@import "./editor-icon.css";

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
</style>
