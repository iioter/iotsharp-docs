"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[655],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="\u5982\u4f55\u8c03\u8bd5IoTSharp?",p={unversionedId:"tutorial-basics/debug",id:"tutorial-basics/debug",title:"\u5982\u4f55\u8c03\u8bd5IoTSharp?",description:"\u672c\u6559\u7a0b\u4f7f\u7528rabbit_mongo_influx \u65b9\u5f0f\u8fdb\u884c\u6e90\u7801\u8fd0\u884c",source:"@site/docs/tutorial-basics/debug.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/debug",permalink:"/docs/tutorial-basics/debug",editUrl:"https://github.com/IoTSharp/docs/docs/tutorial-basics/debug.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5728\u54ea\u91cc\u4e0b\u8f7d\u6e90\u7801\uff1f",permalink:"/docs/tutorial-basics/sourcecode"},next:{title:"\u5982\u4f55\u90e8\u7f72IoTSharp?",permalink:"/docs/tutorial-basics/deploy"}},c=[{value:"\u751f\u6210\u89e3\u51b3\u65b9\u6848",id:"\u751f\u6210\u89e3\u51b3\u65b9\u6848",children:[],level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:[],level:2},{value:"\u6e90\u7801\u542f\u52a8",id:"\u6e90\u7801\u542f\u52a8",children:[],level:2},{value:"\u8bbf\u95ee\u540e\u53f0\u524d\u7aef",id:"\u8bbf\u95ee\u540e\u53f0\u524d\u7aef",children:[],level:2},{value:"\u8bbf\u95ee\u524d\u7aef",id:"\u8bbf\u95ee\u524d\u7aef",children:[],level:2}],d={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u8c03\u8bd5iotsharp"},"\u5982\u4f55\u8c03\u8bd5IoTSharp?"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"rabbit_mongo_influx")," \u65b9\u5f0f\u8fdb\u884c\u6e90\u7801\u8fd0\u884c"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7f16\u8bd1\u8fd0\u884c\u8981\u5728docker\u8fd0\u884c\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\uff0c\u56e0\u4e3a\u9700\u8981\u4f7f\u7528rabbitmq\u3001mongo\u3001influxdb\u7b49\u5e94\u7528\uff1b\n\u8981\u5148\u505c\u6b62\u5bb9\u5668\u4e2d\u7684iotsharp\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528VS\u6253\u5f00\u89e3\u51b3\u65b9\u6848\uff0c \u8bbe\u7f6edocker-compose \u4e3a\u542f\u52a8\u9879\u3002\u8fd9\u6837Vs\u4f1a\u81ea\u52a8\u542f\u52a8\u76f8\u5e94\u7684\u5bb9\u5668\uff0c \u5e76\u5c06IoTSharp\u8bbe\u7f6e\u4e3a\u8c03\u8bd5\u6a21\u5f0f\u3002 "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"docker",docker:!0},"docker stop iotsharp\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53e6\u5916\u524d\u7aef\u4f7f\u7528angular\uff0c\u9700\u8981\u5b89\u88c5node\u3001npm\u6216yarn\u624d\u53ef\u4ee5\u8fdb\u884c\u524d\u7aef\u7f16\u8bd1"))),(0,o.kt)("p",null,"\u6211\u7684node\u7248\u672c",(0,o.kt)("inlineCode",{parentName:"p"},"v16.13.1"),"\uff0cnpm\u7248\u672c",(0,o.kt)("inlineCode",{parentName:"p"},"8.1.2"),"\uff0cyarn\u7248\u672c",(0,o.kt)("inlineCode",{parentName:"p"},"1.22.17"),"\uff0c\u53ef\u7528"),(0,o.kt)("h2",{id:"\u751f\u6210\u89e3\u51b3\u65b9\u6848"},"\u751f\u6210\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u6253\u5f00\u89e3\u51b3\u65b9\u6848",(0,o.kt)("strong",{parentName:"p"},"IoTSharp.sln")," "),(0,o.kt)("p",null,"\u5148\u751f\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u7b2c\u4e00\u6b21\u751f\u6210ng\u7684\u524d\u7aef\u6bd4\u8f83\u6162"),(0,o.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/IoTSharp/IoTSharp/appsettings.Development.json"',title:'"/IoTSharp/IoTSharp/appsettings.Development.json"'},'{\n  "ConnectionStrings": {\n    "IoTSharp": "Server=127.0.0.1;Database=IoTSharp;Username=postgres;Password=future;Pooling=true;MaxPoolSize=1024;",\n    "EventBusStore": "mongodb://root:kissme@127.0.0.1:27017",\n    "TelemetryStorage": "http://127.0.0.1:8086/?org=iotsharp&bucket=iotsharp-bucket&token=iotsharp-token&&latest=-72h",\n    "EventBusMQ": "amqp://root:kissme@127.0.0.1:5672"\n  },\n  "DataBase": "PostgreSql",\n  "EventBusStore": "MongoDB",\n  "EventBusMQ": "RabbitMQ",\n  "TelemetryStorage": "InfluxDB"\n}\n')),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e00\u5b9a\u8981\u628ainflux\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u4e2d\u7684iotsharp-token\u6362\u6210\u81ea\u5df1\u7684token"))),(0,o.kt)("h2",{id:"\u6e90\u7801\u542f\u52a8"},"\u6e90\u7801\u542f\u52a8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IoTSharp"),"\u9879\u76ee\u8bbe\u4e3a\u542f\u52a8\u9879\u76ee\uff0c\u8fd0\u884c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6e90\u7801\u542f\u52a8",src:n(6303).Z,width:"1918",height:"927"})),(0,o.kt)("h2",{id:"\u8bbf\u95ee\u540e\u53f0\u524d\u7aef"},"\u8bbf\u95ee\u540e\u53f0\u524d\u7aef"),(0,o.kt)("p",null,"\u7b49\u5f85\u4e00\u4f1a\uff0c\u6d4f\u89c8\u5668\u81ea\u52a8\u5f39\u51fa\u540e\u53f0\u524d\u7aef\uff0c\u53ef\u4ee5\u770b\u5230\u540e\u53f0\u7ec4\u4ef6\u8fd0\u884c\u72b6\u6001\uff0c\u4ee5\u53caswagger\u7684webapi\u9875\u9762"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u8bbf\u95ee\u540e\u53f0\u524d\u7aef",src:n(5426).Z,width:"1902",height:"850"})),(0,o.kt)("h2",{id:"\u8bbf\u95ee\u524d\u7aef"},"\u8bbf\u95ee\u524d\u7aef"),(0,o.kt)("p",null,"\u8981\u6709\u8010\u5fc3\uff0c\u5927\u69825\u5206\u949f\u5de6\u53f3\uff0cangular\u7f16\u8bd1\u5b8c\u6210\uff0c\u4f1a\u5f39\u51fa\u4e00\u4e2a\u65b0\u7684\u524d\u7aef\n",(0,o.kt)("img",{alt:"\u8bbf\u95ee\u524d\u7aef",src:n(723).Z,width:"1016",height:"553"})))}u.isMDXComponent=!0},5426:function(e,t,n){t.Z=n.p+"assets/images/bgweb-7c989919fd84790d1511bc5e9cce43c4.png"},723:function(e,t,n){t.Z=n.p+"assets/images/font-login-bbdc20715ff22f70bbc5c440432b3b83.png"},6303:function(e,t,n){t.Z=n.p+"assets/images/project-appsettings-0505baba96447a1be0db7176f31108d9.png"}}]);