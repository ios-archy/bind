// pages/classic/index.js

import { ClassicModel } from '../../models/classic.js'
let classicModel = new ClassicModel()

import { LikeModel } from '../../models/like.js'
let likeModel = new LikeModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // setData会把数据放到data中完成数据更新，所以我们先声明classic，方便我们看清楚组件、页面中我们所使用的数据
    classic:null,
    // 默认获取的是最新一期，所以设置latest为true，first为false
    first:false,
    latest:true,
    order_id:244
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
    classicModel.getLatest((res)=>{
      console.log(res)
      //数据绑定
      this.setData({
        classic : res
      })
    })
  },

  // 喜欢、不喜欢
  onLike:function(event){
    let behavior = event.detail.behavior
    likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
  },

  // 下一期
  onNext:function(event){
   this._updateClassic('next')
  },

  // 上一期
  onPrevious:function(event)
  {
  this._updateClassic('previous')
  },
   
  // 方法集成
  _updateClassic:function(nextOrPrevious)
  {
     let index = this.data.classic.index
     classicModel.getClassic(index,nextOrPrevious,(res)=>{
       console.log(res)
       this.setData({
         classic :res,
         latest : classicModel.isLatest(res.index),
         first : classicModel.isFirst(res.index)
       })
     })
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