Page({

  data: {
    SHOW_TOP: true,
  },

  onLoad: function (options) {
    console.log("AAAAAAAAA")
    var myDate = new Date();
    var isShowed = wx.getStorageSync("tip")
    if (isShowed != 1) {
      setTimeout(() => {
        this.setData({
          SHOW_TOP: false
        })
        wx.setStorageSync("tip", 1)
      }, 2 * 1000)
    } else {
      this.setData({
        SHOW_TOP: false
      })
    }
  },

  goSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  goPhoto: function () {
    wx.navigateTo({
      url: '../photo/photo',
    })
  }
})