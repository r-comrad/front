import{b as x,a as L,v as B}from"./runtime-dom.esm-bundler-6f3b7d2d.js";import{a as g,U as v}from"./axios-2f89820f.js";import{u as M}from"./vuex.esm-bundler-a5fb55b5.js";import{D as U}from"./utils-f0c35e88.js";import{G as m,z as G,H as C,o as u,c,a as t,y as h,K as $,L as w,M as f,J as S,A as V,b as y}from"./runtime-core.esm-bundler-c941a8b7.js";import{M as F}from"./bootstrap.esm-9a522539.js";import{r as D}from"./index-b026ae4d.js";import{_ as N}from"./StudentsSearch-5cf40fd2.js";import"./vue-router-275fa628.js";import"./utils-4f7fe0fc.js";const O={class:"table table-striped text-center"},I=t("th",null,"Имя",-1),J=t("th",null,"Классный руководитель",-1),R=t("th",{style:{width:"10%"}},"Изменить",-1),E={style:{width:"10%"}},P=["onClick"],T=t("i",{class:"bi bi-pencil-fill"},null,-1),z=[T],A=["onUpdate:modelValue"],H={__name:"GradeList",props:["filter_by"],emits:["openModal"],setup(_,{emit:b}){const r=_,l=M(),o=m([]),i=n=>(n[1]==="1"||n[1]==="0"||(n="0"+n),n),e=()=>{g.get(v+"/get/all/grade[*;head_id[id;name;surname;role_id]]").then(n=>{o.value=n.data.grades,o.value.sort((a,s)=>i(a.name)>i(s.name)?1:-1),o.value.forEach(a=>{a.to_delete=!1})})};e();let p=G(()=>l.state.needReload);C(p,()=>{e()});const k=G(()=>o.value.filter(n=>n.name.toLowerCase().includes(r.filter_by.toLowerCase())));return(n,a)=>(u(),c("table",O,[t("thead",null,[t("tr",null,[I,J,R,t("th",E,[t("button",{class:"btn btn-danger btn-sm",onClick:a[0]||(a[0]=s=>h(U)(o.value,"/drop/grade",h(l)))},"Удалить")])])]),t("tbody",null,[(u(!0),c($,null,w(h(k),s=>(u(),c("tr",null,[t("td",null,f(s.name),1),t("td",null,f(s.head.name)+" "+f(s.head.surname),1),t("td",null,[t("button",{class:"btn btn-primary btn-sm",onClick:d=>n.$emit("openModal",s)},z,8,P)]),t("td",null,[S(t("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":d=>s.to_delete=d},null,8,A),[[x,s.to_delete]])])]))),256))])]))}},K={class:"row my-3"},j={class:"col-2"},q={class:"col-2 ms-auto"},Q={__name:"ButtonBlock",emits:["setGrade","setFilter"],setup(_,{emit:b}){return(r,l)=>(u(),c("div",K,[t("div",j,[t("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=o=>r.$emit("setGrade",{})),"data-bs-toggle":"modal","data-bs-target":"#grade"}," Создать новый класс ")]),t("div",q,[t("input",{class:"form-control me-2",type:"search",placeholder:"Поиск","aria-label":"Search",onInput:l[1]||(l[1]=o=>r.$emit("setFilter",o.target.value))},null,32)])]))}},W={class:"modal fade",id:"grade","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"grade","aria-hidden":"true"},X={class:"modal-dialog"},Y={class:"modal-content"},Z=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"},"Работа с классом"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),tt={class:"modal-body"},et={class:"mb-3"},st=t("label",{class:"form-label"},"Имя",-1),at={class:"mb-3"},ot=t("label",{class:"form-label"},"Классный руководитель",-1),nt=["value"],dt=t("div",{class:"mb-3"},[t("button",{class:"btn btn-primary","data-bs-target":"#student_search","data-bs-toggle":"modal"}," Выбрать обучающихся ")],-1),lt={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть",-1),it={__name:"GradeModal",props:["grade"],emits:["reGet"],setup(_,{emit:b}){const r=_,l=m([]),o=m([]),i=M();g.get(v+"/get/all/user[id;name;surname;role_id]").then(a=>{l.value=a.data.users.filter(s=>!s.role.includes("student")),o.value=a.data.users.filter(s=>s.role.includes("student"))});const e=V({id:0,name:"",students:[""],head:{}});m(""),C(r,()=>{r.grade.id!==void 0?g.get(v+"/get/by_id/grade(grade_student[student_id[name;surname;id;role_id]])[*;head_id[id;name;surname;role_id]]/"+r.grade.id).then(a=>{e.id=a.data.grade.id,e.name=a.data.grade.name,e.head=a.data.grade.head;let s=[];for(let d of a.data.grade.grade_students)s.push(d.student);e.students=s}):(e.id=0,e.name="",e.head={},e.students=[])});const p=G(()=>{let a=[];if(e.students)for(let s of e.students)a.push(s.id);return a}),k=()=>{let a=[];if(e.students)for(let s of e.students)a.push(s.id);g({url:v+"/post/grade",method:"POST",data:{id:e.id,name:e.name,head_id:e.head.id,grade_student:a},headers:{token:JSON.parse(localStorage.getItem("user")).token}}).then(s=>{i.commit("changeReload")})},n=a=>{e.students=a};return m(),(a,s)=>(u(),c($,null,[y(N,{"back-i-d":"#grade",students:o.value,selected:h(p),onMakeList:n,id:"student_search"},null,8,["students","selected"]),t("div",W,[t("div",X,[t("div",Y,[Z,t("div",tt,[t("div",et,[st,S(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=d=>e.name=d)},null,512),[[L,e.name]])]),t("div",at,[ot,S(t("select",{class:"form-control","onUpdate:modelValue":s[1]||(s[1]=d=>e.head=d)},[(u(!0),c($,null,w(l.value,d=>(u(),c("option",{value:d},f(d.name)+" "+f(d.surname),9,nt))),256))],512),[[B,e.head]])]),dt]),t("div",lt,[t("button",{type:"button",class:"btn btn-outline-primary me-auto",onClick:s[2]||(s[2]=d=>h(D).push({name:"group_management",params:{grade:JSON.stringify(e)}})),"data-bs-dismiss":"modal"},"Открыть группы "),rt,t("button",{type:"button",class:"btn btn-primary",onClick:k,"data-bs-dismiss":"modal"},"Сохранить")])])])])],64))}},yt={__name:"MakeGrade",setup(_){const b=m(""),r=i=>{b.value=i},l=i=>{r(i),new F("#grade").toggle()},o=m("");return(i,e)=>(u(),c($,null,[y(Q,{onSetGrade:r,onSetFilter:e[0]||(e[0]=p=>{o.value=p})}),y(it,{grade:b.value},null,8,["grade"]),y(H,{filter_by:o.value,onOpenModal:l},null,8,["filter_by"])],64))}};export{yt as default};
