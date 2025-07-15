var cS=Object.create;var wh=Object.defineProperty,lS=Object.defineProperties,uS=Object.getOwnPropertyDescriptor,dS=Object.getOwnPropertyDescriptors,fS=Object.getOwnPropertyNames,Oy=Object.getOwnPropertySymbols,hS=Object.getPrototypeOf,Fy=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable;var Ly=(n,e,t)=>e in n?wh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,at=(n,e)=>{for(var t in e||={})Fy.call(e,t)&&Ly(n,t,e[t]);if(Oy)for(var t of Oy(e))pS.call(e,t)&&Ly(n,t,e[t]);return n},Xt=(n,e)=>lS(n,dS(e));var mS=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var gS=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of fS(e))!Fy.call(n,r)&&r!==t&&wh(n,r,{get:()=>e[r],enumerable:!(i=uS(e,r))||i.enumerable});return n};var _S=(n,e,t)=>(t=n!=null?cS(hS(n)):{},gS(e||!n||!n.__esModule?wh(t,"default",{value:n,enumerable:!0}):t,n));var jt=(n,e,t)=>new Promise((i,r)=>{var o=c=>{try{a(t.next(c))}catch(l){r(l)}},s=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((t=t.apply(n,e)).next())});var QM=mS((Ty,JM)=>{"use strict";(function(n,e){typeof Ty=="object"?JM.exports=e():typeof define=="function"&&define.amd?define(e):n.Alea=e()})(Ty,function(){"use strict";return n.importState=function(t){var i=new n;return i.importState(t),i},n;function n(){return function(t){var i=0,r=0,o=0,s=1;t.length==0&&(t=[+new Date]);var a=e();i=a(" "),r=a(" "),o=a(" ");for(var c=0;c<t.length;c++)i-=a(t[c]),i<0&&(i+=1),r-=a(t[c]),r<0&&(r+=1),o-=a(t[c]),o<0&&(o+=1);a=null;var l=function(){var u=2091639*i+s*23283064365386963e-26;return i=r,r=o,o=u-(s=u|0)};return l.next=l,l.uint32=function(){return l()*4294967296},l.fract53=function(){return l()+(l()*2097152|0)*11102230246251565e-32},l.version="Alea 0.9",l.args=t,l.exportState=function(){return[i,r,o,s]},l.importState=function(u){i=+u[0]||0,r=+u[1]||0,o=+u[2]||0,s=+u[3]||0},l}(Array.prototype.slice.call(arguments))}function e(){var t=4022871197,i=function(r){r=r.toString();for(var o=0;o<r.length;o++){t+=r.charCodeAt(o);var s=.02519603282416938*t;t=s>>>0,s-=t,s*=t,t=s>>>0,s-=t,t+=s*4294967296}return(t>>>0)*23283064365386963e-26};return i.version="Mash 0.9",i}})});var Th;function Ch(){return Th}function qi(n){let e=Th;return Th=n,e}var yS=Symbol("NotFound"),Qc=class extends Error{name="\u0275NotFound";constructor(e){super(e)}};function ts(n){return n===yS||n?.name==="\u0275NotFound"}var Dh=null;var ky=1;var ro=Symbol("SIGNAL");function Ye(n){let e=Dh;return Dh=n,e}function Ih(){return Dh}var ha={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ah(n){if(!(Nh(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===ky)){if(!n.producerMustRecompute(n)&&!nl(n)){el(n);return}n.producerRecomputeValue(n),el(n)}}function el(n){n.dirty=!1,n.lastCleanEpoch=ky}function pa(n){return n&&(n.nextProducerIndex=0),Ye(n)}function tl(n,e){if(Ye(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Nh(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Rh(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function nl(n){Ph(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Ah(t),i!==t.version))return!0}return!1}function il(n){if(Ph(n),Nh(n))for(let e=0;e<n.producerNode.length;e++)Rh(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Rh(n,e){if(vS(n),n.liveConsumerNode.length===1&&xS(n))for(let i=0;i<n.producerNode.length;i++)Rh(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ph(r),r.producerIndexOfThis[i]=e}}function Nh(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ph(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function vS(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function xS(n){return n.producerNode!==void 0}function bS(){throw new Error}var ES=bS;function Oh(n){ES=n}function Ze(n){return typeof n=="function"}function rl(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ol=rl(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function oo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ot=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ze(i))try{i()}catch(o){e=o instanceof ol?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Uy(o)}catch(s){e=e??[],s instanceof ol?e=[...e,...s.errors]:e.push(s)}}if(e)throw new ol(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Uy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&oo(t,e)}remove(e){let{_finalizers:t}=this;t&&oo(t,e),e instanceof n&&e._removeParent(this)}};Ot.EMPTY=(()=>{let n=new Ot;return n.closed=!0,n})();var Lh=Ot.EMPTY;function sl(n){return n instanceof Ot||n&&"closed"in n&&Ze(n.remove)&&Ze(n.add)&&Ze(n.unsubscribe)}function Uy(n){Ze(n)?n():n.unsubscribe()}var _i={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ns={setTimeout(n,e,...t){let{delegate:i}=ns;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ns;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function al(n){ns.setTimeout(()=>{let{onUnhandledError:e}=_i;if(e)e(n);else throw n})}function ma(){}var By=Fh("C",void 0,void 0);function Vy(n){return Fh("E",void 0,n)}function Hy(n){return Fh("N",n,void 0)}function Fh(n,e,t){return{kind:n,value:e,error:t}}var so=null;function is(n){if(_i.useDeprecatedSynchronousErrorHandling){let e=!so;if(e&&(so={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=so;if(so=null,t)throw i}}else n()}function zy(n){_i.useDeprecatedSynchronousErrorHandling&&so&&(so.errorThrown=!0,so.error=n)}var ao=class extends Ot{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,sl(e)&&e.add(this)):this.destination=wS}static create(e,t,i){return new Xi(e,t,i)}next(e){this.isStopped?Uh(Hy(e),this):this._next(e)}error(e){this.isStopped?Uh(Vy(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Uh(By,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},MS=Function.prototype.bind;function kh(n,e){return MS.call(n,e)}var Bh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){cl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){cl(i)}else cl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){cl(t)}}},Xi=class extends ao{constructor(e,t,i){super();let r;if(Ze(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&_i.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&kh(e.next,o),error:e.error&&kh(e.error,o),complete:e.complete&&kh(e.complete,o)}):r=e}this.destination=new Bh(r)}};function cl(n){_i.useDeprecatedSynchronousErrorHandling?zy(n):al(n)}function SS(n){throw n}function Uh(n,e){let{onStoppedNotification:t}=_i;t&&ns.setTimeout(()=>t(n,e))}var wS={closed:!0,next:ma,error:SS,complete:ma};var rs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Yi(n){return n}function Gy(n){return n.length===0?Yi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var mt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=CS(t)?t:new Xi(t,i,r);return is(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=jy(i),new i((r,o)=>{let s=new Xi({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[rs](){return this}pipe(...t){return Gy(t)(this)}toPromise(t){return t=jy(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function jy(n){var e;return(e=n??_i.Promise)!==null&&e!==void 0?e:Promise}function TS(n){return n&&Ze(n.next)&&Ze(n.error)&&Ze(n.complete)}function CS(n){return n&&n instanceof ao||TS(n)&&sl(n)}function DS(n){return Ze(n?.lift)}function Mt(n){return e=>{if(DS(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Lt(n,e,t,i,r){return new Vh(n,e,t,i,r)}var Vh=class extends ao{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Wy=rl(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ai=(()=>{class n extends mt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ll(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Wy}next(t){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){is(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Lh:(this.currentObservers=null,o.push(t),new Ot(()=>{this.currentObservers=null,oo(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new mt;return t.source=this,t}}return n.create=(e,t)=>new ll(e,t),n})(),ll=class extends ai{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Lh}};var jn=class extends ai{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Hh={now(){return(Hh.delegate||Date).now()},delegate:void 0};var ul=class extends Ot{constructor(e,t){super()}schedule(e,t=0){return this}};var ga={setInterval(n,e,...t){let{delegate:i}=ga;return i?.setInterval?i.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=ga;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var dl=class extends ul{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var i;if(this.closed)return this;this.state=e;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,t)),this.pending=!0,this.delay=t,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,i=0){return ga.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,t,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return t;t!=null&&ga.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(e,t);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i=!1,r;try{this.work(e)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,oo(i,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var os=class n{constructor(e,t=n.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,i){return new this.schedulerActionCtor(this,e).schedule(i,t)}};os.now=Hh.now;var fl=class extends os{constructor(e,t=os.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}};var $y=new fl(dl);var qy=new mt(n=>n.complete());function Xy(n){return n&&Ze(n.schedule)}function Yy(n){return n[n.length-1]}function hl(n){return Ze(Yy(n))?n.pop():void 0}function vr(n){return Xy(Yy(n))?n.pop():void 0}function Ky(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(d){s(d)}}function c(u){try{l(i.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Zy(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function co(n){return this instanceof co?(this.v=n,this):new co(n)}function Jy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){o.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(o[0][3],y)}}function l(h){h.value instanceof co?Promise.resolve(h.value.v).then(u,d):f(o[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Qy(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Zy=="function"?Zy(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var pl=n=>n&&typeof n.length=="number"&&typeof n!="function";function ml(n){return Ze(n?.then)}function gl(n){return Ze(n[rs])}function _l(n){return Symbol.asyncIterator&&Ze(n?.[Symbol.asyncIterator])}function yl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function IS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var vl=IS();function xl(n){return Ze(n?.[vl])}function bl(n){return Jy(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield co(t.read());if(r)return yield co(void 0);yield yield co(i)}}finally{t.releaseLock()}})}function El(n){return Ze(n?.getReader)}function Yt(n){if(n instanceof mt)return n;if(n!=null){if(gl(n))return AS(n);if(pl(n))return RS(n);if(ml(n))return NS(n);if(_l(n))return ev(n);if(xl(n))return PS(n);if(El(n))return OS(n)}throw yl(n)}function AS(n){return new mt(e=>{let t=n[rs]();if(Ze(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function RS(n){return new mt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function NS(n){return new mt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,al)})}function PS(n){return new mt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function ev(n){return new mt(e=>{LS(n,e).catch(t=>e.error(t))})}function OS(n){return ev(bl(n))}function LS(n,e){var t,i,r,o;return Ky(this,void 0,void 0,function*(){try{for(t=Qy(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Rn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function Ml(n,e=0){return Mt((t,i)=>{t.subscribe(Lt(i,r=>Rn(i,n,()=>i.next(r),e),()=>Rn(i,n,()=>i.complete(),e),r=>Rn(i,n,()=>i.error(r),e)))})}function Sl(n,e=0){return Mt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function tv(n,e){return Yt(n).pipe(Sl(e),Ml(e))}function nv(n,e){return Yt(n).pipe(Sl(e),Ml(e))}function iv(n,e){return new mt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function rv(n,e){return new mt(t=>{let i;return Rn(t,e,()=>{i=n[vl](),Rn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>Ze(i?.return)&&i.return()})}function wl(n,e){if(!n)throw new Error("Iterable cannot be null");return new mt(t=>{Rn(t,e,()=>{let i=n[Symbol.asyncIterator]();Rn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function ov(n,e){return wl(bl(n),e)}function sv(n,e){if(n!=null){if(gl(n))return tv(n,e);if(pl(n))return iv(n,e);if(ml(n))return nv(n,e);if(_l(n))return wl(n,e);if(xl(n))return rv(n,e);if(El(n))return ov(n,e)}throw yl(n)}function xr(n,e){return e?sv(n,e):Yt(n)}function Zi(...n){let e=vr(n);return xr(n,e)}function zh(n,e){let t=Ze(n)?n:()=>n,i=r=>r.error(t());return new mt(e?r=>e.schedule(i,0,r):i)}function Ft(n,e){return Mt((t,i)=>{let r=0;t.subscribe(Lt(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:FS}=Array;function kS(n,e){return FS(e)?n(...e):n(e)}function Tl(n){return Ft(e=>kS(n,e))}var{isArray:US}=Array,{getPrototypeOf:BS,prototype:VS,keys:HS}=Object;function Cl(n){if(n.length===1){let e=n[0];if(US(e))return{args:e,keys:null};if(zS(e)){let t=HS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function zS(n){return n&&typeof n=="object"&&BS(n)===VS}function Dl(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Gh(...n){let e=vr(n),t=hl(n),{args:i,keys:r}=Cl(n);if(i.length===0)return xr([],e);let o=new mt(GS(i,e,r?s=>Dl(r,s):Yi));return t?o.pipe(Tl(t)):o}function GS(n,e,t=Yi){return i=>{av(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)av(e,()=>{let l=xr(n[c],e),u=!1;l.subscribe(Lt(i,d=>{o[c]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function av(n,e,t){n?Rn(t,n,e):e()}function cv(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{o&&e.next(y),l++;let m=!1;Yt(t(y,u++)).subscribe(Lt(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?Rn(e,s,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Lt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function ss(n,e,t=1/0){return Ze(e)?ss((i,r)=>Ft((o,s)=>e(i,o,r,s))(Yt(n(i,r))),t):(typeof e=="number"&&(t=e),Mt((i,r)=>cv(i,r,n,t)))}function lv(n=1/0){return ss(Yi,n)}function uv(){return lv(1)}function as(...n){return uv()(xr(n,vr(n)))}function jh(...n){let e=hl(n),{args:t,keys:i}=Cl(n),r=new mt(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let d=!1;Yt(t[u]).subscribe(Lt(o,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||o.next(i?Dl(i,a):a),o.complete())}))}});return e?r.pipe(Tl(e)):r}function _a(n,e){return Mt((t,i)=>{let r=0;t.subscribe(Lt(i,o=>n.call(e,o,r++)&&i.next(o)))})}function Il(n){return Mt((e,t)=>{let i=null,r=!1,o;i=e.subscribe(Lt(t,void 0,void 0,s=>{o=Yt(n(s,Il(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function Wh(n,e){return Ze(e)?ss(n,e,1):ss(n,1)}function $h(n,e=$y){return Mt((t,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+n,u=e.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}a()}t.subscribe(Lt(i,l=>{o=l,s=e.now(),r||(r=e.schedule(c,n),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function ya(n){return n<=0?()=>qy:Mt((e,t)=>{let i=0;e.subscribe(Lt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Al(n){return Mt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Xh(n={}){let{connector:e=()=>new ai,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return o=>{let s,a,c,l=0,u=!1,d=!1,f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=c=void 0,u=d=!1},g=()=>{let y=s;h(),y?.unsubscribe()};return Mt((y,m)=>{l++,!d&&!u&&f();let p=c=c??e();m.add(()=>{l--,l===0&&!d&&!u&&(a=qh(g,r))}),p.subscribe(m),!s&&l>0&&(s=new Xi({next:w=>p.next(w),error:w=>{d=!0,f(),a=qh(h,t,w),p.error(w)},complete:()=>{u=!0,f(),a=qh(h,i),p.complete()}}),Yt(y).subscribe(s))})(o)}}function qh(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new Xi({next:()=>{i.unsubscribe(),n()}});return Yt(e(...t)).subscribe(i)}function Yh(n){return _a((e,t)=>n<=t)}function Zh(...n){let e=vr(n);return Mt((t,i)=>{(e?as(n,t,e):as(n,t)).subscribe(i)})}function Kh(n){return Mt((e,t)=>{Yt(n).subscribe(Lt(t,()=>t.complete(),ma)),!t.closed&&e.subscribe(t)})}function va(n,e,t){let i=Ze(n)||e||t?{next:n,error:e,complete:t}:n;return i?Mt((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(Lt(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Yi}function dv(n){let e=Ye(null);try{return n()}finally{Ye(e)}}var Fl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ne=class extends Error{code;constructor(e,t){super(Ea(e,t)),this.code=e}};function YS(n){return`NG0${Math.abs(n)}`}function Ea(n,e){return`${YS(n)}${e?": "+e:""}`}var ls=globalThis;function Dt(n){for(let e in n)if(n[e]===Dt)return e;throw Error("")}function Nn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Nn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function kl(n,e){return n?e?`${n} ${e}`:n:e||""}var ZS=Dt({__forward_ref__:Dt});function Ul(n){return n.__forward_ref__=Ul,n.toString=function(){return Nn(this())},n}function Wn(n){return gv(n)?n():n}function gv(n){return typeof n=="function"&&n.hasOwnProperty(ZS)&&n.__forward_ref__===Ul}function _v(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function Ve(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function On(n){return{providers:n.providers||[],imports:n.imports||[]}}function Bl(n){return KS(n,Vl)}function KS(n,e){return n.hasOwnProperty(e)&&n[e]||null}function JS(n){let e=n?.[Vl]??null;return e||null}function Qh(n){return n&&n.hasOwnProperty(Nl)?n[Nl]:null}var Vl=Dt({\u0275prov:Dt}),Nl=Dt({\u0275inj:Dt}),je=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ve({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function dp(n){return n&&!!n.\u0275providers}var fp=Dt({\u0275cmp:Dt}),hp=Dt({\u0275dir:Dt}),pp=Dt({\u0275pipe:Dt}),mp=Dt({\u0275mod:Dt}),ep=Dt({\u0275fac:Dt}),mo=Dt({__NG_ELEMENT_ID__:Dt}),hv=Dt({__NG_ENV_ID__:Dt});function Hl(n){return typeof n=="string"?n:n==null?"":String(n)}function yv(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Hl(n)}function gp(n,e){throw new Ne(-200,n)}function zl(n,e){throw new Ne(-201,!1)}var tp;function vv(){return tp}function bn(n){let e=tp;return tp=n,e}function _p(n,e,t){let i=Bl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;zl(n,"Injector")}var QS={},lo=QS,np="__NG_DI_FLAG__",ip=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=uo(t)||0;try{return this.injector.get(e,i&8?null:lo,i)}catch(r){if(ts(r))return r;throw r}}},Pl="ngTempTokenPath",ew="ngTokenPath",tw=/\n/gm,nw="\u0275",pv="__source";function iw(n,e=0){let t=Ch();if(t===void 0)throw new Ne(-203,!1);if(t===null)return _p(n,void 0,e);{let i=rw(e),r=t.retrieve(n,i);if(ts(r)){if(i.optional)return null;throw r}return r}}function ke(n,e=0){return(vv()||iw)(Wn(n),e)}function pe(n,e){return ke(n,uo(e))}function uo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function rw(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function rp(n){let e=[];for(let t=0;t<n.length;t++){let i=Wn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ne(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=ow(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(ke(r,o))}else e.push(ke(i))}return e}function yp(n,e){return n[np]=e,n.prototype[np]=e,n}function ow(n){return n[np]}function sw(n,e,t,i){let r=n[Pl];throw e[pv]&&r.unshift(e[pv]),n.message=aw(`
`+n.message,r,t,i),n[ew]=r,n[Pl]=null,n}function aw(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==nw?n.slice(2):n;let r=Nn(e);if(Array.isArray(e))r=e.map(Nn).join(" -> ");else if(typeof e=="object"){let o=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s];o.push(s+":"+(typeof a=="string"?JSON.stringify(a):Nn(a)))}r=`{${o.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(tw,`
  `)}`}function fo(n,e){let t=n.hasOwnProperty(ep);return t?n[ep]:null}function xv(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function bv(n){return n.flat(Number.POSITIVE_INFINITY)}function Gl(n,e){n.forEach(t=>Array.isArray(t)?Gl(t,e):e(t))}function vp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ma(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Ev(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function Mv(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let o=r-2;n[r]=n[o],r--}n[e]=t,n[e+1]=i}}function jl(n,e,t){let i=us(n,e);return i>=0?n[i|1]=t:(i=~i,Mv(n,i,e,t)),i}function Wl(n,e){let t=us(n,e);if(t>=0)return n[t|1]}function us(n,e){return cw(n,e,1)}function cw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<t];if(e===s)return o<<t;s>e?r=o:i=o+1}return~(r<<t)}var go={},Pn=[],Er=new je(""),xp=new je("",-1),bp=new je(""),ba=class{get(e,t=lo){if(t===lo)throw new Qc(`NullInjectorError: No provider for ${Nn(e)}!`);return t}};function Sv(n){return n[mp]||null}function _o(n){return n[fp]||null}function Ep(n){return n[hp]||null}function wv(n){return n[pp]||null}function Tv(...n){return{\u0275providers:Mp(!0,n),\u0275fromNgModule:!0}}function Mp(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return Gl(e,s=>{let a=s;Ol(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Cv(r,o),t}function Cv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Sp(r,o=>{e(o,i)})}}function Ol(n,e,t,i){if(n=Wn(n),!n)return!1;let r=null,o=Qh(n),s=!o&&_o(n);if(!o&&!s){let c=n.ngModule;if(o=Qh(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Ol(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;try{Gl(o.imports,u=>{Ol(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Cv(l,e)}if(!a){let l=fo(r)||(()=>new r);e({provide:r,useFactory:l,deps:Pn},r),e({provide:bp,useValue:r,multi:!0},r),e({provide:Er,useValue:()=>ke(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Sp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Sp(n,e){for(let t of n)dp(t)&&(t=t.\u0275providers),Array.isArray(t)?Sp(t,e):e(t)}var lw=Dt({provide:String,useValue:Dt});function Dv(n){return n!==null&&typeof n=="object"&&lw in n}function uw(n){return!!(n&&n.useExisting)}function dw(n){return!!(n&&n.useFactory)}function Ll(n){return typeof n=="function"}var Sa=new je(""),Rl={},mv={},Jh;function wa(){return Jh===void 0&&(Jh=new ba),Jh}var $n=class{},ho=class extends $n{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,sp(e,s=>this.processProvider(s)),this.records.set(xp,cs(void 0,this)),r.has("environment")&&this.records.set($n,cs(void 0,this));let o=this.records.get(Sa);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(bp,Pn,{self:!0}))}retrieve(e,t){let i=uo(t)||0;try{return this.get(e,lo,i)}catch(r){if(ts(r))return r;throw r}}destroy(){xa(this),this._destroyed=!0;let e=Ye(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ye(e)}}onDestroy(e){return xa(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){xa(this);let t=qi(this),i=bn(void 0),r;try{return e()}finally{qi(t),bn(i)}}get(e,t=lo,i){if(xa(this),e.hasOwnProperty(hv))return e[hv](this);let r=uo(i),o,s=qi(this),a=bn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=gw(e)&&Bl(e);u&&this.injectableDefInScope(u)?l=cs(op(e),Rl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l)}let c=r&2?wa():this.parent;return t=r&8&&t===lo?null:t,c.get(e,t)}catch(c){if(ts(c)){if((c[Pl]=c[Pl]||[]).unshift(Nn(e)),s)throw c;return sw(c,e,"R3InjectorError",this.source)}else throw c}finally{bn(a),qi(s)}}resolveInjectorInitializers(){let e=Ye(null),t=qi(this),i=bn(void 0),r;try{let o=this.get(Er,Pn,{self:!0});for(let s of o)s()}finally{qi(t),bn(i),Ye(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Nn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Wn(e);let t=Ll(e)?e:Wn(e&&e.provide),i=hw(e);if(!Ll(e)&&e.multi===!0){let r=this.records.get(t);r||(r=cs(void 0,Rl,!0),r.factory=()=>rp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=Ye(null);try{return t.value===mv?gp(Nn(e)):t.value===Rl&&(t.value=mv,t.value=t.factory()),typeof t.value=="object"&&t.value&&mw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ye(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Wn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function op(n){let e=Bl(n),t=e!==null?e.factory:fo(n);if(t!==null)return t;if(n instanceof je)throw new Ne(204,!1);if(n instanceof Function)return fw(n);throw new Ne(204,!1)}function fw(n){if(n.length>0)throw new Ne(204,!1);let t=JS(n);return t!==null?()=>t.factory(n):()=>new n}function hw(n){if(Dv(n))return cs(void 0,n.useValue);{let e=Iv(n);return cs(e,Rl)}}function Iv(n,e,t){let i;if(Ll(n)){let r=Wn(n);return fo(r)||op(r)}else if(Dv(n))i=()=>Wn(n.useValue);else if(dw(n))i=()=>n.useFactory(...rp(n.deps||[]));else if(uw(n))i=()=>ke(Wn(n.useExisting));else{let r=Wn(n&&(n.useClass||n.provide));if(pw(n))i=()=>new r(...rp(n.deps));else return fo(r)||op(r)}return i}function xa(n){if(n.destroyed)throw new Ne(205,!1)}function cs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function pw(n){return!!n.deps}function mw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function gw(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function sp(n,e){for(let t of n)Array.isArray(t)?sp(t,e):t&&dp(t)?sp(t.\u0275providers,e):e(t)}function Ta(n,e){let t;n instanceof ho?(xa(n),t=n):t=new ip(n);let i,r=qi(t),o=bn(void 0);try{return e()}finally{qi(r),bn(o)}}function Av(){return vv()!==void 0||Ch()!=null}var yi=0,qe=1,Be=2,en=3,ci=4,Mn=5,ds=6,fs=7,fn=8,yo=9,Ji=10,Gt=11,hs=12,wp=13,vo=14,Ln=15,Mr=16,xo=17,Ni=18,Ca=19,Tp=20,Ki=21,$l=22,Da=23,qn=24,ql=25,an=26,Rv=1;var Sr=7,Ia=8,bo=9,Sn=10;function Qi(n){return Array.isArray(n)&&typeof n[Rv]=="object"}function vi(n){return Array.isArray(n)&&n[Rv]===!0}function Xl(n){return(n.flags&4)!==0}function wr(n){return n.componentOffset>-1}function Aa(n){return(n.flags&1)===1}function Eo(n){return!!n.template}function ps(n){return(n[Be]&512)!==0}function Mo(n){return(n[Be]&256)===256}var Cp="svg",Nv="math";function li(n){for(;Array.isArray(n);)n=n[yi];return n}function Dp(n,e){return li(e[n])}function xi(n,e){return li(e[n.index])}function Yl(n,e){return n.data[e]}function Ip(n,e){return n[e]}function Ap(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function bi(n,e){let t=e[n];return Qi(t)?t:t[yi]}function Pv(n){return(n[Be]&4)===4}function Zl(n){return(n[Be]&128)===128}function Ov(n){return vi(n[en])}function So(n,e){return e==null?null:n[e]}function Rp(n){n[xo]=0}function Np(n){n[Be]&1024||(n[Be]|=1024,Zl(n)&&Na(n))}function Lv(n,e){for(;n>0;)e=e[vo],n--;return e}function Ra(n){return!!(n[Be]&9216||n[qn]?.dirty)}function Kl(n){n[Ji].changeDetectionScheduler?.notify(8),n[Be]&64&&(n[Be]|=1024),Ra(n)&&Na(n)}function Na(n){n[Ji].changeDetectionScheduler?.notify(0);let e=br(n);for(;e!==null&&!(e[Be]&8192||(e[Be]|=8192,!Zl(e)));)e=br(e)}function Pp(n,e){if(Mo(n))throw new Ne(911,!1);n[Ki]===null&&(n[Ki]=[]),n[Ki].push(e)}function Fv(n,e){if(n[Ki]===null)return;let t=n[Ki].indexOf(e);t!==-1&&n[Ki].splice(t,1)}function br(n){let e=n[en];return vi(e)?e[en]:e}function Op(n){return n[fs]??=[]}function Lp(n){return n.cleanup??=[]}function kv(n,e,t,i){let r=Op(e);r.push(t),n.firstCreatePass&&Lp(n).push(i,r.length-1)}var Ke={lFrame:Jv(null),bindingsEnabled:!0,skipHydrationRootTNode:null},Pa=function(n){return n[n.Off=0]="Off",n[n.Exhaustive=1]="Exhaustive",n[n.OnlyDirtyViews=2]="OnlyDirtyViews",n}(Pa||{}),_w=0,ap=!1;function Uv(){return Ke.lFrame.elementDepthCount}function Bv(){Ke.lFrame.elementDepthCount++}function Vv(){Ke.lFrame.elementDepthCount--}function Jl(){return Ke.bindingsEnabled}function Fp(){return Ke.skipHydrationRootTNode!==null}function Hv(n){return Ke.skipHydrationRootTNode===n}function zv(){Ke.skipHydrationRootTNode=null}function gt(){return Ke.lFrame.lView}function cn(){return Ke.lFrame.tView}function ln(n){return Ke.lFrame.contextLView=n,n[fn]}function un(n){return Ke.lFrame.contextLView=null,n}function Xn(){let n=kp();for(;n!==null&&n.type===64;)n=n.parent;return n}function kp(){return Ke.lFrame.currentTNode}function Gv(){let n=Ke.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Tr(n,e){let t=Ke.lFrame;t.currentTNode=n,t.isParent=e}function Ql(){return Ke.lFrame.isParent}function eu(){Ke.lFrame.isParent=!1}function jv(){return Ke.lFrame.contextLView}function Up(n){_v("Must never be called in production mode"),_w=n}function Bp(){return ap}function Vp(n){let e=ap;return ap=n,e}function Wv(){let n=Ke.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function $v(n){return Ke.lFrame.bindingIndex=n}function tu(){return Ke.lFrame.bindingIndex++}function Hp(n){let e=Ke.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function qv(){return Ke.lFrame.inI18n}function Xv(n,e){let t=Ke.lFrame;t.bindingIndex=t.bindingRootIndex=n,nu(e)}function Yv(){return Ke.lFrame.currentDirectiveIndex}function nu(n){Ke.lFrame.currentDirectiveIndex=n}function Zv(n){let e=Ke.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function zp(){return Ke.lFrame.currentQueryIndex}function iu(n){Ke.lFrame.currentQueryIndex=n}function yw(n){let e=n[qe];return e.type===2?e.declTNode:e.type===1?n[Mn]:null}function Gp(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=yw(o),r===null||(o=o[vo],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=Ke.lFrame=Kv();return i.currentTNode=e,i.lView=n,!0}function ru(n){let e=Kv(),t=n[qe];Ke.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Kv(){let n=Ke.lFrame,e=n===null?null:n.child;return e===null?Jv(n):e}function Jv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Qv(){let n=Ke.lFrame;return Ke.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var jp=Qv;function ou(){let n=Qv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function e0(n){return(Ke.lFrame.contextLView=Lv(n,Ke.lFrame.contextLView))[fn]}function Cr(){return Ke.lFrame.selectedIndex}function Dr(n){Ke.lFrame.selectedIndex=n}function Wp(){let n=Ke.lFrame;return Yl(n.tView,n.selectedIndex)}function su(){Ke.lFrame.currentNamespace=Cp}function t0(){return Ke.lFrame.currentNamespace}var n0=!0;function Oa(){return n0}function La(n){n0=n}function cp(n,e=null,t=null,i){let r=$p(n,e,t,i);return r.resolveInjectorInitializers(),r}function $p(n,e=null,t=null,i,r=new Set){let o=[t||Pn,Tv(n)];return i=i||(typeof n=="object"?void 0:Nn(n)),new ho(o,e||wa(),i||null,r)}var Ri=class n{static THROW_IF_NOT_FOUND=lo;static NULL=new ba;static create(e,t){if(Array.isArray(e))return cp({name:""},t,e,"");{let i=e.name??"";return cp({name:i},e.parent,e.providers,i)}}static \u0275prov=Ve({token:n,providedIn:"any",factory:()=>ke(xp)});static __NG_ELEMENT_ID__=-1},Wt=new je(""),Fa=(()=>{class n{static __NG_ELEMENT_ID__=vw;static __NG_ENV_ID__=t=>t}return n})(),lp=class extends Fa{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Mo(this._lView)}onDestroy(e){let t=this._lView;return Pp(t,e),()=>Fv(t,e)}};function vw(){return new lp(gt())}var En=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Pi=new je("",{providedIn:"root",factory:()=>{let n=pe($n),e;return t=>{e??=n.get(En),e.handleError(t)}}}),i0={provide:Er,useValue:()=>void pe(En),multi:!0};var po=class{},ka=new je("",{providedIn:"root",factory:()=>!1});var qp=new je(""),Xp=new je("");var ms=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new jn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new mt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();function Ua(...n){}var Yp=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new up})}return n})(),up=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};function $a(n){return{toString:n}.toString()}var au="__parameters__";function Rw(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function P0(n,e,t){return $a(()=>{let i=Rw(e);function r(...o){if(this instanceof r)return i.apply(this,o),this;let s=new r(...o);return a.annotation=s,a;function a(c,l,u){let d=c.hasOwnProperty(au)?c[au]:Object.defineProperty(c,au,{value:[]})[au];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(s),c}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var Du=yp(P0("Optional"),8);var km=yp(P0("SkipSelf"),4);function Nw(n){return typeof n=="function"}var mu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function O0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Iu=(()=>{let n=()=>L0;return n.ngInherit=!0,n})();function L0(n){return n.type.prototype.ngOnChanges&&(n.setInput=Ow),Pw}function Pw(){let n=k0(this),e=n?.current;if(e){let t=n.previous;if(t===go)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Ow(n,e,t,i,r){let o=this.declaredInputs[i],s=k0(n)||Lw(n,{previous:go,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new mu(l&&l.currentValue,t,c===go),O0(n,e,r,t)}var F0="__ngSimpleChanges__";function k0(n){return n[F0]||null}function Lw(n,e){return n[F0]=e}var r0=[];var bt=function(n,e=null,t){for(let i=0;i<r0.length;i++){let r=r0[i];r(n,e,t)}};function Fw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=L0(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function Um(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function du(n,e,t){U0(n,e,3,t)}function fu(n,e,t,i){(n[Be]&3)===t&&U0(n,e,t,i)}function Zp(n,e){let t=n[Be];(t&3)===e&&(t&=16383,t+=1,n[Be]=t)}function U0(n,e,t,i){let r=i!==void 0?n[xo]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[xo]+=65536),(a<o||o==-1)&&(kw(n,t,e,c),n[xo]=(n[xo]&4294901760)+c+2),c++}function o0(n,e){bt(4,n,e);let t=Ye(null);try{e.call(n)}finally{Ye(t),bt(5,n,e)}}function kw(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[Be]>>14<n[xo]>>16&&(n[Be]&3)===e&&(n[Be]+=16384,o0(a,o)):o0(a,o)}var _s=-1,Ha=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Uw(n){return(n.flags&8)!==0}function Bw(n){return(n.flags&16)!==0}function Vw(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];Hw(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function B0(n){return n===3||n===4||n===6}function Hw(n){return n.charCodeAt(0)===64}function Au(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?s0(n,t,r,null,e[++i]):s0(n,t,r,null,null))}}return n}function s0(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function V0(n){return n!==_s}function gu(n){return n&32767}function zw(n){return n>>16}function _u(n,e){let t=zw(n),i=e;for(;t>0;)i=i[vo],t--;return i}var im=!0;function yu(n){let e=im;return im=n,e}var Gw=256,H0=Gw-1,z0=5,jw=0,Oi={};function Ww(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(mo)&&(i=t[mo]),i==null&&(i=t[mo]=jw++);let r=i&H0,o=1<<r;e.data[n+(r>>z0)]|=o}function G0(n,e){let t=j0(n,e);if(t!==-1)return t;let i=e[qe];i.firstCreatePass&&(n.injectorIndex=e.length,Kp(i.data,n),Kp(e,null),Kp(i.blueprint,null));let r=Bm(n,e),o=n.injectorIndex;if(V0(r)){let s=gu(r),a=_u(r,e),c=a[qe].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function Kp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function j0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Bm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Y0(r),i===null)return _s;if(t++,r=r[vo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return _s}function $w(n,e,t){Ww(n,e,t)}function qw(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let o=t[r];if(B0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(o===e)return t[r+1];r=r+2}}}return null}function W0(n,e,t){if(t&8||n!==void 0)return n;zl(e,"NodeInjector")}function $0(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[yo],o=bn(void 0);try{return r?r.get(e,i,t&8):_p(e,i,t&8)}finally{bn(o)}}return W0(i,e,t)}function q0(n,e,t,i=0,r){if(n!==null){if(e[Be]&2048&&!(i&2)){let s=Kw(n,e,t,i,Oi);if(s!==Oi)return s}let o=X0(n,e,t,i,Oi);if(o!==Oi)return o}return $0(e,t,i,r)}function X0(n,e,t,i,r){let o=Yw(t);if(typeof o=="function"){if(!Gp(e,n,i))return i&1?W0(r,t,i):$0(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))zl(t);else return s}finally{jp()}}else if(typeof o=="number"){let s=null,a=j0(n,e),c=_s,l=i&1?e[Ln][Mn]:null;for((a===-1||i&4)&&(c=a===-1?Bm(n,e):e[a+8],c===_s||!c0(i,!1)?a=-1:(s=e[qe],a=gu(c),e=_u(c,e)));a!==-1;){let u=e[qe];if(a0(o,a,u.data)){let d=Xw(a,e,t,s,i,l);if(d!==Oi)return d}c=e[a+8],c!==_s&&c0(i,e[qe].data[a+8]===l)&&a0(o,a,e)?(s=u,a=gu(c),e=_u(c,e)):a=-1}}return r}function Xw(n,e,t,i,r,o){let s=e[qe],a=s.data[n+8],c=i==null?wr(a)&&im:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=hu(a,s,t,c,l);return u!==null?vu(e,s,u,a):Oi}function hu(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&Eo(h)&&h.type===t)return c}return null}function vu(n,e,t,i){let r=n[t],o=e.data;if(r instanceof Ha){let s=r;s.resolving&&gp(yv(o[t]));let a=yu(s.canSeeViewProviders);s.resolving=!0;let c=o[t].type||o[t],l,u=s.injectImpl?bn(s.injectImpl):null,d=Gp(n,i,0);try{r=n[t]=s.factory(void 0,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&Fw(t,o[t],e)}finally{u!==null&&bn(u),yu(a),s.resolving=!1,jp()}}return r}function Yw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(mo)?n[mo]:void 0;return typeof e=="number"?e>=0?e&H0:Zw:e}function a0(n,e,t){let i=1<<n;return!!(t[e+(n>>z0)]&i)}function c0(n,e){return!(n&2)&&!(n&1&&e)}var wo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return q0(this._tNode,this._lView,e,uo(i),t)}};function Zw(){return new wo(Xn(),gt())}function Kw(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[Be]&2048&&!ps(s);){let a=X0(o,s,t,i|2,Oi);if(a!==Oi)return a;let c=o.parent;if(!c){let l=s[Tp];if(l){let u=l.get(t,Oi,i);if(u!==Oi)return u}c=Y0(s),s=s[vo]}o=c}return r}function Y0(n){let e=n[qe],t=e.type;return t===2?e.declTNode:t===1?n[Mn]:null}function Vm(n){return qw(Xn(),n)}function Jw(){return vs(Xn(),gt())}function vs(n,e){return new nr(xi(n,e))}var nr=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Jw}return n})();function Qw(n){return n instanceof nr?n.nativeElement:n}function eT(){return this._results[Symbol.iterator]()}var xu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new ai}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=bv(e);(this._changesDetected=!xv(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=eT};function Z0(n){return(n.flags&128)===128}var Hm=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Hm||{}),K0=new Map,tT=0;function nT(){return tT++}function iT(n){K0.set(n[Ca],n)}function rm(n){K0.delete(n[Ca])}var l0="__ngContext__";function xs(n,e){Qi(e)?(n[l0]=e[Ca],iT(e)):n[l0]=e}function J0(n){return ex(n[hs])}function Q0(n){return ex(n[ci])}function ex(n){for(;n!==null&&!vi(n);)n=n[ci];return n}var om;function zm(n){om=n}function tx(){if(om!==void 0)return om;if(typeof document<"u")return document;throw new Ne(210,!1)}var Ru=new je("",{providedIn:"root",factory:()=>rT}),rT="ng",Nu=new je(""),Rr=new je("",{providedIn:"platform",factory:()=>"unknown"});var bs=new je("",{providedIn:"root",factory:()=>tx().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var oT="h",sT="b";var nx=!1,ix=new je("",{providedIn:"root",factory:()=>nx});var aT=(n,e,t,i)=>{};function cT(n,e,t,i){aT(n,e,t,i)}var lT=()=>null;function rx(n,e,t=!1){return lT(n,e,t)}function ox(n,e){let t=n.contentQueries;if(t!==null){let i=Ye(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];iu(o),a.contentQueries(2,e[s],s)}}}finally{Ye(i)}}}function sm(n,e,t){iu(0);let i=Ye(null);try{e(n,t)}finally{Ye(i)}}function Gm(n,e,t){if(Xl(e)){let i=Ye(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{Ye(i)}}}var er=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(er||{}),cu;function uT(){if(cu===void 0&&(cu=null,ls.trustedTypes))try{cu=ls.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return cu}function Pu(n){return uT()?.createHTML(n)||n}var tr=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Fl})`}},am=class extends tr{getTypeName(){return"HTML"}},cm=class extends tr{getTypeName(){return"Style"}},lm=class extends tr{getTypeName(){return"Script"}},um=class extends tr{getTypeName(){return"URL"}},dm=class extends tr{getTypeName(){return"ResourceURL"}};function ir(n){return n instanceof tr?n.changingThisBreaksApplicationSecurity:n}function Do(n,e){let t=sx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Fl})`)}return t===e}function sx(n){return n instanceof tr&&n.getTypeName()||null}function jm(n){return new am(n)}function Wm(n){return new cm(n)}function $m(n){return new lm(n)}function qm(n){return new um(n)}function Xm(n){return new dm(n)}function dT(n){let e=new hm(n);return fT()?new fm(e):e}var fm=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(Pu(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch{return null}}},hm=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=Pu(e),t}};function fT(){try{return!!new window.DOMParser().parseFromString(Pu(""),"text/html")}catch{return!1}}var hT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ou(n){return n=String(n),n.match(hT)?n:"unsafe:"+n}function rr(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function qa(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var ax=rr("area,br,col,hr,img,wbr"),cx=rr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),lx=rr("rp,rt"),pT=qa(lx,cx),mT=qa(cx,rr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),gT=qa(lx,rr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),u0=qa(ax,mT,gT,pT),ux=rr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),_T=rr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),yT=rr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),vT=qa(ux,_T,yT),xT=rr("script,style,template"),pm=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,i=!0,r=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){r.push(t),t=MT(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=ET(t);if(o){t=o;break}t=r.pop()}}return this.buf.join("")}startElement(e){let t=d0(e).toLowerCase();if(!u0.hasOwnProperty(t))return this.sanitizedSomething=!0,!xT.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!vT.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;ux[a]&&(c=Ou(c)),this.buf.push(" ",s,'="',f0(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=d0(e).toLowerCase();u0.hasOwnProperty(t)&&!ax.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(f0(e))}};function bT(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function ET(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw dx(e);return e}function MT(n){let e=n.firstChild;if(e&&bT(n,e))throw dx(e);return e}function d0(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function dx(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var ST=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,wT=/([^\#-~ |!])/g;function f0(n){return n.replace(/&/g,"&amp;").replace(ST,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(wT,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var lu;function Ym(n,e){let t=null;try{lu=lu||dT(n);let i=e?String(e):"";t=lu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=t.innerHTML,t=lu.getInertBodyElement(i)}while(i!==o);let a=new pm().sanitizeChildren(h0(t)||t);return Pu(a)}finally{if(t){let i=h0(t)||t;for(;i.firstChild;)i.firstChild.remove()}}}function h0(n){return"content"in n&&TT(n)?n.content:null}function TT(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var wn=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(wn||{});var CT=/^>|^->|<!--|-->|--!>|<!-$/g,DT=/(<|>)/g,IT="\u200B$1\u200B";function AT(n){return n.replace(CT,e=>e.replace(DT,IT))}function RT(n){return n instanceof Function?n():n}function NT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var fx="ng-template";function PT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&NT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Zm(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Zm(n){return n.type===4&&n.value!==fx}function OT(n,e,t){let i=n.type===4&&!t?fx:n.value;return e===i}function LT(n,e,t){let i=4,r=n.attrs,o=r!==null?UT(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!Ei(i)&&!Ei(c))return!1;if(s&&Ei(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!OT(n,c,t)||c===""&&e.length===1){if(Ei(i))return!1;s=!0}}else if(i&8){if(r===null||!PT(n,r,c,t)){if(Ei(i))return!1;s=!0}}else{let l=e[++a],u=FT(c,r,Zm(n),t);if(u===-1){if(Ei(i))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Ei(i))return!1;s=!0}}}}return Ei(i)||s}function Ei(n){return(n&1)===0}function FT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return BT(e,n)}function hx(n,e,t=!1){for(let i=0;i<e.length;i++)if(LT(n,e[i],t))return!0;return!1}function kT(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function UT(n){for(let e=0;e<n.length;e++){let t=n[e];if(B0(t))return e}return n.length}function BT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function VT(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function p0(n,e){return n?":not("+e.trim()+")":e}function HT(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Ei(s)&&(e+=p0(o,r),r=""),i=s,o=o||!Ei(i);t++}return r!==""&&(e+=p0(o,r)),e}function zT(n){return n.map(HT).join(",")}function GT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!Ei(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var Si={};function jT(n,e){return n.createText(e)}function WT(n,e,t){n.setValue(e,t)}function $T(n,e){return n.createComment(AT(e))}function px(n,e,t){return n.createElement(e,t)}function bu(n,e,t,i,r){n.insertBefore(e,t,i,r)}function mx(n,e,t){n.appendChild(e,t)}function m0(n,e,t,i,r){i!==null?bu(n,e,t,i,r):mx(n,e,t)}function qT(n,e,t){n.removeChild(null,e,t)}function XT(n,e,t){n.setAttribute(e,"style",t)}function YT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function gx(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&Vw(n,e,i),r!==null&&YT(n,e,r),o!==null&&XT(n,e,o)}function Km(n,e,t,i,r,o,s,a,c,l,u){let d=an+i,f=d+r,h=ZT(d,f),g=typeof l=="function"?l():l;return h[qe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function ZT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Si);return t}function KT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Km(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Jm(n,e,t,i,r,o,s,a,c,l,u){let d=e.blueprint.slice();return d[yi]=r,d[Be]=i|4|128|8|64|1024,(l!==null||n&&n[Be]&2048)&&(d[Be]|=2048),Rp(d),d[en]=d[vo]=n,d[fn]=t,d[Ji]=s||n&&n[Ji],d[Gt]=a||n&&n[Gt],d[yo]=c||n&&n[yo]||null,d[Mn]=o,d[Ca]=nT(),d[ds]=u,d[Tp]=l,d[Ln]=e.type==2?n[Ln]:d,d}function JT(n,e,t){let i=xi(e,n),r=KT(t),o=n[Ji].rendererFactory,s=Qm(n,Jm(n,r,null,_x(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function _x(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function yx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Qm(n,e){return n[hs]?n[wp][ci]=e:n[hs]=e,n[wp]=e,e}function De(n=1){vx(cn(),gt(),Cr()+n,!1)}function vx(n,e,t,i){if(!i)if((e[Be]&3)===3){let o=n.preOrderCheckHooks;o!==null&&du(e,o,t)}else{let o=n.preOrderHooks;o!==null&&fu(e,o,0,t)}Dr(t)}var Lu=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Lu||{});function mm(n,e,t,i){let r=Ye(null);try{let[o,s,a]=n.inputs[t],c=null;(s&Lu.SignalBased)!==0&&(c=e[o][ro]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):O0(e,c,o,i)}finally{Ye(r)}}function xx(n,e,t,i,r){let o=Cr(),s=i&2;try{Dr(-1),s&&e.length>an&&vx(n,e,an,!1),bt(s?2:0,r,t),t(i,r)}finally{Dr(o),bt(s?3:1,r,t)}}function Fu(n,e,t){sC(n,e,t),(t.flags&64)===64&&aC(n,e,t)}function eg(n,e,t=xi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function QT(n,e,t,i){let o=i.get(ix,nx)||t===er.ShadowDom,s=n.selectRootElement(e,o);return eC(s),s}function eC(n){tC(n)}var tC=()=>null;function nC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function iC(n,e,t,i,r,o){let s=e[qe];if(ng(n,s,e,t,i)){wr(n)&&oC(e,n.index);return}rC(n,e,t,i,r,o)}function rC(n,e,t,i,r,o){if(n.type&3){let s=xi(n,e);t=nC(t),i=o!=null?o(i,n.value||"",t):i,r.setProperty(s,t,i)}else n.type&12}function oC(n,e){let t=bi(e,n);t[Be]&16||(t[Be]|=64)}function sC(n,e,t){let i=t.directiveStart,r=t.directiveEnd;wr(t)&&JT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||G0(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=vu(e,n,s,t);if(xs(c,e),o!==null&&dC(e,s-i,c,a,t,o),Eo(a)){let l=bi(t.index,e);l[fn]=vu(e,n,s,t)}}}function aC(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=Yv();try{Dr(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];nu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&cC(c,l)}}finally{Dr(-1),nu(s)}}function cC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function tg(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];hx(e,o.selectors,!1)&&(i??=[],Eo(o)?i.unshift(o):i.push(o))}return i}function lC(n,e,t,i,r,o){let s=xi(n,e);uC(e[Gt],s,o,n.value,t,i,r)}function uC(n,e,t,i,r,o,s){if(o==null)n.removeAttribute(e,r,t);else{let a=s==null?Hl(o):s(o,i||"",r);n.setAttribute(e,r,a,t)}}function dC(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];mm(i,t,c,l)}}function fC(n,e){let t=n[yo];if(!t)return;t.get(Pi,null)?.(e)}function ng(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];mm(d,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];mm(u,l,i,r),a=!0}return a}function hC(n,e){let t=bi(e,n),i=t[qe];pC(i,t);let r=t[yi];r!==null&&t[ds]===null&&(t[ds]=rx(r,t[yo])),bt(18),ig(i,t,t[fn]),bt(19,t[fn])}function pC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function ig(n,e,t){ru(e);try{let i=n.viewQuery;i!==null&&sm(1,i,t);let r=n.template;r!==null&&xx(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ni]?.finishViewCreation(n),n.staticContentQueries&&ox(n,e),n.staticViewQueries&&sm(2,n.viewQuery,t);let o=n.components;o!==null&&mC(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Be]&=-5,ou()}}function mC(n,e){for(let t=0;t<e.length;t++)hC(n,e[t])}function bx(n,e,t,i){let r=Ye(null);try{let o=e.tView,a=n[Be]&4096?4096:16,c=Jm(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Mr]=l;let u=n[Ni];return u!==null&&(c[Ni]=u.createEmbeddedView(o)),ig(o,c,t),c}finally{Ye(r)}}function gm(n,e){return!e||e.firstChild===null||Z0(n)}var g0=!1,gC=new je(""),_C;function rg(n,e){return _C(n,e)}var Li=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Li||{});function ku(n){return(n.flags&32)===32}function gs(n,e,t,i,r){if(i!=null){let o,s=!1;vi(i)?o=i:Qi(i)&&(s=!0,i=i[yi]);let a=li(i);n===0&&t!==null?r==null?mx(e,t,a):bu(e,t,a,r||null,!0):n===1&&t!==null?bu(e,t,a,r||null,!0):n===2?qT(e,a,s):n===3&&e.destroyNode(a),o!=null&&CC(e,n,o,t,r)}}function yC(n,e){Ex(n,e),e[yi]=null,e[Mn]=null}function vC(n,e,t,i,r,o){i[yi]=r,i[Mn]=e,Bu(n,i,t,1,r,o)}function Ex(n,e){e[Ji].changeDetectionScheduler?.notify(9),Bu(n,e,e[Gt],2,null,null)}function xC(n){let e=n[hs];if(!e)return Jp(n[qe],n);for(;e;){let t=null;if(Qi(e))t=e[hs];else{let i=e[Sn];i&&(t=i)}if(!t){for(;e&&!e[ci]&&e!==n;)Qi(e)&&Jp(e[qe],e),e=e[en];e===null&&(e=n),Qi(e)&&Jp(e[qe],e),t=e&&e[ci]}e=t}}function og(n,e){let t=n[bo],i=t.indexOf(e);t.splice(i,1)}function Mx(n,e){if(Mo(e))return;let t=e[Gt];t.destroyNode&&Bu(n,e,t,3,null,null),xC(e)}function Jp(n,e){if(Mo(e))return;let t=Ye(null);try{e[Be]&=-129,e[Be]|=256,e[qn]&&il(e[qn]),EC(n,e),bC(n,e),e[qe].type===1&&e[Gt].destroy();let i=e[Mr];if(i!==null&&vi(e[en])){i!==e[en]&&og(i,e);let r=e[Ni];r!==null&&r.detachView(n)}rm(e)}finally{Ye(t)}}function bC(n,e){let t=n.cleanup,i=e[fs];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[fs]=null);let r=e[Ki];if(r!==null){e[Ki]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[Da];if(o!==null){e[Da]=null;for(let s of o)s.destroy()}}function EC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ha)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];bt(4,a,c);try{c.call(a)}finally{bt(5,a,c)}}else{bt(4,r,o);try{o.call(r)}finally{bt(5,r,o)}}}}}function Sx(n,e,t){return MC(n,e.parent,t)}function MC(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[yi];if(wr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===er.None||r===er.Emulated)return null}return xi(i,t)}function wx(n,e,t){return wC(n,e,t)}function SC(n,e,t){return n.type&40?xi(n,t):null}var wC=SC,_0;function Uu(n,e,t,i){let r=Sx(n,i,e),o=e[Gt],s=i.parent||e[Mn],a=wx(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)m0(o,r,t[c],a,!1);else m0(o,r,t,a,!1);_0!==void 0&&_0(o,i,e,t,r)}function Ba(n,e){if(e!==null){let t=e.type;if(t&3)return xi(e,n);if(t&4)return _m(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ba(n,i);{let r=n[e.index];return vi(r)?_m(-1,r):li(r)}}else{if(t&128)return Ba(n,e.next);if(t&32)return rg(e,n)()||li(n[e.index]);{let i=Tx(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=br(n[Ln]);return Ba(r,i)}else return Ba(n,e.next)}}}return null}function Tx(n,e){if(e!==null){let i=n[Ln][Mn],r=e.projection;return i.projection[r]}return null}function _m(n,e){let t=Sn+n+1;if(t<e.length){let i=e[t],r=i[qe].firstChild;if(r!==null)return Ba(i,r)}return e[Sr]}function sg(n,e,t,i,r,o,s){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(s&&e===0&&(a&&xs(li(a),i),t.flags|=2),!ku(t))if(c&8)sg(n,e,t.child,i,r,o,!1),gs(e,n,r,a,o);else if(c&32){let l=rg(t,i),u;for(;u=l();)gs(e,n,r,u,o);gs(e,n,r,a,o)}else c&16?Cx(n,e,i,t,r,o):gs(e,n,r,a,o);t=s?t.projectionNext:t.next}}function Bu(n,e,t,i,r,o){sg(t,i,n.firstChild,e,r,o,!1)}function TC(n,e,t){let i=e[Gt],r=Sx(n,t,e),o=t.parent||e[Mn],s=wx(o,t,e);Cx(i,0,e,t,r,s)}function Cx(n,e,t,i,r,o){let s=t[Ln],c=s[Mn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];gs(e,n,r,u,o)}else{let l=c,u=s[en];Z0(i)&&(l.flags|=128),sg(n,e,l,u,r,o,!0)}}function CC(n,e,t,i,r){let o=t[Sr],s=li(t);o!==s&&gs(e,n,i,o,r);for(let a=Sn;a<t.length;a++){let c=t[a];Bu(c[qe],c,n,e,i,o)}}function DC(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let o=i.indexOf("-")===-1?void 0:Li.DashCase;r==null?n.removeStyle(t,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Li.Important),n.setStyle(t,i,r,o))}}function za(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(li(o)),vi(o)&&Dx(o,i);let s=t.type;if(s&8)za(n,e,t.child,i);else if(s&32){let a=rg(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=Tx(e,t);if(Array.isArray(a))i.push(...a);else{let c=br(e[Ln]);za(c[qe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Dx(n,e){for(let t=Sn;t<n.length;t++){let i=n[t],r=i[qe].firstChild;r!==null&&za(i[qe],i,r,e)}n[Sr]!==n[yi]&&e.push(n[Sr])}function Ix(n){if(n[ql]!==null){for(let e of n[ql])e.impl.addSequence(e);n[ql].length=0}}var Ax=[];function IC(n){return n[qn]??AC(n)}function AC(n){let e=Ax.pop()??Object.create(NC);return e.lView=n,e}function RC(n){n.lView[qn]!==n&&(n.lView=null,Ax.push(n))}var NC=Xt(at({},ha),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Na(n.lView)},consumerOnSignalRead(){this.lView[qn]=this}});function PC(n){let e=n[qn]??Object.create(OC);return e.lView=n,e}var OC=Xt(at({},ha),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=br(n.lView);for(;e&&!Rx(e[qe]);)e=br(e);e&&Np(e)},consumerOnSignalRead(){this.lView[qn]=this}});function Rx(n){return n.type!==2}function Nx(n){if(n[Da]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Da])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Be]&8192)}}var LC=100;function ag(n,e=0){let i=n[Ji].rendererFactory,r=!1;r||i.begin?.();try{FC(n,e)}finally{r||i.end?.()}}function FC(n,e){let t=Bp();try{Vp(!0),ym(n,e);let i=0;for(;Ra(n);){if(i===LC)throw new Ne(103,!1);i++,ym(n,1)}}finally{Vp(t)}}function Px(n,e){Up(e?Pa.Exhaustive:Pa.OnlyDirtyViews);try{ag(n)}finally{Up(Pa.Off)}}function kC(n,e,t,i){if(Mo(e))return;let r=e[Be],o=!1,s=!1;ru(e);let a=!0,c=null,l=null;o||(Rx(n)?(l=IC(e),c=pa(l)):Ih()===null?(a=!1,l=PC(e),c=pa(l)):e[qn]&&(il(e[qn]),e[qn]=null));try{Rp(e),$v(n.bindingStartIndex),t!==null&&xx(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&du(e,h,null)}else{let h=n.preOrderHooks;h!==null&&fu(e,h,0,null),Zp(e,0)}if(s||UC(e),Nx(e),Ox(e,0),n.contentQueries!==null&&ox(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&du(e,h)}else{let h=n.contentHooks;h!==null&&fu(e,h,1),Zp(e,1)}VC(n,e);let d=n.components;d!==null&&Fx(e,d,0);let f=n.viewQuery;if(f!==null&&sm(2,f,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&du(e,h)}else{let h=n.viewHooks;h!==null&&fu(e,h,2),Zp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[$l]){for(let h of e[$l])h();e[$l]=null}o||(Ix(e),e[Be]&=-73)}catch(u){throw o||Na(e),u}finally{l!==null&&(tl(l,c),a&&RC(l)),ou()}}function Ox(n,e){for(let t=J0(n);t!==null;t=Q0(t))for(let i=Sn;i<t.length;i++){let r=t[i];Lx(r,e)}}function UC(n){for(let e=J0(n);e!==null;e=Q0(e)){if(!(e[Be]&2))continue;let t=e[bo];for(let i=0;i<t.length;i++){let r=t[i];Np(r)}}}function BC(n,e,t){bt(18);let i=bi(e,n);Lx(i,t),bt(19,i[fn])}function Lx(n,e){Zl(n)&&ym(n,e)}function ym(n,e){let i=n[qe],r=n[Be],o=n[qn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&nl(o)),s||=!1,o&&(o.dirty=!1),n[Be]&=-9217,s)kC(i,n,i.template,n[fn]);else if(r&8192){let a=Ye(null);try{Nx(n),Ox(n,1);let c=i.components;c!==null&&Fx(n,c,1),Ix(n)}finally{Ye(a)}}}function Fx(n,e,t){for(let i=0;i<e.length;i++)BC(n,e[i],t)}function VC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Dr(~r);else{let o=r,s=t[++i],a=t[++i];Xv(s,o);let c=e[o];bt(24,c),a(2,c),bt(25,c)}}}finally{Dr(-1)}}function cg(n,e){let t=Bp()?64:1088;for(n[Ji].changeDetectionScheduler?.notify(e);n;){n[Be]|=t;let i=br(n);if(ps(n)&&!i)return n;n=i}return null}function kx(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ux(n,e,t,i=!0){let r=e[qe];if(HC(r,e,n,t),i){let s=_m(t,n),a=e[Gt],c=a.parentNode(n[Sr]);c!==null&&vC(r,n[Mn],a,e,c,s)}let o=e[ds];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function vm(n,e){if(n.length<=Sn)return;let t=Sn+e,i=n[t];if(i){let r=i[Mr];r!==null&&r!==n&&og(r,i),e>0&&(n[t-1][ci]=i[ci]);let o=Ma(n,Sn+e);yC(i[qe],i);let s=o[Ni];s!==null&&s.detachView(o[qe]),i[en]=null,i[ci]=null,i[Be]&=-129}return i}function HC(n,e,t,i){let r=Sn+i,o=t.length;i>0&&(t[r-1][ci]=e),i<o-Sn?(e[ci]=t[r],vp(t,Sn+i,e)):(t.push(e),e[ci]=null),e[en]=t;let s=e[Mr];s!==null&&t!==s&&Bx(s,e);let a=e[Ni];a!==null&&a.insertView(n),Kl(e),e[Be]|=128}function Bx(n,e){let t=n[bo],i=e[en];if(Qi(i))n[Be]|=2;else{let r=i[en][Ln];e[Ln]!==r&&(n[Be]|=2)}t===null?n[bo]=[e]:t.push(e)}var Ir=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[qe];return za(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[fn]}set context(e){this._lView[fn]=e}get destroyed(){return Mo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[en];if(vi(e)){let t=e[Ia],i=t?t.indexOf(this):-1;i>-1&&(vm(e,i),Ma(t,i))}this._attachedToViewContainer=!1}Mx(this._lView[qe],this._lView)}onDestroy(e){Pp(this._lView,e)}markForCheck(){cg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Be]&=-129}reattach(){Kl(this._lView),this._lView[Be]|=128}detectChanges(){this._lView[Be]|=1024,ag(this._lView)}checkNoChanges(){return;try{this.exhaustive??=this._lView[yo].get(gC,g0)}catch{this.exhaustive=g0}}attachToViewContainerRef(){if(this._appRef)throw new Ne(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ps(this._lView),t=this._lView[Mr];t!==null&&!e&&og(t,this._lView),Ex(this._lView[qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ne(902,!1);this._appRef=e;let t=ps(this._lView),i=this._lView[Mr];i!==null&&!t&&Bx(i,this._lView),Kl(this._lView)}};var Fi=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=zC;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=bx(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Ir(o)}}return n})();function zC(){return Vu(Xn(),gt())}function Vu(n,e){return n.type&4?new Fi(e,n,vs(n,e)):null}function Xa(n,e,t,i,r){let o=n.data[e];if(o===null)o=GC(n,e,t,i,r),qv()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=Gv();o.injectorIndex=s===null?-1:s.injectorIndex}return Tr(o,!0),o}function GC(n,e,t,i,r){let o=kp(),s=Ql(),a=s?o:o&&o.parent,c=n.data[e]=WC(n,a,t,e,i,r);return jC(n,c,o,s),c}function jC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function WC(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return Fp()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var UV=new RegExp(`^(\\d+)*(${sT}|${oT})*(.*)`);var $C=()=>null;function xm(n,e){return $C(n,e)}var Vx=class{},Hu=class{},bm=class{resolveComponentFactory(e){throw new Ne(917,!1)}},Ya=class{static NULL=new bm},To=class{};var Hx=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>null})}return n})();var pu={},Em=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,pu,i);return r!==pu||t===pu?r:this.parentInjector.get(e,t,i)}};function Mm(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=kl(r,a);else if(o==2){let c=a,l=e[++s];i=kl(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function dt(n,e=0){let t=gt();if(t===null)return ke(n,e);let i=Xn();return q0(i,t,Wn(n),e)}function lg(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}YC(n,e,t,a,o,c,l)}o!==null&&i!==null&&qC(t,i,o)}function qC(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new Ne(-301,!1);i.push(e[r],o)}}function XC(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function YC(n,e,t,i,r,o,s){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Eo(h)&&(c=!0,XC(n,t,f)),$w(G0(t,e),n,h.type)}tD(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=yx(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Au(t.mergedAttrs,h.hostAttrs),KC(n,t,e,d,h),eD(d,h,r),s!==null&&s.has(h)){let[y,m]=s.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}ZC(n,t,o)}function ZC(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))y0(0,e,r,i),y0(1,e,r,i),x0(e,i,!1);else{let o=t.get(r);v0(0,e,o,i),v0(1,e,o,i),x0(e,i,!0)}}}function y0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),zx(e,o)}}function v0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),zx(e,s)}}function zx(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function x0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||Zm(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function KC(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=fo(r.type,!0)),s=new Ha(o,Eo(r),dt);n.blueprint[i]=s,t[i]=s,JC(n,e,i,yx(n,t,r.hostVars,Si),r)}function JC(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;QC(s)!=a&&s.push(a),s.push(t,i,o)}}function QC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function eD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Eo(e)&&(t[""]=n)}}function tD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Gx(n,e,t,i,r,o,s,a){let c=e.consts,l=So(c,s),u=Xa(e,n,2,i,l);return o&&lg(e,t,u,So(c,a),r),u.mergedAttrs=Au(u.mergedAttrs,u.attrs),u.attrs!==null&&Mm(u,u.attrs,!1),u.mergedAttrs!==null&&Mm(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function jx(n,e){Um(n,e),Xl(e)&&n.queries.elementEnd(e)}function ug(n){return $x(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function Wx(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function $x(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function nD(n,e,t){return n[e]=t}function Es(n,e,t){if(t===Si)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Qp(n,e,t){return function i(r){let o=wr(n)?bi(n.index,e):e;cg(o,5);let s=e[fn],a=b0(e,s,t,r),c=i.__ngNextListenerFn__;for(;c;)a=b0(e,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function b0(n,e,t,i){let r=Ye(null);try{return bt(6,e,t),t(i)!==!1}catch(o){return fC(n,o),!1}finally{bt(7,e,t),Ye(r)}}function iD(n,e,t,i,r,o,s,a){let c=Aa(n),l=!1,u=null;if(!i&&c&&(u=rD(e,t,o,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=xi(n,t),f=i?i(d):d;cT(t,f,o,a);let h=r.listen(f,o,a),g=i?y=>i(li(y[n.index])):n.index;qx(g,e,t,o,a,h,!1)}return l}function rD(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[fs],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function qx(n,e,t,i,r,o,s){let a=e.firstCreatePass?Lp(e):null,c=Op(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function E0(n,e,t,i,r,o){let s=e[t],a=e[qe],l=a.data[t].outputs[i],d=s[l].subscribe(o);qx(n.index,a,e,r,o,d,!0)}var Sm=Symbol("BINDING");var Eu=class extends Ya{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=_o(e);return new Ga(t,this.ngModule)}};function oD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&Lu.SignalBased)!==0};return r&&(o.transform=r),o})}function sD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function aD(n,e,t){let i=e instanceof $n?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Em(t,i):t}function cD(n){let e=n.get(To,null);if(e===null)throw new Ne(407,!1);let t=n.get(Hx,null),i=n.get(po,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function lD(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return px(e,t,t==="svg"?Cp:t==="math"?Nv:null)}var Ga=class extends Hu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=oD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=sD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=zT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){bt(22);let a=Ye(null);try{let c=this.componentDef,l=uD(i,c,s,o),u=aD(c,r||this.ngModule,e),d=cD(u),f=d.rendererFactory.createRenderer(null,c),h=i?QT(f,i,c.encapsulation,u):lD(c,f),g=s?.some(M0)||o?.some(p=>typeof p!="function"&&p.bindings.some(M0)),y=Jm(null,l,null,512|_x(c),null,null,d,f,u,null,rx(h,u,!0));y[an]=h,ru(y);let m=null;try{let p=Gx(an,l,y,"#host",()=>l.directiveRegistry,!0,0);h&&(gx(f,h,p),xs(h,y)),Fu(l,y,p),Gm(l,p,y),jx(l,p),t!==void 0&&fD(p,this.ngContentSelectors,t),m=bi(p.index,y),y[fn]=m[fn],ig(l,y,null)}catch(p){throw m!==null&&rm(m),rm(y),p}finally{bt(23),ou()}return new Mu(this.componentType,y,!!g)}finally{Ye(a)}}};function uD(n,e,t,i){let r=n?["ng-version","20.0.2"]:GT(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[Sm].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Sm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Ep(d);c.push(f)}return Km(0,null,dD(o,s),1,a,c,null,null,null,[r],null)}function dD(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function M0(n){let e=n[Sm].kind;return e==="input"||e==="twoWay"}var Mu=class extends Vx{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Yl(t[qe],an),this.location=vs(this._tNode,t),this.instance=bi(this._tNode.index,t)[fn],this.hostView=this.changeDetectorRef=new Ir(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=ng(i,r[qe],r,e,t);this.previousInputValues.set(e,t);let s=bi(i.index,r);cg(s,1)}get injector(){return new wo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function fD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ki=(()=>{class n{static __NG_ELEMENT_ID__=hD}return n})();function hD(){let n=Xn();return Yx(n,gt())}var pD=ki,Xx=class extends pD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return vs(this._hostTNode,this._hostLView)}get injector(){return new wo(this._hostTNode,this._hostLView)}get parentInjector(){let e=Bm(this._hostTNode,this._hostLView);if(V0(e)){let t=_u(e,this._hostLView),i=gu(e),r=t[qe].data[i+8];return new wo(r,t)}else return new wo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=S0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Sn}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=xm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,gm(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!Nw(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new Ga(_o(e)),d=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?d:this.parentInjector).get($n,null);p&&(o=p)}let f=_o(u.componentType??{}),h=xm(this._lContainer,f?.id??null),g=h?.firstChild??null,y=u.create(d,r,g,o,s,a);return this.insertImpl(y.hostView,l,gm(this._hostTNode,h)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Ov(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[en],l=new Xx(c,c[Mn],c[en]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return Ux(s,r,o,i),e.attachToViewContainerRef(),vp(em(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=S0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=vm(this._lContainer,t);i&&(Ma(em(this._lContainer),t),Mx(i[qe],i))}detach(e){let t=this._adjustIndex(e,-1),i=vm(this._lContainer,t);return i&&Ma(em(this._lContainer),t)!=null?new Ir(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function S0(n){return n[Ia]}function em(n){return n[Ia]||(n[Ia]=[])}function Yx(n,e){let t,i=e[n.index];return vi(i)?t=i:(t=kx(i,e,null,n),e[n.index]=t,Qm(e,t)),gD(t,e,n,i),new Xx(t,n,e)}function mD(n,e){let t=n[Gt],i=t.createComment(""),r=xi(e,n),o=t.parentNode(r);return bu(t,o,i,t.nextSibling(r),!1),i}var gD=vD,_D=()=>!1;function yD(n,e,t){return _D(n,e,t)}function vD(n,e,t,i){if(n[Sr])return;let r;t.type&8?r=li(i):r=mD(e,t),n[Sr]=r}var wm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Tm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)dg(e,t).matches!==null&&this.queries[t].setDirty()}},Cm=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=CD(e):this.predicate=e}},Dm=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Im=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,xD(t,o)),this.matchTNodeWithReadOption(e,t,hu(t,e,o,!1,!1))}else i===Fi?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,hu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===nr||r===ki||r===Fi&&t.type&4)this.addMatch(t.index,-2);else{let o=hu(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function xD(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function bD(n,e){return n.type&11?vs(n,e):n.type&4?Vu(n,e):null}function ED(n,e,t,i){return t===-1?bD(e,n):t===-2?MD(n,e,i):vu(n,n[qe],t,e)}function MD(n,e,t){if(t===nr)return vs(e,n);if(t===Fi)return Vu(e,n);if(t===ki)return Yx(e,n)}function Zx(n,e,t,i){let r=e[Ni].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(ED(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Am(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=Zx(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let d=Sn;d<u.length;d++){let f=u[d];f[Mr]===f[en]&&Am(f[qe],f,l,i)}if(u[bo]!==null){let d=u[bo];for(let f=0;f<d.length;f++){let h=d[f];Am(h[qe],h,l,i)}}}}}return i}function SD(n,e){return n[Ni].queries[e].queryList}function wD(n,e,t){let i=new xu((t&4)===4);return kv(n,e,i,i.destroy),(e[Ni]??=new Tm).queries.push(new wm(i))-1}function TD(n,e,t){let i=cn();return i.firstCreatePass&&(DD(i,new Cm(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),wD(i,gt(),e)}function CD(n){return n.split(",").map(e=>e.trim())}function DD(n,e,t){n.queries===null&&(n.queries=new Dm),n.queries.track(new Im(e,t))}function dg(n,e){return n.queries.getByIndex(e)}function ID(n,e){let t=n[qe],i=dg(t,e);return i.crossesNgTemplate?Am(t,n,e,[]):Zx(t,n,i,e)}var w0=new Set;function Kx(n){w0.has(n)||(w0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Ar=class{};function fg(n,e){return new Su(n,e??null,[])}var Su=class extends Ar{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Eu(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=Sv(e);this._bootstrapComponents=RT(o.bootstrap),this._r3Injector=$p(e,t,[{provide:Ar,useValue:this},{provide:Ya,useValue:this.componentFactoryResolver},...i],Nn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}};var ja=class extends Ar{injector;componentFactoryResolver=new Eu(this);instance=null;constructor(e){super();let t=new ho([...e.providers,{provide:Ar,useValue:this},{provide:Ya,useValue:this.componentFactoryResolver}],e.parent||wa(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Jx(n,e,t=null){return new ja({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var AD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Mp(!1,t.type),r=i.length>0?Jx([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ve({token:n,providedIn:"environment",factory:()=>new n(ke($n))})}return n})();function rt(n){return $a(()=>{let e=Qx(n),t=Xt(at({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Hm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(AD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||er.Emulated,styles:n.styles||Pn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Kx("NgStandalone"),eb(t);let i=n.dependencies;return t.directiveDefs=T0(i,!1),t.pipeDefs=T0(i,!0),t.id=LD(t),t})}function RD(n){return _o(n)||Ep(n)}function ND(n){return n!==null}function Yn(n){return $a(()=>({type:n.type,bootstrap:n.bootstrap||Pn,declarations:n.declarations||Pn,imports:n.imports||Pn,exports:n.exports||Pn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function PD(n,e){if(n==null)return go;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Lu.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function OD(n){if(n==null)return go;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Ui(n){return $a(()=>{let e=Qx(n);return eb(e),e})}function hg(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function Qx(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||go,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Pn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:PD(n.inputs,e),outputs:OD(n.outputs),debugInfo:null}}function eb(n){n.features?.forEach(e=>e(n))}function T0(n,e){if(!n)return null;let t=e?wv:RD;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(ND)}function LD(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function FD(n,e,t,i,r,o,s,a,c){let l=e.consts,u=Xa(e,n,4,s||null,a||null);Jl()&&lg(e,t,u,So(l,c),tg),u.mergedAttrs=Au(u.mergedAttrs,u.attrs),Um(e,u);let d=u.tView=Km(2,u,i,r,o,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function tb(n,e,t,i,r,o,s,a,c,l,u){let d=t+an,f=e.firstCreatePass?FD(d,e,n,i,r,o,s,a,l):e.data[d];c&&(f.flags|=c),Tr(f,!1);let h=kD(e,n,f,t);Oa()&&Uu(e,n,h,f),xs(h,n);let g=kx(h,n,h,f);return n[d]=g,Qm(n,g),yD(g,f,n),Aa(f)&&Fu(e,n,f),l!=null&&eg(n,f,u),f}function Tt(n,e,t,i,r,o,s,a){let c=gt(),l=cn(),u=So(l.consts,o);return tb(c,l,n,e,t,i,r,u,void 0,s,a),Tt}var kD=UD;function UD(n,e,t,i){return La(!0),e[Gt].createComment("")}var pg=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(pg||{}),Za=new je(""),nb=!1,Rm=class extends ai{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Av()&&(this.destroyRef=pe(Fa,{optional:!0})??void 0,this.pendingTasks=pe(ms,{optional:!0})??void 0)}emit(e){let t=Ye(null);try{super.next(e)}finally{Ye(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof Ot&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Fn=Rm;function ib(n){let e,t;function i(){n=Ua;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function C0(n){return queueMicrotask(()=>n()),()=>{n=Ua}}var mg="isAngularZone",wu=mg+"_ID",BD=0,It=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Fn(!1);onMicrotaskEmpty=new Fn(!1);onStable=new Fn(!1);onError=new Fn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=nb}=e;if(typeof Zone>"u")throw new Ne(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,zD(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(mg)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ne(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ne(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,VD,Ua,Ua);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},VD={};function gg(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function HD(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ib(()=>{n.callbackScheduled=!1,Nm(n),n.isCheckStableRunning=!0,gg(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Nm(n)}function zD(n){let e=()=>{HD(n)},t=BD++;n._inner=n._inner.fork({name:"angular",properties:{[mg]:!0,[wu]:t,[wu+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(GD(c))return i.invokeTask(o,s,a,c);try{return D0(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),I0(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return D0(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!jD(c)&&e(),I0(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Nm(n),gg(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Nm(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function D0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function I0(n){n._nesting--,gg(n)}var Tu=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Fn;onMicrotaskEmpty=new Fn;onStable=new Fn;onError=new Fn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function GD(n){return rb(n,"__ignore_ng_zone__")}function jD(n){return rb(n,"__scheduler_tick__")}function rb(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ob=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();var _g=new je("");function Ka(n){return!!n&&typeof n.then=="function"}function zu(n){return!!n&&typeof n.subscribe=="function"}var sb=new je("");var yg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=pe(sb,{optional:!0})??[];injector=pe(Ri);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=Ta(this.injector,r);if(Ka(o))t.push(o);else if(zu(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ab=new je("");function cb(){Oh(()=>{let n="";throw new Ne(600,n)})}function lb(n){return n.isBoundToModule}var WD=10;var Ms=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=pe(Pi);afterRenderManager=pe(ob);zonelessEnabled=pe(ka);rootEffectScheduler=pe(Yp);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new ai;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=pe(ms);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Ft(t=>!t))}constructor(){pe(Za,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=pe($n);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Ri.NULL){return this._injector.get(It).run(()=>{bt(10);let s=t instanceof Hu;if(!this._injector.get(yg).done){let g="";throw new Ne(405,g)}let c;s?c=t:c=this._injector.get(Ya).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=lb(c)?void 0:this._injector.get(Ar),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(_g,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Va(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),bt(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){bt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(pg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ne(101,!1);let t=Ye(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Ye(t),this.afterTick.next(),bt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(To,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<WD;)bt(14),this.synchronizeOnce(),bt(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ra(r))continue;let o=i&&!this.zonelessEnabled?0:1;ag(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ra(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Va(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(ab,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Va(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ne(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Va(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function hn(n,e,t,i){let r=gt(),o=tu();if(Es(r,o,e)){let s=cn(),a=Wp();lC(a,r,n,e,t,i)}return hn}function We(n,e,t){let i=gt(),r=tu();if(Es(i,r,e)){let o=cn(),s=Wp();iC(s,i,n,e,i[Gt],t)}return We}function Pm(n,e,t,i,r){ng(e,n,t,r?"class":"style",i)}function ie(n,e,t,i){let r=gt(),o=cn(),s=an+n,a=r[Gt],c=o.firstCreatePass?Gx(s,o,r,e,tg,Jl(),t,i):o.data[s],l=$D(o,r,c,a,e,n);r[s]=l;let u=Aa(c);return Tr(c,!0),gx(a,l,c),!ku(c)&&Oa()&&Uu(o,r,l,c),(Uv()===0||u)&&xs(l,r),Bv(),u&&(Fu(o,r,c),Gm(o,c,r)),i!==null&&eg(r,c),ie}function ae(){let n=Xn();Ql()?eu():(n=n.parent,Tr(n,!1));let e=n;Hv(e)&&zv(),Vv();let t=cn();return t.firstCreatePass&&jx(t,e),e.classesWithoutHost!=null&&Uw(e)&&Pm(t,e,gt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Bw(e)&&Pm(t,e,gt(),e.stylesWithoutHost,!1),ae}function Vt(n,e,t,i){return ie(n,e,t,i),ae(),Vt}var $D=(n,e,t,i,r,o)=>(La(!0),px(i,r,t0()));function qD(n,e,t,i,r){let o=e.consts,s=So(o,i),a=Xa(e,n,8,"ng-container",s);s!==null&&Mm(a,s,!0);let c=So(o,r);return Jl()&&lg(e,t,a,c,tg),a.mergedAttrs=Au(a.mergedAttrs,a.attrs),e.queries!==null&&e.queries.elementStart(e,a),a}function kn(n,e,t){let i=gt(),r=cn(),o=n+an,s=r.firstCreatePass?qD(o,r,i,e,t):r.data[o];Tr(s,!0);let a=XD(r,i,s,n);return i[o]=a,Oa()&&Uu(r,i,a,s),xs(a,i),Aa(s)&&(Fu(r,i,s),Gm(r,s,i)),t!=null&&eg(i,s),kn}function Un(){let n=Xn(),e=cn();return Ql()?eu():(n=n.parent,Tr(n,!1)),e.firstCreatePass&&(Um(e,n),Xl(n)&&e.queries.elementEnd(n)),Un}function Ss(n,e,t){return kn(n,e,t),Un(),Ss}var XD=(n,e,t,i)=>(La(!0),$T(e[Gt],""));function Tn(){return gt()}var Ja="en-US";var YD=Ja;function ub(n){typeof n=="string"&&(YD=n.toLowerCase().replace(/_/g,"-"))}function At(n,e,t){let i=gt(),r=cn(),o=Xn();return ZD(r,i,i[Gt],o,n,e,t),At}function ZD(n,e,t,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=Qp(i,e,o),iD(i,n,e,s,t,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=Qp(i,e,o),E0(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=Qp(i,e,o),E0(i,e,d,r,r,c)}}function Qe(n=1){return e0(n)}function KD(n,e){let t=null,i=kT(n);for(let r=0;r<e.length;r++){let o=e[r];if(o==="*"){t=r;continue}if(i===null?hx(n,o,!0):VT(i,o))return r}return t}function vg(n){let e=gt()[Ln][Mn];if(!e.projection){let t=n?n.length:1,i=e.projection=Ev(t,null),r=i.slice(),o=e.child;for(;o!==null;){if(o.type!==128){let s=n?KD(o,n):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function xg(n,e=0,t,i,r,o){let s=gt(),a=cn(),c=i?n+1:null;c!==null&&tb(s,a,c,i,r,o,null,t);let l=Xa(a,an+n,16,null,t||null);l.projection===null&&(l.projection=e),eu();let d=!s[ds]||Fp();s[Ln][Mn].projection[l.projection]===null&&c!==null?JD(s,a,c):d&&!ku(l)&&TC(a,s,l)}function JD(n,e,t){let i=an+t,r=e.data[i],o=n[i],s=xm(o,r.tView.ssrId),a=bx(n,r,void 0,{dehydratedView:s});Ux(o,a,0,gm(r,s))}function Qa(n,e,t){TD(n,e,t)}function ec(n){let e=gt(),t=cn(),i=zp();iu(i+1);let r=dg(t,i);if(n.dirty&&Pv(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=ID(e,i);n.reset(o,Qw),n.notifyOnChanges()}return!0}return!1}function tc(){return SD(gt(),zp())}function bg(n){let e=jv();return Ip(e,an+n)}function uu(n,e){return n<<17|e<<2}function Co(n){return n>>17&32767}function QD(n){return(n&2)==2}function eI(n,e){return n&131071|e<<17}function Om(n){return n|2}function ys(n){return(n&131068)>>2}function tm(n,e){return n&-131069|e<<2}function tI(n){return(n&1)===1}function Lm(n){return n|1}function nI(n,e,t,i,r,o){let s=o?e.classBindings:e.styleBindings,a=Co(s),c=ys(s);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||us(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Co(n[a+1]);n[i+1]=uu(f,a),f!==0&&(n[f+1]=tm(n[f+1],i)),n[a+1]=eI(n[a+1],i)}else n[i+1]=uu(a,0),a!==0&&(n[a+1]=tm(n[a+1],i)),a=i;else n[i+1]=uu(c,0),a===0?a=i:n[c+1]=tm(n[c+1],i),c=i;l&&(n[i+1]=Om(n[i+1])),A0(n,u,i,!0),A0(n,u,i,!1),iI(e,u,n,i,o),s=uu(a,c),o?e.classBindings=s:e.styleBindings=s}function iI(n,e,t,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&us(o,e)>=0&&(t[i+1]=Lm(t[i+1]))}function A0(n,e,t,i){let r=n[t+1],o=e===null,s=i?Co(r):ys(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];rI(c,e)&&(a=!0,n[s+1]=i?Lm(l):Om(l)),s=i?Co(l):ys(l)}a&&(n[t+1]=i?Om(r):Lm(r))}function rI(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?us(n,e)>=0:!1}var Mi={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function oI(n){return n.substring(Mi.key,Mi.keyEnd)}function sI(n){return aI(n),db(n,fb(n,0,Mi.textEnd))}function db(n,e){let t=Mi.textEnd;return t===e?-1:(e=Mi.keyEnd=cI(n,Mi.key=e,t),fb(n,e,t))}function aI(n){Mi.key=0,Mi.keyEnd=0,Mi.value=0,Mi.valueEnd=0,Mi.textEnd=n.length}function fb(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function cI(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function Gu(n,e,t){return hb(n,e,t,!1),Gu}function Nr(n,e){return hb(n,e,null,!0),Nr}function Eg(n){uI(gI,lI,n,!0)}function lI(n,e){for(let t=sI(e);t>=0;t=db(e,t))jl(n,oI(e),!0)}function hb(n,e,t,i){let r=gt(),o=cn(),s=Hp(2);if(o.firstUpdatePass&&mb(o,n,s,i),e!==Si&&Es(r,s,e)){let a=o.data[Cr()];gb(o,a,r,r[Gt],n,r[s+1]=yI(e,t),i,s)}}function uI(n,e,t,i){let r=cn(),o=Hp(2);r.firstUpdatePass&&mb(r,null,o,i);let s=gt();if(t!==Si&&Es(s,o,t)){let a=r.data[Cr()];if(_b(a,i)&&!pb(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=kl(c,t||"")),Pm(r,a,s,t,i)}else _I(r,a,s,s[Gt],s[o+1],s[o+1]=mI(n,e,t),i,o)}}function pb(n,e){return e>=n.expandoStartIndex}function mb(n,e,t,i){let r=n.data;if(r[t+1]===null){let o=r[Cr()],s=pb(n,t);_b(o,i)&&e===null&&!s&&(e=!1),e=dI(r,o,e,i),nI(r,o,e,t,s,i)}}function dI(n,e,t,i){let r=Zv(n),o=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=nm(null,n,e,t,i),t=Wa(t,e.attrs,i),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==r)if(t=nm(r,n,e,t,i),o===null){let c=fI(n,e,i);c!==void 0&&Array.isArray(c)&&(c=nm(null,n,e,c[1],i),c=Wa(c,e.attrs,i),hI(n,e,i,c))}else o=pI(n,e,i)}return o!==void 0&&(i?e.residualClasses=o:e.residualStyles=o),t}function fI(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ys(i)!==0)return n[Co(i)]}function hI(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Co(r)]=i}function pI(n,e,t){let i,r=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=Wa(i,s,t)}return Wa(i,e.attrs,t)}function nm(n,e,t,i,r){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],i=Wa(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Wa(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),jl(n,s,t?!0:e[++o]))}return n===void 0?null:n}function mI(n,e,t){if(t==null||t==="")return Pn;let i=[],r=ir(t);if(Array.isArray(r))for(let o=0;o<r.length;o++)n(i,r[o],!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&n(i,o,r[o]);else typeof r=="string"&&e(i,r);return i}function gI(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&jl(n,i,t)}function _I(n,e,t,i,r,o,s,a){r===Si&&(r=Pn);let c=0,l=0,u=0<r.length?r[0]:null,d=0<o.length?o[0]:null;for(;u!==null||d!==null;){let f=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,g=null,y;u===d?(c+=2,l+=2,f!==h&&(g=d,y=h)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,y=h),g!==null&&gb(n,e,t,i,g,y,s,a),u=c<r.length?r[c]:null,d=l<o.length?o[l]:null}}function gb(n,e,t,i,r,o,s,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=tI(l)?R0(c,e,t,r,ys(l),s):void 0;if(!Cu(u)){Cu(o)||QD(l)&&(o=R0(c,null,t,r,a,s));let d=Dp(Cr(),t);DC(i,s,d,r,o)}}function R0(n,e,t,i,r,o){let s=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Si&&(f=d?Pn:void 0);let h=d?Wl(f,i):u===i?f:void 0;if(l&&!Cu(h)&&(h=Wl(c,i)),Cu(h)&&(a=h,s))return a;let g=n[r+1];r=s?Co(g):ys(g)}if(e!==null){let c=o?e.residualClasses:e.residualStyles;c!=null&&(a=Wl(c,i))}return a}function Cu(n){return n!==void 0}function yI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Nn(ir(n)))),n}function _b(n,e){return(n.flags&(e?8:16))!==0}function He(n,e=""){let t=gt(),i=cn(),r=n+an,o=i.firstCreatePass?Xa(i,r,1,e,null):i.data[r],s=vI(i,t,o,e,n);t[r]=s,Oa()&&Uu(i,t,s,o),Tr(o,!1)}var vI=(n,e,t,i,r)=>(La(!0),jT(e[Gt],i));function xI(n,e,t,i=""){return Es(n,tu(),t)?e+Hl(t)+i:Si}function dn(n){return nc("",n),dn}function nc(n,e,t){let i=gt(),r=xI(i,n,e,t);return r!==Si&&bI(i,Cr(),r),nc}function bI(n,e,t){let i=Dp(e,n);WT(n[Gt],i,t)}function EI(n,e){let t=n[e];return t===Si?void 0:t}function MI(n,e,t,i,r,o){let s=e+t;return Es(n,s,r)?nD(n,s+1,o?i.call(o,r):i(r)):EI(n,s+1)}function Io(n,e){let t=cn(),i,r=n+an;t.firstCreatePass?(i=SI(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let o=i.factory||(i.factory=fo(i.type,!0)),s,a=bn(dt);try{let c=yu(!1),l=o();return yu(c),Ap(t,gt(),r,l),l}finally{bn(a)}}function SI(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function Ao(n,e,t){let i=n+an,r=gt(),o=Ip(r,i);return wI(r,i)?MI(r,Wv(),e,o.transform,t,o):o.transform(t)}function wI(n,e){return n[qe].data[e].pure}function Mg(n,e){return Vu(n,e)}var TI=(()=>{class n{zone=pe(It);changeDetectionScheduler=pe(po);applicationRef=pe(Ms);applicationErrorHandler=pe(Pi);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yb({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new It(Xt(at({},vb()),{scheduleInRootZone:t})),[{provide:It,useFactory:n},{provide:Er,multi:!0,useFactory:()=>{let i=pe(TI,{optional:!0});return()=>i.initialize()}},{provide:Er,multi:!0,useFactory:()=>{let i=pe(CI);return()=>{i.initialize()}}},e===!0?{provide:qp,useValue:!0}:[],{provide:Xp,useValue:t??nb},{provide:Pi,useFactory:()=>{let i=pe(It),r=pe($n),o;return s=>{o??=r.get(En),i.runOutsideAngular(()=>o.handleError(s))}}}]}function vb(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var CI=(()=>{class n{subscription=new Ot;initialized=!1;zone=pe(It);pendingTasks=pe(ms);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{It.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{It.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xb=(()=>{class n{applicationErrorHandler=pe(Pi);appRef=pe(Ms);taskService=pe(ms);ngZone=pe(It);zonelessEnabled=pe(ka);tracing=pe(Za,{optional:!0});disableScheduling=pe(qp,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ot;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(wu):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(pe(Xp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Tu||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?C0:ib;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(wu+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,C0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function DI(){return typeof $localize<"u"&&$localize.locale||Ja}var ju=new je("",{providedIn:"root",factory:()=>pe(ju,{optional:!0,skipSelf:!0})||DI()});function Wu(n){return dv(n)}var bb=class{[ro];constructor(e){this[ro]=e}destroy(){this[ro].destroy()}};var qu=class{attributeName;constructor(e){this.attributeName=e}__NG_ELEMENT_ID__=()=>Vm(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},GI=new je("");GI.__NG_ELEMENT_ID__=n=>{let e=Xn();if(e===null)throw new Ne(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Ne(204,!1)};var Sg=new je(""),jI=new je("");function ic(n){return!n.moduleRef}function WI(n){let e=ic(n)?n.r3Injector:n.moduleRef.injector,t=e.get(It);return t.run(()=>{ic(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Pi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),ic(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Sg);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Sg);s.add(o),n.moduleRef.onDestroy(()=>{Va(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return qI(i,t,()=>{let o=e.get(yg);return o.runInitializers(),o.donePromise.then(()=>{let s=e.get(ju,Ja);if(ub(s||Ja),!e.get(jI,!0))return ic(n)?e.get(Ms):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ic(n)){let c=e.get(Ms);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return $I?.(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}var $I;function qI(n,e,t){try{let i=t();return Ka(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var $u=null;function XI(n=[],e){return Ri.create({name:e,providers:[{provide:Sa,useValue:"platform"},{provide:Sg,useValue:new Set([()=>$u=null])},...n]})}function YI(n=[]){if($u)return $u;let e=XI(n);return $u=e,cb(),ZI(e),e}function ZI(n){let e=n.get(Nu,null);Ta(n,()=>{e?.forEach(t=>t())})}var Yu=(()=>{class n{static __NG_ELEMENT_ID__=KI}return n})();function KI(n){return JI(Xn(),gt(),(n&16)===16)}function JI(n,e,t){if(wr(n)&&!t){let i=bi(n.index,e);return new Ir(i,i)}else if(n.type&175){let i=e[Ln];return new Ir(i,e)}return null}var wg=class{constructor(){}supports(e){return ug(e)}create(e){return new Tg(e)}},QI=(n,e)=>e,Tg=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||QI}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,o=null;for(;t||i;){let s=!i||t&&t.currentIndex<Eb(i,r,o)?t:i,a=Eb(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(t=t._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<o.length?o[f]:o[f]=0,g=h+f;u<=g&&g<l&&(o[f]=h+1)}let d=s.previousIndex;o[d]=u-l}}a!==c&&e(s,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!ug(e))throw new Ne(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,o,s;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)o=e[a],s=this._trackByFn(a,o),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,o,s,a),i=!0):(i&&(t=this._verifyReinsertion(t,o,s,a)),Object.is(t.item,o)||this._addIdentityChange(t,o)),t=t._next}else r=0,Wx(e,a=>{s=this._trackByFn(r,a),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,a,s,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,s,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let o;return e===null?o=this._itTail:(o=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):e=this._addAfter(new Cg(t,i),o,r)),e}_verifyReinsertion(e,t,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,o=e._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Xu),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Xu),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Cg=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},Dg=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Xu=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Dg,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Eb(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Mb(){return new Ig([new wg])}var Ig=(()=>{class n{factories;static \u0275prov=Ve({token:n,providedIn:"root",factory:Mb});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||Mb()),deps:[[n,new km,new Du]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Ne(901,!1)}}return n})();function Sb(n){bt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=YI(i),o=[yb({}),{provide:po,useExisting:xb},i0,...t||[]],s=new ja({providers:o,parent:r,debugName:"",runEnvironmentInitializers:!1});return WI({r3Injector:s.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{bt(9)}}function Ag(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var wb=null;function ws(){return wb}function Rg(n){wb??=n}var rc=class{};var oc=(()=>{class n{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletContent;ngComponentOutletNgModule;ngComponentOutletNgModuleFactory;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(t){this._viewContainerRef=t}_needToReCreateNgModuleInstance(t){return t.ngComponentOutletNgModule!==void 0||t.ngComponentOutletNgModuleFactory!==void 0}_needToReCreateComponentInstance(t){return t.ngComponentOutlet!==void 0||t.ngComponentOutletContent!==void 0||t.ngComponentOutletInjector!==void 0||this._needToReCreateNgModuleInstance(t)}ngOnChanges(t){if(this._needToReCreateComponentInstance(t)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){let i=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(t)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=fg(this.ngComponentOutletNgModule,Tb(i)):this.ngComponentOutletNgModuleFactory?this._moduleRef=this.ngComponentOutletNgModuleFactory.create(Tb(i)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:i,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(let t of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(t,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(t){for(let[i,r]of this._inputsUsed)r?(t.setInput(i,this.ngComponentOutletInputs[i]),this._inputsUsed.set(i,!1)):(t.setInput(i,void 0),this._inputsUsed.delete(i))}static \u0275fac=function(i){return new(i||n)(dt(ki))};static \u0275dir=Ui({type:n,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},exportAs:["ngComponentOutlet"],features:[Iu]})}return n})();function Tb(n){return n.get(Ar).injector}var Zu=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Bi=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Zu(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),Cb(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Cb(o,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(dt(ki),dt(Fi),dt(Ig))};static \u0275dir=Ui({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Cb(n,e){n.context.$implicit=e.item}var wi=(()=>{class n{_viewContainer;_context=new Ku;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Db(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Db(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(dt(ki),dt(Fi))};static \u0275dir=Ui({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Ku=class{$implicit=null;ngIf=null};function Db(n,e){if(n&&!n.createEmbeddedView)throw new Ne(2020,!1)}var Ju=class{_viewContainerRef;_templateRef;_created=!1;constructor(e,t){this._viewContainerRef=e,this._templateRef=t}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}},sc=(()=>{class n{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(t){this._ngSwitch=t,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews.push(t)}_matchCase(t){let i=t===this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(t){if(this._defaultViews.length>0&&t!==this._defaultUsed){this._defaultUsed=t;for(let i of this._defaultViews)i.enforceState(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Ui({type:n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return n})(),Og=(()=>{class n{ngSwitch;_view;ngSwitchCase;constructor(t,i,r){this.ngSwitch=r,r._addCase(),this._view=new Ju(t,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(i){return new(i||n)(dt(ki),dt(Fi),dt(sc,9))};static \u0275dir=Ui({type:n,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return n})(),Lg=(()=>{class n{constructor(t,i,r){r._addDefault(new Ju(t,i))}static \u0275fac=function(i){return new(i||n)(dt(ki),dt(Fi),dt(sc,9))};static \u0275dir=Ui({type:n,selectors:[["","ngSwitchDefault",""]]})}return n})();function eA(n,e){return new Ne(2100,!1)}var Ng=class{createSubscription(e,t,i){return Wu(()=>e.subscribe({next:t,error:i}))}dispose(e){Wu(()=>e.unsubscribe())}},Pg=class{createSubscription(e,t,i){return e.then(r=>t?.(r),r=>i?.(r)),{unsubscribe:()=>{t=null,i=null}}}dispose(e){e.unsubscribe()}},tA=new Pg,nA=new Ng,Ro=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=pe(Pi);constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,i=>this._updateLatestValue(t,i),i=>this.applicationErrorHandler(i))}_selectStrategy(t){if(Ka(t))return tA;if(zu(t))return nA;throw eA(n,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,i){t===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||n)(dt(Yu,16))};static \u0275pipe=hg({name:"async",type:n,pure:!1})}return n})();var tn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yn({type:n});static \u0275inj=On({})}return n})();function Fg(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var ac=class{};var kg="browser",iA="server";function Ib(n){return n===kg}function Ab(n){return n===iA}var td=new je(""),Hg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Ne(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ke(td),ke(It))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),lc=class{_doc;constructor(e){this._doc=e}manager},Qu="ng-app-id";function Rb(n){for(let e of n)e.remove()}function Nb(n,e){let t=e.createElement("style");return t.textContent=n,t}function rA(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Qu}="${e}"],link[${Qu}="${e}"]`);if(r)for(let o of r)o.removeAttribute(Qu),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Bg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var zg=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Ab(o),rA(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Nb);i?.forEach(r=>this.addUsage(r,this.external,Bg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Rb(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Rb(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Nb(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Bg(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Qu,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ke(Wt),ke(Ru),ke(bs,8),ke(Rr))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Ug={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Gg=/%COMP%/g;var Ob="%COMP%",oA=`_nghost-${Ob}`,sA=`_ngcontent-${Ob}`,aA=!0,cA=new je("",{providedIn:"root",factory:()=>aA});function lA(n){return sA.replace(Gg,n)}function uA(n){return oA.replace(Gg,n)}function Lb(n,e){return e.map(t=>t.replace(Gg,n))}var jg=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,o,s,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new uc(t,s,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof ed?r.applyToHost(t):r instanceof dc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case er.Emulated:o=new ed(c,l,i,this.appId,u,s,a,d,f);break;case er.ShadowDom:return new Vg(c,l,t,i,s,a,this.nonce,d,f);default:o=new dc(c,l,i,u,s,a,d,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ke(Hg),ke(zg),ke(Ru),ke(cA),ke(Wt),ke(Rr),ke(It),ke(bs),ke(Za,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),uc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,o){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Ug[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Pb(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Pb(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ne(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Ug[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Ug[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Li.DashCase|Li.Important)?e.style.setProperty(t,i,r&Li.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Li.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=ws().getGlobalEventTarget(this.doc,e),!e))throw new Ne(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Pb(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Vg=class extends uc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Lb(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Bg(f,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},dc=class extends uc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?Lb(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ed=class extends dc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c,l){let u=r+"-"+i.id;super(e,t,i,o,s,a,c,l,u),this.contentAttr=lA(u),this.hostAttr=uA(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var nd=class n extends rc{supportsDOMEvents=!0;static makeCurrent(){Rg(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=dA();return t==null?null:fA(t)}resetBaseElement(){fc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Fg(document.cookie,e)}},fc=null;function dA(){return fc=fc||document.head.querySelector("base"),fc?fc.getAttribute("href"):null}function fA(n){return new URL(n,document.baseURI).pathname}var hA=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),kb=(()=>{class n extends lc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Fb=["alt","control","meta","shift"],pA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},mA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ub=(()=>{class n extends lc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ws().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),Fb.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=pA[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Fb.forEach(s=>{if(s!==r){let a=mA[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})();function Wg(n,e){return Sb(at({rootComponent:n},gA(e)))}function gA(n){return{appProviders:[...bA,...n?.providers??[]],platformProviders:xA}}function _A(){nd.makeCurrent()}function yA(){return new En}function vA(){return zm(document),document}var xA=[{provide:Rr,useValue:kg},{provide:Nu,useValue:_A,multi:!0},{provide:Wt,useFactory:vA}];var bA=[{provide:Sa,useValue:"root"},{provide:En,useFactory:yA},{provide:td,useClass:kb,multi:!0,deps:[Wt]},{provide:td,useClass:Ub,multi:!0,deps:[Wt]},jg,zg,Hg,{provide:To,useExisting:jg},{provide:ac,useClass:hA},[]];var qg=class{};var No=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),o=t.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Xg=class{encodeKey(e){return Bb(e)}encodeValue(e){return Bb(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function EA(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],c=t.get(s)||[];c.push(a),t.set(s,c)}),t}var MA=/%(\d[a-f0-9])/gi,SA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Bb(n){return encodeURIComponent(n).replace(MA,(e,t)=>SA[t]??e)}function id(n){return`${n}`}var or=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Xg,e.fromString){if(e.fromObject)throw new Ne(2805,!1);this.map=EA(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(id):[id(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(o=>{t.push({param:i,value:o,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(id(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(id(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Yg=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function wA(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Vb(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Hb(n){return typeof Blob<"u"&&n instanceof Blob}function zb(n){return typeof FormData<"u"&&n instanceof FormData}function TA(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var CA="X-Request-URL",Gb="text/plain",jb="application/json",c6=`${jb}, ${Gb}, */*`,Ts=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;keepalive=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,i,r){this.url=t,this.method=e.toUpperCase();let o;if(wA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new No,this.context??=new Yg,!this.params)this.params=new or,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Vb(this.body)||Hb(this.body)||zb(this.body)||TA(this.body)?this.body:this.body instanceof or?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zb(this.body)?null:Hb(this.body)?this.body.type||null:Vb(this.body)?null:typeof this.body=="string"?Gb:this.body instanceof or?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?jb:null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,o=e.keepalive??this.keepalive,s=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,c=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,u=e.headers||this.headers,d=e.params||this.params,f=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((h,g)=>h.set(g,e.setHeaders[g]),u)),e.setParams&&(d=Object.keys(e.setParams).reduce((h,g)=>h.set(g,e.setParams[g]),d)),new n(t,i,a,{params:d,headers:u,context:f,reportProgress:l,responseType:r,withCredentials:c,transferCache:s,keepalive:o})}},Kg=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Kg||{}),Zg=class{headers;status;statusText;url;ok;type;constructor(e,t=200,i="OK"){this.headers=e.headers||new No,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var rd=class n extends Zg{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Kg.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};function $g(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache,keepalive:n.keepalive}}var Jg=(()=>{class n{handler;constructor(t){this.handler=t}request(t,i,r={}){let o;if(t instanceof Ts)o=t;else{let c;r.headers instanceof No?c=r.headers:c=new No(r.headers);let l;r.params&&(r.params instanceof or?l=r.params:l=new or({fromObject:r.params})),o=new Ts(t,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive})}let s=Zi(o).pipe(Wh(c=>this.handler.handle(c)));if(t instanceof Ts||r.observe==="events")return s;let a=s.pipe(_a(c=>c instanceof rd));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Ft(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Ne(2806,!1);return c.body}));case"blob":return a.pipe(Ft(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Ne(2807,!1);return c.body}));case"text":return a.pipe(Ft(c=>{if(c.body!==null&&typeof c.body!="string")throw new Ne(2808,!1);return c.body}));case"json":default:return a.pipe(Ft(c=>c.body))}case"response":return a;default:throw new Ne(2809,!1)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new or().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,$g(r,i))}post(t,i,r={}){return this.request("POST",t,$g(r,i))}put(t,i,r={}){return this.request("PUT",t,$g(r,i))}static \u0275fac=function(i){return new(i||n)(ke(qg))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})();var l6=RegExp(`^${CA}:`,"m");var Qg=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=ke(IA),r},providedIn:"root"})}return n})(),IA=(()=>{class n extends Qg{_doc;constructor(t){super(),this._doc=t}sanitize(t,i){if(i==null)return null;switch(t){case wn.NONE:return i;case wn.HTML:return Do(i,"HTML")?ir(i):Ym(this._doc,String(i)).toString();case wn.STYLE:return Do(i,"Style")?ir(i):i;case wn.SCRIPT:if(Do(i,"Script"))return ir(i);throw new Ne(5200,!1);case wn.URL:return Do(i,"URL")?ir(i):Ou(String(i));case wn.RESOURCE_URL:if(Do(i,"ResourceURL"))return ir(i);throw new Ne(5201,!1);default:throw new Ne(5202,!1)}}bypassSecurityTrustHtml(t){return jm(t)}bypassSecurityTrustStyle(t){return Wm(t)}bypassSecurityTrustScript(t){return $m(t)}bypassSecurityTrustUrl(t){return qm(t)}bypassSecurityTrustResourceUrl(t){return Xm(t)}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gd="177",Xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fE=0,R_=1,hE=2;var N_=1,jd=2,Gi=3,fr=0,In=1,ni=2,Ii=0,Bo=1,Fc=2,P_=3,O_=4,pE=5,Hr=100,mE=101,gE=102,_E=103,yE=104,vE=200,xE=201,bE=202,EE=203,Sd=204,wd=205,ME=206,SE=207,wE=208,TE=209,CE=210,DE=211,IE=212,AE=213,RE=214,Wd=0,$d=1,qd=2,Vo=3,Xd=4,Yd=5,Zd=6,Kd=7,L_=0,NE=1,PE=2,Ai=0,Jd=1,Qd=2,ef=3,tf=4,nf=5,rf=6,of=7;var E_=300,$o=301,qo=302,sf=303,af=304,kc=306,Td=1e3,Vr=1001,Cd=1002,fi=1003,OE=1004;var Uc=1005;var Bn=1006,cf=1007;var Zr=1008;var ii=1009,F_=1010,k_=1011,Js=1012,lf=1013,Kr=1014,ji=1015,pi=1016,uf=1017,df=1018,Qs=1020,U_=35902,B_=1021,V_=1022,Vn=1023,Hs=1026,ea=1027,H_=1028,ff=1029,z_=1030,hf=1031;var pf=1033,Bc=33776,Vc=33777,Hc=33778,zc=33779,mf=35840,gf=35841,_f=35842,yf=35843,vf=36196,xf=37492,bf=37496,Ef=37808,Mf=37809,Sf=37810,wf=37811,Tf=37812,Cf=37813,Df=37814,If=37815,Af=37816,Rf=37817,Nf=37818,Pf=37819,Of=37820,Lf=37821,Gc=36492,Ff=36494,kf=36495,G_=36283,Uf=36284,Bf=36285,Vf=36286;var vc=2300,Dd=2301,Md=2302,M_=2400,S_=2401,w_=2402;var LE=3200,FE=3201;var j_=0,kE=1,mr="",Jn="srgb",hr="srgb-linear",xc="linear",ft="srgb";var ko=7680;var T_=519,UE=512,BE=513,VE=514,W_=515,HE=516,zE=517,GE=518,jE=519,C_=35044;var $_="300 es",Vi=2e3,bc=2001;var Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wb=1234567,_c=Math.PI/180,zs=180/Math.PI;function ta(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function q_(n,e){return(n%e+e)%e}function RA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function NA(n,e,t){return n!==e?(t-n)/(e-n):0}function yc(n,e,t){return(1-t)*n+t*e}function PA(n,e,t,i){return yc(n,e,1-Math.exp(-t*i))}function OA(n,e=1){return e-Math.abs(q_(n,e*2)-e)}function LA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function FA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function UA(n,e){return n+Math.random()*(e-n)}function BA(n){return n*(.5-Math.random())}function VA(n){n!==void 0&&(Wb=n);let e=Wb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HA(n){return n*_c}function zA(n){return n*zs}function GA(n){return(n&n-1)===0&&n!==0}function jA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function WA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $A(n,e,t,i,r){let o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),f=s((e-i)/2),h=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var X_={DEG2RAD:_c,RAD2DEG:zs,generateUUID:ta,clamp:tt,euclideanModulo:q_,mapLinear:RA,inverseLerp:NA,lerp:yc,damp:PA,pingpong:OA,smoothstep:LA,smootherstep:FA,randInt:kA,randFloat:UA,randFloatSpread:BA,seededRandom:VA,degToRad:HA,radToDeg:zA,isPowerOfTwo:GA,ceilPowerOfTwo:jA,floorPowerOfTwo:WA,setQuaternionFromProperEuler:$A,normalize:Dn,denormalize:Bs},Ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let R=Math.sqrt(S),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let b=a*w;if(c=c*m+f*b,l=l*m+h*b,u=u*m+g*b,d=d*m+y*b,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),f=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*s+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($b.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($b.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return e_.copy(this).projectOnVector(e),this.sub(e_)}reflect(e){return this.sub(e_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},e_=new O,$b=new hi,$e=class n{constructor(e,t,i,r,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],S=r[4],b=r[7],R=r[2],A=r[5],C=r[8];return o[0]=s*y+a*w+c*R,o[3]=s*m+a*S+c*A,o[6]=s*p+a*b+c*C,o[1]=l*y+u*w+d*R,o[4]=l*m+u*S+d*A,o[7]=l*p+u*b+d*C,o[2]=f*y+h*w+g*R,o[5]=f*m+h*S+g*A,o[8]=f*p+h*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,h=l*o-s*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*s)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*o-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(s*t-i*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(t_.makeScale(e,t)),this}rotate(e){return this.premultiply(t_.makeRotation(-e)),this}translate(e,t){return this.premultiply(t_.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},t_=new $e;function Y_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WE(){let n=Ec("canvas");return n.style.display="block",n}var qb={};function Ho(n){n in qb||(qb[n]=!0,console.warn(n))}function $E(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function qE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function XE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xb=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yb=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qA(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ft&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?xc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Ho("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Ho("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:Xb,fromXYZ:Yb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Xb,fromXYZ:Yb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),n}var it=qA();function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cs,Id=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=Ec("canvas")),Cs.width=e.width,Cs.height=e.height;let r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ec("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=dr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},XA=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(n_(r[s].image)):o.push(n_(r[s]))}else o=n_(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function n_(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var YA=0,i_=new O,Jr=(()=>{class n extends Hi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Vr,o=Vr,s=Bn,a=Zr,c=Vn,l=ii,u=n.DEFAULT_ANISOTROPY,d=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=ta(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(i_).x}get height(){return this.source.getSize(i_).y}get depth(){return this.source.getSize(i_).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case Vr:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case Vr:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=E_,n.DEFAULT_ANISOTROPY=1,n})(),kt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,b=(h+1)/2,R=(p+1)/2,A=(u+f)/4,C=(d+y)/4,L=(g+m)/4;return S>b&&S>R?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=A/i,o=C/i):b>R?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=A/r,o=L/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=C/o,r=L/o),this.set(i,r,o,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ad=class extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);let r={width:e,height:t,depth:i.depth},o=new Jr(r);this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Mc=class extends Jr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rd=class extends Jr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Ti):Ti.fromBufferAttribute(o,s),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),od.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),od.copy(i.boundingBox)),od.applyMatrix4(e.matrixWorld),this.union(od)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hc),sd.subVectors(this.max,hc),Ds.subVectors(e.a,hc),Is.subVectors(e.b,hc),As.subVectors(e.c,hc),Pr.subVectors(Is,Ds),Or.subVectors(As,Is),Po.subVectors(Ds,As);let t=[0,-Pr.z,Pr.y,0,-Or.z,Or.y,0,-Po.z,Po.y,Pr.z,0,-Pr.x,Or.z,0,-Or.x,Po.z,0,-Po.x,-Pr.y,Pr.x,0,-Or.y,Or.x,0,-Po.y,Po.x,0];return!r_(t,Ds,Is,As,sd)||(t=[1,0,0,0,1,0,0,0,1],!r_(t,Ds,Is,As,sd))?!1:(ad.crossVectors(Pr,Or),t=[ad.x,ad.y,ad.z],r_(t,Ds,Is,As,sd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new O,new O,new O,new O,new O,new O,new O,new O],Ti=new O,od=new zr,Ds=new O,Is=new O,As=new O,Pr=new O,Or=new O,Po=new O,hc=new O,sd=new O,ad=new O,Oo=new O;function r_(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Oo.fromArray(n,o);let a=r.x*Math.abs(Oo.x)+r.y*Math.abs(Oo.y)+r.z*Math.abs(Oo.z),c=e.dot(Oo),l=t.dot(Oo),u=i.dot(Oo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ZA=new zr,pc=new O,o_=new O,js=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ZA.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pc.subVectors(e,this.center);let t=pc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(o_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pc.copy(e.center).add(o_)),this.expandByPoint(pc.copy(e.center).sub(o_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ar=new O,s_=new O,cd=new O,Lr=new O,a_=new O,ld=new O,c_=new O,Ws=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){s_.copy(e).add(t).multiplyScalar(.5),cd.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(s_);let o=e.distanceTo(t)*.5,s=-this.direction.dot(cd),a=Lr.dot(this.direction),c=-Lr.dot(cd),l=Lr.lengthSq(),u=Math.abs(1-s*s),d,f,h,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),h=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(s_).addScaledVector(cd,f),h}intersectSphere(e,t){ar.subVectors(e.center,this.origin);let i=ar.dot(this.direction),r=ar.dot(ar)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,r,o){a_.subVectors(t,e),ld.subVectors(i,e),c_.crossVectors(a_,ld);let s=this.direction.dot(c_),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Lr.subVectors(this.origin,e);let c=a*this.direction.dot(ld.crossVectors(Lr,ld));if(c<0)return null;let l=a*this.direction.dot(a_.cross(Lr));if(l<0||c+l>s)return null;let u=-a*Lr.dot(c_);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class n{constructor(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Rs.setFromMatrixColumn(e,0).length(),o=1/Rs.setFromMatrixColumn(e,1).length(),s=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=y-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KA,e,JA)}lookAt(e,t,i){let r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Fr.crossVectors(i,Zn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Fr.crossVectors(i,Zn)),Fr.normalize(),ud.crossVectors(Zn,Fr),r[0]=Fr.x,r[4]=ud.x,r[8]=Zn.x,r[1]=Fr.y,r[5]=ud.y,r[9]=Zn.y,r[2]=Fr.z,r[6]=ud.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],S=i[7],b=i[11],R=i[15],A=r[0],C=r[4],L=r[8],E=r[12],x=r[1],D=r[5],H=r[9],k=r[13],$=r[2],q=r[6],j=r[10],Z=r[14],V=r[3],ne=r[7],de=r[11],Te=r[15];return o[0]=s*A+a*x+c*$+l*V,o[4]=s*C+a*D+c*q+l*ne,o[8]=s*L+a*H+c*j+l*de,o[12]=s*E+a*k+c*Z+l*Te,o[1]=u*A+d*x+f*$+h*V,o[5]=u*C+d*D+f*q+h*ne,o[9]=u*L+d*H+f*j+h*de,o[13]=u*E+d*k+f*Z+h*Te,o[2]=g*A+y*x+m*$+p*V,o[6]=g*C+y*D+m*q+p*ne,o[10]=g*L+y*H+m*j+p*de,o[14]=g*E+y*k+m*Z+p*Te,o[3]=w*A+S*x+b*$+R*V,o[7]=w*C+S*D+b*q+R*ne,o[11]=w*L+S*H+b*j+R*de,o[15]=w*E+S*k+b*Z+R*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+o*c*d-r*l*d-o*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+o*s*f-r*s*h+r*l*u-o*c*u)+m*(+t*l*d-t*a*h-o*s*d+i*s*h+o*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*s*d-i*s*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+s*m*h+u*c*p-s*f*p,b=u*y*l-g*d*l+g*a*h-s*y*h-u*a*p+s*d*p,R=g*d*c-u*y*c-g*a*f+s*y*f+u*a*m-s*d*m,A=t*w+i*S+r*b+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=w*C,e[1]=(y*f*o-d*m*o-y*r*h+i*m*h+d*r*p-i*f*p)*C,e[2]=(a*m*o-y*c*o+y*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*o-a*f*o-d*r*l+i*f*l+a*r*h-i*c*h)*C,e[4]=S*C,e[5]=(u*m*o-g*f*o+g*r*h-t*m*h-u*r*p+t*f*p)*C,e[6]=(g*c*o-s*m*o-g*r*l+t*m*l+s*r*p-t*c*p)*C,e[7]=(s*f*o-u*c*o+u*r*l-t*f*l-s*r*h+t*c*h)*C,e[8]=b*C,e[9]=(g*d*o-u*y*o-g*i*h+t*y*h+u*i*p-t*d*p)*C,e[10]=(s*y*o-g*a*o+g*i*l-t*y*l-s*i*p+t*a*p)*C,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*h-t*a*h)*C,e[12]=R*C,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-s*y*r-g*i*c+t*y*c+s*i*m-t*a*m)*C,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,h=o*u,g=o*d,y=s*u,m=s*d,p=a*d,w=c*l,S=c*u,b=c*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(y+p))*R,r[1]=(h+b)*R,r[2]=(g-S)*R,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(f+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+S)*C,r[9]=(m-w)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,o=Rs.set(r[0],r[1],r[2]).length(),s=Rs.set(r[4],r[5],r[6]).length(),a=Rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);let l=1/o,u=1/s,d=1/a;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,t.setFromRotationMatrix(Ci),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=Vi){let c=this.elements,l=2*o/(t-e),u=2*o/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===Vi)h=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===bc)h=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Vi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(s-o),f=(t+e)*l,h=(i+r)*u,g,y;if(a===Vi)g=(s+o)*d,y=-2*d;else if(a===bc)g=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rs=new O,Ci=new zt,KA=new O(0,0,0),JA=new O(1,1,1),Fr=new O,ud=new O,Zn=new O,Zb=new zt,Kb=new hi,Gr=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Zb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zb,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Kb.setFromEuler(this),this.setFromQuaternion(Kb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},QA=0,Jb=new O,Ns=new hi,cr=new zt,dd=new O,mc=new O,e1=new O,t1=new hi,Qb=new O(1,0,0),eE=new O(0,1,0),tE=new O(0,0,1),nE={type:"added"},n1={type:"removed"},Ps={type:"childadded",child:null},l_={type:"childremoved",child:null},zi=(()=>{class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new Gr,r=new hi,o=new O(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new $e}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Qb,t)}rotateY(t){return this.rotateOnAxis(eE,t)}rotateZ(t){return this.rotateOnAxis(tE,t)}translateOnAxis(t,i){return Jb.copy(t).applyQuaternion(this.quaternion),this.position.add(Jb.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Qb,t)}translateY(t){return this.translateOnAxis(eE,t)}translateZ(t){return this.translateOnAxis(tE,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?dd.copy(t):dd.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(mc,dd,this.up):cr.lookAt(dd,mc,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(cr),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nE),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(n1),l_.child=t,this.dispatchEvent(l_),l_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nE),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,t,e1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,t1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>Xt(at({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>at({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=o,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Di=new O,lr=new O,u_=new O,ur=new O,Os=new O,Ls=new O,iE=new O,d_=new O,f_=new O,h_=new O,p_=new kt,m_=new kt,g_=new kt,Br=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Di.subVectors(r,t),lr.subVectors(i,t),u_.subVectors(e,t);let s=Di.dot(Di),a=Di.dot(lr),c=Di.dot(u_),l=lr.dot(lr),u=lr.dot(u_),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,ur)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ur.x),c.addScaledVector(s,ur.y),c.addScaledVector(a,ur.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return p_.setScalar(0),m_.setScalar(0),g_.setScalar(0),p_.fromBufferAttribute(e,t),m_.fromBufferAttribute(e,i),g_.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(p_,o.x),s.addScaledVector(m_,o.y),s.addScaledVector(g_,o.z),s}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),lr.subVectors(e,t),Di.cross(lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Di.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;Os.subVectors(r,i),Ls.subVectors(o,i),d_.subVectors(e,i);let c=Os.dot(d_),l=Ls.dot(d_);if(c<=0&&l<=0)return t.copy(i);f_.subVectors(e,r);let u=Os.dot(f_),d=Ls.dot(f_);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Os,s);h_.subVectors(e,o);let h=Os.dot(h_),g=Ls.dot(h_);if(g>=0&&h<=g)return t.copy(o);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ls,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return iE.subVectors(o,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(iE,a);let p=1/(m+y+f);return s=y*p,a=f*p,t.copy(i).addScaledVector(Os,s).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},YE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},fd={h:0,s:0,l:0};function __(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=q_(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=__(s,o,e+1/3),this.g=__(s,o,e),this.b=__(s,o,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let i=YE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return it.workingToColorSpace(mn.copy(this),e),Math.round(tt(mn.r*255,0,255))*65536+Math.round(tt(mn.g*255,0,255))*256+Math.round(tt(mn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,o=mn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Jn){it.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(fd);let i=yc(kr.h,fd.h,t),r=yc(kr.s,fd.s,t),o=yc(kr.l,fd.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new we;we.NAMES=YE;var i1=0,jr=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Bo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=wd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pr=class extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new O,hd=new Ee,r1=0,Qn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=C_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hd.fromBufferAttribute(this,t),hd.applyMatrix3(e),this.setXY(t,hd.x,hd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C_&&(e.usage=this.usage),e}};var Sc=class extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wc=class extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Zt=class extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}},o1=0,ui=new zt,y_=new zi,Fs=new O,Kn=new zr,gc=new zr,nn=new O,ei=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?wc:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return y_.lookAt(e),y_.updateMatrix(),this.applyMatrix4(y_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];gc.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Kn.min,gc.min),Kn.expandByPoint(nn),nn.addVectors(Kn.max,gc.max),Kn.expandByPoint(nn)):(Kn.expandByPoint(gc.min),Kn.expandByPoint(gc.max))}Kn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)nn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(e,l),nn.add(Fs)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new O,c[L]=new O;let l=new O,u=new O,d=new O,f=new Ee,h=new Ee,g=new Ee,y=new O,m=new O;function p(L,E,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(o,L),h.fromBufferAttribute(o,E),g.fromBufferAttribute(o,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(y),a[E].add(y),a[x].add(y),c[L].add(m),c[E].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,E=w.length;L<E;++L){let x=w[L],D=x.start,H=x.count;for(let k=D,$=D+H;k<$;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new O,b=new O,R=new O,A=new O;function C(L){R.fromBufferAttribute(r,L),A.copy(R);let E=a[L];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(A,E);let D=b.dot(c[L])<0?-1:1;s.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,E=w.length;L<E;++L){let x=w[L],D=x.start,H=x.count;for(let k=D,$=D+H;k<$;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,o=new O,s=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Qn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rE=new zt,Lo=new Ws,pd=new js,oE=new O,md=new O,gd=new O,_d=new O,v_=new O,yd=new O,sE=new O,vd=new O,Ut=class extends zi{constructor(e=new ei,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){yd.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(v_.fromBufferAttribute(d,e),s?yd.addScaledVector(v_,u):yd.addScaledVector(v_.sub(t),u))}t.add(yd)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pd.copy(i.boundingSphere),pd.applyMatrix4(o),Lo.copy(e.ray).recast(e.near),!(pd.containsPoint(Lo.origin)===!1&&(Lo.intersectSphere(pd,oE)===null||Lo.origin.distanceToSquared(oE)>(e.far-e.near)**2))&&(rE.copy(o).invert(),Lo.copy(e.ray).applyMatrix4(rE),!(i.boundingBox!==null&&Lo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lo)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,R=S;b<R;b+=3){let A=a.getX(b),C=a.getX(b+1),L=a.getX(b+2);r=xd(this,p,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);r=xd(this,s,e,i,l,u,d,w,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,R=S;b<R;b+=3){let A=b,C=b+1,L=b+2;r=xd(this,p,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,S=m+1,b=m+2;r=xd(this,s,e,i,l,u,d,w,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function s1(n,e,t,i,r,o,s,a){let c;if(e.side===In?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===fr,a),c===null)return null;vd.copy(a),vd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(vd);return l<t.near||l>t.far?null:{distance:l,point:vd.clone(),object:n}}function xd(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,md),n.getVertexPosition(c,gd),n.getVertexPosition(l,_d);let u=s1(n,e,t,i,md,gd,_d,sE);if(u){let d=new O;Br.getBarycoord(sE,md,gd,_d,d),r&&(u.uv=Br.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(u.uv1=Br.getInterpolatedAttribute(o,a,c,l,d,new Ee)),s&&(u.normal=Br.getInterpolatedAttribute(s,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Br.getNormal(md,gd,_d,f.normal),u.face=f,u.barycoord=d}return u}var Wr=class n extends ei{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(y,m,p,w,S,b,R,A,C,L,E){let x=b/C,D=R/L,H=b/2,k=R/2,$=A/2,q=C+1,j=L+1,Z=0,V=0,ne=new O;for(let de=0;de<j;de++){let Te=de*D-k;for(let et=0;et<q;et++){let ht=et*x-H;ne[y]=ht*w,ne[m]=Te*S,ne[p]=$,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(et/C),d.push(1-de/L),Z+=1}}for(let de=0;de<L;de++)for(let Te=0;Te<C;Te++){let et=f+Te+q*de,ht=f+Te+q*(de+1),G=f+(Te+1)+q*(de+1),te=f+(Te+1)+q*de;c.push(et,ht,te),c.push(ht,G,te),V+=6}a.addGroup(h,V,E),h+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=Xo(n[t]);for(let r in i)e[r]=i[r]}return e}function a1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Z_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var gr={clone:Xo,merge:yn},c1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=a1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Tc=class extends zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ur=new O,aE=new Ee,cE=new Ee,gn=class extends Tc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,aE,cE),t.subVectors(cE,aE)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Us=1,$s=class extends zi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gn(ks,Us,e,t);r.layers=this.layers,this.add(r);let o=new gn(ks,Us,e,t);o.layers=this.layers,this.add(o);let s=new gn(ks,Us,e,t);s.layers=this.layers,this.add(s);let a=new gn(ks,Us,e,t);a.layers=this.layers,this.add(a);let c=new gn(ks,Us,e,t);c.layers=this.layers,this.add(c);let l=new gn(ks,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cc=class extends Jr{constructor(e=[],t=$o,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qs=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),o=new St({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ii});o.uniforms.tEquirect.value=t;let s=new Ut(r,o),a=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Bn),new $s(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}},Uo=class extends zi{constructor(){super(),this.isGroup=!0,this.type="Group"}},u1={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Go=class extends zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var x_=new O,d1=new O,f1=new $e,di=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=x_.subVectors(i,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(x_),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||f1.getNormalMatrix(e),r=this.coplanarPoint(x_).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fo=new js,bd=new O,Ys=class{constructor(e=new di,t=new di,i=new di,r=new di,o=new di,s=new di){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){let i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],S=r[14],b=r[15];if(i[0].setComponents(c-o,f-l,m-h,b-p).normalize(),i[1].setComponents(c+o,f+l,m+h,b+p).normalize(),i[2].setComponents(c+s,f+u,m+g,b+w).normalize(),i[3].setComponents(c-s,f-u,m-g,b-w).normalize(),i[4].setComponents(c-a,f-d,m-y,b-S).normalize(),t===Vi)i[5].setComponents(c+a,f+d,m+y,b+S).normalize();else if(t===bc)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fo)}intersectsSprite(e){return Fo.center.set(0,0,0),Fo.radius=.7071067811865476,Fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fo)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(bd.x=r.normal.x>0?e.max.x:e.min.x,bd.y=r.normal.y>0?e.max.y:e.min.y,bd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dc=class extends Jr{constructor(e,t,i=Kr,r,o,s,a=fi,c=fi,l,u=Hs,d=1){if(u!==Hs&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ic=class n extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-s;for(let S=0;S<l;S++){let b=S*d-o;g.push(b,-w,0),y.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,b=w+l*(p+1),R=w+1+l*(p+1),A=w+1+l*p;h.push(S,b,A),h.push(b,R,A)}this.setIndex(h),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zs=class n extends ei{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+a,Math.PI),l=0,u=[],d=new O,f=new O,h=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let w=[],S=p/i,b=0;p===0&&s===0?b=.5/t:p===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let A=R/t;d.x=-e*Math.cos(r+A*o)*Math.sin(s+S*a),d.y=e*Math.cos(s+S*a),d.z=e*Math.sin(r+A*o)*Math.sin(s+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(A+b,1-S),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let S=u[p][w+1],b=u[p][w],R=u[p+1][w],A=u[p+1][w+1];(p!==0||s>0)&&h.push(S,b,A),(p!==i-1||c<Math.PI)&&h.push(b,R,A)}this.setIndex(h),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ac=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rc=class extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Nd=class extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pd=class extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ed(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function h1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var jo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break t}s=t.length;break n}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break t}s=i,i=0;break n}break e}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Od=class extends jo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:M_,endingEnd:M_}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case S_:o=e,a=2*t-i;break;case w_:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case S_:s=e,c=2*i-t;break;case w_:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,b=h*m-h*y;for(let R=0;R!==a;++R)o[R]=p*s[u+R]+w*s[l+R]+S*s[c+R]+b*s[d+R];return o}},Ld=class extends jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*d+s[c+f]*u;return o}},Fd=class extends jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ed(t,this.TimeBufferType),this.values=Ed(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ed(e.times,Array),values:Ed(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Od(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vc:t=this.InterpolantFactoryMethodDiscrete;break;case Dd:t=this.InterpolantFactoryMethodLinear;break;case Md:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vc;case this.InterpolantFactoryMethodLinear:return Dd;case this.InterpolantFactoryMethodSmooth:return Md}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&h1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Md,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Dd;var $r=class extends ti{constructor(e,t,i){super(e,t,i)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=vc;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var kd=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};kd.prototype.ValueTypeName="color";var Ud=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};Ud.prototype.ValueTypeName="number";var Bd=class extends jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)hi.slerpFlat(o,0,s,l-a,s,l,c);return o}},Nc=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Bd(this.times,this.values,this.getValueSize(),e)}};Nc.prototype.ValueTypeName="quaternion";Nc.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends ti{constructor(e,t,i){super(e,t,i)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=vc;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vd=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};Vd.prototype.ValueTypeName="vector";var Hd=class extends zi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var b_=new zt,lE=new O,uE=new O,D_=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;lE.setFromMatrixPosition(e.matrixWorld),t.position.copy(lE),uE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uE),t.updateMatrixWorld(),b_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(b_),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(b_)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wo=class extends Tc{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},I_=class extends D_{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pc=class extends Hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zi.DEFAULT_UP),this.updateMatrix(),this.target=new zi,this.shadow=new I_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zd=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Oc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dE(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dE();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dE(){return performance.now()}var K_="\\[\\]\\.:\\/",p1=new RegExp("["+K_+"]","g"),J_="[^"+K_+"]",m1="[^"+K_.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",J_),_1=/(WCOD+)?/.source.replace("WCOD",m1),y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",J_),v1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",J_),x1=new RegExp("^"+g1+_1+y1+v1+"$"),b1=["material","materials","bones","map"],A_=class{constructor(e,t,i){let r=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(t){let i=x1.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);b1.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=A_,n})();Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L6=new Float32Array(1);var Ks=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lc=class extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Q_(n,e,t,i){let r=E1(i);switch(t){case B_:return n*e;case H_:return n*e/r.components*r.byteLength;case ff:return n*e/r.components*r.byteLength;case z_:return n*e*2/r.components*r.byteLength;case hf:return n*e*2/r.components*r.byteLength;case V_:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case pf:return n*e*4/r.components*r.byteLength;case Bc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gf:case yf:return Math.max(n,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(n,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Ff:case kf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case G_:case Uf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bf:case Vf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E1(n){switch(n){case ii:case F_:return{byteLength:1,components:1};case Js:case k_:case pi:return{byteLength:2,components:1};case uf:case df:return{byteLength:2,components:4};case Kr:case lf:case ji:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);function vM(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function M1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ER=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_N=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ON=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$N=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:S1,alphahash_pars_fragment:w1,alphamap_fragment:T1,alphamap_pars_fragment:C1,alphatest_fragment:D1,alphatest_pars_fragment:I1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:N1,batching_vertex:P1,begin_vertex:O1,beginnormal_vertex:L1,bsdfs:F1,iridescence_fragment:k1,bumpmap_pars_fragment:U1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:z1,color_fragment:G1,color_pars_fragment:j1,color_pars_vertex:W1,color_vertex:$1,common:q1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:Z1,displacementmap_vertex:K1,emissivemap_fragment:J1,emissivemap_pars_fragment:Q1,colorspace_fragment:eR,colorspace_pars_fragment:tR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:rR,envmap_pars_vertex:oR,envmap_physical_pars_fragment:gR,envmap_vertex:sR,fog_vertex:aR,fog_pars_vertex:cR,fog_fragment:lR,fog_pars_fragment:uR,gradientmap_pars_fragment:dR,lightmap_pars_fragment:fR,lights_lambert_fragment:hR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:_R,lights_toon_pars_fragment:yR,lights_phong_fragment:vR,lights_phong_pars_fragment:xR,lights_physical_fragment:bR,lights_physical_pars_fragment:ER,lights_fragment_begin:MR,lights_fragment_maps:SR,lights_fragment_end:wR,logdepthbuf_fragment:TR,logdepthbuf_pars_fragment:CR,logdepthbuf_pars_vertex:DR,logdepthbuf_vertex:IR,map_fragment:AR,map_pars_fragment:RR,map_particle_fragment:NR,map_particle_pars_fragment:PR,metalnessmap_fragment:OR,metalnessmap_pars_fragment:LR,morphinstance_vertex:FR,morphcolor_vertex:kR,morphnormal_vertex:UR,morphtarget_pars_vertex:BR,morphtarget_vertex:VR,normal_fragment_begin:HR,normal_fragment_maps:zR,normal_pars_fragment:GR,normal_pars_vertex:jR,normal_vertex:WR,normalmap_pars_fragment:$R,clearcoat_normal_fragment_begin:qR,clearcoat_normal_fragment_maps:XR,clearcoat_pars_fragment:YR,iridescence_pars_fragment:ZR,opaque_fragment:KR,packing:JR,premultiplied_alpha_fragment:QR,project_vertex:eN,dithering_fragment:tN,dithering_pars_fragment:nN,roughnessmap_fragment:iN,roughnessmap_pars_fragment:rN,shadowmap_pars_fragment:oN,shadowmap_pars_vertex:sN,shadowmap_vertex:aN,shadowmask_pars_fragment:cN,skinbase_vertex:lN,skinning_pars_vertex:uN,skinning_vertex:dN,skinnormal_vertex:fN,specularmap_fragment:hN,specularmap_pars_fragment:pN,tonemapping_fragment:mN,tonemapping_pars_fragment:gN,transmission_fragment:_N,transmission_pars_fragment:yN,uv_pars_fragment:vN,uv_pars_vertex:xN,uv_vertex:bN,worldpos_vertex:EN,background_vert:MN,background_frag:SN,backgroundCube_vert:wN,backgroundCube_frag:TN,cube_vert:CN,cube_frag:DN,depth_vert:IN,depth_frag:AN,distanceRGBA_vert:RN,distanceRGBA_frag:NN,equirect_vert:PN,equirect_frag:ON,linedashed_vert:LN,linedashed_frag:FN,meshbasic_vert:kN,meshbasic_frag:UN,meshlambert_vert:BN,meshlambert_frag:VN,meshmatcap_vert:HN,meshmatcap_frag:zN,meshnormal_vert:GN,meshnormal_frag:jN,meshphong_vert:WN,meshphong_frag:$N,meshphysical_vert:qN,meshphysical_frag:XN,meshtoon_vert:YN,meshtoon_frag:ZN,points_vert:KN,points_frag:JN,shadow_vert:QN,shadow_frag:eP,sprite_vert:tP,sprite_frag:nP},oe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Wi={basic:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:yn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:yn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:yn([oe.points,oe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:yn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:yn([oe.common,oe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:yn([oe.sprite,oe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:yn([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:yn([oe.lights,oe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Wi.physical={uniforms:yn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Hf={r:0,b:0,g:0},Yo=new Gr,iP=new zt;function rP(n,e,t,i,r,o,s){let a=new we(0),c=o===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function y(S){let b=!1,R=g(S);R===null?p(a,c):R&&R.isColor&&(p(R,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,b){let R=g(b);R&&(R.isCubeTexture||R.mapping===kc)?(u===void 0&&(u=new Ut(new Wr(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Xo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yo.copy(b.backgroundRotation),Yo.x*=-1,Yo.y*=-1,Yo.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Yo.y*=-1,Yo.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iP.makeRotationFromEuler(Yo)),u.material.toneMapped=it.getTransfer(R.colorSpace)!==ft,(d!==R||f!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ut(new Ic(2,2),new St({name:"BackgroundMaterial",uniforms:Xo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=it.getTransfer(R.colorSpace)!==ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,b){S.getRGB(Hf,Z_(n)),i.buffers.color.setClear(Hf.r,Hf.g,Hf.b,b,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:y,addToRenderList:m,dispose:w}}function oP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),o=r,s=!1;function a(x,D,H,k,$){let q=!1,j=d(k,H,D);o!==j&&(o=j,l(o.object)),q=h(x,k,H,$),q&&g(x,k,H,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,b(x,D,H,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,H){let k=H.wireframe===!0,$=i[x.id];$===void 0&&($={},i[x.id]=$);let q=$[D.id];q===void 0&&(q={},$[D.id]=q);let j=q[k];return j===void 0&&(j=f(c()),q[k]=j),j}function f(x){let D=[],H=[],k=[];for(let $=0;$<t;$++)D[$]=0,H[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:k,object:x,attributes:{},index:null}}function h(x,D,H,k){let $=o.attributes,q=D.attributes,j=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=$[V],Te=q[V];if(Te===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;j++}return o.attributesNum!==j||o.index!==k}function g(x,D,H,k){let $={},q=D.attributes,j=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=q[V];de===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),$[V]=Te,j++}o.attributes=$,o.attributesNum=j,o.index=k}function y(){let x=o.newAttributes;for(let D=0,H=x.length;D<H;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let H=o.newAttributes,k=o.enabledAttributes,$=o.attributeDivisors;H[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),$[x]!==D&&(n.vertexAttribDivisor(x,D),$[x]=D)}function w(){let x=o.newAttributes,D=o.enabledAttributes;for(let H=0,k=D.length;H<k;H++)D[H]!==x[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function S(x,D,H,k,$,q,j){j===!0?n.vertexAttribIPointer(x,D,H,$,q):n.vertexAttribPointer(x,D,H,k,$,q)}function b(x,D,H,k){y();let $=k.attributes,q=H.getAttributes(),j=D.defaultAttributeValues;for(let Z in q){let V=q[Z];if(V.location>=0){let ne=$[Z];if(ne===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){let de=ne.normalized,Te=ne.itemSize,et=e.get(ne);if(et===void 0)continue;let ht=et.buffer,G=et.type,te=et.bytesPerElement,ve=G===n.INT||G===n.UNSIGNED_INT||ne.gpuType===lf;if(ne.isInterleavedBufferAttribute){let ce=ne.data,xe=ce.stride,ct=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,ce.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Oe=0;Oe<V.locationSize;Oe++)S(V.location+Oe,Te/V.locationSize,G,de,xe*te,(ct+Te/V.locationSize*Oe)*te,ve)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,ne.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ce=0;ce<V.locationSize;ce++)S(V.location+ce,Te/V.locationSize,G,de,Te*te,Te/V.locationSize*ce*te,ve)}}else if(j!==void 0){let de=j[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}w()}function R(){L();for(let x in i){let D=i[x];for(let H in D){let k=D[H];for(let $ in k)u(k[$].object),delete k[$];delete D[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let H in D){let k=D[H];for(let $ in k)u(k[$].object),delete k[$];delete D[H]}delete i[x.id]}function C(x){for(let D in i){let H=i[D];if(H[x.id]===void 0)continue;let k=H[x.id];for(let $ in k)u(k[$].object),delete k[$];delete H[x.id]}}function L(){E(),s=!0,o!==r&&(o=r,l(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function sP(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function aP(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ji&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:R,maxSamples:A}}function cP(n){let e=this,t=null,i=0,r=!1,o=!1,s=new di,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let w=o?0:i,S=w*4,b=p.clippingState||null;c.value=b,b=u(g,f,S,h);for(let R=0;R!==S;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=h;S!==y;++S,b+=4)s.copy(d[S]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lP(n){let e=new WeakMap;function t(s,a){return a===sf?s.mapping=$o:a===af&&(s.mapping=qo),s}function i(s){if(s&&s.isTexture){let a=s.mapping;if(a===sf||a===af)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new qs(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}var ia=4,ZE=[.125,.215,.35,.446,.526,.582],Jo=20,ey=new Wo,KE=new we,ty=null,ny=0,iy=0,ry=!1,Ko=(1+Math.sqrt(5))/2,na=1/Ko,JE=[new O(-Ko,na,0),new O(Ko,na,0),new O(-na,0,Ko),new O(na,0,Ko),new O(0,Ko,-na),new O(0,Ko,na),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],uP=new O,jf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=uP}=o;ty=this._renderer.getRenderTarget(),ny=this._renderer.getActiveCubeFace(),iy=this._renderer.getActiveMipmapLevel(),ry=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ty,ny,iy),this._renderer.xr.enabled=ry,e.scissorTest=!1,zf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$o||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ty=this._renderer.getRenderTarget(),ny=this._renderer.getActiveCubeFace(),iy=this._renderer.getActiveMipmapLevel(),ry=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:pi,format:Vn,colorSpace:hr,depthBuffer:!1},r=QE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=QE(e,t,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dP(o)),this._blurMaterial=fP(o,e,t)}return r}_compileMaterial(e){let t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,ey)}_sceneToCubeUV(e,t,i,r,o){let c=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(KE),d.toneMapping=Ai,d.autoClear=!1;let g=new pr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),y=new Ut(new Wr,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(KE),m=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[w],o.y,o.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[w],o.z)):(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[w]));let b=this._cubeSize;zf(r,S*b,w>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===$o||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eM());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;zf(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,ey)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let o=1;o<r;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=JE[(r-o-1)%JE.length];this._blur(e,o-1,o,s,a)}t.autoClear=i}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ut(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Jo-1),y=o/g,m=isFinite(o)?1+Math.floor(u*y):Jo;m>Jo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jo}`);let p=[],w=0;for(let C=0;C<Jo;++C){let L=C/y,E=Math.exp(-L*L/2);p.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let b=this._sizeLods[r],R=3*b*(r>S-ia?r-S+ia:0),A=4*(this._cubeSize-b);zf(t,R,A,3*b,2*b),c.setRenderTarget(t),c.render(d,ey)}};function dP(n){let e=[],t=[],i=[],r=n,o=n-ia+1+ZE.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let c=1/a;s>n-ia?c=ZE[s-n+ia-1]:s===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),S=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let A=0;A<h;A++){let C=A%3*2/3-1,L=A>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(E,y*g*A),S.set(f,m*g*A);let x=[A,A,A,A,A,A];b.set(x,p*g*A)}let R=new ei;R.setAttribute("position",new Qn(w,y)),R.setAttribute("uv",new Qn(S,m)),R.setAttribute("faceIndex",new Qn(b,p)),e.push(R),r>ia&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function QE(n,e,t){let i=new _n(n,e,t);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fP(n,e,t){let i=new Float32Array(Jo),r=new O(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Jo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:py(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function eM(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:py(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function tM(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:py(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function py(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===sf||c===af,u=c===$o||c===qo;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jf(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new jf(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function pP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ho("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mP(n,e,t,i){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let S=0,b=w.length;S<b;S+=3){let R=w[S+0],A=w[S+1],C=w[S+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,b=w.length/3-1;S<b;S+=3){let R=S+0,A=S+1,C=S+2;f.push(R,A,A,C,C,R)}}else return;let m=new(Y_(f)?wc:Sc)(f,1);m.version=y;let p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){let f=o.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function gP(n,e,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,h){n.drawElements(i,h,o,f*s),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,o,f*s,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/s,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _P(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yP(n,e,t){let i=new WeakMap,r=new kt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;g===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let R=a.attributes.position.count*b,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let C=new Float32Array(R*A*4*d),L=new Mc(C,R,A,d);L.type=ji,L.needsUpdate=!0;let E=b*4;for(let D=0;D<d;D++){let H=p[D],k=w[D],$=S[D],q=R*A*4*D;for(let j=0;j<H.count;j++){let Z=j*E;g===!0&&(r.fromBufferAttribute(H,j),C[q+Z+0]=r.x,C[q+Z+1]=r.y,C[q+Z+2]=r.z,C[q+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,j),C[q+Z+4]=r.x,C[q+Z+5]=r.y,C[q+Z+6]=r.z,C[q+Z+7]=0),m===!0&&(r.fromBufferAttribute($,j),C[q+Z+8]=r.x,C[q+Z+9]=r.y,C[q+Z+10]=r.z,C[q+Z+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Ee(R,A)},i.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function vP(n,e,t,i){let r=new WeakMap;function o(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}var xM=new Jr,nM=new Dc(1,1),bM=new Mc,EM=new Rd,MM=new Cc,iM=[],rM=[],oM=new Float32Array(16),sM=new Float32Array(9),aM=new Float32Array(4);function oa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=iM[r];if(o===void 0&&(o=new Float32Array(r),iM[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $f(n,e){let t=rM[e];t===void 0&&(t=new Int32Array(e),rM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function EP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function MP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function SP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;aM.set(i),n.uniformMatrix2fv(this.addr,!1,aM),Jt(t,i)}}function wP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;sM.set(i),n.uniformMatrix3fv(this.addr,!1,sM),Jt(t,i)}}function TP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;oM.set(i),n.uniformMatrix4fv(this.addr,!1,oM),Jt(t,i)}}function CP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function IP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function AP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function RP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function PP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function OP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function LP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(nM.compareFunction=W_,o=nM):o=xM,t.setTexture2D(e||o,r)}function FP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||EM,r)}function kP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||MM,r)}function UP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bM,r)}function BP(n){switch(n){case 5126:return xP;case 35664:return bP;case 35665:return EP;case 35666:return MP;case 35674:return SP;case 35675:return wP;case 35676:return TP;case 5124:case 35670:return CP;case 35667:case 35671:return DP;case 35668:case 35672:return IP;case 35669:case 35673:return AP;case 5125:return RP;case 36294:return NP;case 36295:return PP;case 36296:return OP;case 35678:case 36198:case 36298:case 36306:case 35682:return LP;case 35679:case 36299:case 36307:return FP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return UP}}function VP(n,e){n.uniform1fv(this.addr,e)}function HP(n,e){let t=oa(e,this.size,2);n.uniform2fv(this.addr,t)}function zP(n,e){let t=oa(e,this.size,3);n.uniform3fv(this.addr,t)}function GP(n,e){let t=oa(e,this.size,4);n.uniform4fv(this.addr,t)}function jP(n,e){let t=oa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WP(n,e){let t=oa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $P(n,e){let t=oa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qP(n,e){n.uniform1iv(this.addr,e)}function XP(n,e){n.uniform2iv(this.addr,e)}function YP(n,e){n.uniform3iv(this.addr,e)}function ZP(n,e){n.uniform4iv(this.addr,e)}function KP(n,e){n.uniform1uiv(this.addr,e)}function JP(n,e){n.uniform2uiv(this.addr,e)}function QP(n,e){n.uniform3uiv(this.addr,e)}function eO(n,e){n.uniform4uiv(this.addr,e)}function tO(n,e,t){let i=this.cache,r=e.length,o=$f(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||xM,o[s])}function nO(n,e,t){let i=this.cache,r=e.length,o=$f(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||EM,o[s])}function iO(n,e,t){let i=this.cache,r=e.length,o=$f(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||MM,o[s])}function rO(n,e,t){let i=this.cache,r=e.length,o=$f(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||bM,o[s])}function oO(n){switch(n){case 5126:return VP;case 35664:return HP;case 35665:return zP;case 35666:return GP;case 35674:return jP;case 35675:return WP;case 35676:return $P;case 5124:case 35670:return qP;case 35667:case 35671:return XP;case 35668:case 35672:return YP;case 35669:case 35673:return ZP;case 5125:return KP;case 36294:return JP;case 36295:return QP;case 36296:return eO;case 35678:case 36198:case 36298:case 36306:case 35682:return tO;case 35679:case 36299:case 36307:return nO;case 35680:case 36300:case 36308:case 36293:return iO;case 36289:case 36303:case 36311:case 36292:return rO}}var sy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BP(t.type)}},ay=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oO(t.type)}},cy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},oy=/(\w+)(\])?(\[|\.)?/g;function cM(n,e){n.seq.push(e),n.map[e.id]=e}function sO(n,e,t){let i=n.name,r=i.length;for(oy.lastIndex=0;;){let o=oy.exec(i),s=oy.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){cM(t,l===void 0?new sy(a,n,e):new ay(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new cy(a),cM(t,d)),t=d}}}var ra=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);sO(o,s,this)}}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function lM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aO=37297,cO=0;function lO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var uM=new $e;function uO(n){it._getMatrix(uM,it.workingColorSpace,n);let e=`mat3( ${uM.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case xc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lO(n.getShaderSource(e),s)}else return r}function dO(n,e){let t=uO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fO(n,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case ef:t="Cineon";break;case tf:t="ACESFilmic";break;case rf:t="AgX";break;case of:t="Neutral";break;case nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gf=new O;function hO(){it.getLuminanceCoefficients(Gf);let n=Gf.x.toFixed(4),e=Gf.y.toFixed(4),t=Gf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jc).join(`
`)}function mO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function jc(n){return n!==""}function fM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _O=/^[ \t]*#include +<([\w\d./]+)>/gm;function ly(n){return n.replace(_O,vO)}var yO=new Map;function vO(n,e){let t=Je[e];if(t===void 0){let i=yO.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ly(t)}var xO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pM(n){return n.replace(xO,bO)}function bO(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function mM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function MO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $o:case qo:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function wO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case NE:e="ENVMAP_BLENDING_MIX";break;case PE:e="ENVMAP_BLENDING_ADD";break}return e}function TO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CO(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=EO(t),l=MO(t),u=SO(t),d=wO(t),f=TO(t),h=pO(t),g=mO(o),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jc).join(`
`),p.length>0&&(p+=`
`)):(m=[mM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jc).join(`
`),p=[mM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ai?fO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,dO("linearToOutputTexel",t.outputColorSpace),hO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jc).join(`
`)),s=ly(s),s=fM(s,t),s=hM(s,t),a=ly(a),a=fM(a,t),a=hM(a,t),s=pM(s),a=pM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+s,b=w+p+a,R=lM(r,r.VERTEX_SHADER,S),A=lM(r,r.FRAGMENT_SHADER,b);r.attachShader(y,R),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(D){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(A).trim(),q=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,A);else{let Z=dM(r,R,"vertex"),V=dM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||$==="")&&(j=!1);j&&(D.diagnostics={runnable:q,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(R),r.deleteShader(A),L=new ra(r,y),E=gO(r,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,aO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cO++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}var DO=0,uy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dy(e),t.set(e,i)),i}},dy=class{constructor(e){this.id=DO++,this.code=e,this.usedTimes=0}};function IO(n,e,t,i,r,o,s){let a=new zo,c=new uy,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,D,H,k){let $=H.fog,q=k.geometry,j=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),V=Z&&Z.mapping===kc?Z.image.height:null,ne=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=de!==void 0?de.length:0,et=0;q.morphAttributes.position!==void 0&&(et=1),q.morphAttributes.normal!==void 0&&(et=2),q.morphAttributes.color!==void 0&&(et=3);let ht,G,te,ve;if(ne){let yt=Wi[ne];ht=yt.vertexShader,G=yt.fragmentShader}else ht=E.vertexShader,G=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),ve=c.getFragmentShaderID(E);let ce=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),ct=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,Rt=!!E.map,Nt=!!E.matcap,lt=!!Z,T=!!E.aoMap,vn=!!E.lightMap,ut=!!E.bumpMap,Et=!!E.normalMap,be=!!E.displacementMap,ot=!!E.emissiveMap,Ie=!!E.metalnessMap,Xe=!!E.roughnessMap,qt=E.anisotropy>0,M=E.clearcoat>0,_=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,Y=E.transmission>0,z=qt&&!!E.anisotropyMap,Me=M&&!!E.clearcoatMap,se=M&&!!E.clearcoatNormalMap,ye=M&&!!E.clearcoatRoughnessMap,Se=F&&!!E.iridescenceMap,K=F&&!!E.iridescenceThicknessMap,fe=W&&!!E.sheenColorMap,Pe=W&&!!E.sheenRoughnessMap,Re=!!E.specularMap,re=!!E.specularColorMap,Ue=!!E.specularIntensityMap,I=Y&&!!E.transmissionMap,le=Y&&!!E.thicknessMap,J=!!E.gradientMap,me=!!E.alphaMap,Q=E.alphaTest>0,X=!!E.alphaHash,ge=!!E.extensions,Ge=Ai;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let wt={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:G,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:ct,instancingColor:ct&&k.instanceColor!==null,instancingMorph:ct&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:hr,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:Nt,envMap:lt,envMapMode:lt&&Z.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:vn,bumpMap:ut,normalMap:Et,displacementMap:f&&be,emissiveMap:ot,normalMapObjectSpace:Et&&E.normalMapType===kE,normalMapTangentSpace:Et&&E.normalMapType===j_,metalnessMap:Ie,roughnessMap:Xe,anisotropy:qt,anisotropyMap:z,clearcoat:M,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:_,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:K,sheen:W,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:Re,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:I,thicknessMap:le,gradientMap:J,opaque:E.transparent===!1&&E.blending===Bo&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:X,combine:E.combine,mapUv:Rt&&y(E.map.channel),aoMapUv:T&&y(E.aoMap.channel),lightMapUv:vn&&y(E.lightMap.channel),bumpMapUv:ut&&y(E.bumpMap.channel),normalMapUv:Et&&y(E.normalMap.channel),displacementMapUv:be&&y(E.displacementMap.channel),emissiveMapUv:ot&&y(E.emissiveMap.channel),metalnessMapUv:Ie&&y(E.metalnessMap.channel),roughnessMapUv:Xe&&y(E.roughnessMap.channel),anisotropyMapUv:z&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:K&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(E.sheenRoughnessMap.channel),specularMapUv:Re&&y(E.specularMap.channel),specularColorMapUv:re&&y(E.specularColorMap.channel),specularIntensityMapUv:Ue&&y(E.specularIntensityMap.channel),transmissionMapUv:I&&y(E.transmissionMap.channel),thicknessMapUv:le&&y(E.thicknessMap.channel),alphaMapUv:me&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Et||qt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Rt||me),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:et,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ni,flipSided:E.side===In,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(x,E),S(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function w(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){let x=g[E.type],D;if(x){let H=Wi[x];D=gr.clone(H.uniforms)}else D=E.uniforms;return D}function R(E,x){let D;for(let H=0,k=u.length;H<k;H++){let $=u[H];if($.cacheKey===x){D=$,++D.usedTimes;break}}return D===void 0&&(D=new CO(n,x,E,o),u.push(D)),D}function A(E){if(--E.usedTimes===0){let x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:L}}function AO(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function RO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _M(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||RO),i.length>1&&i.sort(f||gM),r.length>1&&r.sort(f||gM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function NO(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new _M,n.set(i,[s])):r>=o.length?(s=new _M,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function PO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new we};break;case"SpotLight":t={position:new O,direction:new O,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function OO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var LO=0;function FO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kO(n){let e=new PO,t=OO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,o=new zt,s=new zt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,S=0,b=0,R=0,A=0,C=0;l.sort(FO);for(let E=0,x=l.length;E<x;E++){let D=l[E],H=D.color,k=D.intensity,$=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*k,d+=H.g*k,f+=H.b*k;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);C++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=j,h++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(H).multiplyScalar(k),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;let Z=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[y]=Z.matrix,D.castShadow){let V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=q,b++}y++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(H).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let Z=D.shadow,V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(k),j.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=h,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=R,L.numLightProbes=C,i.version=LO++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(S.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function yM(n){let e=new kO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function UO(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new yM(n),e.set(r,[a])):o>=s.length?(a=new yM(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var BO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HO(n,e,t){let i=new Ys,r=new Ee,o=new Ee,s=new kt,a=new Nd({depthPacking:FE}),c=new Pd,l={},u=t.maxTextureSize,d={[fr]:In,[In]:fr,[ni]:ni},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:BO,fragmentShader:VO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new ei;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ii),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==Gi&&this.type===Gi,$=p===Gi&&this.type!==Gi;for(let q=0,j=A.length;q<j;q++){let Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ne=V.getFrameExtents();if(r.multiply(ne),o.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,V.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,V.mapSize.y=o.y)),V.map===null||k===!0||$===!0){let Te=this.type!==Gi?{minFilter:fi,magFilter:fi}:{};V.map!==null&&V.map.dispose(),V.map=new _n(r.x,r.y,Te),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let de=V.getViewportCount();for(let Te=0;Te<de;Te++){let et=V.getViewport(Te);s.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),H.viewport(s),V.updateMatrices(Z,Te),i=V.getFrustum(),b(C,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&w(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,D)};function w(A,C){let L=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _n(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,y,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,L,h,y,null)}function S(A,C,L,E){let x=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=x.uuid,k=C.uuid,$=l[H];$===void 0&&($={},l[H]=$);let q=$[k];q===void 0&&(q=x.clone(),$[k]=q,C.addEventListener("dispose",R)),x=q}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Gi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=n.properties.get(x);H.light=L}return x}function b(A,C,L,E,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let k=e.update(A),$=A.material;if(Array.isArray($)){let q=k.groups;for(let j=0,Z=q.length;j<Z;j++){let V=q[j],ne=$[V.materialIndex];if(ne&&ne.visible){let de=S(A,ne,E,x);A.onBeforeShadow(n,A,C,L,k,de,V),n.renderBufferDirect(L,null,k,de,A,V),A.onAfterShadow(n,A,C,L,k,de,V)}}}else if($.visible){let q=S(A,$,E,x);A.onBeforeShadow(n,A,C,L,k,q,null),n.renderBufferDirect(L,null,k,q,A,null),A.onAfterShadow(n,A,C,L,k,q,null)}}let H=A.children;for(let k=0,$=H.length;k<$;k++)b(H[k],C,L,E,x)}function R(A){A.target.removeEventListener("dispose",R);for(let L in l){let E=l[L],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}var zO={[Wd]:$d,[qd]:Zd,[Xd]:Kd,[Vo]:Yd,[$d]:Wd,[Zd]:qd,[Kd]:Xd,[Yd]:Vo};function GO(n,e){function t(){let I=!1,le=new kt,J=null,me=new kt(0,0,0,0);return{setMask:function(Q){J!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){I=Q},setClear:function(Q,X,ge,Ge,wt){wt===!0&&(Q*=Ge,X*=Ge,ge*=Ge),le.set(Q,X,ge,Ge),me.equals(le)===!1&&(n.clearColor(Q,X,ge,Ge),me.copy(le))},reset:function(){I=!1,J=null,me.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,J=null,me=null,Q=null;return{setReversed:function(X){if(le!==X){let ge=e.get("EXT_clip_control");X?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),le=X;let Ge=Q;Q=null,this.setClear(Ge)}},getReversed:function(){return le},setTest:function(X){X?ce(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(X){J!==X&&!I&&(n.depthMask(X),J=X)},setFunc:function(X){if(le&&(X=zO[X]),me!==X){switch(X){case Wd:n.depthFunc(n.NEVER);break;case $d:n.depthFunc(n.ALWAYS);break;case qd:n.depthFunc(n.LESS);break;case Vo:n.depthFunc(n.LEQUAL);break;case Xd:n.depthFunc(n.EQUAL);break;case Yd:n.depthFunc(n.GEQUAL);break;case Zd:n.depthFunc(n.GREATER);break;case Kd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=X}},setLocked:function(X){I=X},setClear:function(X){Q!==X&&(le&&(X=1-X),n.clearDepth(X),Q=X)},reset:function(){I=!1,J=null,me=null,Q=null,le=!1}}}function r(){let I=!1,le=null,J=null,me=null,Q=null,X=null,ge=null,Ge=null,wt=null;return{setTest:function(yt){I||(yt?ce(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(yt){le!==yt&&!I&&(n.stencilMask(yt),le=yt)},setFunc:function(yt,mi,$i){(J!==yt||me!==mi||Q!==$i)&&(n.stencilFunc(yt,mi,$i),J=yt,me=mi,Q=$i)},setOp:function(yt,mi,$i){(X!==yt||ge!==mi||Ge!==$i)&&(n.stencilOp(yt,mi,$i),X=yt,ge=mi,Ge=$i)},setLocked:function(yt){I=yt},setClear:function(yt){wt!==yt&&(n.clearStencil(yt),wt=yt)},reset:function(){I=!1,le=null,J=null,me=null,Q=null,X=null,ge=null,Ge=null,wt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,b=null,R=null,A=null,C=new we(0,0,0),L=0,E=!1,x=null,D=null,H=null,k=null,$=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,Z=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Z>=2);let ne=null,de={},Te=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),ht=new kt().fromArray(Te),G=new kt().fromArray(et);function te(I,le,J,me){let Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(I,X),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<J;ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(le+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}let ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),s.setFunc(Vo),ut(!1),Et(R_),ce(n.CULL_FACE),T(Ii);function ce(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function xe(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ct(I,le){return d[I]!==le?(n.bindFramebuffer(I,le),d[I]=le,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(I,le){let J=h,me=!1;if(I){J=f.get(le),J===void 0&&(J=[],f.set(le,J));let Q=I.textures;if(J.length!==Q.length||J[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ge=Q.length;X<ge;X++)J[X]=n.COLOR_ATTACHMENT0+X;J.length=Q.length,me=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,me=!0);me&&n.drawBuffers(J)}function Rt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Nt={[Hr]:n.FUNC_ADD,[mE]:n.FUNC_SUBTRACT,[gE]:n.FUNC_REVERSE_SUBTRACT};Nt[_E]=n.MIN,Nt[yE]=n.MAX;let lt={[vE]:n.ZERO,[xE]:n.ONE,[bE]:n.SRC_COLOR,[Sd]:n.SRC_ALPHA,[CE]:n.SRC_ALPHA_SATURATE,[wE]:n.DST_COLOR,[ME]:n.DST_ALPHA,[EE]:n.ONE_MINUS_SRC_COLOR,[wd]:n.ONE_MINUS_SRC_ALPHA,[TE]:n.ONE_MINUS_DST_COLOR,[SE]:n.ONE_MINUS_DST_ALPHA,[DE]:n.CONSTANT_COLOR,[IE]:n.ONE_MINUS_CONSTANT_COLOR,[AE]:n.CONSTANT_ALPHA,[RE]:n.ONE_MINUS_CONSTANT_ALPHA};function T(I,le,J,me,Q,X,ge,Ge,wt,yt){if(I===Ii){y===!0&&(xe(n.BLEND),y=!1);return}if(y===!1&&(ce(n.BLEND),y=!0),I!==pE){if(I!==m||yt!==E){if((p!==Hr||b!==Hr)&&(n.blendEquation(n.FUNC_ADD),p=Hr,b=Hr),yt)switch(I){case Bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case P_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case O_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case P_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case O_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,S=null,R=null,A=null,C.set(0,0,0),L=0,m=I,E=yt}return}Q=Q||le,X=X||J,ge=ge||me,(le!==p||Q!==b)&&(n.blendEquationSeparate(Nt[le],Nt[Q]),p=le,b=Q),(J!==w||me!==S||X!==R||ge!==A)&&(n.blendFuncSeparate(lt[J],lt[me],lt[X],lt[ge]),w=J,S=me,R=X,A=ge),(Ge.equals(C)===!1||wt!==L)&&(n.blendColor(Ge.r,Ge.g,Ge.b,wt),C.copy(Ge),L=wt),m=I,E=!1}function vn(I,le){I.side===ni?xe(n.CULL_FACE):ce(n.CULL_FACE);let J=I.side===In;le&&(J=!J),ut(J),I.blending===Bo&&I.transparent===!1?T(Ii):T(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);let me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function Et(I){I!==fE?(ce(n.CULL_FACE),I!==D&&(I===R_?n.cullFace(n.BACK):I===hE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),D=I}function be(I){I!==H&&(j&&n.lineWidth(I),H=I)}function ot(I,le,J){I?(ce(n.POLYGON_OFFSET_FILL),(k!==le||$!==J)&&(n.polygonOffset(le,J),k=le,$=J)):xe(n.POLYGON_OFFSET_FILL)}function Ie(I){I?ce(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=n.TEXTURE0+q-1),ne!==I&&(n.activeTexture(I),ne=I)}function qt(I,le,J){J===void 0&&(ne===null?J=n.TEXTURE0+q-1:J=ne);let me=de[J];me===void 0&&(me={type:void 0,texture:void 0},de[J]=me),(me.type!==I||me.texture!==le)&&(ne!==J&&(n.activeTexture(J),ne=J),n.bindTexture(I,le||ve[I]),me.type=I,me.texture=le)}function M(){let I=de[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){ht.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function Pe(I){G.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function Re(I,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let me=J.get(I);me===void 0&&(me=n.getUniformBlockIndex(le,I.name),J.set(I,me))}function re(I,le){let me=l.get(le).get(I);c.get(le)!==me&&(n.uniformBlockBinding(le,me,I.__bindingPointIndex),c.set(le,me))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,de={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,b=null,R=null,A=null,C=new we(0,0,0),L=0,E=!1,x=null,D=null,H=null,k=null,$=null,ht.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:xe,bindFramebuffer:ct,drawBuffers:Oe,useProgram:Rt,setBlending:T,setMaterial:vn,setFlipSided:ut,setCullFace:Et,setLineWidth:be,setPolygonOffset:ot,setScissorTest:Ie,activeTexture:Xe,bindTexture:qt,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Se,texImage3D:K,updateUBOMapping:Re,uniformBlockBinding:re,texStorage2D:se,texStorage3D:ye,texSubImage2D:W,texSubImage3D:Y,compressedTexSubImage2D:z,compressedTexSubImage3D:Me,scissor:fe,viewport:Pe,reset:Ue}}function jO(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return h?new OffscreenCanvas(M,_):Ec("canvas")}function y(M,_,F){let W=1,Y=qt(M);if((Y.width>F||Y.height>F)&&(W=F/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let z=Math.floor(W*Y.width),Me=Math.floor(W*Y.height);d===void 0&&(d=g(z,Me));let se=_?g(z,Me):d;return se.width=z,se.height=Me,se.getContext("2d").drawImage(M,0,0,z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+z+"x"+Me+")."),se}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(M,_,F,W,Y=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=_;if(_===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),_===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),_===n.RGBA){let Me=Y?xc:it.getTransfer(W);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=Me===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(M,_){let F;return M?_===null||_===Kr||_===Qs?F=n.DEPTH24_STENCIL8:_===ji?F=n.DEPTH32F_STENCIL8:_===Js&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kr||_===Qs?F=n.DEPTH_COMPONENT24:_===ji?F=n.DEPTH_COMPONENT32F:_===Js&&(F=n.DEPTH_COMPONENT16),F}function R(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==fi&&M.minFilter!==Bn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){let _=M.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&u.delete(_)}function C(M){let _=M.target;_.removeEventListener("dispose",C),x(_)}function L(M){let _=i.get(M);if(_.__webglInit===void 0)return;let F=M.source,W=f.get(F);if(W){let Y=W[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(M),Object.keys(W).length===0&&f.delete(F)}i.remove(M)}function E(M){let _=i.get(M);n.deleteTexture(_.__webglTexture);let F=M.source,W=f.get(F);delete W[_.__cacheKey],s.memory.textures--}function x(M){let _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Y=0;Y<_.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=M.textures;for(let W=0,Y=F.length;W<Y;W++){let z=i.get(F[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),i.remove(F[W])}i.remove(M)}let D=0;function H(){D=0}function k(){let M=D;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function $(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function q(M,_){let F=i.get(M);if(M.isVideoTexture&&Ie(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(F,M,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function j(M,_){let F=i.get(M);if(M.version>0&&F.__version!==M.version){ve(F,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Z(M,_){let F=i.get(M);if(M.version>0&&F.__version!==M.version){ve(F,M,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function V(M,_){let F=i.get(M);if(M.version>0&&F.__version!==M.version){ce(F,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let ne={[Td]:n.REPEAT,[Vr]:n.CLAMP_TO_EDGE,[Cd]:n.MIRRORED_REPEAT},de={[fi]:n.NEAREST,[OE]:n.NEAREST_MIPMAP_NEAREST,[Uc]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[cf]:n.LINEAR_MIPMAP_NEAREST,[Zr]:n.LINEAR_MIPMAP_LINEAR},Te={[UE]:n.NEVER,[jE]:n.ALWAYS,[BE]:n.LESS,[W_]:n.LEQUAL,[VE]:n.EQUAL,[GE]:n.GEQUAL,[HE]:n.GREATER,[zE]:n.NOTEQUAL};function et(M,_){if(_.type===ji&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bn||_.magFilter===cf||_.magFilter===Uc||_.magFilter===Zr||_.minFilter===Bn||_.minFilter===cf||_.minFilter===Uc||_.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ne[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fi||_.minFilter!==Uc&&_.minFilter!==Zr||_.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ht(M,_){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));let W=_.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let z=$(_);if(z!==M.__cacheKey){Y[z]===void 0&&(Y[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Y[z].usedTimes++;let Me=Y[M.__cacheKey];Me!==void 0&&(Y[M.__cacheKey].usedTimes--,Me.usedTimes===0&&E(_)),M.__cacheKey=z,M.__webglTexture=Y[z].texture}return F}function G(M,_,F){return Math.floor(Math.floor(M/F)/_)}function te(M,_,F,W){let z=M.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,W,_.data);else{z.sort((K,fe)=>K.start-fe.start);let Me=0;for(let K=1;K<z.length;K++){let fe=z[Me],Pe=z[K],Re=fe.start+fe.count,re=G(Pe.start,_.width,4),Ue=G(fe.start,_.width,4);Pe.start<=Re+1&&re===Ue&&G(Pe.start+Pe.count-1,_.width,4)===re?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Me,z[Me]=Pe)}z.length=Me+1;let se=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let K=0,fe=z.length;K<fe;K++){let Pe=z[K],Re=Math.floor(Pe.start/4),re=Math.ceil(Pe.count/4),Ue=Re%_.width,I=Math.floor(Re/_.width),le=re,J=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ue,I,le,J,F,W,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function ve(M,_,F){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let Y=ht(M,_),z=_.source;t.bindTexture(W,M.__webglTexture,n.TEXTURE0+F);let Me=i.get(z);if(z.version!==Me.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);let se=it.getPrimaries(it.workingColorSpace),ye=_.colorSpace===mr?null:it.getPrimaries(_.colorSpace),Se=_.colorSpace===mr||se===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let K=y(_.image,!1,r.maxTextureSize);K=Xe(_,K);let fe=o.convert(_.format,_.colorSpace),Pe=o.convert(_.type),Re=S(_.internalFormat,fe,Pe,_.colorSpace,_.isVideoTexture);et(W,_);let re,Ue=_.mipmaps,I=_.isVideoTexture!==!0,le=Me.__version===void 0||Y===!0,J=z.dataReady,me=R(_,K);if(_.isDepthTexture)Re=b(_.format===ea,_.type),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Re,K.width,K.height,0,fe,Pe,null));else if(_.isDataTexture)if(Ue.length>0){I&&le&&t.texStorage2D(n.TEXTURE_2D,me,Re,Ue[0].width,Ue[0].height);for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,Pe,re.data):t.texImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,fe,Pe,re.data);_.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,me,Re,K.width,K.height),J&&te(_,K,fe,Pe)):t.texImage2D(n.TEXTURE_2D,0,Re,K.width,K.height,0,fe,Pe,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,Ue[0].width,Ue[0].height,K.depth);for(let Q=0,X=Ue.length;Q<X;Q++)if(re=Ue[Q],_.format!==Vn)if(fe!==null)if(I){if(J)if(_.layerUpdates.size>0){let ge=Q_(re.width,re.height,_.format,_.type);for(let Ge of _.layerUpdates){let wt=re.data.subarray(Ge*ge/re.data.BYTES_PER_ELEMENT,(Ge+1)*ge/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ge,re.width,re.height,1,fe,wt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,K.depth,fe,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Re,re.width,re.height,K.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?J&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,K.depth,fe,Pe,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Re,re.width,re.height,K.depth,0,fe,Pe,re.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,me,Re,Ue[0].width,Ue[0].height);for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],_.format!==Vn?fe!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,re.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,Pe,re.data):t.texImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,fe,Pe,re.data)}else if(_.isDataArrayTexture)if(I){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,K.width,K.height,K.depth),J)if(_.layerUpdates.size>0){let Q=Q_(K.width,K.height,_.format,_.type);for(let X of _.layerUpdates){let ge=K.data.subarray(X*Q/K.data.BYTES_PER_ELEMENT,(X+1)*Q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,fe,Pe,ge)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,Pe,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,K.width,K.height,K.depth,0,fe,Pe,K.data);else if(_.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,me,Re,K.width,K.height,K.depth),J&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,Pe,K.data)):t.texImage3D(n.TEXTURE_3D,0,Re,K.width,K.height,K.depth,0,fe,Pe,K.data);else if(_.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,me,Re,K.width,K.height);else{let Q=K.width,X=K.height;for(let ge=0;ge<me;ge++)t.texImage2D(n.TEXTURE_2D,ge,Re,Q,X,0,fe,Pe,null),Q>>=1,X>>=1}}else if(Ue.length>0){if(I&&le){let Q=qt(Ue[0]);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe,Pe,re):t.texImage2D(n.TEXTURE_2D,Q,Re,fe,Pe,re);_.generateMipmaps=!1}else if(I){if(le){let Q=qt(K);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}J&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Pe,K)}else t.texImage2D(n.TEXTURE_2D,0,Re,fe,Pe,K);m(_)&&p(W),Me.__version=z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ce(M,_,F){if(_.image.length!==6)return;let W=ht(M,_),Y=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let z=i.get(Y);if(Y.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+F);let Me=it.getPrimaries(it.workingColorSpace),se=_.colorSpace===mr?null:it.getPrimaries(_.colorSpace),ye=_.colorSpace===mr||Me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,K=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let X=0;X<6;X++)!Se&&!K?fe[X]=y(_.image[X],!0,r.maxCubemapSize):fe[X]=K?_.image[X].image:_.image[X],fe[X]=Xe(_,fe[X]);let Pe=fe[0],Re=o.convert(_.format,_.colorSpace),re=o.convert(_.type),Ue=S(_.internalFormat,Re,re,_.colorSpace),I=_.isVideoTexture!==!0,le=z.__version===void 0||W===!0,J=Y.dataReady,me=R(_,Pe);et(n.TEXTURE_CUBE_MAP,_);let Q;if(Se){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,Pe.width,Pe.height);for(let X=0;X<6;X++){Q=fe[X].mipmaps;for(let ge=0;ge<Q.length;ge++){let Ge=Q[ge];_.format!==Vn?Re!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,Ge.width,Ge.height,Re,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,Ue,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,Ge.width,Ge.height,Re,re,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,Ue,Ge.width,Ge.height,0,Re,re,Ge.data)}}}else{if(Q=_.mipmaps,I&&le){Q.length>0&&me++;let X=qt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,X.width,X.height)}for(let X=0;X<6;X++)if(K){I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,fe[X].width,fe[X].height,Re,re,fe[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,fe[X].width,fe[X].height,0,Re,re,fe[X].data);for(let ge=0;ge<Q.length;ge++){let wt=Q[ge].image[X].image;I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,wt.width,wt.height,Re,re,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,Ue,wt.width,wt.height,0,Re,re,wt.data)}}else{I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,re,fe[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,Re,re,fe[X]);for(let ge=0;ge<Q.length;ge++){let Ge=Q[ge];I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,Re,re,Ge.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,Ue,Re,re,Ge.image[X])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),z.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function xe(M,_,F,W,Y,z){let Me=o.convert(F.format,F.colorSpace),se=o.convert(F.type),ye=S(F.internalFormat,Me,se,F.colorSpace),Se=i.get(_),K=i.get(F);if(K.__renderTarget=_,!Se.__hasExternalTextures){let fe=Math.max(1,_.width>>z),Pe=Math.max(1,_.height>>z);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,z,ye,fe,Pe,_.depth,0,Me,se,null):t.texImage2D(Y,z,ye,fe,Pe,0,Me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,K.__webglTexture,0,be(_)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,K.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(M,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){let W=_.depthTexture,Y=W&&W.isDepthTexture?W.type:null,z=b(_.stencilBuffer,Y),Me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=be(_);ot(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,M)}else{let W=_.textures;for(let Y=0;Y<W.length;Y++){let z=W[Y],Me=o.convert(z.format,z.colorSpace),se=o.convert(z.type),ye=S(z.internalFormat,Me,se,z.colorSpace),Se=be(_);F&&ot(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ye,_.width,_.height):ot(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ye,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ye,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let Y=W.__webglTexture,z=be(_);if(_.depthTexture.format===Hs)ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(_.depthTexture.format===ea)ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Rt(M){let _=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=W}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let W=M.texture.mipmaps;W&&W.length>0?Oe(_.__webglFramebuffer[0],M):Oe(_.__webglFramebuffer,M)}else if(F){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),ct(_.__webglDepthbuffer[W],M,!1);else{let Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,z)}}else{let W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ct(_.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(M,_,F){let W=i.get(M);_!==void 0&&xe(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Rt(M)}function lt(M){let _=M.texture,F=i.get(M),W=i.get(_);M.addEventListener("dispose",C);let Y=M.textures,z=M.isWebGLCubeRenderTarget===!0,Me=Y.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,s.memory.textures++),z){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ye=0;ye<_.mipmaps.length;ye++)F.__webglFramebuffer[se][ye]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let se=0,ye=Y.length;se<ye;se++){let Se=i.get(Y[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&ot(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<Y.length;se++){let ye=Y[se];F.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let Se=o.convert(ye.format,ye.colorSpace),K=o.convert(ye.type),fe=S(ye.internalFormat,Se,K,ye.colorSpace,M.isXRRenderTarget===!0),Pe=be(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,F.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),et(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(F.__webglFramebuffer[se][ye],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye);else xe(F.__webglFramebuffer[se],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,ye=Y.length;se<ye;se++){let Se=Y[se],K=i.get(Se);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),et(n.TEXTURE_2D,Se),xe(F.__webglFramebuffer,M,Se,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Se)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,W.__webglTexture),et(se,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(F.__webglFramebuffer[ye],M,_,n.COLOR_ATTACHMENT0,se,ye);else xe(F.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,se,0);m(_)&&p(se),t.unbindTexture()}M.depthBuffer&&Rt(M)}function T(M){let _=M.textures;for(let F=0,W=_.length;F<W;F++){let Y=_[F];if(m(Y)){let z=w(M),Me=i.get(Y).__webglTexture;t.bindTexture(z,Me),p(z),t.unbindTexture()}}}let vn=[],ut=[];function Et(M){if(M.samples>0){if(ot(M)===!1){let _=M.textures,F=M.width,W=M.height,Y=n.COLOR_BUFFER_BIT,z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(M),se=_.length>1;if(se)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let ye=M.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let K=i.get(_[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,Y,n.NEAREST),c===!0&&(vn.length=0,ut.length=0,vn.push(n.COLOR_ATTACHMENT0+Se),M.depthBuffer&&M.resolveDepthBuffer===!1&&(vn.push(z),ut.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let K=i.get(_[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,K,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function be(M){return Math.min(r.maxSamples,M.samples)}function ot(M){let _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(M){let _=s.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Xe(M,_){let F=M.colorSpace,W=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==hr&&F!==mr&&(it.getTransfer(F)===ft?(W!==Vn||Y!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function qt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Nt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ot}function WO(n,e){function t(i,r=mr){let o,s=it.getTransfer(r);if(i===ii)return n.UNSIGNED_BYTE;if(i===uf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===df)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===F_)return n.BYTE;if(i===k_)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===lf)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===B_)return n.ALPHA;if(i===V_)return n.RGB;if(i===Vn)return n.RGBA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===ea)return n.DEPTH_STENCIL;if(i===H_)return n.RED;if(i===ff)return n.RED_INTEGER;if(i===z_)return n.RG;if(i===hf)return n.RG_INTEGER;if(i===pf)return n.RGBA_INTEGER;if(i===Bc||i===Vc||i===Hc||i===zc)if(s===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Bc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Bc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===yf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===mf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vf||i===xf||i===bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===vf||i===xf)return s===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===bf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ef||i===Mf||i===Sf||i===wf||i===Tf||i===Cf||i===Df||i===If||i===Af||i===Rf||i===Nf||i===Pf||i===Of||i===Lf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ef)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Ff||i===kf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Gc)return s===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===G_||i===Uf||i===Bf||i===Vf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Gc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Uf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $O=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Jr,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new St({vertexShader:$O,fragmentShader:qO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hy=class extends Hi{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new fy,m=t.getContextAttributes(),p=null,w=null,S=[],b=[],R=new Ee,A=null,C=new gn;C.viewport=new kt;let L=new gn;L.viewport=new kt;let E=[C,L],x=new zd,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=S[G];return te===void 0&&(te=new Xs,S[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=S[G];return te===void 0&&(te=new Xs,S[G]=te),te.getGripSpace()},this.getHand=function(G){let te=S[G];return te===void 0&&(te=new Xs,S[G]=te),te.getHandSpace()};function k(G){let te=b.indexOf(G.inputSource);if(te===-1)return;let ve=S[te];ve!==void 0&&(ve.update(G.inputSource,G.frame,l||s),ve.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let G=0;G<S.length;G++){let te=b[G];te!==null&&(b[G]=null,S[G].disconnect(te))}D=null,H=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return jt(this,null,function*(){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ce=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?ea:Hs,ce=m.stencil?Qs:Kr);let ct={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new _n(f.textureWidth,f.textureHeight,{format:Vn,type:ii,depthTexture:new Dc(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new _n(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=yield r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(G){for(let te=0;te<G.removed.length;te++){let ve=G.removed[te],ce=b.indexOf(ve);ce>=0&&(b[ce]=null,S[ce].disconnect(ve))}for(let te=0;te<G.added.length;te++){let ve=G.added[te],ce=b.indexOf(ve);if(ce===-1){for(let ct=0;ct<S.length;ct++)if(ct>=b.length){b.push(ve),ce=ct;break}else if(b[ct]===null){b[ct]=ve,ce=ct;break}if(ce===-1)break}let xe=S[ce];xe&&xe.connect(ve)}}let j=new O,Z=new O;function V(G,te,ve){j.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);let ce=j.distanceTo(Z),xe=te.projectionMatrix.elements,ct=ve.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Rt=xe[14]/(xe[10]+1),Nt=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],T=(xe[8]-1)/xe[0],vn=(ct[8]+1)/ct[0],ut=Oe*T,Et=Oe*vn,be=ce/(-T+vn),ot=be*-T;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ot),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xe[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ie=Oe+be,Xe=Rt+be,qt=ut-ot,M=Et+(ce-ot),_=Nt*Rt/Xe*Ie,F=lt*Rt/Xe*Ie;G.projectionMatrix.makePerspective(qt,M,_,F,Ie,Xe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ne(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,ve=G.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=L.near=C.near=te,x.far=L.far=C.far=ve,(D!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,H=x.far),C.layers.mask=G.layers.mask|2,L.layers.mask=G.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;let ce=G.parent,xe=x.cameras;ne(x,ce);for(let ct=0;ct<xe.length;ct++)ne(xe[ct],ce);xe.length===2?V(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),de(G,x,ce)};function de(G,te,ve){ve===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(ve.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Te=null;function et(G,te){if(u=te.getViewerPose(l||s),g=te,u!==null){let ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let ce=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Oe=0;Oe<ve.length;Oe++){let Rt=ve[Oe],Nt=null;if(h!==null)Nt=h.getViewport(Rt);else{let T=d.getViewSubImage(f,Rt);Nt=T.viewport,Oe===0&&(e.setRenderTargetTextures(w,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(w))}let lt=E[Oe];lt===void 0&&(lt=new gn,lt.layers.enable(Oe),lt.viewport=new kt,E[Oe]=lt),lt.matrix.fromArray(Rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Oe===0&&(x.matrix.copy(lt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(lt)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,r.renderState)}}for(let ve=0;ve<S.length;ve++){let ce=b[ve],xe=S[ve];ce!==null&&xe!==void 0&&xe.update(ce,te,l||s)}Te&&Te(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ht=new vM;ht.setAnimationLoop(et),this.setAnimationLoop=function(G){Te=G},this.dispose=function(){}}},Zo=new Gr,XO=new zt;function YO(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Z_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),y(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,b=w.envMapRotation;S&&(m.envMap.value=S,Zo.copy(b),Zo.x*=-1,Zo.y*=-1,Zo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zo.y*=-1,Zo.z*=-1),m.envMapRotation.value.setFromMatrix4(XO.makeRotationFromEuler(Zo)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZO(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let b=S.program;i.uniformBlockBinding(w,b)}function l(w,S){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",m));let R=S.program;i.updateUBOMapping(w,R);let A=e.render.frame;o[w.id]!==A&&(f(w),o[w.id]=A)}function u(w){let S=d();w.__bindingPointIndex=S;let b=n.createBuffer(),R=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=r[w.id],b=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,C=b.length;A<C;A++){let L=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,x=L.length;E<x;E++){let D=L[E];if(h(D,A,E,R)===!0){let H=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],$=0;for(let q=0;q<k.length;q++){let j=k[q],Z=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,H+$,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,b,R){let A=w.value,C=S+"_"+b;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){let S=w.uniforms,b=0,R=16;for(let C=0,L=S.length;C<L;C++){let E=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,D=E.length;x<D;x++){let H=E[x],k=Array.isArray(H.value)?H.value:[H.value];for(let $=0,q=k.length;$<q;$++){let j=k[$],Z=y(j),V=b%R,ne=V%Z.boundary,de=V+ne;b+=ne,de!==0&&R-de<Z.storage&&(b+=R-de),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=Z.storage}}}let A=b%R;return A>0&&(b+=R-A),w.__size=b,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var Wf=class{constructor(e={}){let{canvas:t=WE(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,R=!1;this._outputColorSpace=Jn;let A=0,C=0,L=null,E=-1,x=null,D=new kt,H=new kt,k=null,$=new we(0),q=0,j=t.width,Z=t.height,V=1,ne=null,de=null,Te=new kt(0,0,j,Z),et=new kt(0,0,j,Z),ht=!1,G=new Ys,te=!1,ve=!1,ce=new zt,xe=new zt,ct=new O,Oe=new kt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function lt(){return L===null?V:1}let T=i;function vn(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",X,!1),T===null){let N="webgl2";if(T=vn(N,v),T===null)throw vn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ut,Et,be,ot,Ie,Xe,qt,M,_,F,W,Y,z,Me,se,ye,Se,K,fe,Pe,Re,re,Ue,I;function le(){ut=new pP(T),ut.init(),re=new WO(T,ut),Et=new aP(T,ut,e,re),be=new GO(T,ut),Et.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),ot=new _P(T),Ie=new AO,Xe=new jO(T,ut,be,Ie,Et,re,ot),qt=new lP(b),M=new hP(b),_=new M1(T),Ue=new oP(T,_),F=new mP(T,_,ot,Ue),W=new vP(T,F,_,ot),fe=new yP(T,Et,Xe),ye=new cP(Ie),Y=new IO(b,qt,M,ut,Et,Ue,ye),z=new YO(b,Ie),Me=new NO,se=new UO(ut),K=new rP(b,qt,M,be,W,h,c),Se=new HO(b,W,Et),I=new ZO(T,ot,Et,be),Pe=new sP(T,ut,ot),Re=new gP(T,ut,ot),ot.programs=Y.programs,b.capabilities=Et,b.extensions=ut,b.properties=Ie,b.renderLists=Me,b.shadowMap=Se,b.state=be,b.info=ot}le();let J=new hy(b,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(j,Z,!1))},this.getSize=function(v){return v.set(j,Z)},this.setSize=function(v,N,U=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,Z=N,t.width=Math.floor(v*V),t.height=Math.floor(N*V),U===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(j*V,Z*V).floor()},this.setDrawingBufferSize=function(v,N,U){j=v,Z=N,V=U,t.width=Math.floor(v*U),t.height=Math.floor(N*U),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Te)},this.setViewport=function(v,N,U,B){v.isVector4?Te.set(v.x,v.y,v.z,v.w):Te.set(v,N,U,B),be.viewport(D.copy(Te).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(et)},this.setScissor=function(v,N,U,B){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,N,U,B),be.scissor(H.copy(et).multiplyScalar(V).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(v){be.setScissorTest(ht=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,U=!0){let B=0;if(v){let P=!1;if(L!==null){let ee=L.texture.format;P=ee===pf||ee===hf||ee===ff}if(P){let ee=L.texture.type,ue=ee===ii||ee===Kr||ee===Js||ee===Qs||ee===uf||ee===df,_e=K.getClearColor(),he=K.getClearAlpha(),Le=_e.r,Fe=_e.g,Ce=_e.b;ue?(g[0]=Le,g[1]=Fe,g[2]=Ce,g[3]=he,T.clearBufferuiv(T.COLOR,0,g)):(y[0]=Le,y[1]=Fe,y[2]=Ce,y[3]=he,T.clearBufferiv(T.COLOR,0,y))}else B|=T.COLOR_BUFFER_BIT}N&&(B|=T.DEPTH_BUFFER_BIT),U&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",X,!1),K.dispose(),Me.dispose(),se.dispose(),Ie.dispose(),qt.dispose(),M.dispose(),W.dispose(),Ue.dispose(),I.dispose(),Y.dispose(),J.dispose(),J.removeEventListener("sessionstart",Cy),J.removeEventListener("sessionend",Dy),no.stop()};function me(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let v=ot.autoReset,N=Se.enabled,U=Se.autoUpdate,B=Se.needsUpdate,P=Se.type;le(),ot.autoReset=v,Se.enabled=N,Se.autoUpdate=U,Se.needsUpdate=B,Se.type=P}function X(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ge(v){let N=v.target;N.removeEventListener("dispose",ge),Ge(N)}function Ge(v){wt(v),Ie.remove(v)}function wt(v){let N=Ie.get(v).programs;N!==void 0&&(N.forEach(function(U){Y.releaseProgram(U)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,U,B,P,ee){N===null&&(N=Rt);let ue=P.isMesh&&P.matrixWorld.determinant()<0,_e=nS(v,N,U,B,P);be.setMaterial(B,ue);let he=U.index,Le=1;if(B.wireframe===!0){if(he=F.getWireframeAttribute(U),he===void 0)return;Le=2}let Fe=U.drawRange,Ce=U.attributes.position,nt=Fe.start*Le,vt=(Fe.start+Fe.count)*Le;ee!==null&&(nt=Math.max(nt,ee.start*Le),vt=Math.min(vt,(ee.start+ee.count)*Le)),he!==null?(nt=Math.max(nt,0),vt=Math.min(vt,he.count)):Ce!=null&&(nt=Math.max(nt,0),vt=Math.min(vt,Ce.count));let Pt=vt-nt;if(Pt<0||Pt===1/0)return;Ue.setup(P,B,_e,U,he);let Bt,st=Pe;if(he!==null&&(Bt=_.get(he),st=Re,st.setIndex(Bt)),P.isMesh)B.wireframe===!0?(be.setLineWidth(B.wireframeLinewidth*lt()),st.setMode(T.LINES)):st.setMode(T.TRIANGLES);else if(P.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*lt()),P.isLineSegments?st.setMode(T.LINES):P.isLineLoop?st.setMode(T.LINE_LOOP):st.setMode(T.LINE_STRIP)}else P.isPoints?st.setMode(T.POINTS):P.isSprite&&st.setMode(T.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ho("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))st.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ae=P._multiDrawStarts,sn=P._multiDrawCounts,pt=P._multiDrawCount,gi=he?_.get(he).bytesPerElement:1,es=Ie.get(B).currentProgram.getUniforms();for(let Gn=0;Gn<pt;Gn++)es.setValue(T,"_gl_DrawID",Gn),st.render(Ae[Gn]/gi,sn[Gn])}else if(P.isInstancedMesh)st.renderInstances(nt,Pt,P.count);else if(U.isInstancedBufferGeometry){let Ae=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,sn=Math.min(U.instanceCount,Ae);st.renderInstances(nt,Pt,sn)}else st.render(nt,Pt)};function yt(v,N,U){v.transparent===!0&&v.side===ni&&v.forceSinglePass===!1?(v.side=In,v.needsUpdate=!0,Jc(v,N,U),v.side=fr,v.needsUpdate=!0,Jc(v,N,U),v.side=ni):Jc(v,N,U)}this.compile=function(v,N,U=null){U===null&&(U=v),p=se.get(U),p.init(N),S.push(p),U.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),v!==U&&v.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let B=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ee=P.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){let _e=ee[ue];yt(_e,U,P),B.add(_e)}else yt(ee,U,P),B.add(ee)}),p=S.pop(),B},this.compileAsync=function(v,N,U=null){let B=this.compile(v,N,U);return new Promise(P=>{function ee(){if(B.forEach(function(ue){Ie.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){P(v);return}setTimeout(ee,10)}ut.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let mi=null;function $i(v){mi&&mi(v)}function Cy(){no.stop()}function Dy(){no.start()}let no=new vM;no.setAnimationLoop($i),typeof self<"u"&&no.setContext(self),this.setAnimationLoop=function(v){mi=v,J.setAnimationLoop(v),v===null?no.stop():no.start()},J.addEventListener("sessionstart",Cy),J.addEventListener("sessionend",Dy),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,N,L),p=se.get(v,S.length),p.init(N),S.push(p),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(xe),ve=this.localClippingEnabled,te=ye.init(this.clippingPlanes,ve),m=Me.get(v,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){let ee=b.xr.getDepthSensingMesh();ee!==null&&Mh(ee,N,-1/0,b.sortObjects)}Mh(v,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ne,de),Nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Nt&&K.addToRenderList(m,v),this.info.render.frame++,te===!0&&ye.beginShadows();let U=p.state.shadowsArray;Se.render(U,v,N),te===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,P=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ee=N.cameras;if(P.length>0)for(let ue=0,_e=ee.length;ue<_e;ue++){let he=ee[ue];Ay(B,P,v,he)}Nt&&K.render(v);for(let ue=0,_e=ee.length;ue<_e;ue++){let he=ee[ue];Iy(m,v,he,he.viewport)}}else P.length>0&&Ay(B,P,v,N),Nt&&K.render(v),Iy(m,v,N);L!==null&&C===0&&(Xe.updateMultisampleRenderTarget(L),Xe.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(b,v,N),Ue.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],te===!0&&ye.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Mh(v,N,U,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)U=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){B&&Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);let ue=W.update(v),_e=v.material;_e.visible&&m.push(v,ue,_e,U,Oe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||G.intersectsObject(v))){let ue=W.update(v),_e=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Oe.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(_e)){let he=ue.groups;for(let Le=0,Fe=he.length;Le<Fe;Le++){let Ce=he[Le],nt=_e[Ce.materialIndex];nt&&nt.visible&&m.push(v,ue,nt,U,Oe.z,Ce)}}else _e.visible&&m.push(v,ue,_e,U,Oe.z,null)}}let ee=v.children;for(let ue=0,_e=ee.length;ue<_e;ue++)Mh(ee[ue],N,U,B)}function Iy(v,N,U,B){let P=v.opaque,ee=v.transmissive,ue=v.transparent;p.setupLightsView(U),te===!0&&ye.setGlobalState(b.clippingPlanes,U),B&&be.viewport(D.copy(B)),P.length>0&&Kc(P,N,U),ee.length>0&&Kc(ee,N,U),ue.length>0&&Kc(ue,N,U),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ay(v,N,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new _n(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?pi:ii,minFilter:Zr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ee=p.state.transmissionRenderTarget[B.id],ue=B.viewport||D;ee.setSize(ue.z*b.transmissionResolutionScale,ue.w*b.transmissionResolutionScale);let _e=b.getRenderTarget();b.setRenderTarget(ee),b.getClearColor($),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),Nt&&K.render(U);let he=b.toneMapping;b.toneMapping=Ai;let Le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),te===!0&&ye.setGlobalState(b.clippingPlanes,B),Kc(v,U,B),Xe.updateMultisampleRenderTarget(ee),Xe.updateRenderTargetMipmap(ee),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ce=0,nt=N.length;Ce<nt;Ce++){let vt=N[Ce],Pt=vt.object,Bt=vt.geometry,st=vt.material,Ae=vt.group;if(st.side===ni&&Pt.layers.test(B.layers)){let sn=st.side;st.side=In,st.needsUpdate=!0,Ry(Pt,U,B,Bt,st,Ae),st.side=sn,st.needsUpdate=!0,Fe=!0}}Fe===!0&&(Xe.updateMultisampleRenderTarget(ee),Xe.updateRenderTargetMipmap(ee))}b.setRenderTarget(_e),b.setClearColor($,q),Le!==void 0&&(B.viewport=Le),b.toneMapping=he}function Kc(v,N,U){let B=N.isScene===!0?N.overrideMaterial:null;for(let P=0,ee=v.length;P<ee;P++){let ue=v[P],_e=ue.object,he=ue.geometry,Le=ue.group,Fe=ue.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),_e.layers.test(U.layers)&&Ry(_e,N,U,he,Fe,Le)}}function Ry(v,N,U,B,P,ee){v.onBeforeRender(b,N,U,B,P,ee),v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(b,N,U,B,v,ee),P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,b.renderBufferDirect(U,N,B,P,v,ee),P.side=fr,P.needsUpdate=!0,b.renderBufferDirect(U,N,B,P,v,ee),P.side=ni):b.renderBufferDirect(U,N,B,P,v,ee),v.onAfterRender(b,N,U,B,P,ee)}function Jc(v,N,U){N.isScene!==!0&&(N=Rt);let B=Ie.get(v),P=p.state.lights,ee=p.state.shadowsArray,ue=P.state.version,_e=Y.getParameters(v,P.state,ee,N,U),he=Y.getProgramCacheKey(_e),Le=B.programs;B.environment=v.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(v.isMeshStandardMaterial?M:qt).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",ge),Le=new Map,B.programs=Le);let Fe=Le.get(he);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ue)return Py(v,_e),Fe}else _e.uniforms=Y.getUniforms(v),v.onBeforeCompile(_e,b),Fe=Y.acquireProgram(_e,he),Le.set(he,Fe),B.uniforms=_e.uniforms;let Ce=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),Py(v,_e),B.needsLights=rS(v),B.lightsStateVersion=ue,B.needsLights&&(Ce.ambientLightColor.value=P.state.ambient,Ce.lightProbe.value=P.state.probe,Ce.directionalLights.value=P.state.directional,Ce.directionalLightShadows.value=P.state.directionalShadow,Ce.spotLights.value=P.state.spot,Ce.spotLightShadows.value=P.state.spotShadow,Ce.rectAreaLights.value=P.state.rectArea,Ce.ltc_1.value=P.state.rectAreaLTC1,Ce.ltc_2.value=P.state.rectAreaLTC2,Ce.pointLights.value=P.state.point,Ce.pointLightShadows.value=P.state.pointShadow,Ce.hemisphereLights.value=P.state.hemi,Ce.directionalShadowMap.value=P.state.directionalShadowMap,Ce.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ce.spotShadowMap.value=P.state.spotShadowMap,Ce.spotLightMatrix.value=P.state.spotLightMatrix,Ce.spotLightMap.value=P.state.spotLightMap,Ce.pointShadowMap.value=P.state.pointShadowMap,Ce.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function Ny(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=ra.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Py(v,N){let U=Ie.get(v);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.batchingColor=N.batchingColor,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.instancingMorph=N.instancingMorph,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function nS(v,N,U,B,P){N.isScene!==!0&&(N=Rt),Xe.resetTextureUnits();let ee=N.fog,ue=B.isMeshStandardMaterial?N.environment:null,_e=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:hr,he=(B.isMeshStandardMaterial?M:qt).get(B.envMap||ue),Le=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!U.morphAttributes.position,nt=!!U.morphAttributes.normal,vt=!!U.morphAttributes.color,Pt=Ai;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pt=b.toneMapping);let Bt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=Bt!==void 0?Bt.length:0,Ae=Ie.get(B),sn=p.state.lights;if(te===!0&&(ve===!0||v!==x)){let xn=v===x&&B.id===E;ye.setState(B,v,xn)}let pt=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==sn.state.version||Ae.outputColorSpace!==_e||P.isBatchedMesh&&Ae.batching===!1||!P.isBatchedMesh&&Ae.batching===!0||P.isBatchedMesh&&Ae.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ae.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ae.instancing===!1||!P.isInstancedMesh&&Ae.instancing===!0||P.isSkinnedMesh&&Ae.skinning===!1||!P.isSkinnedMesh&&Ae.skinning===!0||P.isInstancedMesh&&Ae.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ae.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ae.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ae.instancingMorph===!1&&P.morphTexture!==null||Ae.envMap!==he||B.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ye.numPlanes||Ae.numIntersection!==ye.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Fe||Ae.morphTargets!==Ce||Ae.morphNormals!==nt||Ae.morphColors!==vt||Ae.toneMapping!==Pt||Ae.morphTargetsCount!==st)&&(pt=!0):(pt=!0,Ae.__version=B.version);let gi=Ae.currentProgram;pt===!0&&(gi=Jc(B,N,P));let es=!1,Gn=!1,fa=!1,Ct=gi.getUniforms(),oi=Ae.uniforms;if(be.useProgram(gi.program)&&(es=!0,Gn=!0,fa=!0),B.id!==E&&(E=B.id,Gn=!0),es||x!==v){be.buffers.depth.getReversed()?(ce.copy(v.projectionMatrix),qE(ce),XE(ce),Ct.setValue(T,"projectionMatrix",ce)):Ct.setValue(T,"projectionMatrix",v.projectionMatrix),Ct.setValue(T,"viewMatrix",v.matrixWorldInverse);let An=Ct.map.cameraPosition;An!==void 0&&An.setValue(T,ct.setFromMatrixPosition(v.matrixWorld)),Et.logarithmicDepthBuffer&&Ct.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Gn=!0,fa=!0)}if(P.isSkinnedMesh){Ct.setOptional(T,P,"bindMatrix"),Ct.setOptional(T,P,"bindMatrixInverse");let xn=P.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ct.setValue(T,"boneTexture",xn.boneTexture,Xe))}P.isBatchedMesh&&(Ct.setOptional(T,P,"batchingTexture"),Ct.setValue(T,"batchingTexture",P._matricesTexture,Xe),Ct.setOptional(T,P,"batchingIdTexture"),Ct.setValue(T,"batchingIdTexture",P._indirectTexture,Xe),Ct.setOptional(T,P,"batchingColorTexture"),P._colorsTexture!==null&&Ct.setValue(T,"batchingColorTexture",P._colorsTexture,Xe));let si=U.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&fe.update(P,U,gi),(Gn||Ae.receiveShadow!==P.receiveShadow)&&(Ae.receiveShadow=P.receiveShadow,Ct.setValue(T,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(oi.envMap.value=he,oi.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(oi.envMapIntensity.value=N.environmentIntensity),Gn&&(Ct.setValue(T,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&iS(oi,fa),ee&&B.fog===!0&&z.refreshFogUniforms(oi,ee),z.refreshMaterialUniforms(oi,B,V,Z,p.state.transmissionRenderTarget[v.id]),ra.upload(T,Ny(Ae),oi,Xe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ra.upload(T,Ny(Ae),oi,Xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(T,"center",P.center),Ct.setValue(T,"modelViewMatrix",P.modelViewMatrix),Ct.setValue(T,"normalMatrix",P.normalMatrix),Ct.setValue(T,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let xn=B.uniformsGroups;for(let An=0,Sh=xn.length;An<Sh;An++){let io=xn[An];I.update(io,gi),I.bind(io,gi)}}return gi}function iS(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function rS(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,N,U){let B=Ie.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ie.get(v.texture).__webglTexture=N,Ie.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let U=Ie.get(v);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0};let oS=T.createFramebuffer();this.setRenderTarget=function(v,N=0,U=0){L=v,A=N,C=U;let B=!0,P=null,ee=!1,ue=!1;if(v){let he=Ie.get(v);if(he.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)Xe.setupRenderTarget(v);else if(he.__hasExternalTextures)Xe.rebindTextures(v,Ie.get(v.texture).__webglTexture,Ie.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ce=v.depthTexture;if(he.__boundDepthTexture!==Ce){if(Ce!==null&&Ie.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(v)}}let Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);let Fe=Ie.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?P=Fe[N][U]:P=Fe[N],ee=!0):v.samples>0&&Xe.useMultisampledRTT(v)===!1?P=Ie.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?P=Fe[U]:P=Fe,D.copy(v.viewport),H.copy(v.scissor),k=v.scissorTest}else D.copy(Te).multiplyScalar(V).floor(),H.copy(et).multiplyScalar(V).floor(),k=ht;if(U!==0&&(P=oS),be.bindFramebuffer(T.FRAMEBUFFER,P)&&B&&be.drawBuffers(v,P),be.viewport(D),be.scissor(H),be.setScissorTest(k),ee){let he=Ie.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,U)}else if(ue){let he=Ie.get(v.texture),Le=N;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.__webglTexture,U,Le)}else if(v!==null&&U!==0){let he=Ie.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,he.__webglTexture,U)}E=-1},this.readRenderTargetPixels=function(v,N,U,B,P,ee,ue,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he){be.bindFramebuffer(T.FRAMEBUFFER,he);try{let Le=v.textures[_e],Fe=Le.format,Ce=Le.type;if(!Et.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&U>=0&&U<=v.height-P&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+_e),T.readPixels(N,U,B,P,re.convert(Fe),re.convert(Ce),ee))}finally{let Le=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=function(v,N,U,B,P,ee,ue,_e=0){return jt(this,null,function*(){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he)if(N>=0&&N<=v.width-B&&U>=0&&U<=v.height-P){be.bindFramebuffer(T.FRAMEBUFFER,he);let Le=v.textures[_e],Fe=Le.format,Ce=Le.type;if(!Et.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,nt),T.bufferData(T.PIXEL_PACK_BUFFER,ee.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+_e),T.readPixels(N,U,B,P,re.convert(Fe),re.convert(Ce),0);let vt=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,vt);let Pt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield $E(T,Pt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,nt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ee),T.deleteBuffer(nt),T.deleteSync(Pt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(v,N=null,U=0){let B=Math.pow(2,-U),P=Math.floor(v.image.width*B),ee=Math.floor(v.image.height*B),ue=N!==null?N.x:0,_e=N!==null?N.y:0;Xe.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,U,0,0,ue,_e,P,ee),be.unbindTexture()};let sS=T.createFramebuffer(),aS=T.createFramebuffer();this.copyTextureToTexture=function(v,N,U=null,B=null,P=0,ee=null){ee===null&&(P!==0?(Ho("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=P,P=0):ee=0);let ue,_e,he,Le,Fe,Ce,nt,vt,Pt,Bt=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(U!==null)ue=U.max.x-U.min.x,_e=U.max.y-U.min.y,he=U.isBox3?U.max.z-U.min.z:1,Le=U.min.x,Fe=U.min.y,Ce=U.isBox3?U.min.z:0;else{let si=Math.pow(2,-P);ue=Math.floor(Bt.width*si),_e=Math.floor(Bt.height*si),v.isDataArrayTexture?he=Bt.depth:v.isData3DTexture?he=Math.floor(Bt.depth*si):he=1,Le=0,Fe=0,Ce=0}B!==null?(nt=B.x,vt=B.y,Pt=B.z):(nt=0,vt=0,Pt=0);let st=re.convert(N.format),Ae=re.convert(N.type),sn;N.isData3DTexture?(Xe.setTexture3D(N,0),sn=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Xe.setTexture2DArray(N,0),sn=T.TEXTURE_2D_ARRAY):(Xe.setTexture2D(N,0),sn=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);let pt=T.getParameter(T.UNPACK_ROW_LENGTH),gi=T.getParameter(T.UNPACK_IMAGE_HEIGHT),es=T.getParameter(T.UNPACK_SKIP_PIXELS),Gn=T.getParameter(T.UNPACK_SKIP_ROWS),fa=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Bt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Bt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ce);let Ct=v.isDataArrayTexture||v.isData3DTexture,oi=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let si=Ie.get(v),xn=Ie.get(N),An=Ie.get(si.__renderTarget),Sh=Ie.get(xn.__renderTarget);be.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,Sh.__webglFramebuffer);for(let io=0;io<he;io++)Ct&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ie.get(v).__webglTexture,P,Ce+io),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ie.get(N).__webglTexture,ee,Pt+io)),T.blitFramebuffer(Le,Fe,ue,_e,nt,vt,ue,_e,T.DEPTH_BUFFER_BIT,T.NEAREST);be.bindFramebuffer(T.READ_FRAMEBUFFER,null),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(P!==0||v.isRenderTargetTexture||Ie.has(v)){let si=Ie.get(v),xn=Ie.get(N);be.bindFramebuffer(T.READ_FRAMEBUFFER,sS),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,aS);for(let An=0;An<he;An++)Ct?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,si.__webglTexture,P,Ce+An):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,si.__webglTexture,P),oi?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,ee,Pt+An):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,ee),P!==0?T.blitFramebuffer(Le,Fe,ue,_e,nt,vt,ue,_e,T.COLOR_BUFFER_BIT,T.NEAREST):oi?T.copyTexSubImage3D(sn,ee,nt,vt,Pt+An,Le,Fe,ue,_e):T.copyTexSubImage2D(sn,ee,nt,vt,Le,Fe,ue,_e);be.bindFramebuffer(T.READ_FRAMEBUFFER,null),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else oi?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(sn,ee,nt,vt,Pt,ue,_e,he,st,Ae,Bt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(sn,ee,nt,vt,Pt,ue,_e,he,st,Bt.data):T.texSubImage3D(sn,ee,nt,vt,Pt,ue,_e,he,st,Ae,Bt):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,nt,vt,ue,_e,st,Ae,Bt.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,nt,vt,Bt.width,Bt.height,st,Bt.data):T.texSubImage2D(T.TEXTURE_2D,ee,nt,vt,ue,_e,st,Ae,Bt);T.pixelStorei(T.UNPACK_ROW_LENGTH,pt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gi),T.pixelStorei(T.UNPACK_SKIP_PIXELS,es),T.pixelStorei(T.UNPACK_SKIP_ROWS,Gn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,fa),ee===0&&N.generateMipmaps&&T.generateMipmap(sn),be.unbindTexture()},this.copyTextureToTexture3D=function(v,N,U=null,B=null,P=0){return Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,N,U,B,P)},this.initRenderTarget=function(v){Ie.get(v).__webglFramebuffer===void 0&&Xe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Xe.setTextureCube(v,0):v.isData3DTexture?Xe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Xe.setTexture2DArray(v,0):Xe.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,be.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var SM={type:"change"},gy={type:"start"},TM={type:"end"},qf=new Ws,wM=new di,KO=Math.cos(70*X_.DEG2RAD),Qt=new O,Hn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},my=1e-6,Xf=class extends Lc{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new hi,this._lastTargetPosition=new O,this._quat=new hi().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ks,this._sphericalDelta=new Ks,this._scale=1,this._panOffset=new O,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new O,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QO.bind(this),this._onPointerDown=JO.bind(this),this._onPointerUp=eL.bind(this),this._onContextMenu=aL.bind(this),this._onMouseWheel=iL.bind(this),this._onKeyDown=rL.bind(this),this._onTouchStart=oL.bind(this),this._onTouchMove=sL.bind(this),this._onMouseDown=tL.bind(this),this._onMouseMove=nL.bind(this),this._interceptControlDown=cL.bind(this),this._interceptControlUp=lL.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(SM),this.update(),this.state=xt.NONE}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),r<-Math.PI?r+=Hn:r>Math.PI&&(r-=Hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let a=Qt.length();s=this._clampDistance(a*this._scale);let c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(qf.origin.copy(this.object.position),qf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qf.direction))<KO?this.object.lookAt(this.target):(wM.setFromNormalAndCoplanarPoint(this.object.up,this.target),qf.intersectPlane(wM,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>my||8*(1-this._lastQuaternion.dot(this.object.quaternion))>my||this._lastTargetPosition.distanceToSquared(this.target)>my?(this.dispatchEvent(SM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Qt.copy(r).sub(this.target);let o=Qt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function JO(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function QO(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eL(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(TM),this.state=xt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tL(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case Xr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case Xr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(gy)}function nL(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iL(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(gy),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(TM))}function rL(n){this.enabled!==!1&&this._handleKeyDown(n)}function oL(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(gy)}function sL(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function aL(n){this.enabled!==!1&&n.preventDefault()}function cL(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lL(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var CM=`
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DM=`
varying vec2 v_uv;

uniform sampler2D u_baseTexture;
uniform sampler2D u_bloomTexture;

void main() {
  vec4 baseColor = texture2D(u_baseTexture, v_uv);
  vec4 bloomColor = texture2D(u_bloomTexture, v_uv);
  gl_FragColor = baseColor + bloomColor;
}
`;var sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uL=new Wo(-1,1,1,-1,0,1),_y=class extends ei{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},dL=new _y,Qr=class{constructor(e){this._mesh=new Ut(dL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var aa=class extends ri{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gr.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $c=class extends ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Yf=class extends ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aa(sa),this.copyPass.material.blending=Ii,this.clock=new Oc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,o=this.passes.length;r<o;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$c!==void 0&&(s instanceof $c?i=!0:s instanceof Yf&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Zf=class extends ri{constructor(){super(),this.uniforms=gr.clone(Xc.uniforms),this.material=new Ac({name:Xc.name,uniforms:this.uniforms,vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader}),this._fsQuad=new Qr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===of?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Kf=class extends ri{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var IM={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ca=class n extends ri{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(o,s,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new _n(o,s,{type:pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new _n(o,s,{type:pi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),s=Math.round(s/2)}let a=IM;this.highPassUniforms=gr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ee(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gr.clone(sa.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:Fc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new pr,this._fsQuad=new Qr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new Ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ca.BlurDirectionX=new Ee(1,0);ca.BlurDirectionY=new Ee(0,1);var yy=1,Jf=class{renderer;bloomComposer;finalComposer;init(e,t,i,r){this.renderer=new Wf({canvas:e,alpha:!1,antialias:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jd,this.renderer.toneMapping=Ai,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.autoUpdate=!0;let o=r.getScene(),s=r.getCamera(),a=new Kf(o,s);a.clearColor=new we(0,0,0);let c=new Ee(t,i),l=new ca(c,1,0,0);l.clearColor=new we(0,0,0),this.bloomComposer=new qc(this.renderer),this.bloomComposer.addPass(a),this.bloomComposer.addPass(l),this.bloomComposer.renderToScreen=!1;let u=this.bloomComposer.renderTarget2.texture,d=new St({uniforms:{u_baseTexture:{value:null},u_bloomTexture:{value:u}},vertexShader:CM,fragmentShader:DM}),f=new aa(d,"u_baseTexture");f.needsSwap=!0;let h=new Zf;this.finalComposer=new qc(this.renderer),this.finalComposer.addPass(a),this.finalComposer.addPass(f),this.finalComposer.addPass(h),this.finalComposer.renderToScreen=!0}onResize(e,t){console.log("Resizing renderer to:",e,t),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio)}filterObject(e,t,i,r){e instanceof Ut&&!e.layers.test(t)&&(i.set(e,e.material),e.material=r)}restoreObjects(e){e.forEach((t,i)=>{i instanceof Ut&&(i.material=t)})}getRenderer(){return this.renderer}render(e){let t=new pr({color:"black"}),i=new Map,r=new zo;r.set(yy);let o=e.getScene(),s=o.background;o.background=null,o.traverse(a=>this.filterObject(a,r,i,t)),this.bloomComposer.render(),this.restoreObjects(i),o.background=s,this.finalComposer.render()}dispose(){this.renderer.dispose(),this.bloomComposer.dispose(),this.finalComposer.dispose(),this.renderer=void 0,this.bloomComposer=void 0,this.finalComposer=void 0}};var Qf=class{scene;camera;controls;renderingPipeline;cells=[];create(e,t,i){this.scene=new Go,this.camera=new gn(60,t/i,.1,2e3),this.camera.position.set(0,20,50),this.controls=new Xf(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=500,this.controls.maxPolarAngle=Math.PI/2,this.renderingPipeline=new Jf,this.renderingPipeline.init(e,t,i,this)}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderingPipeline.onResize(e,t)}update(){this.controls.update(),this.renderingPipeline.render(this)}getScene(){return this.scene}getCamera(){return this.camera}getWorldCells(){return this.cells}getRenderer(){return this.renderingPipeline.getRenderer()}setWorldCells(e){this.cells=e}dispose(){this.controls.dispose(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose?.(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose?.()):e.material.dispose?.())}),this.renderingPipeline.dispose(),this.scene=void 0,this.camera=void 0,this.controls=void 0,this.renderingPipeline=void 0}};var eo=new je("LAYER_FACTORY");var la=class n{notificationsSubject=new jn([]);notifications$=this.notificationsSubject.asObservable();notifications=[];show(e){let t=Math.random().toString(36).slice(2,10),i=at({id:t},e);return this.notifications.push(i),this.notificationsSubject.next([...this.notifications]),i.timeout&&i.type!=="progress"&&setTimeout(()=>this.dismiss(t),i.timeout),t}update(e,t){let i=this.notifications.findIndex(r=>r.id===e);i!==-1&&(this.notifications[i]=at(at({},this.notifications[i]),t),this.notificationsSubject.next([...this.notifications]))}dismiss(e){this.notifications=this.notifications.filter(t=>t.id!==e),this.notificationsSubject.next([...this.notifications])}clear(){this.notifications=[],this.notificationsSubject.next([])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var zn=class n{constructor(e,t){this.notificationService=t;for(let i of e??[])this.factories.set(i.key,i),this.layerStates[i.key]={active:!1,generating:!1,progress:0};this.layerStatesSubject.next(at({},this.layerStates)),this.startWorker()}world=null;jobQueue=[];runningJob=null;runningJobSubject=new jn(null);jobSignal=null;factories=new Map;layerStates={};layerStatesSubject=new jn({});selectedLayerSubject=new jn(null);setWorld(e){this.world=e}getLayers(){return Array.from(this.factories.keys())}getFactory(e){let t=this.factories.get(e);if(t)return{factory:t.factory,params:t.params}}getIcon(e){let t=this.factories.get(e);if(t)return t.icon}getLayerConfigParams(e){return this.factories.get(e)?.params}updateLayerConfigParam(e,t,i){let r=this.factories.get(e);if(!r)return;let s=r.params.find(a=>a.key===t);s&&(s.value=i)}getRunningJob(){return this.runningJobSubject.asObservable()}getLayerStates(){return this.layerStatesSubject.asObservable()}getLayerState(e){return this.layerStates[e]||{active:!1,generating:!1,progress:0}}generateAllLayers(){for(let e of this.getLayers())this.queueLayerGeneration(e)}resetLayer(e){let t=this.getFactory(e);t&&this.world&&(t.factory.reset(this.world),this.setLayerActive?.(e,t.factory.isActive(this.world)))}resetAllLayers(){for(let e of this.getLayers())this.resetLayer(e)}queueLayerGeneration(e){let t=this.getFactory(e);if(t&&this.world){let i=null;this.jobQueue.push({name:`${e} generation`,job:()=>jt(this,null,function*(){try{this.notificationService&&(i=this.notificationService.show({type:"progress",message:`Generating ${e.charAt(0).toUpperCase()+e.slice(1)}\u2026`,progress:0})),yield new Promise(a=>setTimeout(a,500)),this.setLayerGenerating(e,!0),this.setLayerProgress(e,0);let r=t.factory.getPipeline(t.params,this.world),o=r.steps.length,s={};for(let a=0;a<o;a++){let c=r.steps[a];console.time(`Running step ${c.name}`),yield c.run(s),console.timeEnd(`Running step ${c.name}`),this.setLayerProgress(e,Math.round((a+1)/o*100)),this.notificationService&&i&&this.notificationService.update(i,{progress:Math.round((a+1)/o*100)}),yield new Promise(l=>setTimeout(l,200))}this.setLayerGenerating(e,!1),this.setLayerActive(e,t.factory.isActive(this.world)),this.notificationService&&i&&(this.notificationService.update(i,{type:"success",message:`${e.charAt(0).toUpperCase()+e.slice(1)} generated successfully!`,progress:void 0}),setTimeout(()=>this.notificationService?.dismiss(i),3e3))}catch(r){this.setLayerGenerating(e,!1),this.notificationService&&(i?(this.notificationService.update(i,{type:"error",message:`${e.charAt(0).toUpperCase()+e.slice(1)}: generation error`,progress:void 0}),setTimeout(()=>this.notificationService?.dismiss(i),4e3)):this.notificationService.show({type:"error",message:`${e.charAt(0).toUpperCase()+e.slice(1)}: generation error`,timeout:4e3})),console.error(`Error running job ${e} generation:`,r)}}),key:e}),this.jobSignal&&this.jobSignal()}}startWorker(){return jt(this,null,function*(){for(;;){this.jobQueue.length===0&&(yield new Promise(t=>this.jobSignal=t),this.jobSignal=null);let e=this.jobQueue.shift();e&&(this.runningJob=e.name,this.runningJobSubject.next(this.runningJob),yield new Promise(t=>setTimeout(t)),yield e.job(),this.runningJob=null,this.runningJobSubject.next(this.runningJob))}})}setLayerActive(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{active:t}),this.layerStatesSubject.next(at({},this.layerStates))}setLayerGenerating(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{generating:t}),this.layerStatesSubject.next(at({},this.layerStates))}setLayerProgress(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{progress:t}),this.layerStatesSubject.next(at({},this.layerStates))}selectedLayer$=this.selectedLayerSubject.asObservable();setSelectedLayer(e){this.selectedLayerSubject.next(e)}static \u0275fac=function(t){return new(t||n)(ke(eo,8),ke(la))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var da=class n{world;layerManager;framerateSubject=new jn(0);frameCount=0;captureTime=performance.now();constructor(e){this.layerManager=e}getFramerate(){return this.framerateSubject.asObservable()}init(e,t,i){this.world=new Qf,this.world.create(e,t,i),this.layerManager.setWorld(this.world);for(let r of this.layerManager.getLayers())this.layerManager.queueLayerGeneration(r)}onResize(e,t){this.world.onResize(e,t)}update(){if(this.world.update(),this.frameCount++,this.frameCount>=60){let e=performance.now();this.framerateSubject.next(Math.round(1e3*this.frameCount/(e-this.captureTime))),this.frameCount=0,this.captureTime=e}}dispose(){this.world.dispose()}static \u0275fac=function(t){return new(t||n)(ke(zn))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var hL=["canvas"],eh=class n{constructor(e){this.ngZone=e}canvasRef;gaiaService=pe(da);animationId=0;ngAfterViewInit(){this.gaiaService.init(this.canvasRef.nativeElement,window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.gaiaService.onResize(window.innerWidth,window.innerHeight)});let e=()=>{this.gaiaService.update(),this.animationId=requestAnimationFrame(e)};this.ngZone.runOutsideAngular(()=>{e()})}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.gaiaService.dispose()}static \u0275fac=function(t){return new(t||n)(dt(It))};static \u0275cmp=rt({type:n,selectors:[["app-viewport"]],viewQuery:function(t,i){if(t&1&&Qa(hL,7),t&2){let r;ec(r=tc())&&(i.canvasRef=r.first)}},decls:2,vars:0,consts:[["canvas",""]],template:function(t,i){t&1&&Vt(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;border-radius:0;transition:filter .3s ease}canvas[_ngcontent-%COMP%]:focus{outline:none}"],changeDetection:0})};var th;function pL(){if(th===void 0&&(th=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(th=n.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return th}function Yc(n){return pL()?.createHTML(n)||n}function AM(n){return Error(`Unable to find icon with the name "${n}"`)}function mL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function RM(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function NM(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var _r=class{url;svgText;options;svgElement;constructor(e,t,i){this.url=e,this.svgText=t,this.options=i}},OM=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,i,r,o){this._httpClient=t,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(t,i,r){return this.addSvgIconInNamespace("",t,i,r)}addSvgIconLiteral(t,i,r){return this.addSvgIconLiteralInNamespace("",t,i,r)}addSvgIconInNamespace(t,i,r,o){return this._addSvgIconConfig(t,i,new _r(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,i,r,o){let s=this._sanitizer.sanitize(wn.HTML,r);if(!s)throw NM(r);let a=Yc(s);return this._addSvgIconConfig(t,i,new _r("",a,o))}addSvgIconSet(t,i){return this.addSvgIconSetInNamespace("",t,i)}addSvgIconSetLiteral(t,i){return this.addSvgIconSetLiteralInNamespace("",t,i)}addSvgIconSetInNamespace(t,i,r){return this._addSvgIconSetConfig(t,new _r(i,null,r))}addSvgIconSetLiteralInNamespace(t,i,r){let o=this._sanitizer.sanitize(wn.HTML,i);if(!o)throw NM(i);let s=Yc(o);return this._addSvgIconSetConfig(t,new _r("",s,r))}registerFontClassAlias(t,i=t){return this._fontCssClassesByAlias.set(t,i),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let i=this._sanitizer.sanitize(wn.RESOURCE_URL,t);if(!i)throw RM(t);let r=this._cachedIconsByUrl.get(i);return r?Zi(nh(r)):this._loadSvgIconFromConfig(new _r(t,null)).pipe(va(o=>this._cachedIconsByUrl.set(i,o)),Ft(o=>nh(o)))}getNamedSvgIcon(t,i=""){let r=PM(i,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(t,s):zh(AM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Zi(nh(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ft(i=>nh(i)))}_getSvgFromIconSetConfigs(t,i){let r=this._extractIconWithNameFromAnySet(t,i);if(r)return Zi(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Il(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wn.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Zi(null)})));return jh(o).pipe(Ft(()=>{let s=this._extractIconWithNameFromAnySet(t,i);if(!s)throw AM(t);return s}))}_extractIconWithNameFromAnySet(t,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(va(i=>t.svgText=i),Ft(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Zi(null):this._fetchIcon(t).pipe(va(i=>t.svgText=i))}_extractSvgIconFromSet(t,i,r){let o=t.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Yc("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(t){let i=this._document.createElement("DIV");i.innerHTML=t;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){let i=this._svgElementFromString(Yc("<svg></svg>")),r=t.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(t.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(t,i){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),i&&i.viewBox&&t.setAttribute("viewBox",i.viewBox),t}_fetchIcon(t){let{url:i,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw mL();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(wn.RESOURCE_URL,i);if(!s)throw RM(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(Ft(l=>Yc(l)),Al(()=>this._inProgressUrlFetches.delete(s)),Xh());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(t,i,r){return this._svgIconConfigs.set(PM(t,i),r),this}_addSvgIconSetConfig(t,i){let r=this._iconSetConfigs.get(t);return r?r.push(i):this._iconSetConfigs.set(t,[i]),this}_svgElementFromConfig(t){if(!t.svgElement){let i=this._svgElementFromString(t.svgText);this._setSvgAttributes(i,t.options),t.svgElement=i}return t.svgElement}_getIconConfigFromResolvers(t,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,t);if(o)return gL(o)?new _r(o.url,null,o.options):new _r(o,null)}}static \u0275fac=function(i){return new(i||n)(ke(Jg,8),ke(Qg),ke(Wt,8),ke(En))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nh(n){return n.cloneNode(!0)}function PM(n,e){return n+":"+e}function gL(n){return!!(n.url&&n.options)}var vy;try{vy=typeof Intl<"u"&&Intl.v8BreakIterator}catch{vy=!1}var ih=(()=>{class n{_platformId=pe(Rr);isBrowser=this._platformId?Ib(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||vy)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xy(n){return Array.isArray(n)?n:[n]}var LM=new Set,Qo,_L=(()=>{class n{_platform=pe(ih);_nonce=pe(bs,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):vL}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&yL(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yL(n,e){if(!LM.has(n))try{Qo||(Qo=document.createElement("style"),e&&Qo.setAttribute("nonce",e),Qo.setAttribute("type","text/css"),document.head.appendChild(Qo)),Qo.sheet&&(Qo.sheet.insertRule(`@media ${n} {body{ }}`,0),LM.add(n))}catch(t){console.error(t)}}function vL(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var kM=(()=>{class n{_mediaMatcher=pe(_L);_zone=pe(It);_queries=new Map;_destroySubject=new ai;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return FM(xy(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=FM(xy(t)).map(s=>this._registerQuery(s).observable),o=Gh(r);return o=as(o.pipe(ya(1)),o.pipe(Yh(1),$h(0))),o.pipe(Ft(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new mt(s=>{let a=c=>this._zone.run(()=>s.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Zh(i),Ft(({matches:s})=>({query:t,matches:s})),Kh(this._destroySubject)),mql:i};return this._queries.set(t,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function FM(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var to=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(to||{}),UM="cdk-high-contrast-black-on-white",BM="cdk-high-contrast-white-on-black",by="cdk-high-contrast-active",Ey=(()=>{class n{_platform=pe(ih);_hasCheckedHighContrastMode;_document=pe(Wt);_breakpointSubscription;constructor(){this._breakpointSubscription=pe(kM).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return to.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return to.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return to.BLACK_ON_WHITE}return to.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(by,UM,BM),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===to.BLACK_ON_WHITE?t.add(by,UM):i===to.WHITE_ON_BLACK&&t.add(by,BM)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var My=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yn({type:n});static \u0275inj=On({})}return n})();var Sy=(()=>{class n{constructor(){pe(Ey)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yn({type:n});static \u0275inj=On({imports:[My,My]})}return n})();var xL=["*"],bL=new je("MAT_ICON_DEFAULT_OPTIONS"),EL=new je("mat-icon-location",{providedIn:"root",factory:ML});function ML(){let n=pe(Wt),e=n?n.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}var VM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],SL=VM.map(n=>`[${n}]`).join(", "),wL=/^url\(['"]?#(.*?)['"]?\)$/,rn=(()=>{class n{_elementRef=pe(nr);_iconRegistry=pe(OM);_location=pe(EL);_errorHandler=pe(En);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let i=this._cleanupFontValue(t);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let i=this._cleanupFontValue(t);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ot.EMPTY;constructor(){let t=pe(new qu("aria-hidden"),{optional:!0}),i=pe(bL,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let i=t.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,i=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=t.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),i.forEach(r=>t.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let i=t.querySelectorAll(SL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)VM.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(wL):null;if(l){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[i,r]=this._splitIconName(t);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ya(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=rt({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(hn("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Eg(r.color?"mat-"+r.color:""),Nr("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ag],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:xL,decls:1,vars:0,template:function(i,r){i&1&&(vg(),xg(0))},styles:[`mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}
`],encapsulation:2,changeDetection:0})}return n})(),on=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Yn({type:n});static \u0275inj=On({imports:[Sy,Sy]})}return n})();function TL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"sync"),ae())}function CL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"check"),ae())}function DL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"error_outline"),ae())}function IL(n,e){if(n&1&&(kn(0),ie(1,"div",8),Vt(2,"div",9),ie(3,"span",10),He(4),ae()(),Un()),n&2){let t=Qe().$implicit;De(2),Gu("width",t.progress,"%"),De(2),nc("",t.progress,"%")}}function AL(n,e){if(n&1){let t=Tn();ie(0,"div",2)(1,"div",3)(2,"span",4),Tt(3,TL,2,0,"mat-icon",5)(4,CL,2,0,"mat-icon",5)(5,DL,2,0,"mat-icon",5),ae(),ie(6,"span",6),He(7),ae(),ie(8,"button",7),At("click",function(){let r=ln(t).$implicit,o=Qe();return un(o.removeNotification(r.id))}),ie(9,"mat-icon"),He(10,"close"),ae()()(),Tt(11,IL,5,3,"ng-container",5),ae()}if(n&2){let t=e.$implicit;Nr("success",t.type==="success")("error",t.type==="error")("progress",t.type==="progress"),De(3),We("ngIf",t.type==="progress"),De(),We("ngIf",t.type==="success"),De(),We("ngIf",t.type==="error"),De(2),dn(t.message),De(4),We("ngIf",t.type==="progress"&&typeof t.progress=="number")}}var rh=class n{notificationService=pe(la);notifications$=this.notificationService.notifications$;constructor(){let e=()=>{let t=this.notificationService.show({type:"progress",message:"Demo: Generating layer, please wait...",progress:0}),i=this.notificationService.show({type:"success",message:"Demo: Layer generated successfully!",progress:100}),r=this.notificationService.show({type:"error",message:"Demo: An error occurred while generating the layer.",progress:0}),o=32,s=setInterval(()=>{o+=0,this.notificationService.update(t,{progress:o}),o<0&&(this.notificationService.update(t,{type:"success",message:"Demo: Layer generated successfully!",progress:void 0}),setTimeout(()=>this.notificationService.dismiss(t),2e3),clearInterval(s))},300)}}removeNotification(e){this.notificationService.dismiss(e)}trackById(e,t){return t.id}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-notification-container"]],decls:3,vars:4,consts:[[1,"notification-container-glass"],["class","notification-glass",3,"success","error","progress",4,"ngFor","ngForOf","ngForTrackBy"],[1,"notification-glass"],[1,"notif-row"],[1,"icon"],[4,"ngIf"],[1,"message"],["aria-label","Close notification",1,"close-btn",3,"click"],[1,"progress-bar-container"],[1,"progress-bar"],[1,"progress-label"]],template:function(t,i){t&1&&(ie(0,"div",0),Tt(1,AL,12,11,"div",1),Io(2,"async"),ae()),t&2&&(De(),We("ngForOf",Ao(2,2,i.notifications$))("ngForTrackBy",i.trackById))},dependencies:[tn,Bi,wi,Ro,on,rn],styles:[".notification-container-glass[_ngcontent-%COMP%]{position:fixed;bottom:var(--space-sm);right:var(--space-md);width:var(--notification-width, 340px);z-index:2000;display:flex;flex-direction:column;gap:var(--space-md);pointer-events:none;align-items:center}.notification-glass[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);border:var(--border);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);padding:var(--space-md) var(--space-xl);width:100%;max-width:380px;min-width:220px;min-height:48px;color:var(--color-text-main);font-family:var(--font-main);font-size:var(--font-size);pointer-events:auto;opacity:.98;transition:var(--transition);animation:_ngcontent-%COMP%_notif-fade-in .3s cubic-bezier(.4,0,.2,1);margin-bottom:var(--space-xs);box-sizing:border-box;position:relative;gap:var(--space-xs)}@keyframes _ngcontent-%COMP%_notif-fade-in{0%{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:.98;transform:none}}.notification-glass.success[_ngcontent-%COMP%]{color:var(--color-success)}.notification-glass.error[_ngcontent-%COMP%]{color:var(--color-error)}.notification-glass.progress[_ngcontent-%COMP%]{color:var(--color-accent)}.notif-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:100%;gap:var(--space-md)}.icon[_ngcontent-%COMP%]{min-width:var(--icon-size);min-height:var(--icon-size);display:flex;align-items:center;justify-content:center;margin-right:var(--space-xs)}.message[_ngcontent-%COMP%]{flex:1 1 auto;margin-right:var(--space-xs);white-space:normal;overflow-wrap:break-word;font-weight:400;font-size:var(--font-size);letter-spacing:.01em;color:var(--color-text-main);margin-bottom:0}.close-btn[_ngcontent-%COMP%]{background:none;border:none;outline:none;cursor:pointer;padding:.25rem;margin-left:.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background .15s;color:var(--color-text-main)}.close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.notification-glass.success[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-success)}.notification-glass.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-error)}.notification-glass.progress[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-accent);animation:_ngcontent-%COMP%_spin 1.2s linear infinite}.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1.2s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.progress-bar-container[_ngcontent-%COMP%]{width:100%;background:#a3b1c61a;border-radius:6px;height:7px;margin-top:.2rem;position:relative;overflow:hidden}.progress-bar[_ngcontent-%COMP%]{background:var(--color-accent);height:100%;border-radius:6px;transition:width .25s cubic-bezier(.4,0,.2,1)}.progress-label[_ngcontent-%COMP%]{position:absolute;right:8px;top:-18px;font-size:var(--font-size-secondary);color:var(--color-accent);font-weight:500;pointer-events:none;-webkit-user-select:none;user-select:none}@media (max-width: 600px){.notification-glass[_ngcontent-%COMP%]{max-width:98vw;min-width:0;padding:.9rem .7rem;font-size:.98rem}}"],changeDetection:0})};var RL=["panelRoot"];function NL(n,e){n&1&&(ie(0,"div",3)(1,"p"),He(2,"Configuration UI coming soon\u2026"),ae()())}function PL(n,e){n&1&&Vt(0,"hr",16)}function OL(n,e){if(n&1&&(ie(0,"h3"),He(1),ae()),n&2){let t=Qe().$implicit;De(),dn(t)}}function LL(n,e){if(n&1){let t=Tn();ie(0,"div",20)(1,"div",21)(2,"label"),He(3),ae(),ie(4,"span",22),He(5),ae()(),ie(6,"input",23),At("input",function(r){ln(t);let o=Qe().$implicit,s=Qe(4);return un(s.onParamInput(o,r))}),ae()()}if(n&2){let t=Qe().$implicit;hn("title",t.tooltip||null),De(2),hn("for",t.key),De(),dn(t.label),De(2),dn(t.value),De(),We("id",t.key)("min",t.min)("max",t.max)("step",t.step)("value",t.value)("disabled",t.disabled)}}function FL(n,e){if(n&1){let t=Tn();ie(0,"input",30),At("input",function(r){ln(t);let o=Qe(2).$implicit,s=Qe(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Qe(2).$implicit;We("id",t.key)("min",t.min)("max",t.max)("step",t.step)("value",t.value)("disabled",t.disabled)}}function kL(n,e){if(n&1){let t=Tn();ie(0,"input",31),At("input",function(r){ln(t);let o=Qe(2).$implicit,s=Qe(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Qe(2).$implicit;We("id",t.key)("value",t.value)("disabled",t.disabled)}}function UL(n,e){if(n&1){let t=Tn();ie(0,"span",22)(1,"label",32)(2,"input",33),At("change",function(r){ln(t);let o=Qe(2).$implicit,s=Qe(4);return un(s.onParamInput(o,r))}),ae(),Vt(3,"span",34),ae()()}if(n&2){let t=Qe(2).$implicit;De(2),We("id",t.key)("checked",t.value)("disabled",t.disabled),hn("aria-checked",t.value)}}function BL(n,e){if(n&1){let t=Tn();ie(0,"input",35),At("input",function(r){ln(t);let o=Qe(2).$implicit,s=Qe(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Qe(2).$implicit;We("id",t.key)("value",t.value)("disabled",t.disabled)}}function VL(n,e){if(n&1&&(ie(0,"span",22),He(1),ae()),n&2){let t=Qe(2).$implicit;De(),dn(t.value)}}function HL(n,e){if(n&1&&(ie(0,"div",24)(1,"label"),He(2),ae(),kn(3,17),Tt(4,FL,1,6,"input",25)(5,kL,1,3,"input",26)(6,UL,4,4,"span",27)(7,BL,1,3,"input",28)(8,VL,2,1,"span",29),Un(),ae()),n&2){let t=Qe().$implicit;hn("title",t.tooltip||null),De(),hn("for",t.key),De(),dn(t.label),De(),We("ngSwitch",t.type),De(),We("ngSwitchCase","number"),De(),We("ngSwitchCase","color"),De(),We("ngSwitchCase","checkbox"),De(),We("ngSwitchCase","text")}}function zL(n,e){if(n&1&&(kn(0)(1,17),Tt(2,LL,7,10,"div",18)(3,HL,9,8,"div",19),Un()()),n&2){let t=e.$implicit;De(),We("ngSwitch",t.type),De(),We("ngSwitchCase","slider")}}function GL(n,e){if(n&1&&(kn(0),Tt(1,PL,1,0,"hr",13),ie(2,"div",14),Tt(3,OL,2,1,"h3",15)(4,zL,4,2,"ng-container",12),ae(),Un()),n&2){let t=e.$implicit,i=e.index,r=Qe(2).ngIf,o=Qe();De(),We("ngIf",i>0),De(2),We("ngIf",t),De(),We("ngForOf",o.getParamsForSection(r.params,t))}}function jL(n,e){if(n&1&&(ie(0,"div",11),Tt(1,GL,5,3,"ng-container",12),ae()),n&2){let t=Qe().ngIf,i=Qe();De(),We("ngForOf",i.getSections(t.params))}}function WL(n,e){if(n&1){let t=Tn();ie(0,"div",4,1)(2,"div",5)(3,"span",6),He(4),ae(),ie(5,"button",7),At("click",function(){ln(t);let r=Qe();return un(r.closePanel())}),ie(6,"mat-icon"),He(7,"close"),ae()()(),Tt(8,jL,2,1,"div",8),ie(9,"div",9)(10,"button",10),At("click",function(){ln(t);let r=Qe();return un(r.onGenerate())}),He(11," Generate "),ae()()()}if(n&2){let t=e.ngIf,i=Qe(),r=bg(1);hn("aria-labelledby",i.layerTitleId),De(3),We("id",i.layerTitleId),De(),dn(t.layerName?t.layerName+" configuration":"Layer configuration"),De(4),We("ngIf",t.params&&t.params.length)("ngIfElse",r)}}var oh=class n{constructor(e){this.layerManager=e;this.layerConfig$=this.layerManager.selectedLayer$.pipe(Ft(t=>{if(this.selectedLayerKey=t,!t)return{layerName:null,params:[]};let i=this.layerManager.getLayerConfigParams(t)??[];return{layerName:t.charAt(0).toUpperCase()+t.slice(1),params:i}}))}layerConfig$;selectedLayerKey=null;panelRoot;layerTitleId="layer-config-title";ngAfterViewInit(){this.panelRoot&&this.panelRoot.nativeElement&&setTimeout(()=>this.panelRoot.nativeElement.focus(),0)}getSections(e){return Array.from(new Set(e.map(t=>t.section)))}getParamsForSection(e,t){return e.filter(i=>i.section===t)}closePanel(){this.layerManager.setSelectedLayer(null)}onGenerate(){this.selectedLayerKey&&this.layerManager.queueLayerGeneration(this.selectedLayerKey)}onParamInput(e,t){let i;console.log("Checkbox input detected",e),e.type==="checkbox"?i=t.target.checked:(i=t.target.value,(e.type==="number"||e.type==="slider")&&(i=i===""?null:Number(i))),this.selectedLayerKey&&this.layerManager.updateLayerConfigParam(this.selectedLayerKey,e.key,i)}static \u0275fac=function(t){return new(t||n)(dt(zn))};static \u0275cmp=rt({type:n,selectors:[["app-layer-config-panel"]],viewQuery:function(t,i){if(t&1&&Qa(RL,5),t&2){let r;ec(r=tc())&&(i.panelRoot=r.first)}},decls:4,vars:3,consts:[["placeholder",""],["panelRoot",""],["class","layer-config-panel","role","dialog","aria-modal","true","tabindex","-1",4,"ngIf"],[1,"placeholder"],["role","dialog","aria-modal","true","tabindex","-1",1,"layer-config-panel"],[1,"layer-config-header"],[1,"layer-config-title",3,"id"],["type","button","aria-label","Close configuration panel",1,"close-btn",3,"click"],["class","layer-config-body",4,"ngIf","ngIfElse"],[1,"layer-config-footer"],["type","button","aria-label","Generate with current configuration",1,"generate-btn",3,"click"],[1,"layer-config-body"],[4,"ngFor","ngForOf"],["class","config-section-separator",4,"ngIf"],[1,"config-section"],[4,"ngIf"],[1,"config-section-separator"],[3,"ngSwitch"],["class","config-row--slider",4,"ngSwitchCase"],["class","config-row",4,"ngSwitchDefault"],[1,"config-row--slider"],[1,"config-row-slider-header"],[1,"config-row-value"],["type","range",3,"input","id","min","max","step","value","disabled"],[1,"config-row"],["type","number","class","config-row-value",3,"id","min","max","step","value","disabled","input",4,"ngSwitchCase"],["type","color","class","config-row-value",3,"id","value","disabled","input",4,"ngSwitchCase"],["class","config-row-value",4,"ngSwitchCase"],["type","text","class","config-row-value",3,"id","value","disabled","input",4,"ngSwitchCase"],["class","config-row-value",4,"ngSwitchDefault"],["type","number",1,"config-row-value",3,"input","id","min","max","step","value","disabled"],["type","color",1,"config-row-value",3,"input","id","value","disabled"],[1,"switch","switch-label"],["type","checkbox","role","switch",3,"change","id","checked","disabled"],[1,"slider"],["type","text",1,"config-row-value",3,"input","id","value","disabled"]],template:function(t,i){t&1&&(Tt(0,NL,3,0,"ng-template",null,0,Mg)(2,WL,12,5,"div",2),Io(3,"async")),t&2&&(De(2),We("ngIf",Ao(3,1,i.layerConfig$)))},dependencies:[tn,Bi,wi,sc,Og,Lg,Ro,on,rn],styles:['.layer-config-panel[_ngcontent-%COMP%]{position:fixed;top:calc(var(--nav-bar-height) + var(--space-sm));left:var(--space-sm);width:var(--config-width);height:calc(100vh - var(--nav-bar-height) - 2 * var(--space-sm));background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);border:var(--border);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);z-index:var(--nav-bar-z-index);display:flex;flex-direction:column;color:var(--color-text-main);font-family:var(--font-main);font-size:var(--font-size);overflow:hidden;transition:opacity .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1);opacity:1}.layer-config-header[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between;padding:var(--space-lg) var(--space-lg) var(--space-md) var(--space-lg);border-bottom:1px solid var(--color-border);background:transparent;font-size:var(--font-size-heading);font-weight:600;letter-spacing:.01em;color:var(--color-text-main)}.layer-config-header[_ngcontent-%COMP%]   .layer-config-title[_ngcontent-%COMP%]{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--font-main);font-size:var(--font-size-heading);font-weight:600;color:var(--color-text-main)}.layer-config-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:var(--btn-bg);border:none;border-radius:50%;width:var(--btn-size);height:var(--btn-size);display:flex;align-items:center;justify-content:center;color:var(--color-text-main);cursor:pointer;transition:background .18s,box-shadow .18s,transform .18s;outline:none}.layer-config-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.layer-config-footer[_ngcontent-%COMP%]{padding:var(--space-md) var(--space-lg) var(--space-lg) var(--space-lg);border-top:1px solid var(--color-border);background:transparent;display:flex;justify-content:flex-end;align-items:center}.generate-btn[_ngcontent-%COMP%]{width:100%;font-family:var(--font-main);font-size:var(--font-size);padding:var(--space-xs) var(--space-md);border-radius:var(--radius);border:var(--border);background:var(--color-accent);color:var(--color-text-main);box-shadow:var(--shadow);cursor:pointer;outline:none;transition:background var(--transition),color var(--transition),box-shadow var(--transition),filter var(--transition),transform var(--transition);min-width:0;min-height:2rem;font-weight:500;letter-spacing:.01em;display:flex;align-items:center;justify-content:center;gap:var(--space-xs);-webkit-user-select:none;user-select:none;will-change:filter,box-shadow,background,color,transform;box-shadow:0 1px 4px #0000001a,var(--shadow)}.generate-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px;z-index:1}.generate-btn[_ngcontent-%COMP%]:hover, .generate-btn[_ngcontent-%COMP%]:focus-visible{background:var(--color-accent-hover);color:#fff}.layer-config-body[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:var(--space-lg) var(--space-lg) var(--space-md) var(--space-lg);display:flex;flex-direction:column;gap:var(--space-lg);scrollbar-width:thin;scrollbar-color:rgba(163,177,198,.1) transparent}.layer-config-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.layer-config-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--color-accent);border-radius:8px}.layer-config_body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--color-card);border-radius:8px}.config-row[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{background:var(--color-card);color:var(--color-text-main);border:1px solid var(--color-border);padding:var(--space-xs) var(--space-md);border-radius:var(--radius);font-family:var(--font-main);font-size:var(--font-size);font-weight:400;outline:none;transition:border-color .15s,box-shadow .15s;box-shadow:none;min-width:0;width:100%}.config-row[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{flex:1 1 auto}.config-row[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{padding:0;width:2.2rem;height:2.2rem;cursor:pointer;background:none;box-shadow:0 1px 4px #0000001a}.config-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-section-separator[_ngcontent-%COMP%]{border:none;border-top:1px solid var(--color-border);margin:1.5rem 0;opacity:.7}.config-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;padding:.25rem .5rem;border-radius:6px;transition:background .15s,box-shadow .15s}.config-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:120px;color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400;flex:1 1 0}.switch-label[_ngcontent-%COMP%]{min-width:unset!important;color:var(--color-text-main)!important;font-size:1rem!important;font-weight:500!important;flex:unset!important}.config-row-value[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--color-text-main);font-size:1rem;font-weight:500;text-align:right;min-width:48px;margin-left:1rem}.config-row--slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;gap:.25rem;margin-bottom:1.25rem;padding:.25rem .5rem;border-radius:6px;transition:background .15s,box-shadow .15s}.config-row--slider[_ngcontent-%COMP%]   .config-row-slider-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.25rem}.config-row--slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:120px;flex:1 1 0;color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400}.config-row--slider[_ngcontent-%COMP%]   .config-row-value[_ngcontent-%COMP%]{min-width:48px;margin-left:1rem}.config-row--slider[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]{width:100%;margin:0;height:4px;background:var(--color-scrollbar);border-radius:2px;outline:none}.layer-config-panel[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{color:var(--color-text-secondary);font-style:italic;opacity:.8;padding:var(--space-xl) 0;text-align:center}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2.2rem;height:1.2rem;margin-left:.25rem;vertical-align:middle}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:30px;opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background:var(--color-card);border-radius:1.2rem;box-shadow:0 1px 4px #0000001a;transition:background .18s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background:var(--color-accent)}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:1rem;width:1rem;left:.15rem;bottom:.1rem;background:var(--color-text-main);border-radius:50%;transition:transform .18s;box-shadow:0 1px 4px #0000001a}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(1rem)}']})};var sh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-logo"]],decls:4,vars:2,consts:[["viewBox","0 0 32 32","fill","none","xmlns","http://www.w3.org/2000/svg",1,"gaia-logo-svg",2,"width","var(--btn-size)","height","var(--btn-size)"],["cx","22","cy","10","r","2.2","fill","var(--color-text-main)"],["d","M6 23 L13 13 L20 23","stroke","var(--color-text-main)","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round"],["d","M15 23 L17.5 18 L19 20.5 L21 17 L25 23","stroke","var(--color-text-main)","stroke-width","1.5","fill","none","stroke-linecap","round","stroke-linejoin","round"]],template:function(t,i){t&1&&(su(),ie(0,"svg",0),Vt(1,"circle",1)(2,"path",2)(3,"path",3),ae()),t&2&&hn("width",null)("height",null)},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}.gaia-logo-svg[_ngcontent-%COMP%]{width:var(--btn-size);height:var(--btn-size);display:block}.gaia-logo-svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   ellipse[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{transition:fill .18s,stroke .18s}"]})};function $L(n,e){n&1&&Ss(0)}function qL(n,e){if(n&1&&(kn(0),Tt(1,$L,1,0,"ng-container",6),Un()),n&2){let t=Qe().$implicit;De(),We("ngComponentOutlet",t.icon)}}function XL(n,e){if(n&1){let t=Tn();kn(0),ie(1,"button",2),At("click",function(){let r=ln(t).$implicit,o=Qe();return un(o.toggleLayer(r))}),ie(2,"span",3),Tt(3,qL,2,1,"ng-container",4),ae(),ie(4,"span",5),He(5),ae()(),Un()}if(n&2){let t=e.$implicit,i=Qe();De(),Nr("active",t.active)("selected",i.selectedLayer===t.key),hn("aria-label",t.label),De(2),We("ngIf",t.icon),De(2),dn(t.label)}}var ah=class n{constructor(e){this.layerManager=e}sections=[];selectedLayer=null;sub=new Ot;ngOnInit(){let e=this.layerManager.getLayers();this.sections=e.map(t=>{let i=t.charAt(0).toUpperCase()+t.slice(1);return{key:t,label:i,icon:this.layerManager.getIcon(t),active:this.layerManager.getLayerState(t).active}}),this.sub.add(this.layerManager.getLayerStates().subscribe(t=>{for(let i of this.sections)i.active=t[i.key]?.active??!1})),this.sub.add(this.layerManager.selectedLayer$.subscribe(t=>{this.selectedLayer=t}))}ngOnDestroy(){this.sub.unsubscribe()}toggleLayer(e){this.selectedLayer===e.key?this.layerManager.setSelectedLayer(null):this.layerManager.setSelectedLayer(e.key)}static \u0275fac=function(t){return new(t||n)(dt(zn))};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-layer-buttons"]],decls:2,vars:1,consts:[[1,"nav-bar-layer-buttons"],[4,"ngFor","ngForOf"],[1,"layer-btn",3,"click"],[1,"icon"],[4,"ngIf"],[1,"label"],[4,"ngComponentOutlet"]],template:function(t,i){t&1&&(ie(0,"div",0),Tt(1,XL,6,7,"ng-container",1),ae()),t&2&&(De(),We("ngForOf",i.sections))},dependencies:[tn,oc,Bi,wi],styles:[".nav-bar-layer-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5em}.layer-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5em;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em 1em;border-radius:var(--button-radius, 8px);cursor:pointer;transition:background .15s,color .15s}.layer-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.2em}.layer-btn[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1em;font-weight:500}.layer-btn.selected[_ngcontent-%COMP%]{background:var(--color-accent, #005BEA);color:var(--color-bg, #fff)}.layer-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #003e99);color:var(--color-bg, #fff)}"]})};var ch=class n{generateAll=new Fn;reset=new Fn;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-actions"]],outputs:{generateAll:"generateAll",reset:"reset"},decls:11,vars:0,consts:[[1,"nav-bar-actions"],["mat-icon-button","","aria-label","Generate all",1,"action-btn","action-btn-generate-all",3,"click"],[1,"label"],["mat-icon-button","","aria-label","Reset",1,"action-btn","action-btn-reset",3,"click"]],template:function(t,i){t&1&&(ie(0,"div",0)(1,"button",1),At("click",function(){return i.generateAll.emit()}),ie(2,"mat-icon"),He(3,"bolt"),ae(),ie(4,"span",2),He(5,"Generate All"),ae()(),ie(6,"button",3),At("click",function(){return i.reset.emit()}),ie(7,"mat-icon"),He(8,"refresh"),ae(),ie(9,"span",2),He(10,"Reset"),ae()()())},dependencies:[tn,on,rn],styles:[".nav-bar-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5em}.action-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5em;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em 1em;border-radius:var(--button-radius, 8px);cursor:pointer;transition:background .15s,color .15s}.action-btn-generate-all[_ngcontent-%COMP%]{background:var(--color-accent)}.action-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}.action-btn-reset[_ngcontent-%COMP%]:hover{background:var(--color-error-hover, #2ecc40);color:var(--color-bg, #fff)}.action-btn[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1em;font-weight:500}"]})};var lh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-options"]],decls:3,vars:0,consts:[["mat-icon-button","","aria-label","Options",1,"option-btn"]],template:function(t,i){t&1&&(ie(0,"button",0)(1,"mat-icon"),He(2,"settings"),ae()())},dependencies:[tn,on,rn],styles:[".option-btn[_ngcontent-%COMP%]{display:flex;align-items:center;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em;border-radius:50%;cursor:pointer;transition:background .15s,color .15s}.option-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}"]})};var uh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-help"]],decls:3,vars:0,consts:[["mat-icon-button","","href","https://github.com/Daendrah/GaiaTweak","target","_blank","rel","noopener","aria-label","Help (GitHub)",1,"help-btn"]],template:function(t,i){t&1&&(ie(0,"a",0)(1,"mat-icon"),He(2,"help_outline"),ae()())},dependencies:[tn,on,rn],styles:[".help-btn[_ngcontent-%COMP%]{display:flex;align-items:center;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em;border-radius:50%;cursor:pointer;transition:background .15s,color .15s;text-decoration:none}.help-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}"]})};var dh=class n{constructor(e){this.cdr=e}gaiaService=pe(da);sub=Ot.EMPTY;framerate=0;ngOnInit(){this.sub=this.gaiaService.getFramerate().subscribe(e=>{this.framerate=e,this.cdr.markForCheck()})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(t){return new(t||n)(dt(Yu))};static \u0275cmp=rt({type:n,selectors:[["app-fps-indicator"]],decls:5,vars:1,consts:[["title","Current framerate","aria-label","Framerate",1,"fps-indicator"],[1,"fps-label"],[1,"fps-value"]],template:function(t,i){t&1&&(ie(0,"div",0)(1,"span",1),He(2,"FPS:"),ae(),ie(3,"span",2),He(4),ae()()),t&2&&(De(4),dn(i.framerate))},styles:[".fps-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-xs);font-family:var(--font-main);font-size:var(--font-size-secondary);color:var(--color-text-main);background:none;border-radius:var(--radius);padding:var(--space-xs) var(--space-md);min-height:2rem;font-weight:500;letter-spacing:.01em;-webkit-user-select:none;user-select:none;box-sizing:border-box;width:100%;transition:color var(--transition),background var(--transition)}.fps-label[_ngcontent-%COMP%]{color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400;letter-spacing:.02em}.fps-value[_ngcontent-%COMP%]{color:var(--color-success);font-size:1em;font-weight:600;letter-spacing:.01em;min-width:2.5ch;text-align:right}"],changeDetection:0})};function YL(n,e){n&1&&Ss(0)}function ZL(n,e){if(n&1&&(kn(0),Tt(1,YL,1,0,"ng-container",13),Un()),n&2){let t=Qe().$implicit;De(),We("ngComponentOutlet",t.icon)}}function KL(n,e){if(n&1){let t=Tn();ie(0,"div",6)(1,"span",7),Tt(2,ZL,2,1,"ng-container",8),ae(),ie(3,"span",9),He(4),ae(),ie(5,"label",10)(6,"input",11),At("change",function(){let r=ln(t).$implicit,o=Qe(2);return un(o.toggleLayer(r))}),ae(),Vt(7,"span",12),ae()()}if(n&2){let t=e.$implicit;De(2),We("ngIf",t.icon),De(2),dn(t.label),De(2),We("checked",t.active)}}function JL(n,e){if(n&1){let t=Tn();ie(0,"div",1)(1,"div",2)(2,"span"),He(3,"Layer Visibility"),ae(),ie(4,"button",3),At("click",function(){ln(t);let r=Qe();return un(r.close.emit())}),ie(5,"mat-icon"),He(6,"close"),ae()()(),ie(7,"div",4),Tt(8,KL,8,3,"div",5),ae()()}if(n&2){let t=Qe();De(8),We("ngForOf",t.sections)}}var fh=class n{constructor(e){this.layerManager=e}open=!1;close=new Fn;sections=[];ngOnInit(){let e=this.layerManager.getLayers();this.sections=e.map(t=>{let i=t.charAt(0).toUpperCase()+t.slice(1);return{key:t,label:i,icon:this.layerManager.getIcon(t),active:this.layerManager.getLayerState(t).active}}),this.layerManager.getLayerStates().subscribe(t=>{for(let i of this.sections)i.active=t[i.key]?.active??!1})}toggleLayer(e){e.active?this.layerManager.resetLayer(e.key):this.layerManager.queueLayerGeneration(e.key)}static \u0275fac=function(t){return new(t||n)(dt(zn))};static \u0275cmp=rt({type:n,selectors:[["app-layer-toggle-panel"]],inputs:{open:"open"},outputs:{close:"close"},decls:1,vars:1,consts:[["class","layer-toggle-panel",4,"ngIf"],[1,"layer-toggle-panel"],[1,"panel-header"],["aria-label","Close panel",1,"close-btn",3,"click"],[1,"panel-body"],["class","layer-row",4,"ngFor","ngForOf"],[1,"layer-row"],[1,"icon"],[4,"ngIf"],[1,"label"],[1,"switch"],["type","checkbox","aria-label","Toggle layer",3,"change","checked"],[1,"slider"],[4,"ngComponentOutlet"]],template:function(t,i){t&1&&Tt(0,JL,9,1,"div",0),t&2&&We("ngIf",i.open)},dependencies:[tn,oc,Bi,wi,on,rn],styles:['.layer-toggle-panel[_ngcontent-%COMP%]{position:fixed;top:var(--nav-bar-height, 64px);right:var(--space-sm);min-width:260px;background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);z-index:var(--nav-bar-z-index, 1100);padding:var(--space-md);margin-top:var(--space-sm);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);color:var(--color-text-main)}.panel-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:1.1em;font-weight:600;margin-bottom:var(--space-md)}.close-btn[_ngcontent-%COMP%]{background:var(--btn-bg);border:none;border-radius:50%;width:var(--btn-size);height:var(--btn-size);display:flex;align-items:center;justify-content:center;color:var(--color-text-main);cursor:pointer;transition:background .18s,box-shadow .18s,transform .18s;outline:none}.close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.panel-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-md)}.layer-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md);padding:.3em 0}.layer-row[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.3em}.layer-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:1;font-size:1em}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:38px;height:22px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#444;border-radius:22px;transition:.2s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover + .slider[_ngcontent-%COMP%]{background-color:var(--color-accent-hover, #2ecc40)}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:var(--color-accent, #2ecc40)}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;left:3px;bottom:3px;background-color:#fff;border-radius:50%;transition:.2s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(16px)}']})};var hh=class n{constructor(e){this.layerManager=e}togglePanelOpen=!1;onOptionsClick(){this.togglePanelOpen=!this.togglePanelOpen}onGenerateAll(){this.layerManager.generateAllLayers()}onReset(){this.layerManager.resetAllLayers()}closeTogglePanel(){this.togglePanelOpen=!1}static \u0275fac=function(t){return new(t||n)(dt(zn))};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar"]],decls:13,vars:1,consts:[["aria-label","Top menu bar",1,"nav-bar"],[1,"nav-bar-left"],[1,"nav-bar-logo"],[1,"nav-bar-title"],[1,"nav-bar-separator"],[1,"nav-bar-actions"],[3,"generateAll","reset"],[3,"click"],[3,"close","open"]],template:function(t,i){t&1&&(ie(0,"nav",0)(1,"div",1),Vt(2,"app-logo",2),ie(3,"span",3),He(4,"Gaia Tweak"),ae(),Vt(5,"span",4)(6,"app-nav-bar-layer-buttons"),ae(),ie(7,"div",5)(8,"app-nav-bar-actions",6),At("generateAll",function(){return i.onGenerateAll()})("reset",function(){return i.onReset()}),ae(),ie(9,"app-nav-bar-options",7),At("click",function(){return i.onOptionsClick()}),ae(),Vt(10,"app-nav-bar-help")(11,"app-fps-indicator"),ae()(),ie(12,"app-layer-toggle-panel",8),At("close",function(){return i.closeTogglePanel()}),ae()),t&2&&(De(12),We("open",i.togglePanelOpen))},dependencies:[sh,ah,ch,lh,uh,dh,fh],styles:[".nav-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100vw;height:var(--nav-bar-height, 64px);background:var(--nav-bar-bg);box-shadow:var(--nav-bar-shadow);border-radius:0 0 var(--nav-bar-radius) var(--nav-bar-radius);margin:0 auto;padding:var(--nav-bar-padding);position:fixed;top:0;left:0;z-index:var(--nav-bar\\e8-z-index, 1100);backdrop-filter:var(--nav-bar-blur);-webkit-backdrop-filter:var(--blur)}.nav-bar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md)}.nav-bar-title[_ngcontent-%COMP%]{font-family:var(--font-main);font-size:var(--font-size-heading);font-weight:600;color:var(--color-text-main);letter-spacing:.01em}.nav-bar-separator[_ngcontent-%COMP%]{display:inline-block;width:1px;height:32px;background:var(--color-border, #444);margin:0 var(--space-md);border-radius:1px}.nav-bar-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md)}.nav-bar-logo[_ngcontent-%COMP%]{height:40px;width:40px}"]})};function QL(n,e){n&1&&Vt(0,"app-layer-config-panel")}var ph=class n{selectedLayer$;constructor(e){this.selectedLayer$=e.selectedLayer$}static \u0275fac=function(t){return new(t||n)(dt(zn))};static \u0275cmp=rt({type:n,selectors:[["app-root"]],decls:7,vars:3,consts:[[1,"app-container"],[1,"main-content"],[1,"viewport"],[4,"ngIf"]],template:function(t,i){t&1&&(ie(0,"div",0),Vt(1,"app-nav-bar"),ie(2,"div",1),Vt(3,"app-viewport",2),ae(),Vt(4,"app-notification-container"),Tt(5,QL,1,0,"app-layer-config-panel",3),Io(6,"async"),ae()),t&2&&(De(5),We("ngIf",Ao(6,1,i.selectedLayer$)))},dependencies:[tn,wi,Ro,eh,rh,oh,hh],styles:[".app-container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;background:var(--bg-primary);color:var(--text-primary);position:relative}.main-content[_ngcontent-%COMP%]{flex:1;position:relative;height:100vh;overflow:hidden;background:var(--bg-primary);transition:margin-left .3s cubic-bezier(.4,0,.2,1)}.viewport[_ngcontent-%COMP%]{width:100%;height:100%}"]})};function ze(n,e){let t=n.find(i=>i.key===e);return t?t.value:void 0}var HM=`
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,zM=`
uniform int u_face_index;
uniform float u_seed;

// Base color
uniform vec3 u_base_color;

// Background uniforms
uniform bool u_background_enabled;
uniform vec3 u_background_noise_color;
uniform float u_background_noise_scale;
uniform int u_background_noise_octave;

// Stars uniforms
uniform bool u_stars_enabled;
uniform float u_stars_density;
uniform float u_stars_min_size;
uniform float u_stars_max_size;
uniform float u_stars_brightness;
uniform vec3 u_stars_color_1;
uniform vec3 u_stars_color_2;
uniform float u_stars_foreground_density_multiplier;
uniform float u_stars_foreground_size_multiplier;
uniform float u_stars_foreground_brightness_multiplier;

// Nebula color uniforms
uniform bool u_nebula_enabled;
uniform vec3 u_nebula_outer_color;
uniform vec3 u_nebula_inner_color;
uniform vec3 u_nebula_core_color;
uniform float u_nebula_noise_scale;
uniform int u_nebula_noise_octave;

// Nebula lighting uniforms
uniform vec3 u_nebula_light_color;
uniform float u_nebula_core_radius;
uniform float u_nebula_core_intensity;
uniform int u_nebula_raymarch_steps;
uniform float u_nebula_absorption;
uniform float u_nebula_scattering;

varying vec2 v_uv;

// Precomputed constants
const float MIN_TRANSMITTANCE = .005;
const vec3 TRANSMITTANCE_WEIGHTS = vec3(.333);
const float GLOW_THRESHOLD = .7;

// Get cube direction from face index and UV
vec3 getCubeDirection(int faceIndex, vec2 uv) {
  vec2 coords = uv * 2. - 1.;

  if (faceIndex == 0) return normalize(vec3(1., -coords.y, -coords.x));
  if (faceIndex == 1) return normalize(vec3(-1., -coords.y, coords.x));
  if (faceIndex == 2) return normalize(vec3(coords.x, 1., coords.y));
  if (faceIndex == 3) return normalize(vec3(coords.x, -1., -coords.y));
  if (faceIndex == 4) return normalize(vec3(coords.x, -coords.y, 1.));
  if (faceIndex == 5) return normalize(vec3(-coords.x, -coords.y, -1.));

  return vec3(0., 0., 1.);
}

// Optimized seeded random
float seeded_random(vec2 seed) {
  return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
}

float hash(float p) {
  p = fract(p * .011);
  p *= p + 7.5;
  p *= p + p;
  return fract(p);
}

float hash(vec3 p) {
  p = fract(p * .3183099 + .1) * 17.;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  const vec3 step = vec3(110, 241, 171);

  vec3 i = floor(x);
  vec3 f = fract(x);

  float n = dot(i, step);
  vec3 u = f * f * (3. - 2. * f);

  return mix(
    mix(
      mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
      mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
    mix(
      mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
      mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}

// Optimized fractal noise with early exit
float fractal_noise(const vec3 p, const float scale, const int octaves) {
  float total = 0.;
  float frequency = scale;
  float amplitude = 1.;
  float max_value = 0.;

  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;

    total += noise(p * frequency) * amplitude;
    max_value += amplitude;
    amplitude *= .5;
    frequency *= 2.;
  }

  return total / max_value;
}

// Optimized Voronoi with reduced search
vec3 voronoi_3d(vec3 position, float density) {
  vec3 cell = floor(position / density);

  float min_dist = 8.;
  vec3 star_id = vec3(0.);

  // Recherche 2x2x2 au lieu de 3x3x3 pour les petites \xE9toiles
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      for (int z = -1; z <= 1; z++) {
        vec3 neighbor = cell + vec3(x, y, z);
        vec3 point = vec3(
          seeded_random(neighbor.xy + neighbor.z * 127.1),
          seeded_random(neighbor.xy + neighbor.z * 311.7),
          seeded_random(neighbor.xy + neighbor.z * 74.7)
        ) * density;

        vec3 diff = (neighbor * density + point) - position;
        float dist = dot(diff, diff);

        if (dist < min_dist) {
          min_dist = dist;
          star_id = neighbor;
        }
      }
    }
  }

  return vec3(sqrt(min_dist),
    hash(star_id.x + star_id.y * 127.1 + star_id.z * 311.7),
    hash(star_id.x * 74.7 + star_id.y + star_id.z * 127.1));
}

vec4 generate_background(vec3 position) {
  vec3 random_seed = vec3(seeded_random(vec2(u_seed * 0.2)), seeded_random(vec2(u_seed * 0.3)), 0.0);
  float density = fractal_noise(position + random_seed, u_background_noise_scale, u_background_noise_octave);
  return vec4(u_background_noise_color, density);
}

// Optimized star generation with fewer branches
vec4 generate_stars(vec3 position, float density, float min_size, float max_size, float brightness, vec3 color1, vec3 color2) {
  vec3 voronoi_data = voronoi_3d(position, density);

  float dist_to_star = voronoi_data.x;
  float star_random1 = voronoi_data.y;
  float star_random2 = voronoi_data.z;

  // Precomputations
  float star_size = mix(min_size, max_size, star_random1);
  float star_radius = star_size * .5;
  float glow_radius = star_size * 2.;
  float glow_threshold = (min_size + max_size) * GLOW_THRESHOLD;

  // Calcul d'intensit\xE9 unifi\xE9 avec step functions
  float core_mask = step(dist_to_star, star_radius);
  float edge_mask = step(dist_to_star, star_size) * (1. - core_mask);
  float glow_mask = step(dist_to_star, glow_radius) * step(glow_threshold, star_size) * (1. - step(dist_to_star, star_size));

  // Intensit\xE9 bas\xE9e sur les masques
  float edge_factor = (dist_to_star - star_radius) / star_radius;
  float glow_factor = (dist_to_star - star_size) / (glow_radius - star_size);

  float intensity = core_mask +
    edge_mask * (1. - smoothstep(0., 1., edge_factor)) +
    glow_mask * (1. - smoothstep(0., 1., glow_factor)) * .3;

  // Effets additionnels group\xE9s
  float temperature_variation = .8 + .4 * star_random1;
  float twinkle = .9 + .1 * sin(star_random1 * 100. + position.x + position.y);

  intensity *= brightness * temperature_variation * twinkle;

  vec3 star_color = mix(color1, color2, star_random2);

  return vec4(star_color, clamp(intensity, 0., 1.));
}

// Optimized nebula density with fewer octaves
float get_nebula_density(vec3 position) {
  vec3 random_seed = vec3(seeded_random(vec2(u_seed * 0.2)), seeded_random(vec2(u_seed * 0.3)), 0.0);
  float fbm = fractal_noise(position + random_seed, u_nebula_noise_scale, u_nebula_noise_octave);
  fbm = fractal_noise(position + fbm, u_nebula_noise_scale, u_nebula_noise_octave);

  return 2. * fbm - 0.95;
}

vec4 generate_nebula(vec3 position) {
  // Precomputations
  vec3 light_dir = normalize(position);
  vec3 light_color = u_nebula_light_color;
  float core_radius = u_nebula_core_radius;
  vec3 core_color = u_nebula_core_color;
  float core_intensity = u_nebula_core_intensity;

  vec3 ray_origin = 10. * position / 16.;
  vec3 ray_direction = normalize(position - ray_origin);
  float ray_length = length(position - ray_origin);

  int steps = u_nebula_raymarch_steps;
  float inv_steps = 1. / float(steps);
  vec3 ray_step = ray_direction * (ray_length * inv_steps);
  float ray_step_length = ray_length * inv_steps;

  vec3 ray_pos = ray_origin;
  vec3 transmittance = vec3(1.);
  vec3 accumulated_light = vec3(0.);

  // Precompute phase function
  float cos_theta = dot(ray_direction, light_dir);
  float phase_fn = .5 + .5 * cos_theta;

  // Ultra-optimized raymarching
  for (int i = 0; i < 20; i++) {
    if (i >= steps) break;

    ray_pos += ray_step;

    float density = max(0., get_nebula_density(ray_pos));

    // Simplified core glow
    float dist_to_core = 1. - density;
    float core_glow = core_radius / max(dist_to_core, .001);
    core_glow = core_glow * core_intensity;

    float shadow = 1.;
    vec3 shadow_pos = ray_pos + light_dir * ray_step_length;
    for (int j = 0; j < 5; j++) {
      float shadow_density = max(0., get_nebula_density(shadow_pos));
      shadow *= exp(-shadow_density * u_nebula_absorption * ray_step_length);
      shadow_pos += light_dir * ray_step_length;
      if (shadow < .01) {
        shadow = .01;
        break;
      }
    }

    // Simplified nebula colors (removed extra noise)
    vec3 nebula_color = u_nebula_outer_color;
    nebula_color = mix(nebula_color, u_nebula_inner_color, density * 2.5);
    nebula_color = mix(nebula_color, core_color, min(1., core_glow * density));

    density *= (1. + core_glow * .5); // R\xE9duction de l'influence du core glow

    // Simplified volume rendering
    float absorption_factor = u_nebula_absorption * ray_step_length;
    vec3 absorption = exp(-nebula_color * absorption_factor);
    vec3 scattering = nebula_color * u_nebula_scattering * ray_step_length;

    vec3 light_contribution = light_color * shadow * phase_fn + core_color * core_glow * .5;
    vec3 inscattering = scattering * light_contribution;

    accumulated_light += inscattering * transmittance;
    transmittance *= absorption;

    if (dot(transmittance, TRANSMITTANCE_WEIGHTS) < .02) {
      break;
    }
  }

  vec3 color = accumulated_light;
  float alpha = 1. - dot(transmittance, TRANSMITTANCE_WEIGHTS);
  alpha = clamp(alpha, 0., 1.);
  alpha = pow(alpha, 2.5); // Adjust alpha curve

  return vec4(color, alpha);
}

void main() {
  vec3 position = getCubeDirection(u_face_index, v_uv);
  vec3 color = vec3(0.);

  if (u_background_enabled) {
    vec4 background = generate_background(position);
    color = mix(u_base_color, background.xyz, background.w);
  }

  if (u_stars_enabled) {
    vec4 stars_background = generate_stars(position, u_stars_density, u_stars_min_size,
      u_stars_max_size, u_stars_brightness,
      u_stars_color_1, u_stars_color_2);
    color = mix(color, stars_background.xyz, stars_background.w);
  }

  if (u_nebula_enabled) {
    vec4 nebula = generate_nebula(position);
    color = mix(color, nebula.xyz, nebula.w);
  }

  if (u_stars_enabled) {
    vec4 stars_foreground = generate_stars(position,
      u_stars_density * u_stars_foreground_density_multiplier,
      u_stars_min_size * u_stars_foreground_size_multiplier,
      u_stars_max_size * u_stars_foreground_size_multiplier,
      u_stars_brightness * u_stars_foreground_brightness_multiplier,
      u_stars_color_1, u_stars_color_2);
    color = mix(color, stars_foreground.xyz, stars_foreground.w);
  }

  gl_FragColor = vec4(color, 1.);
}
`;var mh=class{currentSkyboxTexture=null;currentCubeRenderTarget=null;generationScene;constructor(){this.generationScene=new Go}getPipeline(e,t){let i=[];return i.push({name:"Generate procedural cubemap",run:r=>jt(this,null,function*(){let o=ze(e,"textureSize");this.currentCubeRenderTarget&&(this.currentCubeRenderTarget.dispose(),this.currentCubeRenderTarget=null);let s=new qs(o,{format:Vn,colorSpace:hr,type:ii,minFilter:Bn,magFilter:Bn}),a=this.createShaderMaterial(0,e),c=new Wr(1,1,1);c.scale(1,1,-1);let l=new Ut(c,a);this.generationScene.add(l);let u=t.getRenderer();new $s(.1,10,s).update(u,this.generationScene);let f=new Uint8Array(4);u.readRenderTargetPixels(s,0,0,1,1,f,0),t.getScene().background=s.texture,this.currentSkyboxTexture=s.texture,this.currentCubeRenderTarget=s,this.generationScene.remove(l),c.dispose(),a.dispose()})}),{steps:i}}reset(e){e&&e.getScene().background===this.currentSkyboxTexture&&(e.getScene().background=null),this.cleanup()}isActive(e){return e.getScene().background===this.currentSkyboxTexture&&!!this.currentSkyboxTexture}cleanup(){this.currentSkyboxTexture&&(this.currentSkyboxTexture.dispose(),this.currentSkyboxTexture=null),this.currentCubeRenderTarget&&(this.currentCubeRenderTarget.dispose(),this.currentCubeRenderTarget=null)}createShaderMaterial(e,t){function i(r){let o=new we(r);return new O(o.r,o.g,o.b)}return new St({uniforms:{u_face_index:{value:e},u_seed:{value:ze(t,"seed")},u_base_color:{value:i(ze(t,"baseColor"))},u_background_enabled:{value:ze(t,"background.enabled")},u_background_noise_color:{value:i(ze(t,"background.backgroundNoise.color"))},u_background_noise_scale:{value:ze(t,"background.backgroundNoise.scale")},u_background_noise_octave:{value:ze(t,"background.backgroundNoise.octaves")},u_stars_enabled:{value:ze(t,"stars.enabled")},u_stars_density:{value:ze(t,"stars.density")},u_stars_min_size:{value:ze(t,"stars.minSize")},u_stars_max_size:{value:ze(t,"stars.maxSize")},u_stars_brightness:{value:ze(t,"stars.brightness")},u_stars_color_1:{value:i(ze(t,"stars.color1"))},u_stars_color_2:{value:i(ze(t,"stars.color2"))},u_stars_foreground_density_multiplier:{value:ze(t,"stars.foregroundDensityMultiplier")},u_stars_foreground_size_multiplier:{value:ze(t,"stars.foregroundSizeMultiplier")},u_stars_foreground_brightness_multiplier:{value:ze(t,"stars.foregroundBrightnessMultiplier")},u_nebula_enabled:{value:ze(t,"nebula.enabled")},u_nebula_outer_color:{value:i(ze(t,"nebula.outerColor"))},u_nebula_inner_color:{value:i(ze(t,"nebula.innerColor"))},u_nebula_core_color:{value:i(ze(t,"nebula.coreColor"))},u_nebula_noise_scale:{value:ze(t,"nebula.noiseScale")},u_nebula_noise_octave:{value:ze(t,"nebula.noiseOctave")},u_nebula_light_color:{value:i(ze(t,"nebula.lightColor"))},u_nebula_core_radius:{value:ze(t,"nebula.coreRadius")},u_nebula_core_intensity:{value:ze(t,"nebula.coreIntensity")},u_nebula_raymarch_steps:{value:ze(t,"nebula.raymarchSteps")},u_nebula_absorption:{value:ze(t,"nebula.absorption")},u_nebula_scattering:{value:ze(t,"nebula.scattering")}},vertexShader:HM,fragmentShader:zM})}};var gh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-skybox-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"view_in_ar"),ae())},dependencies:[on,rn],encapsulation:2})};var eF=[{key:"textureSize",label:"Texture Size",type:"number",value:1024,min:64,max:2048,step:1,section:"General",tooltip:"Resolution of the skybox faces."},{key:"seed",label:"Seed",type:"number",value:42928,min:0,max:99999,step:1,section:"General",tooltip:"Random seed for procedural generation."},{key:"background.enabled",label:"Background Enabled",type:"checkbox",value:!0,section:"Background",tooltip:"Enable background noise."},{key:"baseColor",label:"Base Color",type:"color",value:"#001336",section:"Background",tooltip:"Base color of the sky."},{key:"background.backgroundNoise.color",label:"Background Noise Color",type:"color",value:"#002343",section:"Background",tooltip:"Color of the background noise."},{key:"background.backgroundNoise.scale",label:"Background Noise Scale",type:"slider",value:4,min:.1,max:10,step:.1,section:"Background",tooltip:"Scale of the background noise."},{key:"background.backgroundNoise.octaves",label:"Background Noise Octaves",type:"number",value:6,min:1,max:10,step:1,section:"Background",tooltip:"Octaves for background noise."},{key:"stars.enabled",label:"Stars Enabled",type:"checkbox",value:!0,section:"Stars",tooltip:"Enable stars."},{key:"stars.density",label:"Star Density",type:"slider",value:.02,min:0,max:.1,step:.001,section:"Stars",tooltip:"Density of stars."},{key:"stars.minSize",label:"Star Min Size",type:"slider",value:.001,min:0,max:.01,step:1e-4,section:"Stars",tooltip:"Minimum star size."},{key:"stars.maxSize",label:"Star Max Size",type:"slider",value:.0025,min:0,max:.01,step:1e-4,section:"Stars",tooltip:"Maximum star size."},{key:"stars.brightness",label:"Star Brightness",type:"slider",value:.5,min:0,max:2,step:.01,section:"Stars",tooltip:"Brightness of stars."},{key:"stars.color1",label:"Star Color 1",type:"color",value:"#f9bc8b",section:"Stars",tooltip:"First star color."},{key:"stars.color2",label:"Star Color 2",type:"color",value:"#5cdeff",section:"Stars",tooltip:"Second star color."},{key:"stars.foregroundDensityMultiplier",label:"Foreground Density Multiplier",type:"slider",value:3,min:0,max:10,step:.1,section:"Stars",tooltip:"Multiplier for foreground star density."},{key:"stars.foregroundSizeMultiplier",label:"Foreground Size Multiplier",type:"slider",value:1.1,min:0,max:5,step:.01,section:"Stars",tooltip:"Multiplier for foreground star size."},{key:"stars.foregroundBrightnessMultiplier",label:"Foreground Brightness Multiplier",type:"slider",value:4,min:0,max:10,step:.1,section:"Stars",tooltip:"Multiplier for foreground star brightness."},{key:"nebula.enabled",label:"Nebula Enabled",type:"checkbox",value:!0,section:"Nebula",tooltip:"Enable nebula."},{key:"nebula.outerColor",label:"Nebula Outer Color",type:"color",value:"#002942",section:"Nebula",tooltip:"Outer color of the nebula."},{key:"nebula.innerColor",label:"Nebula Inner Color",type:"color",value:"#2ebfef",section:"Nebula",tooltip:"Inner color of the nebula."},{key:"nebula.coreColor",label:"Nebula Core Color",type:"color",value:"#ffdc82",section:"Nebula",tooltip:"Core color of the nebula."},{key:"nebula.noiseScale",label:"Nebula Noise Scale",type:"slider",value:3,min:.1,max:10,step:.1,section:"Nebula",tooltip:"Noise scale for nebula."},{key:"nebula.noiseOctave",label:"Nebula Noise Octave",type:"number",value:6,min:1,max:10,step:1,section:"Nebula",tooltip:"Noise octave for nebula."},{key:"nebula.lightColor",label:"Nebula Light Color",type:"color",value:"#ffffff",section:"Nebula",tooltip:"Light color for nebula."},{key:"nebula.coreRadius",label:"Nebula Core Radius",type:"slider",value:.006,min:0,max:.1,step:1e-4,section:"Nebula",tooltip:"Core radius of the nebula."},{key:"nebula.coreIntensity",label:"Nebula Core Intensity",type:"slider",value:100,min:0,max:500,step:1,section:"Nebula",tooltip:"Core intensity of the nebula."},{key:"nebula.raymarchSteps",label:"Nebula Raymarch Steps",type:"number",value:5,min:1,max:20,step:1,section:"Nebula",tooltip:"Raymarch steps for nebula."},{key:"nebula.absorption",label:"Nebula Absorption",type:"slider",value:15,min:0,max:50,step:.1,section:"Nebula",tooltip:"Absorption for nebula."},{key:"nebula.scattering",label:"Nebula Scattering",type:"slider",value:6,min:0,max:50,step:.1,section:"Nebula",tooltip:"Scattering for nebula."}],GM={provide:eo,useValue:{key:"skybox",factory:new mh,params:eF,icon:gh},multi:!0};var jM=`
  varying vec3 v_normal;

  void main() {
    v_normal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,WM=`
  uniform vec3 u_innerColor;
  uniform vec3 u_outerColor;
  uniform float u_edgePower;
  
  varying vec3 v_normal;

  void main() {
    vec3 cameraDirection = normalize((inverse(viewMatrix) * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
    float intensity = -dot(v_normal, cameraDirection);

    // Apply edge power for soft edges
    intensity = clamp(pow(intensity, u_edgePower), 0.0, 1.0);
    vec3 color = mix(u_outerColor, u_innerColor, intensity);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;var _h="sunLight",wy="sunMesh",yh=class{getPipeline(e,t){return{steps:[{name:"Generate sun",run:()=>jt(this,null,function*(){this.generateSun(e,t)})}]}}reset(e){let t=e.getScene(),i=t.getObjectByName(_h),r=t.getObjectByName(wy);i&&(t.remove(i),i.dispose?.()),r&&(t.remove(r),r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(o=>o.dispose()):r.material.dispose())}isActive(e){return!!e.getScene().getObjectByName(_h)}generateSun(e,t){let i=t.getScene().getObjectByName(_h),r=t.getScene().getObjectByName(wy);if(!i&&!r){let d=this.createSun(t);i=d.light,r=d.mesh}let o=ze(e,"sunAngle"),s=ze(e,"sunDistance"),a=o/180*Math.PI,c=0,l=Math.cos(a)*s,u=-Math.sin(a)*s;if(i){i.position.set(c,l,u);let d=new we(ze(e,"sunLightColor"));i.color.setRGB(d.r,d.g,d.b)}if(r){r.position.set(c,l,u);let d=r.geometry,f=ze(e,"sunSize");d.parameters.radius!==f&&(r.geometry.dispose(),r.geometry=new Zs(f,64,64));let h=r.material,g=new we(ze(e,"sunInnerColor")),y=new we(ze(e,"sunOuterColor"));h.uniforms.u_innerColor.value.setRGB(g.r,g.g,g.b),h.uniforms.u_outerColor.value.setRGB(y.r,y.g,y.b),h.uniforms.u_edgePower.value=ze(e,"sunEdgePower"),h.needsUpdate=!0}}createSun(e){let t=new Pc(16777215,.9);t.position.set(100,80,50),t.castShadow=!0,t.shadow.mapSize.width=4096,t.shadow.mapSize.height=4096;let i=200;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.camera.near=1,t.shadow.camera.far=500,t.shadow.bias=-5e-4,t.shadow.normalBias=.05,t.shadow.radius=1.5,t.shadow.blurSamples=8;let r=new Zs(7,64,64),o=new St({uniforms:{u_innerColor:{value:new we(1,.35,0)},u_outerColor:{value:new we(1,.99,.88)},u_edgePower:{value:2.5}},vertexShader:jM,fragmentShader:WM,transparent:!0,depthWrite:!1}),s=new Ut(r,o);return s.position.copy(t.position),s.castShadow=!1,s.receiveShadow=!1,s.layers.enable(yy),t.name=_h,s.name=wy,e.getScene().add(t),e.getScene().add(s),{light:t,mesh:s}}};var vh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-lighting-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"lightbulb"),ae())},dependencies:[on,rn],encapsulation:2})};var tF=[{key:"sunSize",label:"Sun Size",type:"slider",value:7,min:0,max:20,step:.1,section:"Sun",tooltip:"Size of the sun."},{key:"sunAngle",label:"Sun Angle",type:"slider",value:50,min:0,max:360,step:1,section:"Sun",tooltip:"Angle of the sun."},{key:"sunDistance",label:"Sun Distance",type:"slider",value:100,min:0,max:1e3,step:1,section:"Sun",tooltip:"Distance of the sun."},{key:"sunLightColor",label:"Sun Light Color",type:"color",value:"#ffffdc",section:"Sun",tooltip:"Color of the sunlight."},{key:"sunOuterColor",label:"Sun Outer Color",type:"color",value:"#ffbc05",section:"Sun",tooltip:"Outer color of the sun."},{key:"sunInnerColor",label:"Sun Inner Color",type:"color",value:"#ff8800",section:"Sun",tooltip:"Inner color of the sun."},{key:"sunEdgePower",label:"Sun Edge Power",type:"slider",value:1,min:0,max:10,step:.01,section:"Sun",tooltip:"Edge power of the sun."}],$M={provide:eo,useValue:{key:"lighting",factory:new yh,params:tF,icon:vh},multi:!0};var YM=Math.sqrt(3),ZM=Math.sqrt(5),nF=.5*(YM-1),Zc=(3-YM)/6,nK=1/3,iK=1/6,rK=(ZM-1)/4,oK=(5-ZM)/20,qM=n=>Math.floor(n)|0,XM=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function KM(n=Math.random){let e=iF(n),t=new Float64Array(e).map(r=>XM[r%12*2]),i=new Float64Array(e).map(r=>XM[r%12*2+1]);return function(o,s){let a=0,c=0,l=0,u=(o+s)*nF,d=qM(o+u),f=qM(s+u),h=(d+f)*Zc,g=d-h,y=f-h,m=o-g,p=s-y,w,S;m>p?(w=1,S=0):(w=0,S=1);let b=m-w+Zc,R=p-S+Zc,A=m-1+2*Zc,C=p-1+2*Zc,L=d&255,E=f&255,x=.5-m*m-p*p;if(x>=0){let k=L+e[E],$=t[k],q=i[k];x*=x,a=x*x*($*m+q*p)}let D=.5-b*b-R*R;if(D>=0){let k=L+w+e[E+S],$=t[k],q=i[k];D*=D,c=D*D*($*b+q*R)}let H=.5-A*A-C*C;if(H>=0){let k=L+1+e[E+1],$=t[k],q=i[k];H*=H,l=H*H*($*A+q*C)}return 70*(a+c+l)}}function iF(n){let t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){let r=i+~~(n()*(256-i)),o=t[i];t[i]=t[r],t[r]=o}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var eS=_S(QM());var xh="terrainMesh",bh=class{getPipeline(e,t){return{steps:[{name:"Generate shape",run:()=>jt(null,null,function*(){})},{name:"Generate elevation",run:()=>jt(null,null,function*(){})},{name:"Generate biome",run:()=>jt(null,null,function*(){})},{name:"Generate mesh",run:()=>jt(this,null,function*(){this.generateTerrain(e,t)})}]}}reset(e){let t=e.getScene(),i=t.getObjectByName(xh);i&&(t.remove(i),i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose())}isActive(e){return!!e.getScene().getObjectByName(xh)}generateTerrain(e,t){let i=t.getScene(),r=this.generateWorldGrid(e);t.setWorldCells(r);let o=i.getObjectByName(xh);o&&(i.remove(o),o.geometry.dispose(),Array.isArray(o.material)?o.material.forEach(a=>a.dispose()):o.material.dispose());let s=this.generateTerrainMesh(e,r);s.name=xh,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}generateWorldGrid(e){function t(f,h,g){let y=0,m=.5,p=0,w=1;for(let S=0;S<4;S++)y+=m*f(h*w,g*w),p+=m,w*=2,m*=.5;return y/p}let i=ze(e,"radius"),r=ze(e,"resolution"),o=i/r,s=o*2+1,a=.3,c=.2,l=ze(e,"seed"),u=KM((0,eS.default)(l));return Array.from({length:s*s},(f,h)=>{let g=h%s-o,y=Math.floor(h/s)-o,m=-g-y,p=g/o,w=y/o,S=t(u,p*1,w*1)*.5+.5;S=S*(1-c)+.5*c;let b=(Math.abs(g/o)+Math.abs(y/o)+Math.abs(m/o))/1.8;return{height:(S*.5+.5)*20,biome:S-(1-a)*b*b<0?"water":"land"}})}generateTerrainMesh(e,t){let i=new ei,r=new Rc({vertexColors:!0,side:ni,shadowSide:ni}),o=ze(e,"resolution"),s=ze(e,"radius")/o,a=[],c=[],l=[],u={water:new we(30654),land:new we(2263842)},d=Math.sqrt(3)*o,f=2*o,h=[{dir:[1,0],currentEdge:[5,0],neighborEdge:[2,3]},{dir:[1,-1],currentEdge:[4,5],neighborEdge:[1,2]},{dir:[0,-1],currentEdge:[3,4],neighborEdge:[0,1]},{dir:[-1,0],currentEdge:[2,3],neighborEdge:[5,0]},{dir:[-1,1],currentEdge:[1,2],neighborEdge:[4,5]},{dir:[0,1],currentEdge:[0,1],neighborEdge:[3,4]}];for(let m=-s;m<=s;m++)for(let p=-s;p<=s;p++){let w=-m-p;if((Math.abs(m)+Math.abs(p)+Math.abs(w))/2>s)continue;let b=m+s,R=p+s,A=t[b*(s*2+1)+R],C=d*(m+p/2),L=f*3/4*p,E=A.height||0,x=u[A.biome]||new we(8947848),D=a.length/3;a.push(C,E,L),l.push(x.r,x.g,x.b);for(let H=0;H<6;H++){let k=H*Math.PI/3+Math.PI/6,$=C+o*Math.cos(k),q=L+o*Math.sin(k);a.push($,E,q),l.push(x.r,x.g,x.b);let j=D+1+H,Z=H===5?D+1:j+1;c.push(D,j,Z)}for(let H=0;H<3;H++){let{dir:k,currentEdge:$,neighborEdge:q}=h[H],[j,Z]=k,V=m+j,ne=p+Z;if(Math.abs(V)>s||Math.abs(ne)>s||Math.abs(-V-ne)>s)continue;let de=V+s,Te=ne+s,ht=t[de*(s*2+1)+Te].height||0;if(Math.abs(E-ht)>.01){let G=D+1+$[0],te=D+1+$[1],ve=g(V,ne,s),ce=ve+1+q[0],xe=ve+1+q[1];E>ht?(c.push(G,xe,ce),c.push(G,ce,te)):(c.push(G,xe,te),c.push(te,xe,ce))}}}function g(m,p,w){let S=0;for(let b=-w;b<=w;b++)for(let R=-w;R<=w;R++){let A=-b-R;if(!((Math.abs(b)+Math.abs(R)+Math.abs(A))/2>w)){if(b===m&&R===p)return S*7;S++}}return-1}return i.setAttribute("position",new Zt(a,3)),i.setAttribute("color",new Zt(l,3)),i.setIndex(c),i.computeVertexNormals(),new Ut(i,r)}};var Eh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-terrain-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"landscape"),ae())},dependencies:[on,rn],encapsulation:2})};var rF=[{key:"seed",label:"Seed",type:"number",value:12345,min:0,max:99999,step:1,section:"General",tooltip:"Random seed for terrain."},{key:"radius",label:"Radius",type:"slider",value:16,min:1,max:256,step:1,section:"General",tooltip:"Radius of the terrain."},{key:"resolution",label:"Resolution",type:"slider",value:1,min:1,max:10,step:1,section:"General",tooltip:"Resolution of the terrain."}],tS={provide:eo,useValue:{key:"terrain",factory:new bh,params:rF,icon:Eh},multi:!0};Wg(ph,{providers:[GM,$M,tS]}).catch(n=>console.error(n));
