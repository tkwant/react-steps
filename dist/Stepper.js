var j=Object.create;var v=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var L=e=>v(e,"__esModule",{value:!0});var O=(e,t)=>{L(e);for(var r in t)v(e,r,{get:t[r],enumerable:!0})},q=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of V(t))!M.call(e,i)&&i!=="default"&&v(e,i,{get:()=>t[i],enumerable:!(r=D(t,i))||r.enumerable});return e},c=e=>q(L(v(e!=null?j(H(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);O(exports,{Step:()=>A,Stepper:()=>F});var n=c(require("react"));var w=c(require("react"));function P(){let[e,t]=(0,w.useState)({width:void 0,height:void 0});return(0,w.useEffect)(()=>{function r(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),e}var s=c(require("react"));var b=c(require("react")),G=({isActive:e,activeColor:t,inActiveColor:r,height:i})=>b.default.createElement("div",{className:"flex w-full justify-start items-center relative",style:{height:i}},b.default.createElement("div",{className:"absolute border-t-8  w-full z-0",style:{borderColor:r}}),b.default.createElement("div",{className:`border-t-8  bg-red-400 transition-width  duration-700 ease-in-out z-50 ${e?"w-full":"w-0"}`,style:{borderColor:t}})),B=G;var N=c(require("react")),I=()=>N.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-lock-fill",viewBox:"0 0 16 16"},N.default.createElement("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"})),E=I;var A=({isLast:e,className:t,children:r,index:i,isActive:u,activeColor:h,inActiveColor:l,setCurStep:m,locked:a,isLastActive:C,borderColor:f,label:S,stepSize:d})=>{let x=z=>{m&&m(z)};return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",null,s.default.createElement("li",{onClick:()=>{a||x(i||0)},className:`rounded-full border-8  
          flex items-center justify-center transition duration-300
          relative 
          text-white 
          ${a?"cursor-not-allowed":"cursor-pointer"} ${t}`,style:{width:d,height:d,backgroundColor:u?h:l,borderColor:u?f:l}},s.default.createElement(s.default.Fragment,null,a&&s.default.createElement(E,null),!a&&(r||i))),s.default.createElement("div",{className:"relative h-6"},s.default.createElement("p",{className:"absolute left-1/2 -translate-x-1/2  whitespace-nowrap"},S))),!e&&s.default.createElement(B,{height:d||0,isActive:C||!1,activeColor:f||"",inActiveColor:l||""}))};A.defaultProps={isLast:!1,className:"",isActive:!1,locked:!1,isLastActive:!1,setCurStep:()=>{},label:"",index:0,stepSize:60};var F=({children:e,curStep:t,setCurStep:r,activeColor:i,inActiveColor:u,borderColor:h,stepSize:l,progressBarActiveColor:m,progressBarBackgroundColor:a,smallScreenShowProgressbar:C,className:f,style:S})=>{let d=[],x=t==0,z=t==e.length-1,y=P().width<e.length*l+80,k=0;return e.forEach((W,o)=>{let p=!0;if(y&&(p=t==o||t==o-1||t==o+1,x?p=o==0||o==1||o==2:z&&(p=o==e.length-3||o==e.length-2||o==e.length-1)),p){k++;let $=(0,n.cloneElement)(W,{isLastActive:o<=t-1,isActive:o<=t,setCurStep:r,activeColor:i,inActiveColor:u,borderColor:h,stepSize:l,key:o,index:o,isLast:y?k===3:o===e.length-1});d.push($)}}),n.default.createElement(n.default.Fragment,null,y&&C&&n.default.createElement("div",{className:"relative ",style:{backgroundColor:a}},n.default.createElement("div",{style:{width:`${t/(e.length-1)*100}%`,backgroundColor:m},className:" h-2 mb-4 transition-width  duration-700 ease-in-out"})),n.default.createElement("ul",{style:S,className:`flex flex-row justify-between mx-3 ${f}`},d))};F.defaultProps={borderColor:"#8fb3db",activeColor:"#0b294b",smallScreenShowProgressbar:!0,progressBarActiveColor:"green",progressBarBackgroundColor:"lightgray",inActiveColor:"#D1D5DB",stepSize:60,className:"",style:{}};0&&(module.exports={Step,Stepper});
//# sourceMappingURL=Stepper.js.map
