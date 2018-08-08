import service from '../../utils/service.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: true,
    inputVal: "",
    list:'',
    no_list_data:false,
    loading:false
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  searchFilm:function(e){
    this.setData({
      loading: true
    })
    let self = this;
    let url = service.movieSearch + e.detail.value;
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        header: {
          "Content-Type": "json" // 默认值
        },
        success: function (res) {
          if (res.statusCode == 200) {
            let no_data=false;
            if (res.data.subjects.length<=0){
              no_data = true
            }
            self.setData({
              list: res.data.subjects,
              no_list_data: no_data,
              loading:false
            })

          }
        }
      })
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
    this.setData({
      inputShowed: true
    });
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