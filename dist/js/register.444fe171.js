(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=n("98d7"),o=n.n(a),l=n("ff50"),c=n.n(l),s={class:""},i={class:"grid grid-cols-2"},u=Object(r["g"])("img",{class:"md:w-40",src:o.a},null,-1),m=Object(r["g"])("p",{class:"text-right text-white mr-4 text-xl sm:text-4xl md:7xl my-auto font-semibold"}," REGISTRO ",-1),b=Object(r["g"])("label",{class:"block text-white mt-4 md:mt-8",for:"name"},"Nombre:",-1),d=Object(r["g"])("label",{class:"block text-white mt-4 md:mt-8",for:"email"},"Correo:",-1),p=Object(r["g"])("label",{class:"block text-white mt-4 md:mt-8",for:"pass"},"Contraseña:",-1),g=Object(r["g"])("label",{class:"block text-white mt-4 md:mt-8",for:"select"},"Personaje favorito:",-1),x=Object(r["h"])('<option value="none" selected></option><option value="Phineas">Phineas Flynn</option><option value="Ferb">Ferb Fletcher</option><option value="Candace">Candace Flynn</option><option value="Perry">Perry/Agente P</option><option value="Heinz">Heinz Doofenshmirtz</option><option value="Isabella">Isabella Garcia-Shapiro</option>',7),f=[x],h=Object(r["g"])("input",{class:"btn btn-indigo sm:text-lg md:text-2xl block mt-4 md:mt-8 mx-auto",type:"submit",value:"CREAR CUENTA"},null,-1),w=Object(r["g"])("div",{class:"text-right text-center my-auto"},[Object(r["g"])("p",{class:"text-white sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"}," ¿Ya tienes cuenta? "),Object(r["g"])("a",{href:"/login",class:"ref ref-orange sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"},"Click aquí")],-1),j=Object(r["g"])("img",{class:"h-40 mx-auto mb-5",src:c.a},null,-1);function O(e,t,n,a,o,l){var c=this;return Object(r["t"])(),Object(r["f"])("section",s,[Object(r["g"])("div",i,[u,m,Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["K"])((function(e){return l.register(c.email,c.password)}),["prevent"])),class:"col-span-2 p-6 mt-10 md:my-14 mx-auto text-xl md:text-3xl lg:text-5xl",autocomplete:"off"},[b,Object(r["J"])(Object(r["g"])("input",{class:"block w-full bg-transparent border-b-4 text-white outline-none",type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),required:"true"},null,512),[[r["F"],o.name]]),d,Object(r["J"])(Object(r["g"])("input",{class:"block w-full bg-transparent border-b-4 text-white outline-none",type:"text",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e}),required:"true"},null,512),[[r["F"],o.email]]),p,Object(r["J"])(Object(r["g"])("input",{class:"block w-full bg-transparent border-b-4 text-white outline-none",type:"password",id:"pass","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e}),required:"true"},null,512),[[r["F"],o.password]]),g,Object(r["J"])(Object(r["g"])("select",{class:"select-content bg-gray-300 outline-none border-none rounded text-white p-1 sm:p-2 md:p-4",id:"select","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.select=e}),required:"true"},f,512),[[r["E"],o.select]]),h],32),w,j])])}var v=n("1da1"),y=(n("96cf"),n("323e")),k=n.n(y),E=n("1940"),F=n.n(E),R=n("ea7b"),C=n("ac35"),S={name:"Register",data:function(){return{name:"",email:"",password:"",select:""}},methods:{register:function(e,t){var n=this;Object(R["a"])(C["a"],e,t).then((function(){Object(R["f"])(C["a"].currentUser,{displayName:n.name,photoURL:n.select}),F()("! Registrado !","Ya puedes iniciar sesión","success"),n.name="",n.email="",n.password="",n.select=""})).catch((function(e){var t=e.code,n=e.message;switch(t){case"auth/email-already-in-use":F()("Error!","⚡ El correo electrónico ingresado ya existe ⚡","error");break;case"auth/invalid-email":F()("Error!","⚡ Lo lamentamos, el correo que ingresaste no es valido ⚡","error");break;case"auth/uid-already-exists":F()("Error!","Correo electrónico inválido","error");break;default:F()("Error!",n,"error")}}))}},created:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:k.a.done();case 1:case"end":return e.stop()}}),e)})))()}},U=n("6b0d"),q=n.n(U);const J=q()(S,[["render",O]]);t["default"]=J},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,o=n("e330"),l=n("9bf2").f,c=Function.prototype,s=o(c.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=o(i.exec),m="name";r&&!a&&l(c,m,{configurable:!0,get:function(){try{return u(i,s(this))[1]}catch(e){return""}}})},ff50:function(e,t,n){e.exports=n.p+"img/ferb.231166aa.png"}}]);
//# sourceMappingURL=register.444fe171.js.map