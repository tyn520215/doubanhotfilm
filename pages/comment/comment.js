// pages/comment/comment.js
import service from '../../utils/service.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    total:'',
    page:1,
    loading: true,
    no_list: false,
    addFont: false,
    doubleScroll: true,
    list: [],
  },
  addList:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    })
    this.getcomments();
  },
  getcomments: function () {
    let url = service.commentsMovie.replace(":id", this.data.id) + '?start=' + this.data.page;
    let self = this;
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        "Content-Type": "json" // 默认值
      },
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data.comments.length > 0) {
            self.data.list.push(...res.data.comments)
            self.setData({
              list: self.data.list,
              loading: false,
              addFont: true,
              doubleScroll: true,
              total: res.data.total
            })
          } else {
            self.setData({
              no_list: true,
              loading: false,
              addFont: false,
              doubleScroll: true,
              total: res.data.total
            })
          }

        }   
      }
    })
  },
  addComment:function(){
    if (this.data.doubleScroll) {
      let newpage = this.data.page + 1;
      let that = this
      this.setData({
        page: newpage,
        loading: true,
        addFont: false,
        doubleScroll: false
      })
      setTimeout(function () {
        that.getcomments()
      }, 2000)
    }
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