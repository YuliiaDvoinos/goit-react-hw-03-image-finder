(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,r){e.exports={Container:"Container_Container__2KgO4"}},57:function(e,t,r){"use strict";r.r(t);var a,n=r(0),c=r.n(n),i=r(23),o=r.n(i),s=r(7),l=r(9),u=r(4),h=r(12),b=r(11),m=r(24),d=r.n(m),p=function(e){var t=e.searchQuery,r=void 0===t?"":t,a=e.page,n=void 0===a?1:a;return d.a.get("https://pixabay.com/api/?q=".concat(r,"&page=").concat(n,"&key=20729636-758ecad9be3e02f0a1d03c2f3&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},g=r(25),j=r.n(g),f=r(1),O=function(e){var t=e.children;return Object(f.jsx)("div",{className:j.a.Container,children:t})};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function S(e,t){var r=e.title,c=e.titleId,i=v(e,["title","titleId"]);return n.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":c},i),r?n.createElement("title",{id:c},r):null,a||(a=n.createElement("path",{d:"M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"})))}var x=n.forwardRef(S),w=(r.p,r(8)),_=r.n(w),k=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleInputChange=function(t){e.setState({query:t.currentTarget.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(f.jsx)("header",{className:_.a.Searchbar,children:Object(f.jsxs)("form",{className:_.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("input",{className:_.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleInputChange}),Object(f.jsx)("button",{type:"submit",className:_.a.SearchFormSubmitBtn,children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:Object(f.jsx)(x,{})})})]})})}}]),r}(n.Component),F=r(5),C=Object(F.a)({image:{width:250,height:200},list__item:{marginTop:10,"&:not(:nth-child(4n + 4))":{marginRight:10}}}),I=function(e){var t=e.id,r=e.url,a=e.alt,n=C();return Object(f.jsx)("li",{className:n.list__item,children:Object(f.jsx)("img",{src:r,alt:a,className:n.image})},t)},N=Object(F.a)({list:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:0}}),Q=function(e){var t=e.images,r=N();return Object(f.jsx)("ul",{className:r.list,children:t.map((function(e){var t=e.id,r=e.webformatURL,a=e.tags;return Object(f.jsx)(I,{id:t,url:r,alt:a})}))})},q=Object(F.a)({btn:{display:"block",margin:"0 auto",width:100,height:40,border:"1px solid gray",borderRadius:4,background:"transparent",cursor:"pointer","&:hover":{background:"darkgray"}}}),E=function(e){var t=e.loadMore,r=q();return Object(f.jsx)("button",{type:"button",onClick:t,className:r.btn,children:"Load more"})},L=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,searchQuery:"",isLoading:!1,error:null},e.fetchImages=function(){var t=e.state,r=t.page,a={searchQuery:t.searchQuery,page:r};e.setState({isLoading:!0}),p(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onChangeQuery=function(t){e.setState({searchQuery:t,page:1,images:[],error:null})},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,r=e.isLoading,a=e.error,n=t.length>0&&!r;return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(O,{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{onSubmit:this.onChangeQuery}),a&&Object(f.jsxs)("h2",{children:["error ",a]}),Object(f.jsx)(Q,{images:t}),r&&Object(f.jsx)("p",{children:"loading..."}),n&&Object(f.jsx)(E,{loadMore:this.fetchImages})]})})})}}]),r}(n.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,r){e.exports={Searchbar:"Searchbar_Searchbar__Vb90F",SearchFormInput:"Searchbar_SearchFormInput__2Ov1A",SearchForm:"Searchbar_SearchForm__2kl99",SearchFormSubmitBtn:"Searchbar_SearchFormSubmitBtn__yW0kv"}}},[[57,1,2]]]);
//# sourceMappingURL=main.aaeb196b.chunk.js.map