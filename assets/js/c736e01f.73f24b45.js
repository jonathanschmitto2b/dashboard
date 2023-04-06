"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[7719],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,s=r(t,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4883:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const o={toc_max_heading_level:4},i="addAction",r={unversionedId:"extensions/extension-api-methods/add-action",id:"extensions/extension-api-methods/add-action",title:"addAction",description:"(Rancher version v2.7.2)",source:"@site/docs/extensions/extension-api-methods/add-action.md",sourceDirName:"extensions/extension-api-methods",slug:"/extensions/extension-api-methods/add-action",permalink:"/dashboard/extensions/extension-api-methods/add-action",draft:!1,tags:[],version:"current",lastUpdatedAt:1680802213,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{toc_max_heading_level:4},sidebar:"mainSidebar",previous:{title:"Extensions API",permalink:"/dashboard/extensions/extensions-api"},next:{title:"addCard",permalink:"/dashboard/extensions/extension-api-methods/add-card"}},p={},d=[{value:"<code>&#39;ActionLocation.HEADER&#39;</code> options",id:"actionlocationheader-options",level:3},{value:"<code>&#39;ActionLocation.TABLE&#39;</code> options",id:"actionlocationtable-options",level:3}],s={toc:d};function c(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"addaction"},"addAction"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,l.kt)("p",null,"This method adds a button/action to the UI."),(0,l.kt)("p",null,"Method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction(where: String, when: LocationConfig, options: Object);\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Arguments")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ActionLocation.HEADER")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Location for an action on the Header of Rancher Dashboard")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ActionLocation.TABLE")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Location for an action on a List View Table of Rancher Dashboard")))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,l.kt)("a",{parentName:"p",href:"../extensions-api#locationconfig-object-definition-when"},"LocationConfig object"),"."),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"actionlocationheader-options"},(0,l.kt)("inlineCode",{parentName:"h3"},"'ActionLocation.HEADER'")," options"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Header Actions",src:n(4651).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"'ActionLocation.HEADER'")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tooltip")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Text for tooltip of button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tooltipKey")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'Same as "tooltip" but allows for translation. Will superseed "tooltip"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shortcut")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Shortcut key bindings. Passed as a string (ex: m), for which the default will be ",(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+m")," for Linux/Windows and ",(0,l.kt)("inlineCode",{parentName:"td"},"Meta+m")," for Mac OS. Check examples below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"icon name (based on ",(0,l.kt)("a",{parentName:"td",href:"https://rancher.github.io/icons/"},"rancher icons"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"svg")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"icon based on a SVG file which can be included using ",(0,l.kt)("inlineCode",{parentName:"td"},"@require"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the action/button is enabled or not")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invoke")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"function executed when action/button is clicked")))),(0,l.kt)("p",null,"Usage example for ",(0,l.kt)("inlineCode",{parentName:"p"},"'ActionLocation.HEADER'"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction(\n  ActionLocation.HEADER,\n  {},\n  {\n    tooltipKey: 'plugin-examples.header-action-one',\n    tooltip:    'Test Action1',\n    shortcut:   'm',\n    icon:       'icon-pipeline',\n    invoke(opts: any, resources: any) {\n      console.log('action executed 1', this); // eslint-disable-line no-console\n      console.log(opts); // eslint-disable-line no-console\n      console.log(resources); // eslint-disable-line no-console\n    }\n  }\n);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction(\n  ActionLocation.HEADER,\n  {},\n  {\n    tooltipKey: 'plugin-examples.header-action-two',\n    tooltip:    'Test Action2',\n    shortcut:   'b',\n    svg:        require('@pkg/test-features/icons/rancher-desktop.svg'),\n    enabled(ctx: any) {\n      return true;\n    },\n    invoke(opts: any, resources: any) {\n      console.log('action executed 2', this); // eslint-disable-line no-console\n      console.log(opts); // eslint-disable-line no-console\n      console.log(resources); // eslint-disable-line no-console\n    }\n  }\n);\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"actionlocationtable-options"},(0,l.kt)("inlineCode",{parentName:"h3"},"'ActionLocation.TABLE'")," options"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"INLINE TABLE ACTION")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"inline table action",src:n(4594).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"BULKABLE/GLOBAL TABLE ACTION")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"bulkable table action",src:n(5007).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"'ActionLocation.TABLE'")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Action label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labelKey")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'Same as "label" but allows for translation. Will superseed "label"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"icon name (based on ",(0,l.kt)("a",{parentName:"td",href:"https://rancher.github.io/icons/"},"rancher icons"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"svg")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"icon based on a SVG file which can be included using ",(0,l.kt)("inlineCode",{parentName:"td"},"@require"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"divider")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows a line separator (divider) in actions menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"multiple")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the action/button is bulkable (can be performed on multiple list items)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invoke")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"function executed when action/button is clicked")))),(0,l.kt)("p",null,"Usage example for ",(0,l.kt)("inlineCode",{parentName:"p"},"'ActionLocation.TABLE'"),":"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"RENDERING A SIMPLE DIVIDER")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction( \n  ActionLocation.TABLE,\n  { resource: ['catalog.cattle.io.clusterrepo'] }, \n  { divider: true });\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"CONFIGURING A NON-BULKABLE ACTION (inline action)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction(\n  ActionLocation.TABLE,\n  { resource: ['catalog.cattle.io.clusterrepo'] }, \n  {\n    label:    'some-extension-action',\n    labelKey: 'plugin-examples.table-action-one',\n    icon:     'icon-pipeline',\n    invoke(opts: ActionOpts, values: any[]) {\n      console.log('table action executed 1', this, opts, values); // eslint-disable-line no-console\n    }\n  }\n);\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"CONFIGURING AN INLINE AND BULKABLE ACTION")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addAction(\n  ActionLocation.TABLE,\n  { resource: ['catalog.cattle.io.clusterrepo'] }, \n  {\n    label:    'some-bulkable-action',\n    labelKey: 'plugin-examples.table-action-two',\n    svg:      require('@pkg/test-features/icons/rancher-desktop.svg'),\n    multiple: true,\n    invoke(opts: ActionOpts, values: any[]) {\n      console.log('table action executed 2', this); // eslint-disable-line no-console\n      console.log(opts); // eslint-disable-line no-console\n      console.log(values); // eslint-disable-line no-console\n    },\n  }\n);\n")))}c.isMDXComponent=!0},4651:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/header-actions-4d54c9b01bc8ce450dbd5dbdb905fabc.png"},5007:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/inline-and-bulkable-5aa5763b98d721445de2a1643b4d5989.png"},4594:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/inline-table-action-819bd6124ebe30d123007f0d4211cffd.png"}}]);