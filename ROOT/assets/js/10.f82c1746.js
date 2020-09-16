(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(e,t,r){"use strict";r.r(t);var s=r(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"project-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project Structure")]),e._v(" "),r("p",[e._v("+—-server.js (Entry File)"),r("br"),e._v("\n    +-- serv.js (New http Object and Extend EventEmitter)"),r("br"),e._v("\n        +--index.html"),r("br"),e._v("\n        (import boot.js, and then boot.js import include.js which require require.js)"),r("br"),e._v("\n            |-- require.js")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("First javascript has been loaded.")]),e._v(" "),r("p",[e._v("RequireJS, import javascript modules require.js. Before ES6, to use Require.js for import modules.")])]),e._v(" "),r("p",[e._v("            |-- app-config.js")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Second javascript has been loaded")]),e._v(" "),r("p",[e._v("gbx—global context names gbx which global constant")])]),e._v(" "),r("p",[e._v("            |-- libs/layaair/laya.core.js"),r("br"),e._v("\n            |-- libs/layaair/laya.webgl.js"),r("br"),e._v("\n            |-- libs/layaair/laya.ui.js"),r("br"),e._v("\n            |-- libs/layaair/laya.ani.js"),r("br"),e._v("\n            |-- libs/layaair/laya.particle.js"),r("br"),e._v("\n            |-- libs/layaair/laya.filter.js"),r("br"),e._v("\n            |-- libs/gtea/gtea.js")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Third javascript has been loaded")]),e._v(" "),r("p",[e._v("gtea set connection, before main.js to load this file. That is connect javascript file with back-end, and compiled binary data."),r("br"),e._v("\n_onMessage function send compiled data to ui.")])]),e._v(" "),r("p",[e._v("            |-- libs/cordova/cordova.js")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Forth javascript has been loaded")]),e._v(" "),r("p",[e._v("cordova build application from different platform.")])]),e._v(" "),r("p",[e._v("            +-- main.js")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Fifth javascript has been loaded")]),e._v(" "),r("p",[e._v("main.js is the main file of the project.")])]),e._v(" "),r("p",[e._v("                |-- conf/system (Declare system constant)"),r("br"),e._v("\n                |-- gbx/render/stage (init the stage and default setting.)"),r("br"),e._v("\n                |-- gbx/render/texture"),r("br"),e._v("\n                |-- gbx/render/loader"),r("br"),e._v("\n(identify different files:"),r("br"),e._v(" "),r("code",[e._v('{ als："atlas", jpeg: "image", jpg: "image", json："json", mp3: "sound", agg: "sound", part："json", png: "image", txt: "text", wav: "sound", xml: "xml" }')]),e._v("\n)"),r("br"),e._v("\n                +-- gbx/render/schema"),r("br"),e._v("\n                  |-- gbx/class (extend third part package classes)"),r("br"),e._v("\n                  |-- gbx/render/display/sprite (Images and Text basic class)"),r("br"),e._v("\n                    +-- gbx/render/display/node (This is for encapsulate and inherit basic class, and also add properties.)"),r("br"),e._v("\n                      |-- gbx/cclass (monitor class)"),r("br"),e._v("\n                    |-- gbx/render/tween (basic tween functions)"),r("br"),e._v("\n                    |-- gbx/render/texture (animations functions)"),r("br"),e._v("\n                  +-- gbx/render/display/text  (text class, text setting and inherit sprite class)"),r("br"),e._v("\n                    |-- gbx/render/display/sprite"),r("br"),e._v("\n                  +-- gbx/render/ui/button (inherit component class)"),r("br"),e._v("\n                    |-- gbx/render/ui/component"),r("br"),e._v("\n                    |-- gbx/render/texture (set button background)"),r("br"),e._v("\n                    |-- gbx/render/display/sprite (set button text image)"),r("br"),e._v("\n                |-- gbx/debug (Log file)"),r("br"),e._v("\n                  +-- gbx/bridge"),r("br"),e._v("\n                    |-- gbx/hubs (add subscription and push functions)"),r("br"),e._v("\n                    |-- gbx/util (utils functions)"),r("br"),e._v("\n                |-- gbx/bridge"),r("br"),e._v("\n                |-- gbx/hubs"),r("br"),e._v("\n                |-- gbx/net/connector (set server, and build connection)"),r("br"),e._v("\n                |-- gbx/render/display/sprite"),r("br"),e._v("\n                |-- gbx/render/display/text"),r("br"),e._v("\n                +-- comm/helper/scene_mgr"),r("br"),e._v("\n                  |-- conf/game (game setting)"),r("br"),e._v("\n                  |-- major/login/resource (after login set items）"),r("br"),e._v("\n                  |-- comm/helper/sound_mgr (manage sound files)"),r("br"),e._v("\n                  |-- gbx/render/texture"),r("br"),e._v("\n                  |-- gbx/render/loader"),r("br"),e._v("\n                  |-- gbx/render/stage"),r("br"),e._v("\n                  |-- gbx/hubs"),r("br"),e._v("\n                  |-- comm/helper/provider"),r("br"),e._v("\n                |-- comm/helper/sound_mgr"),r("br"),e._v("\n                |-- comm/helper/account_mgr (account center, manage account data)"),r("br"),e._v("\n                +-- comm/helper/provider")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("_getGameList function for loading games and set games list."),r("br"),e._v("\n_super function for loading resource and install javascript files.")])]),e._v(" "),r("p",[e._v("                  |-- comm/base/provider (basic class provider properties and functions)"),r("br"),e._v("\n                  |-- gbx/render/display/text"),r("br"),e._v("\n                  |-- gbx/util"),r("br"),e._v("\n                  |-- gbx/hubs"),r("br"),e._v("\n                  |-- comm/ui/top_message"),r("br"),e._v("\n                |-- comm/ui/sound_button (Load button ui)"),r("br"),e._v("\n                |-- gbx/device (identify device)"),r("br"),e._v("\n                |-- comm/helper/tkda_mgr (online shop)"),r("br"),e._v("\n                |-- app-config")])])}),[],!1,null,null,null);t.default=n.exports}}]);