# Instance

与数据相关的实例方法有3个，分别是vm.$set、vm.$delete和vm.$watch。  
与事件相关的实例方法有4个，分别是vm.$on、vm.$emit、vm.$off和vm.$once。  

## vm.$on、vm.$emity用法

```js
<template>
    <div>
        <div>父组件的toCity{{toCity}}</div>
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
<template>
 
<script>
  import TrainCity from "./train-city";
  export default {
    name:'index',
    components: {TrainCity},
    data () {
      return {
        toCity:"北京"
      }
    },
    methods:{
      updateCity(data){//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:'+this.toCity)
      }
    }
  }
</script>

```

```js
<template>
  <div class="container">
    <h3>这是接收到的父组件传过来的参数:{{ParentData}}</h3> 
    <br/><button @click='sendToParent(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
<script>
  export default {
    name:'trainCity',
    props:['ParentData'], // 用来接收父组件传给子组件的数据
    methods:{
      sendToParent(val) {
        let data = {
          cityname: val
        };
        this.$emit('showCityName',data);//sendToParent方法触发showCityName事件，并传参到监听方法
      }
    }
  }
</script>

```

与生命周期相关的实例方法有4个，分别是vm.$mount、vm.$forceUpdate、vm.$nextTick和vm.$destory。  
(`this.$nextTick()`在页面交互，尤其是从后台获取数据后重新生成dom对象之后的操作有很大的优势，这里只是简单的例子，实际应用中更为好用)  