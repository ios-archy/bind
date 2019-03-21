import {HTTP} from '../utils/http.js'

class LikeModel extends HTTP {

  like(behavior,artID,catagory)
  {
    let url = behavior == 'like' ? 'like' :'like/cancel'
    this.request({
      url : url,
      method:'POST',
      data :{
        art_id: artID,
        type :catagory
      }
    })
  }

}

export { LikeModel}