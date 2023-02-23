import{u as k}from"./vue-router-dca7c9af.js";import{a as m,U as p}from"./axios-99647cd3.js";import{d as x,v as w}from"./runtime-dom.esm-bundler-62d8dff8.js";import{u as g}from"./vuex.esm-bundler-d6fb5321.js";import{o as d,c,J as y,y as h,a as s,K as _,L as $,M as a,G as b,H as N,S as v,b as f}from"./runtime-core.esm-bundler-39f475bb.js";const T=s("h5",null,"Решения:",-1),L={class:"table"},M=s("thead",null,[s("tr",null,[s("th",{scope:"col",style:{width:"30%"},class:"border-end"},"Тест"),s("th",{scope:"col"},"Ведрдикт")])],-1),D={class:"border-end"},C={__name:"SubmissionList",setup(u){const e=g();return console.log(e.state.tasks.submissions),(n,r)=>(d(),c(_,null,[T,y(s("table",L,[M,s("tbody",null,[(d(!0),c(_,null,$(h(e).state.tasks.submissions,t=>(d(),c("tr",null,[s("td",D,a(t.test===-1?" ":t.test),1),s("td",null,a(t.verdict==="NUN"?"Проверка":t.verdict),1)]))),256))])],512),[[x,h(e).state.tasks.submissions.length!==0]])],64))}},H={class:"modal",id:"send_submission",tabindex:"-1"},U={class:"modal-dialog"},B={class:"modal-content"},I=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"},"Modal title"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},O={class:"mb-3"},V=s("label",{class:"form-label"},"Выберите язык",-1),P=s("option",{selected:"",value:".cpp"},"C++20",-1),R=s("option",{value:".py"},"Python 3.10",-1),E=[P,R],F={class:"mb-3"},G=s("label",{class:"form-label"},"Загрузите файл",-1),K=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть",-1),j={__name:"SendSubmission",props:["task_id"],setup(u){const e=u,n=b(".cpp"),r=b(),t=()=>{m.post(p+"/submit",{problem_id:e.task_id,user_id:JSON.parse(localStorage.getItem("user")).id,fileName:n.value,file:r},{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{console.log(o)})};return(o,i)=>(d(),c("div",H,[s("div",U,[s("div",B,[I,s("div",J,[s("form",null,[s("div",O,[V,y(s("select",{class:"form-select","onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l)},E,512),[[w,n.value]])]),s("div",F,[G,s("input",{class:"form-control",type:"file",onChange:i[1]||(i[1]=l=>{r.value=l.target.files})},null,32)])])]),s("div",{class:"modal-footer"},[K,s("button",{type:"button",class:"btn btn-primary",onClick:t,"data-bs-dismiss":"modal"},"Отправить на проверку ")])])])]))}},q={class:"ps-5"},z={class:"row"},A={class:"col-8"},Q={class:"my-3"},W=s("h5",null,"Входные данные",-1),X=s("h5",null,"Выходные данные",-1),Y=s("div",{class:"row gx-2 mt-1"},[s("div",{class:"col-6 text-secondary fw-light"}," STDIN "),s("div",{class:"col-6 text-secondary fw-light"}," STDOUT ")],-1),Z={class:"row gx-2 mt-1"},ss={class:"col-6"},ts=["innerHTML"],es={class:"col-6"},os=["innerHTML"],ls={class:"row mt-5"},as=s("div",{class:"col-3 d-grid gap-2 me-auto"},[s("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#send_submission"},"Послать")],-1),ns={class:"col-5 text-end"},is=s("br",null,null,-1),ds={class:"col-4 my-3"},ps={__name:"TaskPage",setup(u){const e=k(),n=g(),r=(o,i)=>{let l=Date(o.date),S=Date(i.date);return l>S?1:0},t=b({});return m.get(p+"/problem/"+e.params.id+"/"+JSON.parse(localStorage.getItem("user")).id).then(o=>{t.value=o.data.problem,n.commit("set_submissions",t.value.submissions.sort(r))}),N(e,()=>{m.get(p+"/problem/"+e.params.id+"/"+JSON.parse(localStorage.getItem("user")).id).then(o=>{t.value=o.data.problem,n.commit("set_submissions",t.value.submissions.sort(r))})}),(o,i)=>(d(),c(_,null,[s("div",q,[s("div",z,[s("div",A,[s("h3",Q,a(t.value.name),1),s("p",null,a(t.value.legend),1),W,s("p",null,a(t.value.input_format),1),X,s("p",null,a(t.value.output_format),1),Y,(d(!0),c(_,null,$(t.value.examples,l=>(d(),c("div",Z,[s("div",ss,[s("div",{class:"p-2",style:{"background-color":"#f8f8f8"},innerHTML:l.input},null,8,ts)]),s("div",es,[s("div",{class:"p-2",style:{"background-color":"#f8f8f8"},innerHTML:l.output},null,8,os)])]))),256)),s("div",ls,[as,s("div",ns,[v(" Лимит времени: "+a(t.value.time_limit)+" c. ",1),is,v(" Лимит памяти: "+a(t.value.memory_limit)+" MB ",1)])])]),s("div",ds,[f(C)])])]),f(j,{task_id:h(e).params.id},null,8,["task_id"])],64))}};export{ps as default};
