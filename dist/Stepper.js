var P=Object.create;var c=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var h=e=>c(e,"__esModule",{value:!0});var U=(e,t)=>{h(e);for(var r in t)c(e,r,{get:t[r],enumerable:!0})},D=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of z(t))!F.call(e,o)&&o!=="default"&&c(e,o,{get:()=>t[o],enumerable:!(r=k(t,o))||r.enumerable});return e},p=e=>D(h(c(e!=null?P(j(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);U(exports,{Step:()=>C,Stepper:()=>S});var m=typeof document=="undefined"?new(require("url")).URL("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("main.js",document.baseURI).href;var d=p(require("react"));var i=p(require("react"));var u=p(require("react")),E=({isActive:e,activeColor:t,inActiveColor:r,height:o})=>u.default.createElement("div",{className:"flex w-full justify-start items-center relative",style:{height:o}},u.default.createElement("div",{className:"absolute border-t-8  w-full z-0",style:{borderColor:r}}),u.default.createElement("div",{className:`border-t-8  bg-red-400 transition-width  duration-700 ease-in-out z-50 ${e?"w-full":"w-0"}`,style:{borderColor:t}})),w=E;var b=p(require("react")),V=()=>b.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-lock-fill",viewBox:"0 0 16 16"},b.default.createElement("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"})),x=V;var C=({isLast:e,className:t,children:r,index:o,isActive:l,activeColor:f,inActiveColor:n,setCurStep:a,locked:s,isLastActive:A,borderColor:g,label:L,stepSize:v})=>{let N=y=>{a&&a(y)};return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("li",{onClick:()=>{s||N(o||0)},className:`rounded-full border-8  
          flex items-center justify-center transition duration-300
          relative 
          text-white 
          ${s?"cursor-not-allowed":"cursor-pointer"} ${t}`,style:{width:v,height:v,backgroundColor:l?f:n,borderColor:l?g:n}},i.default.createElement(i.default.Fragment,null,s&&i.default.createElement(x,null),!s&&(r||o))),i.default.createElement("div",{className:"relative h-6"},i.default.createElement("p",{className:"absolute left-1/2 -translate-x-1/2  whitespace-nowrap"},L))),!e&&i.default.createElement(w,{height:v||0,isActive:A||!1,activeColor:g||"",inActiveColor:n||""}))};C.defaultProps={isLast:!1,className:"",isActive:!1,locked:!1,isLastActive:!1,setCurStep:()=>{},label:"",index:0,stepSize:60};var S=({children:e,curStep:t,setCurStep:r,activeColor:o,inActiveColor:l,borderColor:f,stepSize:n})=>d.default.createElement("ul",{className:"flex flex-row justify-between mx-3"},e.map((a,s)=>(0,d.cloneElement)(a,{isLastActive:s<=t-1,isActive:s<=t,setCurStep:r,activeColor:o,inActiveColor:l,borderColor:f,stepSize:n,key:s,index:s,isLast:s===e.length-1})));S.defaultProps={borderColor:"#8fb3db",activeColor:"#0b294b",inActiveColor:"#D1D5DB",stepSize:60};0&&(module.exports={Step,Stepper});
//# sourceMappingURL=Stepper.js.map