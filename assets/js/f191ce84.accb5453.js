"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[7026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Building an Image for Container Registries",s={unversionedId:"guide/build-for-container-registry",id:"guide/build-for-container-registry",title:"Building an Image for Container Registries",description:"Sometimes you may need to have a custom version of the dashboard that is packaged alongside Rancher to be hosted within Github's container registry. There are a few use cases for this, for instance when developing a package/product for Rancher that doesn't need to be standalone or when it isn't necessary for the package to exist in the Dashboard by default.",source:"@site/docs/guide/build-for-container-registry.md",sourceDirName:"guide",slug:"/guide/build-for-container-registry",permalink:"/dashboard/guide/build-for-container-registry",draft:!1,tags:[],version:"current",lastUpdatedAt:1680802213,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"UI Walkthrough",permalink:"/dashboard/getting-started/ui-walkthrough"},next:{title:"Package Management",permalink:"/dashboard/guide/package-management"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Add branched repo as a submodule",id:"1-add-branched-repo-as-a-submodule",level:3},{value:"2. Create Dockerfile to build Rancher image",id:"2-create-dockerfile-to-build-rancher-image",level:3},{value:"3. Create action to dispatch the image",id:"3-create-action-to-dispatch-the-image",level:3},{value:"Running the custom build",id:"running-the-custom-build",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Caveats",id:"caveats",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-an-image-for-container-registries"},"Building an Image for Container Registries"),(0,r.kt)("p",null,"Sometimes you may need to have a custom version of the dashboard that is packaged alongside Rancher to be hosted within Github's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages"},"container registry"),". There are a few use cases for this, for instance when developing a package/product for Rancher that doesn't need to be standalone or when it isn't necessary for the package to exist in the Dashboard by default."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A branch on the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher/dashboard"},"Dashboard repo")," to store the custom dashboard"),(0,r.kt)("li",{parentName:"ul"},"A target repository where the dashboard will be added as a submodule"),(0,r.kt)("li",{parentName:"ul"},"Access to the target repository actions with a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"PAT")," to authenticate from within the action")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-add-branched-repo-as-a-submodule"},"1. Add branched repo as a submodule"),(0,r.kt)("p",null,"Run the following to ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"add a submodule")," to your target repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule add <branch-repo-path>\n")),(0,r.kt)("p",null,"This will generate a config file ",(0,r.kt)("inlineCode",{parentName:"p"},".gitmodules")," in the root directory, it will contain the path of the submodule and the url of the repo. In order to target a specific branch you will need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"branch")," property to this file. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[submodule "dashboard"]\n    path = dashboard\n    url = https://github.com/rancher/dashboard.git\n    branch = <target-branch>\n')),(0,r.kt)("p",null,"Push these changes to the target repo and you will now see the submodule with the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," you specified in ",(0,r.kt)("inlineCode",{parentName:"p"},".gitmodules"),"."),(0,r.kt)("h3",{id:"2-create-dockerfile-to-build-rancher-image"},"2. Create Dockerfile to build Rancher image"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/"},"Dockerfile")," in your branched repo that will build both the frontend from your branch and the main Rancher image. It will need to replace the dashboard files in the Rancher image with the build from the new frontend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# /Dockerfile.example\n\nFROM node:lts AS builder\n\nWORKDIR /src\n\nCOPY . .\nRUN yarn --pure-lockfile install\n\nENV ROUTER_BASE="/dashboard"\nRUN yarn run build --spa\n\nFROM rancher/rancher:v2.6.3\nWORKDIR /var/lib/rancher\nRUN rm -rf /usr/share/rancher/ui-dashboard/dashboard*\nCOPY --from=builder /src/dist /usr/share/rancher/ui-dashboard/dashboard\n')),(0,r.kt)("p",null,"This will build the frontend from your branch with ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN yarn run build --spa")," and replace the dashboard in the Rancher image with ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY --from=builder /src/dist /usr/share/rancher/ui-dashboard/dashboard"),"."),(0,r.kt)("h3",{id:"3-create-action-to-dispatch-the-image"},"3. Create action to dispatch the image"),(0,r.kt)("p",null,"In order to make publishing the new package to the Github Registry automatic you will need to create an action that will build the new Rancher image from your submodule's Dockerfile and dispatch the image into a package."),(0,r.kt)("p",null,"Create two new directories in your target repo:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/.github/workflows")),(0,r.kt)("p",null,"Add a new YAML file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# /.github/workflows/build-image.yml\n\nname: Dispatch Dashboard image\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n    \nenv:\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }} # The target repo\n\njobs:\n  build:\n    name: Build Dashboard image\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n        with:\n          token: ${{ secrets.WORKFLOW_PAT }} # The PAT referenced in prerequisites\n          submodules: recursive # If the repo has multiple submodules to checkout\n      \n      - name: Set up QEMU\n        uses: docker/setup-qemu-action@v1\n        \n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v1\n\n      - name: Login to GitHub Container Registry\n        uses: docker/login-action@v1\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }} # This is the repo owner\n          password: ${{ secrets.GITHUB_TOKEN }} # A token generated during the workflow\n\n      - name: Build and push Dashboard image\n        uses: docker/build-push-action@v2        \n        with:\n          context: ./dashboard # Context for docker to find the Dockerfile in the submodule\n          file: ./dashboard/Dockerfile.example # Dockerfile you created\n          push: true\n          tags: |\n            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest \n")),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/build-push-action#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"docker/build-push-action@v2"))," to do the heavy lifting for us. This file will create a new package any time a ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pull request")," is made on the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch. It first provides a platform for which to build the image that has permissions to read contents and write packages. We're using ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu-latest")," in this case. "),(0,r.kt)("p",null,"The steps laid out are mostly self-explanatory, it will first checkout the repository with the given ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets.WORKFLOW_PAT")," you created in the ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),". The steps for setting up QEMU and Docker Buildx are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/build-push-action#usage"},"recommened")," by the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/build-push-action"),"."),(0,r.kt)("p",null,"The final two steps are where the magic happens. First logging into the Github Container Registry with a temporary ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},(0,r.kt)("inlineCode",{parentName:"a"},"GITHUB_TOKEN")),", then building and pushing the actual image to be packaged."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"running-the-custom-build"},"Running the custom build"),(0,r.kt)("p",null,'When running your newly built image Rancher will need to know to serve the "locally" installed dashboard. You can do this by setting the ',(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_UI_DASHBOARD_INDEX")," environment variable in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d --name dashboard \\\n  --restart=unless-stopped \\\n  --privileged \\\n  -p 80:80 -p 443:443 \\\n  -e CATTLE_UI_DASHBOARD_INDEX=https://localhost/dashboard/index.html \\\n  ghcr.io/<example-repo>:latest\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"At the time of writing (February '22), the build time for the Dashboard frontend and Rancher image takes about 8 minutes, so some debugging in place will greatly diminish any frustration while building an action."),(0,r.kt)("p",null,"The simplest way of adding debugging to your action is by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-runner-diagnostic-logging"},"enabling runner diagnostic logging"),". You can do this by adding an environment variable to the beginning of your workflow action ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIONS_RUNNER_DEBUG: true")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# /.github/workflows/build-image.yml\n\n...\nenv:\n  ACTIONS_RUNNER_DEBUG: true\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }}\n...\n")),(0,r.kt)("p",null,"This way can be a little verbose but can help narrow down which step is causing you trouble. If you want to see the logs for a specific step you can add an environment variable to your step: ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIONS_STEP_DEBUG: true")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# /.github/workflows/build-image.yml\n\n...\n- name: Build and push dashboard image\n  uses: docker/build-push-action@v2\n  env:\n    ACTIONS_STEP_DEBUG: true\n  with:\n    context: ./dashboard\n...\n")),(0,r.kt)("p",null,"Some actions have unique debugging features that you can utilize container logs to see what is happening behind the scenes. In our ",(0,r.kt)("inlineCode",{parentName:"p"},"build-image.yml")," example we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/setup-buildx-action")," which has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/setup-buildx-action#buildkit-container-logs"},"logs you can access"),". "),(0,r.kt)("h3",{id:"caveats"},"Caveats"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/build-push-action")," there are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/build-push-action/blob/master/TROUBLESHOOTING.md"},"a few caveats")," that could cause confusion. Be sure that your repository name is lowercase!"))}c.isMDXComponent=!0}}]);