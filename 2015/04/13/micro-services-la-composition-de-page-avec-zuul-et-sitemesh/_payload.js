export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b_,b$,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD){return {data:{"/articles/2015/04/13/micro-services-la-composition-de-page-avec-zuul-et-sitemesh":{_path:"\u002Farticles\u002F2015\u002F04\u002F13\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh",_dir:"13",_draft:B,_partial:B,_locale:"en",_empty:B,title:"Micro-services : la composition de page avec Zuul et Sitemesh",description:"[![03BC](\u002Fimages\u002F07933-03bc.gif)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F07933-03bc.gif) Le dernier billet de ce blog entamait une min...",excerpt:{type:S,children:[{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:T,rel:[i]},children:[{type:a,tag:l,props:{alt:U,src:V},children:[]}]},{type:b,value:W}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:X}]},{type:a,tag:f,props:{},children:[{type:b,value:Y}]},{type:a,tag:f,props:{},children:[{type:a,tag:h,props:{href:r,rel:[i],title:s},children:[{type:b,value:Z}]}]},{type:a,tag:f,props:{},children:[{type:b,value:_}]},{type:a,tag:f,props:{},children:[{type:b,value:$}]},{type:a,tag:f,props:{},children:[{type:b,value:aa}]},{type:a,tag:f,props:{},children:[{type:b,value:ab}]},{type:a,tag:f,props:{},children:[{type:b,value:ac}]},{type:a,tag:f,props:{},children:[{type:b,value:ad}]},{type:a,tag:f,props:{},children:[{type:b,value:ae}]},{type:a,tag:f,props:{},children:[{type:b,value:af}]},{type:a,tag:f,props:{},children:[{type:b,value:ag}]}]},{type:a,tag:c,props:{},children:[{type:b,value:ah},{type:a,tag:h,props:{href:r,rel:[i],title:s},children:[{type:b,value:ai}]},{type:b,value:aj}]},{type:a,tag:c,props:{},children:[{type:b,value:ak},{type:a,tag:h,props:{href:t,rel:[i]},children:[{type:b,value:al}]}]},{type:a,tag:c,props:{},children:[{type:b,value:am}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:an}]},{type:a,tag:f,props:{},children:[{type:b,value:ao}]},{type:a,tag:f,props:{},children:[{type:b,value:ap}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aq,rel:[i]},children:[{type:a,tag:l,props:{alt:ar,src:as},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:at}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:au,rel:[i]},children:[{type:a,tag:l,props:{alt:av,src:aw},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:ax}]},{type:a,tag:c,props:{},children:[{type:b,value:ay},{type:a,tag:h,props:{href:u,rel:[i]},children:[{type:b,value:v}]},{type:b,value:az},{type:a,tag:h,props:{href:aA,rel:[i]},children:[{type:b,value:aB}]},{type:b,value:aC}]},{type:a,tag:c,props:{},children:[{type:b,value:aD}]},{type:a,tag:m,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:aE}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aF,rel:[i]},children:[{type:a,tag:l,props:{alt:aG,src:aH},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aI}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:aJ}]},{type:a,tag:f,props:{},children:[{type:b,value:aK}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aL}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:w}]},{type:a,tag:f,props:{},children:[{type:b,value:aM}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aN}]},{type:a,tag:m,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:aO}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aP,rel:[i]},children:[{type:a,tag:l,props:{alt:aQ,src:aR},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aS}]},{type:a,tag:c,props:{},children:[{type:b,value:aT}]},{type:a,tag:c,props:{},children:[{type:b,value:aU}]},{type:a,tag:c,props:{},children:[{type:b,value:aV}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:aW}]},{type:a,tag:f,props:{},children:[{type:b,value:aX}]},{type:a,tag:f,props:{},children:[{type:b,value:aY}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aZ}]},{type:a,tag:m,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:a_}]},{type:a,tag:c,props:{},children:[{type:b,value:a$}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:ba,rel:[i]},children:[{type:a,tag:l,props:{alt:bb,src:bc},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bd}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:be}]},{type:a,tag:f,props:{},children:[{type:b,value:bf}]},{type:a,tag:f,props:{},children:[{type:b,value:bg}]},{type:a,tag:f,props:{},children:[{type:b,value:bh}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bi}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:bj}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bk}]},{type:a,tag:c,props:{},children:[{type:b,value:bl},{type:a,tag:h,props:{href:bm,rel:[i]},children:[{type:b,value:bn}]}]},{type:a,tag:m,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:bo},{type:a,tag:h,props:{href:bp,rel:[i]},children:[{type:b,value:q}]},{type:b,value:bq}]},{type:a,tag:c,props:{},children:[{type:b,value:br},{type:a,tag:h,props:{href:u,rel:[i]},children:[{type:b,value:v}]},{type:b,value:bs},{type:a,tag:h,props:{href:bt,rel:[i]},children:[{type:b,value:bu}]},{type:b,value:bv}]},{type:a,tag:c,props:{},children:[{type:b,value:bw}]},{type:a,tag:c,props:{},children:[{type:b,value:bx}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:by}]},{type:a,tag:c,props:{},children:[{type:b,value:bz}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:bA}]},{type:a,tag:c,props:{},children:[{type:b,value:bB}]},{type:a,tag:c,props:{},children:[{type:b,value:bC}]},{type:a,tag:c,props:{},children:[{type:b,value:bD}]},{type:a,tag:c,props:{},children:[{type:b,value:bE}]},{type:a,tag:c,props:{},children:[{type:b,value:bF}]},{type:a,tag:c,props:{},children:[{type:b,value:bG}]},{type:a,tag:c,props:{},children:[{type:b,value:bH}]},{type:a,tag:c,props:{},children:[{type:b,value:bI}]},{type:a,tag:c,props:{},children:[{type:b,value:bJ}]},{type:a,tag:c,props:{},children:[{type:b,value:bK}]},{type:a,tag:c,props:{},children:[{type:b,value:bL},{type:a,tag:h,props:{href:bM,rel:[i]},children:[{type:b,value:bN}]},{type:b,value:bO}]},{type:a,tag:c,props:{},children:[{type:b,value:bP}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:bQ,rel:[i]},children:[{type:a,tag:l,props:{alt:q,src:bR},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bS}]},{type:a,tag:c,props:{},children:[{type:b,value:bT}]},{type:a,tag:c,props:{},children:[{type:b,value:bU}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:bV,rel:[i]},children:[{type:a,tag:l,props:{alt:bW,src:bX},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bY}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:bZ}]},{type:a,tag:f,props:{},children:[{type:b,value:b_}]},{type:a,tag:f,props:{},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{},children:[{type:b,value:b$}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:ca}]},{type:a,tag:f,props:{},children:[{type:b,value:cb}]},{type:a,tag:f,props:{},children:[{type:b,value:cc}]}]},{type:a,tag:m,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:cd},{type:a,tag:h,props:{href:ce,rel:[i]},children:[{type:b,value:cf}]},{type:b,value:cg}]},{type:a,tag:c,props:{},children:[{type:b,value:ch}]},{type:a,tag:m,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:ci}]},{type:a,tag:m,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:cj}]},{type:a,tag:m,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:ck,props:{},children:[{type:a,tag:cl,props:{},children:[{type:a,tag:o,props:{},children:[{type:a,tag:n,props:{align:d},children:[{type:b,value:cm}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cn}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:co}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cp}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cq}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cr}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cs}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:ct}]}]}]},{type:a,tag:cu,props:{},children:[{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cv}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cw}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:q}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cx}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:cy}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cz}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cA}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:cB}]},{type:a,tag:c,props:{},children:[{type:b,value:cC},{type:a,tag:h,props:{href:t,rel:[i]},children:[{type:b,value:cD}]}]}]},id:"1169",date:"2015-04-13",categories:["waza"],tags:["backend","microservices",q,"spring-boot","zuul"],img:"07933-03bc.gif",cover:"cover2.jpg",readingTime:{text:"9 min read",minutes:8.035,time:482100,words:1607},body:{type:S,children:[{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:T,rel:[i]},children:[{type:a,tag:l,props:{alt:U,src:V},children:[]}]},{type:b,value:W}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:X}]},{type:a,tag:f,props:{},children:[{type:b,value:Y}]},{type:a,tag:f,props:{},children:[{type:a,tag:h,props:{href:r,rel:[i],title:s},children:[{type:b,value:Z}]}]},{type:a,tag:f,props:{},children:[{type:b,value:_}]},{type:a,tag:f,props:{},children:[{type:b,value:$}]},{type:a,tag:f,props:{},children:[{type:b,value:aa}]},{type:a,tag:f,props:{},children:[{type:b,value:ab}]},{type:a,tag:f,props:{},children:[{type:b,value:ac}]},{type:a,tag:f,props:{},children:[{type:b,value:ad}]},{type:a,tag:f,props:{},children:[{type:b,value:ae}]},{type:a,tag:f,props:{},children:[{type:b,value:af}]},{type:a,tag:f,props:{},children:[{type:b,value:ag}]}]},{type:a,tag:c,props:{},children:[{type:b,value:ah},{type:a,tag:h,props:{href:r,rel:[i],title:s},children:[{type:b,value:ai}]},{type:b,value:aj}]},{type:a,tag:c,props:{},children:[{type:b,value:ak},{type:a,tag:h,props:{href:t,rel:[i]},children:[{type:b,value:al}]}]},{type:a,tag:c,props:{},children:[{type:b,value:am}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:an}]},{type:a,tag:f,props:{},children:[{type:b,value:ao}]},{type:a,tag:f,props:{},children:[{type:b,value:ap}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aq,rel:[i]},children:[{type:a,tag:l,props:{alt:ar,src:as},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:at}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:au,rel:[i]},children:[{type:a,tag:l,props:{alt:av,src:aw},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:ax}]},{type:a,tag:c,props:{},children:[{type:b,value:ay},{type:a,tag:h,props:{href:u,rel:[i]},children:[{type:b,value:v}]},{type:b,value:az},{type:a,tag:h,props:{href:aA,rel:[i]},children:[{type:b,value:aB}]},{type:b,value:aC}]},{type:a,tag:c,props:{},children:[{type:b,value:aD}]},{type:a,tag:m,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:aE}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aF,rel:[i]},children:[{type:a,tag:l,props:{alt:aG,src:aH},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aI}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:aJ}]},{type:a,tag:f,props:{},children:[{type:b,value:aK}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aL}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:w}]},{type:a,tag:f,props:{},children:[{type:b,value:aM}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aN}]},{type:a,tag:m,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:aO}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:aP,rel:[i]},children:[{type:a,tag:l,props:{alt:aQ,src:aR},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aS}]},{type:a,tag:c,props:{},children:[{type:b,value:aT}]},{type:a,tag:c,props:{},children:[{type:b,value:aU}]},{type:a,tag:c,props:{},children:[{type:b,value:aV}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:aW}]},{type:a,tag:f,props:{},children:[{type:b,value:aX}]},{type:a,tag:f,props:{},children:[{type:b,value:aY}]}]},{type:a,tag:c,props:{},children:[{type:b,value:aZ}]},{type:a,tag:m,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:a_}]},{type:a,tag:c,props:{},children:[{type:b,value:a$}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:ba,rel:[i]},children:[{type:a,tag:l,props:{alt:bb,src:bc},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bd}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:be}]},{type:a,tag:f,props:{},children:[{type:b,value:bf}]},{type:a,tag:f,props:{},children:[{type:b,value:bg}]},{type:a,tag:f,props:{},children:[{type:b,value:bh}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bi}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:bj}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bk}]},{type:a,tag:c,props:{},children:[{type:b,value:bl},{type:a,tag:h,props:{href:bm,rel:[i]},children:[{type:b,value:bn}]}]},{type:a,tag:m,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:bo},{type:a,tag:h,props:{href:bp,rel:[i]},children:[{type:b,value:q}]},{type:b,value:bq}]},{type:a,tag:c,props:{},children:[{type:b,value:br},{type:a,tag:h,props:{href:u,rel:[i]},children:[{type:b,value:v}]},{type:b,value:bs},{type:a,tag:h,props:{href:bt,rel:[i]},children:[{type:b,value:bu}]},{type:b,value:bv}]},{type:a,tag:c,props:{},children:[{type:b,value:bw}]},{type:a,tag:c,props:{},children:[{type:b,value:bx}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:by}]},{type:a,tag:c,props:{},children:[{type:b,value:bz}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:bA}]},{type:a,tag:c,props:{},children:[{type:b,value:bB}]},{type:a,tag:c,props:{},children:[{type:b,value:bC}]},{type:a,tag:c,props:{},children:[{type:b,value:bD}]},{type:a,tag:c,props:{},children:[{type:b,value:bE}]},{type:a,tag:c,props:{},children:[{type:b,value:bF}]},{type:a,tag:c,props:{},children:[{type:b,value:bG}]},{type:a,tag:c,props:{},children:[{type:b,value:bH}]},{type:a,tag:c,props:{},children:[{type:b,value:bI}]},{type:a,tag:c,props:{},children:[{type:b,value:bJ}]},{type:a,tag:c,props:{},children:[{type:b,value:bK}]},{type:a,tag:c,props:{},children:[{type:b,value:bL},{type:a,tag:h,props:{href:bM,rel:[i]},children:[{type:b,value:bN}]},{type:b,value:bO}]},{type:a,tag:c,props:{},children:[{type:b,value:bP}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:bQ,rel:[i]},children:[{type:a,tag:l,props:{alt:q,src:bR},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bS}]},{type:a,tag:c,props:{},children:[{type:b,value:bT}]},{type:a,tag:c,props:{},children:[{type:b,value:bU}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:bV,rel:[i]},children:[{type:a,tag:l,props:{alt:bW,src:bX},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:bY}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:bZ}]},{type:a,tag:f,props:{},children:[{type:b,value:b_}]},{type:a,tag:f,props:{},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{},children:[{type:b,value:b$}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:ca}]},{type:a,tag:f,props:{},children:[{type:b,value:cb}]},{type:a,tag:f,props:{},children:[{type:b,value:cc}]}]},{type:a,tag:m,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:cd},{type:a,tag:h,props:{href:ce,rel:[i]},children:[{type:b,value:cf}]},{type:b,value:cg}]},{type:a,tag:c,props:{},children:[{type:b,value:ch}]},{type:a,tag:m,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:ci}]},{type:a,tag:m,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:cj}]},{type:a,tag:m,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:ck,props:{},children:[{type:a,tag:cl,props:{},children:[{type:a,tag:o,props:{},children:[{type:a,tag:n,props:{align:d},children:[{type:b,value:cm}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cn}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:co}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cp}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cq}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cr}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:cs}]},{type:a,tag:n,props:{align:d},children:[{type:b,value:ct}]}]}]},{type:a,tag:cu,props:{},children:[{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cv}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cw}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:q}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cx}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:cy}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cz}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]},{type:a,tag:o,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:cA}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:j}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:g}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:cB}]},{type:a,tag:c,props:{},children:[{type:b,value:cC},{type:a,tag:h,props:{href:t,rel:[i]},children:[{type:b,value:cD}]}]}],toc:{title:"",searchDepth:p,depth:p,links:[{id:C,depth:p,text:D},{id:E,depth:p,text:F},{id:G,depth:p,text:H},{id:I,depth:p,text:J},{id:K,depth:p,text:L},{id:M,depth:p,text:N},{id:O,depth:p,text:P},{id:Q,depth:p,text:R}]}},_type:"markdown",_id:"content:articles:2015:04:13:micro-services-la-composition-de-page-avec-zuul-et-sitemesh.md",_source:"content",_file:"articles\u002F2015\u002F04\u002F13\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh.md",_extension:"md"},"/articles/2015/04/13/micro-services-la-composition-de-page-avec-zuul-et-sitemesh/relatedArticles":[]},prerenderedAt:1673339082685}}("element","text","p",null,"td","li","oui","a","nofollow","non","ul","img","h2","th","tr",2,"sitemesh","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fzuul\u002F","Micro-services : routing avec Zuul","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Fmicroservice-sandbox\u002Ftree\u002Fmaster\u002Fcompose","https:\u002F\u002Ftiles.apache.org\u002F","tiles","vous pouvez utiliser des technologies de templating différentes dans chaque application (jinja en python, jsp en java etc...)","vos applications sont vraiment autonomes et peuvent être utilisées toute seules","hello world","added by sitemesh","non (1)",false,"dupliquer-vos-éléments-communs-dans-chaque-application","Dupliquer vos éléments communs dans chaque application.","reconstruire-le-code-du-footer-et-du-menu-dynamiquement-via-des-méta-données-dans-une-base-de-données","Reconstruire le code du footer et du menu dynamiquement via des méta données dans une base de données","partager-une-jsp-commune-dans-un-jar-pour-pouvoir-linclure-dans-chaque-application-web","Partager une jsp commune dans un jar pour pouvoir l'inclure dans chaque application web","utilisons-sitemesh-alors","Utilisons sitemesh alors","autre-pistes-non-explorées-encore--les-filtres-zuul","Autre pistes non explorées encore : les filtres Zuul","et-un-widget-js-","Et un widget js ?","et-les-webcomponents-","Et les webcomponents ?","tableau-récapitulatif","Tableau récapitulatif","root","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F07933-03bc.gif","03BC","\u002Fimages\u002F07933-03bc.gif"," Le dernier billet de ce blog entamait une mini-série sur les microservices et j'espère bien susciter des commentaires afin d'améliorer le travail réalisé jusqu'ici. Voici une liste non exhaustive des différents sujets que j'aimerais traiter :","comment gérer une fédération d’identité (one login to rule them all)","gérer une configuration distribuée","le routage","le load balancing","dispatcher des évènements sur plusieurs services","les jobs","la découverte de services","simplifier l’écriture des appels de services","la composition de page","la résistance aux pannes","le monitoring","le déploiement","Le ","dernier billet"," s'attardait sur le routage. Dans ce billet j'aimerais aborder une problématique récurrente : la composition de pages","TLDR; le code avec l'utilisation de sitemesh est disponible sur ","github","Tout d'abord, resituons le problème. Imaginons une application, au hasard Hopwork, que nous avons décomposé en microservices comme suit :","le moteur de recherche","le back office freelance\u002Fclients","les pages \"statiques\" (accueil, comment ca marche etc...)","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fdf8a2-services.jpg","services","\u002Fimages\u002Fdf8a2-services.jpg","Vous remarquerez sur les captures d'écran qu'il y a tout de même un élément commun : le menu Et si nous allions en bas de la page, nous aurions également le footer. Chaque page est donc composée comme suit :","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fc7c59-composition.png","composition","\u002Fimages\u002Fc7c59-composition.png","Le footer ne bouge pas. Par contre le menu est dynamique. Il affiche votre nom quand vous êtes loggés ainsi que des items de menus différents par exemple.","Traditionnellement sur une application monolithique vous utiliseriez des inclusions de jsp, des custom tags, ",", ","http:\u002F\u002Fwww.thymeleaf.org\u002F","thymeleaf"," etc...","Et pour une application décomposé en plusieurs services ? Quelles seraient les solutions à envisager ?","Sans doute la pire solution mais il ne faut rien écarter. Ici il s'agit simplement d'avoir votre menu et votre footer dupliqué dans chaque micro services.","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3f257-duplication.jpg","duplication","\u002Fimages\u002F3f257-duplication.jpg","Bon, vous imaginez sans mal les inconvénients :","effort de maintenance démultipliée","aucun mécanisme pour qu'une application ait le même menu que les autres, vous pourriez avoir des liens dans le footer différent par exemple","Par contre à sa décharge, cette méthode a quand même des avantages :","vous pouvez utiliser des versions différentes de css pour un rendu équivalent","Ce dernier point est très important. Mais l'effort de maintenance reste beaucoup trop important pour envisager sérieusement cette solution.","C'est une petite amélioration du cas précédent. Le code css\u002Fjs\u002Fhtml reste dupliqué, permettant à chaque microservices d'évoluer indépendamment. Mais le contenu du menu et du footer est dynamique. Ce qui reste une petite amélioration intéressante.","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F43bd1-duplication-with-db1.jpg","duplication-with-db","\u002Fimages\u002F43bd1-duplication-with-db1.jpg","L'effort de maintenance reste très important.","Une variante de cette solution serait d'avoir le code html complet du header\u002Ffooter en base de données.","Cette fois on élimine l'effort de maintenance. Le versionning peut se faire facilement.","Le défaut majeur repose sur le fait que votre menu peut avoir des composantes dynamiques et afficher certains items :","si l'utilisateur est loggé ou non","si certaines fonctionnalités sont affichées pour lui (feature flipping)","si certaines fonctionnalités lui sont accessibles (hopwork analytiques ou widgets non disponible pour les clients par exemple)","Voyons autre chose.","Ca parait simple comme idée, il suffit ensuite d'utiliser cette jsp ensuite avec une directive d'inclusion :","\u003C%@ include file=\"include\u002Fmenu.jsp\"\u002F\u003E","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F65476-webresources.jpg","webresources","\u002Fimages\u002F65476-webresources.jpg","Plusieurs défauts à celà :","ce n'est pas si simple de partager une jsp dans un jar. D'ailleurs je n'ai pas réussi. La seule solution technique que j'ai trouvé a été d'utiliser une dépendance sous forme de war avec le plugin maven war qui fait ensuite une fusion des deux wars","cela implique que toutes vos applications web partagent la même technologie. Si a un moment vous choisisissez d'utiliser Thymeleaf ou velocity dans un autre service, votre jsp devient inutile.","Pire, même pour du contenu statique, vous êtes obligé d'en faire une jsp. Dommage.","cela impose de relivrer pour avoir la dernière version du menu ou du footer","Quelques avantages :","vous dépendez d'une version stable et pouvez évoluer quand vous le souhaitez (pensez aux gros refactoring js et css qui pourrait impacter chaque application)","Evidemment on peut partir du principe que ces éléments bougent peu donc le jeu ne vaut pas la chandelle d'aller plus loin et on peut accepter des désynchro de temps en temps. Pour être honnête, c'était ma première pensée de prime abord.","Et puis je suis tombé sur un vieux billet de Matt Raible de 2005 : ","http:\u002F\u002Fraibledesigns.com\u002Frd\u002Fentry\u002Fuse_sitemesh_to_decorate_multiple","Use SiteMesh to decorate multiple webapps","Je ne connaissais pas bien ","http:\u002F\u002Fwiki.sitemesh.org\u002Fwiki\u002F",". Je l'avais croisé sur un projet pour un voyagiste d'affaire il y a quelques années mais a l'époque, tout le monde se demandait surtout ce que ca foutait dans le projet :) Les joies du legacy. Mais ce billet très court de M. Raible m'a convaincu de tester.","Sitemesh en soi est finalement très simple à comprendre. Il agit en tant que filtre de servlet pour décorer votre page. C'est très différent d'un "," dans le sens ou votre page d'origine est complète. Nous sommes ici dans le cas d'un parfait exemple du ","http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FD%C3%A9corateur_%28patron_de_conception%29","pattern decorator",".","Vous pourriez par exemple avoir le code suivant :","A title","Cette décoration se fait à l'aide d'un fichier decorators.html qui décrit la décoration à réaliser. Par exemple :","Site name : A title","Chose intéressante, le billet de M. Raible semblait suggérer que ce décorateur pouvait se trouver dans une autre application web.","Bon, ce ne fut pas si simple au final. En effet sitemesh est un projet peu actif (5 commits en un an). La version 3 a apporté son lot de simplification, mais elle a aussi dégagé le support des décorateurs cross webapp (dans une autre application web).","Cependant ca s'est quand même avéré très simple à mettre en place.","Il a suffit de rajouter un filtre sitemesh :","@Configuration\n@ConditionalOnProperty(\"sitemesh.filter.enabled\")\npublic class SitemeshConfig {\n@Bean\npublic FilterRegistrationBean siteMeshFilter() {\nFilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();\nfilterRegistrationBean.setFilter(new MySiteMeshFilter());\nreturn filterRegistrationBean;\n}\n}","Au passage vous remarquerez l'utilisation des beans conditionnels facilité avec spring-boot. Ce filtre est actif ou non en fonction d'une configuration \"sitemesh.filter.enabled\"","Et le filtre sitemesh en lui-même :","public class MySiteMeshFilter extends ConfigurableSiteMeshFilter {\n@Override\nprotected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {\nbuilder.addDecoratorPath(\"\u002F*\", \"\u002Fdecorators\u002Fdecorator\");\n}\n}","Ok, mais ce n'est pas cross webapp ça.","Effectivement, mais l'astuce très simple consiste à créer un controleur qui va servir le contenu d'une autre page distante","@Controller\npublic class SitemeshController {\nprivate final OkHttpClient client = new OkHttpClient();\n@Value(\"${sitemesh.decorator.url}\")\nprivate String decoratorUrl;\n@RequestMapping(value = \"\u002Fdecorators\u002Fdecorator\", method = RequestMethod.GET)\n@ResponseBody\npublic Object decorator() throws IOException {\nRequest request = new Request.Builder()\n.url(decoratorUrl)\n.build();\nResponse response = client.newCall(request).execute();\nreturn response.body().string();\n}\n}","J'ai utilisé ici ","http:\u002F\u002Fsquare.github.io\u002Fokhttp\u002F","okHttp"," pour la récupération du contenu distant.","A partir de là, vous êtes capable de décorer votre page à partir d'un décorateur commun à tous vos services.","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3d5ad-sitemesh.jpg","\u002Fimages\u002F3d5ad-sitemesh.jpg","Mais que vient faire Zuul dans tout cela ?","Si vous avez lu le premier billet de cette série, nous utilisons Zuul pour présenter une seule url au client et pour lui inviter de naviguer sans arrêt entre différents sous domaines correspondant à mes applications.","Et dans notre cas cela nous permet de partager aussi des ressources en commun :","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002Fad5b9-zuul-sitemesh.jpg","zuul-sitemesh","\u002Fimages\u002Fad5b9-zuul-sitemesh.jpg","Au final cette solution est très intéressante :","aucune duplication de code","les pages dans vos applications sont complètes et peuvent donc être utilisées de facon autonome","mais elle comporte quand même des inconvénients :","si vous souhaitez le rendu final, vous devez avoir au moins le proxy Zuul lancé en même temps pour travailler.","si vous partagez des css\u002Fjs sur le proxy Zuul, il y a des risques de casser votre microservice le jour ou le proxy Zuul fait évoluer ces ressources sans prévenir. Il faut sans doute penser à les versionner","la petite astuce avec le controleur intermédiaire n'est pas des plus optimales en terme de chemin.","Selon moi, spring-cloud qui se veut la réponse absolue pour construire des microservices en Java aurait vocation à répondre à ce point. Et je pense que cela pourrait passer par l'utilisation de filtres Zuul en post filtering. Par contre ceux-ci sont assez mal documentées et je n'ai pas encore bien compris comment en rajouter. On en entend parler sur ","https:\u002F\u002Fgithub.com\u002FNetflix\u002Fzuul\u002Fwiki\u002FWriting-Filters","la doc officielle de Netflix",", mais rien ne permet de comprendre comment les associer à Zuul dans le cas de Spring-cloud.","Par rapport à la solution précédente, on déporterait la responsabilité de la décoration au proxy. Cela éviterait la petite astuce avec le controleur supplémentaire vu ci-dessus. Par contre on reste obligé d'avoir le proxy Zuul lancé pour travailler. Mais de toute facon ca semble assez inéluctable vu les responsabilités qu'on lui donne de plus en plus.","Piste intéressante, ca se versionne sans souci, ca permet de laisser chaque application vivre sa vie indépendamment. Ca oblige toujours à garder le proxy Zuul qui héberge la resource allumé cependant. Par contre je ne suis vraiment pas fan d'avoir un composant qui js qui induit une petite pause au chargement et un affichage qui se fait en deux temps.","Aucune idée pour être honnête, je ne connais pas assez pour savoir si c'est très différent d'une widget (en mieux). Mais si le défaut de l'affichage est le même, pas plus d'intérêt selon moi.","table","thead","Solution","Utilisation de contenu dynamique","Pas de duplication de code","Insensible au refactoring","Pas de relivraison pour mise à jour","Peut utiliser des technos différentes","Microservices autonomes","Confort utilisateur","tbody","widgets\u002Fwebcomponent","zuul filter","Construction via base de données","partiel","Duplication html\u002Fjs\u002Fjsp","Partage de jsp","(1) on pourrait imager un menu statique qui présenterait un aspect \"basique\" et qui serait ensuite modifié en js si l'utilisateur est connecté et si certains items devait être rajouté au menu. Cela laisserait cependant un désagréable effet de clignotement pour l'utilisateur final","Si cela vous intéresse, voici le code sous github : ","microservices-sandbox"))