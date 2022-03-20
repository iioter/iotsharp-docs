"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[612],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,_=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(_,p(p({ref:e},s),{},{components:n})):r.createElement(_,p({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9454:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={sidebar_position:2},l="Http\u534f\u8bae",u={unversionedId:"tutorial-extras/http",id:"tutorial-extras/http",title:"Http\u534f\u8bae",description:"IoTSharp\u652f\u6301Http\u534f\u8bae\u4e0a\u4f20\u9065\u6d4b\u6570\u636e\uff0c \u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u63a5\u53e3\uff0c \u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u5c5e\u6027\u91cc\u8bbe\u7f6e \u6620\u5c04\u65b9\u5f0f \u63a5\u6536\u6570\u636e\uff0c \u4e5f\u53ef\u4ee5\u901a\u8fc7\u89c4\u5219\u94fe\u8fdb\u884c\u89e3\u6790\u6570\u636e\u7136\u540e\u518d\u63a8\u9001\u7684\u6307\u5b9a\u6570\u636e\u3002",source:"@site/docs/tutorial-extras/http.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/http",permalink:"/docs/tutorial-extras/http",editUrl:"https://github.com/IoTSharp/docs/docs/tutorial-extras/http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MQTT\u534f\u8bae",permalink:"/docs/tutorial-extras/mqtt"}},s=[{value:"IoTSharp\u76f4\u8fde\u8bbe\u5907\u548c\u5e38\u89c4\u7f51\u5173\u8bbe\u5907\u7684\u6570\u636e\u4e0a\u4f20",id:"iotsharp\u76f4\u8fde\u8bbe\u5907\u548c\u5e38\u89c4\u7f51\u5173\u8bbe\u5907\u7684\u6570\u636e\u4e0a\u4f20",children:[],level:2},{value:"PushDataToMap",id:"pushdatatomap",children:[],level:2}],c={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http\u534f\u8bae"},"Http\u534f\u8bae"),(0,o.kt)("p",null," IoTSharp\u652f\u6301Http\u534f\u8bae\u4e0a\u4f20\u9065\u6d4b\u6570\u636e\uff0c \u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u63a5\u53e3\uff0c \u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u5c5e\u6027\u91cc\u8bbe\u7f6e \u6620\u5c04\u65b9\u5f0f \u63a5\u6536\u6570\u636e\uff0c \u4e5f\u53ef\u4ee5\u901a\u8fc7\u89c4\u5219\u94fe\u8fdb\u884c\u89e3\u6790\u6570\u636e\u7136\u540e\u518d\u63a8\u9001\u7684\u6307\u5b9a\u6570\u636e\u3002 "),(0,o.kt)("h2",{id:"iotsharp\u76f4\u8fde\u8bbe\u5907\u548c\u5e38\u89c4\u7f51\u5173\u8bbe\u5907\u7684\u6570\u636e\u4e0a\u4f20"},"IoTSharp\u76f4\u8fde\u8bbe\u5907\u548c\u5e38\u89c4\u7f51\u5173\u8bbe\u5907\u7684\u6570\u636e\u4e0a\u4f20"),(0,o.kt)("h2",{id:"pushdatatomap"},"PushDataToMap"),(0,o.kt)("p",null,"PushDataToMap  \u662f\u4e2a\u7279\u5b9a\u7f51\u5173\u63a5\u53e3\uff0c\u901a\u8fc7\u8bbe\u7f6e\u7f51\u5173\u7684\u5c5e\u6027\u503c\u8ba9\u63a5\u53e3\u81ea\u52a8\u89e3\u6790\u4e0b\u9762\u7684\u6570\u636e\uff0c \u5982\u679c\u662f\u6587\u672c\u5305\u542b\u5b57\u7b26\u4e32json\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u8fdb\u884c\u5904\u7406\u3002\nhttp \u8bf7\u6c42 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST  \'http://iot.qhse.cn:2927/api/Devices/{\u7f51\u5173Token}/PushDataToMap/json\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "dev_id": "2021082640",\n  "volt": 0,\n  "sample_time": "2022-03-17 15:21:47",\n  "datas": [\n    {\n      "point_name": "2",\n      "mon_type": 4,\n      "dev_type": 10,\n      "depth": 0,\n      "data1": 0\n    }\n  ]\n}\'\n')),(0,o.kt)("p",null,"\u6837\u4f8b\u6570\u636e \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"dataType":"1","dataJson":"{\\"serialNumber\\":\\"12003378\\",\\"uploadDate\\":\\"2022-03-20 22:22:19\\",\\"pm25\\":21,\\"pm10\\":26,\\"windSpeed\\":25,\\"windDirection\\":14,\\"noise\\":46,\\"temperature\\":60,\\"humidity\\":900,\\"sprayStatus\\":0,\\"warnReason\\":64}"}\n')),(0,o.kt)("p",null," \u5c5e\u6027\u914d\u7f6e\u53c2\u8003"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"map_to_attribute"),"{\u6620\u5c04\u5230\u5b50\u8bbe\u5907\u7684\u5c5e\u6027\u540d\u79f0}   \u5c5e\u6027\u503c\u4e3a\u5728\u5f53\u524djson\u4e2d\u7684\u8def\u5f84\u3002\n\u4f8b\u5982: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"_map_to_attribute_currentAllowWeight    currentAllowWeight   \n_map_to_attribute_driverCardNo  driverCardNo     \n_map_to_attribute_version   version \n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n2. _map_to_devname  \u6307\u5b9a\u8bbe\u5907\u7684\u540d\u79f0\u4f7f\u7528\u54ea\u4e2a\u5b57\u6bb5 \n3. _map_to_devname_format \u6307\u5b9a\u8bbe\u5907\u540d\u79f0\u7684\u683c\u5f0f\uff0c\u53ef\u7528\u7684\u53d8\u91cf\u6709 $devname  \u548c $subdevname\uff0c \u683c\u5f0f\u5185\u5bb9\u4e3a   hf_crane_$devname \n4. _map_to_jsontext_in_json \u6307\u5b9a\u5982\u679c\u662f\u6587\u672c\u7c7b\u578b\u7684\u5c06\u81ea\u52a8\u5c06\u5b57\u7b26\u4e32\u8f6c\u4e3ajson\uff0c\u793a\u4f8b\u4e2d\u4e3a\uff1a dataJson   \n5. _map_to_telemetry_{\u6620\u5c04\u5230\u5b50\u8bbe\u5907\u4e2d\u7684\u9065\u6d4b\u540d\u79f0}    \n")),(0,o.kt)("p",null,"_map_to_telemetry_windSpeed\twindSpeed\t "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," 6. _map_to_subdevname \u4e8c\u7ea7\u5173\u8054\n 7. _map_to_data_in_array \u5982\u679c\u5b50\u8bbe\u5907\u6570\u636e\u5728\u67d0\u4e2a\u6570\u7ec4\u5360\u7528\uff0c \u5219\u8fd9\u91cc\u6307\u5b9a\u3002 \n\n \u6ce8\u610f\uff0c \u5f53_map_to_data_in_array \u6307\u5b9a\u4e86\u5b57\u6bb5\u65f6 \uff0c \u4f7f\u7528  '@' \u7684\u5b57\u6bb5\u6307\u5b9a\u7684\u662f \u6839json\u8def\u5f84\uff0c \u4e0d\u4f7f\u7528 \u5219\u8868\u793a\u5f53\u524d\u6570\u7ec4\u5143\u7d20\u4e2d\u7684\u8def\u5f84\u3002 \n _map_to_data_in_array\u548c_map_to_jsontext_in_json\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e00\u79cd\uff0c \u4e0d\u80fd\u91cd\u5408\u3002\n")))}d.isMDXComponent=!0}}]);