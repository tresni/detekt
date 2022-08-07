"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3954],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,k=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Run detekt using Gradle Task",keywords:["gradle","task"],sidebar:null,permalink:"gradletask.html",folder:"gettingstarted",summary:null,sidebar_position:3},s=void 0,d={unversionedId:"gettingstarted/gradletask",id:"gettingstarted/gradletask",title:"Run detekt using Gradle Task",description:"1. Add following lines to your build.gradle file.",source:"@site/docs/gettingstarted/gradletask.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/gradletask",permalink:"/docs/next/gettingstarted/gradletask",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/gradletask.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Run detekt using Gradle Task",keywords:["gradle","task"],sidebar:null,permalink:"gradletask.html",folder:"gettingstarted",summary:null,sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Run detekt using the Detekt Gradle Plugin",permalink:"/docs/next/gettingstarted/gradle"},next:{title:"Run detekt using Maven Ant Task",permalink:"/docs/next/gettingstarted/mavenanttask"}},c={},u=[{value:"Groovy DSL",id:"groovy-dsl",level:6},{value:"Kotlin DSL",id:"kotlin-dsl",level:6}],p={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add following lines to your build.gradle file."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"gradle detekt"))),(0,i.kt)("h6",{id:"groovy-dsl"},"Groovy DSL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    mavenCentral()\n}\n\nconfigurations {\n    detekt\n}\n\ndef detektTask = tasks.register("detekt", JavaExec) {\n    main = "io.gitlab.arturbosch.detekt.cli.Main"\n    classpath = configurations.detekt\n\n    def input = "$projectDir"\n    def config = "$projectDir/detekt.yml"\n    def exclude = ".*/build/.*,.*/resources/.*"\n    def params = [ \'-i\', input, \'-c\', config, \'-ex\', exclude]\n\n    args(params)\n}\n\ndependencies {\n    detekt \'io.gitlab.arturbosch.detekt:detekt-cli:1.21.0\'\n}\n\n// Remove this line if you don\'t want to run detekt on every build\ncheck.dependsOn detektTask\n')),(0,i.kt)("h6",{id:"kotlin-dsl"},"Kotlin DSL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'repositories {\n    mavenCentral()\n}\n\nval detekt by configurations.creating\n\nval detektTask = tasks.register<JavaExec>("detekt") {\n    main = "io.gitlab.arturbosch.detekt.cli.Main"\n    classpath = detekt\n\n    val input = projectDir\n    val config = "$projectDir/detekt.yml"\n    val exclude = ".*/build/.*,.*/resources/.*"\n    val params = listOf("-i", input, "-c", config, "-ex", exclude)\n\n    args(params)\n}\n\ndependencies {\n    detekt("io.gitlab.arturbosch.detekt:detekt-cli:1.21.0)\n}\n\n// Remove this block if you don\'t want to run detekt on every build\ntasks.check {\n    dependsOn(detektTask)\n}\n')))}g.isMDXComponent=!0}}]);