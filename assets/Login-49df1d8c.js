import{a as i}from"./runtime-dom.esm-bundler-62d8dff8.js";import{_ as p}from"./MessageBlock.vue_vue_type_script_setup_true_lang-adb05fa6.js";import{r as _}from"./index-c91c4047.js";import{a as f,U as h}from"./axios-99647cd3.js";import{G as r,o as c,c as d,a as e,b as v,N as b,J as m}from"./runtime-core.esm-bundler-39f475bb.js";import"./vue-router-dca7c9af.js";const y={class:"d-flex justify-content-center align-items-center py-5",style:{height:"80vh"}},g={class:"col-4 card"},w={class:"card-body"},x={key:0,class:"alert alert-danger",role:"alert"},k={class:"form-group my-3"},N=e("label",{for:"username",class:"form-label"},"Имя пользователя",-1),V={class:"form-group"},U=e("label",{for:"username",class:"form-label"},"Пароль",-1),B={class:"input-group my-3",id:"show_hide_password"},S=e("button",{class:"btn btn-secondary",type:"button",onclick:""},[e("i",{id:"icon",class:"bi bi-eye-fill"})],-1),E={__name:"Login",setup(C){const o=r(""),t=r(""),l=r(!1);function u(){f({method:"POST",url:h+"/login",data:{login:o.value,password:t.value}}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.user)),_.push({name:"homepage"})}).catch(()=>{l.value=!0})}return(n,s)=>(c(),d("div",y,[e("div",g,[e("div",w,[v(p),l.value?(c(),d("div",x," Неправильный логин или пароль ")):b("",!0),e("div",k,[N,m(e("input",{type:"text",name:"username",id:"username",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a)},null,512),[[i,o.value]])]),e("div",V,[U,e("div",B,[m(e("input",{type:"password",name:"password",id:"pass",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=a=>t.value=a)},null,512),[[i,t.value]]),S])]),e("button",{class:"btn btn-primary my-3",onClick:u},"Зайти")])])]))}};export{E as default};
