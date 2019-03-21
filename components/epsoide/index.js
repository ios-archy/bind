// components/epsoide/index.js
Component({
  options:{
    mutipleSlots:true  //在组件定义的时候选项中启用多slot支持
  },
  /**
  * 组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。
  */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    created() {
      console.log('created')
    },
    // 在组件进入页面节点树时执行
    attached() {
      console.log('attached')
     let date = new Date()
     let year = date.getFullYear()
     let month = date.getMonth()
     
      this.setData({
        year:year,
        month:this.data.months[month]
      })
    },
    //  在组件实例被从页面节点移除时执行
    detached() {
      console.log('detached')
    },
    // 在组件在视图层布局完成后执行
    ready() {
      console.log('ready')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 期刊号
    index :{
      type: String,
      observer:'_propertyindexChange'
      // observer : function(newVal,oldVal,changedPath){
      //  /*
      //  1.属性被改变时执行的(可选)函数,也可以写成在methods中定义的方法名字符串，如：'_propertyChange'
      //  2.通常newVal是新设置的数据值，oldVal是旧数据
      //  3.当index数据类型是number时，这样处理不行，因为小程序会自动转化，而string类型又会因为无限递归而报错,所以我们在data中顶一个新的变量'_index'
      //  4.数据给它赋值时，注意使用_index,在组件中的调用也必须是{{_index}}而不能使用{{index}}
      //  */
      //  let val = newVal < 10 ? '0' +newVal : newVal
      //  this.setData({
      //    _index : val
      //  })
      //  console.log(newVal)
      //  console.log(oldVal)
      // }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     months:[
     '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
     ],
     year :0,
     month:'',
     //处理index的赋值
     _index:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 属性index值改变
    _propertyindexChange: function (newVal, oldVal, changedPath)
    {
      let val = newVal < 10 ? '0' + newVal : newVal
      this.setData({
        _index: val
      })
      console.log(newVal)
      console.log(oldVal)
    }
  }
})
