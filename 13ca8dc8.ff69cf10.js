(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{239:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(237),s=a(245);a(238),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(c.a,{components:s.a},e.children)))}},240:function(e,t,a){"use strict";var n=a(0),i=a(241);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},241:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},242:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(240),s=a(244),r=a(56),l=a.n(r),o=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,p=e.groupId,u=e.className,h=Object(c.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(n.useState)(r),g=j[0],f=j[1],v=n.Children.toArray(e.children);if(null!=p){var N=m[p];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&f(N)}var S=function(e){f(e),null!=p&&O(p,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return S(t)},onClick:function(){S(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},243:function(e,t,a){"use strict";var n=a(3),i=a(0),c=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},409:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rate-limiting-d20fba142ccfad82e5d3abc2f4642171.png"},410:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/leaderboard-8ba889677215417a4cd2820e75e84af0.png"},411:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cachingMarketplace-ac4abc085590a8c1a924fdde9ef05992.png"},412:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatMarketplace-f10024ee88b9fba7c0a1d49435116c9c.png"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),c=(a(0),a(237)),s=a(242),r=a(243),l=(a(238),a(239),{id:"index-dotnet",title:".NET and Redis",sidebar_label:".NET",slug:"/develop/dotnet/"}),o={unversionedId:"develop/dotnet/index-dotnet",id:"develop/dotnet/index-dotnet",isDocsHomePage:!1,title:".NET and Redis",description:"Getting Started",source:"@site/docs/develop/dotnet/index-dotnet.mdx",slug:"/develop/dotnet/",permalink:"/develop/dotnet/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/index-dotnet.mdx",version:"current",sidebar_label:".NET",sidebar:"docs",previous:{title:"Using Redis with FastAPI",permalink:"/develop/python/fastapi"},next:{title:"Go and Redis",permalink:"/develop/golang/"}},b=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Install the Package",id:"step-1-install-the-package",children:[]},{value:"Step 2. Import the Required Namespace",id:"step-2-import-the-required-namespace",children:[]},{value:"Step 3. Initialize the ConnectionMultiplexer",id:"step-3-initialize-the-connectionmultiplexer",children:[]},{value:"Step 4. Grab Database Connection",id:"step-4-grab-database-connection",children:[]},{value:"Step 5. Use the connection",id:"step-5-use-the-connection",children:[{value:"Set String",id:"set-string",children:[]},{value:"Get String",id:"get-string",children:[]},{value:"Insert Into List",id:"insert-into-list",children:[]},{value:"Pop Out of List",id:"pop-out-of-list",children:[]},{value:"Insert Into Set",id:"insert-into-set",children:[]},{value:"Set Union",id:"set-union",children:[]},{value:"Set Intersection",id:"set-intersection",children:[]},{value:"Set Difference",id:"set-difference",children:[]},{value:"Add to Hash",id:"add-to-hash",children:[]},{value:"Get Field From Hash",id:"get-field-from-hash",children:[]},{value:"Get All Fields From Hash",id:"get-all-fields-from-hash",children:[]}]},{value:"Redis Launchpad",id:"redis-launchpad",children:[]}],d={toc:b};function p(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,"The .NET Community has built many ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/clients#c-sharp"}),"client libraries")," to help handle requests to Redis Server. In this guide, we'll mostly be concerned with using the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/StackExchange/StackExchange.Redis"}),"StackExchange.Redis")," client library. As the name implies the StackExchange client is developed by StackExchange for use on popular websites like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/"}),"StackOverflow"),"."),Object(c.b)("h2",{id:"step-1-install-the-package"},"Step 1. Install the Package"),Object(c.b)("p",null,"There are a few ways to Install the Package:"),Object(c.b)(s.a,{defaultValue:"cli",values:[{label:".NET CLI",value:"cli"},{label:"PM Console",value:"pmConsole"},{label:"Package Reference",value:"csproj"},{label:"NuGet GUI",value:"gui"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"cli",mdxType:"TabItem"},Object(c.b)("p",null,"Run the following in the directory of the ",Object(c.b)("inlineCode",{parentName:"p"},"csproj")," file you want to add the package too."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"  dotnet add package StackExchange.Redis\n"))),Object(c.b)(r.a,{value:"pmConsole",mdxType:"TabItem"},Object(c.b)("p",null,"  Run the following command from the Package Manager Console"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"Install-Package StackExchange.Redis\n"))),Object(c.b)(r.a,{value:"csproj",mdxType:"TabItem"},Object(c.b)("p",null,"  You can also add the package directly to you ",Object(c.b)("inlineCode",{parentName:"p"},"csproj")," file with the following XML:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-XML"}),'<ItemGroup>    \n  <PackageReference Include="StackExchange.Redis" Version="2.2.4" />\n</ItemGroup>\n'))),Object(c.b)(r.a,{value:"gui",mdxType:"TabItem"},Object(c.b)("p",null,"  If you're using Visual Studio, and you want to use the NuGet GUI just follow the steps outlined by ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"}),"Microsoft"),", and make sure to search for ",Object(c.b)("strong",{parentName:"p"},"StackExchange.Redis")))),Object(c.b)("h2",{id:"step-2-import-the-required-namespace"},"Step 2. Import the Required Namespace"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"using StackExchange.Redis;\n")),Object(c.b)("h2",{id:"step-3-initialize-the-connectionmultiplexer"},"Step 3. Initialize the ConnectionMultiplexer"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackexchange.github.io/StackExchange.Redis/Basics"}),"ConnectionMultiplexer")," is the main arbiter of the connection to Redis inside the CLR, your application should maintain a single instance of the ConnectionMultiplexer throughout its runtime. You can initialize the Multiplexer with either a connection string, or with a ",Object(c.b)("inlineCode",{parentName:"p"},"ConfigurationOptions")," object. A typical connection string is of the form: ",Object(c.b)("inlineCode",{parentName:"p"},"HOST_NAME:PORT_NUMBER,password=PASSWORD")," where ",Object(c.b)("inlineCode",{parentName:"p"},"HOST_NAME")," is the host name of your server (e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"localhost"),"), ",Object(c.b)("inlineCode",{parentName:"p"},"PORT_NUMBER")," is the port number Redis is listening on (e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"6379"),") and ",Object(c.b)("inlineCode",{parentName:"p"},"PASSWORD")," is your redis server's password (e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"secret_password"),")."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'static readonly ConnectionMultiplexer _redis = ConnectionMultiplexer.Connect($"{HOST_NAME}:{PORT_NUMBER},password={PASSWORD}");\n')),Object(c.b)("h2",{id:"step-4-grab-database-connection"},"Step 4. Grab Database Connection"),Object(c.b)("p",null,"Once we have a handle for the Multiplexer, we need get a connection to the database."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var db = _redis.GetDatabase();\n")),Object(c.b)("h2",{id:"step-5-use-the-connection"},"Step 5. Use the connection"),Object(c.b)("p",null,"Now that you've retreived the connection to the database, all that's left is to use it. Here are some simple operations:"),Object(c.b)(s.a,{defaultValue:"ping",values:[{label:"Ping the Database",value:"ping"},{label:"Set and Get String",value:"strings"},{label:"List Operations",value:"lists"},{label:"Set Operations",value:"sets"},{label:"Hash Operations",value:"hashes"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"ping",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"db.Ping();\n"))),Object(c.b)(r.a,{value:"strings",mdxType:"TabItem"},Object(c.b)("h3",{id:"set-string"},"Set String"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'db.StringGetSet("foo","bar");\n')),Object(c.b)("h3",{id:"get-string"},"Get String"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Console.WriteLine(db.StringGet("foo"));\n'))),Object(c.b)(r.a,{value:"lists",mdxType:"TabItem"},Object(c.b)("h3",{id:"insert-into-list"},"Insert Into List"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'db.ListLeftPush("simple-list", 1);\n')),Object(c.b)("h3",{id:"pop-out-of-list"},"Pop Out of List"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var result = db.ListRightPop("simple-list");\nConsole.WriteLine(result);\n'))),Object(c.b)(r.a,{value:"sets",mdxType:"TabItem"},Object(c.b)("h3",{id:"insert-into-set"},"Insert Into Set"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'db.SetAdd("sample-set-1", new RedisValue[]{"apple", "banana", "tangerine", "kiwi"});\ndb.SetAdd("sample-set-2", new RedisValue[]{"apple", "banana", "orange", "blueberries"});\n')),Object(c.b)("h3",{id:"set-union"},"Set Union"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var union = db.SetCombine(SetOperation.Union, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ", union));\n')),Object(c.b)("h3",{id:"set-intersection"},"Set Intersection"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var intersection = db.SetCombine(SetOperation.Intersect, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ", intersection));\n')),Object(c.b)("h3",{id:"set-difference"},"Set Difference"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var difference = db.SetCombine(SetOperation.Difference, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ",difference));\n'))),Object(c.b)(r.a,{value:"hashes",mdxType:"TabItem"},Object(c.b)("h3",{id:"add-to-hash"},"Add to Hash"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'db.HashSet("person:1", new HashEntry[]{new HashEntry("first-name","John"), new HashEntry("last-name","Smith")});\n')),Object(c.b)("h3",{id:"get-field-from-hash"},"Get Field From Hash"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var firstName = db.HashGet("person:1", "first-name");\nConsole.WriteLine(firstName);\n')),Object(c.b)("h3",{id:"get-all-fields-from-hash"},"Get All Fields From Hash"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var allFields = db.HashGetAll("person:1");\nConsole.WriteLine(string.Join(", ",allFields));\n')))),Object(c.b)("h2",{id:"redis-launchpad"},"Redis Launchpad"),Object(c.b)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nBelow are few of these apps. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://launchpad.redislabs.com"}),"Click here to access the complete lists of apps")),Object(c.b)("div",{class:"row text--center"},Object(c.b)("div",{class:"col "},Object(c.b)("div",{className:"ri-container"},Object(c.b)("h4",{id:"rate-limiting-app-in-net"},"Rate Limiting App in .NET"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-csharp-dot-net"}),Object(c.b)("img",{alt:"Launchpad",src:a(409).default}))))),Object(c.b)("div",{class:"col"},Object(c.b)("div",{className:"ri-container"},Object(c.b)("h4",{id:"leaderboard-app-in-net"},"Leaderboard App in .NET"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-dotnet"}),Object(c.b)("img",{alt:"Launchpad",src:a(410).default})))))),Object(c.b)("div",{class:"row text--center"},Object(c.b)("div",{class:"col"},Object(c.b)("div",{className:"ri-container"},Object(c.b)("h4",{id:"api-caching-net"},"API Caching .NET"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-caching-demo-csharpdotnet"}),Object(c.b)("img",{alt:"Launchpad",src:a(411).default}))))),Object(c.b)("div",{class:"col"},Object(c.b)("div",{className:"ri-container"},Object(c.b)("h4",{id:"basic-chat-app-net"},"Basic Chat App .NET"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-redis-chat-app-demo-dotnet"}),Object(c.b)("img",{alt:"Launchpad",src:a(412).default})))))),Object(c.b)("h4",{id:"additional-resources"},"Additional Resources"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/rs/references/client_references/client_csharp/"}),"Using C# with Redis")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/rs/references/client_references/client_csharp/"}),"Using SSL and StackExchange.Redis"))))}p.isMDXComponent=!0}}]);