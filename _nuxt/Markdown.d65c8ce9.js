import s from"./ContentSlot.32361a1c.js";import{l as o,m,v as u,F as f}from"./entry.61895315.js";import"./utils.02e0520f.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=f(),{between:n,default:a}=m(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};