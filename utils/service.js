
let basePath = 'https://douban.uieee.com'
let baseFooter = ''
export default {
  hotMovie:basePath+'/v2/movie/in_theaters'+baseFooter,
  
  comingMovie:basePath+
    '/v2/movie/coming_soon'
  +baseFooter,
  top250Movie:basePath+
    '/v2/movie/top250'
  +baseFooter,
  reputationMovie:basePath+
    '/v2/movie/weekly'
  +baseFooter,
  newMovie:basePath+
    '/v2/movie/new_movies'
  +baseFooter,
  northUsaMovie:basePath+
    '/v2/movie/us_box'
  +baseFooter,
  commentsMovie:basePath+
    '/v2/movie/subject/:id/comments'   //    影评
  +baseFooter,
  movieDetail:basePath+
    '/v2/movie/subject/'  //    电影详情
  +baseFooter,
  movieSearch:basePath+
    '/v2/movie/search?count=10&q=' //    电影搜索
  +baseFooter,
  bookNew:basePath+
    '/v2/book/search?tag=新书&count=10'   //    新书
  +baseFooter,
  bookFiction:basePath+
    '/v2/book/search?q=虚构类&count=10'   //    虚构类的图书
  +baseFooter,
  bookNoFiction:basePath+
    '/v2/book/search?q=非虚构类&count=10'   //    非虚构类的图书
  +baseFooter,
  bookStore:basePath+
    '/v2/book/search?tag=豆瓣&count=10'   //    豆瓣书店
  +baseFooter,
  bookOriginal:basePath+
    '/v2/book/search?tag=原创&count=10'   //    原创
  +baseFooter,
  bookSpecialPrice:basePath+
    '/v2/book/search?tag=电子书&count=10'   //    特价电子书
  +baseFooter,
  bookSelling:basePath+
    '/v2/book/search?tag=畅销&count=10'   //    畅销
  +baseFooter,
  musicChinese:basePath+
    'v2/music/search?tag=华语&count=10'     //    华语新碟榜
  +baseFooter,
  musicUsa:basePath+
    'v2/music/search?tag=欧美&count=10'     //    欧美新碟榜
  +baseFooter,
  musicJapanKorea:basePath+
    'v2/music/search?tag=日韩&count=10'     //    日韩新碟榜
  +baseFooter,
  musicHot:basePath+
    'v2/music/search?tag=热门&count=10'     //    热门单曲榜
  +baseFooter,
  cityHot:basePath+
    'v2/event/list?loc=118282&count=10'     //    城市  热门活动
  +baseFooter,
  cityMovie:basePath+
    'v2/event/list?loc=118282&start=10&count=10'     //    城市---电影类
  +baseFooter,
  cityMusic:basePath+
    'v2/event/list?loc=108288&count=10'     //    城市---音乐类
  +baseFooter,
  cityTravel:basePath+
    'v2/event/list?loc=108296&count=10'     //    城市---旅行类
  +baseFooter,
  citySports:basePath+
  'v2/event/list?loc=118281&count=10' + baseFooter     //    城市---运动类
  
}