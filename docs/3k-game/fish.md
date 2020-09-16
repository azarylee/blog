# Fish

+--main.js (Entry js)  
&ensp;+-comm/helper/scene_mgr (scene management)  

::: tip loadGame
1.调用loadBin方法
2.调用startLoadGame方法
3.加载游戏所需图片 fish/resource.js
4.调用loadResource方法加载游戏 
:::
&ensp;&ensp;+--fish/install.js  
&ensp;&ensp;|-> 显示room list  
&ensp;&ensp;&ensp;|-- add room and use focusSwitchTo function to use ’fish_aqua’  
&ensp;&ensp;&ensp;&ensp;|->通过sceneList (遍历获取了gameList-- bin/conf/game.js) 获取aqua加载路径  
&ensp;&ensp;&ensp;&ensp;|-> 进入房间调用aqua.js  
&ensp;&ensp;&ensp;&ensp;&ensp;|-> comm/helper/scene_mgr 退出游戏时，调用返回lobby  
&ensp;&ensp;&ensp;&ensp;&ensp;|-> game/fish/helper/game_mgr 游戏加载  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|-> 读取鱼游的路径，动画配置文件，_netTable来传输信息与后端交互  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|-> loopupdate 更新鱼的状态  
&ensp;&ensp;&ensp;&ensp;&ensp;|-> game/fish/ui/aqua 加载aqua ui  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|-> game/fish/parts/fish.js  

::: tip
5.读取game.js里游戏配置
6.加载游戏数据 assets/games/fish
:::
&ensp;&ensp;|-conf/game (加载游戏配置文件)  
&ensp;&ensp;|-comm/helper/sound_mgr (游戏声音管理文件)  