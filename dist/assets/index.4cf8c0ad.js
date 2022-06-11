var M=Object.defineProperty,H=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(t,e,n)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))$.call(e,n)&&j(t,n,e[n]);if(I)for(var n of I(e))G.call(e,n)&&j(t,n,e[n]);return t},x=(t,e)=>H(t,T(e));import{r as N,s as d,j as o,P as F,a as f,C,b as g,D as K,R as X}from"./vendor.1d2af543.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Y();const D=N.createContext(),J=d.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: grab;
  margin:5px;
`;function Q(t,e){return e.isDropAnimating?x(c({},t),{transitionDuration:"0.001s"}):t}function E(t){return o(F,{draggableId:t.card.id,index:t.index,children:(e,n)=>o(J,x(c(c({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{style:Q(e.draggableProps.style,n),children:t.card.lettre}))})}const U=d.div`
  width:auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width:90px;
`,V=d.div`
  position:absolute;
  bottom:30px;
  left:0;
  right:0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:after{
    content:"";
  }
`,W=d.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: pointer;
  margin:5px;
`;function Z(t){return f(V,{children:[o(C,{droppableId:t.item.name,direction:"horizontal",children:e=>f(U,x(c({id:t.item.name,ref:e.innerRef},e.droppableProps),{children:[t.item.cards.map((n,i)=>o(E,{card:n,index:i},n.id)),e.placeholder]}))}),o(W,{id:"pickcard",children:"Pick"})]})}const _=d.div`
  position:absolute;
  display:flex;
  flex-direction: column-reverse;
  top:0;
  right:0;
  `;function ee(t){return o(C,{droppableId:t.item.name,children:e=>f(_,x(c({id:t.item.name,ref:e.innerRef},e.droppableProps),{children:[t.item.cards.map((n,i)=>o(E,{card:n,index:i},n.id)),e.placeholder]}))})}const te=t=>({background:t?"lightblue":""}),ne=d.div`
  position:absolute;
  top:30px;
  right:150px;
  display:flex;
`,re=d.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: pointer;
  margin:5px;
