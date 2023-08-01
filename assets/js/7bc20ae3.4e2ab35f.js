"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=l,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={},o="Panels",i={unversionedId:"extensions/api/panels",id:"extensions/api/panels",title:"Panels",description:"A Panel is a defined area in the Rancher UI where custom UI components can be shown.",source:"@site/docs/extensions/api/panels.md",sourceDirName:"extensions/api",slug:"/extensions/api/panels",permalink:"/dashboard/extensions/api/panels",draft:!1,tags:[],version:"current",lastUpdatedAt:1690885929,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cards",permalink:"/dashboard/extensions/api/cards"},next:{title:"Tabs",permalink:"/dashboard/extensions/api/tabs"}},p={},d=[{value:"addPanel",id:"addpanel",level:2},{value:"PanelLocation.DETAILS_MASTHEAD options",id:"panellocationdetails_masthead-options",level:3},{value:"PanelLocation.DETAIL_TOP options",id:"panellocationdetail_top-options",level:3},{value:"PanelLocation.RESOURCE_LIST options",id:"panellocationresource_list-options",level:3}],s={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"panels"},"Panels"),(0,l.kt)("p",null,"A Panel is a defined area in the Rancher UI where custom UI components can be shown."),(0,l.kt)("p",null,"Panels are added to Rancher via the ",(0,l.kt)("inlineCode",{parentName:"p"},"addPanel")," method."),(0,l.kt)("h2",{id:"addpanel"},"addPanel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,l.kt)("p",null,"This method adds a panel/content to the UI."),(0,l.kt)("p",null,"Method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(where: String, when: LocationConfig, options: Object);\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Arguments")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PanelLocation.DETAILS_MASTHEAD")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Location for a panel on the Details Masthead area of a Resource Detail page (only for modes ",(0,l.kt)("inlineCode",{parentName:"td"},"detail")," (v2.7.2), ",(0,l.kt)("inlineCode",{parentName:"td"},"edit")," (v2.7.2), ",(0,l.kt)("inlineCode",{parentName:"td"},"config")," (v2.7.2) and ",(0,l.kt)("inlineCode",{parentName:"td"},"create")," (v2.7.7))")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PanelLocation.DETAIL_TOP")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Location for a panel on the Detail Top area of a Resource Detail page (only for modes ",(0,l.kt)("inlineCode",{parentName:"td"},"detail")," (v2.7.2), ",(0,l.kt)("inlineCode",{parentName:"td"},"edit")," (v2.7.2), ",(0,l.kt)("inlineCode",{parentName:"td"},"config")," (v2.7.) and ",(0,l.kt)("inlineCode",{parentName:"td"},"create")," (v2.7.7))")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PanelLocation.RESOURCE_LIST")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Location for a panel on a Resource List View page (above the table area - only for mode ",(0,l.kt)("inlineCode",{parentName:"td"},"list")," (v2.7.2))")))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,l.kt)("a",{parentName:"p",href:"./common#locationconfig"},"LocationConfig object"),"."),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"panellocationdetails_masthead-options"},"PanelLocation.DETAILS_MASTHEAD options"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Details Masthead",src:n(5958).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.DETAILS_MASTHEAD'")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"component")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},'Component to be rendered as content on the "detail view" Masthead component')))),(0,l.kt)("p",null,"Usage example for ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.DETAILS_MASTHEAD'"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.DETAILS_MASTHEAD\n  { resource: ['catalog.cattle.io.clusterrepo'] },\n  { component: () => import('./MastheadDetailsComponent.vue') }\n);\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"panellocationdetail_top-options"},"PanelLocation.DETAIL_TOP options"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"DetailTop",src:n(8886).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.DETAIL_TOP'")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"component")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},'Component to be rendered as content on the "detail view" detailTop component')))),(0,l.kt)("p",null,"Usage example for ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.DETAIL_TOP'"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.DETAIL_TOP,\n  { resource: ['catalog.cattle.io.clusterrepo'] },\n  { component: () => import('./DetailTopComponent.vue') }\n);\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"panellocationresource_list-options"},"PanelLocation.RESOURCE_LIST options"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"List View",src:n(3365).Z,width:"1511",height:"1001"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.RESOURCE_LIST'")," are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"component")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},'Component to be rendered as content above a table on a "list view"')))),(0,l.kt)("p",null,"Usage example for ",(0,l.kt)("inlineCode",{parentName:"p"},"'PanelLocation.RESOURCE_LIST'"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.RESOURCE_LIST,\n  { resource: ['catalog.cattle.io.app'] },\n  { component: () => import('./BannerComponent.vue') }\n);\n")))}m.isMDXComponent=!0},8886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/detailtop-93d0c11527f85f73edb5a839132b9b90.png"},3365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list-view-8eecca10089243a82abac917e3e8dbb5.png"},5958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/masthead-f9ad33e650fbc0029145d6e4c664cb23.png"}}]);