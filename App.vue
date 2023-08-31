<script>
	export default {
		globalData: {
			deviceId: 0
		},
		onLaunch: function() {
			plus.screen.lockOrientation('portrait-primary')
			console.log('App Launch')
			
			//第一次进入时把信息存入数据库
			const user = uniCloud.importObject('user')
			user.add()
			//获取设备id方便和数据库关联
			getApp().globalData.deviceId = uni.getDeviceInfo().deviceId
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
