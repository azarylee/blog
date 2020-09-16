# 模板编译篇

渲染流程：  
  
用户写的模板—>模板编译—>render函数—>VNode—>patch —>视图  
        |&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;||&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|  
        |————模板编译—————|                   |—— 虚拟DOM  ——|  
用户在template标签里写的模板对于vue来说就是一堆字符串。借助抽象语法树（AbstractSyntaxTree）把里面的标签，属性和变量插值等提取出来。  
  
大致分为三个阶段：  

1. 模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树AST

2. 优化阶段：遍历AST，找出其中的静态节点，并打上标记  

3. 代码生成阶段：将AST转换成渲染函数  