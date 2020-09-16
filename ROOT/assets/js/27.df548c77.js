(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{408:function(t,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),e("h2",{attrs:{id:"virtual-dom-in-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-in-vue"}},[t._v("#")]),t._v(" Virtual DOM in Vue")]),t._v(" "),e("p",[t._v("VNode类就是用js来描述一个真实的DOM节点的类。通过这个类，我们就可以实例化出不同类型的虚拟DOM节点。有了数据变化前后的VNode，我们才能进行后续的DOM-Diff找出差异，最终做到只更新有差异的视图，从而达到尽可能少的操作真实DOM的目的，以节省性能。")]),t._v(" "),e("h2",{attrs:{id:"vue-dom-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-dom-diff"}},[t._v("#")]),t._v(" Vue -- DOM-Diff")]),t._v(" "),e("p",[t._v("在Vue中，把 DOM-Diff过程叫做patch过程。patch,意为“补丁”，即指对旧的VNode修补，打补丁从而得到新的VNode，非常形象。本质是以新的VNode为基准，改造旧的oldVNode使之成为跟新的VNode一样，这就是patch过程要干的事。总共干了三件事，分别是：创建节点，删除节点，更新节点。")]),t._v(" "),e("h2",{attrs:{id:"update-child-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-child-nodes"}},[t._v("#")]),t._v(" Update Child Nodes")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("有四种情况：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建子节点： 没有相同的子节点")])]),t._v(" "),e("li",[e("p",[t._v("删除子节点： 新的里没有")])]),t._v(" "),e("li",[e("p",[t._v("移动子节点： 找到相同，但所处位置不同")])]),t._v(" "),e("li",[e("p",[t._v("更新节点： 找到相同，并位置相同，把新的替换旧的")])])])]),t._v(" "),e("p",[t._v("不用双层嵌套 新套旧的遍历循环比对方法，如果节点太多很难优化"),e("br"),t._v("\n使用新前与旧前对比相同更新再移动至后一个"),e("br"),t._v("\n如果不同，用新后和旧后对比，相同更新节点"),e("br"),t._v("\n如果不同，用未处理过的新后和未处理过的旧前对比，相同进行更新，更新完再把节点移动到新后所在的位置"),e("br"),t._v("\n如果还是不同，用未处理过的新前后未处理过得旧后对比，相同更新，更新完再将这个旧后放到新前的位置"),e("br"),t._v("\n如果四种方式还不行，就再循环通过之前的四种方式再查找")])])}),[],!1,null,null,null);a.default=r.exports}}]);