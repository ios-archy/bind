import {config} from 'config.js'

const tips = {
  '1': '抱歉出现了一个错误',
  '1000': 'appkey错误',
  '3000': '期刊不存在'
}

class HTTP {
   
   constructor(){
     this.baseRestUrl = config.api_blink_url
   }

  request(params)
  {
   var that = this
   var url = this.baseRestUrl + params.url

    if(!params.method)
    {
      params.method ='GET'
    }
    wx.request({
      url: url,
      method : params.method,
      data :params.data,
      header : {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      //成功后回调函数
      success:(res)=>{
        //判断以2开头的状态码为正确
        //异常不要返回到回调中，就在request中处理，记录日志并showtoast一个统一的错误
        let code = res.statusCode.toString()
        var startChar = code.charAt(0)
        if (startChar == '2')
        {
          // 如果params.success存在则才去执行params.success(res.data)
           params.success && params.success(res.data)
        }else
        {
          params.error && params.error(res)
        }
      },
      fail:function(err)
      {
        params.fail && params.fail(err)
      }
    })
  }
  
  _show_error(error_code)
  {
    if(!error_code)
    {
      error_code = 1;
    }
     const tip = tips[error_code]
     wx.showToast({
       title: tip ? tip : tips[1],
       icon :'none',
       duration:2000
     })
  }
}

export {HTTP}