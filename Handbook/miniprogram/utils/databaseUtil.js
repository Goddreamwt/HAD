var app = getApp()

module.exports = {
  onGetOpenid: onGetOpenid,//获取OpenID
  getSetting: getSetting,//获取用户信息
  searchDB: searchDB,//搜索数据库信息
  addDB: addDB,//添加数据库
}


/**
 * 获取OpenID
 */
function onGetOpenid(that, callBack, callFunName) {
  wx.cloud.callFunction({
    name: callFunName,
    data: {},
    success: res => {
      callBack(res.result.openid);
    },
    fail: err => {
      console.error('[云函数] [login] 调用失败', err)
    }
  })
}


/**
 * 获取用户信息
 */
function getSetting(that) {
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: res => {
            that.setData({
              avatarUrl: res.userInfo.avatarUrl,
              userInfo: res.userInfo
            })
          }
        })
      }
    }
  })
}

/**
 * 搜索数据库信息
 */
function searchDB(that, callBack, dbName, whereData) {
  const db = wx.cloud.database()
  db.collection(dbName).where(whereData).get({
    success: res => {
      callBack(res);
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '查询记录失败'
      })
      console.error('[数据库] [查询记录] 失败：', err)
    }
  })
}

/**
 * 添加数据库
 */
function addDB(that, callBack, dbName,data) {
  const db = wx.cloud.database()
  db.collection(dbName).add({
    data:data,
    success: res => {
      callBack(res);
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '新增记录失败'
      })
      console.error('[数据库] [新增记录] 失败：', err)
    }
  })
}
