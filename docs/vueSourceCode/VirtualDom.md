# Virtual DOM

## Virtual DOM in Vue

VNode类就是用js来描述一个真实的DOM节点的类。通过这个类，我们就可以实例化出不同类型的虚拟DOM节点。有了数据变化前后的VNode，我们才能进行后续的DOM-Diff找出差异，最终做到只更新有差异的视图，从而达到尽可能少的操作真实DOM的目的，以节省性能。  

## Vue -- DOM-Diff

在Vue中，把 DOM-Diff过程叫做patch过程。patch,意为“补丁”，即指对旧的VNode修补，打补丁从而得到新的VNode，非常形象。本质是以新的VNode为基准，改造旧的oldVNode使之成为跟新的VNode一样，这就是patch过程要干的事。总共干了三件事，分别是：创建节点，删除节点，更新节点。

## Update Child Nodes

::: tip 有四种情况：

1. 创建子节点： 没有相同的子节点

2. 删除子节点： 新的里没有

3. 移动子节点： 找到相同，但所处位置不同

4. 更新节点： 找到相同，并位置相同，把新的替换旧的
:::

不用双层嵌套 新套旧的遍历循环比对方法，如果节点太多很难优化  
使用新前与旧前对比相同更新再移动至后一个  
如果不同，用新后和旧后对比，相同更新节点  
如果不同，用未处理过的新后和未处理过的旧前对比，相同进行更新，更新完再把节点移动到新后所在的位置  
如果还是不同，用未处理过的新前后未处理过得旧后对比，相同更新，更新完再将这个旧后放到新前的位置  
如果四种方式还不行，就再循环通过之前的四种方式再查找  