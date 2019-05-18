const app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
      result:'优惠卷金额',
      array: ['1号货架', '2号货架', '3号货架', '4号货架'],
      index: '',
  },
  //选择货架
    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },

    switch1Change(e) {
        console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    },
    couponNname(e){
        console.log(e.detail.value)

    },
    
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
    getScancode:function(){
        var that = this
        wx.scanCode({
            success: (res) => {
                var result = res.result;
                that.setData({
                    result: result,
                })
            }
        })

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