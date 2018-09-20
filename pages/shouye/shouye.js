//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ads: [
      { msg: '今日送100元优惠卷(支持在线支付)' },
      { msg: '今日送200元优惠卷(支持在线支付)' },
      { msg: '今日送300元优惠卷(支持在线支付)' },
      { msg: '今日送400元优惠卷(支持在线支付)' }

    ],
    foodtypes:[
      { name:'热销'},
      { name: '新品'},
      { name: '下午茶' },
      { name: '滋味盖浇饭' },
      { name: '日式小吃' },
      { name: '系列套餐' },
      { name: '特色炖汤' },
      { name: '韩系小吃' },
      { name: '非洲小吃' },
      { name: '山珍海味' },
        ],
    foodinfo:[
      {
        id: 0, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellecount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 3, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 1, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 2.5, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 2, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 3, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 3, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 2, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, {id: 3, value: '红烧味'}]
      },
      {
        id: 4, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 3, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 5, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 1, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 6, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 3, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 7, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 4, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      },
      {
        id: 8, img: '../../asset/food2.jpg', title: '五花肉拌饭', send: '配送一碗米饭哟!', sellercount: '月售448 | 好评率100%', price: 51, oldprice: 61, star: 5, ordercount: 0, taste: [{ id: 0, value: '香葱味' }, { id: 1, value: '腊肉味' }, { id: 2, value: '烤翅味' }, { id: 3, value: '红烧味' }]
      }
    ],
    
    orderclass:'show1',
    sellerclass: '',
    selecteclass:'unselect',
    styleindex:'',
    bool:'',
    tastearr:'',
    foodlistid:0,
    tag1:'true',
    tag2:'',
    flag:'',
    flag2:'true'
  },
  onLoad: function () {
   },
  orderclick: function () {
    var that=this;
    if (this.data.orderclass == 'show1' ) {
      return
    }
    
    this.setData({
      orderclass: 'show1',
      sellerclass: '',
      tag1:'true',
      tag2:''
    })
  },
  sellerclick: function () {
   
    this.setData({
      sellerclass: 'show2',
      orderclass: '',
      tag2:'true',
      tag1:''
    })
  },
  minustap:function(e){
    var i=e.currentTarget.dataset.id
    var arr=this.data.foodinfo;
     if(arr[i].ordercount>1){
       wx.showToast({
         title: '请到购物中心删除订单',
         icon: 'success',
         duration: 2200
       })
       
     }
      console.log(e);
  },
  plustap:function(e){
    var i = e.currentTarget.dataset.id;
    var arr=this.data.foodinfo;
    var taste=arr[i].taste;
    this.setData({
      
      bool: 'true',
      tastearr:taste,
      tasteid:0,
      foodlistid:i
    })
    // wx.showModal({
    //   title: '选择口味',
    //   content: '香葱味....',
    //   success: function (res) {
    //     if (res.confirm) {
    //      
    //     } else if (res.cancel) {
    //       return
    //     }
    //   }
    //   })
  },
  selectetap:function(e){
     var index=e.currentTarget.dataset.index;
     console.log(index)
      this.setData({
        styleindex:index
      })
  },
  isoktap:function(e){
    var i=this.data.foodlistid
    var arr = this.data.foodinfo;
    var counts = ++arr[i].ordercount;
    this.setData({
      bool:'',
      foodinfo: arr,
      
    })
  },
  tastetap:function(e){
    var i=e.currentTarget.dataset.id
   this.setData({
     tasteid:i
   })
  },
  jumpdetail:function(){
    wx.navigateTo({
      url: '../shopdetail/shopdetail',
    })
  },
  gethongbao:function(){
       this.setData({
         flag:true,
         flag2:''
       })

  },
  sure:function(){
    this.setData({
      flag:''
    })
  }

})
