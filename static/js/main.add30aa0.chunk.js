(this["webpackJsonpnft-exlplorer"]=this["webpackJsonpnft-exlplorer"]||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){},241:function(e,t){},289:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(0),a=n.n(c),i=n(79),o=n.n(i),s=n(323),u=(n(221),n(313)),l=(n(222),n(57)),d=n(3),b=n.n(d),j=n(31),f=n(20),p=n(12),h=n(37),O=n(199),m=n(186),x=n(311),y=n(310),v=n(312),w=n(314),g=n(327),C=n(152),A=n.n(C),S=n(89),E=[{name:"Pudgy Penguins",address:"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"},{name:"Cool Cats",address:"0x1A92f7381B9F03921564a437210bB9396471050C"},{name:"Boonji Project",address:"0x4cd0ea8b1bDb5ab9249d96cCF3d8A0d3aDa2Bc76"},{name:"Lazy Lions",address:"0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",options:{cors:!0}},{name:"World Of Women",address:"0xe785E82358879F061BC3dcAC6f0444462D4b5330",options:{cors:!0}},{name:"Creature World",address:"0xc92cedDfb8dd984A89fb494c376f9A48b999aAFc",options:{cors:!0}},{name:"DeadFellaz",address:"0x2acAb3DEa77832C09420663b0E1cB386031bA17B",options:{cors:!0}},{name:"Stoner Cats",address:"0xD4d871419714B778eBec2E22C7c53572b573706e",options:{cors:!0}},{name:"Desperate ApeWives",address:"0xF1268733C6FB05EF6bE9cF23d24436Dcd6E0B35E",options:{cors:!0}},{name:"Bored Ape Yacht Club",address:"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",options:{cors:!0}}],I={dataByContract:{},activeContractAddress:Object.values(E)[Math.floor(Math.random()*Object.values(E).length)].address},k=Object(S.b)({name:"contracts",initialState:I,reducers:{init:function(e,t){if(!e.dataByContract[t.payload.contractAddress]){for(var n={},r=t.payload.initialValue;r<t.payload.totalSupply+t.payload.initialValue;r++)n[r]={};e.dataByContract[t.payload.contractAddress]=n}},setMetadataURI:function(e,t){t.payload.tokens.forEach((function(n){var r=n.tokenId,c=n.uri;e.dataByContract[t.payload.contractAddress][r].uri=c}))},setMetadataJSON:function(e,t){t.payload.tokens.forEach((function(n){var r=n.tokenId,c=n.json;e.dataByContract[t.payload.contractAddress][r].json={image:c.image,name:c.name}}))},changeActiveContractAddress:function(e,t){e.activeContractAddress=t.payload}}}),R=k.actions,P=R.setMetadataURI,T=R.setMetadataJSON,_=R.changeActiveContractAddress,B=R.init,M=k.reducer,N=n(80),L=n(325),U=n(87),D=new N.a.utils.Interface(U.abi),F=function(e){var t,n=null!==(t=Object(L.a)({abi:D,address:e,method:"totalSupply",args:[]}))&&void 0!==t?t:[];return Object(p.a)(n,1)[0]},W=new N.a.utils.Interface(U.abi),z=function(e,t){var n;return null!==(n=Object(L.b)(t.map((function(t){return{abi:W,address:e,method:"tokenURI",args:[t]}}))))&&void 0!==n?n:null},H=new N.a.utils.Interface(U.abi),G=function(e,t){var n;return null!==(n=Object(L.b)(t.map((function(t){return{abi:H,address:e,method:"tokenByIndex",args:[t]}}))))&&void 0!==n?n:null},J=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current},V=function(){var e=Object(c.useState)(0),t=Object(p.a)(e,2)[1];return function(){return t((function(e){return e+1}))}},Y=Object({NODE_ENV:"production",PUBLIC_URL:"/nft-explorer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALCHEMY_API:"https://eth-mainnet.alchemyapi.io/v2/tc37MtbC-e0NDrSKLkdGxypf7u3IYtww",REACT_APP_CHAIN_ID:"1",REACT_APP_ETHERSCAN_URL:"https://etherscan.io",REACT_APP_SITE_URL:"https://ivanm.github.io/nft-explorer/"}),K=Y.REACT_APP_ALCHEMY_API,q=Y.REACT_APP_CHAIN_ID,Q=Y.REACT_APP_ETHERSCAN_URL,X=Y.REACT_APP_SITE_URL,Z="".concat(K),$=q?parseInt(q):0,ee=("".concat(Q),"".concat(X),n(321)),te=n(326),ne=n(11),re=function(e){var t=e.tokenId,n=e.imgUrl,r=e.onClose;Object(c.useEffect)((function(){return d(),window.addEventListener("resize",(function(){d()})),function(){window.removeEventListener("resize",d)}}),[]);var a=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),i=Object(p.a)(a,2)[1],o=Object(c.useState)("width"),s=Object(p.a)(o,2),u=s[0],l=s[1],d=function(){window.innerWidth>window.innerHeight?l("height"):l("width"),i({height:window.innerHeight,width:window.innerWidth})};return Object(ne.jsxs)(ee.a,{isOpen:null!==t,onClose:r,closeOnOverlayClick:!0,motionPreset:"none",size:"full",children:[Object(ne.jsx)(ee.d,{}),Object(ne.jsx)(ee.c,{margin:"0",bg:"rgba(0,0,0,0.5)",children:Object(ne.jsx)(ee.b,{display:"flex",justifyContent:"center",onClick:function(e){var t=e.target;(t.classList.contains("chakra-modal__body")||t.classList.contains("image-container"))&&r()},children:Object(ne.jsx)(y.a,{height:"",justify:"center",align:"center",className:"image-container",children:Object(ne.jsx)(te.a,{maxWidth:"none",height:"height"===u?"calc(100vh - 50px)":"auto",width:"width"===u?"calc(100vw - 50px)":"auto",objectFit:"cover",src:n})})})})]})},ce=function(e,t){return new Promise((function(n,r){var c;return c=setTimeout(n,e),null===t||void 0===t||t.addEventListener("abort",(function(){clearTimeout(c)})),c}))},ae=function(e){e.boxSize;var t=e.alt,n=e.title,r=e.loading,a=e.tokenId,i=e.src,o=e.index,s=e.setFinishedDelay,u=e.isFinishedDelay,l=e.isLoadedImage,d=e.metadata,f=e.itemSize;return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(1500);case 2:u||s(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u,s,a,o]),u&&l&&d&&d.image?Object(ne.jsx)(te.a,{boxSize:f,alt:t,title:n,loading:r,src:i}):Object(ne.jsx)(y.a,{height:f,width:f})},ie=n(192),oe=n.n(ie),se=function(e,t){var n=e.slice(7);switch(t){case"cloudflare-ipfs.com":return"https://".concat(t,"/ipfs/").concat(n);case"dweb.link":case"infura-ipfs.io":var r=n.split("/"),c=new oe.a(r[0]).toV1().toString("base32");return"https://".concat(c,".ipfs.").concat(t).concat(r[1]?"/".concat(r[1]):"")}return e},ue=function(){var e=V(),t=Object(x.a)().chainId,n=Object(h.b)(),a=Object(h.c)((function(e){return e.contracts.dataByContract})),i=Object(h.c)((function(e){return e.contracts.activeContractAddress})),o=Object(h.c)((function(e){return e.options.corsProxyUrl})),s=Object(h.c)((function(e){return e.options.ipfsGateway})),d=.9*window.innerWidth,C=t!==$,S=a[i]?Object.values(a[i]).filter((function(e){return!e.uri})).length:null,E=a&&a[i]&&Object.values(a[i]).every((function(e){return e.uri})),I=Object(c.useState)(null),k=Object(p.a)(I,2),R=k[0],_=k[1],M=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),N=Object(p.a)(M,2)[1],L=Object(c.useState)(300),U=Object(p.a)(L,2),D=U[0],W=U[1],H=Object(c.useRef)([]),Y=Object(c.useState)([]),K=Object(p.a)(Y,2),q=K[0],Q=K[1],X=Object(c.useRef)(a[i]?Object.keys(a[i]).filter((function(e){return a[i][e].json})).map((function(e){return parseInt(e)})):[]),Z=Object(c.useRef)(0),ee=Object(c.useRef)(0),te=Object(c.useRef)({}),ie=Object(c.useRef)({}),oe=Object(c.useRef)({}),ue=F(i),le=G(i,[0]),de=Object(p.a)(le,1)[0],be=z(i,q);Object(c.useEffect)((function(){return ge(),window.addEventListener("resize",(function(){ge()})),function(){window.removeEventListener("resize",ge)}}),[]);var je=de?de[0]:null;Object(c.useEffect)((function(){je&&ue&&!a[i]&&n(B({totalSupply:ue.toNumber(),contractAddress:i,initialValue:je.toNumber()}))}),[n,ue,a,i,je]),Object(c.useEffect)((function(){if(ue&&a[i]){var e=[];Object.keys(a[i]).forEach((function(t){a[i][t].uri||(e=[].concat(Object(f.a)(e),[parseInt(t)]))})),(e=e.filter((function(e,t){return t<=500}))).length&&Q(e)}}),[Q,e,i,n,ue,a,q]);var fe=JSON.stringify(be);Object(c.useEffect)((function(){if(ue&&a[i]){var e=[],t=[];q.forEach((function(n,r){be[r]&&!a[i][n].uri&&(e=[].concat(Object(f.a)(e),[{tokenId:n,uri:be[r][0]}]),t=[].concat(Object(f.a)(t),[n]))})),e.length&&n(P({contractAddress:i,tokens:e}))}}),[i,fe,q,ue,a,n,be]);var pe=A()(Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),500),he=J(i);Object(c.useEffect)((function(){he!==i&&(Object.values(te.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),Object.values(ie.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),te.current={},ie.current={},oe.current={},Z.current=0,ee.current=0,Q([]),X.current=[])}),[i,he]),Object(c.useEffect)((function(){return window.addEventListener("scroll",pe),function(){window.removeEventListener("scroll",pe)}}),[i,a,pe]);var Oe=J(E);Object(c.useEffect)((function(){!1===Oe&&!0===E&&(pe(),X.current=[])}),[E,Oe,pe]);var me=Object(c.useCallback)(function(){var t=Object(j.a)(b.a.mark((function t(n,c,o,u){var d,j,f,p,h,O;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(c,o);case 2:return d=null,d=new window.Image,(j=null!==u&&void 0!==u?u:a[i][n].json.image).startsWith("ipfs:")&&(j=se(j,s)),d.src=j,d.onload=function(){if(!o.aborted){oe.current=Object(l.a)(Object(l.a)({},oe.current),{},Object(r.a)({},n,d.src));var t=Object(l.a)({},te.current);delete t[n],te.current=t,e()}},t.next=10,ce(1e4,o);case 10:d.complete&&d.naturalWidth||(d.src="",f=new AbortController,p=f.signal,h=me(n,0,p,j),(O=Object(l.a)({},te.current))[n]={promise:h,controller:f},te.current=O);case 11:case"end":return t.stop()}}),t)})));return function(e,n,r,c){return t.apply(this,arguments)}}(),[i,a,e,s]),xe=Object(c.useCallback)(function(){var e=Object(j.a)(b.a.mark((function e(t,c){var u,d,j,p,h;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a[i]&&a[i][t]){e.next=2;break}return e.abrupt("return");case 2:return u=a[i][t].uri,e.prev=3,u.startsWith("ipfs:")?u=se(u,s):o&&(u=o+u),e.next=7,fetch(u,{signal:c});case 7:return d=e.sent,e.next=10,d.text();case 10:return j=e.sent,n(T({contractAddress:i,tokens:[{tokenId:t,json:JSON.parse(j)}]})),X.current=[].concat(Object(f.a)(X.current),[t]),p=new AbortController,h=me(t,Z,c,JSON.parse(j).image),te.current=Object(l.a)(Object(l.a)({},te.current),{},Object(r.a)({},t,{promise:h,controller:p})),Z.current=Z.current+2e3,e.abrupt("return",j);case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,n){return e.apply(this,arguments)}}(),[a,i,n,o,s,me]),ye=!0,ve=function(){ye&&(H.current=Ae,ye=!1,e())},we=function(e){e.overscanStartIndex,e.overscanStopIndex;var t=e.visibleStartIndex,n=e.visibleStopIndex;Object.values(te.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),te.current={},Object.values(ie.current).forEach((function(e){e&&e.controller&&e.controller.abort()})),ie.current={};var c=Math.floor(d/D),o=t*c,s=n*c+c;s>ue.toNumber()&&(s=ue.toNumber()),ee.current=0,Z.current=0;for(var u=o;u<=s;u++){var b=parseInt(Object.keys(a[i])[u]);if(Ae.includes(b)||Ae.push(b),a[i][b]&&(!a[i][b].json||!a[i][b].json.image)&&!ie.current[b]){var j=new AbortController,f=j.signal,p=Ce(b,ee.current,f);ie.current=Object(l.a)(Object(l.a)({},ie.current),{},Object(r.a)({},b,{promise:p,controller:j})),ee.current=ee.current+1e3}if(a[i][b]&&a[i][b].json&&a[i][b].json.image&&H.current.includes(b)&&!te.current[b]&&!oe.current[b]){var h=new AbortController,O=h.signal,m=me(b,Z.current,O);te.current=Object(l.a)(Object(l.a)({},te.current),{},Object(r.a)({},b,{promise:m,controller:h})),Z.current=Z.current+2e3}}},ge=function(){window.innerWidth<500?W(120):W(200),N({height:window.innerHeight,width:window.innerWidth})},Ce=function(){var e=Object(j.a)(b.a.mark((function e(t,n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(n,r);case 2:xe(t,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Ae=[];Object(c.useRef)(Ae).current=Ae;var Se=function(e){for(var t=e.index,n=e.style,r=(e.ref,Math.floor(d/D)),c=t*r,o=new Array(r).fill({}).filter((function(e,t){return c+t<ue.toNumber()})),s=0;s<o.length;s++){var l=parseInt(Object.keys(a[i])[c+s]);Ae.includes(l)||Ae.push(l)}return Object(ne.jsx)(y.a,{direction:"row",justify:"center",style:n,children:o.map((function(e,t){var n,r=parseInt(Object.keys(a[i])[c+t]);return Object(ne.jsx)(v.a,{onClick:function(){oe.current[r]&&_(r)},children:Object(ne.jsxs)(u.a,{position:"relative",_hover:{background:"blue"},children:[Object(ne.jsxs)(y.a,{height:D,width:D,bg:"gray.900",opacity:oe.current[r]?0:1,position:"absolute",top:"0",_hover:{opacity:"0.9"},justify:"center",align:"center",direction:"column",children:[Object(ne.jsxs)(w.a,{fontSize:40,children:["#",r]}),oe.current[r]?null:Object(ne.jsx)(y.a,{children:Object(ne.jsx)(w.a,{ml:2,fontSize:10,children:"LOADING..."})})]}),Object(ne.jsx)(ae,{setFinishedDelay:ve,boxSize:"200px",itemSize:D,index:t,alt:"".concat(r),title:"".concat(r),loading:"lazy",tokenId:r,src:oe.current[r],metadata:null!==(n=a[i][r]&&a[i][r].json)&&void 0!==n?n:void 0,isFinishedDelay:H.current.includes(r),isLoadedImage:oe.current[r]})]})},"".concat(r,"-").concat(t))}))})};return Object(ne.jsx)(c.Fragment,{children:ue&&E?Object(ne.jsxs)(c.Fragment,{children:[null!==R?Object(ne.jsx)(re,{tokenId:R,imgUrl:oe.current[R],onClose:function(){_(null)}}):null,Object(ne.jsx)(y.a,{direction:"column",align:"center",children:Object(ne.jsx)(y.a,{wrap:"wrap",justify:"center",children:Object(ne.jsx)("div",{id:"virtualContainer",style:{width:d,height:"100%"},children:Object(ne.jsx)(m.ReactWindowScroller,{children:function(e){var t=e.ref,n=e.outerRef,r=e.style,c=e.onScroll;return Object(ne.jsx)(O.a,{style:r,outerRef:n,ref:t,height:window.innerHeight,itemCount:Math.ceil(ue.toNumber()/Math.floor(d/D)),itemSize:D,width:window.innerWidth,onScroll:c,onItemsRendered:A()(we,2e3),children:Se})}})})})})]}):Object(ne.jsxs)(y.a,{p:5,mt:8,align:"center",justify:"center",direction:"column",children:[Object(ne.jsx)(u.a,{color:"gray.700",children:Object(ne.jsx)(g.a,{})}),Object(ne.jsxs)(u.a,{mt:2,children:[Object(ne.jsxs)(w.a,{textAlign:"center",children:[" ",C?"Please connect to Ethereum Network":"Loading data from the blockchain, please wait"]}),Object(ne.jsx)(w.a,{textAlign:"center",children:ue&&S&&S<ue.toNumber()?"[ ".concat(S.toLocaleString()," / ").concat(ue?ue.toNumber().toLocaleString():""," ]"):""})]})]})})},le=n(315),de=n(316),be=n(317),je=n(324),fe=n(101),pe=n(318),he={corsProxyUrl:"https://e6bp05g0dh.execute-api.us-east-1.amazonaws.com/dev?url=",ipfsGateway:"infura-ipfs.io"},Oe=Object(S.b)({name:"options",initialState:he,reducers:{setCorsProxyUrl:function(e,t){e.corsProxyUrl=t.payload},setIpfsGateway:function(e,t){e.ipfsGateway=t.payload}}}),me=Oe.actions,xe=me.setCorsProxyUrl,ye=me.setIpfsGateway,ve=Oe.reducer,we=[{name:"cloudflare-ipfs.com"},{name:"dweb.link"},{name:"infura-ipfs.io"}],ge=function(){var e=Object(h.c)((function(e){return e.contracts.activeContractAddress})),t=Object(h.c)((function(e){return e.options.corsProxyUrl})),n=Object(h.c)((function(e){return e.options.ipfsGateway})),r=Object(h.b)(),a=Object(c.useState)(e),i=Object(p.a)(a,2),o=i[0],s=i[1],l=Object(c.useState)(n),d=Object(p.a)(l,2),b=d[0],j=d[1],f=Object(c.useState)(n),O=Object(p.a)(f,2),m=O[0],x=O[1],w=Object(c.useState)(E.find((function(t){return t.address===e}))?E.find((function(t){return t.address===e})).address:""),g=Object(p.a)(w,2),C=g[0],A=g[1],S=Object(c.useState)(!1),I=Object(p.a)(S,2),k=I[0],R=I[1],P=Object(c.useState)(null==t?"":t),T=Object(p.a)(P,2),B=T[0],M=T[1],N=Object(c.useState)(null==t?"":t),L=Object(p.a)(N,2),U=L[0],D=L[1],F=E;return F.sort((function(e,t){return e.name.localeCompare(t.name)})),Object(ne.jsx)(u.a,{id:"header",as:"header",display:"flex",flexDirection:"column",width:"100%",p:0,alignItems:"center",children:Object(ne.jsx)(y.a,{borderRadius:"20px",bg:"gray.600",p:4,m:5,justify:"center",maxWidth:"827px",children:Object(ne.jsxs)(y.a,{direction:"column",children:[Object(ne.jsx)(le.a,{textAlign:"center",as:"h1",children:"NFT Explorer"}),Object(ne.jsxs)(u.a,{textAlign:"center",pt:5,pb:5,pl:5,pr:5,children:["Use an",Object(ne.jsx)("b",{children:" Ethereum ERC721"})," Contract Address with the",Object(ne.jsxs)("b",{children:[" ",Object(ne.jsx)(v.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC721Enumerable"})]})," ","Extension, or select one of the available Collection presets. Data will be dynamically fetched as you scroll."]}),Object(ne.jsxs)(y.a,{justify:"space-around",align:"center",height:"100%",direction:{base:"column",md:"row"},children:[Object(ne.jsxs)(de.a,{width:{base:"100%",md:"180px"},onChange:function(e){var t=e.target.value;A(t),t&&(s(t),r(_(t)))},value:C,children:[F.map((function(e){var t=e.name,n=e.address;return Object(ne.jsx)("option",{value:n,children:t},n)})),Object(ne.jsx)("option",{value:"",children:"Other"},"other")]}),Object(ne.jsx)(be.a,{mt:{base:2,md:0},ml:"5px",width:{base:"100%",md:"445px"},placeholder:"Address",value:o,onChange:function(e){var t=e.target.value;s(t)}}),Object(ne.jsxs)(y.a,{mt:{base:2,md:0},children:[Object(ne.jsx)(je.a,{ml:"5px",onClick:function(){r(_(o)),A(E.find((function(e){return e.address===o}))?E.find((function(e){return e.address===o})).address:"")},children:"Go"}),Object(ne.jsx)(je.a,{ml:"5px",onClick:function(){R(!k)},children:"Options"})]})]}),k?Object(ne.jsxs)(y.a,{direction:"column",m:4,p:4,borderWidth:"2px",borderRadius:"12px",children:[Object(ne.jsxs)(y.a,{direction:"column",children:[Object(ne.jsxs)(fe.a,{id:"corsProxy",children:[Object(ne.jsx)(pe.a,{children:"CORS Proxy"}),Object(ne.jsx)(be.a,{ml:"5px",placeholder:"",value:B,onChange:function(e){var t=e.target.value;M(t)}})]}),Object(ne.jsxs)(fe.a,{id:"ipfsGateway",mt:3,children:[Object(ne.jsx)(pe.a,{children:"IPFS Gateway"}),Object(ne.jsx)(de.a,{value:b,onChange:function(e){var t=e.target.value;j(t)},children:we.map((function(e){var t=e.name;return Object(ne.jsx)("option",{value:t,children:t},t)}))})]})]}),Object(ne.jsxs)(y.a,{mt:3,justify:"end",children:[Object(ne.jsx)(je.a,{onClick:function(){r(xe(B)),r(ye(b)),R(!1),x(b),D(B)},isDisabled:U===B&&m===b,children:"Update"}),Object(ne.jsx)(je.a,{ml:2,isDisabled:he.corsProxyUrl===B&&he.ipfsGateway===b,onClick:function(){M(null==he.corsProxyUrl?"":he.corsProxyUrl),j(he.ipfsGateway),r(xe(he.corsProxyUrl)),r(ye(he.ipfsGateway)),R(!1),x(he.ipfsGateway),D(he.corsProxyUrl)},children:"Reset"})]})]}):null]})})})},Ce=function(){var e=Object(h.c)((function(e){return e.contracts.activeContractAddress})),t=Object(h.c)((function(e){return e.contracts.dataByContract})),n=F(e),r=G(e,[0]),a=Object(p.a)(r,1)[0],i=a?a[0]:null,o=Object(c.useState)({x:50,y:0}),s=Object(p.a)(o,2),l=s[0],d=s[1],b=Object(c.useState)(0),j=Object(p.a)(b,2),O=j[0],m=j[1];Object(c.useEffect)((function(){var e=function(e){var t=window.scrollY/document.body.offsetHeight*window.innerHeight;m(window.scrollY/document.body.offsetHeight),d({x:l.x,y:t})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[l]);var x=[];if(n&&i&&t[e]&&Object.values(t[e]).length){for(var v=Math.floor(n.toNumber()/9),w=[],g=1;g<9;g++)w=[].concat(Object(f.a)(w),[w.length?w[w.length-1]+v:v]);x=[i.toNumber()].concat(Object(f.a)(w),[Object.keys(t[e])[Object.keys(t[e]).length-1]])}var C=t&&t[e]&&Object.values(t[e]).every((function(e){return e.uri}))&&n&&i&&t[e],A=1e3,S=n?n.toNumber()*O:1;return C?Object(ne.jsxs)(c.Fragment,{children:[Object(ne.jsx)(y.a,{position:"fixed",right:"0",top:"0",width:"70px",height:"100vh",direction:"column",justify:"space-between",children:x.map((function(e,t){var n=null;return S>=e&&S<e+A?n=0===S?0:(S-e)/A:S<=e&&S>e-A&&(n=(e-S)/A),Object(ne.jsx)(u.a,{textAlign:"end",mr:2,fontSize:null!=n?20-10*n:10,children:e},t)}))}),Object(ne.jsx)(u.a,{display:"none",position:"fixed",fontSize:10,right:l.x,top:l.y,children:"-"})]}):null},Ae=function(){return Object(ne.jsxs)(u.a,{pr:"30px",children:[Object(ne.jsx)(Ce,{}),Object(ne.jsx)(ge,{}),Object(ne.jsx)(u.a,{as:"main",pt:"10px",children:Object(ne.jsx)(ue,{})})]})},Se=n(322),Ee=n(320),Ie=n(319),ke=Object(Ie.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),Re=n(155),Pe=Object(S.a)({reducer:{contracts:M,options:ve},middleware:[Object(Re.save)({states:["contracts","options"],namespace:"localdata"})],preloadedState:Object(Re.load)({states:["contracts","options"],namespace:"localdata"})}),Te={readOnlyChainId:$,readOnlyUrls:Object(r.a)({},$,Z)};o.a.render(Object(ne.jsx)(a.a.StrictMode,{children:Object(ne.jsx)(s.a,{theme:ke,children:Object(ne.jsxs)(Se.a,{config:Te,children:[Object(ne.jsx)(Ee.a,{initialColorMode:ke.config.initialColorMode}),Object(ne.jsx)(h.a,{store:Pe,children:Object(ne.jsx)(Ae,{})})]})})}),document.getElementById("root"))},87:function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"","bytecode":"","deployedBytecode":"","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[],"sourceMap":"","deployedSourceMap":"","source":"","sourcePath":"","ast":"","legacyAST":{},"compiler":{},"networks":{},"schemaVersion":"3.3.4","updatedAt":"","networkType":"ethereum","devdoc":{},"userdoc":{}}')}},[[289,1,2]]]);
//# sourceMappingURL=main.add30aa0.chunk.js.map