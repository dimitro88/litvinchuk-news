(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4h21":function(t,n,e){"use strict";e.r(n),e.d(n,"NewsByIdModule",(function(){return p}));var i=e("ofXK"),c=e("tyNb"),o=e("+fGH"),r=e("fXoL"),a=e("WAaD");const l=[{path:"",component:(()=>{class t{constructor(t,n){this.route=t,this.databaseService=n}ngOnInit(){this.route.paramMap.subscribe(()=>{var t,n;this.paramId=null===(n=null===(t=this.route.snapshot)||void 0===t?void 0:t.params)||void 0===n?void 0:n.id,this.getArticleInfo(this.paramId)})}getArticleInfo(t){this.article=this.databaseService.getById(o.a.Articles,t)}}return t.\u0275fac=function(n){return new(n||t)(r.Ob(c.a),r.Ob(a.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["app-news-by-id"]],decls:12,vars:5,consts:[[1,"article-info"],[1,"image-container"],[3,"src"],[1,"description-container"],[1,"heading-text"],[1,"description-text"],[1,"date-text"],[1,"author-text"]],template:function(t,n){1&t&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Pb(2,"img",2),r.Tb(),r.Ub(3,"div",3),r.Ub(4,"span",4),r.zc(5),r.Tb(),r.Ub(6,"span",5),r.zc(7),r.Tb(),r.Ub(8,"span",6),r.zc(9),r.Tb(),r.Ub(10,"span",7),r.zc(11),r.Tb(),r.Tb(),r.Tb()),2&t&&(r.Cb(2),r.lc("src",null==n.article?null:n.article.imageUrl,r.sc),r.Cb(3),r.Bc(" ",null==n.article?null:n.article.heading," "),r.Cb(2),r.Bc(" ",null==n.article?null:n.article.fullDescription," "),r.Cb(2),r.Bc(" Date: ",null==n.article?null:n.article.date," "),r.Cb(2),r.Bc(" ",null==n.article?null:n.article.author," "))},styles:[".article-info[_ngcontent-%COMP%]{border:2px solid #000;width:100%;height:80vh;margin-top:50px;display:flex;flex-direction:row}.article-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:280px;height:100%;display:flex;justify-content:center}.article-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:30px;width:220px;height:220px}.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]{padding:30px 30px 30px 0;box-sizing:border-box;display:flex;flex-direction:column;width:calc(100% - 280px);height:100%;overflow-y:auto}.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]{font-size:36px;font-weight:700}.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{margin-top:25px}.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]{margin-top:15px}"]}),t})()}];let s=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(n){return new(n||t)},imports:[[c.c.forChild(l)],c.c]}),t})(),p=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(n){return new(n||t)},imports:[[i.c,s]]}),t})()}}]);