# 全局API篇

全局API一共有12个，分别是Vue.extend、Vue.nextTick、Vue.set、Vue.delete、Vue.directive、Vue.filter、Vue.component、Vue.use、Vue.mixin、Vue.observable、Vue.version。  

## Vue.extend

```js
Vue.extend( options )
参数：
* {Object} options
作用：
使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数
```

## Vue.nextTick

```js
Vue.nextTick( [callback, context] ) 
参数：
* {Function} [callback]
* {Object} [context]
作用：
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
```

## Vue.set

```js
Vue.set( target, propertyName/index, value )
参数：
* {Object | Array} target
* {string | number} propertyName/index
* {any} value
作用：
向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = 'hi')
```

## Vue.delete

```js
Vue.delete( target, propertyName/index )
参数：
* {Object | Array} target
* {string | number} propertyName/index
作用：
删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。
```

## Vue.directive

```js
Vue.directive( id, [definition] )
参数：
* {string} id
* {Function | Object} [definition]
作用：
注册或获取全局指令。

// 注册
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive')
```

## Vue.filter

```js
Vue.filter( id, [definition] )
参数：
* {string} id
* {Function} [definition]
作用：
注册或获取全局过滤器。
```

## Vue.component

```js
Vue.component( id, [definition] )
参数：
* {string} id
* {Function | Object} [definition]
作用：
注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
```

## Vue.use

```js
Vue.use( plugin )
参数：
* {Object | Function} plugin
作用：
安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
该方法需要在调用 new Vue() 之前被调用。
当 install 方法被同一个插件多次调用，插件将只会被安装一次。
```

## Vue.mixin

```js
Vue.mixin( mixin )
参数：
* {Object} mixin
作用：
全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。
```

## Vue.complie

```js
Vue.compile( template )
参数：
* {string} template
作用：
在 render 函数中编译模板字符串。只在独立构建时有效
```

## Vue.observable

```js
Vue.observable( object )
参数：
* {Object} object
用法：
让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景：

const state = Vue.observable({ count: 0 })


const Demo = {
  render(h) {
    return h('button', {
      on: { click: () => { state.count++ }}
    }, `count is: ${state.count}`)
  }
}
```

## Vue.version

```js
Vue.version
提供字符串形式的 Vue 安装版本号。* 这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。

用法：
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}
```