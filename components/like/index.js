// components/like/index.js
Component({
  //一些组件选项
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。
   */  
  lifetimes:{
    // 在组件实例刚刚被创建时执行
     created()
     {

     },
     // 在组件进入页面节点树时执行
      attached(){

      },
     //  在组件实例被从页面节点移除时执行
      detached(){

      },
      // 在组件在视图层布局完成后执行
      ready(){
        
      }
  },
  
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否点赞
    like:{
      type : Boolean,
      value :false
    },
    // 点赞个数
    count : {
      type :Number,
      value : 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // MVVM数据绑定
    yesSrc :'images/like.png',
    noSrc :'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // onLike 方法是实现点击切换喜欢不喜欢，以及count加减
    onLike:function(event)
    {
       var like = this.properties.like;
       var count = this.properties.count;
      //  like的默认值为false
       count = like? count-1 : count+1;
       this.setData({
         count:count,
         like : !like
       })

      //  激活点赞状态
      let behavior = this.properties.like ?'like' :'cancel';
      // 监听一个事件
      this.triggerEvent('like',{
       behavior : behavior
      },{})
    }
  },

  
})
