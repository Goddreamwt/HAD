var animationUtil = require('./../../utils/animationUtil.js')
var databaseUtil = require('./../../utils/databaseUtil.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logged: false,//是否登录
    animationMiddleHeaderItem:{},//心跳动画
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    animationUtil.animationMiddleHeaderItem(this);
    databaseUtil.onGetOpenid(this,this.openidCallBack,'login');
    databaseUtil.getSetting(this);
  },

  /**
   * 回调_获取oepnid
   */
  openidCallBack: function (event){
    wx.setStorageSync("openid", event)
  },

  /*
   *点击_添加习惯
   */
  addSubmit: function (event) {

    wx.redirectTo({
      url: '../addHabit/addHabit',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})