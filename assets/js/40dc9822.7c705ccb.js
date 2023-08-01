"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Cluster Provisioning (RKE2 / Custom)",s={unversionedId:"extensions/advanced/provisioning",id:"extensions/advanced/provisioning",title:"Cluster Provisioning (RKE2 / Custom)",description:"The UI provides a number of ways to customise the processes that creates RKE2/Custom clusters. This includes",source:"@site/docs/extensions/advanced/provisioning.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/provisioning",permalink:"/dashboard/extensions/advanced/provisioning",draft:!1,tags:[],version:"current",lastUpdatedAt:1690885929,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Air-gapped Environments",permalink:"/dashboard/extensions/advanced/air-gapped-environments"},next:{title:"Localization",permalink:"/dashboard/extensions/advanced/localization"}},l={},c=[{value:"Custom Components",id:"custom-components",level:2},{value:"Custom Cluster Provisioner",id:"custom-cluster-provisioner",level:2},{value:"Resources",id:"resources",level:3},{value:"Provisioner Class",id:"provisioner-class",level:3},{value:"Components",id:"components",level:3},{value:"Custom tabs in the Cluster&#39;s Cluster Configuration",id:"custom-tabs-in-the-clusters-cluster-configuration",level:3},{value:"Custom tabs in the Cluster&#39;s detail page",id:"custom-tabs-in-the-clusters-detail-page",level:3},{value:"Localisation",id:"localisation",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cluster-provisioning-rke2--custom"},"Cluster Provisioning (RKE2 / Custom)"),(0,o.kt)("p",null,"The UI provides a number of ways to customise the processes that creates RKE2/Custom clusters. This includes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding additional Cluster Provisioner types"),(0,o.kt)("li",{parentName:"ul"},"Customising or replacing components used in the create process"),(0,o.kt)("li",{parentName:"ul"},"Additional tabs"),(0,o.kt)("li",{parentName:"ul"},"Hooks in to the processes that persist cluster resources"),(0,o.kt)("li",{parentName:"ul"},"Overrides that replace the process to persist cluster resources")),(0,o.kt)("h2",{id:"custom-components"},"Custom Components"),(0,o.kt)("p",null,"Existing components that manage cloud credentials and machine configuration can be replaced as per ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/api/components/node-drivers"},"Custom Node Driver UI"),". "),(0,o.kt)("h2",{id:"custom-cluster-provisioner"},"Custom Cluster Provisioner"),(0,o.kt)("p",null,"New cluster provisioners can be added that can tailor the create/edit experience for their own needs."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Creating a cluster revolves around two resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The machine configuration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The machine configuration defines how the individual nodes within a node pool will be provisioned. For instance which region and size they may be"),(0,o.kt)("li",{parentName:"ul"},"These normally have an type of ",(0,o.kt)("inlineCode",{parentName:"li"},"rke-machine-config.cattle.io.<provider name>config"),", which matches the id of it's schema object"))),(0,o.kt)("li",{parentName:"ul"},"The provisioning cluster",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"provisioning.cattle.io.cluster")," which, aside from machine configuration, contains all details of the cluster"),(0,o.kt)("li",{parentName:"ul"},"In the UI this is an instance of the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher/dashboard")," ",(0,o.kt)("inlineCode",{parentName:"li"},"shell/models/provisioning.cattle.io.cluster.js")," class",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This has lots of great helper functions, most importantly ",(0,o.kt)("inlineCode",{parentName:"li"},"save")))),(0,o.kt)("li",{parentName:"ul"},"Cluster provisioners should always create an instance of this class")))),(0,o.kt)("h3",{id:"provisioner-class"},"Provisioner Class"),(0,o.kt)("p",null,"To customise the process of creating or editing these resources the extension should register a provisioner class which implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"IClusterProvisioner")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  plugin.register('provisioner', 'my-provisioner', ExampleProvisioner);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," allows us to register an arbitrary extension and we introduce the type ",(0,o.kt)("inlineCode",{parentName:"p"},"provisioner"),".")),(0,o.kt)("p",null,"Below is outline for the functionality the class provides, for detail about the ",(0,o.kt)("inlineCode",{parentName:"p"},"IClusterProvisioner")," interface see the inline documentation."),(0,o.kt)("p",null,"The class provides a way to..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"show a card for the new cluster type for the user to choose when selecting a provider"),(0,o.kt)("li",{parentName:"ol"},"handle custom machine configs that haven't necessarily been provided by the usual node driver way"),(0,o.kt)("li",{parentName:"ol"},"hooks to extend/override the cluster save process. Either..",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Override all of the cluster save process"),(0,o.kt)("li",{parentName:"ul"},"Extend/Override parts of the cluster save process. This allows a lot of the boilerplate code to manage addons, member bindings, etc to run",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"run code before the cluster resource is saved"),(0,o.kt)("li",{parentName:"ul"},"replace the code that saves the core cluster"),(0,o.kt)("li",{parentName:"ul"},"run code after the cluster resource is saved"))))),(0,o.kt)("li",{parentName:"ol"},"show a custom label for the provider of the custom cluster",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is done by setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"ui.rancher/provider")," annotation in the cluster"),(0,o.kt)("li",{parentName:"ul"},"It's used in the UI whenever showing the cluster's provider"))),(0,o.kt)("li",{parentName:"ol"},"show custom tabs on the Detail page of the custom cluster")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To make API calls from the UI to a different domain see ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/machine-drivers#api-calls"},"here"),". For instance to fetch region or machine size information used to create a machine config")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("p",null,"When creating or editing a cluster the user can see the cloud credential and machine pool components."),(0,o.kt)("p",null,"These can be provided as per the ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Components")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  plugin.register('cloud-credential', 'my-provisioner', false);\n  plugin.register('machine-config', 'my-provisioner', () => import('./src/test.vue'));\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This example registers that no cloud credential is needed and registers a custom component to be used for Machine Configuration within a node/machine pool - this is the same as with Node Drivers - e.g. with the OpenStack node driver example.")),(0,o.kt)("h3",{id:"custom-tabs-in-the-clusters-cluster-configuration"},"Custom tabs in the Cluster's Cluster Configuration"),(0,o.kt)("p",null,"When creating or editing the cluster the user can see a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster Configuration")," tabs that contain configuration applicable to the entire cluster."),(0,o.kt)("p",null,"Extensions can add additional tabs here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  plugin.addTab(TabLocation.CLUSTER_CREATE_RKE2, {\n    resource:     ['provisioning.cattle.io.cluster'],\n    queryParam:    { type: ExampleProvisioner.ID }\n  }, {\n    name:      'custom-cluster-config',\n    labelKey:     'exampleClusterConfigTab.tabLabel',\n    component: () => import('./src/example-cluster-config-tab.vue')\n  });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note we use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"queryParam")," property to allow us to target the tab only when the cluster is of our provider type.")),(0,o.kt)("h3",{id:"custom-tabs-in-the-clusters-detail-page"},"Custom tabs in the Cluster's detail page"),(0,o.kt)("p",null,"When clicking on a created cluster in the UI the user is shown details for the cluster. This page has some tabs which may not be applicable to the custom provider. The provider class has a way to hide these. To add a new custom tab the following can be used"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  plugin.addTab(TabLocation.RESOURCE_DETAIL, {\n    resource:     ['provisioning.cattle.io.cluster'],\n    context:   { provider: ExampleProvisioner.ID }\n  }, {\n    name:      'custom',\n    label:     'Custom Tab',\n    component: () => import('./src/example-tab.vue')\n  });\n")),(0,o.kt)("p",null,"Note we use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," property to allow us to target the tab only when the cluster is of our provider type."),(0,o.kt)("h3",{id:"localisation"},"Localisation"),(0,o.kt)("p",null,"The custom cluster type's label is defined as per any other extension text in ",(0,o.kt)("inlineCode",{parentName:"p"},"l10n/en-us.yaml")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.provider.<provider name>"),"."))}d.isMDXComponent=!0}}]);