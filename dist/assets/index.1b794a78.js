var N=Object.defineProperty,V=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(o,e,r)=>e in o?N(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,x=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&T(o,r,e[r]);if($)for(var r of $(e))M.call(e,r)&&T(o,r,e[r]);return o},v=(o,e)=>V(o,Y(e));import{o as i,c,a as n,b as R,r as w,d as I,t as A,w as b,v as k,e as H,n as g,f as O,u as y,g as U,h as _,i as h,F as B,j as F,k as f,l as u,S as z,m as K,p as C,q as P,s as D}from"./vendor.c0c55633.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};G();var m=(o,e)=>{const r=o.__vccOpts||o;for(const[t,s]of e)r[t]=s;return r};const J={name:"Header"},Q={class:"p-4 mb-5 shadow-xl bg-gradient-to-r from-indigo-400 to-blue-500"},W=n("h1",{class:"text-3xl text-center font-bold text-white"},[n("i",{class:"fas fa-book fa-lg mr-2"}),R(" Bookshelf App ")],-1),X=[W];function Z(o,e,r,t,s,a){return i(),c("header",Q,X)}var ee=m(J,[["render",Z]]);const oe={name:"Form",setup(){const o=y(),e=w(!1),r=()=>e.value===!1?e.value=!0:e.value=!1,t={bookTitle:"",bookAuthor:"",bookYear:null,bookisComplete:!1},s=I(t),a=async()=>s!==t?(await o.dispatch("addBook",s),l()):null,l=()=>(s.bookTitle="",s.bookAuthor="",s.bookYear=null,s.bookisComplete=!1,s);return v(x({},A(s)),{showInput:e,toggleShowInput:r,addBook:a})}},te={class:"p-4 mb-5 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl"},ne=n("h2",{class:"mb-2 text-2xl text-center font-bold text-gray-600"}," Add New Book ",-1),se={class:"mb-3"},re=n("label",{for:"bookTitle",class:"text-xl font-bold text-gray-600"},"Title",-1),le=n("br",null,null,-1),ae={class:"mb-3"},de=n("label",{for:"bookAuthor",class:"text-xl font-bold text-gray-600"},"Author",-1),ie=n("br",null,null,-1),ce={class:"mb-3"},ue=n("label",{for:"bookYear",class:"text-xl font-bold text-gray-600"},"Year",-1),fe=n("br",null,null,-1),me={class:"mb-3 flex items-center"},he=n("label",{for:"bookisComplete",class:"flex-initial text-xl font-bold text-gray-600"},"Completed",-1),pe=n("button",{type:"submit",class:"p-2 w-full rounded-lg text-white text-lg font-bold bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-500 hover:to-blue-600 hover:bg-blue-600"}," Add Book ",-1),be={class:"p-2 flex justify-center"};function ge(o,e,r,t,s,a){return i(),c("div",te,[ne,n("form",{class:g([t.showInput===!1?"hidden":"block","mb-2"]),onSubmit:e[4]||(e[4]=O((...l)=>t.addBook&&t.addBook(...l),["prevent"]))},[n("div",se,[re,le,b(n("input",{id:"bookTitle","onUpdate:modelValue":e[0]||(e[0]=l=>o.bookTitle=l),type:"text",class:"p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg",placeholder:"Book Title",required:""},null,512),[[k,o.bookTitle]])]),n("div",ae,[de,ie,b(n("input",{id:"bookAuthor","onUpdate:modelValue":e[1]||(e[1]=l=>o.bookAuthor=l),type:"text",class:"p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg",placeholder:"Book Author",required:""},null,512),[[k,o.bookAuthor]])]),n("div",ce,[ue,fe,b(n("input",{id:"bookYear","onUpdate:modelValue":e[2]||(e[2]=l=>o.bookYear=l),type:"text",class:"p-2 mt-2 rounded-lg w-full border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg",placeholder:"Book Year",required:""},null,512),[[k,o.bookYear]])]),n("div",me,[he,b(n("input",{id:"bookisComplete","onUpdate:modelValue":e[3]||(e[3]=l=>o.bookisComplete=l),type:"checkbox",class:"flex-none p-2 ml-2 rounded-sm border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg"},null,512),[[H,o.bookisComplete]])]),pe],34),n("div",be,[n("i",{class:"fas fa-chevron-down fa-lg cursor-pointer",onClick:e[5]||(e[5]=(...l)=>t.toggleShowInput&&t.toggleShowInput(...l))})])])}var ke=m(oe,[["render",ge]]);const _e={name:"Search",setup(){const o=y(),e=w(""),r=w(!1);return{showInput:r,query:e,addSearch:async()=>e.value!==""?(await o.dispatch("addSearch",{query:e.value,status:!0}),e.value=""):await o.dispatch("addSearch",{query:"",status:!1}),toggleShowInput:()=>r.value===!1?r.value=!0:r.value=!1}}},xe={class:"p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl"},ve=n("h2",{class:"mb-3 mr-3 text-2xl text-center font-bold text-gray-600"}," Search Book ",-1),we=n("i",{class:"fas fa-search"},null,-1),ye=[we],Be={class:"p-2 flex justify-center"};function Ce(o,e,r,t,s,a){return i(),c("div",xe,[ve,n("div",{class:g([t.showInput===!1?"hidden":"block","flex flex-row items-center justify-between"])},[b(n("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.query=l),type:"text",class:"p-2 m-2 w-full rounded-lg border-0 shadow-md focus:ring-2 focus:ring-blue-500 text-lg",placeholder:"Book Title",onKeyup:e[1]||(e[1]=U((...l)=>t.addSearch&&t.addSearch(...l),["enter"]))},null,544),[[k,t.query]]),n("button",{class:"p-2 w-11 h-11 flex justify-center items-center rounded-full text-white text-lg font-bold bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-500 hover:to-blue-600 hover:bg-blue-600 hidden md:flex",onClick:e[2]||(e[2]=(...l)=>t.addSearch&&t.addSearch(...l))},ye)],2),n("div",Be,[n("i",{class:"fas fa-chevron-down fa-lg cursor-pointer",onClick:e[3]||(e[3]=(...l)=>t.toggleShowInput&&t.toggleShowInput(...l))})])])}var Se=m(_e,[["render",Ce]]);const $e={name:"Button",props:{buttonClass:{type:String,required:!0}},emits:["click-event"],setup(o,{emit:e}){const r=I({btnClass:o.buttonClass}),t=async s=>await e("click-event",s.target.value);return v(x({},A(r)),{customClick:t})}};function Te(o,e,r,t,s,a){return i(),c("button",{class:g(o.btnClass),onClick:e[0]||(e[0]=(...l)=>t.customClick&&t.customClick(...l))},null,2)}var Ie=m($e,[["render",Te]]);const Ae={name:"Bookshelf",components:{Button:Ie},setup(){const o=y(),e=s=>o.dispatch("removeBook",o.getters.findBookIndex(s)),r=s=>o.dispatch("addBookToComplete",o.getters.findBookIndex(s)),t=s=>o.dispatch("addBookToInComplete",o.getters.findBookIndex(s));return{inCompleteBooks:_(()=>o.getters.inCompleteBooks),completeBooks:_(()=>o.getters.completeBooks),getSearchStatus:_(()=>o.getters.getSearchStatus),findBookTitle:_(()=>o.getters.findBookTitle),removeBook:e,addBookToComplete:r,addBookToInComplete:t}}},Fe={class:"p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl"},qe=n("h2",{class:"mb-4 text-2xl font-bold text-gray-600"},"Not Finished Reading",-1),je={class:"text-xl font-bold"},Ee={class:"mt-3 w-full flex flex-row"},Ne={class:"p-3 mb-4 mx-auto lg:w-6/12 bg-gray-200 rounded-lg shadow-xl"},Ve=n("h2",{class:"mb-4 text-2xl font-bold text-gray-600"},"Finished Reading",-1),Ye={class:"text-xl font-bold"},Le={class:"mt-3 w-full flex flex-row"};function Me(o,e,r,t,s,a){const l=h("Button");return i(),c(B,null,[n("div",Fe,[qe,(i(!0),c(B,null,F(t.inCompleteBooks,d=>(i(),c("div",{key:d.id,class:g([t.getSearchStatus===!0&&d.title!==t.findBookTitle?"hidden":"block","p-3 mb-2 mx-auto w-full bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg shadow-xl text-white text-lg"])},[n("p",je,f(d.title),1),n("p",null,"Author: "+f(d.author),1),n("p",null,"Year: "+f(d.year),1),n("div",Ee,[u(l,{"button-title":"Remove","button-class":`
        p-2
        m-2
        w-1/2
        md:w-14
        md:h-14
        md:flex
        md:justify-center
        md:items-center
        md:rounded-full
        text-lg
        rounded-lg
        bg-red-500
        hover:bg-red-600
        far fa-trash-alt fa-7x
        `,onClickEvent:p=>t.removeBook(d.id)},null,8,["onClickEvent"]),u(l,{"button-title":"Not Finished","button-class":`
            p-2
            m-2
            w-1/2
            md:w-14
        md:h-14
        md:flex
        md:justify-center
        md:items-center
        md:rounded-full
            text-lg
            rounded-lg
            bg-green-500
            hover:bg-green-600
            fas fa-check fa-7x
            `,onClickEvent:p=>t.addBookToComplete(d.id)},null,8,["onClickEvent"])])],2))),128))]),n("div",Ne,[Ve,(i(!0),c(B,null,F(t.completeBooks,d=>(i(),c("div",{key:d.id,class:g([t.getSearchStatus===!0&&d.title!==t.findBookTitle?"hidden":"block","p-3 mb-2 mx-auto w-full bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg shadow-xl text-white text-lg"])},[n("p",Ye,f(d.title),1),n("p",null,"Author: "+f(d.author),1),n("p",null,"Year: "+f(d.year),1),n("div",Le,[u(l,{"button-title":"Remove","button-class":`
        p-2
        m-2
        w-1/2
        md:w-14
        md:h-14
        md:flex
        md:justify-center
        md:items-center
        md:rounded-full
        text-lg
        rounded-lg
        bg-red-500
        hover:bg-red-600
        far fa-trash-alt fa-7x
        `,onClickEvent:p=>t.removeBook(d.id)},null,8,["onClickEvent"]),u(l,{"button-title":"Not Finished","button-class":`
        p-2
        m-2
        w-1/2
        md:w-14
        md:h-14
        md:flex
        md:justify-center
        md:items-center
        md:rounded-full
        text-lg
        rounded-lg
        bg-yellow-500
        hover:bg-yellow-600
        fas fa-times fa-7x
        `,onClickEvent:p=>t.addBookToInComplete(d.id)},null,8,["onClickEvent"])])],2))),128))])],64)}var Re=m(Ae,[["render",Me]]);const He="3.5.1",Oe={name:"Footer",setup(){return{version:He}}},Ue={class:"p-3 m-3 text-center"},ze=n("p",{class:"mb-2"},"Simple Bookshelf App by ryuuwiz",-1),Ke={class:"mb-2"},Pe=n("a",{href:"https://github.com/ryuuwiz",target:"_blank"},[n("i",{class:"fab fa-github-alt fa-2x cursor-pointer"})],-1);function De(o,e,r,t,s,a){return i(),c("div",Ue,[ze,n("p",Ke,"Version "+f(t.version),1),Pe])}var Ge=m(Oe,[["render",De]]);const Je={name:"App",components:{Header:ee,Form:ke,Bookshelf:Re,Search:Se,Footer:Ge}},Qe={class:"font-poppins"},We={class:"p-2"};function Xe(o,e,r,t,s,a){const l=h("Header"),d=h("Form"),p=h("Search"),j=h("Bookshelf"),E=h("Footer");return i(),c("div",Qe,[u(l),n("div",We,[u(d),u(p),u(j)]),u(E)])}var Ze=m(Je,[["render",Xe]]);const eo=!1,S=new z({isCompression:!1});var oo=K({state:()=>({bookshelf:[{id:C(),title:"Eloquent JavaScript: A Modern Introduction to Programming",author:"Marijn Haverbeke",year:2011,isComplete:!1},{id:C(),title:"Fullstack Vue: The Complete Guide to Vue.js and Friends",author:"Ari Lerner and Nate Murray",year:2018,isComplete:!0}],search:{query:"",status:!1}}),actions:{addBook:async({commit:o},e)=>await o("setBook",e),removeBook:async({commit:o},e)=>await o("dropBook",e),addBookToComplete:async({commit:o},e)=>await o("setBookToComplete",e),addBookToInComplete:async({commit:o},e)=>await o("setBookToInComplete",e),addSearch:async({commit:o},e)=>await o("setSearch",e)},mutations:{setBook:(o,e)=>o.bookshelf.push({id:C(),title:e.bookTitle,author:e.bookAuthor,year:e.bookYear,isComplete:e.bookisComplete}),dropBook:(o,e)=>o.bookshelf.splice(e,1),setBookToComplete:(o,e)=>o.bookshelf[e].isComplete=!0,setBookToInComplete:(o,e)=>o.bookshelf[e].isComplete=!1,setSearch:(o,e)=>o.search=e},getters:{getBookshelf:o=>o.bookshelf,inCompleteBooks:o=>o.bookshelf.filter(e=>e.isComplete===!1),completeBooks:o=>o.bookshelf.filter(e=>e.isComplete===!0),findBookIndex:o=>e=>o.bookshelf.findIndex(r=>r.id===e),getSearchStatus:o=>o.search.status,findBookTitle:o=>o.bookshelf.filter(e=>new RegExp(o.search.query,"gi").test(e.title))[0].title},strict:eo,plugins:[P({storage:{getItem:o=>S.get(o),setItem:(o,e)=>S.set(o,e),removeItem:o=>S.remove(o)}})]});const q=D(Ze);q.use(oo);q.mount("#app");
