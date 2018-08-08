//index.js
//获取应用实例
const app = getApp()
import service from '../../utils/service.js'
Page({
  data: {
    motto: 'gakkisama',
    userInfo: {},
    hasUserInfo: false,
    loading:true,
    no_list: false,
    addFont: false,
    doubleScroll:true,
    selectid:'all',
    list:[],
    url: service.hotMovie,
    page:1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: ["影院热映", "即将上映"],
    isTheaters:true,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  getData: function () {
    let self = this;
    wx.request({
      url: self.data.url, 
      header: { "Content-Type": "json"},
      success: function (res) {
        if (res.statusCode == 200){
          if (res.data.subjects.length>0){
            self.data.list.push(...res.data.subjects)
            self.setData({
              list: self.data.list,
              loading: false,
              addFont: true,
              doubleScroll: true
            })
          }else{
            self.setData({
              no_list: true,
              loading: false,
              addFont: false,
              doubleScroll:true
            })
          }
        
        } 
      }
    })
  },
  addList:function(){
    if(this.data.doubleScroll){
      let newpage = this.data.page + 1;
      let that = this
      this.setData({
        page: newpage,
        loading: true,
        addFont: false,
        doubleScroll:false
      })
      setTimeout(function () {
        that.getData()
      }, 2000)
    }

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  tapName: function (event){ 
    var newUrl = '';
    if (event.currentTarget.id == 0){
      newUrl = service.hotMovie
      this.setData({
      isTheaters:true
      })
    }else{
      newUrl = service.comingMovie
      this.setData({
        isTheaters: false
      })
    }
    this.setData({
      selectid: this.data.tabs[event.currentTarget.id],
      url: newUrl,
      page: 1,
      loading:true,
      list:[],
      no_list: false,
      doubleScroll:true,
      activeIndex: event.currentTarget.id,
      sliderOffset: event.currentTarget.offsetLeft,
    })
    this.getData()
  },
  onLoad: function () {
    this.getData()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow:function(){

  },
  // 下拉刷新
  onPullDownRefresh() {
    this.setData({
      list: [],
      page: 1,
      loading: true,
      no_list: false,
      addFont: false,})
    this.getData()
      .then(() => wx.stopPullDownRefresh())
  },

  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
