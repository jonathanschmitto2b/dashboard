"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[747],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(h,o(o({ref:e},s),{},{components:r})):n.createElement(h,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4819:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="Directory Structure",i={unversionedId:"directory-structure",id:"directory-structure",title:"Directory Structure",description:"The directory structure is mostly flat, with each top level dir being for a different important thing (or just required by Nuxt to be there).",source:"@site/docs/directory-structure.md",sourceDirName:".",slug:"/directory-structure",permalink:"/dashboard/directory-structure",draft:!1,tags:[],version:"current",lastUpdatedAt:1662034494,formattedLastUpdatedAt:"Sep 1, 2022",frontMatter:{}},d={},u=[{value:"Other commonly changed stuff",id:"other-commonly-changed-stuff",level:2},{value:"The rest",id:"the-rest",level:2}],s={toc:u};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"The directory structure is mostly flat, with each top level dir being for a different important thing (or just required by Nuxt to be there)."),(0,a.kt)("h2",{id:"other-commonly-changed-stuff"},"Other commonly changed stuff"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Path"),(0,a.kt)("th",{parentName:"tr",align:null},"Used for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assets"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS, fonts, images, translations, etc resources which get processed during build")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"components"),(0,a.kt)("td",{parentName:"tr",align:null},"All general components which don't have a separate special directory elsewhere")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"layouts"),(0,a.kt)("td",{parentName:"tr",align:null},"The outermost components for rendering different kinds of pages (Nuxt)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"store"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://vuex.vuejs.org/"},"Vuex")," stores which maintain all the state for the life of a page load")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"utils"),(0,a.kt)("td",{parentName:"tr",align:null},"Misc parsers, utilities, and other (usually) standalone code that doesn't fit anywhere else")))),(0,a.kt)("h2",{id:"the-rest"},"The rest"),(0,a.kt)("p",null,"These are mostly standard Nuxt dirs that you won't need to go into very often."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Path"),(0,a.kt)("th",{parentName:"tr",align:null},"Used for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"static"),(0,a.kt)("td",{parentName:"tr",align:null},"Static files which get directly copied into the build with no processing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middleware"),(0,a.kt)("td",{parentName:"tr",align:null},"Hooks called on every page load")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mixins"),(0,a.kt)("td",{parentName:"tr",align:null},"Code that is defined once and then applied to several different other components")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pages"),(0,a.kt)("td",{parentName:"tr",align:null},"The structure in here defines the routes that are available, and what gets rendered when one is hit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins"),(0,a.kt)("td",{parentName:"tr",align:null},'Add-ons to modify vue/nuxt or load additional 3rd-party code.  The "steve" API client also notably lives here.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scripts"),(0,a.kt)("td",{parentName:"tr",align:null},"Shell scripts for building and related tasks, used by CI and ",(0,a.kt)("inlineCode",{parentName:"td"},"npm run ...")," commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"server"),(0,a.kt)("td",{parentName:"tr",align:null},"Server-side middleware and dev SSL cert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"test"),(0,a.kt)("td",{parentName:"tr",align:null},"Unit tests (or lack thereof)")))))}p.isMDXComponent=!0}}]);