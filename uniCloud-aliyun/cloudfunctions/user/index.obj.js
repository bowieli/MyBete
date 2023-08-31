
module.exports = {
	_before: function () { // 通用预处理器

	},
	add: async function(){
		const db = uniCloud.database()
		const clientInfo = this.getClientInfo()
		const rescx = await db.collection('user')
		.where({
			deviceiId:clientInfo.deviceId
		})
		.get()
		.then((res)=>{
			return res
		}).catch((err)=>{
			//由于查询失败将不会继续进行下面操作
			return {
				"affectedDocs":1,
				"data":[]
			}
		})
		if(rescx.affectedDocs <= 0){
			const resxz = await db.collection('user')
			.add([{
				deviceiId:clientInfo.deviceId,
				os:clientInfo.os,
			}])
			.then((res)=>{
				return res
			}).catch((err)=>{
				return err;
			})
			
			if(resxz.inserted > 0) {
				return {
					errCode: 0,
					errMsg: '初始化成功'
				}
			} else{
				return {
					errCode: 1,
					errMsg: '初始化失败'
				}
			}
		} else{
			return {
				errCode: 0,
				errMsg: '用户已经存在'
			}
		}
		
	}
}
