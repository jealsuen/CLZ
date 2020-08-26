const app = getApp()

Page({
  data: {
    showLoadFail: false,
    showLoading: false,
    page_name: "",
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})