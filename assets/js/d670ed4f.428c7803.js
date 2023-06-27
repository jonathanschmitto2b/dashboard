"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},s="Safe Mode",i={unversionedId:"extensions/advanced/safe-mode",id:"extensions/advanced/safe-mode",title:"Safe Mode",description:"If you have developed and installed an Extension that has an issue that blocks the load of Rancher Dashboard, you might get \"blocked\" of accessing and navigating around Rancher Dashboard. In that case, there's a route path called safeMode that prevent's the load of installed Extensions, therefore regaining access to Rancher Dashboard.",source:"@site/docs/extensions/advanced/safe-mode.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/safe-mode",permalink:"/dashboard/extensions/advanced/safe-mode",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852989,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Version compatibility",permalink:"/dashboard/extensions/advanced/version-compatibility"},next:{title:"Using yarn link",permalink:"/dashboard/extensions/advanced/yarn-link"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"safe-mode"},"Safe Mode"),(0,r.kt)("p",null,'If you have developed and installed an Extension that has an issue that blocks the load of Rancher Dashboard, you might get "blocked" of accessing and navigating around Rancher Dashboard. In that case, there\'s a route path called ',(0,r.kt)("inlineCode",{parentName:"p"},"safeMode")," that prevent's the load of installed Extensions, therefore regaining access to Rancher Dashboard."),(0,r.kt)("p",null,"To enable this safe mode, you just need to enter your Rancher Dashboard in the following way: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<- YOUR RANCHER BASE URL ->/safeMode"),"."))}u.isMDXComponent=!0}}]);