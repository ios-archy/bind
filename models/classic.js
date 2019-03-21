import {HTTP} from '../utils/http.js'

 class ClassicModel extends HTTP {
    //  获取首页期刊
    getLatest(sCallback){
      this.request({
        url :'classic/latest',
        success:(res)=>
        {
          // 这里需要使用回调函数
          sCallback(res)
          this._setLatestIndex(res.index)
        }
      })
    } 

    // 获取前一期或者后一期期刊
    getClassic(index,nextOrprevious,scallback){
      // 从缓存中取得数据，然后再存入缓存
      //key 
      this.request({
        url : 'classic/' + index +'/'+nextOrprevious,
        success:(res)=>{
          scallback(res)
        }
      })
    }

    // 是否为第一期
    isFirst(index)
    {
      return index ==1 ? true : false
    }

    // 是否为最后一期
    isLatest(index)
    {
      let latestIndex = this._getLatestIndex()
      return latestIndex == index ? true : false
    }

    // 设置成最后一期
    _setLatestIndex(index)
    {
      wx.setStorageSync('latest', index)
    }

    //得到最后一期
    _getLatestIndex()
    {
      let index = wx.getStorageSync('latest')
      return index
    }
 }

 export {
  ClassicModel
 }