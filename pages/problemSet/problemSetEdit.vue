<template>
	<view>
		<view class="status-bar">
			<!--自定义navbar-->
			<uni-nav-bar title="题库编辑" background-color="#00aaff" color="#FFFFFF" status-bar="true">
				<block slot="left">
					<view class="note-navbar">
						<uni-icons type="left" color="#FFFFFF" size="18" @click="back()" />
					</view>
				</block>
			</uni-nav-bar>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad: function() {
			
		},
		methods: {
			
		},
	}
</script>

<style>
	.status-bar {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
	}
</style>