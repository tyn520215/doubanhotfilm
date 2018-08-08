const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var fittler = {
  getTab: function (ele) {
    switch (ele) {
      case 'all':
        return '全部'
        break;
      case 'good':
        return '精华'
        break;
      case 'share':
        return '分享'
        break;
      case 'job':
        return '工作'
        break;
      case 'ask':
        return '问答'
        break;
    }

  },
  getName: function (ele) {
    var len = ele.length, allName = ''
    for (var i = 0; i < len; i++) {
      allName += ele[i].name + '、'
    }
    return allName
  },
  getTag: function (ele) {
    var tag = ''
    for (var i = 0; i < 2; i++) {
      tag += ele[i] + '、'
    }
    return tag
  },
  getSubString: function (str, start, end) {
    var newStr = str
    return newStr.toString().substring(start, end)
  },
  getCommentNum: function (num) {
    var newNum = num / 10000
    return newNum.toString().substring(0, 4)
  }
}




module.exports = {
  formatTime: formatTime,
  getTab: fittler.getTab,
  getName: fittler.getName,
  getTag: fittler.getTag,
  getSubString: fittler.getSubString,
  getCommentNum: fittler.getCommentNum
}
