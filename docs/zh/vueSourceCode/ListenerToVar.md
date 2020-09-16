# 监听数据变化

## object的变化侦测

js 提供 Object.defineProperty( )方法来监听数据是否有被读取或者修改。  
  
```js
let car = {}
let val = 3000
Object.defineProperty(car, 'price', {
  enumerable: true,
  configurable: true,
  get(){
    console.log('price属性被读取了')
    return val
  },
  set(newVal){
    console.log('price属性被修改了')
    val = newVal
  }
})

car.price
price属性被读取了
3000

car.price = 4000
price属性被修改了
4000
```
  
但当我们向Object数据里添加一对新的key/value或删除一对已有的key/value时，它是无法观测到的。导致当我们对Object数据添加或删除值时，无法通知依赖，无法驱动视图进行响应式更新。  
  
为了解决这个问题，Vue增加了两个全局API：Vue.set和Vue.delete。  

## 谁用到了数据，谁就是依赖
  
谁依赖了这个数据，就放入依赖数组，并通过建立watch类（watch类就是这个谁）从而谁用到了数据，谁就是依赖，就会被创建一个Watch实例。当数据发生改变时，不用直接通知依赖，而是通过对应的Watch实例，由Watch去通知真正的视图。  
  
::: tip
在getter中收集依赖，在setter中通知依赖更新，以及封装了依赖管理器Dep，用于储存收集到的依赖。

为了每一个依赖都创建了一个Watcher实例，当数据变化，通知Watcher实例，由Watcher实例去做真实的更新操作。
:::  
  
::: tip 整个流程：

1. Data通过observer转换成了getter/setter的形式来追踪变化。

2. 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。

3. 当数据发生变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
  
4. Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。  
:::
  
  
## Array的变化侦测

array无法使用`Object.defineProperty( )`方法，但是依旧可以在getter里收集依赖。平时开发时，array也会被放在一个data的对象中。

```js
    let arr = [1,2,3]
    arr.push(4)
    Array.prototype.newPush = function(val){
        console.log('arr被修改了')
        this.push(val)
    }
    arr.newPush(4)
```

增加一个newPush方法，当我们添加数组时，就会得知值被添加了。使用拦截器在使用原生方法之前来告知这个array被改变了。