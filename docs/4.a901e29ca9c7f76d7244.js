(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dgmN:function(e,t,n){"use strict";n.r(t),n.d(t,"PagesModule",function(){return M});var o=n("ofXK"),r=n("tyNb"),i=n("fXoL");let s=(()=>{class e{constructor(){this.pokemonesLocal=[]}get(e){return JSON.parse(localStorage.getItem(e))||[]}add(e){const t=JSON.parse(localStorage.getItem("pokemon"))||[];t.push(e),localStorage.setItem("pokemon",JSON.stringify(t))}delete(e){const t=(JSON.parse(localStorage.getItem("pokemon"))||[]).filter(t=>t.id!=e);t.length?localStorage.setItem("pokemon",JSON.stringify(t)):localStorage.setItem("pokemon",JSON.stringify([]))}deleteAll(e){localStorage.removeItem(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.zb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=n("jhN1"),a=n("z89O"),l=n("5eHb");function b(e,t){if(1&e){const e=i.Jb();i.Ib(0,"div",4),i.Ob("click",function(){return i.Ub(e),i.Qb().guardar()}),i.Ib(1,"p"),i.Eb(2,"i",5),i.Hb(),i.Hb()}}function p(e,t){if(1&e){const e=i.Jb();i.Ib(0,"div",6),i.Ob("click",function(){return i.Ub(e),i.Qb().eliminar()}),i.Eb(1,"i",7),i.Hb()}}let g=(()=>{class e{constructor(e,t,n){this.pokemonServices=e,this.storageService=t,this.toastr=n,this.pokemonE=new i.n}ngOnInit(){this.obtenerFavoritos()}obtenerFavoritos(){const e=this.storageService.get("pokemon")||[];this.clase=e.includes(this.pokemon)}errorImage(){this.pokemon.img="assets/img/no-image.png"}guardar(){this.storageService.add(this.pokemon),this.toastr.success("se guardo pokemon","Pokemon")}eliminar(){this.storageService.delete(this.pokemon.id),this.toastr.success("se elimino pokemon","Pokemon"),this.pokemonE.emit(this.pokemon)}}return e.\u0275fac=function(t){return new(t||e)(i.Db(a.a),i.Db(s),i.Db(l.b))},e.\u0275cmp=i.xb({type:e,selectors:[["app-pokemon"]],inputs:{pokemon:"pokemon",guardarInput:"guardarInput"},outputs:{pokemonE:"pokemonE"},decls:9,vars:5,consts:[["class","accion",3,"click",4,"ngIf"],["class","accion btn-eliminar",3,"click",4,"ngIf"],["loading","lazy",1,"imagenes",3,"src","alt","error"],[1,"card-title"],[1,"accion",3,"click"],[1,"fas","fa-plus","fa-xs"],[1,"accion","btn-eliminar",3,"click"],[1,"fas","fa-trash-alt","fa-xs"]],template:function(e,t){1&e&&(i.Ib(0,"div"),i.ac(1,b,3,0,"div",0),i.ac(2,p,2,0,"div",1),i.Ib(3,"div"),i.Ib(4,"div"),i.Ib(5,"img",2),i.Ob("error",function(){return t.errorImage()}),i.Hb(),i.Hb(),i.Ib(6,"div",3),i.Ib(7,"p"),i.cc(8),i.Hb(),i.Hb(),i.Hb(),i.Hb()),2&e&&(i.tb(1),i.Rb("ngIf",t.guardarInput),i.tb(1),i.Rb("ngIf",!t.guardarInput),i.tb(3),i.Rb("src",t.pokemon.img,i.Wb)("alt",t.pokemon.name),i.tb(3),i.dc(" ",t.pokemon.name," "))},directives:[o.i],styles:[".card-title[_ngcontent-%COMP%]{background-color:#696969;color:#fff;text-align:center;padding:40px 10px;height:100%;width:100%;overflow:hidden;font-size:1rem;text-transform:uppercase;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.card-title[_ngcontent-%COMP%]:hover{border:none}.card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;text-align:center}.imagenes[_ngcontent-%COMP%]{object-fit:unset;width:100%;display:block;margin:13px 0;transition:all .8 ease-in}.imagenes[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.card-footer[_ngcontent-%COMP%]{padding:20px}.success[_ngcontent-%COMP%]{border-color:#4caf50;color:#fff;border-radius:10px;outline:none;background-color:#194350}.success[_ngcontent-%COMP%]:hover{color:#fff;background-color:green;outline:none;border:none}.accion[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#194350;position:absolute;top:-15px;color:#fff;right:-16px;border-radius:50%;z-index:1;display:flex;justify-content:center;align-items:center}.accion[_ngcontent-%COMP%]:hover{box-shadow:0 3px 15px #696969;color:#194350;background-color:#fff}.card-footer[_ngcontent-%COMP%]{background-color:#696969}.fas[_ngcontent-%COMP%]{font-size:20px}.btn-eliminar[_ngcontent-%COMP%]:hover{background-color:#fff;color:#194350}"]}),e})();function d(e,t){if(1&e){const e=i.Jb();i.Ib(0,"div",3),i.Ib(1,"app-pokemon",4),i.Ob("pokemonE",function(t){return i.Ub(e),i.Qb(2).recibe(t)}),i.Hb(),i.Hb()}if(2&e){const e=t.$implicit;i.tb(1),i.Rb("pokemon",e)("guardarInput",!1)}}function u(e,t){if(1&e&&(i.Gb(0),i.ac(1,d,2,2,"div",2),i.Fb()),2&e){const e=i.Qb();i.tb(1),i.Rb("ngForOf",e.pokemones)}}function m(e,t){1&e&&(i.Ib(0,"div",5),i.Ib(1,"p"),i.cc(2,"No tienes pokemones Favoritos"),i.Hb(),i.Hb(),i.Eb(3,"img",6))}let f=(()=>{class e{constructor(e,t,n){this.storageService=e,this.title=t,this.meta=n,this.pokemones=[]}ngOnInit(){this.favoritosPokemones(),this.seo()}favoritosPokemones(){this.pokemones=this.storageService.get("pokemon")||[]}recibe(e){this.pokemones=this.pokemones.filter(t=>t.id!==e.id)}seo(){this.title.setTitle("Pokemones Favoritos"),this.meta.addTag({name:"description",content:"pokemones Favoritos"})}ngOnDestroy(){this.pokemones=[]}}return e.\u0275fac=function(t){return new(t||e)(i.Db(s),i.Db(c.d),i.Db(c.c))},e.\u0275cmp=i.xb({type:e,selectors:[["app-favoritos"]],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],["class","card",4,"ngFor","ngForOf"],[1,"card"],[3,"pokemon","guardarInput","pokemonE"],[1,"no-results","bordeIzquierdo"],["src","assets/img/nada.svg","alt","",1,"imagenSvg"]],template:function(e,t){if(1&e&&(i.Ib(0,"section"),i.ac(1,u,2,1,"ng-container",0),i.ac(2,m,4,0,"ng-template",null,1,i.bc),i.Hb()),2&e){const e=i.Tb(3);i.tb(1),i.Rb("ngIf",t.pokemones.length)("ngIfElse",e)}},directives:[o.i,o.h,g],styles:["section[_ngcontent-%COMP%]{margin-top:1.5rem;margin-left:1.5rem;padding:5px 1rem;display:flex;flex-flow:row wrap;justify-content:space-evenly}.card[_ngcontent-%COMP%]{width:23%;margin:1.5rem auto 20px;border:1px solid silver;border-radius:10px;position:relative}.card[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 15px #2b2727}.no-results[_ngcontent-%COMP%]{width:300px;margin:auto;font-size:3rem;font-weight:500}.imagenSvg[_ngcontent-%COMP%]{width:500px;height:500px;background-position:50%;background-repeat:no-repeat;background-size:cover}.bordeIzquierdo[_ngcontent-%COMP%]{border-left:3px solid #194350}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:40px}@media screen and (max-width:500px){.card[_ngcontent-%COMP%]{width:40%}}"]}),e})();var h=n("vkgz");const k=["enlaces"],v=["as"];let O=(()=>{class e{constructor(e){this.render=e}ngOnInit(){}abrirEnlace(){this.enlaces.nativeElement.classList.toggle("enlaces2")}quitarClaseMenu(){this.enlaces.nativeElement.classList.toggle("enlaces2")}}return e.\u0275fac=function(t){return new(t||e)(i.Db(i.D))},e.\u0275cmp=i.xb({type:e,selectors:[["app-header-d"]],viewQuery:function(e,t){if(1&e&&(i.ec(k,!0),i.ec(v,!0)),2&e){let e;i.Sb(e=i.Pb())&&(t.enlaces=e.first),i.Sb(e=i.Pb())&&(t.as=e)}},decls:15,vars:0,consts:[[1,"contenedor"],["routerLink","/"],[1,"logo"],["src","assets/img/x.svg.png"],[1,"enlaces"],["enlaces",""],["routerLink","/",3,"click"],["as",""],["routerLink","/favoritos",3,"click"],[1,"hamburguesa",3,"click"],[1,"fas","fa-bars"]],template:function(e,t){1&e&&(i.Ib(0,"header"),i.Ib(1,"nav",0),i.Ib(2,"a",1),i.Ib(3,"div",2),i.Eb(4,"img",3),i.Hb(),i.Hb(),i.Ib(5,"div",4,5),i.Ib(7,"a",6,7),i.Ob("click",function(){return t.quitarClaseMenu()}),i.cc(9,"Inicio"),i.Hb(),i.Ib(10,"a",8,7),i.Ob("click",function(){return t.quitarClaseMenu()}),i.cc(12,"Favoritos"),i.Hb(),i.Hb(),i.Ib(13,"button",9),i.Ob("click",function(){return t.abrirEnlace()}),i.Eb(14,"i",10),i.Hb(),i.Hb(),i.Hb())},directives:[r.c],styles:["header[_ngcontent-%COMP%]{background-color:#194350;width:100%;box-shadow:0 0 6px #194350}nav.contenedor[_ngcontent-%COMP%]{height:70px;width:90%;display:flex;justify-content:space-between;align-items:center;margin:auto;overflow:hidden}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:70px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;vertical-align:top}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-weight:300;margin-right:20px;color:#f2f2f2;font-size:2rem;text-transform:uppercase}.hamburguesa[_ngcontent-%COMP%]{height:85%;width:60px;color:#fff;text-align:center;display:none;border:1px solid #fff;font-size:20px;border-radius:8px}button[_ngcontent-%COMP%]{background-color:initial}@media screen and (max-width:550px){.enlaces[_ngcontent-%COMP%]{position:fixed;background-color:#696969;left:0;top:70px;height:100vh;width:100vw;justify-content:space-evenly;align-items:center;display:flex;flex-flow:column wrap;transform:translateX(-100%);transition:all .7s;z-index:2}.enlaces2[_ngcontent-%COMP%]{transform:translateX(0)}.hamburguesa[_ngcontent-%COMP%]{display:block}}"]}),e})(),x=(()=>{class e{constructor(e){this.router=e}ngOnInit(){this.router.events.pipe(Object(h.a)(e=>{e instanceof r.a&&console.log("event instanceof NavigationEnd")})).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Db(r.b))},e.\u0275cmp=i.xb({type:e,selectors:[["app-inicio"]],decls:3,vars:0,template:function(e,t){1&e&&(i.Eb(0,"app-header-d"),i.Ib(1,"main"),i.Eb(2,"router-outlet"),i.Hb())},directives:[O,r.e],styles:[""]}),e})();var P=n("JIr8"),I=n("LRne");function w(e,t){if(1&e&&(i.Ib(0,"div",5),i.Eb(1,"app-pokemon",6),i.Hb()),2&e){const e=t.$implicit;i.tb(1),i.Rb("pokemon",e)("guardarInput",!0)}}const C=r.d.forChild([{path:"",component:x,children:[{path:"",component:(()=>{class e{constructor(e,t,n,o){this.pokemonServices=e,this.toastr=t,this.title=n,this.meta=o,this.pokemones=[],this.offset=0}ngOnInit(){this.getPokemon(),this.seo()}getPokemon(){this.pokemonServices.getAllPokemos().pipe(Object(h.a)(({results:e})=>this.obtenerPokemonsCorrectos(e)),Object(P.a)(e=>(this.toastr.error("ocurrio un error al cargar","ERROR"),Object(I.a)(e)))).subscribe()}siguiente(){const e=20*++this.offset;this.pokemonServices.getAllPokemos(e).pipe(Object(h.a)(({results:e})=>this.obtenerPokemonsCorrectos(e)),Object(P.a)(e=>(this.toastr.error("ocurrio un error al cargar","ERROR"),Object(I.a)(e)))).subscribe()}regresar(){this.offset=--this.offset,this.offset<=0||this.pokemonServices.getAllPokemos(20*this.offset).pipe(Object(h.a)(({results:e})=>this.obtenerPokemonsCorrectos(e)),Object(P.a)(e=>(this.toastr.error("ocurrio un error al cargar","ERROR"),Object(I.a)(e)))).subscribe()}obtenerPokemonsCorrectos(e){this.pokemones=e.map(e=>{const t=e.url.split("/")[6];return{id:t,name:e.name,img:`https://pokeres.bastionbot.org/images/pokemon/${t}.png`}})}seo(){this.title.setTitle("Pokemon List"),this.meta.addTag({name:"description",content:"lista de pokemones"})}}return e.\u0275fac=function(t){return new(t||e)(i.Db(a.a),i.Db(l.b),i.Db(c.d),i.Db(c.c))},e.\u0275cmp=i.xb({type:e,selectors:[["app-pokemon-list"]],decls:6,vars:1,consts:[[1,"sectionPokemon"],["class","card",4,"ngFor","ngForOf"],[1,"botones"],["type","button","value","regresar",1,"btn","boton",3,"click"],["type","button","value","siguientes",1,"btn","boton",3,"click"],[1,"card"],[3,"pokemon","guardarInput"]],template:function(e,t){1&e&&(i.Ib(0,"section",0),i.ac(1,w,2,2,"div",1),i.Hb(),i.Eb(2,"hr"),i.Ib(3,"div",2),i.Ib(4,"input",3),i.Ob("click",function(){return t.regresar()}),i.Hb(),i.Ib(5,"input",4),i.Ob("click",function(){return t.siguiente()}),i.Hb(),i.Hb()),2&e&&(i.tb(1),i.Rb("ngForOf",t.pokemones))},directives:[o.h,g],styles:[".sectionPokemon[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-evenly}.card[_ngcontent-%COMP%]{width:23%;margin:1.5rem auto 20px;border:1px solid silver;border-radius:10px;position:relative}.card[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 15px #2b2727}.boton[_ngcontent-%COMP%]{background-color:#194350;color:#fff;display:inline-block;margin:0 auto}.botones[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:20px auto;width:100%}@media screen and (max-width:500px){.card[_ngcontent-%COMP%]{width:40%}}@media screen and (max-width:420px){.sectionPokemon[_ngcontent-%COMP%]{margin-top:1.5rem;margin-left:1.5rem;display:flex;flex-flow:row wrap;justify-content:space-evenly}.card[_ngcontent-%COMP%]{width:37%}}"]}),e})()},{path:"favoritos",component:f}]}]);let M=(()=>{class e{}return e.\u0275mod=i.Bb({type:e}),e.\u0275inj=i.Ab({factory:function(t){return new(t||e)},imports:[[o.b,C]]}),e})()}}]);