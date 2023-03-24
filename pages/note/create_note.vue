<template>
	<view>
		<view class="container">
			<!--自定义navbar-->
			<view>
				<view>
					<uni-nav-bar shadow="true" title="创建笔记">
						
						<block slot="left">
							<view class="note-navbar">
								<!-- <uni-icons type="closeempty" color="#e45656" size="18" /> -->
								<i-icon size="20px" color="#e45656" name="close-fill"></i-icon>
							</view>
						</block>
						
						<block slot="right">
							<view class="note-navbar">
								<i-icon size="20px" color="#f29100" name="price-tag-fill"></i-icon>
								<i-icon size="20px" color="#666" name="more-2-fill"></i-icon>
								<!-- <uni-icons type="checkmarkempty" color="#19be6b" size="18"></uni-icons> -->
								<i-icon size="20px" color="#19be6b" name="check-fill"></i-icon>
			
							</view>
							
						</block>
					</uni-nav-bar>
				</view>
			</view>
			
			<view class="title_wrapper">
				<textarea class="title" :placeholder="title_placeholder" :maxlength="title_maxlength" placeholder-class="title_placeholder"></textarea>
			</view>
			
			<!--分界线-->
			<u-line></u-line>
			
			<!--笔记内容-->
			<view class="page-body">			
				<view class='wrapper'>
				
					<view class="editor-wrapper">
						<editor id="editor" class="ql-container" :placeholder="content_placeholder" showImgSize showImgToolbar showImgResize
						 @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
						</editor>
					</view>
					
					<view class='toolbar' @tap="format" style="height: 120px;overflow-y: auto;">
						<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold"></view>
						<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic"></view>
						<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian" data-name="underline"></view>
						<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian" data-name="strike"></view>
						<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi" data-name="align"
						 data-value="left"></view>
						<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi" data-name="align"
						 data-value="center"></view>
						<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi" data-name="align"
						 data-value="right"></view>
						<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi" data-name="align"
						 data-value="justify"></view>
						<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height" data-name="lineHeight"
						 data-value="2"></view>
						<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing" data-name="letterSpacing"
						 data-value="2em"></view>
						<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju" data-name="marginTop"
						 data-value="20px"></view>
						<view :class="formats.previewarginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju" data-name="marginBottom"
						 data-value="20px"></view>
						<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
						<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font" data-name="fontFamily" data-value="Pacifico"></view>
						<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize" data-name="fontSize"
						 data-value="24px"></view>
					
						<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color" data-name="color"
						 data-value="#0000ff"></view>
						<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''" class="iconfont icon-fontbgcolor"
						 data-name="backgroundColor" data-value="#00ff00"></view>
					
						<view class="iconfont icon-date" @tap="insertDate"></view>
						<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
						<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie" data-name="list"
						 data-value="ordered"></view>
						<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie" data-name="list"
						 data-value="bullet"></view>
						<view class="iconfont icon-undo" @tap="undo"></view>
						<view class="iconfont icon-redo" @tap="redo"></view>
					
						<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
						<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
						<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
						<view class="iconfont icon-charutupian" @tap="insertImage"></view>
						<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1" data-name="header"
						 :data-value="1"></view>
						<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao" data-name="script"
						 data-value="sub"></view>
						<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao" data-name="script"
						 data-value="super"></view>
						<view class="iconfont icon-shanchu" @tap="clear"></view>
						<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl" data-name="direction"
						 data-value="rtl"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				readOnly: false,
				formats: {},
				title_placeholder: "笔记标题",
				title_maxlength: 50,
				content_placeholder: "笔记内容"
			}
		},
		methods: {
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
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.editorCtx.insertImage({
							src: res.tempFilePaths[0],
							alt: '图像',
							success: function() {
								console.log('insert image success')
							}
						})
					}
				})
			},
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
</style>
