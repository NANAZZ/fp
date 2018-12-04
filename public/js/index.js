// $(function(){
//   $.ajax({
//     url:"http://localhost:3000/index/getIndexProducts",
//     type:"get",
//     dataType:"json",//ajax可自动将json转为obj
//     success:function(res){
//       new Vue({
//         el:"#main>div:nth-child(2)>h3:first-child",
//         data:{res}
//       })
//     }
//   })//return promise
//           //open(res)
//   //.then(function(res){...}) 1.11.3版本js用success，3.2.1版本用.then
// })
new Vue({
  el:"#main>div:nth-child(2)>h3:first-child",
  data:{
    res:[
      {price:0},
      {price:0},
      {price:0}
    ]
  },
  mounted(){
    //this->vm
    axios.get("http://localhost:3000/index/getIndexProducts").then(res=>this.res=res.data)
  }
})