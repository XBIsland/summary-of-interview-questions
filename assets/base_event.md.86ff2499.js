import{_ as e,c as n,o as a,a as t}from"./app.e0192ed2.js";const g=JSON.parse('{"title":"\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7","slug":"\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7","link":"#\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7","children":[{"level":3,"title":"\u4E8B\u4EF6\u5192\u6CE1\uFF08event bubbling\uFF09","slug":"\u4E8B\u4EF6\u5192\u6CE1\uFF08event-bubbling\uFF09","link":"#\u4E8B\u4EF6\u5192\u6CE1\uFF08event-bubbling\uFF09","children":[]},{"level":3,"title":"\u4E8B\u4EF6\u6355\u83B7\uFF08event capturing\uFF09","slug":"\u4E8B\u4EF6\u6355\u83B7\uFF08event-capturing\uFF09","link":"#\u4E8B\u4EF6\u6355\u83B7\uFF08event-capturing\uFF09","children":[]}]},{"level":2,"title":"\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258","slug":"\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258","link":"#\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258","children":[]}],"relativePath":"base/event.md"}'),s={name:"base/event.md"},l=t(`<h1 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7" tabindex="-1">\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7" aria-hidden="true">#</a></h2><h3 id="\u4E8B\u4EF6\u5192\u6CE1\uFF08event-bubbling\uFF09" tabindex="-1">\u4E8B\u4EF6\u5192\u6CE1\uFF08event bubbling\uFF09 <a class="header-anchor" href="#\u4E8B\u4EF6\u5192\u6CE1\uFF08event-bubbling\uFF09" aria-hidden="true">#</a></h3><p>\u4E8B\u4EF6\u5F00\u59CB\u7531<strong>\u6700\u5177\u4F53</strong>\u7684\u5143\u7D20\u63A5\u6536\uFF0C\u9010\u7EA7\u5411\u4E0A\u4F20\u64AD\u5230\u8F83\u4E3A<strong>\u4E0D\u5177\u4F53</strong>\u7684\u8282\u70B9\uFF0C\u8FD9\u79CD\u4E8B\u4EF6\u6D41\u79F0\u4E3A\u4E8B\u4EF6\u5192\u6CE1</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500 Document \u2463</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u251C\u2500 Element html \u2462</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u251C\u2500 Element body \u2461</span></span>
<span class="line"><span style="color:#A6ACCD;">         \u251C\u2500 Element div \u2460</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E8B\u4EF6\u6355\u83B7\uFF08event-capturing\uFF09" tabindex="-1">\u4E8B\u4EF6\u6355\u83B7\uFF08event capturing\uFF09 <a class="header-anchor" href="#\u4E8B\u4EF6\u6355\u83B7\uFF08event-capturing\uFF09" aria-hidden="true">#</a></h3><p>\u4E8B\u4EF6\u5F00\u59CB\u7531<strong>\u4E0D\u592A\u5177\u4F53</strong>\u7684\u8282\u70B9\u5148\u63A5\u6536\u5230\u4E8B\u4EF6\uFF0C\u518D\u9010\u7EA7\u5411\u4E0B\u4F20\u64AD\u5230<strong>\u5177\u4F53</strong>\u8282\u70B9\uFF0C\u8FD9\u79CD\u4E8B\u4EF6\u6D41\u79F0\u4E3A\u4E8B\u4EF6\u6355\u83B7</p><h2 id="\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258" tabindex="-1">\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u4E8B\u4EF6\u59D4\u6258" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u59D4\u6258\u5229\u7528\u4E86\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u6307\u5F53\u6709\u5927\u91CF\u5B50\u5143\u7D20\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u5C06\u4E8B\u4EF6\u76D1\u542C\u5668\u7ED1\u5B9A\u5728\u7236\u5143\u7D20\u8FDB\u884C\u76D1\u542C\uFF0C\u6B64\u65F6\u6570\u767E\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u53D8\u4E3A\u4E86\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u63D0\u5347\u4E86\u7F51\u9875\u6027\u80FD\u3002</p>`,9),r=[l];function i(c,o,p,d,h,u){return a(),n("div",null,r)}const _=e(s,[["render",i]]);export{g as __pageData,_ as default};