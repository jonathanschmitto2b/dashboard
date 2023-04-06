"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,k=h["".concat(s,".").concat(c)]||h[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Getting Started",l={unversionedId:"extensions/extensions-getting-started",id:"extensions/extensions-getting-started",title:"Getting Started",description:"This guide will walk through creating a new extension from scratch.",source:"@site/docs/extensions/extensions-getting-started.md",sourceDirName:"extensions",slug:"/extensions/extensions-getting-started",permalink:"/dashboard/extensions/extensions-getting-started",draft:!1,tags:[],version:"current",lastUpdatedAt:1680802213,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/dashboard/extensions/introduction"},next:{title:"Initializing Extensions",permalink:"/dashboard/extensions/initializing-extensions"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Application",id:"creating-the-application",level:2},{value:"Creating the Skeleton App",id:"creating-the-skeleton-app",level:3},{value:"Creating an Extension",id:"creating-an-extension",level:3},{value:"<strong><em>Extension Options</em></strong>",id:"extension-options",level:4},{value:"Configuring an Extension",id:"configuring-an-extension",level:3},{value:"Running the App",id:"running-the-app",level:2},{value:"Building the Extension",id:"building-the-extension",level:2},{value:"Loading Into Rancher",id:"loading-into-rancher",level:2},{value:"Loading into another Rancher Instance",id:"loading-into-another-rancher-instance",level:3},{value:"Creating a Release",id:"creating-a-release",level:2},{value:"Release Prerequisites",id:"release-prerequisites",level:3},{value:"Adding the Release Workflow",id:"adding-the-release-workflow",level:3},{value:"Consuming the Helm chart",id:"consuming-the-helm-chart",level:3},{value:"Wrap-up",id:"wrap-up",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"This guide will walk through creating a new extension from scratch."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need a recent version of nodejs installed (Tested with node version: ",(0,o.kt)("inlineCode",{parentName:"p"},"v16.19.1"),")."),(0,o.kt)("p",null,"You'll also need the yarn package manager installed, which can be done with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g yarn"),"."),(0,o.kt)("h2",{id:"creating-the-application"},"Creating the Application"),(0,o.kt)("p",null,"In order to develop a new Extension, you need an application UI to host it in during development. Rancher provides a helper to create a skeleton application for you."),(0,o.kt)("h3",{id:"creating-the-skeleton-app"},"Creating the Skeleton App"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to a folder not within the checkout and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create @rancher/app my-app\ncd my-app\n")),(0,o.kt)("p",null,"This will create a new folder ",(0,o.kt)("inlineCode",{parentName:"p"},"my-app")," and populate it with the minimum files needed."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you don't want to create a new folder, but instead want the files created in an existing folder, use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn create @rancher/app ."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The skeleton application references the Rancher dashboard code via the ",(0,o.kt)("inlineCode",{parentName:"p"},"@rancher/shell")," npm module.")),(0,o.kt)("p",null,"You can run the app with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn install\nAPI=<Rancher Backend URL> yarn dev\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You will need to have a Rancher backend available and the ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," environment variable above set correctly to reference it.")),(0,o.kt)("p",null,"You should be able to open a browser at ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:8005"},"https://127.0.0.1:8005")," and you'll get the Rancher Dashboard UI. Your skeleton application is a full Rancher UI - but referenced via ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,o.kt)("p",null,"The next step is to create an extension."),(0,o.kt)("h3",{id:"creating-an-extension"},"Creating an Extension"),(0,o.kt)("p",null,"Once again, Rancher provides a helper to add an extension. You can choose to have multiple extensions or a single extension within\nthe parent folder."),(0,o.kt)("p",null,"Go ahead and run the following command to create a new extension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create @rancher/pkg test\n")),(0,o.kt)("p",null,"This will create a new UI Package in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./pkg/test")," folder."),(0,o.kt)("h4",{id:"extension-options"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("em",{parentName:"strong"},"Extension Options"))),(0,o.kt)("p",null,"There are two options that can be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@rancher/pkg")," script:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-t"),": Creates additional boilerplate directories for types, including: 'l10n', 'models', 'edit', 'list', and 'detail'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-w"),": Creates a workflow file ('build-extension.yml') to be used as a Github action. This will automatically build your extension and release a Helm chart.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-w")," option to create an automated workflow will require additonal prequesites, see the ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-release"},"Release")," section.")),(0,o.kt)("h3",{id:"configuring-an-extension"},"Configuring an Extension"),(0,o.kt)("p",null,"Replace the contents of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"./pkg/test/index.js")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  // plugin.addProduct(require('./product'));\n}\n")),(0,o.kt)("p",null,"Next, create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"./pkg/test/product.js")," with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function init($plugin, store) {\n  const { product } = $plugin.DSL(store, $plugin.name);\n\n  product({\n    icon:                  'gear',\n    inStore:               'management',\n    removable:             false,\n    showClusterSwitcher:   false,\n  });\n}\n")),(0,o.kt)("h2",{id:"running-the-app"},"Running the App"),(0,o.kt)("p",null,"We've created a bare bones extension and exposed a new 'product' that will appear in the top-level slide-in menu. At this stage, it does\nnothing other than that!"),(0,o.kt)("p",null,"You should now be able to run the UI again with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn dev\n")),(0,o.kt)("p",null,"Open a web browser to ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:8005"},"https://127.0.0.1:8005")," and you'll see a new 'Example' nav item in the top-level slide-in menu."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You should be able to make changes to the extension and the UI will hot-reload and update in the browser.")),(0,o.kt)("h2",{id:"building-the-extension"},"Building the Extension"),(0,o.kt)("p",null,"Up until now, we've run the extension inside of the skeleton application - this is the developer workload."),(0,o.kt)("p",null,"To build the extension so we can use it independently, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn build-pkg test\n")),(0,o.kt)("p",null,"This will build the extension as a Vue library and the built extension will be placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist-pkg")," folder."),(0,o.kt)("h2",{id:"loading-into-rancher"},"Loading Into Rancher"),(0,o.kt)("p",null,"When we run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev"),", our test extension will be automatically loaded into the application - this allows us to develop\nthe extension with hot-reloading. To test loading the extension dynamically, we can update configuration to tell Rancher not to include our extension."),(0,o.kt)("p",null,"To do this, create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"test-app")," folder, and add these contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EXCLUDES_PKG='test'\n")),(0,o.kt)("p",null,"If necessary, bring in the environment variables by running ",(0,o.kt)("inlineCode",{parentName:"p"},"source .env"),"."),(0,o.kt)("p",null,"Now, run the UI with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn dev\n")),(0,o.kt)("p",null,"Open a web browser to ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:8005"},"https://127.0.0.1:8005")," and you'll see that the Example nav item is not present - since the extension was not loaded."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You need to be an admin user to test Extensions in the Rancher UI")),(0,o.kt)("p",null,"Go to the user avatar in the top-right and go to 'Preferences'. Under 'Advanced Features', check the `Enable Extension developer features' checkbox."),(0,o.kt)("p",null,"Now, bring in the slide-in menu (click on the hamburger menu in the top-left) and click on 'Extensions'."),(0,o.kt)("p",null,"Go to the three dot menu and select 'Developer load' - you'll get a dialog allowing you to load the extension into the UI."),(0,o.kt)("p",null,"In the top input box ",(0,o.kt)("inlineCode",{parentName:"p"},"Extension URL"),", enter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://127.0.0.1:8005/pkg/test-0.1.0/test-0.1.0.umd.min.js\n")),(0,o.kt)("p",null,"Press 'Load' and the extension will be loaded, you should see a notification telling you the extension was loaded and if you bring in the side menu again, you should see the Example nav item there now."),(0,o.kt)("p",null,"This illustrates dynamically loading an extension."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that when we started the UI, it serves up any extensions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist-pkg")," folder under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pkg")," route of the app. Also note that when we build extensions they are versioned, so you'll see that reflected in the URL we used.")),(0,o.kt)("h3",{id:"loading-into-another-rancher-instance"},"Loading into another Rancher Instance"),(0,o.kt)("p",null,"In the steps above, we were able to load the extension into our test application. We can load the extension into any running Rancher instance."),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn serve-pkgs\n")),(0,o.kt)("p",null,"This will start a small web server (on port 4500) that serves up the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist-pkg")," folder. It will output which extensions are being served up - in our case you should see output like that below - it shows the URLs to use for each of the available extensions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Serving catalog on http://127.0.0.1:4500\n\nServing packages:\n\n  test-0.1.0 available at: http://127.0.0.1:4500/test-0.1.0/test-0.1.0.umd.min.js\n")),(0,o.kt)("p",null,"In a different Rancher UI, you should be able to follow the steps in the previous section, but instead use the URL from the output above in the Developer Load dialog."),(0,o.kt)("p",null,"You'll notice that if you reload the Rancher UI, the extension is not persistent and will need to be added again. You can make it persistent by checking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Persist extension by creating custom resource")," checkbox in the Developer Load dialog."),(0,o.kt)("h2",{id:"creating-a-release"},"Creating a Release"),(0,o.kt)("p",null,"Creating a Release for your extension is the official avenue for loading extensions into any Rancher instance. As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/introduction"},"Introduction"),", the extension can be packaged into a Helm chart and added as a Helm repository to be easily accessible from your Rancher Manager."),(0,o.kt)("p",null,"We have created a workflow for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"Github Actions")," which will automatically build, package, and release your extension as a Helm chart. Then it will give your Github repository a ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository/"},"Helm repository")," endpoint which we can use to consume the chart in Rancher. "),(0,o.kt)("h3",{id:"release-prerequisites"},"Release Prerequisites"),(0,o.kt)("p",null,"In order to have a Helm repository you will need to create the (",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages"),") on your Github repository."),(0,o.kt)("h3",{id:"adding-the-release-workflow"},"Adding the Release Workflow"),(0,o.kt)("p",null,"To add the workflow to your extension, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-w")," option when running the ",(0,o.kt)("inlineCode",{parentName:"p"},"@rancher/pkg")," script. For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create @rancher/pkg test -w\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},".github")," directory within the root folder of your app which will contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"build-extension.yml")," workflow file. Initially the release is gated by a Push or Pull Request targeting the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. To update your workflow with different events to trigger the workflow, you can find more information in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"Github docs"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you wish to build and publish the Helm chart manually or to a specific registry, you can follow the steps listed in the ",(0,o.kt)("a",{parentName:"p",href:"./advanced#publishing-the-extension-manually"},"Advanced section"),".")),(0,o.kt)("h3",{id:"consuming-the-helm-chart"},"Consuming the Helm chart"),(0,o.kt)("p",null,'After releasing the Helm chart you will be able to consume this from the Rancher UI by adding your Helm repository\'s URL to the App -> Repository list. If you used the automated workflow to release the Helm chart, you can find the URL within your Github repository under the "github-pages" Environment. '),(0,o.kt)("p",null,"The URL should be listed as: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<organization>.github.io/<repository>")),(0,o.kt)("p",null,"Once the URL has been added to the repository list, the extension should appear within the Extensions page."),(0,o.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,o.kt)("p",null,"This guide has showed you how to create a skeleton application that helps you develop and test one or more extensions."),(0,o.kt)("p",null,"We showed how we can develop and test those with hot-reloading in the browser and how we can build our extensions into a package that we can dynamically load into Rancher at runtime. We also went over how to release our extensions as Helm charts using the automated workflow."))}d.isMDXComponent=!0}}]);