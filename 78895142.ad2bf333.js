(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{129:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(126),s=r(135);r(127),r(55);t.a=function(e){var t=n.a.useState(!1),r=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!r)}})))),r&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:s.a},e.children)))}},130:function(e,t,r){"use strict";var a=r(0),n=r(131);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},132:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(130),s=r(128),l=r(56),c=r.n(l),o=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(l),g=v[0],O=v[1],j=a.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&O(y)}var R=function(e){O(e),null!=p&&f(p,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":r},b)},d.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},r)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},133:function(e,t,r){"use strict";var a=r(3),n=r(0),i=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:n}),t)}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(126)),s=r(132),l=r(133),c=(r(127),r(129),{id:"index-rust",title:"Rust and Redis",sidebar_label:"Rust",slug:"/develop/rust/"}),o={unversionedId:"develop/rust/index-rust",id:"develop/rust/index-rust",isDocsHomePage:!1,title:"Rust and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust.",source:"@site/docs/develop/rust/index-rust.mdx",slug:"/develop/rust/",permalink:"/develop/rust/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/rust/index-rust.mdx",version:"current",sidebar_label:"Rust",sidebar:"docs",previous:{title:"Go and Redis",permalink:"/develop/golang/"},next:{title:"Ruby and Redis",permalink:"/develop/ruby/"}},u=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Install Rust",id:"step-1-install-rust",children:[]},{value:"Step 2. Configure your current shell:",id:"step-2-configure-your-current-shell",children:[]},{value:"Step 3. Verify Rust compiler:",id:"step-3-verify-rust-compiler",children:[]},{value:"Step 4. Creating Cargo.toml with Redis dependency:",id:"step-4-creating-cargotoml-with-redis-dependency",children:[]},{value:"Step 5. Clone the repository",id:"step-5-clone-the-repository",children:[]},{value:"Step 6. Run the application",id:"step-6-run-the-application",children:[]},{value:"Further References",id:"further-references",children:[]}],d={toc:u};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust."),Object(i.b)("h3",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Rust community has built many client libraries that you can find here. For your first steps with Java and Rust, this article will show how to use a popula library: redis-rs\nThe web page \u201cRedis Enterprise and Rust\u201d will help you to get started with Redis Enterprise and Rust in a much easier manner.\nredis-rs is a rust implementation of a Redis client library.\nIt exposes a general purpose interface to Redis and also provides specific helpers for commonly used functionality."),Object(i.b)(s.a,{defaultValue:"redis-rs",values:[{label:"Redis-rs",value:"redis-rs"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"redis-rs",mdxType:"TabItem"},Object(i.b)("h3",{id:"step-1-install-rust"},"Step 1. Install Rust"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),Object(i.b)("h3",{id:"step-2-configure-your-current-shell"},"Step 2. Configure your current shell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," source $HOME/.cargo/env\n")),Object(i.b)("h3",{id:"step-3-verify-rust-compiler"},"Step 3. Verify Rust compiler:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," rustc --version\n rustc 1.49.0\n")),Object(i.b)("h3",{id:"step-4-creating-cargotoml-with-redis-dependency"},"Step 4. Creating Cargo.toml with Redis dependency:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' [dependencies]\n redis = "0.8.0"\n')),Object(i.b)("h3",{id:"step-5-clone-the-repository"},"Step 5. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-rust-getting-started\n")),Object(i.b)("h3",{id:"step-6-run-the-application"},"Step 6. Run the application"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," cargo run\n")),Object(i.b)("h3",{id:"further-references"},"Further References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redislabs.com/lp/redis-enterprise-rust/"}),"Redis Enterprise and Rust")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-rust-getting-started"}),"Getting Started with Redis & Rust"))))))}p.isMDXComponent=!0}}]);