(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports={desktopbp:"840px"}},139:function(e,t,a){e.exports=a(329)},144:function(e,t,a){e.exports={writebgcolor:"#b7c0c2"}},267:function(e,t,a){},268:function(e,t,a){},270:function(e,t,a){},278:function(e,t){},280:function(e,t){},317:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(6),c=a(3),i=a(4),o=a(5),l=a(34),s=a(0),u=a.n(s),m=a(84),d=a.n(m);a(144),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(86),h=a.n(p),b=a(35),v=a(136),g=a.n(v),f=(a(36),a(91),a(92),a(26)),E=a.n(f),y=a(15),k=a.n(y);a(145);var C=parseInt(g.a.desktopbp.match(/^\d+/g).shift()||"840");var N=E()(function(e){return{isDesktop:e.width>=C}})(function(e){return e.isDesktop?function(e){var t=e.width,a=e.color,n=e.img,r=e.title,c=e.desc;return u.a.createElement(b.Cell,{columns:t,tabletColumns:12,phoneColumns:12},u.a.createElement(k.a,{className:"MyCard DesktopCard roundcard ".concat(a)},u.a.createElement(y.CardMedia,{imageUrl:""+"/".concat(n,".svg"),style:{height:"100%"}},u.a.createElement("div",{className:"blackDiv"},u.a.createElement("div",{className:"sectionh2 head"},r),u.a.createElement("div",{className:"mdc-typography--caption sub"},c)))))}(e):function(e){var t=e.color,a=e.img,n=e.title,r=e.desc;return u.a.createElement(b.Cell,{columns:12,tabletColumns:12,phoneColumns:12},u.a.createElement(k.a,{className:"MyCard MobileCard roundcard ".concat(t)},u.a.createElement(y.CardMedia,{imageUrl:""+"/".concat(a,".svg"),style:{height:"100%"}},u.a.createElement("div",{className:"blackDiv"},u.a.createElement("div",{className:"sectionh2 head"},n),u.a.createElement("div",{className:"mdc-typography--caption sub"},r)))))}(e)});function O(){return u.a.createElement(b.Grid,{className:"featuresgrid"},u.a.createElement(b.Row,null,u.a.createElement(N,{width:4,color:"greencard",img:"bridge",title:"Global",desc:"\uc804 \uc138\uacc4 \uac1c\ubc1c\uc790\ub4e4\uacfc\uc758 \ud65c\ubc1c\ud55c \uc18c\ud1b5"}),u.a.createElement(N,{width:4,color:"pinkcard",img:"glasses",title:"Good Hipster",desc:"\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uc55e\uc11c\uac00\ub294 \uc815\ubcf4\ub825"}),u.a.createElement(N,{width:4,color:"bluecard",img:"flash",title:"Quick",desc:"\ubb50\ub4e0 \uc5b8\uc81c\ub098 \ube60\ub978 \uc774\ud574, \uc0dd\uac01, \ud589\ub3d9"}),u.a.createElement(N,{width:6,color:"bluecard",img:"runner",title:"Discipline",desc:"\uc5b4\ub824\uc6b4\uac83, \ubaa8\ub974\ub294\uac83\uc740 \uc9c0\uae08 \ub2f9\uc7a5 \uacf5\ubd80\ud574\uc11c \uce58\uc6cc\uc57c\ud558\ub294 \ub625"}),u.a.createElement(N,{width:6,color:"pinkcard",img:"saber",title:"Young Jedi",desc:"12\ub144\uc758 \uacbd\ud5d8: \uaf2c\ub9c8\uc2dc\uc808\ubd80\ud130 \uac77\uae30\uc2dc\uc791\ud55c \uac1c\ubc1c\uc790\uc758 \uae38"})))}var w=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"sectiontitle"},"I BE LIKE"),u.a.createElement("div",{className:"gridWrapper contentpanel"},u.a.createElement(O,null)))}}]),t}(u.a.Component),j=(a(267),a(22)),x=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"PortraitSec"},u.a.createElement("div",{className:"sectiontitle title"},"INTRODUCING"),u.a.createElement("div",{className:"centerer"},u.a.createElement("div",{className:"circle"},u.a.createElement("div",{className:"PortraitImage",style:{maskImage:"url(".concat("/face.svg",")"),WebkitMaskImage:"url(".concat("/face.svg",")")}}))),u.a.createElement("div",{className:"sectiontitle title"},"JON IN GUN"))}}]),t}(u.a.Component),I=a(87),S=a.n(I),M=a(33),A=(a(268),a(269),Object(M.a)(new Array(1).keys())),W=E()(function(e){return{screenWidth:e.width}})(j.a.div({staying:{x:0,transition:{ease:"linear",duration:0}},moving:{x:0,transition:function(e){var t=e.screenWidth;return{x:{type:"keyframes",values:A.map(function(e){return[0,-(1800-t)]}).flat().concat([0]),times:A.map(function(e){return[2*e,2*e+1]}).flat().map(function(e){return e/2/1}).concat([1]),duration:1e5}}}}})),G=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object(M.a)(new Array(18).keys());return u.a.createElement(W,{pose:this.props.onPage?"moving":"staying",screenWidth:100,className:"marqueecontainer",style:{width:"".concat(1800,"px")}},e.map(function(e){return u.a.createElement("img",{src:"".concat("","/brands/").concat(e,".png"),key:e.toString(),className:"marqueeitem"})}))}}]),t}(u.a.Component),D=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){S.a.nodecolor,S.a.labelcolor;return u.a.createElement("div",{className:"Coverage"},u.a.createElement("h1",{className:"sectiontitle coveragetitle"},"COVERAGE"),u.a.createElement("div",{className:"contentpanel coveragepanel"},u.a.createElement("div",{className:"sectionh3 coveragesubtitle"},"COUNTLESS EXPERIENCES ON 3D-GRAHPICS, GAME, MOBILE, FULLSTACK, AND MANY OTHERS"),u.a.createElement(G,{onPage:this.props.onPage||!1})))}}]),t}(u.a.Component),R=(a(270),a(271),a(85)),T=a.n(R),B=(a(272),a(137)),L=a.n(B),U=new(a(273))({customFields:{item:[["media:thumbnail","thumbnail"],["media:content","contents",{keepArray:!0}]]}});var P=function(e){var t=e.idx,a=e.img,n=e.title,r=e.date;return u.a.createElement(k.a,{key:t.toString(),className:"writecard roundcard"},u.a.createElement(y.CardMedia,{square:!0,imageUrl:a}),u.a.createElement("span",{className:"writetitle"},n),u.a.createElement("span",{className:"writedate"},r))},H=function(e){var t=e.text,a=e.className;return u.a.createElement("div",{className:a},t)},J=(H({text:"<",className:"arrow-prev"}),H({text:">",className:"arrow-next"}),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).rssContent=U.parseURL("/wordpress-rss.xml"),a.onSelect=function(e){var t=parseInt(e);t==a.state.items.length?a.onMoreClick():a.onCardClick(t)},a.state={items:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.rssContent.then(function(t){var a=t.items;a.forEach(function(e){return e.thumbnail=function(e){try{var t=((e.thumbnail||{}).$||{}).url||null;return t||e.contents.map(function(e){return(e.$||{}).url}).filter(function(e){return e}).find(function(e){return e.includes(".png")||e.includes(".jpg")})||null}catch(a){return console.error(a),null}}(e)}),e.setState({items:a.filter(function(e){return e.thumbnail}).slice(0,6)})})}},{key:"onCardClick",value:function(e){var t=this.state.items[e].link;window.open(t,"_blank")}},{key:"onMoreClick",value:function(){window.open("https://ingun37.wordpress.com","_blank")}},{key:"render",value:function(){var e,t=(e=this.state.items).map(function(e,t){return u.a.createElement(P,{idx:t,key:t.toString(),img:e.thumbnail,title:e.title,date:e.pubDate.slice(0,"Tue, 02 Apr 2019".length)})}).concat([u.a.createElement("div",{className:"morediv ",key:e.length.toString()},u.a.createElement("div",{className:"sectionh3 moretitle"},"CHECK OUT MORE"))]);return u.a.createElement("div",null,u.a.createElement("h1",{className:"sectiontitle writetitle"},"I WRITE THINGS"),u.a.createElement("div",{className:"Writes contentpanel"},u.a.createElement(L.a,{data:t,onSelect:this.onSelect})))}}]),t}(u.a.Component)),_=(a(314),a(315),a(27)),q=a.n(_),K=a(138),$=(a(316),a(317),a(28),function(e){var t=e.children,a=e.className,n=void 0===a?"":a,r=e.initRipple,c=(e.unbounded,Object(K.a)(e,["children","className","initRipple","unbounded"])),i="ripple-icon-component ".concat(n);return u.a.createElement("div",Object.assign({className:i,ref:r},c),t)});function F(e){var t=e.img,a=void 0===t?"github":t,n=e.color,r=void 0===n?"red":n,c=e.onClick,i="url("+"/".concat(a,".svg)"),o={maskImage:i,WebkitMaskImage:i,backgroundColor:r};return u.a.createElement($,{className:"ripplewrapper",onClick:c},u.a.createElement("div",{className:"iconwrapper"},u.a.createElement("div",{className:"iconimg",style:o})))}var Y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onMail",value:function(){window.location.href="mailto:ingun37@gmail.com"}},{key:"onGithub",value:function(){window.open("https://github.com/ingun37","_blank")}},{key:"onWordpress",value:function(){window.open("https://ingun37.wordpress.com","_blank")}},{key:"render",value:function(){return u.a.createElement(q.a,{shortCollapsed:!0,style:{width:"144px"}},u.a.createElement(_.TopAppBarRow,null,u.a.createElement(_.TopAppBarIcon,{navIcon:!0,tabIndex:0},u.a.createElement(T.a,{hasRipple:!0,icon:"email",onClick:this.onMail})),u.a.createElement(_.TopAppBarIcon,{navIcon:!0},u.a.createElement(F,{img:"github",color:"white",onClick:this.onGithub})),u.a.createElement(_.TopAppBarIcon,{navIcon:!0},u.a.createElement(F,{img:"wordpress",color:"white",onClick:this.onWordpress}))))}}]),t}(u.a.Component),z=a(88),Q=a.n(z),V=a(89),X=Object(M.a)(new Array(10).keys()),Z=j.a.div({visible:{opacity:1,scale:1,rotate:0,transition:{scale:{ease:"linear",duration:500},rotate:{type:"spring",duration:500}}},rot:{scale:1,rotate:0,opacity:1,transition:{scale:{ease:"linear",duration:500},rotate:{type:"keyframes",values:[0].concat(X.map(function(e){return e%2==0?[0,15]:[15,0]}).flat()),times:X.map(function(e,t,a){return[e/10,(e+1)/10-.001]}).flat().concat([1]),duration:5e3}}},hidden:{scale:0,rotate:180,opacity:0,transition:{ease:"linear",duration:500}},fadeaway:{scale:1,rotate:0,opacity:0,transition:{ease:"linear",duration:500}}}),ee=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={state:e.state},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement(Z,{className:"MyBG contain",pose:this.props.state,style:{maskImage:"url(/sun.svg)",WebkitMaskImage:"url(/sun.svg)",backgroundColor:"rgb(218, 199, 30)"}})}}]),t}(u.a.Component);function te(e){return u.a.createElement(Z,{className:"MyBG contain",pose:e.state,style:{maskImage:"url(/city.svg)",WebkitMaskImage:"url(/city.svg)",backgroundColor:"rgb(223, 29, 62)"}})}var ae,ne=E()(function(e){return{screenHeight:e.height}})(function(e){var t={labelThreshold:0,defaultNodeColor:Q.a.nodecolor,defaultLabelColor:Q.a.labelcolor,mouseEnabled:!1,touchEnabled:!1,sideMargin:.6},a="".concat(e.screenHeight,"px");return console.log("screenh : "+a),u.a.createElement(Z,{className:"MyBG contain",pose:e.state},u.a.createElement(V.b,{settings:t,renderer:"canvas",style:{height:a}},u.a.createElement(V.a,{path:"/graph-data.json"})))}),re="rgb(223, 29, 62)",ce=j.a.div((ae={},Object(l.a)(ae,re,{backgroundColor:re}),Object(l.a)(ae,"rgb(11, 16, 77)",{backgroundColor:"rgb(11, 16, 77)"}),Object(l.a)(ae,"rgb(226, 139, 153)",{backgroundColor:"rgb(226, 139, 153)"}),Object(l.a)(ae,"rgb(183, 192, 194)",{backgroundColor:"rgb(183, 192, 194)"}),ae)),ie=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={sunState:"hidden",cityState:"hidden",skyColor:re,compassState:"hidden",currentIndex:0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("onLeave",{origin:e,destination:t,direction:a}),0==e.index&&1==t.index?this.setState({sunState:"fadeaway",cityState:"visible",skyColor:"rgb(11, 16, 77)",currentIndex:t.index}):1==e.index&&0==t.index&&this.setState({sunState:"rot",cityState:"hidden",skyColor:re,currentIndex:t.index}),1==e.index&&2==t.index?this.setState({cityState:"hidden",compassState:"visible",skyColor:"rgb(226, 139, 153)",currentIndex:t.index}):2==e.index&&1==t.index&&this.setState({cityState:"visible",compassState:"hidden",skyColor:"rgb(11, 16, 77)",currentIndex:t.index}),2==e.index&&3==t.index?this.setState({skyColor:"rgb(183, 192, 194)",currentIndex:t.index}):3==e.index&&2==t.index&&this.setState({skyColor:"rgb(226, 139, 153)",currentIndex:t.index})}},{key:"componentDidMount",value:function(){this.setState({sunState:"rot"})}},{key:"renderContent",value:function(){var e=this;return u.a.createElement(ce,{className:"App",pose:this.state.skyColor},u.a.createElement(ee,{state:this.state.sunState}),u.a.createElement(te,{state:this.state.cityState}),u.a.createElement(ne,{state:this.state.compassState}),u.a.createElement(h.a,{touchSensitivity:15,onLeave:this.onLeave.bind(this),render:function(t){t.state,t.fullpageApi;return u.a.createElement(h.a.Wrapper,null,u.a.createElement("div",{className:"section",style:{zIndex:-2}},u.a.createElement(x,null)),u.a.createElement("div",{className:"section"},u.a.createElement(w,null)),u.a.createElement("div",{className:"section"},u.a.createElement(D,{onPage:2==e.state.currentIndex})),u.a.createElement("div",{className:"section"},u.a.createElement(J,null)))}}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(Y,null),this.renderContent())}}]),t}(u.a.Component);d.a.render(u.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){},87:function(e,t,a){e.exports={nodecolor:"#e9e510",labelcolor:"#ecc2d2"}},88:function(e,t,a){e.exports={nodecolor:"#e9e510",labelcolor:"#ecc2d2"}},91:function(e,t,a){},92:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.96afd4ec.chunk.js.map