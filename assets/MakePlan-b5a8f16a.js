import{b as L,a as M,v as P}from"./runtime-dom.esm-bundler-6f3b7d2d.js";import{a as h,U as v}from"./axios-2f89820f.js";import{u as j}from"./vuex.esm-bundler-a5fb55b5.js";import{D as U}from"./utils-f0c35e88.js";import{G as p,z as S,H as w,o as i,c as r,a as t,y as k,K as $,L as C,M as g,J as y,A as V,b as x}from"./runtime-core.esm-bundler-c941a8b7.js";import{M as B}from"./bootstrap.esm-9a522539.js";const F={class:"table table-striped text-center"},D=t("th",null,"Имя",-1),N=t("th",null,"Предмет",-1),R=t("th",{style:{width:"10%"}},"Изменить",-1),T={style:{width:"10%"}},E=["onClick"],G=t("i",{class:"bi bi-pencil-fill"},null,-1),I=[G],J=["onUpdate:modelValue"],O={__name:"PlanList",props:["filter_by"],emits:["setPlan"],setup(b,{emit:f}){const l=b,n=j(),e=p([]),d=()=>{h.get(v+"/get/all/plan[*;subject_id[*]]").then(u=>{e.value=u.data.plans.sort((m,s)=>m.name>s.name?1:-1),e.value.forEach(m=>{m.to_delete=!1})})};d();let _=S(()=>n.state.needReload);w(_,()=>{d()});const c=S(()=>e.value.filter(u=>u.name.toLowerCase().includes(l.filter_by.toLowerCase())||u.subject.toLowerCase().includes(l.filter_by.toLowerCase())));return(u,m)=>(i(),r("table",F,[t("thead",null,[t("tr",null,[D,N,R,t("th",T,[t("button",{class:"btn btn-danger btn-sm",onClick:m[0]||(m[0]=s=>k(U)(e.value,"/drop/plan",k(n)))},"Удалить")])])]),t("tbody",null,[(i(!0),r($,null,C(k(c),s=>(i(),r("tr",null,[t("td",null,g(s.name),1),t("td",null,g(s.subject.name),1),t("td",null,[t("button",{class:"btn btn-primary btn-sm",onClick:o=>u.$emit("setPlan",s)},I,8,E)]),t("td",null,[y(t("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":o=>s.to_delete=o},null,8,J),[[L,s.to_delete]])])]))),256))])]))}},z={class:"row my-3"},A={class:"col-2"},H={class:"col-2 ms-auto"},K={__name:"ButtonBlock",emits:["setPlan","setFilter"],setup(b,{emit:f}){return(l,n)=>(i(),r("div",z,[t("div",A,[t("button",{type:"button",class:"btn btn-primary",onClick:n[0]||(n[0]=e=>l.$emit("setPlan",{}))}," Создать новый план ")]),t("div",H,[t("input",{class:"form-control me-2",type:"search",placeholder:"Поиск","aria-label":"Search",onInput:n[1]||(n[1]=e=>l.$emit("setFilter",e.target.value))},null,32)])]))}},q={class:"modal fade",id:"plan","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},Q={class:"modal-dialog"},W={class:"modal-content"},X=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"},"Работа с планами"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y={class:"modal-body"},Z={class:"mb-3"},tt=t("label",{class:"form-label"},"Имя",-1),et={class:"mb-3"},st=t("label",{class:"form-label"},"Предмет",-1),lt=["value"],at=t("div",{class:"form-text"},"Это короткое имя которое будет видеть педагог",-1),nt={class:"mb-3"},ot=t("label",{class:"form-label"},"Тип файла",-1),dt=["value"],it=t("div",{class:"form-text"},"Тип файла плана",-1),rt={class:"mb-3"},ct=t("label",{class:"form-label"},"Файл плана",-1),ut=t("div",{class:"form-text"},"Планы автоматически обработаются в системе",-1),mt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть",-1),_t={__name:"PlanModal",props:["plan"],emits:["reGet"],setup(b,{emit:f}){const l=b,n=j(),e=V({id:"",name:"",subject:"",url:"",type:""}),d=p();h.get(v+"/get/all/plan_upload").then(s=>{d.value=s.data.plan_uploads}),w(l,()=>{e.id=l.plan.id===void 0?0:l.plan.id,e.name=l.plan.name,e.subject=l.plan.subject,e.url=l.plan.url===void 0?"":l.plan.url});const _=p([]);h.get(v+"/get/all/subject[*]").then(s=>{_.value=s.data.subjects});const c=p(),u=s=>{c.value=s.target.files[0]},m=()=>{let s={};s.id=e.id,s.subject_id=e.subject.id,s.name=e.name,s.index=e.type.index,c.value!==void 0&&(s.filename=c.value.name,s.file=c.value);let o=c.value!==void 0?"/upload/plan":"/post/plan",a={token:JSON.parse(localStorage.getItem("user")).token};c.value!==void 0&&(a["Content-Type"]="multipart/form-data"),console.log(s),h({url:v+o,method:"POST",data:s,headers:a}).then(()=>{n.commit("changeReload")})};return(s,o)=>(i(),r("div",q,[t("div",Q,[t("div",W,[X,t("div",Y,[t("div",Z,[tt,y(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a)},null,512),[[M,e.name]])]),t("div",et,[st,y(t("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=a=>e.subject=a)},[(i(!0),r($,null,C(_.value,a=>(i(),r("option",{value:a},g(a.name),9,lt))),256))],512),[[P,e.subject]]),at]),t("div",nt,[ot,y(t("select",{class:"form-select","onUpdate:modelValue":o[2]||(o[2]=a=>e.type=a)},[(i(!0),r($,null,C(d.value,a=>(i(),r("option",{value:a},g(a.name),9,dt))),256))],512),[[P,e.type]]),it]),t("div",rt,[ct,t("input",{type:"file",class:"form-control",onChange:u},null,32),ut])]),t("div",{class:"modal-footer"},[mt,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:m},"Сохранить")])])])]))}},$t={__name:"MakePlan",setup(b){const f=p(""),l=d=>{f.value=d},n=p(""),e=d=>{n.value=d,new B("#plan").toggle()};return(d,_)=>(i(),r($,null,[x(_t,{plan:n.value},null,8,["plan"]),x(K,{onSetFilter:l,onSetPlan:e}),x(O,{filter_by:f.value,onSetPlan:e},null,8,["filter_by"])],64))}};export{$t as default};
