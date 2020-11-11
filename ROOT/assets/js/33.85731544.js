(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{414:function(a,r,t){"use strict";t.r(r);var e=t(25),p=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"graphql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[a._v("#")]),a._v(" GraphQL")]),a._v(" "),t("h3",{attrs:{id:"为什么使用graphql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用graphql"}},[a._v("#")]),a._v(" 为什么使用GraphQL？")]),a._v(" "),t("p",[a._v("GraphQL是一种查询语言.")]),a._v(" "),t("p",[a._v("使用GraphQL来做服务端API层的开发无疑会减轻服务端开发工程师的很多压力，而且对于Client来说也是很友好的，因为Client不需要想请求Restful接口一样只能获取相对固定的数据，Client可以根据自己的需求使用不同的查询语句来请求GraphQL，使用GraphQL会减少很多冗余的数据传输，并且可以减少很多服务端API层的接口开发工作，API层只需要开发GraphQL服务端，然后告诉Client这些数据的组织结构，然后Client就可以组装出合适的查询语句来请求数据。使用GraphQL进一步将前后端分离（Restful使得前后端分离），后端开发和前端开发可以各自进行，使用GraphQL很多时候服务端是在丰富可以提供的数据，或者优化聚合DataSource来提高响应速度。使用GraphQL还有很多优点，可以研究GraphQL并且使用GraphQL来开发服务端API来体验。本文剩下的内容将基于GraphQL-Java和Spring-boot来实现一个简单的应用，以此来说明使用GraphQL的方法以及使用GraphQL的优势。")]),a._v(" "),t("h3",{attrs:{id:"主要特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要特征"}},[a._v("#")]),a._v(" 主要特征")]),a._v(" "),t("p",[a._v("GraphQL 有以下三个主要特征：")]),a._v(" "),t("ol",[t("li",[a._v("它允许客户端指定具体所需的数据。")]),a._v(" "),t("li",[a._v("它让从多个数据源汇总取数据变得更简单。")]),a._v(" "),t("li",[a._v("它使用了类型系统来描述数据。")])]),a._v(" "),t("h3",{attrs:{id:"用restful-api还是graphql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用restful-api还是graphql"}},[a._v("#")]),a._v(" 用RESTful API还是GraphQL")]),a._v(" "),t("p",[a._v("GraphQL可以理解为基于RESTful的一种封装，目的在于构建使Client更加易用的服务，可以说GraphQL是更好的RESTful设计。\n在过去的十多年中，REST已经成为设计web api的标准(虽然只是一个模糊的标准)。它提供了一些很棒的想法，比如无状态服务器和结构化的资源访问。\n然而REST api表现得过于僵化，无法跟上访问它们的客户的快速变化的需求。 GraphQL的开发是为了应付更多的灵活性和效率，它解决了与REST api交互时开发人员所经历的许多缺点和低效之处。\n为了说明在从API获取数据时REST和GraphQL之间的主要区别，让我们考虑一个简单的示例场景：在blog应用程序中，应用程序需要显示特定用户的文章的标题。同一屏幕还显示该用户最后3个关注者的名称。\n使用 GraphQL 来代替 REST 基本不会对你 app 的用户体验产生任何影响。\n更高效的数据加载，GraphQL最小化了需要网络传输的数据量，从而极大地改善了在这些条件下运行的应用程序。")]),a._v(" "),t("p",[a._v("REST最常见的问题之一是API的返回数据过多或者过少，这是因为客户端下载数据的唯一方法是通过访问返回固定数据结构的endpoint，这就会导致我们设计API非常困难，因为它既要能够为客户提供精确的数据需求，又需要满足不同调用者的需求，这本身就是相互矛盾的。GraphQL的发明者Lee Byron提出了一个很重要的概念： “用图形来思考，而不是endpoint”\n解决了传统REST API的两个典型问题：Overfetching和Underfetching。")]),a._v(" "),t("p",[a._v("Overfetching")]),a._v(" "),t("p",[a._v("Overfetching意味着前端得到了实际不需要的数据，这可能会造成性能和带宽浪费。")]),a._v(" "),t("p",[a._v("Underfetching")]),a._v(" "),t("p",[a._v("Underfetching与Overfetching想反，API返回中缺少足够的数据，这意味着前端需要请求额外的API得到需要的数据。")])])}),[],!1,null,null,null);r.default=p.exports}}]);