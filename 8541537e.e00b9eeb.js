(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return d}));var o=a(3),i=a(7),n=(a(0),a(175)),s=(a(180),a(181),a(176),a(177),{id:"index-slowlog",title:"Slowlog Configuration using RedisInsight",sidebar_label:"Slowlog Configuration",slug:"/explore/redisinsight/slowlog"}),l={unversionedId:"explore/redisinsight/slowlog/index-slowlog",id:"explore/redisinsight/slowlog/index-slowlog",isDocsHomePage:!1,title:"Slowlog Configuration using RedisInsight",description:"RedisInsight, a free GUI for Redis, allows you to identify and troubleshoot bottlenecks with the Slowlog analysis tool. If you are experiencing high latency and high CPU usage with Redis operations and are looking for a tool for debugging and tracing your Redis database, RedisInsight Slow Log is a perfect tool for you.",source:"@site/docs/explore/redisinsight/slowlog/index-slowlog.mdx",slug:"/explore/redisinsight/slowlog",permalink:"/explore/redisinsight/slowlog",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/slowlog/index-slowlog.mdx",version:"current",sidebar_label:"Slowlog Configuration",sidebar:"docs",previous:{title:"Browser Tool using RedisInsight",permalink:"/explore/redisinsight/browser"},next:{title:"Memory Analysis using RedisInsight",permalink:"/explore/redisinsight/memoryanalyzer"}},r=[{value:"Step 1. Create a Redis database",id:"step-1-create-a-redis-database",children:[]},{value:"Step 2: Install RedisInsight",id:"step-2-install-redisinsight",children:[]},{value:"Step 3. Connect to the database using RedisInsight GUI",id:"step-3-connect-to-the-database-using-redisinsight-gui",children:[]},{value:"Step 4: Click \u201cSlowlog\u201d and then \u201cConfigure Slowlog\u201d",id:"step-4-click-slowlog-and-then-configure-slowlog",children:[]},{value:"Step 5. Configure Slowlog",id:"step-5-configure-slowlog",children:[]},{value:"Step 6. Prepare a script to add large dataset to Redis database",id:"step-6-prepare-a-script-to-add-large-dataset-to-redis-database",children:[]},{value:"Configuring the execution time",id:"configuring-the-execution-time",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:r};function d(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"RedisInsight, a free GUI for Redis, allows you to identify and troubleshoot bottlenecks with the Slowlog analysis tool. If you are experiencing high latency and high CPU usage with Redis operations and are looking for a tool for debugging and tracing your Redis database, RedisInsight Slow Log is a perfect tool for you."),Object(n.b)("p",null,"Redis Slow Log is highly effective at showing the actual processing time of each slow command. The Redis slowlog is a log of all commands which exceed a specified run time. Please note that the network latency is not included in the measurement, just the time taken to actually execute the command. Redis Slow Log is a list of slow operations for your Redis instance."),Object(n.b)("p",null,"Follow the below steps to see how Slowlog is leveraged to troubleshoot performance issues."),Object(n.b)("h2",{id:"step-1-create-a-redis-database"},"Step 1. Create a Redis database"),Object(n.b)("p",null,"Follow ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.redislabs.com/create"}),"https://developer.redislabs.com/create")," to install and create Redis database"),Object(n.b)("h2",{id:"step-2-install-redisinsight"},"Step 2: Install RedisInsight"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.redislabs.com/explore/redisinsight"}),"Follow this link")," to install RedisInsight"),Object(n.b)("h2",{id:"step-3-connect-to-the-database-using-redisinsight-gui"},"Step 3. Connect to the database using RedisInsight GUI"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(411).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-4-click-slowlog-and-then-configure-slowlog"},"Step 4: Click \u201cSlowlog\u201d and then \u201cConfigure Slowlog\u201d"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(412).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-5-configure-slowlog"},"Step 5. Configure Slowlog"),Object(n.b)("p",null,"There are two configurations related to slow log query - "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"slowlog-log-slower-than: Used to set the evaluation time of slow query, that is to say, commands that exceed this configuration item will be treated as slow operations and recorded in the slow query log. Its execution unit is microseconds (1 second equals 1000000 microseconds);"),Object(n.b)("li",{parentName:"ul"},"slowlog-max-len: Used to configure the maximum number of records in the slow query log.")),Object(n.b)("p",null,"Please note that a negative number disables the slow log, while a value of zero forces the logging of every command. Slowlog-max-len is the length of the slow log. The minimum value is zero. When a new command is logged and the slow log is already at its maximum length, the oldest one is removed from the queue of logged commands in order to make space. The configuration can be done by editing redis.conf or while the server is running using the CONFIG GET and CONFIG SET commands."),Object(n.b)("p",null,"Slowlog will log the last X amount queries which took more time than Y microseconds to run. You can set this either in redis.conf or at runtime using CONFIG command"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," CONFIG SET slowlog-log-slower-than 500\n CONFIG SET slowlog-max-len 50\n")),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(413).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-6-prepare-a-script-to-add-large-dataset-to-redis-database"},"Step 6. Prepare a script to add large dataset to Redis database"),Object(n.b)("p",null,"To see slowlog in action, let us pick up a large dataset. Create a file called importcities.py and add the below content:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),' import csv\n import config\n from redis import Redis\n\n # Database Connection\n host = config.REDIS_CFG["host"]\n port = config.REDIS_CFG["port"]\n pwd = config.REDIS_CFG["password"]\n redis = Redis(host=host, port=port, password=pwd, charset="utf-8", decode_responses=True)\n\n # Import Cities\n print("Importing ...")\n\n count = 0\n\n with open("data/worldcities.csv", \'r\') as cities:\n    reader = csv.DictReader(cities)\n    for row in reader:\n        id = row["id"]\n        name = row["city_ascii"]\n        lng = row["lng"]\n        lat = row["lat"]\n        country = row["country"]\n        pop = row["population"]\n\n        print("id = {}, name = {}, lng = {}, lat = {}".format(id, name, lng, lat))\n        count += 1\n\n        redis.hmset("ct:{}".format(id), { "_id" : id, "name" : name, "country" : country, "population" : pop })\n        redis.geoadd("idx:cities", lng, lat, id)\n        redis.hset("idx:city_by_name", name, id)\n\n')),Object(n.b)("p",null,"Create a file called config.py as shown below:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),' REDIS_CFG = {\n        "host" : "localhost",\n        "port" : 6379,\n        "password" : ""\n }\n\n')),Object(n.b)("p",null,"Ensure that you provide the right host and port details."),Object(n.b)("p",null,"Execute the script:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," python3 importcities.py\n")),Object(n.b)("p",null,"You will see the below results:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," id = 762, name = Labatt Ontario Breweries, lng = -81.2467, lat = 42.9778\n id = 915, name = Ninkasi Brewing, lng = -123.11, lat = 44.0569\n id = 930, name = Oaken Barrel Brewing, lng = -86.0901, lat = 39.615\n Import of 16790 records completed\n\n")),Object(n.b)("p",null,"If you want to simulate slow logs, then consider using KEYS command. It is always recommended NOT TO USE ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.io/commands/keys"}),"KEYS")," in your regular application code. If you're looking for a way to find keys in a subset of your keyspace, consider using ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.io/commands/scan"}),"SCAN")," or ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.io/topics/data-types#sets"}),"sets"),"."),Object(n.b)("p",null,"The KEYS command may ruin performance when it is executed against large databases"),Object(n.b)("p",null,"Let us try to run KEYS * in RedisInsight CLI and see if it generates slow log as shown below:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(414).default,title:"image_tooltip"})),Object(n.b)("p",null,"Run it one more time and you will notice below:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(415).default,title:"image_tooltip"})),Object(n.b)("p",null,"Try decreasing the execution time(50 ms), and you will notice that the below run query also gets logged into the slowlog "),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(416).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"configuring-the-execution-time"},"Configuring the execution time"),Object(n.b)("p",null,"Each entry in the slowlog contains four fields: a slowlog entry ID, the Unix timestamp of when the command was run, the execution time in microseconds, and an array with the command itself, along with any arguments. See the example output below:"),Object(n.b)("p",null,"In order to retrieve the slow log queries, you have to use SLOWLOG GET X. Where X is the number of slow queries you want to retrieve."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(417).default,title:"image_tooltip"})),Object(n.b)("p",null,"As shown above, the result displays a unique id, timestamp, time taken to execute the query in microseconds, and the actual command + parameter executed. It is important to note that  the Slow log is transient; there's no persistence for it so in the case of failover, the slow log is lost. If you are looking to rely on a persistent slow log, you'll be wanting to reconsider your design choices"),Object(n.b)("p",null,"Please note: If I choose \u201c0\u201d it forces the logging of every command while \u201c1\u201d disabled the slow log."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(418).default,title:"image_tooltip"})),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:a(419).default,title:"image_tooltip"})),Object(n.b)("p",null,":::Important:::"),Object(n.b)("p",null,"In a clustered database, each node can have different values for slow log.  You will need to use the configuration tool in order to configure slow log for clustered databases."),Object(n.b)("h2",{id:"additional-links"},"Additional Links"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight"))))}d.isMDXComponent=!0},177:function(e,t,a){"use strict";var o=a(0),i=a.n(o),n=a(175),s=a(183);a(176),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],o=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return o(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(n.a,{components:s.a},e.children)))}},178:function(e,t,a){"use strict";var o=a(0),i=a(179);t.a=function(){var e=Object(o.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},179:function(e,t,a){"use strict";var o=a(0),i=Object(o.createContext)(void 0);t.a=i},180:function(e,t,a){"use strict";var o=a(0),i=a.n(o),n=a(178),s=a(182),l=a(56),r=a.n(l),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,g=e.groupId,b=e.className,p=Object(n.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(o.useState)(l),w=f[0],O=f[1],j=o.Children.toArray(e.children);if(null!=g){var y=m[g];null!=y&&y!==w&&u.some((function(e){return e.value===y}))&&O(y)}var v=function(e){O(e),null!=g&&h(g,e)},x=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},u.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(s.a)("tabs__item",r.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},181:function(e,t,a){"use strict";var o=a(3),i=a(0),n=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return n.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},411:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-8f0cf7f11e5d716affde378f66b0d12a.png"},412:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-71c25a7e0c7d40486db9e2c87366681b.png"},413:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-010e694bbff97804f7a21557c0f89460.png"},414:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-538586b0cbeda678460824ea5232d4ee.png"},415:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-7965ff92896b645b244a9d227020c520.png"},416:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-7628115cc1bab68d9a32b0e3c1617947.png"},417:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-e46381de0ccf775e68ce489db49dac69.png"},418:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-05dbaf7a14f664f18a9d49df06e27698.png"},419:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-71bd9a256ac012b4230bf61d1dd0fe92.png"}}]);