//index.js
//获取应用实例
const app = getApp()
import service from '../../utils/service.js'
Page({
  data: {
    id:'',
    res:'',
    ishot:'',
    summaryShow:false,
    detailshow:'',
    detailHidden: '',
    replayList:'',
    total: '',
    casts:'',
    loading:true
    // time:'',
    // author:'',
    // readNum:'',
    // content:'',
    // replsList:'',
    // filmImage:'',
    // filmDetail:'',
    // actor:'',
    // filmtype:'',
    // countries:'',
    // durations:'',
    // summary:''
  },

  onLoad: function (options) {
    this.setData({
      id: options.id, 
      ishot: options.ishot
    })
    this.getDetails();
    this.getcomments()
  },
  showsummary:function(){
    
    this.setData({
      summaryShow: !this.data.summaryShow
    })
  },
  jumpVideo:function(e){
    wx.navigateTo({
      url: '../film/film?url=' + this.data.trailer_urls[e.currentTarget.id]
    })
    
  },
  previewImage:function(e){
    let current = e.currentTarget.id,
    castsall = this.data.casts,
    imagAll=[];    
    for (let i = 0; i < castsall.length;i++){
      imagAll.push(castsall[i].avatars.large)
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: imagAll // 需要预览的图片http链接列表
    })
  },
  getcomments: function () {
    let url = service.commentsMovie.replace(":id", this.data.id);
    let self = this;
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        "Content-Type": "json" // 默认值
      },
      success: function (res) {
        if (res.statusCode == 200) {
          let comments = res.data.comments.slice(0, 6)
          self.setData({
            replayList:comments,
            total: res.data.total
            // content: res.data.data.content,
            // replsList: res.data.data.replies,
            // filmImage: res.data.images.small,
            // filmtype: res.data.tags,
            // countries: res.data.countries,
            // durations: res.data.durations,
            // mainland_pubdate: res.data.mainland_pubdate,
            // summary: res.data.summary
          })
        }
      }
    })
  },

  getDetails:function(){
    let detailsId = this.data.id;
    let self = this;
    let url = service.movieDetail + this.data.id;
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        "Content-Type": "json" // 默认值
      },
      success: function (res) {
        if (res.statusCode == 200) {
          var summary = res.data.summary,
            newSummaryTop = summary.substring(0, 52),
            newSummary = summary.substring(52, summary.length);
            self.setData({
              res: res.data,
              detailshow: newSummaryTop,
              detailHidden: summary,
              trailer_urls: res.data.trailer_urls,
              casts:res.data.casts,
              loading:false
              // content: res.data.data.content,
              // replsList: res.data.data.replies,
              // filmImage: res.data.images.small,
              // filmtype: res.data.tags,
              // countries: res.data.countries,
              // durations: res.data.durations,
              // mainland_pubdate: res.data.mainland_pubdate,
              // summary: res.data.summary
            })
        }
      }
    })
  }

})
