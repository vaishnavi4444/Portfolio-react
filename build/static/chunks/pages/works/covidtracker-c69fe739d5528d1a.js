(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4485:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/covidtracker",function(){return n(420)}])},8646:function(e,r,n){"use strict";n.d(r,{Et:function(){return h},Pg:function(){return x}});var t=n(5893),i=n(1664),s=n.n(i),a=n(5675),l=n.n(a),c=n(3100),o=n(5931),d=n(9564),u=n(917);let h=e=>{let{children:r,id:n,title:i,thumbnail:a}=e;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(s(),{href:"/works/".concat(n),children:(0,t.jsxs)(o.f,{cursor:"pointer",children:[(0,t.jsx)(l(),{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(o.A,{href:"/works/".concat(n),children:(0,t.jsx)(d.x,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(d.x,{fontSize:14,children:r})]})})})},x=()=>(0,t.jsx)(u.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},6556:function(e,r,n){"use strict";var t=n(5893),i=n(8419),s=n(9008),a=n.n(s),l=n(8646);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=e=>{let{children:r,title:n}=e;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(a(),{children:(0,t.jsxs)("title",{children:[n," - Dylan"]})}),r,(0,t.jsx)(l.Pg,{})]})})}},1565:function(e,r,n){"use strict";var t=n(2729),i=n(166);function s(){let e=(0,t._)(["\n    text-align: justify;\n"]);return s=function(){return e},e}let a=i.Z.p(s());r.Z=a},3340:function(e,r,n){"use strict";n.d(r,{h_:function(){return v},Dx:function(){return g},WZ:function(){return y}});var t=n(5893),i=n(1664),s=n.n(i),a=n(3100),l=n(3838),c=n(4418),o=n(5059),d=(0,o.G)(function(e,r){let{htmlWidth:n,htmlHeight:i,alt:s,...a}=e;return(0,t.jsx)("img",{width:n,height:i,ref:r,alt:s,...a})});d.displayName="NativeImage";var u=n(6245),h=n(7294),x=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,f=n(4232),j=(0,o.G)(function(e,r){let{fallbackSrc:n,fallback:i,src:s,srcSet:a,align:l,fit:c,loading:o,ignoreFallback:j,crossOrigin:m,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...y}=e,v=null!=o||j||!(void 0!==n||void 0!==i),k=function(e){let{loading:r,src:n,srcSet:t,onLoad:i,onError:s,crossOrigin:a,sizes:l,ignoreFallback:c}=e,[o,d]=(0,h.useState)("pending");(0,h.useEffect)(()=>{d(n?"loading":"pending")},[n]);let x=(0,h.useRef)(),f=(0,h.useCallback)(()=>{if(!n)return;j();let e=new Image;e.src=n,a&&(e.crossOrigin=a),t&&(e.srcset=t),l&&(e.sizes=l),r&&(e.loading=r),e.onload=e=>{j(),d("loaded"),null==i||i(e)},e.onerror=e=>{j(),d("failed"),null==s||s(e)},x.current=e},[n,a,t,l,i,s,r]),j=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,u.G)(()=>{if(!c)return"loading"===o&&f(),()=>{j()}},[o,f,c]),c?"loaded":o}({...e,crossOrigin:m,ignoreFallback:v}),b=x(k,p),_={ref:r,objectFit:c,objectPosition:l,...v?y:function(e,r=[]){let n=Object.assign({},e);for(let e of r)e in n&&delete n[e];return n}(y,["onError","onLoad"])};return b?i||(0,t.jsx)(f.m.img,{as:d,className:"chakra-image__placeholder",src:n,..._}):(0,t.jsx)(f.m.img,{as:d,src:s,srcSet:a,crossOrigin:m,loading:o,referrerPolicy:g,className:"chakra-image",..._})});j.displayName="Image";var m=n(1689),p=n(6864);let g=e=>{let{children:r}=e;return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(s(),{href:"/works",children:(0,t.jsx)(l.r,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(p.X,{})," "]}),(0,t.jsx)(c.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},y=e=>{let{src:r,alt:n}=e;return(0,t.jsx)(j,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},v=e=>{let{children:r}=e;return(0,t.jsx)(m.C,{colorScheme:"green",mr:2,children:r})}},420:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(6979),s=n(1689),a=n(5197),l=n(3838),c=n(5555),o=n(3340),d=n(1565),u=n(6556);r.default=()=>(0,t.jsx)(u.Z,{children:(0,t.jsxs)(i.W,{children:[(0,t.jsxs)(o.Dx,{children:["COVID Tracker ",(0,t.jsx)(s.C,{children:"2021"})]}),(0,t.jsx)(o.WZ,{src:"/images/works/covidtracker-eyecatcher.png",alt:"Covid Tracker"}),(0,t.jsxs)(d.Z,{children:["A JavaScript/React webpage for a COVID tracking site using the UK Governments API for daily updates on the pandemic",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Filtering available for regional data, to showcase cases/deaths by area as well as a general overview of everything"]}),(0,t.jsx)("br",{}),(0,t.jsxs)(a.aV,{children:[(0,t.jsxs)(a.HC,{children:[(0,t.jsx)(o.h_,{children:"Link"}),(0,t.jsx)(l.r,{href:"https://github.com/Aimireal/React-Covid-Tracker",children:"https://github.com/Aimireal/React-Covid-Tracker"})," ",(0,t.jsx)(c.h,{})]}),(0,t.jsxs)(a.HC,{children:[(0,t.jsx)(o.h_,{children:"Platform"}),(0,t.jsx)(l.r,{children:"Web"})]}),(0,t.jsxs)(a.HC,{children:[(0,t.jsx)(o.h_,{children:"Stack"}),(0,t.jsx)(l.r,{children:"JavaScript | React"})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)(o.WZ,{src:"/images/works/covidtracker.png"})]})})},5555:function(e,r,n){"use strict";n.d(r,{h:function(){return s}});var t=n(78),i=n(5893),s=(0,t.I)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},6864:function(e,r,n){"use strict";n.d(r,{X:function(){return t}});var t=(0,n(78).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},1689:function(e,r,n){"use strict";n.d(r,{C:function(){return o}});var t=n(5059),i=n(1639),s=n(3179),a=n(4232),l=n(5432),c=n(5893),o=(0,t.G)(function(e,r){let n=(0,i.mq)("Badge",e),{className:t,...o}=(0,s.Lr)(e);return(0,c.jsx)(a.m.span,{ref:r,className:(0,l.cx)("chakra-badge",e.className),...o,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})});o.displayName="Badge"},5197:function(e,r,n){"use strict";n.d(r,{HC:function(){return f},aV:function(){return x}});var t=n(6877),i=n(5227),s=n(2495),a=n(5059),l=n(1639),c=n(3179),o=n(4232),d=n(5893),[u,h]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),x=(0,a.G)(function(e,r){let n=(0,l.jC)("List",e),{children:t,styleType:i="none",stylePosition:a,spacing:h,...x}=(0,c.Lr)(e),f=(0,s.W)(t);return(0,d.jsx)(u,{value:n,children:(0,d.jsx)(o.m.ul,{ref:r,listStyleType:i,listStylePosition:a,role:"list",__css:{...n.container,...h?{"& > *:not(style) ~ *:not(style)":{mt:h}}:{}},...x,children:f})})});x.displayName="List",(0,a.G)((e,r)=>{let{as:n,...t}=e;return(0,d.jsx)(x,{ref:r,as:"ol",styleType:"decimal",marginStart:"1em",...t})}).displayName="OrderedList",(0,a.G)(function(e,r){let{as:n,...t}=e;return(0,d.jsx)(x,{ref:r,as:"ul",styleType:"initial",marginStart:"1em",...t})}).displayName="UnorderedList";var f=(0,a.G)(function(e,r){let n=h();return(0,d.jsx)(o.m.li,{ref:r,...e,__css:n.item})});f.displayName="ListItem",(0,a.G)(function(e,r){let n=h();return(0,d.jsx)(t.J,{ref:r,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"}},function(e){e.O(0,[864,774,888,179],function(){return e(e.s=4485)}),_N_E=e.O()}]);