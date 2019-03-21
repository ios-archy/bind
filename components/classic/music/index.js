// components/classic/music/index.js
import { classicBehavior} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
    * 组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。
    */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    created() {

    },
    // 在组件进入页面节点树时执行
    //只能在wx:if条件下才执行
    attached() {
     this._recoverStatus()
     this._monitorSwitch()
    },
    //  在组件实例被从页面节点移除时执行
    detached() {

    },
    // 在组件在视图层布局完成后执行
    ready() {

    }
  },

   /*
   1.定义和使用 behaviors

　　2.behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。

　　3.每个 behavior 可以包含一组属性、数据、生命周期函数和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。每个组件可以引用多个 behavior 。 behavior 也可以引用其他 behavior 。
    */
  behaviors: [classicBehavior],
  
  /**
   * 组件的属性列表
   */

  properties: {
   src:String,
   title : String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc :'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击中间播放、暂停按钮
    onPlay:function(event){
       if(!this.data.playing)
       {
         console.log('播放')
         this.setData({
           playing :true
         })
         //音频名称
         mMgr.title = this.properties.title
         //音频路径
         mMgr.src = this.properties.src
         //音频配图
         mMgr.coverImgUrl = this.properties.img
       }else
       {
         console.log('暂停')
         this.setData({
           playing:false,
         })
         mMgr.pause()
       }
    },

     /**
      * 设置中间播放按钮的状态
      */
    _recoverStatus:function(event)
    {
      // 判断播放器播放状态
     if(mMgr.paused)
     {
       this.setData({
         playing:false
       })
       return
     }

    //  判断当前播放路径是否跟当前页面路径一致
     if(mMgr.src == this.properties.src)
     {
       this.setData({
         playing : true
       })
     }
    },

    /**
     * 监听播放器状态
     */
    _monitorSwitch:function(){
      
      mMgr.onPlay(()=>{
        console.log('onPlay')
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        console.log('onPause')
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        console.log('onStop')
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        console.log('onEnded')
        this._recoverStatus()
      })
    }
  }
})
