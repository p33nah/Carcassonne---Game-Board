(this.webpackJsonpcarcassonne2=this.webpackJsonpcarcassonne2||[]).push([[0],{13:function(e,r,t){},15:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var c=t(2),n=t.n(c),i=t(8),a=t.n(i),l=(t(13),t(3)),o=t(0),s=t(4),g=function(e,r){var t=[];r>e.length&&(r%=e.length);for(var c=0;c<e.length;c++)c+r>e.length-1?t[r-(e.length-c)]=e[c]:t[c+r]=e[c];return t},p=function(e){return e[Math.floor(Math.random()*e.length)]},d=t(1),b=function(e){var r=e.i,t=e.p,n=e.phase,i=e.selectedMeeple,a=e.placeMeeple,o=e.currentCell,s=e.setTemp,g=e.temp,p=(e.meeple,e.selectMeeple),b=e.removeMeeple,u=e.cell,m=e.currentPlayer,j=Object(c.useState)(!1),O=Object(l.a)(j,2),y=O[0],f=O[1],v=Object(c.useState)(!1),h=Object(l.a)(v,2),M=h[0],w=h[1];return Object(d.jsxs)("div",{className:"p p".concat(r),onMouseEnter:"placeMeeple"===n&&o?function(){return f(!0)}:null,onMouseLeave:"placeMeeple"===n&&o?function(){return f(!1)}:null,style:{backgroundImage:!g&&y||M?"url(".concat(null===i||void 0===i?void 0:i.img,")"):(null===t||void 0===t?void 0:t.img)?"url(".concat(t.img,")"):""},onClick:"placeMeeple"===n&&o&&(null===i||void 0===i?void 0:i.img)?function(){g||(w(!0),s(!0)),g&&M&&(w(!1),s(!1))}:"removeMeeple"===n&&t.img?function(){return w(!M),void p(t)}:null,children:["placeMeeple"===n&&M&&Object(d.jsx)("button",{style:{background:"".concat(m.color)},onClick:function(e){e.preventDefault(),e.stopPropagation(),a(i,t),w(!1)},className:"btn-place-meeple",children:"Place Meeple"}),"removeMeeple"===n&&M&&Object(d.jsx)("button",{style:{background:"".concat(m.color)},onClick:function(e){e.preventDefault(),e.stopPropagation(),b(i,u),w(!1)},className:"btn-remove-meeple",children:"Remove Meeple"})]})},u=function(e){var r=e.positions,t=e.currentPlayer,n=e.placeMeeple,i=e.currentCell,a=e.phase,o=e.selectedMeeple,s=e.meeple,g=e.selectMeeple,p=e.removeMeeple,u=e.cell,m=Object(c.useState)(!1),j=Object(l.a)(m,2),O=j[0],y=j[1];return Object(d.jsx)("div",{className:"cell-grid",children:r.map((function(e,r){return Object(d.jsx)(b,{i:r,p:e,currentCell:i,phase:a,selectedMeeple:o,placeMeeple:n,temp:O,setTemp:y,meeple:s,selectMeeple:g,removeMeeple:p,cell:u,currentPlayer:t},r)}))})},m=function(e){var r=e.cell,t=e.gameState,n=e.isValid,i=e.isPlaced,a=e.setTempSelected,o=e.tempSelected,s=e.placeTile,p=e.placeMeeple,b=e.selectMeeple,m=e.removeMeeple,j=r.id,O=r.value,y=r.borders,f=r.positions,v=r.img,h=r.meeple,M=t.currentPlayer,w=t.currentTile,x=t.currentCell,S=t.selectedMeeple,C=t.phase,P=Object(c.useState)(!1),k=Object(l.a)(P,2),N=k[0],T=k[1],E=Object(c.useState)([]),I=Object(l.a)(E,2),D=I[0],F=I[1],G=Object(c.useState)(0),L=Object(l.a)(G,2),B=L[0],J=L[1],V=Object(c.useState)(!1),A=Object(l.a)(V,2),R=A[0],q=A[1];Object(c.useEffect)((function(){var e=function(e,r){for(var t=0;t<4;t++)if(g(r,t).map((function(r,t){return 0===e[t]?0:r})).join("")===e.join(""))return t}(y,w.borders);J(90*e),F(g(w.borders,e))}),[w,y]);return Object(d.jsxs)("div",{onMouseEnter:"position"===C?function(){return T(!0)}:null,onMouseLeave:"position"===C?function(){return T(!1)}:null,onClick:"position"===C&&n?function(){o||(q(!0),a(!0)),o&&R&&(q(!1),a(!1))}:null,className:"cell",style:{background:"position"===C&&n&&"black",opacity:n&&!R&&!N&&"0.2"},children:[Object(d.jsx)("div",{className:"img",style:{transform:"rotate(".concat(B,"deg)"),backgroundImage:N&&n||R?"url('tile-images/".concat(w.img,"')"):i&&"url('tile-images/".concat(v,"')")}}),"placeMeeple"!==C&&R&&Object(d.jsx)("div",{className:"btn-rotate",onClick:function(e){e.preventDefault(),e.stopPropagation(),0===O&&(J((function(e){return e+90})),F((function(e){return g(e,1)})))},style:{backgroundImage:"url('rotate.png')"}}),"position"===C&&R&&n&&Object(d.jsx)("button",{style:{background:"".concat(M.color)},onClick:function(e){s(j,D,w.img),q(!1)},className:"btn-place",children:"place tile"}),Object(d.jsx)(u,{meeple:h,positions:f,currentCell:x.id===j,phase:C,selectedMeeple:S,placeMeeple:p,selectMeeple:b,removeMeeple:m,cell:r,currentPlayer:M})]})},j=function(e){var r=e.gameState,t=e.setGameState,n=e.selectMeeple,i=Object(c.useState)(!1),a=Object(l.a)(i,2),g=a[0],p=a[1],b=function(e,r,c){var n=e-20,i=e+20,a=e+1,l=e-1;t((function(t){var g=t.board.map((function(t){var g=t.borders;return t.id===e?Object(o.a)(Object(o.a)({},t),{},{value:1,borders:r,img:c}):t.id===n&&1!==t.value?Object(o.a)(Object(o.a)({},t),{},{borders:[].concat(Object(s.a)(g.slice(0,2)),[r[0]],Object(s.a)(g.slice(3)))}):t.id===l&&1!==t.value?Object(o.a)(Object(o.a)({},t),{},{borders:[].concat(Object(s.a)(g.slice(0,1)),[r[3]],Object(s.a)(g.slice(2)))}):t.id===a&&1!==t.value?Object(o.a)(Object(o.a)({},t),{},{borders:[].concat(Object(s.a)(g.slice(0,3)),[r[1]])}):t.id===i&&1!==t.value?Object(o.a)(Object(o.a)({},t),{},{borders:[r[2]].concat(Object(s.a)(g.slice(1)))}):t}));return Object(o.a)(Object(o.a)({},t),{},{board:g,phase:"placeMeeple",currentCell:g[e]})}))},u=function(e,r){var c=e.id,n=e.img,i=e.player;t((function(e){var t=e.board.map((function(t){if(t.id===e.currentCell.id){var a=t.positions.map((function(e){return e.id===r.id?Object(o.a)(Object(o.a)({},e),{},{id:c,img:n,player:i}):e}));return Object(o.a)(Object(o.a)({},t),{},{positions:a,meeple:!0})}return t})),a=e.players.map((function(r){return r.name!==i?r:Object(o.a)(Object(o.a)({},r),{},{meeples:r.meeples.filter((function(r){return r.id!==e.selectedMeeple.id}))})}));return Object(o.a)(Object(o.a)({},e),{},{board:t,players:a,phase:"removeMeeple",selectedMeeple:{}})}))},j=function(e,r){var c=e.id,n=e.img,i=e.player;t((function(e){var t=e.board.map((function(e){if(e.id===r.id){var t=e.positions.map((function(e,r){return Object(o.a)(Object(o.a)({},e),{},{id:"p".concat(r),img:"",player:""})}));return Object(o.a)(Object(o.a)({},e),{},{positions:t,meeple:!1})}return e})),a=e.players.map((function(e){return e.name===i?Object(o.a)(Object(o.a)({},e),{},{meeples:[].concat(Object(s.a)(e.meeples),[{id:c,img:n,player:i}])}):e}));return Object(o.a)(Object(o.a)({},e),{},{board:t,players:a,selectedMeeple:{}})}))};return Object(d.jsx)("div",{className:"grid",children:r.board.map((function(e){return Object(d.jsx)(m,{cell:e,tempSelected:g,setTempSelected:p,placeTile:b,placeMeeple:u,removeMeeple:j,selectMeeple:n,isPlaced:r.placedTiles.includes(e),isValid:r.emptyCells.includes(e),gameState:r},e.id)}))})},O=function(e){var r=e.meeple,t=e.temp,n=e.setTemp,i=e.selectMeeple,a=e.players,o=e.phase,s=e.currentPlayer,g=e.player,p=Object(c.useState)(!1),b=Object(l.a)(p,2),u=b[0],m=b[1];Object(c.useEffect)((function(){m(!1),n(!1)}),[a,s,n]);return Object(d.jsx)("div",{onClick:"placeMeeple"===o&&g.name===s.name?function(){t||(m(!0),n(!0),i(r)),t&&u&&(m(!1),n(!1),i({}))}:null,children:Object(d.jsx)("img",{style:{transform:u&&"scale(1.2)"},className:"meeple",src:r.img,alt:"meeple"})})},y=function(e){var r=e.player,t=e.gameState,n=e.selectMeeple,i=Object(c.useState)(!1),a=Object(l.a)(i,2),o=a[0],s=a[1];return Object(d.jsxs)("div",{className:"player",style:{border:r.name===t.currentPlayer.name&&"0.4rem solid ".concat(r.color)},children:[Object(d.jsx)("h6",{children:r.name}),Object(d.jsx)("div",{className:"meeples",children:r.meeples.map((function(e){return Object(d.jsx)(O,{players:t.players,currentPlayer:t.currentPlayer,player:r,phase:t.phase,meeple:e,temp:o,setTemp:s,selectMeeple:n},e.id)}))})]})},f=(t(15),[{borders:"gggg",img:"cloister.png"},{borders:"gggg",img:"cloister.png"},{borders:"gggg",img:"cloister.png"},{borders:"gggg",img:"cloister.png"},{borders:"ggrg",img:"cloisterr.png"},{borders:"ggrg",img:"cloisterr.png"},{borders:"cccc",img:"city4.png"},{borders:"ccgc",img:"city3.png"},{borders:"ccgc",img:"city3.png"},{borders:"ccgc",img:"city3.png"},{borders:"ccgc",img:"city3s.png"},{borders:"ccrc",img:"city3r.png"},{borders:"ccrc",img:"city3sr.png"},{borders:"ccrc",img:"city3sr.png"},{borders:"cggc",img:"city2nw.png"},{borders:"cggc",img:"city2nw.png"},{borders:"cggc",img:"city2nw.png"},{borders:"cggc",img:"city2nws.png"},{borders:"cggc",img:"city2nws.png"},{borders:"crrc",img:"city2nwr.png"},{borders:"crrc",img:"city2nwr.png"},{borders:"crrc",img:"city2nwr.png"},{borders:"crrc",img:"city2nwsr.png"},{borders:"crrc",img:"city2nwsr.png"},{borders:"gcgc",img:"city2we.png"},{borders:"gcgc",img:"city2wes.png"},{borders:"gcgc",img:"city2wes.png"},{borders:"ccgg",img:"city11ne.png"},{borders:"ccgg",img:"city11ne.png"},{borders:"gcgc",img:"city11we.png"},{borders:"gcgc",img:"city11we.png"},{borders:"gcgc",img:"city11we.png"},{borders:"cggg",img:"city1.png"},{borders:"cggg",img:"city1.png"},{borders:"cggg",img:"city1.png"},{borders:"cggg",img:"city1.png"},{borders:"cggg",img:"city1.png"},{borders:"cgrr",img:"city1rsw.png"},{borders:"cgrr",img:"city1rsw.png"},{borders:"cgrr",img:"city1rsw.png"},{borders:"crrg",img:"city1rse.png"},{borders:"crrg",img:"city1rse.png"},{borders:"crrg",img:"city1rse.png"},{borders:"crrr",img:"city1rswe.png"},{borders:"crrr",img:"city1rswe.png"},{borders:"crrr",img:"city1rswe.png"},{borders:"crgr",img:"city1rwe.png"},{borders:"crgr",img:"city1rwe.png"},{borders:"crgr",img:"city1rwe.png"},{borders:"crgr",img:"city1rwe.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"rgrg",img:"road2ns.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"ggrr",img:"road2sw.png"},{borders:"grrr",img:"road3.png"},{borders:"grrr",img:"road3.png"},{borders:"grrr",img:"road3.png"},{borders:"grrr",img:"road3.png"},{borders:"rrrr",img:"road4.png"}].map((function(e,r){return Object(o.a)(Object(o.a)({},e),{},{id:r,borders:e.borders.split("")})}))),v=new Array(400).fill().map((function(e,r){return{id:r,value:0,borders:[0,0,0,0],positions:[0,0,0,0,0,0,0,0,0].map((function(e,r){return{id:"p".concat(r),img:"",player:""}})),img:"",meeple:!1}})).map((function(e){return 189===e.id?Object(o.a)(Object(o.a)({},e),{},{value:1,borders:["c","r","g","r"],img:"city1rwe.png"}):169===e.id?Object(o.a)(Object(o.a)({},e),{},{borders:[0,0,"c",0]}):190===e.id?Object(o.a)(Object(o.a)({},e),{},{borders:[0,0,0,"r"]}):209===e.id?Object(o.a)(Object(o.a)({},e),{},{borders:["g",0,0,0]}):188===e.id?Object(o.a)(Object(o.a)({},e),{},{borders:[0,"r",0,0]}):e})),h=[{name:"player 1",color:"#0b5394",meeples:[0,0,0,0,0,0,0].map((function(e,r){return{id:"m".concat(r),img:"meeple-blue.png",player:"player 1",color:"blue"}}))},{name:"player 2",color:"#cc0000",meeples:[0,0,0,0,0,0,0].map((function(e,r){return{id:"m".concat(r),img:"meeple-red.png",player:"player 2",color:"red"}}))}],M={currentTile:p(f),tileSet:f,board:v,placedTiles:[],emptyCells:[],selectedMeeple:null,currentPlayer:h[0],currentCell:{},players:h,phases:["position","placeMeeple","removeMeeple"],phase:"position"};function w(){var e=Object(c.useState)(M),r=Object(l.a)(e,2),t=r[0],n=r[1];Object(c.useEffect)((function(){n((function(e){var r,c,n=e.board.filter((function(e){return 1===e.value})),i=(r=n,c=e.board,r.reduce((function(e,r){var t=r.id-20,n=r.id+1,i=r.id+20,a=r.id-1;return[].concat(Object(s.a)(e),[c[t],c[n],c[i],c[a]])}),[]).filter((function(e){return void 0!==e&&1!==e.value}))).filter((function(e){return function(e,r){for(var t=[],c=0;c<4;c++){var n=g(r.borders,c).map((function(r,t){return 0===e.borders[t]?0:r}));n.join("")===e.borders.join("")&&t.push(n)}return!!t.length}(e,t.currentTile)}));return Object(o.a)(Object(o.a)({},e),{},{placedTiles:n,emptyCells:i})}))}),[t.board,t.currentTile]);var i=function(e){n((function(r){return Object(o.a)(Object(o.a)({},r),{},{selectedMeeple:e})}))};return Object(d.jsxs)("div",{className:"app",children:["gameOver"===t.phase&&Object(d.jsx)("div",{className:"game-over",children:Object(d.jsx)("h1",{children:"Game Over"})}),0===t.emptyCells.length&&Object(d.jsx)("button",{style:{background:"".concat(t.currentPlayer.color)},onClick:function(){n((function(e){return Object(o.a)(Object(o.a)({},e),{},{currentTile:p(f)})}))},children:"New Tile"}),"position"!==t.phase&&Object(d.jsx)("button",{style:{background:"".concat(t.currentPlayer.color)},className:"btn-end",onClick:function(){n((function(e){if(0===e.tileSet.length)return Object(o.a)(Object(o.a)({},e),{},{phase:"gameOver",tileSet:[]});var r=Object(o.a)({},p(e.tileSet)),t=e.tileSet.filter((function(e){return e.id!==r.id})),c="player 1"===e.currentPlayer.name?Object(o.a)({},e.players[1]):Object(o.a)({},e.players[0]);return Object(o.a)(Object(o.a)({},e),{},{currentTile:r,tileSet:t,currentPlayer:c,selectedMeeple:{},currentCell:{},phase:"position"})}))},children:"end turn"}),"placeMeeple"===t.phase&&Object(d.jsx)("button",{style:{background:"".concat(t.currentPlayer.color)},className:"btn-skip",onClick:function(){n((function(e){return Object(o.a)(Object(o.a)({},e),{},{phase:"removeMeeple"})}))},children:"Next Phase"}),Object(d.jsxs)("div",{className:"current-tile-container",children:[Object(d.jsx)("h4",{children:t.tileSet.length}),Object(d.jsx)("img",{style:{border:"0.4rem solid ".concat(t.currentPlayer.color)},className:"current-tile",alt:"tile",src:"tile-images/".concat(t.currentTile.img)})]}),Object(d.jsx)(j,{gameState:t,setGameState:n,selectMeeple:i}),Object(d.jsx)("div",{className:"players",children:t.players.map((function(e){return Object(d.jsx)(y,{player:e,gameState:t,setGameState:n,selectMeeple:i},e.name)}))})]})}var x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(r){var t=r.getCLS,c=r.getFID,n=r.getFCP,i=r.getLCP,a=r.getTTFB;t(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.d9e3fc1c.chunk.js.map