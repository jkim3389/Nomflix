(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/notFoundPoster.bd9f46db.png"},45:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(35),o=n.n(i),u=n(7),l=n(8),c=n(10),s=n(9),p=n(15),d=n(17),m=n(11),f=n.n(m),g=n(14),v=n(2),h=n(1);function b(){var e=Object(v.a)(["\n    margin-top : 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap : 25px;\n"]);return b=function(){return e},e}function E(){var e=Object(v.a)(["\n    font-size : 20px;\n    font-weight : 600;\n"]);return E=function(){return e},e}function x(){var e=Object(v.a)(["\n    :not(:last-child) {\n        margin-bottom : 50px;\n    }\n"]);return x=function(){return e},e}var y=h.default.div(x()),j=h.default.span(E()),O=h.default.div(b()),w=function(e){var t=e.title,n=e.children;return a.a.createElement(y,null,a.a.createElement(j,null,t),a.a.createElement(O,null,n))},k=n(39),_=n.n(k);n(52);function S(){var e=Object(v.a)(["\n    margin:auto;\n"]);return S=function(){return e},e}function M(){var e=Object(v.a)(["\n    align-items : center;\n    display: flex;\n    justify-content : center;\n    font-size : 32px\n"]);return M=function(){return e},e}var T=h.default.div(M()),F=Object(h.default)(_.a)(S()),R=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(T,null,a.a.createElement("div",null,a.a.createElement(F,{type:"bars",color:"white"}),a.a.createElement("div",null,"Loading...")))}}]),n}(a.a.Component);function U(){var e=Object(v.a)(["\n    color: ",";\n    font-weight: 600;\n"]);return U=function(){return e},e}function D(){var e=Object(v.a)(["\n    width : 100 vw;\n    display : flex;\n    justify-content : center;\n"]);return D=function(){return e},e}var z=h.default.div(D()),C=h.default.span(U(),(function(e){return e.color})),P=function(e){var t=e.text,n=e.color;return a.a.createElement(z,null,a.a.createElement(C,{color:n},t))};function I(){var e=Object(v.a)(["\n    font-size : 10px;\n    color: rgba(255,255,255,0.5);\n"]);return I=function(){return e},e}function Y(){var e=Object(v.a)(["\n    display: block;\n    margin-bottom : 3px;\n"]);return Y=function(){return e},e}function N(){var e=Object(v.a)(["\n    margin-bottom: 5px;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity : 1\n        }\n    }\n    position : relative;\n"]);return N=function(){return e},e}function V(){var e=Object(v.a)(["\n    position : absolute;\n    bottom : 5px;\n    right : 5px;\n    opacity  : 0;\n    transition: opacity 0.1s ease-in-out;\n"]);return V=function(){return e},e}function A(){var e=Object(v.a)(["\n    background-image : url(",");\n    height : 180px;\n    background-size : cover;\n    border-radius : 10px;\n    background-position : center center;\n    transition: opacity 0.1s ease-in-out;\n"]);return A=function(){return e},e}function B(){var e=Object(v.a)(["\n    font-size : 12px;\n"]);return B=function(){return e},e}function q(){var e=Object(v.a)(["\n    &:hover {\n            text-decoration : none;\n            color : white;\n        }\n"]);return q=function(){return e},e}var J=Object(h.default)(p.b)(q()),L=h.default.div(B()),G=h.default.div(A(),(function(e){return e.bgUrl})),H=h.default.span(V()),K=h.default.div(N(),G,H),Q=h.default.span(Y()),W=h.default.span(I()),X=function(e){var t=e.id,r=e.imageUrl,i=e.title,o=e.rating,u=e.year,l=e.isMovie,c=void 0!==l&&l;return a.a.createElement(J,{to:c?"/movie/".concat(t,"/"):"/show/".concat(t)},a.a.createElement(L,null,a.a.createElement(K,null,a.a.createElement(G,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(23)}),a.a.createElement(H,null,a.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),a.a.createElement(Q,null,i),a.a.createElement(W,null,u)))},Z=n(16);function $(){var e=Object(v.a)(["\n    padding : 20px;\n"]);return $=function(){return e},e}var ee=h.default.div($()),te=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.loading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z.a,null,a.a.createElement("title",null,"  Movie | Nomflix ")),i?a.a.createElement(R,null):a.a.createElement(ee,null,t&&t.length>0&&a.a.createElement(w,{title:"Now Playing"},t.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:new Date(e.release_date).getFullYear(),isMovie:!0})}))),n&&n.length>0&&a.a.createElement(w,{title:"Upcoming"},n.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:new Date(e.release_date).getFullYear(),isMovie:!0})}))),r&&r.length>0&&a.a.createElement(w,{title:"Popular"},r.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:new Date(e.release_date).getFullYear(),isMovie:!0})}))),o&&a.a.createElement(P,{text:o,color:"#e74c3c"})))},ne=n(43),re=n.n(ne).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6b9bd926342ea831942d632cc9886879",language:"en-US"}}),ae=function(){return re.get("movie/now_playing")},ie=function(){return re.get("movie/upcoming")},oe=function(){return re.get("movie/popular")},ue=function(e){return re.get("movie/".concat(e),{params:{append_to_response:"videos"}})},le=function(e){return re.get("/search/movie",{params:{query:encodeURIComponent(e)}})},ce=function(){return re.get("tv/top_rated")},se=function(){return re.get("tv/popular")},pe=function(){return re.get("tv/airing_today")},de=function(e){return re.get("tv/".concat(e),{params:{append_to_response:"videos"}})},me=function(e){return re.get("/search/tv",{params:{query:encodeURIComponent(e)}})},fe=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,loading:!0,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r,a,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae();case 3:return t=e.sent,n=t.data.results,e.next=7,ie();case 7:return r=e.sent,a=r.data.results,e.next=11,oe();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.loading,o=e.error;return a.a.createElement(te,{nowPlaying:t,upcoming:n,popular:r,error:o,loading:i})}}]),n}(a.a.Component);function ge(){var e=Object(v.a)(["\n    padding : 20px;\n"]);return ge=function(){return e},e}var ve=h.default.div(ge()),he=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z.a,null,a.a.createElement("title",null,"  TV | Nomflix ")),i?a.a.createElement(R,null):a.a.createElement(ve,null,t&&t.length>0&&a.a.createElement(w,{title:"Top Rated Shows"}," ",t.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:new Date(e.first_air_date).getFullYear(),isMovie:!1})}))," "),n&&n.length>0&&a.a.createElement(w,{title:"Popular Shows"}," ",n.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:new Date(e.first_air_date).getFullYear(),isMovie:!1})}))," "),r&&r.length>0&&a.a.createElement(w,{title:"Airing Today"}," ",r.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:new Date(e.first_air_date).getFullYear(),isMovie:!1})}))," "),o&&a.a.createElement(P,{text:o,color:"#e74c3c"})))},be=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r,a,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce();case 3:return t=e.sent,n=t.data.results,e.next=7,se();case 7:return r=e.sent,a=r.data.results,e.next=11,pe();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:a,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"can not find information on TV"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,i=e.loading,o=e.error;return a.a.createElement(he,{topRated:t,popular:n,airingToday:r,loading:i,error:o})}}]),n}(a.a.Component);function Ee(){var e=Object(v.a)(["\n    all: unset;\n    font-size: 30px;\n    width: 100%;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(v.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]);return xe=function(){return e},e}function ye(){var e=Object(v.a)(["\n    padding: 20px;\n"]);return ye=function(){return e},e}var je=h.default.div(ye()),Oe=h.default.form(xe()),we=h.default.input(Ee()),ke=function(e){var t=e.movieResult,n=e.tvResult,r=e.term,i=e.loading,o=e.error,u=e.handleSubmit,l=e.updateTerm;return a.a.createElement(je,null,a.a.createElement(Z.a,null,a.a.createElement("title",null,"  Search | Nomflix ")),a.a.createElement(Oe,{onSubmit:u},a.a.createElement(we,{placeholder:"Search Movies or TV shows",value:r,onChange:l})),i?a.a.createElement(R,null):a.a.createElement(a.a.Fragment,null,t&&t.length>0&&a.a.createElement(w,{title:"Movies"},t.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:new Date(e.release_date).getFullYear(),isMovie:!0})}))),n&&n.length>0&&a.a.createElement(w,{title:"TV Shows"}," ",n.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:new Date(e.first_air_date).getFullYear(),isMovie:!1})}))),o&&a.a.createElement(P,{text:o}),n&&t&&0===n.length&&0===t.length&&a.a.createElement(P,{text:"Nothing Found",color:"#95a5a6"})))},_e=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResult:null,tvResult:null,term:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault();var n=e.state.term;""!==n&&e.searchByTerm(),console.log(n)},e.updateTerm=function(t){var n=t.target.value;console.log(n),e.setState({term:n})},e}return Object(l.a)(n,[{key:"searchByTerm",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r,a,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.term,e.prev=1,this.setState({loading:!0}),e.next=5,le(t);case 5:return n=e.sent,r=n.data.results,e.next=9,me(t);case 9:a=e.sent,i=a.data.results,this.setState({movieResult:r,tvResult:i}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),this.setState({error:"can not find information on search"});case 17:return e.prev=17,this.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[1,14,17,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movieResult,n=e.tvResult,r=e.term,i=e.loading,o=e.error;return a.a.createElement(ke,{movieResult:t,tvResult:n,term:r,loading:i,error:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.a.Component);function Se(){var e=Object(v.a)(["\n    height: 50px;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n"]);return Se=function(){return e},e}function Me(){var e=Object(v.a)(["\n    width : 80px;\n    height : 50px;\n    text-align : center;\n    justify-items : center;\n    border-bottom: 5px solid ",";\n"]);return Me=function(){return e},e}function Te(){var e=Object(v.a)(["\n    display:flex\n"]);return Te=function(){return e},e}function Fe(){var e=Object(v.a)(["\ncolor: white;\nposition : fixed;\ntop : 0px;\nleft : 0px;\nwidth : 100%;\nheight : 50px;\ndisplay : flex;\nalign-items : center;\n\nbackground-color: rgba(20,20,20,0.8);\nz-index : 10;\nbox-shadow : 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]);return Fe=function(){return e},e}var Re=h.default.header(Fe()),Ue=h.default.ul(Te()),De=h.default.li(Me(),(function(e){return e.current?"red":"transparent"})),ze=Object(h.default)(p.b)(Se()),Ce=Object(d.g)((function(e){var t=e.location.pathname;return a.a.createElement(Re,null,a.a.createElement(Ue,null,a.a.createElement(De,{current:"/"===t},a.a.createElement(ze,{to:"/"},"Movies")),a.a.createElement(De,{current:"/TV"===t},a.a.createElement(ze,{to:"/TV"},"TV")),a.a.createElement(De,{current:"/search"===t},a.a.createElement(ze,{to:"/search"},"Search"))))}));function Pe(){var e=Object(v.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(v.a)(["\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n    margin-bottom : 20px;\n"]);return Ie=function(){return e},e}function Ye(){var e=Object(v.a)([""]);return Ye=function(){return e},e}var Ne=h.default.div(Ye()),Ve=h.default.div(Ie()),Ae=h.default.iframe(Pe()),Be=function(e){var t=e.result.videos.results;return a.a.createElement(Ne,null,a.a.createElement(Ve,null,a.a.createElement(Ae,{src:"https://www.youtube.com/embed/".concat(t[0].key),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"})))};function qe(){var e=Object(v.a)(["\n    margin-top : 10px;\n    padding : 10px 10px;\n    background-color: rgba(24, 24, 28, 0.85);\n"]);return qe=function(){return e},e}function Je(){var e=Object(v.a)(["\n    background-color : rgba(0,0,0, 0.3);\n    padding : 20px;\n"]);return Je=function(){return e},e}function Le(){var e=Object(v.a)(["\n    height : 150px;\n    width: 100%;\n    background-image : url(",");\n    background-size : cover;\n    background-position : center center;\n"]);return Le=function(){return e},e}function Ge(){var e=Object(v.a)(["\n    /* width : 50%; */\n    flex: 1;\n    height: auto;\n    background-color: rgba(24, 24, 28, 0.85);\n    border-radius: 4px;\n    padding: 5px;\n    color: rgba(255, 255, 255, 0.6);\n    text-align: center;\n    /* display : flex; */\n"]);return Ge=function(){return e},e}function He(){var e=Object(v.a)(["\n    margin-top : 20px;\n    display : grid;\n    grid-template-columns : repeat(auto-fill, 180px);\n    grid-gap : 15px;\n\n"]);return He=function(){return e},e}function Ke(){var e=Object(v.a)([" \n    background-color : rgba(0,0,0, 0.3);\n    padding : 20px;\n    margin-bottom : 20px;\n    "]);return Ke=function(){return e},e}var Qe=h.default.div(Ke()),We=h.default.div(He()),Xe=h.default.div(Ge()),Ze=h.default.div(Le(),(function(e){return e.bgImg})),$e=h.default.div(Je()),et=h.default.div(qe()),tt=function(e){var t=e.result.production_companies,r=e.result.production_countries;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qe,null,"Production Companies",a.a.createElement(We,null,t.map((function(e,t){return a.a.createElement(Xe,null,a.a.createElement(Ze,{key:t,bgImg:e.logo_path?"https://image.tmdb.org/t/p/w300".concat(e.logo_path):n(23)}),e.name)})))),a.a.createElement($e,null,"Production Countries",r.map((function(e,t){return a.a.createElement(et,null," - ".concat(e.name))}))))};function nt(){var e=Object(v.a)(["\n    padding : 20px 20px;\n    margin : 0px 20px;\n    background-color : rgba(255,255,255, 0.5);\n    border-radius : 40%;\n"]);return nt=function(){return e},e}function rt(){var e=Object(v.a)(["\n    width: 100%;\n    display : flex;\n    justify-content : center;\n"]);return rt=function(){return e},e}function at(){var e=Object(v.a)(["\n    width : 70%;\n    height : 100%;\n"]);return at=function(){return e},e}function it(){var e=Object(v.a)(["\n\n\n"]);return it=function(){return e},e}function ot(){var e=Object(v.a)(["\n    /* margin : 15px; */\n    display : inline-block;\n    list-style-type : none;\n    padding : 15px;\n    height : 100%;\n    width : 100%;\n    justify-content : center;\n    text-align : center;\n    align-items : center;\n    border-bottom : solid 3px ",";\n"]);return ot=function(){return e},e}function ut(){var e=Object(v.a)(["\n    display : flex;\n    width : 70%;\n    background-color: rgba(0,0,0,0.3);\n    border-radius : 10px;\n    /* justify-content : center; */\n    margin-bottom : 30px;\n    /* padding : 0px */\n"]);return ut=function(){return e},e}function lt(){var e=Object(v.a)(["\n    width : 100%;\n    height : 80%;\n   \n"]);return lt=function(){return e},e}var ct=h.default.div(lt()),st=h.default.ul(ut()),pt=h.default.li(ot(),(function(e){return e.current?"rgba(255,255,255)":"transparent"})),dt=Object(h.default)(p.b)(it()),mt=h.default.div(at()),ft=(h.default.ul(rt()),h.default.li(nt()),Object(d.g)((function(e){var t=e.location,n=e.result;return a.a.createElement(ct,null,a.a.createElement(st,null,a.a.createElement(pt,{current:"?tab=video"===t.search||""===t.search},a.a.createElement(dt,{to:"".concat(t.pathname,"?tab=video")},"Video")),a.a.createElement(pt,{current:"?tab=production"===t.search},a.a.createElement(dt,{to:"".concat(t.pathname,"?tab=production")},"Production")),a.a.createElement(pt,{current:"?tab=cast"===t.search},a.a.createElement(dt,{to:"".concat(t.pathname,"?tab=cast")},"Cast")),a.a.createElement(pt,{current:"?tab=series"===t.search},a.a.createElement(dt,{to:"".concat(t.pathname,"?tab=series")},"Series")),a.a.createElement(pt,{current:"?tab=more"===t.search},a.a.createElement(dt,{to:"".concat(t.pathname,"?tab=more")},"More"))),a.a.createElement(mt,null,"?tab=video"===t.search||""===t.search?a.a.createElement(Be,{result:n}):null,"?tab=production"===t.search?a.a.createElement(tt,{result:n}):null,"?tab=cast"===t.search?"cast here":null,"?tab=series"===t.search?"series here":null,"?tab=more"===t.search?"more here":null))})));function gt(){var e=Object(v.a)(["\n    margin : 0 10px;\n"]);return gt=function(){return e},e}function vt(){var e=Object(v.a)(["\n\n"]);return vt=function(){return e},e}function ht(){var e=Object(v.a)(["\n    font-size : 12px;\n    opacity : 0.7;\n    line-height : 2;\n    width : 70%;\n    margin-bottom : 20px;\n"]);return ht=function(){return e},e}function bt(){var e=Object(v.a)(["\n    font-size : 32px;\n    margin-bottom : 20px;\n"]);return bt=function(){return e},e}function Et(){var e=Object(v.a)(["\n margin : 20px 0;\n"]);return Et=function(){return e},e}function xt(){var e=Object(v.a)(["\n    height : 100%;\n    width : 70%;\n    margin-left : 20px;\n"]);return xt=function(){return e},e}function yt(){var e=Object(v.a)(["\n    background-image : url(",");\n    background-size : cover;\n    background-position : center center;\n    height: 100%;\n    width: 30%;\n    border-radius : 10px;\n"]);return yt=function(){return e},e}function jt(){var e=Object(v.a)(["\n    display : flex;\n    width : 100%;\n    height : 100%;\n    z-index : 1;\n    position : relative;\n"]);return jt=function(){return e},e}function Ot(){var e=Object(v.a)(["\n    position : absolute;\n    top: 0;\n    left : 0;\n    width : 100%;\n    height : 100%;\n    background-image : url(",");\n    background-position : center center;\n    background-size : cover;\n    filter : blur(3px);\n    opacity : 0.5;\n    z-index : 0;\n\n"]);return Ot=function(){return e},e}function wt(){var e=Object(v.a)(["\n    height : calc(100vh - 50px);\n    width : 100%;\n    position : relative;\n    padding : 50px\n"]);return wt=function(){return e},e}var kt=h.default.div(wt()),_t=h.default.div(Ot(),(function(e){return e.bgImg})),St=h.default.div(jt()),Mt=h.default.div(yt(),(function(e){return e.bgImg})),Tt=h.default.div(xt()),Ft=h.default.div(Et()),Rt=h.default.h1(bt()),Ut=h.default.p(ht()),Dt=h.default.span(vt()),zt=h.default.span(gt()),Ct=function(e){var t=e.result,r=(e.error,e.loading);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z.a,null,a.a.createElement("title",null,"Details | Nomflix")),r?a.a.createElement(R,null):a.a.createElement(kt,null,a.a.createElement(_t,{bgImg:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),a.a.createElement(St,null,a.a.createElement(Mt,{bgImg:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(23)}),a.a.createElement(Tt,null,a.a.createElement(Rt,null,t.title?t.title:t.name),a.a.createElement(Ft,null,a.a.createElement(Dt,null,t.release_date?new Date(t.release_date).getFullYear():new Date(t.first_air_date).getFullYear()),a.a.createElement(zt,null,"\xb7"),a.a.createElement(Dt,null,t.runtime?t.runtime:t.episode_run_time[0]," Min"),a.a.createElement(zt,null,"\xb7"),a.a.createElement(Dt,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),a.a.createElement(Ut,null,t.overview),a.a.createElement(ft,{result:t})))))},Pt=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var r;Object(u.a)(this,n);var a=(r=t.call(this,e)).props.location.pathname;return r.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.showDetails()}},{key:"showDetails",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r,a,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,n=parseInt(t),!isNaN(n)){e.next=4;break}return e.abrupt("return",this.props.history.push("/"));case 4:if(r=null,a=this.state.isMovie,e.prev=6,!a){e.next=14;break}return e.next=10,ue(n);case 10:i=e.sent,r=i.data,e.next=18;break;case 14:return e.next=16,de(n);case 16:o=e.sent,r=o.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"cant find information on detail"});case 23:return e.prev=23,this.setState({loading:!1,result:r}),console.log(r),e.finish(23);case 27:case"end":return e.stop()}}),e,this,[[6,20,23,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,r=e.error;return a.a.createElement(Ct,{result:t,loading:n,error:r})}}]),n}(a.a.Component),It=function(){return a.a.createElement(p.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(Ce,null),a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/",exact:!0,component:fe}),a.a.createElement(d.b,{path:"/TV",component:be}),a.a.createElement(d.b,{path:"/Search",component:_e}),a.a.createElement(d.b,{path:"/Movie/:id",component:Pt}),a.a.createElement(d.b,{path:"/Show/:id",component:Pt}),a.a.createElement(d.a,{from:"*",to:"/"}))))},Yt=n(44),Nt=n.n(Yt);function Vt(){var e=Object(v.a)(["\n    ","\n    a {\n        text-decoration:none;\n        color:inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body {\n\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        background-color : rgba(20,20,20,1);\n        color : white;\n        padding-top : 50px;\n    }\n    "]);return Vt=function(){return e},e}var At=Object(h.createGlobalStyle)(Vt(),Nt.a),Bt=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(It,null),a.a.createElement(At,null))}}]),n}(r.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Bt,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.df7982e3.chunk.js.map