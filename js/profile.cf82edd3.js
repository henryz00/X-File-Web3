(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),c=Math.floor,a=r("".charAt),o=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,b){var f=n+e.length,v=r.length,p=u;return void 0!==d&&(d=i(d),p=l),o(b,p,(function(i,o){var l;switch(a(o,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,f);case"<":l=d[s(o,1,-1)];break;default:var u=+o;if(0===u)return i;if(u>v){var b=c(u/10);return 0===b?i:b<=v?void 0===r[b-1]?a(o,1):r[b-1]+a(o,1):i}l=r[u-1]}return void 0===l?"":l}))}},1055:function(e,t,n){"use strict";n("e28d")},1148:function(e,t,n){"use strict";var r=n("da84"),i=n("5926"),c=n("577e"),a=n("1d80"),o=r.RangeError;e.exports=function(e){var t=c(a(this)),n="",r=i(e);if(r<0||r==1/0)throw o("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),c=n("825a"),a=n("1626"),o=n("c6b6"),s=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var r=i(n,e,t);return null!==r&&c(r),r}if("RegExp"===o(e))return i(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"1ae9":function(e,t,n){},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"42ff":function(e,t,n){"use strict";n("1ae9")},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),c=n("e330"),a=n("d784"),o=n("d039"),s=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),b=n("577e"),f=n("1d80"),v=n("8aa5"),p=n("dc4a"),h=n("0cb2"),O=n("14c3"),j=n("b622"),g=j("replace"),x=Math.max,m=Math.min,w=c([].concat),y=c([].push),k=c("".indexOf),$=c("".slice),T=function(e){return void 0===e?e:String(e)},A=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),N=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,n){var c=M?"$":"$0";return[function(e,n){var r=f(this),c=void 0==e?void 0:p(e,g);return c?i(c,e,r,n):i(t,b(r),e,n)},function(e,i){var a=s(this),o=b(e);if("string"==typeof i&&-1===k(i,c)&&-1===k(i,"$<")){var f=n(t,a,o,i);if(f.done)return f.value}var p=l(i);p||(i=b(i));var j=a.global;if(j){var g=a.unicode;a.lastIndex=0}var A=[];while(1){var M=O(a,o);if(null===M)break;if(y(A,M),!j)break;var N=b(M[0]);""===N&&(a.lastIndex=v(o,d(a.lastIndex),g))}for(var R="",B=0,L=0;L<A.length;L++){M=A[L];for(var S=b(M[0]),_=x(m(u(M.index),o.length),0),D=[],E=1;E<M.length;E++)y(D,T(M[E]));var I=M.groups;if(p){var C=w([S],D,_,o);void 0!==I&&y(C,I);var F=b(r(i,void 0,C))}else F=h(S,o,_,D,I,i);_>=B&&(R+=$(o,B,_)+F,B=_+S.length)}return R+$(o,B)}]}),!N||!A||M)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("e330"),a=n("5926"),o=n("408a"),s=n("1148"),l=n("d039"),u=i.RangeError,d=i.String,b=Math.floor,f=c(s),v=c("".slice),p=c(1..toFixed),h=function(e,t,n){return 0===t?n:t%2===1?h(e,t-1,n*e):h(e*e,t/2,n)},O=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},j=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=b(i/1e7)},g=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=b(r/t),r=r%t*1e7},x=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=d(e[t]);n=""===n?r:n+f("0",7-r.length)+r}return n},m=l((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!l((function(){p({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,n,r,i,c=o(this),s=a(e),l=[0,0,0,0,0,0],b="",p="0";if(s<0||s>20)throw u("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return d(c);if(c<0&&(b="-",c=-c),c>1e-21)if(t=O(c*h(2,69,1))-69,n=t<0?c*h(2,-t,1):c/h(2,t,1),n*=4503599627370496,t=52-t,t>0){j(l,0,n),r=s;while(r>=7)j(l,1e7,0),r-=7;j(l,h(10,r,1),0),r=t-1;while(r>=23)g(l,1<<23),r-=23;g(l,1<<r),j(l,1,1),g(l,2),p=x(l)}else j(l,0,n),j(l,1<<-t,0),p=x(l)+f("0",s);return s>0?(i=p.length,p=b+(i<=s?"0."+f("0",s-i)+p:v(p,0,i-s)+"."+v(p,i-s))):p=b+p,p}})},c66d:function(e,t,n){"use strict";n.r(t);n("b680");var r=n("7a23"),i=function(e){return Object(r["w"])("data-v-42457b17"),e=e(),Object(r["t"])(),e},c={class:"header flex row justify-between max-w-7xl mx-auto p-20"},a={class:"flex w-auto max-w-7xl mx-auto px-20"},o={class:"w-1/3 text-right px-5 border-r-2 mr-10 border-dashed overflow-hidden overflow-ellipsis"},s={key:0},l=["src"],u={class:"font-display font-extrabold text-mainGreen text-3xl"},d={key:1,class:"my-5"},b=i((function(){return Object(r["g"])("span",null,"Activity Level - ",-1)})),f=["src"],v={key:2,class:"leading-10"},p={class:"leading-5 text-xs"},h={class:"w-2/3"},O={key:0,class:"border grid grid-cols-8 p-5 mb-10"},j=i((function(){return Object(r["g"])("div",{class:"text-5xl pt-2"},"👋",-1)})),g={class:"col-span-7 font-display text-2xl text-left"},x={class:"font-extrabold"},m=i((function(){return Object(r["g"])("div",{class:"text-lg"},"This is your ether profile page",-1)})),w=i((function(){return Object(r["g"])("div",{class:"text-left text-3xl font-medium"},"Titles",-1)})),y={key:1,class:"border bg-mainBg py-3 font-display text-lg"},k={key:0,class:"animate-pulse"},$={key:1};function T(e,t,n,i,T,A){var M,N=Object(r["B"])("Logo"),R=Object(r["B"])("SearchBar"),B=Object(r["B"])("UserStatus"),L=Object(r["B"])("TitleList");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["h"])(N),Object(r["h"])(R,{class:"flex-grow"}),Object(r["h"])(B)]),Object(r["g"])("div",a,[Object(r["g"])("div",o,[e.profile?(Object(r["s"])(),Object(r["f"])("div",s,[Object(r["g"])("img",{class:"icon",src:"/img/lvs/lv"+e.profile.duration_level+".jpeg"},null,8,l)])):Object(r["e"])("",!0),Object(r["g"])("div",u,Object(r["D"])(e.ens)+".eth ",1),e.profile?(Object(r["s"])(),Object(r["f"])("div",d,[b,Object(r["g"])("img",{class:"icon",src:"/img/lvs/ac"+e.profile.active_level+".jpeg"},null,8,f),Object(r["g"])("div",null,"Account Value - "+Object(r["D"])(e.profile.tx_sum.toFixed(2))+" ETH",1),Object(r["g"])("div",null,"Transaction Count - "+Object(r["D"])(e.profile.tx_count),1)])):(Object(r["s"])(),Object(r["f"])("div",v,"No collections yet")),Object(r["g"])("div",p,Object(r["D"])(e.address),1)]),Object(r["g"])("div",h,[e.isOwner?(Object(r["s"])(),Object(r["f"])("div",O,[j,Object(r["g"])("div",g,[Object(r["g"])("div",x,"Hello, "+Object(r["D"])(e.ens),1),m])])):Object(r["e"])("",!0),w,Object(r["h"])(L,{titles:e.titles,isOwner:e.isOwner},null,8,["titles","isOwner"]),null!==(M=e.titles)&&void 0!==M&&M.length?Object(r["e"])("",!0):(Object(r["s"])(),Object(r["f"])("div",y,[e.loading?(Object(r["s"])(),Object(r["f"])("span",k,"Loading...")):(Object(r["s"])(),Object(r["f"])("span",$,"No titles found for this domain"))]))])])],64)}var A=n("1da1"),M=n("d4ec"),N=n("bee2"),R=n("262e"),B=n("2caf"),L=(n("96cf"),n("ac1f"),n("5319"),n("b0c0"),n("d3b7"),n("9ab4")),S=n("ce1f"),_=n("14ac"),D=n("2241"),E=n("00cd"),I=function(e){return Object(r["w"])("data-v-52fb6710"),e=e(),Object(r["t"])(),e},C={key:0,class:"border bg-mainBg py-3"},F={class:"grid grid-cols-8"},G={class:"number"},H={class:"title border-dashed"},J={key:0,class:"grid grid-cols-8 cursor-pointer"},U=I((function(){return Object(r["g"])("div",{class:"number"},"+",-1)}));function P(e,t,n,i,c,a){var o,s=Object(r["B"])("NewTitleModal");return Object(r["s"])(),Object(r["f"])(r["a"],null,[e.isOwner||null!==(o=e.titles)&&void 0!==o&&o.length?(Object(r["s"])(),Object(r["f"])("div",C,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.titles,(function(e,t){return Object(r["s"])(),Object(r["f"])("div",{key:e},[Object(r["g"])("div",F,[Object(r["g"])("div",G,Object(r["D"])(t+1),1),Object(r["g"])("div",H,Object(r["D"])(e),1)])])})),128)),e.isOwner?(Object(r["s"])(),Object(r["f"])("div",J,[U,Object(r["g"])("div",{class:"title opacity-60 text-mainGreen",onClick:t[0]||(t[0]=function(){return e.openNewTitleModal&&e.openNewTitleModal.apply(e,arguments)})}," Add a new title ")])):Object(r["e"])("",!0)])):Object(r["e"])("",!0),Object(r["h"])(s,{ref:"modal"},null,512)],64)}var V=Object(r["g"])("div",{class:"mt-5"}," Your title describes you, it can be anything you want, but it cannot be changed once minted. The more title you have, the more expensive a new title will be. ",-1);function q(e,t,n,i,c,a){var o=Object(r["B"])("Modal");return e.show?(Object(r["s"])(),Object(r["d"])(o,{key:0,ref:"modal",modalTitle:"Add new Title",onClosed:t[3]||(t[3]=function(t){return e.show=!1})},{default:Object(r["H"])((function(){return[Object(r["I"])(Object(r["g"])("input",{class:"border w-full h-12 px-3",placeholder:"type your title here","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.content=t}),id:"ens_title",onKeyup:t[1]||(t[1]=Object(r["J"])((function(){return e.doSearch&&e.doSearch.apply(e,arguments)}),["enter"]))},null,544),[[r["F"],e.content]]),V,Object(r["g"])("div",{class:Object(r["o"])(["red-button mt-8 w-40 text-center mx-auto",[e.content?"":"opacity-50"]]),onClick:t[2]||(t[2]=function(){return e.submitTitle&&e.submitTitle.apply(e,arguments)})}," Submit ",2)]})),_:1},512)):Object(r["e"])("",!0)}var z=Object(r["g"])("div",{class:"overlay"},null,-1),K={class:"modal"},W={class:"font-display font-extrabold text-3xl text-mainGreen mb-12"};function Y(e,t,n,i,c,a){return Object(r["s"])(),Object(r["f"])(r["a"],null,[z,Object(r["g"])("div",K,[Object(r["g"])("div",W,Object(r["D"])(e.modalTitle),1),Object(r["g"])("div",{class:"font-display font-extrabold text-3xl text-mainRed cursor-pointer absolute right-10 top-10",onClick:t[0]||(t[0]=function(t){return e.$emit("closed")})}," x "),Object(r["A"])(e.$slots,"default")])],64)}var Q=function(e){Object(R["a"])(n,e);var t=Object(B["a"])(n);function n(){return Object(M["a"])(this,n),t.apply(this,arguments)}return Object(N["a"])(n)}(S["b"]);Q=Object(L["a"])([Object(S["a"])({props:{modalTitle:String},emits:["closed"]})],Q);var X=Q,Z=n("6b0d"),ee=n.n(Z),te=ee()(X,[["render",Y]]),ne=function(e){Object(R["a"])(n,e);var t=Object(B["a"])(n);function n(){var e;return Object(M["a"])(this,n),e=t.apply(this,arguments),e.show=!1,e.content="",e}return Object(N["a"])(n,[{key:"open",value:function(){this.show=!0}},{key:"submitTitle",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null===(t=this.$store.state.ensName)||void 0===t?void 0:t.replace(".eth",""),!this.content||!n){e.next=18;break}return this.show=!1,this.$store.commit("setMetaLoading",!0),e.prev=4,e.next=7,null===(r=this.$store.state.solApp)||void 0===r?void 0:r.addTitle(n,this.content,{from:this.$store.state.account});case 7:i=e.sent,console.warn(i),this.content="",window.location.reload(),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](4),this.show=!0,console.error(e.t0);case 17:this.$store.commit("setMetaLoading",!1);case 18:case"end":return e.stop()}}),e,this,[[4,13]])})));function t(){return e.apply(this,arguments)}return t}()}]),n}(S["b"]);ne=Object(L["a"])([Object(S["a"])({components:{Modal:te},props:{}})],ne);var re=ne,ie=ee()(re,[["render",q]]),ce=function(e){Object(R["a"])(n,e);var t=Object(B["a"])(n);function n(){return Object(M["a"])(this,n),t.apply(this,arguments)}return Object(N["a"])(n,[{key:"openNewTitleModal",value:function(){this.$refs.modal.open()}}]),n}(S["b"]);ce=Object(L["a"])([Object(S["a"])({components:{NewTitleModal:ie},props:{titles:{type:Array,default:[]},isOwner:{type:Boolean,default:!1}}})],ce);var ae=ce,oe=(n("42ff"),ee()(ae,[["render",P],["__scopeId","data-v-52fb6710"]])),se=function(e){Object(R["a"])(n,e);var t=Object(B["a"])(n);function n(){var e;return Object(M["a"])(this,n),e=t.apply(this,arguments),e.titles=[],e.ens="",e.address="Loading Address...",e.loading=!0,e.profile=null,e}return Object(N["a"])(n,[{key:"mounted",value:function(){this.load()}},{key:"load",value:function(){this.getTitles(),this.getProfile()}},{key:"isOwner",get:function(){return this.$store.state.ensName===this.ens+".eth"}},{key:"getTitles",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.$route.params.id,r){e.next=3;break}return e.abrupt("return");case 3:return this.ens=r.toLowerCase().replace(".eth",""),this.loading=!0,e.next=7,null===(t=this.$store.state.solApp)||void 0===t?void 0:t.getTitles(this.ens);case 7:return this.titles=e.sent,this.loading=!1,e.next=11,null===(n=this.$store.state.ens)||void 0===n?void 0:n.name(this.ens+".eth").getAddress();case 11:this.address=e.sent,"0x0000000000000000000000000000000000000000"==this.address&&(this.address="Account not found");case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getProfile",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-where.herokuapp.com/http://43.130.232.102:8080/q?ens=".concat(this.ens,".eth"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),0===(null===n||void 0===n?void 0:n.status)&&(this.profile=n.data);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(S["b"]);se=Object(L["a"])([Object(S["a"])({components:{SearchBar:_["a"],Logo:D["a"],UserStatus:E["a"],TitleList:oe},props:{},watch:{"$store.state.solApp":function(){this.load()},$route:function(){this.profile=null,this.titles=[],this.address="Loading Address...",this.load()}}})],se);var le=se;n("1055"),t["default"]=ee()(le,[["render",T],["__scopeId","data-v-42457b17"]])},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),c=n("9263"),a=n("d039"),o=n("b622"),s=n("9112"),l=o("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var b=o(e),f=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),v=f&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!v||n){var p=r(/./[b]),h=t(b,""[e],(function(e,t,n,i,a){var o=r(e),s=t.exec;return s===c||s===u.exec?f&&!a?{done:!0,value:p(t,n,i)}:{done:!0,value:o(n,t,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(u,b,h[1])}d&&s(u[b],"sham",!0)}},e28d:function(e,t,n){}}]);
//# sourceMappingURL=profile.cf82edd3.js.map