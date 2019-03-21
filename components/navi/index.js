// components/navi/index.js
Component({
  options:{
    multipleSlots:true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    title : String,
    first : Boolean,
    latest : Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc : 'images/triangle.dis@left.png',
    leftSrc:'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event)
    {
      // 如果是最新一期，则不让触发left事件
     if(!this.properties.latest)
     {
       this.triggerEvent('left',{},{})
     }
    },
    onRight:function()
    {
      // 如果是第一期，则不让触发right事件
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
