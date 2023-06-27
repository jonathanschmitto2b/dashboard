"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(d,".").concat(b)]||p[b]||u[b]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="Sortable Table",i={unversionedId:"code-base-works/sortable-table",id:"code-base-works/sortable-table",title:"Sortable Table",description:"The SortableTable component provides a rich list UI component.",source:"@site/docs/code-base-works/sortable-table.md",sourceDirName:"code-base-works",slug:"/code-base-works/sortable-table",permalink:"/dashboard/code-base-works/sortable-table",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852989,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Performance",permalink:"/dashboard/code-base-works/performance"},next:{title:"On-screen Text and Translations",permalink:"/dashboard/code-base-works/on-screen-text-and-translations"}},d={},s=[{value:"Delayed loading",id:"delayed-loading",level:2},{value:"Table header",id:"table-header",level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sortable-table"},"Sortable Table"),(0,n.kt)("p",null,"The SortableTable component provides a rich list UI component."),(0,n.kt)("h2",{id:"delayed-loading"},"Delayed loading"),(0,n.kt)("p",null,"Sortable Table supports columns with delayed loading."),(0,n.kt)("p",null,"A column can be declared as such by adding the property ",(0,n.kt)("inlineCode",{parentName:"p"},"delayLoading: true")," to the column definition."),(0,n.kt)("p",null,"The Component being rendered for the column must support the ",(0,n.kt)("inlineCode",{parentName:"p"},"startDelayedLoading")," method - this will be called on the component (with the value ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")\nwhtn the table is ready for the component to render itself."),(0,n.kt)("p",null,"The Sortable Table will delay the loading of delay-loaded columns until the table has initially rendered and then will only ask the visible\ncomponents in view to render themselves - it does this in batches until all visible columns aer updated."),(0,n.kt)("p",null,"When the user scrolls the page and other columns become visible, Sortable Table will ensure that these are rendered."),(0,n.kt)("p",null,"Typically a delayed component would initally not render itself at all - or render a simple indicator that the content has not loaded. When its\n",(0,n.kt)("inlineCode",{parentName:"p"},"startDelayedLoading")," method is called, it will then render its full content, fetching data as needed etc,"),(0,n.kt)("h3",{id:"table-header"},"Table header"),(0,n.kt)("p",null,"There are two ways table headers are populated:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Custom header: You can create a customized header for the sortable table by defining it in the appropriate configuration file under shell/config/product folder. Read more ",(0,n.kt)("a",{parentName:"p",href:"/code-base-works/customising-how-k8s-resources-are-presented#customising-tables"},"how to create custom table headers")," for each type.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Header coming from Schema: If table data is coming from Schema, headers are dynamically populated by the Schema data. For the Internationalization make sure to add table headers locale key in translations YAML files."))))}u.isMDXComponent=!0}}]);