`;function oe(t){return f(ne,{id:t.item.name,children:[o(C,{droppableId:t.item.name,children:(e,n)=>f("div",x(c({ref:e.innerRef,style:te(n.isDraggingOver)},e.droppableProps),{children:[t.item.cards.map((i,r)=>o(E,{card:i,index:r},i.id)),e.placeholder]}))}),t.item.empty?"":o(re,{onClick:()=>t.onClicked(),children:" Draw"})]})}const ie=[{l:"A",n:1,t:!0},{l:"B",n:1,t:!0},{l:"C",n:1,t:!0},{l:"D",n:1,t:!0},{l:"E",n:1,t:!0},{l:"F",n:1,t:!0},{l:"G",n:1,t:!0},{l:"H",n:1,t:!0},{l:"I",n:1,t:!0},{l:"J",n:1,t:!0},{l:"K",n:1,t:!0},{l:"L",n:1,t:!0},{l:"M",n:1,t:!0},{l:"N",n:1,t:!0},{l:"O",n:1,t:!0},{l:"P",n:1,t:!0},{l:"Q",n:1,t:!0},{l:"R",n:1,t:!0},{l:"S",n:1,t:!0},{l:"T",n:1,t:!0},{l:"U",n:1,t:!0},{l:"V",n:1,t:!0},{l:"W",n:1,t:!0},{l:"X",n:1,t:!0},{l:"Y",n:1,t:!0},{l:"Z",n:1,t:!0},{l:"!",n:1,t:!0}],le=[{l:"a",n:11,t:!1},{l:"b",n:2,t:!1},{l:"c",n:2,t:!1},{l:"d",n:2,t:!1},{l:"e",n:11,t:!1},{l:"f",n:2,t:!1},{l:"g",n:2,t:!1},{l:"h",n:2,t:!1},{l:"i",n:7,t:!1},{l:"j",n:1,t:!1},{l:"k",n:1,t:!1},{l:"l",n:4,t:!1},{l:"m",n:2,t:!1},{l:"n",n:4,t:!1},{l:"o",n:7,t:!1},{l:"p",n:2,t:!1},{l:"q",n:1,t:!1},{l:"r",n:4,t:!1},{l:"s",n:4,t:!1},{l:"t",n:4,t:!1},{l:"u",n:7,t:!1},{l:"v",n:2,t:!1},{l:"w",n:1,t:!1},{l:"x",n:1,t:!1},{l:"y",n:1,t:!1},{l:"z",n:1,t:!1},{l:".",n:8,t:!1}],q=[...ie.map(t=>Array(t.n).fill({l:t.l,t:t.t})).reduce((t,e)=>t.concat(e)),...le.map(t=>Array(t.n).fill({l:t.l,t:t.t})).reduce((t,e)=>t.concat(e))];se(q);function ae(){return q.map((t,e)=>({id:`item-${e}`,lettre:t.l,maj:t.t,hidden:!0,content:`item ${t.l}`}))}const R={round:0,hand:{name:"hand",cards:[]},deck:{name:"deck",cards:ae()},draw:{name:"draw",cards:[],empty:!1}};function se(t){t.sort(()=>Math.random()-.5)}function de(t){return Array.from({length:t},()=>R.deck.cards.pop())}function ce(){}const ue={title:"Replik",round:0,token:"",modal:{visible:!1,content:""}},S={startState:R,draw:de,deck:ce,context:ue},fe=(t,e,n)=>{console.log(t);const i=Array.from(t),[r]=i.splice(e,1);return i.splice(n,0,r),i},pe=(t,e)=>{const n=c({},t),[i]=n[e.source.droppableId].cards.splice(e.source.index,1);return n[e.destination.droppableId].cards.splice(e.destination.index,0,i),n};function me(t){g.exports.useContext(D);const[e,n]=g.exports.useState(S.startState),[i,r]=g.exports.useState(!1);function a(l){document.querySelector("#board").classList.add("dragging")}function h(l){if(document.querySelector("#board").classList.remove("dragging"),!!l.destination)if(l.source.droppableId===l.destination.droppableId){const u=c({},e);u[l.destination.droppableId].cards=fe(e[l.destination.droppableId].cards,l.source.index,l.destination.index),n(u),r(!1)}else{let u=c({},e);u=pe(e,l),n(u),r(!1)}}function P(){const l=c({},e);l.draw.cards=[...S.draw(1)],n(l)}function O(l){const u=(s,p)=>{console.log(s,p);const b=l.tryGetLock(s);if(!b){console.log("fail");return}const m=document.querySelector(`[data-rbd-draggable-id='${s}']`).getBoundingClientRect(),y=document.querySelector(p).getBoundingClientRect(),v=[],k=20,A=e.hand.cards.length?2:1,B=e.hand.cards.length?m.width/2:0;for(let w=k-1;w>=0;w--)v.push(Object.assign({},{x:y.right-m.width/A+(m.right-y.right-B)*w/k,y:y.top+5+(m.top-y.top)*w/k}));L(b.fluidLift({x:m.left,y:m.top}),v),console.table(v)};function L(s,p){requestAnimationFrame(()=>{const b=p.shift();s.move(b),console.log(b),setTimeout(()=>{p.length?L(s,p):s.drop()},0)})}g.exports.useEffect(()=>(document.querySelector("#pickcard").addEventListener("click",()=>{var s;e.draw.cards.length||P(),u((s=e.draw.cards[0])==null?void 0:s.id,"#hand")}),()=>{var s;document.querySelector("#pickcard").removeEventListener("click",u((s=e.draw.cards[0])==null?void 0:s.id,"#hand"))}),[])}return o(xe,{id:"board",theme:i,children:f(K,{onDragEnd:h,onDragStart:a,sensors:[O],children:[o(Z,{item:e.hand}),o(ee,{item:e.deck,styled:{PointerEvent:"none"}}),o(oe,{item:e.draw,onClicked:()=>P()})]})})}const xe=d.div`
  display:flex;
  height:100vh;
  width:100vw;
  background: bisque;
  padding:30px;
  box-sizing: border-box;
  overflow:hidden;
  position:relative;
`;d.button`
  position:absolute;
  top:50%;
  left:50%;
  transform:translateX(-50%) translateY(-50%);
  padding:30px;
  box-sizing: border-box;
  cursor:pointer;
`;function ge(t){const[e,n]=g.exports.useContext(D);return f(he,{id:"interface",children:[o(z,{children:e.title}),o(z,{children:e.round}),o(be,{modal:e.modal,children:e.modal.content})]})}const he=d.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:block;
  background: transparent;
  box-sizing: border-box;
  overflow:hidden;
  z-index: 1;
  pointer-events: none;
`,z=d.div`
  text-align:center;
  font-size:26px;
  color:#fff;
  text-shadow: 1px 1px 2px #000;
`,be=d.div`
  display:${({modal:t})=>(console.log(t),t.visible?"block":"none")};
  position:relative;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100vw;
  height:100vh;
  background: #00000077;
  box-sizing: border-box;
  overflow:hidden;
  z-index: 1;
  pointer-events: all;
`;function ye(){const[t,e]=g.exports.useState(S.context);return f(D.Provider,{value:[t,e],children:[o(ge,{}),o(me,{})]})}const we=document.getElementById("root");X.render(o(ye,{}),we);
