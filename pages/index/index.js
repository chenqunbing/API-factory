var app=getApp();

Page({
  data: {
  },
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://api.it120.cc/'+app.globalData.subDomain+'/notice/list',
      success:function(res){
        // console.log(res);
        if(res.data.code==0){
          that.setData({
            notes:res.data.data.dataList
          })
          // console.log(that.data);
          // console.log(that.data.notes);
        }
      }
    })
    // console.log(this.data);
    setTimeout(function(){
      console.log(that.data);
    },4000);
    // console.log(that.data.notes);
  },
  toDeatil:function(event){
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'detail/detail?id='+id,
    })
 
  
  }
  
  
})