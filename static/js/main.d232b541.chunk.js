(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},141:function(e,t,a){e.exports={desktopbp:"840px"}},143:function(e,t,a){e.exports={desktopbp:"840px"}},145:function(e,t,a){e.exports=a(339)},150:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},285:function(e,t){},287:function(e,t){},30:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(6),c=a(3),i=a(4),o=a(5),l=a(35),s=a(0),m=a.n(s),u=a(90),d=a.n(u),p=a(91),h=a.n(p);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(92),b=a.n(f),E=a(7),v=(a(150),a(13),a(37),a(30),a(15)),g=a.n(v),k=a(8),N=a.n(k),w=(a(68),a(141));var y=parseInt(a.n(w).a.desktopbp.match(/^\d+/g).shift()||"840");var C=g()(function(e){return{isDesktop:e.width>=y}}),O=C(function(e){return e.isDesktop?function(e){var t=e.width,a=e.color,n=e.img,r=e.title,c=e.desc,i="";return n&&(i=""+"/".concat(n,".svg")),m.a.createElement(E.Cell,{columns:t,tabletColumns:12,phoneColumns:12},m.a.createElement(N.a,{className:"MyCard DesktopCard roundcard ".concat(a)},m.a.createElement(k.CardMedia,{imageUrl:i,style:{height:"100%"}},m.a.createElement("div",{className:"blackDiv"},m.a.createElement("div",{className:"sectionh2 head"},r),m.a.createElement("div",{className:"mdc-typography--caption sub"},c)))))}(e):function(e){var t=e.color,a=e.img,n=e.title,r=e.desc,c="";return a&&(c=""+"/".concat(a,".svg")),m.a.createElement(E.Cell,{columns:12,tabletColumns:12,phoneColumns:12},m.a.createElement(N.a,{className:"MyCard MobileCard roundcard ".concat(t)},m.a.createElement(k.CardMedia,{imageUrl:c,style:{height:"100%"}},m.a.createElement("div",{className:"blackDiv"},m.a.createElement("div",{className:"sectionh2 head"},n),m.a.createElement("div",{className:"mdc-typography--caption sub"},r)))))}(e)});function I(){return m.a.createElement(E.Grid,null,m.a.createElement(E.Row,null,m.a.createElement(O,{width:4,color:"greencard",img:"bridge",title:"Global",desc:"\uc804 \uc138\uacc4 \uac1c\ubc1c\uc790\ub4e4\uacfc\uc758 \ud65c\ubc1c\ud55c \uc18c\ud1b5"}),m.a.createElement(O,{width:4,color:"pinkcard",img:"glasses",title:"Good Hipster",desc:"\uc55e\uc11c\uac00\ub294 \uc815\ubcf4\ub825"}),m.a.createElement(O,{width:4,color:"bluecard",img:"flash",title:"Quick",desc:"\ube60\ub978 \uc774\ud574, \uc0dd\uac01, \ud589\ub3d9"}),m.a.createElement(O,{width:6,color:"bluecard",img:"runner",title:"Discipline",desc:"\uc5b4\ub824\uc6b4\uac83, \ubaa8\ub974\ub294\uac83\uc740 \uc9c0\uae08 \ub2f9\uc7a5 \uacf5\ubd80\ud574\uc11c \uce58\uc6cc\uc57c\ud558\ub294 \ub625"}),m.a.createElement(O,{width:6,color:"pinkcard",img:"saber",title:"Young Jedi",desc:"12\ub144\uc758 \uacbd\ud5d8: \uaf2c\ub9c8\uc2dc\uc808\ubd80\ud130 \uac77\uae30\uc2dc\uc791\ud55c \uac1c\ubc1c\uc790\uc758 \uae38"})))}m.a.Component,a(272);var j=a(25);a(273);var S=C(function(e){var t="mytitle "+e.className+(e.isDesktop?" desktop":" mobile");return m.a.createElement("div",{className:t},e.children)}),x=C(function(e){var t="mysubtitle "+e.className+(e.isDesktop?" desktop":" mobile");return m.a.createElement("div",{className:t},e.children)});function M(){return m.a.createElement(E.Grid,null,m.a.createElement(E.Row,null,m.a.createElement(O,{width:4,color:"bluecard",img:"Source-code-icon",title:"PROGRAMMING",desc:"13 years of experiences in software development"}),m.a.createElement(O,{width:4,color:"pinkcard",img:"ftfunct",title:"MATHEMATICS",desc:"Wide background in mathematics"}),m.a.createElement(O,{width:4,color:"greencard",img:"write",title:"WRITINGS",desc:"Writings on mathematics and programming"}),m.a.createElement(O,{width:4,color:"yellowcard",img:"painting",title:"PAINTINGS",desc:"Authentic artist"})))}var T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},a.refCallback=function(e){if(e){var t=e.getBoundingClientRect(),n=Math.ceil(t.width),r=Math.ceil(t.height);a.setState({portraitWidth:n,portraitHeight:r})}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.portraitWidth,a=e.portraitHeight;t&&"".concat(t),a&&"".concat(a);return m.a.createElement("div",{className:"PortraitSec"},m.a.createElement(S,{className:"portraittitle"},"THIS IS ",m.a.createElement("span",{className:"highlight"},"INGUN"),"'S WEB PORTFOLIO"),m.a.createElement(x,{className:"portraitsubtitle"},"GET TO KNOW ME BY MY..."),m.a.createElement("div",{className:"contentpanel"},m.a.createElement(M,null)))}}]),t}(m.a.Component),A=a(93),G=a.n(A),R=a(67),D=(a(274),a(94)),W=(a(276),Object(R.a)(new Array(1).keys())),P=g()(function(e){return{screenWidth:e.width}})(j.a.div({staying:{x:0,transition:{ease:"linear",duration:0}},moving:{x:0,transition:function(e){var t=e.screenWidth;return{x:{type:"keyframes",values:W.map(function(e){return[0,-(1800-t)]}).flat().concat([0]),times:W.map(function(e){return[2*e,2*e+1]}).flat().map(function(e){return e/2/1}).concat([1]),duration:1e5}}}}}));var B=function(e){return new Array(e).fill(null).map(function(e,t){return function(e){return m.a.createElement(D.a,{width:100,height:100,src:"".concat("","/brands/").concat(e,".png"),key:e.toString(),className:"marqueeitem"})}(t)})},H=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(P,{pose:this.props.onPage?"moving":"staying",screenWidth:100,className:"marqueecontainer",style:{width:"".concat(1800,"px")}},B(18))}}]),t}(m.a.Component),U=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){G.a.nodecolor,G.a.labelcolor;return m.a.createElement("div",{className:"Coverage"},m.a.createElement(S,{className:"coveragetitle"},"PROGRAMMING"),m.a.createElement(x,{className:"coveragesubtitle"},"13 YEARS OF COUNTLESS EXPERIENCES IN SOFTWARE DEVELOPMENT"),m.a.createElement("div",{className:"contentpanel coveragepanel"},m.a.createElement(H,{onPage:this.props.onPage||!1})))}}]),t}(m.a.Component);a(277),a(84);function L(){function e(e){return function(t){window.open(e,"_blank")}}return m.a.createElement(E.Grid,null,m.a.createElement(E.Row,null,m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("/answers/?sha1=b614f31d04b3bc2b3d23ee4337475251429e5a9f")},m.a.createElement("div",{className:"cardtitle"},"I love Category Theory"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("/answers/?sha1=4c1513c92422dc16b3c5f13bd03d34ba0feeb6df")},m.a.createElement("div",{className:"cardtitle"},"I love Topology"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://github.com/ingun37/sujak")},m.a.createElement("div",{className:"cardtitle"},"I made a 3D Engine"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://github.com/ingun37/mat4ipad")},m.a.createElement("div",{className:"cardtitle"},"I made an Algebraic Calculator")))))}var _=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"Math"},m.a.createElement(S,{className:"mathtitle"},"MATHEMATICS"),m.a.createElement(x,{className:"mathsubtitle"},"WIDE BACKGROUND IN MATHEMATICS INCLUDING LOTS OF APPLICATIONS IN COMPUTER SCIENCE"),m.a.createElement("div",{className:"contentpanel panel",align:"center"},m.a.createElement(L,null)))}}]),t}(m.a.Component),F=(a(278),a(66)),Y=a.n(F);a(279);var q=new(a(280))({customFields:{item:["media:thumbnail"]}}),J=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).rssContent=q.parseURL("/tumblr-rss.xml"),a.onSelect=function(e){var t=parseInt(e);t==a.state.items.length?a.onMoreClick():a.onCardClick(t)},a.state={items:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.rssContent.then(function(t){var a=t.items;console.log(a),a.forEach(function(e){return e.thumbnail=function(e){try{return e["media:thumbnail"]||((e["media:thumbnail"]||{}).$||{}).url||null}catch(t){return console.error(t),null}}(e)}),console.log(a),e.setState({items:a.filter(function(e){return e.thumbnail}).slice(0,6)})})}},{key:"onCardClick",value:function(e){var t=this.state.items[e].link;window.open(t,"_blank")}},{key:"onMoreClick",value:function(){window.open("https://ingun37.wordpress.com","_blank")}},{key:"render",value:function(){var e=this.state.items.map(function(e,t){return m.a.createElement("div",{key:t.toString(),className:"itemframe"},m.a.createElement(N.a,{className:"writecard roundcard"},m.a.createElement(k.CardMedia,{square:!0,imageUrl:""+e.thumbnail})))});return m.a.createElement(Y.a,{data:e,onSelect:this.onSelect})}}]),t}(m.a.Component);var V=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"Paintings"},m.a.createElement(S,{className:"title"},"PAINTINGS"),m.a.createElement("div",{className:"contentpanel panel",align:"center"},m.a.createElement(J,null),m.a.createElement("div",{className:"sectionh3 moretitle",onClick:function(){return e="https://ingun37.tumblr.com/",void window.open(e,"_blank");var e}},"MORE PAINTINGS")))}}]),t}(m.a.Component);a(321);function $(){function e(e){return function(t){window.open(e,"_blank")}}return m.a.createElement(E.Grid,null,m.a.createElement(E.Row,null,m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://dev.to/ingun37/file-s-owner-is-not-for-uiview-3n9g")},m.a.createElement("div",{className:"cardtitle"},"File's Owner is not for UIView"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://dev.to/ingun37/monad-being-monoid-explained-without-math-30he")},m.a.createElement("div",{className:"cardtitle"},"Monad is Monoid - explained without math"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://dev.to/ingun37/why-and-how-to-see-algebra-in-programming-model-6bn")},m.a.createElement("div",{className:"cardtitle"},"Why and how to see algebra in programming?"))),m.a.createElement(E.Cell,{width:4},m.a.createElement(N.a,{className:"card",onClick:e("https://dev.to/ingun37/stop-using-dollar-sign-as-delimiter-for-tex-24bf")},m.a.createElement("div",{className:"cardtitle"},"Stop using $(Dollar Sign) as delimiter for Tex in Markdown")))))}var K=function(e){function t(e){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).call(this,e))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement("div",{className:"writings"},m.a.createElement(S,{className:"writingstitle"},"WRITINGS"),m.a.createElement(x,{className:"writingssubtitle"},"ENTHUSIASTIC WRITER ON PROGRAMMING AND MATHEMATICS"),m.a.createElement("div",{className:"contentpanel panel",align:"center"},m.a.createElement($,null)))}}]),t}(m.a.Component),Q=(a(322),function(e){var t=e.idx,a=""+"/books/".concat(t,".jpg");return m.a.createElement(N.a,{key:t.toString(),className:"readcard roundcard"},m.a.createElement(k.CardMedia,{className:"readcardmedia",imageUrl:a}))}),X=function(e){var t=e.text,a=e.className;return m.a.createElement("div",{className:a},t)},z=(X({text:"<",className:"arrow-prev"}),X({text:">",className:"arrow-next"}),m.a.Component,a(323),a(324),a(19)),Z=a.n(z),ee=a(142),te=a.n(ee),ae=a(144),ne=(a(325),a(326),a(38),function(e){var t=e.children,a=e.className,n=void 0===a?"":a,r=e.initRipple,c=(e.unbounded,Object(ae.a)(e,["children","className","initRipple","unbounded"])),i="ripple-icon-component ".concat(n);return m.a.createElement("div",Object.assign({className:i,ref:r},c),t)});function re(e){var t=e.img,a=void 0===t?"github":t,n=e.color,r=void 0===n?"red":n,c=e.onClick,i="url("+"/".concat(a,".svg)"),o={maskImage:i,WebkitMaskImage:i,backgroundColor:r};return m.a.createElement(ne,{className:"ripplewrapper",onClick:c},m.a.createElement("div",{className:"iconwrapper"},m.a.createElement("div",{className:"iconimg",style:o})))}a(327);var ce=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onMail",value:function(){window.location.href="mailto:ingun37@gmail.com"}},{key:"onGithub",value:function(){window.open("https://github.com/ingun37","_blank")}},{key:"onWordpress",value:function(){window.open("https://ingun37.wordpress.com","_blank")}},{key:"onGram",value:function(){window.open("https://www.instagram.com/ingun37/","_blank")}},{key:"onDevTo",value:function(){window.open("https://dev.to/ingun37","_blank")}},{key:"render",value:function(){return m.a.createElement(Z.a,{className:"mybar",shortCollapsed:!0,style:{width:"250px"}},m.a.createElement(z.TopAppBarRow,null,m.a.createElement(z.TopAppBarIcon,{navIcon:!0,tabIndex:0},m.a.createElement(te.a,{hasRipple:!0,icon:"email",onClick:this.onMail})),m.a.createElement(z.TopAppBarIcon,{navIcon:!0},m.a.createElement(re,{img:"github",color:"white",onClick:this.onGithub})),m.a.createElement(z.TopAppBarIcon,{navIcon:!0},m.a.createElement(re,{img:"wordpress",color:"white",onClick:this.onWordpress})),m.a.createElement(z.TopAppBarIcon,{navIcon:!0},m.a.createElement(re,{img:"gram",color:"white",onClick:this.onGram})),m.a.createElement(z.TopAppBarIcon,{actionItem:!0},m.a.createElement("i",{className:"material-icons devto",onClick:this.onDevTo},"DEV.TO"))))}}]),t}(m.a.Component),ie=a(95),oe=a.n(ie),le=a(96),se=Object(R.a)(new Array(10).keys()),me=j.a.div({visible:{opacity:1,scale:1,rotate:0,transition:{scale:{ease:"linear",duration:500},rotate:{type:"spring",duration:500}}},rot:{scale:1,rotate:0,opacity:1,transition:{scale:{ease:"linear",duration:500},rotate:{type:"keyframes",values:[0].concat(se.map(function(e){return e%2==0?[0,15]:[15,0]}).flat()),times:se.map(function(e,t,a){return[e/10,(e+1)/10-.001]}).flat().concat([1]),duration:5e3}}},hidden:{scale:0,rotate:180,opacity:0,transition:{ease:"linear",duration:500}},fadeaway:{scale:1,rotate:0,opacity:0,transition:{ease:"linear",duration:500}}});m.a.Component;function ue(e){return m.a.createElement(me,{className:"MyBG contain",pose:e.state,style:{maskImage:"url(/city.svg)",WebkitMaskImage:"url(/city.svg)",backgroundColor:"rgb(223, 29, 62)"}})}function de(e,t,a,n){return t/(n-a)*(e-a)}var pe=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return null},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){!function(e,t){var a=t.container,n=e.graph.nodes();if(!(n.length<2)){var r=n.map(function(e){return e.x}),c=n.map(function(e){return e.y}),i=r.reduce(function(e,t){return e<t?t:e}),o=r.reduce(function(e,t){return e<t?e:t}),l=c.reduce(function(e,t){return e<t?t:e}),s=c.reduce(function(e,t){return e<t?e:t}),m=a.offsetWidth,u=a.offsetHeight;for(var d in n){var p=n[d];p.x=de(p.x,m,o,i),p.y=de(p.y,u,s,l)}e.refresh()}}(this.props.sigma,this.props.sigma.renderers[0])}}]),t}(m.a.Component);var he,fe,be=g()(function(e){return{screenHeight:e.height}})(function(e){var t={labelThreshold:0,defaultNodeColor:oe.a.nodecolor,defaultLabelColor:oe.a.labelcolor,mouseEnabled:!1,touchEnabled:!1,sideMargin:32},a="".concat(e.screenHeight,"px");return m.a.createElement(me,{className:"MyBG contain",pose:e.state},m.a.createElement(le.b,{settings:t,renderer:"canvas",style:{height:a}},m.a.createElement(le.a,{path:"/graph-data.json"},m.a.createElement(pe,null))))}),Ee=a(143),ve=parseInt(a.n(Ee).a.desktopbp.match(/^\d+/g).shift()||"840"),ge=function(e){return{isDesktop:e.width>=ve}},ke="rgb(223, 29, 62)",Ne="rgb(11, 16, 77)",we=h.a.skyblueColor,ye=j.a.div((he={},Object(l.a)(he,ke,{backgroundColor:ke}),Object(l.a)(he,Ne,{backgroundColor:Ne}),Object(l.a)(he,"rgb(226, 139, 153)",{backgroundColor:"rgb(226, 139, 153)"}),Object(l.a)(he,we,{backgroundColor:we}),he)),Ce=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={sunState:"hidden",cityState:"hidden",skyColor:Ne,compassState:"hidden",currentIndex:0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onLeave",value:function(e,t,a){0==t.index&&this.setState({compassState:"hidden",skyColor:Ne,currentIndex:t.index}),1==t.index&&this.setState({compassState:"visible",skyColor:"rgb(226, 139, 153)",currentIndex:t.index}),2==t.index&&this.setState({compassState:"hidden",skyColor:ke,currentIndex:t.index}),3==t.index&&this.setState({compassState:"hidden",skyColor:we,currentIndex:t.index}),4==t.index&&this.setState({compassState:"hidden",skyColor:we,currentIndex:t.index})}},{key:"componentDidMount",value:function(){this.setState({sunState:"rot"})}},{key:"renderContent",value:function(){var e=this;return m.a.createElement(ye,{className:"App",pose:this.state.skyColor},m.a.createElement(ue,{state:this.state.cityState}),m.a.createElement(be,{state:this.state.compassState}),m.a.createElement(b.a,{touchSensitivity:15,onLeave:this.onLeave.bind(this),autoScrolling:!!this.props.isDesktop,fitToSection:!!this.props.isDesktop,render:function(t){t.state,t.fullpageApi;return m.a.createElement(b.a.Wrapper,null,m.a.createElement("div",{className:"section"},m.a.createElement(T,null)),m.a.createElement("div",{className:"section"},m.a.createElement(U,{onPage:1==e.state.currentIndex})),m.a.createElement("div",{className:"section"},m.a.createElement(_,null)),m.a.createElement("div",{className:"section"},m.a.createElement(K,null)),m.a.createElement("div",{className:"section"},m.a.createElement(V,null)))}}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(ce,null),this.renderContent())}}]),t}(m.a.Component),Oe=(fe=Ce,g()(ge)(fe));d.a.render(m.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){},91:function(e,t,a){e.exports={writebgcolor:"#b7c0c2",skyblueColor:"#d4d3ce"}},93:function(e,t,a){e.exports={nodecolor:"#e9e510",labelcolor:"#ecc2d2"}},95:function(e,t,a){e.exports={nodecolor:"#e9e510",labelcolor:"#ecc2d2"}}},[[145,1,2]]]);
//# sourceMappingURL=main.d232b541.chunk.js.map