var dS=Object.create;var Ch=Object.defineProperty,fS=Object.defineProperties,hS=Object.getOwnPropertyDescriptor,pS=Object.getOwnPropertyDescriptors,mS=Object.getOwnPropertyNames,Ly=Object.getOwnPropertySymbols,gS=Object.getPrototypeOf,ky=Object.prototype.hasOwnProperty,vS=Object.prototype.propertyIsEnumerable;var Fy=(n,e,t)=>e in n?Ch(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,at=(n,e)=>{for(var t in e||={})ky.call(e,t)&&Fy(n,t,e[t]);if(Ly)for(var t of Ly(e))vS.call(e,t)&&Fy(n,t,e[t]);return n},Xt=(n,e)=>fS(n,pS(e));var yS=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var _S=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of mS(e))!ky.call(n,r)&&r!==t&&Ch(n,r,{get:()=>e[r],enumerable:!(i=hS(e,r))||i.enumerable});return n};var xS=(n,e,t)=>(t=n!=null?dS(gS(n)):{},_S(e||!n||!n.__esModule?Ch(t,"default",{value:n,enumerable:!0}):t,n));var St=(n,e,t)=>new Promise((i,r)=>{var o=c=>{try{a(t.next(c))}catch(l){r(l)}},s=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((t=t.apply(n,e)).next())});var nS=yS((Cy,tS)=>{"use strict";(function(n,e){typeof Cy=="object"?tS.exports=e():typeof define=="function"&&define.amd?define(e):n.Alea=e()})(Cy,function(){"use strict";return n.importState=function(t){var i=new n;return i.importState(t),i},n;function n(){return function(t){var i=0,r=0,o=0,s=1;t.length==0&&(t=[+new Date]);var a=e();i=a(" "),r=a(" "),o=a(" ");for(var c=0;c<t.length;c++)i-=a(t[c]),i<0&&(i+=1),r-=a(t[c]),r<0&&(r+=1),o-=a(t[c]),o<0&&(o+=1);a=null;var l=function(){var u=2091639*i+s*23283064365386963e-26;return i=r,r=o,o=u-(s=u|0)};return l.next=l,l.uint32=function(){return l()*4294967296},l.fract53=function(){return l()+(l()*2097152|0)*11102230246251565e-32},l.version="Alea 0.9",l.args=t,l.exportState=function(){return[i,r,o,s]},l.importState=function(u){i=+u[0]||0,r=+u[1]||0,o=+u[2]||0,s=+u[3]||0},l}(Array.prototype.slice.call(arguments))}function e(){var t=4022871197,i=function(r){r=r.toString();for(var o=0;o<r.length;o++){t+=r.charCodeAt(o);var s=.02519603282416938*t;t=s>>>0,s-=t,s*=t,t=s>>>0,s-=t,t+=s*4294967296}return(t>>>0)*23283064365386963e-26};return i.version="Mash 0.9",i}})});var Dh;function Ih(){return Dh}function Xi(n){let e=Dh;return Dh=n,e}var bS=Symbol("NotFound"),tl=class extends Error{name="\u0275NotFound";constructor(e){super(e)}};function is(n){return n===bS||n?.name==="\u0275NotFound"}var Ah=null;var Uy=1;var so=Symbol("SIGNAL");function Xe(n){let e=Ah;return Ah=n,e}function Rh(){return Ah}var pa={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Nh(n){if(!(Oh(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Uy)){if(!n.producerMustRecompute(n)&&!rl(n)){nl(n);return}n.producerRecomputeValue(n),nl(n)}}function nl(n){n.dirty=!1,n.lastCleanEpoch=Uy}function ma(n){return n&&(n.nextProducerIndex=0),Xe(n)}function il(n,e){if(Xe(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Oh(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ph(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function rl(n){Lh(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Nh(t),i!==t.version))return!0}return!1}function ol(n){if(Lh(n),Oh(n))for(let e=0;e<n.producerNode.length;e++)Ph(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Ph(n,e){if(ES(n),n.liveConsumerNode.length===1&&MS(n))for(let i=0;i<n.producerNode.length;i++)Ph(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Lh(r),r.producerIndexOfThis[i]=e}}function Oh(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Lh(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function ES(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function MS(n){return n.producerNode!==void 0}function SS(){throw new Error}var wS=SS;function Fh(n){wS=n}function Ye(n){return typeof n=="function"}function sl(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var al=sl(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ao(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ft=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ye(i))try{i()}catch(o){e=o instanceof al?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{By(o)}catch(s){e=e??[],s instanceof al?e=[...e,...s.errors]:e.push(s)}}if(e)throw new al(e)}}add(e){var t;if(e&&e!==this)if(this.closed)By(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ao(t,e)}remove(e){let{_finalizers:t}=this;t&&ao(t,e),e instanceof n&&e._removeParent(this)}};Ft.EMPTY=(()=>{let n=new Ft;return n.closed=!0,n})();var kh=Ft.EMPTY;function cl(n){return n instanceof Ft||n&&"closed"in n&&Ye(n.remove)&&Ye(n.add)&&Ye(n.unsubscribe)}function By(n){Ye(n)?n():n.unsubscribe()}var vi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var rs={setTimeout(n,e,...t){let{delegate:i}=rs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=rs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ll(n){rs.setTimeout(()=>{let{onUnhandledError:e}=vi;if(e)e(n);else throw n})}function ga(){}var Vy=Uh("C",void 0,void 0);function Hy(n){return Uh("E",void 0,n)}function zy(n){return Uh("N",n,void 0)}function Uh(n,e,t){return{kind:n,value:e,error:t}}var co=null;function os(n){if(vi.useDeprecatedSynchronousErrorHandling){let e=!co;if(e&&(co={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=co;if(co=null,t)throw i}}else n()}function Gy(n){vi.useDeprecatedSynchronousErrorHandling&&co&&(co.errorThrown=!0,co.error=n)}var lo=class extends Ft{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,cl(e)&&e.add(this)):this.destination=DS}static create(e,t,i){return new Yi(e,t,i)}next(e){this.isStopped?Vh(zy(e),this):this._next(e)}error(e){this.isStopped?Vh(Hy(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Vh(Vy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TS=Function.prototype.bind;function Bh(n,e){return TS.call(n,e)}var Hh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ul(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ul(i)}else ul(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ul(t)}}},Yi=class extends lo{constructor(e,t,i){super();let r;if(Ye(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&vi.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Bh(e.next,o),error:e.error&&Bh(e.error,o),complete:e.complete&&Bh(e.complete,o)}):r=e}this.destination=new Hh(r)}};function ul(n){vi.useDeprecatedSynchronousErrorHandling?Gy(n):ll(n)}function CS(n){throw n}function Vh(n,e){let{onStoppedNotification:t}=vi;t&&rs.setTimeout(()=>t(n,e))}var DS={closed:!0,next:ga,error:CS,complete:ga};var ss=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Zi(n){return n}function jy(n){return n.length===0?Zi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var mt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=AS(t)?t:new Yi(t,i,r);return os(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Wy(i),new i((r,o)=>{let s=new Yi({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ss](){return this}pipe(...t){return jy(t)(this)}toPromise(t){return t=Wy(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function Wy(n){var e;return(e=n??vi.Promise)!==null&&e!==void 0?e:Promise}function IS(n){return n&&Ye(n.next)&&Ye(n.error)&&Ye(n.complete)}function AS(n){return n&&n instanceof lo||IS(n)&&cl(n)}function RS(n){return Ye(n?.lift)}function wt(n){return e=>{if(RS(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function kt(n,e,t,i,r){return new zh(n,e,t,i,r)}var zh=class extends lo{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var $y=sl(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var si=(()=>{class n extends mt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new dl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new $y}next(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?kh:(this.currentObservers=null,o.push(t),new Ft(()=>{this.currentObservers=null,ao(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new mt;return t.source=this,t}}return n.create=(e,t)=>new dl(e,t),n})(),dl=class extends si{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:kh}};var Wn=class extends si{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Gh={now(){return(Gh.delegate||Date).now()},delegate:void 0};var fl=class extends Ft{constructor(e,t){super()}schedule(e,t=0){return this}};var va={setInterval(n,e,...t){let{delegate:i}=va;return i?.setInterval?i.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=va;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var hl=class extends fl{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var i;if(this.closed)return this;this.state=e;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,t)),this.pending=!0,this.delay=t,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,i=0){return va.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,t,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return t;t!=null&&va.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(e,t);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i=!1,r;try{this.work(e)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,ao(i,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var as=class n{constructor(e,t=n.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,i){return new this.schedulerActionCtor(this,e).schedule(i,t)}};as.now=Gh.now;var pl=class extends as{constructor(e,t=as.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}};var qy=new pl(hl);var Xy=new mt(n=>n.complete());function Yy(n){return n&&Ye(n.schedule)}function Zy(n){return n[n.length-1]}function ml(n){return Ye(Zy(n))?n.pop():void 0}function br(n){return Yy(Zy(n))?n.pop():void 0}function Jy(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(d){s(d)}}function c(u){try{l(i.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Ky(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function uo(n){return this instanceof uo?(this.v=n,this):new uo(n)}function Qy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){o.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(o[0][3],y)}}function l(h){h.value instanceof uo?Promise.resolve(h.value.v).then(u,d):f(o[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function e_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ky=="function"?Ky(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var gl=n=>n&&typeof n.length=="number"&&typeof n!="function";function vl(n){return Ye(n?.then)}function yl(n){return Ye(n[ss])}function _l(n){return Symbol.asyncIterator&&Ye(n?.[Symbol.asyncIterator])}function xl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function NS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var bl=NS();function El(n){return Ye(n?.[bl])}function Ml(n){return Qy(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield uo(t.read());if(r)return yield uo(void 0);yield yield uo(i)}}finally{t.releaseLock()}})}function Sl(n){return Ye(n?.getReader)}function Yt(n){if(n instanceof mt)return n;if(n!=null){if(yl(n))return PS(n);if(gl(n))return OS(n);if(vl(n))return LS(n);if(_l(n))return t_(n);if(El(n))return FS(n);if(Sl(n))return kS(n)}throw xl(n)}function PS(n){return new mt(e=>{let t=n[ss]();if(Ye(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function OS(n){return new mt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function LS(n){return new mt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,ll)})}function FS(n){return new mt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function t_(n){return new mt(e=>{US(n,e).catch(t=>e.error(t))})}function kS(n){return t_(Ml(n))}function US(n,e){var t,i,r,o;return Jy(this,void 0,void 0,function*(){try{for(t=e_(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Nn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function wl(n,e=0){return wt((t,i)=>{t.subscribe(kt(i,r=>Nn(i,n,()=>i.next(r),e),()=>Nn(i,n,()=>i.complete(),e),r=>Nn(i,n,()=>i.error(r),e)))})}function Tl(n,e=0){return wt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function n_(n,e){return Yt(n).pipe(Tl(e),wl(e))}function i_(n,e){return Yt(n).pipe(Tl(e),wl(e))}function r_(n,e){return new mt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function o_(n,e){return new mt(t=>{let i;return Nn(t,e,()=>{i=n[bl](),Nn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>Ye(i?.return)&&i.return()})}function Cl(n,e){if(!n)throw new Error("Iterable cannot be null");return new mt(t=>{Nn(t,e,()=>{let i=n[Symbol.asyncIterator]();Nn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function s_(n,e){return Cl(Ml(n),e)}function a_(n,e){if(n!=null){if(yl(n))return n_(n,e);if(gl(n))return r_(n,e);if(vl(n))return i_(n,e);if(_l(n))return Cl(n,e);if(El(n))return o_(n,e);if(Sl(n))return s_(n,e)}throw xl(n)}function Er(n,e){return e?a_(n,e):Yt(n)}function Ki(...n){let e=br(n);return Er(n,e)}function jh(n,e){let t=Ye(n)?n:()=>n,i=r=>r.error(t());return new mt(e?r=>e.schedule(i,0,r):i)}function Ut(n,e){return wt((t,i)=>{let r=0;t.subscribe(kt(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:BS}=Array;function VS(n,e){return BS(e)?n(...e):n(e)}function Dl(n){return Ut(e=>VS(n,e))}var{isArray:HS}=Array,{getPrototypeOf:zS,prototype:GS,keys:jS}=Object;function Il(n){if(n.length===1){let e=n[0];if(HS(e))return{args:e,keys:null};if(WS(e)){let t=jS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function WS(n){return n&&typeof n=="object"&&zS(n)===GS}function Al(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Wh(...n){let e=br(n),t=ml(n),{args:i,keys:r}=Il(n);if(i.length===0)return Er([],e);let o=new mt($S(i,e,r?s=>Al(r,s):Zi));return t?o.pipe(Dl(t)):o}function $S(n,e,t=Zi){return i=>{c_(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)c_(e,()=>{let l=Er(n[c],e),u=!1;l.subscribe(kt(i,d=>{o[c]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function c_(n,e,t){n?Nn(t,n,e):e()}function l_(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{o&&e.next(y),l++;let m=!1;Yt(t(y,u++)).subscribe(kt(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?Nn(e,s,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(kt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function cs(n,e,t=1/0){return Ye(e)?cs((i,r)=>Ut((o,s)=>e(i,o,r,s))(Yt(n(i,r))),t):(typeof e=="number"&&(t=e),wt((i,r)=>l_(i,r,n,t)))}function u_(n=1/0){return cs(Zi,n)}function d_(){return u_(1)}function ls(...n){return d_()(Er(n,br(n)))}function $h(...n){let e=ml(n),{args:t,keys:i}=Il(n),r=new mt(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let d=!1;Yt(t[u]).subscribe(kt(o,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||o.next(i?Al(i,a):a),o.complete())}))}});return e?r.pipe(Dl(e)):r}function ya(n,e){return wt((t,i)=>{let r=0;t.subscribe(kt(i,o=>n.call(e,o,r++)&&i.next(o)))})}function Rl(n){return wt((e,t)=>{let i=null,r=!1,o;i=e.subscribe(kt(t,void 0,void 0,s=>{o=Yt(n(s,Rl(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function qh(n,e){return Ye(e)?cs(n,e,1):cs(n,1)}function Xh(n,e=qy){return wt((t,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+n,u=e.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}a()}t.subscribe(kt(i,l=>{o=l,s=e.now(),r||(r=e.schedule(c,n),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function _a(n){return n<=0?()=>Xy:wt((e,t)=>{let i=0;e.subscribe(kt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Nl(n){return wt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Zh(n={}){let{connector:e=()=>new si,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return o=>{let s,a,c,l=0,u=!1,d=!1,f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=c=void 0,u=d=!1},g=()=>{let y=s;h(),y?.unsubscribe()};return wt((y,m)=>{l++,!d&&!u&&f();let p=c=c??e();m.add(()=>{l--,l===0&&!d&&!u&&(a=Yh(g,r))}),p.subscribe(m),!s&&l>0&&(s=new Yi({next:w=>p.next(w),error:w=>{d=!0,f(),a=Yh(h,t,w),p.error(w)},complete:()=>{u=!0,f(),a=Yh(h,i),p.complete()}}),Yt(y).subscribe(s))})(o)}}function Yh(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new Yi({next:()=>{i.unsubscribe(),n()}});return Yt(e(...t)).subscribe(i)}function Kh(n){return ya((e,t)=>n<=t)}function Jh(...n){let e=br(n);return wt((t,i)=>{(e?ls(n,t,e):ls(n,t)).subscribe(i)})}function Qh(n){return wt((e,t)=>{Yt(n).subscribe(kt(t,()=>t.complete(),ga)),!t.closed&&e.subscribe(t)})}function xa(n,e,t){let i=Ye(n)||e||t?{next:n,error:e,complete:t}:n;return i?wt((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(kt(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Zi}function f_(n){let e=Xe(null);try{return n()}finally{Xe(e)}}var Ul="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ne=class extends Error{code;constructor(e,t){super(Ma(e,t)),this.code=e}};function JS(n){return`NG0${Math.abs(n)}`}function Ma(n,e){return`${JS(n)}${e?": "+e:""}`}var ds=globalThis;function At(n){for(let e in n)if(n[e]===At)return e;throw Error("")}function Pn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Pn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Bl(n,e){return n?e?`${n} ${e}`:n:e||""}var QS=At({__forward_ref__:At});function Vl(n){return n.__forward_ref__=Vl,n.toString=function(){return Pn(this())},n}function $n(n){return v_(n)?n():n}function v_(n){return typeof n=="function"&&n.hasOwnProperty(QS)&&n.__forward_ref__===Vl}function y_(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function Ve(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Ln(n){return{providers:n.providers||[],imports:n.imports||[]}}function Hl(n){return ew(n,zl)}function ew(n,e){return n.hasOwnProperty(e)&&n[e]||null}function tw(n){let e=n?.[zl]??null;return e||null}function tp(n){return n&&n.hasOwnProperty(Ol)?n[Ol]:null}var zl=At({\u0275prov:At}),Ol=At({\u0275inj:At}),Ge=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ve({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function hp(n){return n&&!!n.\u0275providers}var pp=At({\u0275cmp:At}),mp=At({\u0275dir:At}),gp=At({\u0275pipe:At}),vp=At({\u0275mod:At}),np=At({\u0275fac:At}),vo=At({__NG_ELEMENT_ID__:At}),p_=At({__NG_ENV_ID__:At});function Gl(n){return typeof n=="string"?n:n==null?"":String(n)}function __(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Gl(n)}function yp(n,e){throw new Ne(-200,n)}function jl(n,e){throw new Ne(-201,!1)}var ip;function x_(){return ip}function bn(n){let e=ip;return ip=n,e}function _p(n,e,t){let i=Hl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;jl(n,"Injector")}var nw={},fo=nw,rp="__NG_DI_FLAG__",op=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=ho(t)||0;try{return this.injector.get(e,i&8?null:fo,i)}catch(r){if(is(r))return r;throw r}}},Ll="ngTempTokenPath",iw="ngTokenPath",rw=/\n/gm,ow="\u0275",m_="__source";function sw(n,e=0){let t=Ih();if(t===void 0)throw new Ne(-203,!1);if(t===null)return _p(n,void 0,e);{let i=aw(e),r=t.retrieve(n,i);if(is(r)){if(i.optional)return null;throw r}return r}}function ke(n,e=0){return(x_()||sw)($n(n),e)}function pe(n,e){return ke(n,ho(e))}function ho(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function aw(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function sp(n){let e=[];for(let t=0;t<n.length;t++){let i=$n(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ne(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=cw(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(ke(r,o))}else e.push(ke(i))}return e}function xp(n,e){return n[rp]=e,n.prototype[rp]=e,n}function cw(n){return n[rp]}function lw(n,e,t,i){let r=n[Ll];throw e[m_]&&r.unshift(e[m_]),n.message=uw(`
`+n.message,r,t,i),n[iw]=r,n[Ll]=null,n}function uw(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==ow?n.slice(2):n;let r=Pn(e);if(Array.isArray(e))r=e.map(Pn).join(" -> ");else if(typeof e=="object"){let o=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s];o.push(s+":"+(typeof a=="string"?JSON.stringify(a):Pn(a)))}r=`{${o.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(rw,`
  `)}`}function po(n,e){let t=n.hasOwnProperty(np);return t?n[np]:null}function b_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function E_(n){return n.flat(Number.POSITIVE_INFINITY)}function Wl(n,e){n.forEach(t=>Array.isArray(t)?Wl(t,e):e(t))}function bp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Sa(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function M_(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function S_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let o=r-2;n[r]=n[o],r--}n[e]=t,n[e+1]=i}}function $l(n,e,t){let i=fs(n,e);return i>=0?n[i|1]=t:(i=~i,S_(n,i,e,t)),i}function ql(n,e){let t=fs(n,e);if(t>=0)return n[t|1]}function fs(n,e){return dw(n,e,1)}function dw(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<t];if(e===s)return o<<t;s>e?r=o:i=o+1}return~(r<<t)}var yo={},On=[],Sr=new Ge(""),Ep=new Ge("",-1),Mp=new Ge(""),Ea=class{get(e,t=fo){if(t===fo)throw new tl(`NullInjectorError: No provider for ${Pn(e)}!`);return t}};function w_(n){return n[vp]||null}function _o(n){return n[pp]||null}function Sp(n){return n[mp]||null}function T_(n){return n[gp]||null}function C_(...n){return{\u0275providers:wp(!0,n),\u0275fromNgModule:!0}}function wp(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return Wl(e,s=>{let a=s;Fl(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&D_(r,o),t}function D_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Tp(r,o=>{e(o,i)})}}function Fl(n,e,t,i){if(n=$n(n),!n)return!1;let r=null,o=tp(n),s=!o&&_o(n);if(!o&&!s){let c=n.ngModule;if(o=tp(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Fl(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;try{Wl(o.imports,u=>{Fl(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&D_(l,e)}if(!a){let l=po(r)||(()=>new r);e({provide:r,useFactory:l,deps:On},r),e({provide:Mp,useValue:r,multi:!0},r),e({provide:Sr,useValue:()=>ke(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Tp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Tp(n,e){for(let t of n)hp(t)&&(t=t.\u0275providers),Array.isArray(t)?Tp(t,e):e(t)}var fw=At({provide:String,useValue:At});function I_(n){return n!==null&&typeof n=="object"&&fw in n}function hw(n){return!!(n&&n.useExisting)}function pw(n){return!!(n&&n.useFactory)}function kl(n){return typeof n=="function"}var wa=new Ge(""),Pl={},g_={},ep;function Ta(){return ep===void 0&&(ep=new Ea),ep}var qn=class{},mo=class extends qn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,cp(e,s=>this.processProvider(s)),this.records.set(Ep,us(void 0,this)),r.has("environment")&&this.records.set(qn,us(void 0,this));let o=this.records.get(wa);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Mp,On,{self:!0}))}retrieve(e,t){let i=ho(t)||0;try{return this.get(e,fo,i)}catch(r){if(is(r))return r;throw r}}destroy(){ba(this),this._destroyed=!0;let e=Xe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Xe(e)}}onDestroy(e){return ba(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ba(this);let t=Xi(this),i=bn(void 0),r;try{return e()}finally{Xi(t),bn(i)}}get(e,t=fo,i){if(ba(this),e.hasOwnProperty(p_))return e[p_](this);let r=ho(i),o,s=Xi(this),a=bn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=_w(e)&&Hl(e);u&&this.injectableDefInScope(u)?l=us(ap(e),Pl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l)}let c=r&2?Ta():this.parent;return t=r&8&&t===fo?null:t,c.get(e,t)}catch(c){if(is(c)){if((c[Ll]=c[Ll]||[]).unshift(Pn(e)),s)throw c;return lw(c,e,"R3InjectorError",this.source)}else throw c}finally{bn(a),Xi(s)}}resolveInjectorInitializers(){let e=Xe(null),t=Xi(this),i=bn(void 0),r;try{let o=this.get(Sr,On,{self:!0});for(let s of o)s()}finally{Xi(t),bn(i),Xe(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Pn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=$n(e);let t=kl(e)?e:$n(e&&e.provide),i=gw(e);if(!kl(e)&&e.multi===!0){let r=this.records.get(t);r||(r=us(void 0,Pl,!0),r.factory=()=>sp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=Xe(null);try{return t.value===g_?yp(Pn(e)):t.value===Pl&&(t.value=g_,t.value=t.factory()),typeof t.value=="object"&&t.value&&yw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Xe(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=$n(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ap(n){let e=Hl(n),t=e!==null?e.factory:po(n);if(t!==null)return t;if(n instanceof Ge)throw new Ne(204,!1);if(n instanceof Function)return mw(n);throw new Ne(204,!1)}function mw(n){if(n.length>0)throw new Ne(204,!1);let t=tw(n);return t!==null?()=>t.factory(n):()=>new n}function gw(n){if(I_(n))return us(void 0,n.useValue);{let e=A_(n);return us(e,Pl)}}function A_(n,e,t){let i;if(kl(n)){let r=$n(n);return po(r)||ap(r)}else if(I_(n))i=()=>$n(n.useValue);else if(pw(n))i=()=>n.useFactory(...sp(n.deps||[]));else if(hw(n))i=()=>ke($n(n.useExisting));else{let r=$n(n&&(n.useClass||n.provide));if(vw(n))i=()=>new r(...sp(n.deps));else return po(r)||ap(r)}return i}function ba(n){if(n.destroyed)throw new Ne(205,!1)}function us(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function vw(n){return!!n.deps}function yw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function _w(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function cp(n,e){for(let t of n)Array.isArray(t)?cp(t,e):t&&hp(t)?cp(t.\u0275providers,e):e(t)}function Ca(n,e){let t;n instanceof mo?(ba(n),t=n):t=new op(n);let i,r=Xi(t),o=bn(void 0);try{return e()}finally{Xi(r),bn(o)}}function R_(){return x_()!==void 0||Ih()!=null}var yi=0,$e=1,Be=2,en=3,ai=4,Mn=5,hs=6,ps=7,fn=8,xo=9,Qi=10,jt=11,ms=12,Cp=13,bo=14,Fn=15,wr=16,Eo=17,Oi=18,Da=19,Dp=20,Ji=21,Xl=22,Ia=23,Xn=24,Yl=25,an=26,N_=1;var Tr=7,Aa=8,Mo=9,Sn=10;function er(n){return Array.isArray(n)&&typeof n[N_]=="object"}function _i(n){return Array.isArray(n)&&n[N_]===!0}function Zl(n){return(n.flags&4)!==0}function Cr(n){return n.componentOffset>-1}function Ra(n){return(n.flags&1)===1}function So(n){return!!n.template}function gs(n){return(n[Be]&512)!==0}function wo(n){return(n[Be]&256)===256}var Ip="svg",P_="math";function ci(n){for(;Array.isArray(n);)n=n[yi];return n}function Ap(n,e){return ci(e[n])}function xi(n,e){return ci(e[n.index])}function Kl(n,e){return n.data[e]}function Rp(n,e){return n[e]}function Np(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function bi(n,e){let t=e[n];return er(t)?t:t[yi]}function O_(n){return(n[Be]&4)===4}function Jl(n){return(n[Be]&128)===128}function L_(n){return _i(n[en])}function To(n,e){return e==null?null:n[e]}function Pp(n){n[Eo]=0}function Op(n){n[Be]&1024||(n[Be]|=1024,Jl(n)&&Pa(n))}function F_(n,e){for(;n>0;)e=e[bo],n--;return e}function Na(n){return!!(n[Be]&9216||n[Xn]?.dirty)}function Ql(n){n[Qi].changeDetectionScheduler?.notify(8),n[Be]&64&&(n[Be]|=1024),Na(n)&&Pa(n)}function Pa(n){n[Qi].changeDetectionScheduler?.notify(0);let e=Mr(n);for(;e!==null&&!(e[Be]&8192||(e[Be]|=8192,!Jl(e)));)e=Mr(e)}function Lp(n,e){if(wo(n))throw new Ne(911,!1);n[Ji]===null&&(n[Ji]=[]),n[Ji].push(e)}function k_(n,e){if(n[Ji]===null)return;let t=n[Ji].indexOf(e);t!==-1&&n[Ji].splice(t,1)}function Mr(n){let e=n[en];return _i(e)?e[en]:e}function Fp(n){return n[ps]??=[]}function kp(n){return n.cleanup??=[]}function U_(n,e,t,i){let r=Fp(e);r.push(t),n.firstCreatePass&&kp(n).push(i,r.length-1)}var Ze={lFrame:Q_(null),bindingsEnabled:!0,skipHydrationRootTNode:null},Oa=function(n){return n[n.Off=0]="Off",n[n.Exhaustive=1]="Exhaustive",n[n.OnlyDirtyViews=2]="OnlyDirtyViews",n}(Oa||{}),xw=0,lp=!1;function B_(){return Ze.lFrame.elementDepthCount}function V_(){Ze.lFrame.elementDepthCount++}function H_(){Ze.lFrame.elementDepthCount--}function eu(){return Ze.bindingsEnabled}function Up(){return Ze.skipHydrationRootTNode!==null}function z_(n){return Ze.skipHydrationRootTNode===n}function G_(){Ze.skipHydrationRootTNode=null}function gt(){return Ze.lFrame.lView}function cn(){return Ze.lFrame.tView}function ln(n){return Ze.lFrame.contextLView=n,n[fn]}function un(n){return Ze.lFrame.contextLView=null,n}function Yn(){let n=Bp();for(;n!==null&&n.type===64;)n=n.parent;return n}function Bp(){return Ze.lFrame.currentTNode}function j_(){let n=Ze.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Dr(n,e){let t=Ze.lFrame;t.currentTNode=n,t.isParent=e}function tu(){return Ze.lFrame.isParent}function nu(){Ze.lFrame.isParent=!1}function W_(){return Ze.lFrame.contextLView}function Vp(n){y_("Must never be called in production mode"),xw=n}function Hp(){return lp}function zp(n){let e=lp;return lp=n,e}function $_(){let n=Ze.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function q_(n){return Ze.lFrame.bindingIndex=n}function iu(){return Ze.lFrame.bindingIndex++}function Gp(n){let e=Ze.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function X_(){return Ze.lFrame.inI18n}function Y_(n,e){let t=Ze.lFrame;t.bindingIndex=t.bindingRootIndex=n,ru(e)}function Z_(){return Ze.lFrame.currentDirectiveIndex}function ru(n){Ze.lFrame.currentDirectiveIndex=n}function K_(n){let e=Ze.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function jp(){return Ze.lFrame.currentQueryIndex}function ou(n){Ze.lFrame.currentQueryIndex=n}function bw(n){let e=n[$e];return e.type===2?e.declTNode:e.type===1?n[Mn]:null}function Wp(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=bw(o),r===null||(o=o[bo],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=Ze.lFrame=J_();return i.currentTNode=e,i.lView=n,!0}function su(n){let e=J_(),t=n[$e];Ze.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function J_(){let n=Ze.lFrame,e=n===null?null:n.child;return e===null?Q_(n):e}function Q_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function e0(){let n=Ze.lFrame;return Ze.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var $p=e0;function au(){let n=e0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function t0(n){return(Ze.lFrame.contextLView=F_(n,Ze.lFrame.contextLView))[fn]}function Ir(){return Ze.lFrame.selectedIndex}function Ar(n){Ze.lFrame.selectedIndex=n}function qp(){let n=Ze.lFrame;return Kl(n.tView,n.selectedIndex)}function cu(){Ze.lFrame.currentNamespace=Ip}function n0(){return Ze.lFrame.currentNamespace}var i0=!0;function La(){return i0}function Fa(n){i0=n}function up(n,e=null,t=null,i){let r=Xp(n,e,t,i);return r.resolveInjectorInitializers(),r}function Xp(n,e=null,t=null,i,r=new Set){let o=[t||On,C_(n)];return i=i||(typeof n=="object"?void 0:Pn(n)),new mo(o,e||Ta(),i||null,r)}var Pi=class n{static THROW_IF_NOT_FOUND=fo;static NULL=new Ea;static create(e,t){if(Array.isArray(e))return up({name:""},t,e,"");{let i=e.name??"";return up({name:i},e.parent,e.providers,i)}}static \u0275prov=Ve({token:n,providedIn:"any",factory:()=>ke(Ep)});static __NG_ELEMENT_ID__=-1},Wt=new Ge(""),ka=(()=>{class n{static __NG_ELEMENT_ID__=Ew;static __NG_ENV_ID__=t=>t}return n})(),dp=class extends ka{_lView;constructor(e){super(),this._lView=e}get destroyed(){return wo(this._lView)}onDestroy(e){let t=this._lView;return Lp(t,e),()=>k_(t,e)}};function Ew(){return new dp(gt())}var En=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Li=new Ge("",{providedIn:"root",factory:()=>{let n=pe(qn),e;return t=>{e??=n.get(En),e.handleError(t)}}}),r0={provide:Sr,useValue:()=>void pe(En),multi:!0};var go=class{},Ua=new Ge("",{providedIn:"root",factory:()=>!1});var Yp=new Ge(""),Zp=new Ge("");var vs=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Wn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new mt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();function Ba(...n){}var Kp=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new fp})}return n})(),fp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};function qa(n){return{toString:n}.toString()}var lu="__parameters__";function Ow(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function O0(n,e,t){return qa(()=>{let i=Ow(e);function r(...o){if(this instanceof r)return i.apply(this,o),this;let s=new r(...o);return a.annotation=s,a;function a(c,l,u){let d=c.hasOwnProperty(lu)?c[lu]:Object.defineProperty(c,lu,{value:[]})[lu];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(s),c}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var Au=xp(O0("Optional"),8);var Bm=xp(O0("SkipSelf"),4);function Lw(n){return typeof n=="function"}var vu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function L0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Ru=(()=>{let n=()=>F0;return n.ngInherit=!0,n})();function F0(n){return n.type.prototype.ngOnChanges&&(n.setInput=kw),Fw}function Fw(){let n=U0(this),e=n?.current;if(e){let t=n.previous;if(t===yo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function kw(n,e,t,i,r){let o=this.declaredInputs[i],s=U0(n)||Uw(n,{previous:yo,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new vu(l&&l.currentValue,t,c===yo),L0(n,e,r,t)}var k0="__ngSimpleChanges__";function U0(n){return n[k0]||null}function Uw(n,e){return n[k0]=e}var o0=[];var Et=function(n,e=null,t){for(let i=0;i<o0.length;i++){let r=o0[i];r(n,e,t)}};function Bw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=F0(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function Vm(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function hu(n,e,t){B0(n,e,3,t)}function pu(n,e,t,i){(n[Be]&3)===t&&B0(n,e,t,i)}function Jp(n,e){let t=n[Be];(t&3)===e&&(t&=16383,t+=1,n[Be]=t)}function B0(n,e,t,i){let r=i!==void 0?n[Eo]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Eo]+=65536),(a<o||o==-1)&&(Vw(n,t,e,c),n[Eo]=(n[Eo]&4294901760)+c+2),c++}function s0(n,e){Et(4,n,e);let t=Xe(null);try{e.call(n)}finally{Xe(t),Et(5,n,e)}}function Vw(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[Be]>>14<n[Eo]>>16&&(n[Be]&3)===e&&(n[Be]+=16384,s0(a,o)):s0(a,o)}var _s=-1,za=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Hw(n){return(n.flags&8)!==0}function zw(n){return(n.flags&16)!==0}function Gw(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];jw(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function V0(n){return n===3||n===4||n===6}function jw(n){return n.charCodeAt(0)===64}function Nu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?a0(n,t,r,null,e[++i]):a0(n,t,r,null,null))}}return n}function a0(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function H0(n){return n!==_s}function yu(n){return n&32767}function Ww(n){return n>>16}function _u(n,e){let t=Ww(n),i=e;for(;t>0;)i=i[bo],t--;return i}var om=!0;function xu(n){let e=om;return om=n,e}var $w=256,z0=$w-1,G0=5,qw=0,Fi={};function Xw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(vo)&&(i=t[vo]),i==null&&(i=t[vo]=qw++);let r=i&z0,o=1<<r;e.data[n+(r>>G0)]|=o}function j0(n,e){let t=W0(n,e);if(t!==-1)return t;let i=e[$e];i.firstCreatePass&&(n.injectorIndex=e.length,Qp(i.data,n),Qp(e,null),Qp(i.blueprint,null));let r=Hm(n,e),o=n.injectorIndex;if(H0(r)){let s=yu(r),a=_u(r,e),c=a[$e].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function Qp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function W0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Hm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Z0(r),i===null)return _s;if(t++,r=r[bo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return _s}function Yw(n,e,t){Xw(n,e,t)}function Zw(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let o=t[r];if(V0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(o===e)return t[r+1];r=r+2}}}return null}function $0(n,e,t){if(t&8||n!==void 0)return n;jl(e,"NodeInjector")}function q0(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[xo],o=bn(void 0);try{return r?r.get(e,i,t&8):_p(e,i,t&8)}finally{bn(o)}}return $0(i,e,t)}function X0(n,e,t,i=0,r){if(n!==null){if(e[Be]&2048&&!(i&2)){let s=eT(n,e,t,i,Fi);if(s!==Fi)return s}let o=Y0(n,e,t,i,Fi);if(o!==Fi)return o}return q0(e,t,i,r)}function Y0(n,e,t,i,r){let o=Jw(t);if(typeof o=="function"){if(!Wp(e,n,i))return i&1?$0(r,t,i):q0(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))jl(t);else return s}finally{$p()}}else if(typeof o=="number"){let s=null,a=W0(n,e),c=_s,l=i&1?e[Fn][Mn]:null;for((a===-1||i&4)&&(c=a===-1?Hm(n,e):e[a+8],c===_s||!l0(i,!1)?a=-1:(s=e[$e],a=yu(c),e=_u(c,e)));a!==-1;){let u=e[$e];if(c0(o,a,u.data)){let d=Kw(a,e,t,s,i,l);if(d!==Fi)return d}c=e[a+8],c!==_s&&l0(i,e[$e].data[a+8]===l)&&c0(o,a,e)?(s=u,a=yu(c),e=_u(c,e)):a=-1}}return r}function Kw(n,e,t,i,r,o){let s=e[$e],a=s.data[n+8],c=i==null?Cr(a)&&om:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=mu(a,s,t,c,l);return u!==null?bu(e,s,u,a):Fi}function mu(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&So(h)&&h.type===t)return c}return null}function bu(n,e,t,i){let r=n[t],o=e.data;if(r instanceof za){let s=r;s.resolving&&yp(__(o[t]));let a=xu(s.canSeeViewProviders);s.resolving=!0;let c=o[t].type||o[t],l,u=s.injectImpl?bn(s.injectImpl):null,d=Wp(n,i,0);try{r=n[t]=s.factory(void 0,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&Bw(t,o[t],e)}finally{u!==null&&bn(u),xu(a),s.resolving=!1,$p()}}return r}function Jw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(vo)?n[vo]:void 0;return typeof e=="number"?e>=0?e&z0:Qw:e}function c0(n,e,t){let i=1<<n;return!!(t[e+(n>>G0)]&i)}function l0(n,e){return!(n&2)&&!(n&1&&e)}var Co=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return X0(this._tNode,this._lView,e,ho(i),t)}};function Qw(){return new Co(Yn(),gt())}function eT(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[Be]&2048&&!gs(s);){let a=Y0(o,s,t,i|2,Fi);if(a!==Fi)return a;let c=o.parent;if(!c){let l=s[Dp];if(l){let u=l.get(t,Fi,i);if(u!==Fi)return u}c=Z0(s),s=s[bo]}o=c}return r}function Z0(n){let e=n[$e],t=e.type;return t===2?e.declTNode:t===1?n[Mn]:null}function zm(n){return Zw(Yn(),n)}function tT(){return bs(Yn(),gt())}function bs(n,e){return new ir(xi(n,e))}var ir=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=tT}return n})();function nT(n){return n instanceof ir?n.nativeElement:n}function iT(){return this._results[Symbol.iterator]()}var Eu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new si}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=E_(e);(this._changesDetected=!b_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=iT};function K0(n){return(n.flags&128)===128}var Gm=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Gm||{}),J0=new Map,rT=0;function oT(){return rT++}function sT(n){J0.set(n[Da],n)}function sm(n){J0.delete(n[Da])}var u0="__ngContext__";function Es(n,e){er(e)?(n[u0]=e[Da],sT(e)):n[u0]=e}function Q0(n){return tx(n[ms])}function ex(n){return tx(n[ai])}function tx(n){for(;n!==null&&!_i(n);)n=n[ai];return n}var am;function jm(n){am=n}function nx(){if(am!==void 0)return am;if(typeof document<"u")return document;throw new Ne(210,!1)}var Pu=new Ge("",{providedIn:"root",factory:()=>aT}),aT="ng",Ou=new Ge(""),Pr=new Ge("",{providedIn:"platform",factory:()=>"unknown"});var Ms=new Ge("",{providedIn:"root",factory:()=>nx().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var cT="h",lT="b";var ix=!1,rx=new Ge("",{providedIn:"root",factory:()=>ix});var uT=(n,e,t,i)=>{};function dT(n,e,t,i){uT(n,e,t,i)}var fT=()=>null;function ox(n,e,t=!1){return fT(n,e,t)}function sx(n,e){let t=n.contentQueries;if(t!==null){let i=Xe(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];ou(o),a.contentQueries(2,e[s],s)}}}finally{Xe(i)}}}function cm(n,e,t){ou(0);let i=Xe(null);try{e(n,t)}finally{Xe(i)}}function Wm(n,e,t){if(Zl(e)){let i=Xe(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{Xe(i)}}}var tr=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(tr||{}),uu;function hT(){if(uu===void 0&&(uu=null,ds.trustedTypes))try{uu=ds.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return uu}function Lu(n){return hT()?.createHTML(n)||n}var nr=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ul})`}},lm=class extends nr{getTypeName(){return"HTML"}},um=class extends nr{getTypeName(){return"Style"}},dm=class extends nr{getTypeName(){return"Script"}},fm=class extends nr{getTypeName(){return"URL"}},hm=class extends nr{getTypeName(){return"ResourceURL"}};function rr(n){return n instanceof nr?n.changingThisBreaksApplicationSecurity:n}function Ao(n,e){let t=ax(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Ul})`)}return t===e}function ax(n){return n instanceof nr&&n.getTypeName()||null}function $m(n){return new lm(n)}function qm(n){return new um(n)}function Xm(n){return new dm(n)}function Ym(n){return new fm(n)}function Zm(n){return new hm(n)}function pT(n){let e=new mm(n);return mT()?new pm(e):e}var pm=class{inertDocumentHelper;constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let t=new window.DOMParser().parseFromString(Lu(e),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(e):(t.firstChild?.remove(),t)}catch{return null}}},mm=class{defaultDoc;inertDocument;constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let t=this.inertDocument.createElement("template");return t.innerHTML=Lu(e),t}};function mT(){try{return!!new window.DOMParser().parseFromString(Lu(""),"text/html")}catch{return!1}}var gT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Fu(n){return n=String(n),n.match(gT)?n:"unsafe:"+n}function or(n){let e={};for(let t of n.split(","))e[t]=!0;return e}function Xa(...n){let e={};for(let t of n)for(let i in t)t.hasOwnProperty(i)&&(e[i]=!0);return e}var cx=or("area,br,col,hr,img,wbr"),lx=or("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ux=or("rp,rt"),vT=Xa(ux,lx),yT=Xa(lx,or("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),_T=Xa(ux,or("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),d0=Xa(cx,yT,_T,vT),dx=or("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),xT=or("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),bT=or("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),ET=Xa(dx,xT,bT),MT=or("script,style,template"),gm=class{sanitizedSomething=!1;buf=[];sanitizeChildren(e){let t=e.firstChild,i=!0,r=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?i=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,i&&t.firstChild){r.push(t),t=TT(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=wT(t);if(o){t=o;break}t=r.pop()}}return this.buf.join("")}startElement(e){let t=f0(e).toLowerCase();if(!d0.hasOwnProperty(t))return this.sanitizedSomething=!0,!MT.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let i=e.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!ET.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;dx[a]&&(c=Fu(c)),this.buf.push(" ",s,'="',h0(c),'"')}return this.buf.push(">"),!0}endElement(e){let t=f0(e).toLowerCase();d0.hasOwnProperty(t)&&!cx.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(h0(e))}};function ST(n,e){return(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function wT(n){let e=n.nextSibling;if(e&&n!==e.previousSibling)throw fx(e);return e}function TT(n){let e=n.firstChild;if(e&&ST(n,e))throw fx(e);return e}function f0(n){let e=n.nodeName;return typeof e=="string"?e:"FORM"}function fx(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var CT=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,DT=/([^\#-~ |!])/g;function h0(n){return n.replace(/&/g,"&amp;").replace(CT,function(e){let t=e.charCodeAt(0),i=e.charCodeAt(1);return"&#"+((t-55296)*1024+(i-56320)+65536)+";"}).replace(DT,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var du;function Km(n,e){let t=null;try{du=du||pT(n);let i=e?String(e):"";t=du.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=t.innerHTML,t=du.getInertBodyElement(i)}while(i!==o);let a=new gm().sanitizeChildren(p0(t)||t);return Lu(a)}finally{if(t){let i=p0(t)||t;for(;i.firstChild;)i.firstChild.remove()}}}function p0(n){return"content"in n&&IT(n)?n.content:null}function IT(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var wn=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(wn||{});var AT=/^>|^->|<!--|-->|--!>|<!-$/g,RT=/(<|>)/g,NT="\u200B$1\u200B";function PT(n){return n.replace(AT,e=>e.replace(RT,NT))}function OT(n){return n instanceof Function?n():n}function LT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var hx="ng-template";function FT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&LT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Jm(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Jm(n){return n.type===4&&n.value!==hx}function kT(n,e,t){let i=n.type===4&&!t?hx:n.value;return e===i}function UT(n,e,t){let i=4,r=n.attrs,o=r!==null?HT(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!Ei(i)&&!Ei(c))return!1;if(s&&Ei(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!kT(n,c,t)||c===""&&e.length===1){if(Ei(i))return!1;s=!0}}else if(i&8){if(r===null||!FT(n,r,c,t)){if(Ei(i))return!1;s=!0}}else{let l=e[++a],u=BT(c,r,Jm(n),t);if(u===-1){if(Ei(i))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Ei(i))return!1;s=!0}}}}return Ei(i)||s}function Ei(n){return(n&1)===0}function BT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return zT(e,n)}function px(n,e,t=!1){for(let i=0;i<e.length;i++)if(UT(n,e[i],t))return!0;return!1}function VT(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function HT(n){for(let e=0;e<n.length;e++){let t=n[e];if(V0(t))return e}return n.length}function zT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function GT(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function m0(n,e){return n?":not("+e.trim()+")":e}function jT(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Ei(s)&&(e+=m0(o,r),r=""),i=s,o=o||!Ei(i);t++}return r!==""&&(e+=m0(o,r)),e}function WT(n){return n.map(jT).join(",")}function $T(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!Ei(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var Si={};function qT(n,e){return n.createText(e)}function XT(n,e,t){n.setValue(e,t)}function YT(n,e){return n.createComment(PT(e))}function mx(n,e,t){return n.createElement(e,t)}function Mu(n,e,t,i,r){n.insertBefore(e,t,i,r)}function gx(n,e,t){n.appendChild(e,t)}function g0(n,e,t,i,r){i!==null?Mu(n,e,t,i,r):gx(n,e,t)}function ZT(n,e,t){n.removeChild(null,e,t)}function KT(n,e,t){n.setAttribute(e,"style",t)}function JT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function vx(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&Gw(n,e,i),r!==null&&JT(n,e,r),o!==null&&KT(n,e,o)}function Qm(n,e,t,i,r,o,s,a,c,l,u){let d=an+i,f=d+r,h=QT(d,f),g=typeof l=="function"?l():l;return h[$e]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function QT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Si);return t}function eC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Qm(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function eg(n,e,t,i,r,o,s,a,c,l,u){let d=e.blueprint.slice();return d[yi]=r,d[Be]=i|4|128|8|64|1024,(l!==null||n&&n[Be]&2048)&&(d[Be]|=2048),Pp(d),d[en]=d[bo]=n,d[fn]=t,d[Qi]=s||n&&n[Qi],d[jt]=a||n&&n[jt],d[xo]=c||n&&n[xo]||null,d[Mn]=o,d[Da]=oT(),d[hs]=u,d[Dp]=l,d[Fn]=e.type==2?n[Fn]:d,d}function tC(n,e,t){let i=xi(e,n),r=eC(t),o=n[Qi].rendererFactory,s=tg(n,eg(n,r,null,yx(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function yx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function _x(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function tg(n,e){return n[ms]?n[Cp][ai]=e:n[ms]=e,n[Cp]=e,e}function De(n=1){xx(cn(),gt(),Ir()+n,!1)}function xx(n,e,t,i){if(!i)if((e[Be]&3)===3){let o=n.preOrderCheckHooks;o!==null&&hu(e,o,t)}else{let o=n.preOrderHooks;o!==null&&pu(e,o,0,t)}Ar(t)}var ku=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ku||{});function vm(n,e,t,i){let r=Xe(null);try{let[o,s,a]=n.inputs[t],c=null;(s&ku.SignalBased)!==0&&(c=e[o][so]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):L0(e,c,o,i)}finally{Xe(r)}}function bx(n,e,t,i,r){let o=Ir(),s=i&2;try{Ar(-1),s&&e.length>an&&xx(n,e,an,!1),Et(s?2:0,r,t),t(i,r)}finally{Ar(o),Et(s?3:1,r,t)}}function Uu(n,e,t){lC(n,e,t),(t.flags&64)===64&&uC(n,e,t)}function ng(n,e,t=xi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function nC(n,e,t,i){let o=i.get(rx,ix)||t===tr.ShadowDom,s=n.selectRootElement(e,o);return iC(s),s}function iC(n){rC(n)}var rC=()=>null;function oC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function sC(n,e,t,i,r,o){let s=e[$e];if(rg(n,s,e,t,i)){Cr(n)&&cC(e,n.index);return}aC(n,e,t,i,r,o)}function aC(n,e,t,i,r,o){if(n.type&3){let s=xi(n,e);t=oC(t),i=o!=null?o(i,n.value||"",t):i,r.setProperty(s,t,i)}else n.type&12}function cC(n,e){let t=bi(e,n);t[Be]&16||(t[Be]|=64)}function lC(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Cr(t)&&tC(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||j0(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=bu(e,n,s,t);if(Es(c,e),o!==null&&pC(e,s-i,c,a,t,o),So(a)){let l=bi(t.index,e);l[fn]=bu(e,n,s,t)}}}function uC(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=Z_();try{Ar(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];ru(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&dC(c,l)}}finally{Ar(-1),ru(s)}}function dC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function ig(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];px(e,o.selectors,!1)&&(i??=[],So(o)?i.unshift(o):i.push(o))}return i}function fC(n,e,t,i,r,o){let s=xi(n,e);hC(e[jt],s,o,n.value,t,i,r)}function hC(n,e,t,i,r,o,s){if(o==null)n.removeAttribute(e,r,t);else{let a=s==null?Gl(o):s(o,i||"",r);n.setAttribute(e,r,a,t)}}function pC(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];vm(i,t,c,l)}}function mC(n,e){let t=n[xo];if(!t)return;t.get(Li,null)?.(e)}function rg(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];vm(d,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];vm(u,l,i,r),a=!0}return a}function gC(n,e){let t=bi(e,n),i=t[$e];vC(i,t);let r=t[yi];r!==null&&t[hs]===null&&(t[hs]=ox(r,t[xo])),Et(18),og(i,t,t[fn]),Et(19,t[fn])}function vC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function og(n,e,t){su(e);try{let i=n.viewQuery;i!==null&&cm(1,i,t);let r=n.template;r!==null&&bx(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Oi]?.finishViewCreation(n),n.staticContentQueries&&sx(n,e),n.staticViewQueries&&cm(2,n.viewQuery,t);let o=n.components;o!==null&&yC(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Be]&=-5,au()}}function yC(n,e){for(let t=0;t<e.length;t++)gC(n,e[t])}function Ex(n,e,t,i){let r=Xe(null);try{let o=e.tView,a=n[Be]&4096?4096:16,c=eg(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[wr]=l;let u=n[Oi];return u!==null&&(c[Oi]=u.createEmbeddedView(o)),og(o,c,t),c}finally{Xe(r)}}function ym(n,e){return!e||e.firstChild===null||K0(n)}var v0=!1,_C=new Ge(""),xC;function sg(n,e){return xC(n,e)}var ki=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(ki||{});function Bu(n){return(n.flags&32)===32}function ys(n,e,t,i,r){if(i!=null){let o,s=!1;_i(i)?o=i:er(i)&&(s=!0,i=i[yi]);let a=ci(i);n===0&&t!==null?r==null?gx(e,t,a):Mu(e,t,a,r||null,!0):n===1&&t!==null?Mu(e,t,a,r||null,!0):n===2?ZT(e,a,s):n===3&&e.destroyNode(a),o!=null&&AC(e,n,o,t,r)}}function bC(n,e){Mx(n,e),e[yi]=null,e[Mn]=null}function EC(n,e,t,i,r,o){i[yi]=r,i[Mn]=e,Hu(n,i,t,1,r,o)}function Mx(n,e){e[Qi].changeDetectionScheduler?.notify(9),Hu(n,e,e[jt],2,null,null)}function MC(n){let e=n[ms];if(!e)return em(n[$e],n);for(;e;){let t=null;if(er(e))t=e[ms];else{let i=e[Sn];i&&(t=i)}if(!t){for(;e&&!e[ai]&&e!==n;)er(e)&&em(e[$e],e),e=e[en];e===null&&(e=n),er(e)&&em(e[$e],e),t=e&&e[ai]}e=t}}function ag(n,e){let t=n[Mo],i=t.indexOf(e);t.splice(i,1)}function Sx(n,e){if(wo(e))return;let t=e[jt];t.destroyNode&&Hu(n,e,t,3,null,null),MC(e)}function em(n,e){if(wo(e))return;let t=Xe(null);try{e[Be]&=-129,e[Be]|=256,e[Xn]&&ol(e[Xn]),wC(n,e),SC(n,e),e[$e].type===1&&e[jt].destroy();let i=e[wr];if(i!==null&&_i(e[en])){i!==e[en]&&ag(i,e);let r=e[Oi];r!==null&&r.detachView(n)}sm(e)}finally{Xe(t)}}function SC(n,e){let t=n.cleanup,i=e[ps];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[ps]=null);let r=e[Ji];if(r!==null){e[Ji]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[Ia];if(o!==null){e[Ia]=null;for(let s of o)s.destroy()}}function wC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof za)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];Et(4,a,c);try{c.call(a)}finally{Et(5,a,c)}}else{Et(4,r,o);try{o.call(r)}finally{Et(5,r,o)}}}}}function wx(n,e,t){return TC(n,e.parent,t)}function TC(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[yi];if(Cr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===tr.None||r===tr.Emulated)return null}return xi(i,t)}function Tx(n,e,t){return DC(n,e,t)}function CC(n,e,t){return n.type&40?xi(n,t):null}var DC=CC,y0;function Vu(n,e,t,i){let r=wx(n,i,e),o=e[jt],s=i.parent||e[Mn],a=Tx(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)g0(o,r,t[c],a,!1);else g0(o,r,t,a,!1);y0!==void 0&&y0(o,i,e,t,r)}function Va(n,e){if(e!==null){let t=e.type;if(t&3)return xi(e,n);if(t&4)return _m(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Va(n,i);{let r=n[e.index];return _i(r)?_m(-1,r):ci(r)}}else{if(t&128)return Va(n,e.next);if(t&32)return sg(e,n)()||ci(n[e.index]);{let i=Cx(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Mr(n[Fn]);return Va(r,i)}else return Va(n,e.next)}}}return null}function Cx(n,e){if(e!==null){let i=n[Fn][Mn],r=e.projection;return i.projection[r]}return null}function _m(n,e){let t=Sn+n+1;if(t<e.length){let i=e[t],r=i[$e].firstChild;if(r!==null)return Va(i,r)}return e[Tr]}function cg(n,e,t,i,r,o,s){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(s&&e===0&&(a&&Es(ci(a),i),t.flags|=2),!Bu(t))if(c&8)cg(n,e,t.child,i,r,o,!1),ys(e,n,r,a,o);else if(c&32){let l=sg(t,i),u;for(;u=l();)ys(e,n,r,u,o);ys(e,n,r,a,o)}else c&16?Dx(n,e,i,t,r,o):ys(e,n,r,a,o);t=s?t.projectionNext:t.next}}function Hu(n,e,t,i,r,o){cg(t,i,n.firstChild,e,r,o,!1)}function IC(n,e,t){let i=e[jt],r=wx(n,t,e),o=t.parent||e[Mn],s=Tx(o,t,e);Dx(i,0,e,t,r,s)}function Dx(n,e,t,i,r,o){let s=t[Fn],c=s[Mn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ys(e,n,r,u,o)}else{let l=c,u=s[en];K0(i)&&(l.flags|=128),cg(n,e,l,u,r,o,!0)}}function AC(n,e,t,i,r){let o=t[Tr],s=ci(t);o!==s&&ys(e,n,i,o,r);for(let a=Sn;a<t.length;a++){let c=t[a];Hu(c[$e],c,n,e,i,o)}}function RC(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let o=i.indexOf("-")===-1?void 0:ki.DashCase;r==null?n.removeStyle(t,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ki.Important),n.setStyle(t,i,r,o))}}function Ga(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(ci(o)),_i(o)&&Ix(o,i);let s=t.type;if(s&8)Ga(n,e,t.child,i);else if(s&32){let a=sg(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=Cx(e,t);if(Array.isArray(a))i.push(...a);else{let c=Mr(e[Fn]);Ga(c[$e],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Ix(n,e){for(let t=Sn;t<n.length;t++){let i=n[t],r=i[$e].firstChild;r!==null&&Ga(i[$e],i,r,e)}n[Tr]!==n[yi]&&e.push(n[Tr])}function Ax(n){if(n[Yl]!==null){for(let e of n[Yl])e.impl.addSequence(e);n[Yl].length=0}}var Rx=[];function NC(n){return n[Xn]??PC(n)}function PC(n){let e=Rx.pop()??Object.create(LC);return e.lView=n,e}function OC(n){n.lView[Xn]!==n&&(n.lView=null,Rx.push(n))}var LC=Xt(at({},pa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Pa(n.lView)},consumerOnSignalRead(){this.lView[Xn]=this}});function FC(n){let e=n[Xn]??Object.create(kC);return e.lView=n,e}var kC=Xt(at({},pa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Mr(n.lView);for(;e&&!Nx(e[$e]);)e=Mr(e);e&&Op(e)},consumerOnSignalRead(){this.lView[Xn]=this}});function Nx(n){return n.type!==2}function Px(n){if(n[Ia]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Ia])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Be]&8192)}}var UC=100;function lg(n,e=0){let i=n[Qi].rendererFactory,r=!1;r||i.begin?.();try{BC(n,e)}finally{r||i.end?.()}}function BC(n,e){let t=Hp();try{zp(!0),xm(n,e);let i=0;for(;Na(n);){if(i===UC)throw new Ne(103,!1);i++,xm(n,1)}}finally{zp(t)}}function Ox(n,e){Vp(e?Oa.Exhaustive:Oa.OnlyDirtyViews);try{lg(n)}finally{Vp(Oa.Off)}}function VC(n,e,t,i){if(wo(e))return;let r=e[Be],o=!1,s=!1;su(e);let a=!0,c=null,l=null;o||(Nx(n)?(l=NC(e),c=ma(l)):Rh()===null?(a=!1,l=FC(e),c=ma(l)):e[Xn]&&(ol(e[Xn]),e[Xn]=null));try{Pp(e),q_(n.bindingStartIndex),t!==null&&bx(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&hu(e,h,null)}else{let h=n.preOrderHooks;h!==null&&pu(e,h,0,null),Jp(e,0)}if(s||HC(e),Px(e),Lx(e,0),n.contentQueries!==null&&sx(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&hu(e,h)}else{let h=n.contentHooks;h!==null&&pu(e,h,1),Jp(e,1)}GC(n,e);let d=n.components;d!==null&&kx(e,d,0);let f=n.viewQuery;if(f!==null&&cm(2,f,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&hu(e,h)}else{let h=n.viewHooks;h!==null&&pu(e,h,2),Jp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Xl]){for(let h of e[Xl])h();e[Xl]=null}o||(Ax(e),e[Be]&=-73)}catch(u){throw o||Pa(e),u}finally{l!==null&&(il(l,c),a&&OC(l)),au()}}function Lx(n,e){for(let t=Q0(n);t!==null;t=ex(t))for(let i=Sn;i<t.length;i++){let r=t[i];Fx(r,e)}}function HC(n){for(let e=Q0(n);e!==null;e=ex(e)){if(!(e[Be]&2))continue;let t=e[Mo];for(let i=0;i<t.length;i++){let r=t[i];Op(r)}}}function zC(n,e,t){Et(18);let i=bi(e,n);Fx(i,t),Et(19,i[fn])}function Fx(n,e){Jl(n)&&xm(n,e)}function xm(n,e){let i=n[$e],r=n[Be],o=n[Xn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&rl(o)),s||=!1,o&&(o.dirty=!1),n[Be]&=-9217,s)VC(i,n,i.template,n[fn]);else if(r&8192){let a=Xe(null);try{Px(n),Lx(n,1);let c=i.components;c!==null&&kx(n,c,1),Ax(n)}finally{Xe(a)}}}function kx(n,e,t){for(let i=0;i<e.length;i++)zC(n,e[i],t)}function GC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ar(~r);else{let o=r,s=t[++i],a=t[++i];Y_(s,o);let c=e[o];Et(24,c),a(2,c),Et(25,c)}}}finally{Ar(-1)}}function ug(n,e){let t=Hp()?64:1088;for(n[Qi].changeDetectionScheduler?.notify(e);n;){n[Be]|=t;let i=Mr(n);if(gs(n)&&!i)return n;n=i}return null}function Ux(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Bx(n,e,t,i=!0){let r=e[$e];if(jC(r,e,n,t),i){let s=_m(t,n),a=e[jt],c=a.parentNode(n[Tr]);c!==null&&EC(r,n[Mn],a,e,c,s)}let o=e[hs];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function bm(n,e){if(n.length<=Sn)return;let t=Sn+e,i=n[t];if(i){let r=i[wr];r!==null&&r!==n&&ag(r,i),e>0&&(n[t-1][ai]=i[ai]);let o=Sa(n,Sn+e);bC(i[$e],i);let s=o[Oi];s!==null&&s.detachView(o[$e]),i[en]=null,i[ai]=null,i[Be]&=-129}return i}function jC(n,e,t,i){let r=Sn+i,o=t.length;i>0&&(t[r-1][ai]=e),i<o-Sn?(e[ai]=t[r],bp(t,Sn+i,e)):(t.push(e),e[ai]=null),e[en]=t;let s=e[wr];s!==null&&t!==s&&Vx(s,e);let a=e[Oi];a!==null&&a.insertView(n),Ql(e),e[Be]|=128}function Vx(n,e){let t=n[Mo],i=e[en];if(er(i))n[Be]|=2;else{let r=i[en][Fn];e[Fn]!==r&&(n[Be]|=2)}t===null?n[Mo]=[e]:t.push(e)}var Rr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[$e];return Ga(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[fn]}set context(e){this._lView[fn]=e}get destroyed(){return wo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[en];if(_i(e)){let t=e[Aa],i=t?t.indexOf(this):-1;i>-1&&(bm(e,i),Sa(t,i))}this._attachedToViewContainer=!1}Sx(this._lView[$e],this._lView)}onDestroy(e){Lp(this._lView,e)}markForCheck(){ug(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Be]&=-129}reattach(){Ql(this._lView),this._lView[Be]|=128}detectChanges(){this._lView[Be]|=1024,lg(this._lView)}checkNoChanges(){return;try{this.exhaustive??=this._lView[xo].get(_C,v0)}catch{this.exhaustive=v0}}attachToViewContainerRef(){if(this._appRef)throw new Ne(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=gs(this._lView),t=this._lView[wr];t!==null&&!e&&ag(t,this._lView),Mx(this._lView[$e],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ne(902,!1);this._appRef=e;let t=gs(this._lView),i=this._lView[wr];i!==null&&!t&&Vx(i,this._lView),Ql(this._lView)}};var Ui=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=WC;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=Ex(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Rr(o)}}return n})();function WC(){return zu(Yn(),gt())}function zu(n,e){return n.type&4?new Ui(e,n,bs(n,e)):null}function Ya(n,e,t,i,r){let o=n.data[e];if(o===null)o=$C(n,e,t,i,r),X_()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=j_();o.injectorIndex=s===null?-1:s.injectorIndex}return Dr(o,!0),o}function $C(n,e,t,i,r){let o=Bp(),s=tu(),a=s?o:o&&o.parent,c=n.data[e]=XC(n,a,t,e,i,r);return qC(n,c,o,s),c}function qC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function XC(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return Up()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var HV=new RegExp(`^(\\d+)*(${lT}|${cT})*(.*)`);var YC=()=>null;function Em(n,e){return YC(n,e)}var Hx=class{},Gu=class{},Mm=class{resolveComponentFactory(e){throw new Ne(917,!1)}},Za=class{static NULL=new Mm},Do=class{};var zx=(()=>{class n{static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>null})}return n})();var gu={},Sm=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,gu,i);return r!==gu||t===gu?r:this.parentInjector.get(e,t,i)}};function wm(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=Bl(r,a);else if(o==2){let c=a,l=e[++s];i=Bl(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function dt(n,e=0){let t=gt();if(t===null)return ke(n,e);let i=Yn();return X0(i,t,$n(n),e)}function dg(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}JC(n,e,t,a,o,c,l)}o!==null&&i!==null&&ZC(t,i,o)}function ZC(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new Ne(-301,!1);i.push(e[r],o)}}function KC(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function JC(n,e,t,i,r,o,s){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&So(h)&&(c=!0,KC(n,t,f)),Yw(j0(t,e),n,h.type)}rD(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=_x(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Nu(t.mergedAttrs,h.hostAttrs),eD(n,t,e,d,h),iD(d,h,r),s!==null&&s.has(h)){let[y,m]=s.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}QC(n,t,o)}function QC(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))_0(0,e,r,i),_0(1,e,r,i),b0(e,i,!1);else{let o=t.get(r);x0(0,e,o,i),x0(1,e,o,i),b0(e,i,!0)}}}function _0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),Gx(e,o)}}function x0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Gx(e,s)}}function Gx(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function b0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||Jm(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function eD(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=po(r.type,!0)),s=new za(o,So(r),dt);n.blueprint[i]=s,t[i]=s,tD(n,e,i,_x(n,t,r.hostVars,Si),r)}function tD(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;nD(s)!=a&&s.push(a),s.push(t,i,o)}}function nD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function iD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;So(e)&&(t[""]=n)}}function rD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function jx(n,e,t,i,r,o,s,a){let c=e.consts,l=To(c,s),u=Ya(e,n,2,i,l);return o&&dg(e,t,u,To(c,a),r),u.mergedAttrs=Nu(u.mergedAttrs,u.attrs),u.attrs!==null&&wm(u,u.attrs,!1),u.mergedAttrs!==null&&wm(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function Wx(n,e){Vm(n,e),Zl(e)&&n.queries.elementEnd(e)}function fg(n){return qx(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function $x(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function qx(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function oD(n,e,t){return n[e]=t}function Ss(n,e,t){if(t===Si)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function tm(n,e,t){return function i(r){let o=Cr(n)?bi(n.index,e):e;ug(o,5);let s=e[fn],a=E0(e,s,t,r),c=i.__ngNextListenerFn__;for(;c;)a=E0(e,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function E0(n,e,t,i){let r=Xe(null);try{return Et(6,e,t),t(i)!==!1}catch(o){return mC(n,o),!1}finally{Et(7,e,t),Xe(r)}}function sD(n,e,t,i,r,o,s,a){let c=Ra(n),l=!1,u=null;if(!i&&c&&(u=aD(e,t,o,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=xi(n,t),f=i?i(d):d;dT(t,f,o,a);let h=r.listen(f,o,a),g=i?y=>i(ci(y[n.index])):n.index;Xx(g,e,t,o,a,h,!1)}return l}function aD(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[ps],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function Xx(n,e,t,i,r,o,s){let a=e.firstCreatePass?kp(e):null,c=Fp(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function M0(n,e,t,i,r,o){let s=e[t],a=e[$e],l=a.data[t].outputs[i],d=s[l].subscribe(o);Xx(n.index,a,e,r,o,d,!0)}var Tm=Symbol("BINDING");var Su=class extends Za{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=_o(e);return new ja(t,this.ngModule)}};function cD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&ku.SignalBased)!==0};return r&&(o.transform=r),o})}function lD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function uD(n,e,t){let i=e instanceof qn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Sm(t,i):t}function dD(n){let e=n.get(Do,null);if(e===null)throw new Ne(407,!1);let t=n.get(zx,null),i=n.get(go,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function fD(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return mx(e,t,t==="svg"?Ip:t==="math"?P_:null)}var ja=class extends Gu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=cD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=lD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=WT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){Et(22);let a=Xe(null);try{let c=this.componentDef,l=hD(i,c,s,o),u=uD(c,r||this.ngModule,e),d=dD(u),f=d.rendererFactory.createRenderer(null,c),h=i?nC(f,i,c.encapsulation,u):fD(c,f),g=s?.some(S0)||o?.some(p=>typeof p!="function"&&p.bindings.some(S0)),y=eg(null,l,null,512|yx(c),null,null,d,f,u,null,ox(h,u,!0));y[an]=h,su(y);let m=null;try{let p=jx(an,l,y,"#host",()=>l.directiveRegistry,!0,0);h&&(vx(f,h,p),Es(h,y)),Uu(l,y,p),Wm(l,p,y),Wx(l,p),t!==void 0&&mD(p,this.ngContentSelectors,t),m=bi(p.index,y),y[fn]=m[fn],og(l,y,null)}catch(p){throw m!==null&&sm(m),sm(y),p}finally{Et(23),au()}return new wu(this.componentType,y,!!g)}finally{Xe(a)}}};function hD(n,e,t,i){let r=n?["ng-version","20.0.2"]:$T(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[Tm].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Tm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Sp(d);c.push(f)}return Qm(0,null,pD(o,s),1,a,c,null,null,null,[r],null)}function pD(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function S0(n){let e=n[Tm].kind;return e==="input"||e==="twoWay"}var wu=class extends Hx{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Kl(t[$e],an),this.location=bs(this._tNode,t),this.instance=bi(this._tNode.index,t)[fn],this.hostView=this.changeDetectorRef=new Rr(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=rg(i,r[$e],r,e,t);this.previousInputValues.set(e,t);let s=bi(i.index,r);ug(s,1)}get injector(){return new Co(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function mD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Bi=(()=>{class n{static __NG_ELEMENT_ID__=gD}return n})();function gD(){let n=Yn();return Zx(n,gt())}var vD=Bi,Yx=class extends vD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return bs(this._hostTNode,this._hostLView)}get injector(){return new Co(this._hostTNode,this._hostLView)}get parentInjector(){let e=Hm(this._hostTNode,this._hostLView);if(H0(e)){let t=_u(e,this._hostLView),i=yu(e),r=t[$e].data[i+8];return new Co(r,t)}else return new Co(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=w0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Sn}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Em(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,ym(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!Lw(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new ja(_o(e)),d=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?d:this.parentInjector).get(qn,null);p&&(o=p)}let f=_o(u.componentType??{}),h=Em(this._lContainer,f?.id??null),g=h?.firstChild??null,y=u.create(d,r,g,o,s,a);return this.insertImpl(y.hostView,l,ym(this._hostTNode,h)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(L_(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[en],l=new Yx(c,c[Mn],c[en]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return Bx(s,r,o,i),e.attachToViewContainerRef(),bp(nm(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=w0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=bm(this._lContainer,t);i&&(Sa(nm(this._lContainer),t),Sx(i[$e],i))}detach(e){let t=this._adjustIndex(e,-1),i=bm(this._lContainer,t);return i&&Sa(nm(this._lContainer),t)!=null?new Rr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function w0(n){return n[Aa]}function nm(n){return n[Aa]||(n[Aa]=[])}function Zx(n,e){let t,i=e[n.index];return _i(i)?t=i:(t=Ux(i,e,null,n),e[n.index]=t,tg(e,t)),_D(t,e,n,i),new Yx(t,n,e)}function yD(n,e){let t=n[jt],i=t.createComment(""),r=xi(e,n),o=t.parentNode(r);return Mu(t,o,i,t.nextSibling(r),!1),i}var _D=ED,xD=()=>!1;function bD(n,e,t){return xD(n,e,t)}function ED(n,e,t,i){if(n[Tr])return;let r;t.type&8?r=ci(i):r=yD(e,t),n[Tr]=r}var Cm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Dm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)hg(e,t).matches!==null&&this.queries[t].setDirty()}},Im=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=AD(e):this.predicate=e}},Am=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Rm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,MD(t,o)),this.matchTNodeWithReadOption(e,t,mu(t,e,o,!1,!1))}else i===Ui?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,mu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===ir||r===Bi||r===Ui&&t.type&4)this.addMatch(t.index,-2);else{let o=mu(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function MD(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function SD(n,e){return n.type&11?bs(n,e):n.type&4?zu(n,e):null}function wD(n,e,t,i){return t===-1?SD(e,n):t===-2?TD(n,e,i):bu(n,n[$e],t,e)}function TD(n,e,t){if(t===ir)return bs(e,n);if(t===Ui)return zu(e,n);if(t===Bi)return Zx(e,n)}function Kx(n,e,t,i){let r=e[Oi].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(wD(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Nm(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=Kx(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let d=Sn;d<u.length;d++){let f=u[d];f[wr]===f[en]&&Nm(f[$e],f,l,i)}if(u[Mo]!==null){let d=u[Mo];for(let f=0;f<d.length;f++){let h=d[f];Nm(h[$e],h,l,i)}}}}}return i}function CD(n,e){return n[Oi].queries[e].queryList}function DD(n,e,t){let i=new Eu((t&4)===4);return U_(n,e,i,i.destroy),(e[Oi]??=new Dm).queries.push(new Cm(i))-1}function ID(n,e,t){let i=cn();return i.firstCreatePass&&(RD(i,new Im(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),DD(i,gt(),e)}function AD(n){return n.split(",").map(e=>e.trim())}function RD(n,e,t){n.queries===null&&(n.queries=new Am),n.queries.track(new Rm(e,t))}function hg(n,e){return n.queries.getByIndex(e)}function ND(n,e){let t=n[$e],i=hg(t,e);return i.crossesNgTemplate?Nm(t,n,e,[]):Kx(t,n,i,e)}var T0=new Set;function Jx(n){T0.has(n)||(T0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Nr=class{};function pg(n,e){return new Tu(n,e??null,[])}var Tu=class extends Nr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Su(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=w_(e);this._bootstrapComponents=OT(o.bootstrap),this._r3Injector=Xp(e,t,[{provide:Nr,useValue:this},{provide:Za,useValue:this.componentFactoryResolver},...i],Pn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}};var Wa=class extends Nr{injector;componentFactoryResolver=new Su(this);instance=null;constructor(e){super();let t=new mo([...e.providers,{provide:Nr,useValue:this},{provide:Za,useValue:this.componentFactoryResolver}],e.parent||Ta(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Qx(n,e,t=null){return new Wa({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var PD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=wp(!1,t.type),r=i.length>0?Qx([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ve({token:n,providedIn:"environment",factory:()=>new n(ke(qn))})}return n})();function rt(n){return qa(()=>{let e=eb(n),t=Xt(at({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Gm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(PD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||tr.Emulated,styles:n.styles||On,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Jx("NgStandalone"),tb(t);let i=n.dependencies;return t.directiveDefs=C0(i,!1),t.pipeDefs=C0(i,!0),t.id=UD(t),t})}function OD(n){return _o(n)||Sp(n)}function LD(n){return n!==null}function Zn(n){return qa(()=>({type:n.type,bootstrap:n.bootstrap||On,declarations:n.declarations||On,imports:n.imports||On,exports:n.exports||On,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function FD(n,e){if(n==null)return yo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=ku.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function kD(n){if(n==null)return yo;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Vi(n){return qa(()=>{let e=eb(n);return tb(e),e})}function mg(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function eb(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||yo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||On,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:FD(n.inputs,e),outputs:kD(n.outputs),debugInfo:null}}function tb(n){n.features?.forEach(e=>e(n))}function C0(n,e){if(!n)return null;let t=e?T_:OD;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(LD)}function UD(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function BD(n,e,t,i,r,o,s,a,c){let l=e.consts,u=Ya(e,n,4,s||null,a||null);eu()&&dg(e,t,u,To(l,c),ig),u.mergedAttrs=Nu(u.mergedAttrs,u.attrs),Vm(e,u);let d=u.tView=Qm(2,u,i,r,o,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function nb(n,e,t,i,r,o,s,a,c,l,u){let d=t+an,f=e.firstCreatePass?BD(d,e,n,i,r,o,s,a,l):e.data[d];c&&(f.flags|=c),Dr(f,!1);let h=VD(e,n,f,t);La()&&Vu(e,n,h,f),Es(h,n);let g=Ux(h,n,h,f);return n[d]=g,tg(n,g),bD(g,f,n),Ra(f)&&Uu(e,n,f),l!=null&&ng(n,f,u),f}function Dt(n,e,t,i,r,o,s,a){let c=gt(),l=cn(),u=To(l.consts,o);return nb(c,l,n,e,t,i,r,u,void 0,s,a),Dt}var VD=HD;function HD(n,e,t,i){return Fa(!0),e[jt].createComment("")}var gg=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(gg||{}),Ka=new Ge(""),ib=!1,Pm=class extends si{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,R_()&&(this.destroyRef=pe(ka,{optional:!0})??void 0,this.pendingTasks=pe(vs,{optional:!0})??void 0)}emit(e){let t=Xe(null);try{super.next(e)}finally{Xe(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof Ft&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},kn=Pm;function rb(n){let e,t;function i(){n=Ba;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function D0(n){return queueMicrotask(()=>n()),()=>{n=Ba}}var vg="isAngularZone",Cu=vg+"_ID",zD=0,Rt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new kn(!1);onMicrotaskEmpty=new kn(!1);onStable=new kn(!1);onError=new kn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ib}=e;if(typeof Zone>"u")throw new Ne(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,WD(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(vg)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ne(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ne(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,GD,Ba,Ba);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},GD={};function yg(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function jD(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){rb(()=>{n.callbackScheduled=!1,Om(n),n.isCheckStableRunning=!0,yg(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Om(n)}function WD(n){let e=()=>{jD(n)},t=zD++;n._inner=n._inner.fork({name:"angular",properties:{[vg]:!0,[Cu]:t,[Cu+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if($D(c))return i.invokeTask(o,s,a,c);try{return I0(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),A0(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return I0(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!qD(c)&&e(),A0(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Om(n),yg(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Om(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function I0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function A0(n){n._nesting--,yg(n)}var Du=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new kn;onMicrotaskEmpty=new kn;onStable=new kn;onError=new kn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function $D(n){return ob(n,"__ignore_ng_zone__")}function qD(n){return ob(n,"__scheduler_tick__")}function ob(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var sb=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ve({token:n,providedIn:"root",factory:()=>new n})}return n})();var _g=new Ge("");function Ja(n){return!!n&&typeof n.then=="function"}function ju(n){return!!n&&typeof n.subscribe=="function"}var ab=new Ge("");var xg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=pe(ab,{optional:!0})??[];injector=pe(Pi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=Ca(this.injector,r);if(Ja(o))t.push(o);else if(ju(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cb=new Ge("");function lb(){Fh(()=>{let n="";throw new Ne(600,n)})}function ub(n){return n.isBoundToModule}var XD=10;var ws=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=pe(Li);afterRenderManager=pe(sb);zonelessEnabled=pe(Ua);rootEffectScheduler=pe(Kp);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new si;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=pe(vs);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Ut(t=>!t))}constructor(){pe(Ka,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=pe(qn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Pi.NULL){return this._injector.get(Rt).run(()=>{Et(10);let s=t instanceof Gu;if(!this._injector.get(xg).done){let g="";throw new Ne(405,g)}let c;s?c=t:c=this._injector.get(Za).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=ub(c)?void 0:this._injector.get(Nr),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(_g,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Ha(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),Et(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Et(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(gg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ne(101,!1);let t=Xe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Xe(t),this.afterTick.next(),Et(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Do,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<XD;)Et(14),this.synchronizeOnce(),Et(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Na(r))continue;let o=i&&!this.zonelessEnabled?0:1;lg(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Na(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ha(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(cb,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ha(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ne(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ha(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function hn(n,e,t,i){let r=gt(),o=iu();if(Ss(r,o,e)){let s=cn(),a=qp();fC(a,r,n,e,t,i)}return hn}function je(n,e,t){let i=gt(),r=iu();if(Ss(i,r,e)){let o=cn(),s=qp();sC(s,i,n,e,i[jt],t)}return je}function Lm(n,e,t,i,r){rg(e,n,t,r?"class":"style",i)}function ie(n,e,t,i){let r=gt(),o=cn(),s=an+n,a=r[jt],c=o.firstCreatePass?jx(s,o,r,e,ig,eu(),t,i):o.data[s],l=YD(o,r,c,a,e,n);r[s]=l;let u=Ra(c);return Dr(c,!0),vx(a,l,c),!Bu(c)&&La()&&Vu(o,r,l,c),(B_()===0||u)&&Es(l,r),V_(),u&&(Uu(o,r,c),Wm(o,c,r)),i!==null&&ng(r,c),ie}function ae(){let n=Yn();tu()?nu():(n=n.parent,Dr(n,!1));let e=n;z_(e)&&G_(),H_();let t=cn();return t.firstCreatePass&&Wx(t,e),e.classesWithoutHost!=null&&Hw(e)&&Lm(t,e,gt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&zw(e)&&Lm(t,e,gt(),e.stylesWithoutHost,!1),ae}function Ht(n,e,t,i){return ie(n,e,t,i),ae(),Ht}var YD=(n,e,t,i,r,o)=>(Fa(!0),mx(i,r,n0()));function ZD(n,e,t,i,r){let o=e.consts,s=To(o,i),a=Ya(e,n,8,"ng-container",s);s!==null&&wm(a,s,!0);let c=To(o,r);return eu()&&dg(e,t,a,c,ig),a.mergedAttrs=Nu(a.mergedAttrs,a.attrs),e.queries!==null&&e.queries.elementStart(e,a),a}function Un(n,e,t){let i=gt(),r=cn(),o=n+an,s=r.firstCreatePass?ZD(o,r,i,e,t):r.data[o];Dr(s,!0);let a=KD(r,i,s,n);return i[o]=a,La()&&Vu(r,i,a,s),Es(a,i),Ra(s)&&(Uu(r,i,s),Wm(r,s,i)),t!=null&&ng(i,s),Un}function Bn(){let n=Yn(),e=cn();return tu()?nu():(n=n.parent,Dr(n,!1)),e.firstCreatePass&&(Vm(e,n),Zl(n)&&e.queries.elementEnd(n)),Bn}function Ts(n,e,t){return Un(n,e,t),Bn(),Ts}var KD=(n,e,t,i)=>(Fa(!0),YT(e[jt],""));function Tn(){return gt()}var Qa="en-US";var JD=Qa;function db(n){typeof n=="string"&&(JD=n.toLowerCase().replace(/_/g,"-"))}function Nt(n,e,t){let i=gt(),r=cn(),o=Yn();return QD(r,i,i[jt],o,n,e,t),Nt}function QD(n,e,t,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=tm(i,e,o),sD(i,n,e,s,t,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=tm(i,e,o),M0(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=tm(i,e,o),M0(i,e,d,r,r,c)}}function Je(n=1){return t0(n)}function eI(n,e){let t=null,i=VT(n);for(let r=0;r<e.length;r++){let o=e[r];if(o==="*"){t=r;continue}if(i===null?px(n,o,!0):GT(i,o))return r}return t}function bg(n){let e=gt()[Fn][Mn];if(!e.projection){let t=n?n.length:1,i=e.projection=M_(t,null),r=i.slice(),o=e.child;for(;o!==null;){if(o.type!==128){let s=n?eI(o,n):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function Eg(n,e=0,t,i,r,o){let s=gt(),a=cn(),c=i?n+1:null;c!==null&&nb(s,a,c,i,r,o,null,t);let l=Ya(a,an+n,16,null,t||null);l.projection===null&&(l.projection=e),nu();let d=!s[hs]||Up();s[Fn][Mn].projection[l.projection]===null&&c!==null?tI(s,a,c):d&&!Bu(l)&&IC(a,s,l)}function tI(n,e,t){let i=an+t,r=e.data[i],o=n[i],s=Em(o,r.tView.ssrId),a=Ex(n,r,void 0,{dehydratedView:s});Bx(o,a,0,ym(r,s))}function ec(n,e,t){ID(n,e,t)}function tc(n){let e=gt(),t=cn(),i=jp();ou(i+1);let r=hg(t,i);if(n.dirty&&O_(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=ND(e,i);n.reset(o,nT),n.notifyOnChanges()}return!0}return!1}function nc(){return CD(gt(),jp())}function Mg(n){let e=W_();return Rp(e,an+n)}function fu(n,e){return n<<17|e<<2}function Io(n){return n>>17&32767}function nI(n){return(n&2)==2}function iI(n,e){return n&131071|e<<17}function Fm(n){return n|2}function xs(n){return(n&131068)>>2}function im(n,e){return n&-131069|e<<2}function rI(n){return(n&1)===1}function km(n){return n|1}function oI(n,e,t,i,r,o){let s=o?e.classBindings:e.styleBindings,a=Io(s),c=xs(s);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||fs(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Io(n[a+1]);n[i+1]=fu(f,a),f!==0&&(n[f+1]=im(n[f+1],i)),n[a+1]=iI(n[a+1],i)}else n[i+1]=fu(a,0),a!==0&&(n[a+1]=im(n[a+1],i)),a=i;else n[i+1]=fu(c,0),a===0?a=i:n[c+1]=im(n[c+1],i),c=i;l&&(n[i+1]=Fm(n[i+1])),R0(n,u,i,!0),R0(n,u,i,!1),sI(e,u,n,i,o),s=fu(a,c),o?e.classBindings=s:e.styleBindings=s}function sI(n,e,t,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&fs(o,e)>=0&&(t[i+1]=km(t[i+1]))}function R0(n,e,t,i){let r=n[t+1],o=e===null,s=i?Io(r):xs(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];aI(c,e)&&(a=!0,n[s+1]=i?km(l):Fm(l)),s=i?Io(l):xs(l)}a&&(n[t+1]=i?Fm(r):km(r))}function aI(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?fs(n,e)>=0:!1}var Mi={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function cI(n){return n.substring(Mi.key,Mi.keyEnd)}function lI(n){return uI(n),fb(n,hb(n,0,Mi.textEnd))}function fb(n,e){let t=Mi.textEnd;return t===e?-1:(e=Mi.keyEnd=dI(n,Mi.key=e,t),hb(n,e,t))}function uI(n){Mi.key=0,Mi.keyEnd=0,Mi.value=0,Mi.valueEnd=0,Mi.textEnd=n.length}function hb(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function dI(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function Wu(n,e,t){return pb(n,e,t,!1),Wu}function Or(n,e){return pb(n,e,null,!0),Or}function Sg(n){hI(_I,fI,n,!0)}function fI(n,e){for(let t=lI(e);t>=0;t=fb(e,t))$l(n,cI(e),!0)}function pb(n,e,t,i){let r=gt(),o=cn(),s=Gp(2);if(o.firstUpdatePass&&gb(o,n,s,i),e!==Si&&Ss(r,s,e)){let a=o.data[Ir()];vb(o,a,r,r[jt],n,r[s+1]=bI(e,t),i,s)}}function hI(n,e,t,i){let r=cn(),o=Gp(2);r.firstUpdatePass&&gb(r,null,o,i);let s=gt();if(t!==Si&&Ss(s,o,t)){let a=r.data[Ir()];if(yb(a,i)&&!mb(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(t=Bl(c,t||"")),Lm(r,a,s,t,i)}else xI(r,a,s,s[jt],s[o+1],s[o+1]=yI(n,e,t),i,o)}}function mb(n,e){return e>=n.expandoStartIndex}function gb(n,e,t,i){let r=n.data;if(r[t+1]===null){let o=r[Ir()],s=mb(n,t);yb(o,i)&&e===null&&!s&&(e=!1),e=pI(r,o,e,i),oI(r,o,e,t,s,i)}}function pI(n,e,t,i){let r=K_(n),o=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=rm(null,n,e,t,i),t=$a(t,e.attrs,i),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==r)if(t=rm(r,n,e,t,i),o===null){let c=mI(n,e,i);c!==void 0&&Array.isArray(c)&&(c=rm(null,n,e,c[1],i),c=$a(c,e.attrs,i),gI(n,e,i,c))}else o=vI(n,e,i)}return o!==void 0&&(i?e.residualClasses=o:e.residualStyles=o),t}function mI(n,e,t){let i=t?e.classBindings:e.styleBindings;if(xs(i)!==0)return n[Io(i)]}function gI(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Io(r)]=i}function vI(n,e,t){let i,r=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=$a(i,s,t)}return $a(i,e.attrs,t)}function rm(n,e,t,i,r){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],i=$a(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function $a(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),$l(n,s,t?!0:e[++o]))}return n===void 0?null:n}function yI(n,e,t){if(t==null||t==="")return On;let i=[],r=rr(t);if(Array.isArray(r))for(let o=0;o<r.length;o++)n(i,r[o],!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&n(i,o,r[o]);else typeof r=="string"&&e(i,r);return i}function _I(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&$l(n,i,t)}function xI(n,e,t,i,r,o,s,a){r===Si&&(r=On);let c=0,l=0,u=0<r.length?r[0]:null,d=0<o.length?o[0]:null;for(;u!==null||d!==null;){let f=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,g=null,y;u===d?(c+=2,l+=2,f!==h&&(g=d,y=h)):d===null||u!==null&&u<d?(c+=2,g=u):(l+=2,g=d,y=h),g!==null&&vb(n,e,t,i,g,y,s,a),u=c<r.length?r[c]:null,d=l<o.length?o[l]:null}}function vb(n,e,t,i,r,o,s,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=rI(l)?N0(c,e,t,r,xs(l),s):void 0;if(!Iu(u)){Iu(o)||nI(l)&&(o=N0(c,null,t,r,a,s));let d=Ap(Ir(),t);RC(i,s,d,r,o)}}function N0(n,e,t,i,r,o){let s=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Si&&(f=d?On:void 0);let h=d?ql(f,i):u===i?f:void 0;if(l&&!Iu(h)&&(h=ql(c,i)),Iu(h)&&(a=h,s))return a;let g=n[r+1];r=s?Io(g):xs(g)}if(e!==null){let c=o?e.residualClasses:e.residualStyles;c!=null&&(a=ql(c,i))}return a}function Iu(n){return n!==void 0}function bI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Pn(rr(n)))),n}function yb(n,e){return(n.flags&(e?8:16))!==0}function He(n,e=""){let t=gt(),i=cn(),r=n+an,o=i.firstCreatePass?Ya(i,r,1,e,null):i.data[r],s=EI(i,t,o,e,n);t[r]=s,La()&&Vu(i,t,s,o),Dr(o,!1)}var EI=(n,e,t,i,r)=>(Fa(!0),qT(e[jt],i));function MI(n,e,t,i=""){return Ss(n,iu(),t)?e+Gl(t)+i:Si}function dn(n){return ic("",n),dn}function ic(n,e,t){let i=gt(),r=MI(i,n,e,t);return r!==Si&&SI(i,Ir(),r),ic}function SI(n,e,t){let i=Ap(e,n);XT(n[jt],i,t)}function wI(n,e){let t=n[e];return t===Si?void 0:t}function TI(n,e,t,i,r,o){let s=e+t;return Ss(n,s,r)?oD(n,s+1,o?i.call(o,r):i(r)):wI(n,s+1)}function Ro(n,e){let t=cn(),i,r=n+an;t.firstCreatePass?(i=CI(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let o=i.factory||(i.factory=po(i.type,!0)),s,a=bn(dt);try{let c=xu(!1),l=o();return xu(c),Np(t,gt(),r,l),l}finally{bn(a)}}function CI(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function No(n,e,t){let i=n+an,r=gt(),o=Rp(r,i);return DI(r,i)?TI(r,$_(),e,o.transform,t,o):o.transform(t)}function DI(n,e){return n[$e].data[e].pure}function wg(n,e){return zu(n,e)}var II=(()=>{class n{zone=pe(Rt);changeDetectionScheduler=pe(go);applicationRef=pe(ws);applicationErrorHandler=pe(Li);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _b({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Rt(Xt(at({},xb()),{scheduleInRootZone:t})),[{provide:Rt,useFactory:n},{provide:Sr,multi:!0,useFactory:()=>{let i=pe(II,{optional:!0});return()=>i.initialize()}},{provide:Sr,multi:!0,useFactory:()=>{let i=pe(AI);return()=>{i.initialize()}}},e===!0?{provide:Yp,useValue:!0}:[],{provide:Zp,useValue:t??ib},{provide:Li,useFactory:()=>{let i=pe(Rt),r=pe(qn),o;return s=>{o??=r.get(En),i.runOutsideAngular(()=>o.handleError(s))}}}]}function xb(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var AI=(()=>{class n{subscription=new Ft;initialized=!1;zone=pe(Rt);pendingTasks=pe(vs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bb=(()=>{class n{applicationErrorHandler=pe(Li);appRef=pe(ws);taskService=pe(vs);ngZone=pe(Rt);zonelessEnabled=pe(Ua);tracing=pe(Ka,{optional:!0});disableScheduling=pe(Yp,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ft;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Cu):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(pe(Zp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Du||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?D0:rb;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Cu+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,D0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function RI(){return typeof $localize<"u"&&$localize.locale||Qa}var $u=new Ge("",{providedIn:"root",factory:()=>pe($u,{optional:!0,skipSelf:!0})||RI()});function qu(n){return f_(n)}var Eb=class{[so];constructor(e){this[so]=e}destroy(){this[so].destroy()}};var Yu=class{attributeName;constructor(e){this.attributeName=e}__NG_ELEMENT_ID__=()=>zm(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},$I=new Ge("");$I.__NG_ELEMENT_ID__=n=>{let e=Yn();if(e===null)throw new Ne(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Ne(204,!1)};var Tg=new Ge(""),qI=new Ge("");function rc(n){return!n.moduleRef}function XI(n){let e=rc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Rt);return t.run(()=>{rc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Li),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),rc(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Tg);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Tg);s.add(o),n.moduleRef.onDestroy(()=>{Ha(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return ZI(i,t,()=>{let o=e.get(xg);return o.runInitializers(),o.donePromise.then(()=>{let s=e.get($u,Qa);if(db(s||Qa),!e.get(qI,!0))return rc(n)?e.get(ws):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(rc(n)){let c=e.get(ws);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return YI?.(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}var YI;function ZI(n,e,t){try{let i=t();return Ja(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var Xu=null;function KI(n=[],e){return Pi.create({name:e,providers:[{provide:wa,useValue:"platform"},{provide:Tg,useValue:new Set([()=>Xu=null])},...n]})}function JI(n=[]){if(Xu)return Xu;let e=KI(n);return Xu=e,lb(),QI(e),e}function QI(n){let e=n.get(Ou,null);Ca(n,()=>{e?.forEach(t=>t())})}var Ku=(()=>{class n{static __NG_ELEMENT_ID__=eA}return n})();function eA(n){return tA(Yn(),gt(),(n&16)===16)}function tA(n,e,t){if(Cr(n)&&!t){let i=bi(n.index,e);return new Rr(i,i)}else if(n.type&175){let i=e[Fn];return new Rr(i,e)}return null}var Cg=class{constructor(){}supports(e){return fg(e)}create(e){return new Dg(e)}},nA=(n,e)=>e,Dg=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||nA}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,o=null;for(;t||i;){let s=!i||t&&t.currentIndex<Mb(i,r,o)?t:i,a=Mb(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(t=t._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<o.length?o[f]:o[f]=0,g=h+f;u<=g&&g<l&&(o[f]=h+1)}let d=s.previousIndex;o[d]=u-l}}a!==c&&e(s,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!fg(e))throw new Ne(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,o,s;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)o=e[a],s=this._trackByFn(a,o),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,o,s,a),i=!0):(i&&(t=this._verifyReinsertion(t,o,s,a)),Object.is(t.item,o)||this._addIdentityChange(t,o)),t=t._next}else r=0,$x(e,a=>{s=this._trackByFn(r,a),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,a,s,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,s,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let o;return e===null?o=this._itTail:(o=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):e=this._addAfter(new Ig(t,i),o,r)),e}_verifyReinsertion(e,t,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,o=e._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Zu),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Zu),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Ig=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},Ag=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Zu=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Ag,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Mb(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Sb(){return new Rg([new Cg])}var Rg=(()=>{class n{factories;static \u0275prov=Ve({token:n,providedIn:"root",factory:Sb});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||Sb()),deps:[[n,new Bm,new Au]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Ne(901,!1)}}return n})();function wb(n){Et(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=JI(i),o=[_b({}),{provide:go,useExisting:bb},r0,...t||[]],s=new Wa({providers:o,parent:r,debugName:"",runEnvironmentInitializers:!1});return XI({r3Injector:s.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{Et(9)}}function Ng(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var Tb=null;function Cs(){return Tb}function Pg(n){Tb??=n}var oc=class{};var sc=(()=>{class n{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletContent;ngComponentOutletNgModule;ngComponentOutletNgModuleFactory;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(t){this._viewContainerRef=t}_needToReCreateNgModuleInstance(t){return t.ngComponentOutletNgModule!==void 0||t.ngComponentOutletNgModuleFactory!==void 0}_needToReCreateComponentInstance(t){return t.ngComponentOutlet!==void 0||t.ngComponentOutletContent!==void 0||t.ngComponentOutletInjector!==void 0||this._needToReCreateNgModuleInstance(t)}ngOnChanges(t){if(this._needToReCreateComponentInstance(t)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){let i=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(t)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=pg(this.ngComponentOutletNgModule,Cb(i)):this.ngComponentOutletNgModuleFactory?this._moduleRef=this.ngComponentOutletNgModuleFactory.create(Cb(i)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:i,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(let t of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(t,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(t){for(let[i,r]of this._inputsUsed)r?(t.setInput(i,this.ngComponentOutletInputs[i]),this._inputsUsed.set(i,!1)):(t.setInput(i,void 0),this._inputsUsed.delete(i))}static \u0275fac=function(i){return new(i||n)(dt(Bi))};static \u0275dir=Vi({type:n,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},exportAs:["ngComponentOutlet"],features:[Ru]})}return n})();function Cb(n){return n.get(Nr).injector}var Ju=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Hi=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Ju(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),Db(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Db(o,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(dt(Bi),dt(Ui),dt(Rg))};static \u0275dir=Vi({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Db(n,e){n.context.$implicit=e.item}var wi=(()=>{class n{_viewContainer;_context=new Qu;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Ib(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Ib(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(dt(Bi),dt(Ui))};static \u0275dir=Vi({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Qu=class{$implicit=null;ngIf=null};function Ib(n,e){if(n&&!n.createEmbeddedView)throw new Ne(2020,!1)}var ed=class{_viewContainerRef;_templateRef;_created=!1;constructor(e,t){this._viewContainerRef=e,this._templateRef=t}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}},ac=(()=>{class n{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(t){this._ngSwitch=t,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews.push(t)}_matchCase(t){let i=t===this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(t){if(this._defaultViews.length>0&&t!==this._defaultUsed){this._defaultUsed=t;for(let i of this._defaultViews)i.enforceState(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Vi({type:n,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return n})(),Fg=(()=>{class n{ngSwitch;_view;ngSwitchCase;constructor(t,i,r){this.ngSwitch=r,r._addCase(),this._view=new ed(t,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(i){return new(i||n)(dt(Bi),dt(Ui),dt(ac,9))};static \u0275dir=Vi({type:n,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return n})(),kg=(()=>{class n{constructor(t,i,r){r._addDefault(new ed(t,i))}static \u0275fac=function(i){return new(i||n)(dt(Bi),dt(Ui),dt(ac,9))};static \u0275dir=Vi({type:n,selectors:[["","ngSwitchDefault",""]]})}return n})();function iA(n,e){return new Ne(2100,!1)}var Og=class{createSubscription(e,t,i){return qu(()=>e.subscribe({next:t,error:i}))}dispose(e){qu(()=>e.unsubscribe())}},Lg=class{createSubscription(e,t,i){return e.then(r=>t?.(r),r=>i?.(r)),{unsubscribe:()=>{t=null,i=null}}}dispose(e){e.unsubscribe()}},rA=new Lg,oA=new Og,Po=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=pe(Li);constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,i=>this._updateLatestValue(t,i),i=>this.applicationErrorHandler(i))}_selectStrategy(t){if(Ja(t))return rA;if(ju(t))return oA;throw iA(n,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,i){t===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||n)(dt(Ku,16))};static \u0275pipe=mg({name:"async",type:n,pure:!1})}return n})();var tn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Zn({type:n});static \u0275inj=Ln({})}return n})();function Ug(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var cc=class{};var Bg="browser",sA="server";function Ab(n){return n===Bg}function Rb(n){return n===sA}var id=new Ge(""),Gg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Ne(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ke(id),ke(Rt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),uc=class{_doc;constructor(e){this._doc=e}manager},td="ng-app-id";function Nb(n){for(let e of n)e.remove()}function Pb(n,e){let t=e.createElement("style");return t.textContent=n,t}function aA(n,e,t,i){let r=n.head?.querySelectorAll(`style[${td}="${e}"],link[${td}="${e}"]`);if(r)for(let o of r)o.removeAttribute(td),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Hg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var jg=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Rb(o),aA(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Pb);i?.forEach(r=>this.addUsage(r,this.external,Hg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Nb(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Nb(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Pb(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Hg(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(td,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ke(Wt),ke(Pu),ke(Ms,8),ke(Pr))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Vg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Wg=/%COMP%/g;var Lb="%COMP%",cA=`_nghost-${Lb}`,lA=`_ngcontent-${Lb}`,uA=!0,dA=new Ge("",{providedIn:"root",factory:()=>uA});function fA(n){return lA.replace(Wg,n)}function hA(n){return cA.replace(Wg,n)}function Fb(n,e){return e.map(t=>t.replace(Wg,n))}var $g=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,o,s,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new dc(t,s,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof nd?r.applyToHost(t):r instanceof fc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case tr.Emulated:o=new nd(c,l,i,this.appId,u,s,a,d,f);break;case tr.ShadowDom:return new zg(c,l,t,i,s,a,this.nonce,d,f);default:o=new fc(c,l,i,u,s,a,d,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ke(Gg),ke(jg),ke(Pu),ke(dA),ke(Wt),ke(Pr),ke(Rt),ke(Ms),ke(Ka,8))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),dc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,o){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Vg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Ob(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Ob(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ne(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Vg[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Vg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ki.DashCase|ki.Important)?e.style.setProperty(t,i,r&ki.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ki.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Cs().getGlobalEventTarget(this.doc,e),!e))throw new Ne(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Ob(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var zg=class extends dc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Fb(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Hg(f,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},fc=class extends dc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c,l){super(e,o,s,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?Fb(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},nd=class extends fc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c,l){let u=r+"-"+i.id;super(e,t,i,o,s,a,c,l,u),this.contentAttr=fA(u),this.hostAttr=hA(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var rd=class n extends oc{supportsDOMEvents=!0;static makeCurrent(){Pg(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=pA();return t==null?null:mA(t)}resetBaseElement(){hc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ug(document.cookie,e)}},hc=null;function pA(){return hc=hc||document.head.querySelector("base"),hc?hc.getAttribute("href"):null}function mA(n){return new URL(n,document.baseURI).pathname}var gA=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),Ub=(()=>{class n extends uc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})(),kb=["alt","control","meta","shift"],vA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Bb=(()=>{class n extends uc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Cs().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),kb.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=vA[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),kb.forEach(s=>{if(s!==r){let a=yA[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})();function qg(n,e){return wb(at({rootComponent:n},_A(e)))}function _A(n){return{appProviders:[...SA,...n?.providers??[]],platformProviders:MA}}function xA(){rd.makeCurrent()}function bA(){return new En}function EA(){return jm(document),document}var MA=[{provide:Pr,useValue:Bg},{provide:Ou,useValue:xA,multi:!0},{provide:Wt,useFactory:EA}];var SA=[{provide:wa,useValue:"root"},{provide:En,useFactory:bA},{provide:id,useClass:Ub,multi:!0,deps:[Wt]},{provide:id,useClass:Bb,multi:!0,deps:[Wt]},$g,jg,Gg,{provide:Do,useExisting:$g},{provide:cc,useClass:gA},[]];var Yg=class{};var Oo=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),o=t.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Zg=class{encodeKey(e){return Vb(e)}encodeValue(e){return Vb(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function wA(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],c=t.get(s)||[];c.push(a),t.set(s,c)}),t}var TA=/%(\d[a-f0-9])/gi,CA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Vb(n){return encodeURIComponent(n).replace(TA,(e,t)=>CA[t]??e)}function od(n){return`${n}`}var sr=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new Zg,e.fromString){if(e.fromObject)throw new Ne(2805,!1);this.map=wA(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(od):[od(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(o=>{t.push({param:i,value:o,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(od(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(od(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Kg=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function DA(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hb(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function zb(n){return typeof Blob<"u"&&n instanceof Blob}function Gb(n){return typeof FormData<"u"&&n instanceof FormData}function IA(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var AA="X-Request-URL",jb="text/plain",Wb="application/json",d6=`${Wb}, ${jb}, */*`,Ds=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;keepalive=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,t,i,r){this.url=t,this.method=e.toUpperCase();let o;if(DA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Oo,this.context??=new Kg,!this.params)this.params=new sr,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hb(this.body)||zb(this.body)||Gb(this.body)||IA(this.body)?this.body:this.body instanceof sr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Gb(this.body)?null:zb(this.body)?this.body.type||null:Hb(this.body)?null:typeof this.body=="string"?jb:this.body instanceof sr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Wb:null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,o=e.keepalive??this.keepalive,s=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,c=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,u=e.headers||this.headers,d=e.params||this.params,f=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((h,g)=>h.set(g,e.setHeaders[g]),u)),e.setParams&&(d=Object.keys(e.setParams).reduce((h,g)=>h.set(g,e.setParams[g]),d)),new n(t,i,a,{params:d,headers:u,context:f,reportProgress:l,responseType:r,withCredentials:c,transferCache:s,keepalive:o})}},Qg=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Qg||{}),Jg=class{headers;status;statusText;url;ok;type;constructor(e,t=200,i="OK"){this.headers=e.headers||new Oo,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var sd=class n extends Jg{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Qg.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};function Xg(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache,keepalive:n.keepalive}}var ev=(()=>{class n{handler;constructor(t){this.handler=t}request(t,i,r={}){let o;if(t instanceof Ds)o=t;else{let c;r.headers instanceof Oo?c=r.headers:c=new Oo(r.headers);let l;r.params&&(r.params instanceof sr?l=r.params:l=new sr({fromObject:r.params})),o=new Ds(t,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive})}let s=Ki(o).pipe(qh(c=>this.handler.handle(c)));if(t instanceof Ds||r.observe==="events")return s;let a=s.pipe(ya(c=>c instanceof sd));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Ut(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Ne(2806,!1);return c.body}));case"blob":return a.pipe(Ut(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Ne(2807,!1);return c.body}));case"text":return a.pipe(Ut(c=>{if(c.body!==null&&typeof c.body!="string")throw new Ne(2808,!1);return c.body}));case"json":default:return a.pipe(Ut(c=>c.body))}case"response":return a;default:throw new Ne(2809,!1)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new sr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,Xg(r,i))}post(t,i,r={}){return this.request("POST",t,Xg(r,i))}put(t,i,r={}){return this.request("PUT",t,Xg(r,i))}static \u0275fac=function(i){return new(i||n)(ke(Yg))};static \u0275prov=Ve({token:n,factory:n.\u0275fac})}return n})();var f6=RegExp(`^${AA}:`,"m");var tv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=ke(NA),r},providedIn:"root"})}return n})(),NA=(()=>{class n extends tv{_doc;constructor(t){super(),this._doc=t}sanitize(t,i){if(i==null)return null;switch(t){case wn.NONE:return i;case wn.HTML:return Ao(i,"HTML")?rr(i):Km(this._doc,String(i)).toString();case wn.STYLE:return Ao(i,"Style")?rr(i):i;case wn.SCRIPT:if(Ao(i,"Script"))return rr(i);throw new Ne(5200,!1);case wn.URL:return Ao(i,"URL")?rr(i):Fu(String(i));case wn.RESOURCE_URL:if(Ao(i,"ResourceURL"))return rr(i);throw new Ne(5201,!1);default:throw new Ne(5202,!1)}}bypassSecurityTrustHtml(t){return $m(t)}bypassSecurityTrustStyle(t){return qm(t)}bypassSecurityTrustScript(t){return Xm(t)}bypassSecurityTrustUrl(t){return Ym(t)}bypassSecurityTrustResourceUrl(t){return Zm(t)}static \u0275fac=function(i){return new(i||n)(ke(Wt))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wd="177",Yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hE=0,Pv=1,pE=2;var Ov=1,$d=2,Wi=3,hr=0,An=1,ni=2,Ai=0,Ho=1,kc=2,Lv=3,Fv=4,mE=5,Gr=100,gE=101,vE=102,yE=103,_E=104,xE=200,bE=201,EE=202,ME=203,Td=204,Cd=205,SE=206,wE=207,TE=208,CE=209,DE=210,IE=211,AE=212,RE=213,NE=214,qd=0,Xd=1,Yd=2,zo=3,Zd=4,Kd=5,Jd=6,Qd=7,kv=0,PE=1,OE=2,Ri=0,ef=1,tf=2,nf=3,rf=4,of=5,sf=6,af=7;var Sv=300,Xo=301,Yo=302,cf=303,lf=304,Uc=306,Dd=1e3,zr=1001,Id=1002,di=1003,LE=1004;var Bc=1005;var Vn=1006,uf=1007;var Kr=1008;var Ni=1009,Uv=1010,Bv=1011,Qs=1012,df=1013,Jr=1014,hi=1015,pi=1016,ff=1017,hf=1018,ea=1020,Vv=35902,Hv=1021,zv=1022,Hn=1023,Gs=1026,ta=1027,Gv=1028,pf=1029,jv=1030,mf=1031;var gf=1033,Vc=33776,Hc=33777,zc=33778,Gc=33779,vf=35840,yf=35841,_f=35842,xf=35843,bf=36196,Ef=37492,Mf=37496,Sf=37808,wf=37809,Tf=37810,Cf=37811,Df=37812,If=37813,Af=37814,Rf=37815,Nf=37816,Pf=37817,Of=37818,Lf=37819,Ff=37820,kf=37821,jc=36492,Uf=36494,Bf=36495,Wv=36283,Vf=36284,Hf=36285,zf=36286;var xc=2300,Ad=2301,wd=2302,wv=2400,Tv=2401,Cv=2402;var FE=3200,kE=3201;var $v=0,UE=1,vr="",In="srgb",pr="srgb-linear",bc="linear",ft="srgb";var Bo=7680;var Dv=519,BE=512,VE=513,HE=514,qv=515,zE=516,GE=517,jE=518,WE=519,Iv=35044;var Qr="300 es",zi=2e3,Ec=2001;var Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$b=1234567,yc=Math.PI/180,js=180/Math.PI;function na(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Xv(n,e){return(n%e+e)%e}function OA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function LA(n,e,t){return n!==e?(t-n)/(e-n):0}function _c(n,e,t){return(1-t)*n+t*e}function FA(n,e,t,i){return _c(n,e,1-Math.exp(-t*i))}function kA(n,e=1){return e-Math.abs(Xv(n,e*2)-e)}function UA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function BA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function VA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function HA(n,e){return n+Math.random()*(e-n)}function zA(n){return n*(.5-Math.random())}function GA(n){n!==void 0&&($b=n);let e=$b+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jA(n){return n*yc}function WA(n){return n*js}function $A(n){return(n&n-1)===0&&n!==0}function qA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function XA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function YA(n,e,t,i,r){let o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),f=s((e-i)/2),h=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Yv={DEG2RAD:yc,RAD2DEG:js,generateUUID:na,clamp:et,euclideanModulo:Xv,mapLinear:OA,inverseLerp:LA,lerp:_c,damp:FA,pingpong:kA,smoothstep:UA,smootherstep:BA,randInt:VA,randFloat:HA,randFloatSpread:zA,seededRandom:GA,degToRad:jA,radToDeg:WA,isPowerOfTwo:$A,ceilPowerOfTwo:qA,floorPowerOfTwo:XA,setQuaternionFromProperEuler:YA,normalize:Dn,denormalize:Hs},Ee=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let R=Math.sqrt(S),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let b=a*w;if(c=c*m+f*b,l=l*m+h*b,u=u*m+g*b,d=d*m+y*b,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),f=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*s+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nv.copy(this).projectOnVector(e),this.sub(nv)}reflect(e){return this.sub(nv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nv=new O,qb=new fi,We=class n{constructor(e,t,i,r,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],S=r[4],b=r[7],R=r[2],A=r[5],C=r[8];return o[0]=s*y+a*w+c*R,o[3]=s*m+a*S+c*A,o[6]=s*p+a*b+c*C,o[1]=l*y+u*w+d*R,o[4]=l*m+u*S+d*A,o[7]=l*p+u*b+d*C,o[2]=f*y+h*w+g*R,o[5]=f*m+h*S+g*A,o[8]=f*p+h*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,h=l*o-s*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*s)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*o-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(s*t-i*o)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(iv.makeScale(e,t)),this}rotate(e){return this.premultiply(iv.makeRotation(-e)),this}translate(e,t){return this.premultiply(iv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},iv=new We;function Zv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $E(){let n=Mc("canvas");return n.style.display="block",n}var Xb={};function Go(n){n in Xb||(Xb[n]=!0,console.warn(n))}function qE(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function XE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Yb=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zb=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZA(){let n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ft&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?bc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:e,whitePoint:i,transfer:bc,toXYZ:Yb,fromXYZ:Zb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Yb,fromXYZ:Zb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),n}var nt=ZA();function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Is,Rd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=Mc("canvas")),Is.width=e.width,Is.height=e.height;let r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=fr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},KA=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(rv(r[s].image)):o.push(rv(r[s]))}else o=rv(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function rv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var JA=0,ov=new O,eo=(()=>{class n extends Gi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=zr,o=zr,s=Vn,a=Kr,c=Hn,l=Ni,u=n.DEFAULT_ANISOTROPY,d=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=na(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ov).x}get height(){return this.source.getSize(ov).y}get depth(){return this.source.getSize(ov).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dd:t.x=t.x-Math.floor(t.x);break;case zr:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dd:t.y=t.y-Math.floor(t.y);break;case zr:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Sv,n.DEFAULT_ANISOTROPY=1,n})(),Bt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,b=(h+1)/2,R=(p+1)/2,A=(u+f)/4,C=(d+y)/4,L=(g+m)/4;return S>b&&S>R?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=A/i,o=C/i):b>R?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=A/r,o=L/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=C/o,r=L/o),this.set(i,r,o,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nd=class extends Gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);let r={width:e,height:t,depth:i.depth},o=new eo(r);this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sc=class extends eo{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pd=class extends eo{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Ti):Ti.fromBufferAttribute(o,s),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ad.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ad.copy(i.boundingBox)),ad.applyMatrix4(e.matrixWorld),this.union(ad)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pc),cd.subVectors(this.max,pc),As.subVectors(e.a,pc),Rs.subVectors(e.b,pc),Ns.subVectors(e.c,pc),Lr.subVectors(Rs,As),Fr.subVectors(Ns,Rs),Lo.subVectors(As,Ns);let t=[0,-Lr.z,Lr.y,0,-Fr.z,Fr.y,0,-Lo.z,Lo.y,Lr.z,0,-Lr.x,Fr.z,0,-Fr.x,Lo.z,0,-Lo.x,-Lr.y,Lr.x,0,-Fr.y,Fr.x,0,-Lo.y,Lo.x,0];return!sv(t,As,Rs,Ns,cd)||(t=[1,0,0,0,1,0,0,0,1],!sv(t,As,Rs,Ns,cd))?!1:(ld.crossVectors(Lr,Fr),t=[ld.x,ld.y,ld.z],sv(t,As,Rs,Ns,cd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new O,new O,new O,new O,new O,new O,new O,new O],Ti=new O,ad=new jr,As=new O,Rs=new O,Ns=new O,Lr=new O,Fr=new O,Lo=new O,pc=new O,cd=new O,ld=new O,Fo=new O;function sv(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Fo.fromArray(n,o);let a=r.x*Math.abs(Fo.x)+r.y*Math.abs(Fo.y)+r.z*Math.abs(Fo.z),c=e.dot(Fo),l=t.dot(Fo),u=i.dot(Fo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var QA=new jr,mc=new O,av=new O,$s=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):QA.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mc.subVectors(e,this.center);let t=mc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(av.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mc.copy(e.center).add(av)),this.expandByPoint(mc.copy(e.center).sub(av))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cr=new O,cv=new O,ud=new O,kr=new O,lv=new O,dd=new O,uv=new O,qs=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cv.copy(e).add(t).multiplyScalar(.5),ud.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(cv);let o=e.distanceTo(t)*.5,s=-this.direction.dot(ud),a=kr.dot(this.direction),c=-kr.dot(ud),l=kr.lengthSq(),u=Math.abs(1-s*s),d,f,h,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),h=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cv).addScaledVector(ud,f),h}intersectSphere(e,t){cr.subVectors(e.center,this.origin);let i=cr.dot(this.direction),r=cr.dot(cr)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,r,o){lv.subVectors(t,e),dd.subVectors(i,e),uv.crossVectors(lv,dd);let s=this.direction.dot(uv),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;kr.subVectors(this.origin,e);let c=a*this.direction.dot(dd.crossVectors(kr,dd));if(c<0)return null;let l=a*this.direction.dot(lv.cross(kr));if(l<0||c+l>s)return null;let u=-a*kr.dot(uv);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class n{constructor(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),o=1/Ps.setFromMatrixColumn(e,1).length(),s=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=y-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,h=s*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=s*c,h=s*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,t1)}lookAt(e,t,i){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ur.crossVectors(i,Kn),Ur.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ur.crossVectors(i,Kn)),Ur.normalize(),fd.crossVectors(Kn,Ur),r[0]=Ur.x,r[4]=fd.x,r[8]=Kn.x,r[1]=Ur.y,r[5]=fd.y,r[9]=Kn.y,r[2]=Ur.z,r[6]=fd.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],S=i[7],b=i[11],R=i[15],A=r[0],C=r[4],L=r[8],E=r[12],x=r[1],D=r[5],H=r[9],k=r[13],$=r[2],q=r[6],j=r[10],Z=r[14],V=r[3],ne=r[7],de=r[11],Te=r[15];return o[0]=s*A+a*x+c*$+l*V,o[4]=s*C+a*D+c*q+l*ne,o[8]=s*L+a*H+c*j+l*de,o[12]=s*E+a*k+c*Z+l*Te,o[1]=u*A+d*x+f*$+h*V,o[5]=u*C+d*D+f*q+h*ne,o[9]=u*L+d*H+f*j+h*de,o[13]=u*E+d*k+f*Z+h*Te,o[2]=g*A+y*x+m*$+p*V,o[6]=g*C+y*D+m*q+p*ne,o[10]=g*L+y*H+m*j+p*de,o[14]=g*E+y*k+m*Z+p*Te,o[3]=w*A+S*x+b*$+R*V,o[7]=w*C+S*D+b*q+R*ne,o[11]=w*L+S*H+b*j+R*de,o[15]=w*E+S*k+b*Z+R*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+o*c*d-r*l*d-o*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+o*s*f-r*s*h+r*l*u-o*c*u)+m*(+t*l*d-t*a*h-o*s*d+i*s*h+o*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*s*d-i*s*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+s*m*h+u*c*p-s*f*p,b=u*y*l-g*d*l+g*a*h-s*y*h-u*a*p+s*d*p,R=g*d*c-u*y*c-g*a*f+s*y*f+u*a*m-s*d*m,A=t*w+i*S+r*b+o*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=w*C,e[1]=(y*f*o-d*m*o-y*r*h+i*m*h+d*r*p-i*f*p)*C,e[2]=(a*m*o-y*c*o+y*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*o-a*f*o-d*r*l+i*f*l+a*r*h-i*c*h)*C,e[4]=S*C,e[5]=(u*m*o-g*f*o+g*r*h-t*m*h-u*r*p+t*f*p)*C,e[6]=(g*c*o-s*m*o-g*r*l+t*m*l+s*r*p-t*c*p)*C,e[7]=(s*f*o-u*c*o+u*r*l-t*f*l-s*r*h+t*c*h)*C,e[8]=b*C,e[9]=(g*d*o-u*y*o-g*i*h+t*y*h+u*i*p-t*d*p)*C,e[10]=(s*y*o-g*a*o+g*i*l-t*y*l-s*i*p+t*a*p)*C,e[11]=(u*a*o-s*d*o-u*i*l+t*d*l+s*i*h-t*a*h)*C,e[12]=R*C,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-s*y*r-g*i*c+t*y*c+s*i*m-t*a*m)*C,e[15]=(s*d*r-u*a*r+u*i*c-t*d*c-s*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,h=o*u,g=o*d,y=s*u,m=s*d,p=a*d,w=c*l,S=c*u,b=c*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(y+p))*R,r[1]=(h+b)*R,r[2]=(g-S)*R,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(f+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+S)*C,r[9]=(m-w)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,o=Ps.set(r[0],r[1],r[2]).length(),s=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);let l=1/o,u=1/s,d=1/a;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,t.setFromRotationMatrix(Ci),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=zi){let c=this.elements,l=2*o/(t-e),u=2*o/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===zi)h=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Ec)h=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=zi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(s-o),f=(t+e)*l,h=(i+r)*u,g,y;if(a===zi)g=(s+o)*d,y=-2*d;else if(a===Ec)g=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ps=new O,Ci=new Gt,e1=new O(0,0,0),t1=new O(1,1,1),Ur=new O,fd=new O,Kn=new O,Kb=new Gt,Jb=new fi,Wr=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Kb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kb,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jb.setFromEuler(this),this.setFromQuaternion(Jb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n1=0,Qb=new O,Os=new fi,lr=new Gt,hd=new O,gc=new O,i1=new O,r1=new fi,eE=new O(1,0,0),tE=new O(0,1,0),nE=new O(0,0,1),iE={type:"added"},o1={type:"removed"},Ls={type:"childadded",child:null},dv={type:"childremoved",child:null},ji=(()=>{class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new Wr,r=new fi,o=new O(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new We}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Os.setFromAxisAngle(t,i),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,i){return Os.setFromAxisAngle(t,i),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(eE,t)}rotateY(t){return this.rotateOnAxis(tE,t)}rotateZ(t){return this.rotateOnAxis(nE,t)}translateOnAxis(t,i){return Qb.copy(t).applyQuaternion(this.quaternion),this.position.add(Qb.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(eE,t)}translateY(t){return this.translateOnAxis(tE,t)}translateZ(t){return this.translateOnAxis(nE,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hd.copy(t):hd.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(gc,hd,this.up):lr.lookAt(hd,gc,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(lr),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iE),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(o1),dv.child=t,this.dispatchEvent(dv),dv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iE),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,i1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,r1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>Xt(at({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>at({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=o,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Di=new O,ur=new O,fv=new O,dr=new O,Fs=new O,ks=new O,rE=new O,hv=new O,pv=new O,mv=new O,gv=new Bt,vv=new Bt,yv=new Bt,Hr=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Di.subVectors(r,t),ur.subVectors(i,t),fv.subVectors(e,t);let s=Di.dot(Di),a=Di.dot(ur),c=Di.dot(fv),l=ur.dot(ur),u=ur.dot(fv),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,dr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,dr.x),c.addScaledVector(s,dr.y),c.addScaledVector(a,dr.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return gv.setScalar(0),vv.setScalar(0),yv.setScalar(0),gv.fromBufferAttribute(e,t),vv.fromBufferAttribute(e,i),yv.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(gv,o.x),s.addScaledVector(vv,o.y),s.addScaledVector(yv,o.z),s}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),ur.subVectors(e,t),Di.cross(ur).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Di.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;Fs.subVectors(r,i),ks.subVectors(o,i),hv.subVectors(e,i);let c=Fs.dot(hv),l=ks.dot(hv);if(c<=0&&l<=0)return t.copy(i);pv.subVectors(e,r);let u=Fs.dot(pv),d=ks.dot(pv);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Fs,s);mv.subVectors(e,o);let h=Fs.dot(mv),g=ks.dot(mv);if(g>=0&&h<=g)return t.copy(o);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ks,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return rE.subVectors(o,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(rE,a);let p=1/(m+y+f);return s=y*p,a=f*p,t.copy(i).addScaledVector(Fs,s).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ZE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},pd={h:0,s:0,l:0};function _v(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Xv(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=_v(s,o,e+1/3),this.g=_v(s,o,e),this.b=_v(s,o,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=In){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){let i=ZE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return nt.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,o=mn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=In){nt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(pd);let i=_c(Br.h,pd.h,t),r=_c(Br.s,pd.s,t),o=_c(Br.l,pd.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Me;Me.NAMES=ZE;var s1=0,$r=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Ho,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Cd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mr=class extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new O,md=new Ee,a1=0,Qn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iv,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)md.fromBufferAttribute(this,t),md.applyMatrix3(e),this.setXY(t,md.x,md.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iv&&(e.usage=this.usage),e}};var wc=class extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Tc=class extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Zt=class extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}},c1=0,li=new Gt,xv=new ji,Us=new O,Jn=new jr,vc=new jr,nn=new O,ei=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?Tc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return xv.lookAt(e),xv.updateMatrix(),this.applyMatrix4(xv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];vc.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Jn.min,vc.min),Jn.expandByPoint(nn),nn.addVectors(Jn.max,vc.max),Jn.expandByPoint(nn)):(Jn.expandByPoint(vc.min),Jn.expandByPoint(vc.max))}Jn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)nn.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(e,l),nn.add(Us)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new O,c[L]=new O;let l=new O,u=new O,d=new O,f=new Ee,h=new Ee,g=new Ee,y=new O,m=new O;function p(L,E,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(o,L),h.fromBufferAttribute(o,E),g.fromBufferAttribute(o,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(y),a[E].add(y),a[x].add(y),c[L].add(m),c[E].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,E=w.length;L<E;++L){let x=w[L],D=x.start,H=x.count;for(let k=D,$=D+H;k<$;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new O,b=new O,R=new O,A=new O;function C(L){R.fromBufferAttribute(r,L),A.copy(R);let E=a[L];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(A,E);let D=b.dot(c[L])<0?-1:1;s.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,E=w.length;L<E;++L){let x=w[L],D=x.start,H=x.count;for(let k=D,$=D+H;k<$;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,o=new O,s=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Qn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oE=new Gt,ko=new qs,gd=new $s,sE=new O,vd=new O,yd=new O,_d=new O,bv=new O,xd=new O,aE=new O,bd=new O,Tt=class extends ji{constructor(e=new ei,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){xd.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(bv.fromBufferAttribute(d,e),s?xd.addScaledVector(bv,u):xd.addScaledVector(bv.sub(t),u))}t.add(xd)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gd.copy(i.boundingSphere),gd.applyMatrix4(o),ko.copy(e.ray).recast(e.near),!(gd.containsPoint(ko.origin)===!1&&(ko.intersectSphere(gd,sE)===null||ko.origin.distanceToSquared(sE)>(e.far-e.near)**2))&&(oE.copy(o).invert(),ko.copy(e.ray).applyMatrix4(oE),!(i.boundingBox!==null&&ko.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,R=S;b<R;b+=3){let A=a.getX(b),C=a.getX(b+1),L=a.getX(b+2);r=Ed(this,p,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);r=Ed(this,s,e,i,l,u,d,w,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=s[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,R=S;b<R;b+=3){let A=b,C=b+1,L=b+2;r=Ed(this,p,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,S=m+1,b=m+2;r=Ed(this,s,e,i,l,u,d,w,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function l1(n,e,t,i,r,o,s,a){let c;if(e.side===An?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===hr,a),c===null)return null;bd.copy(a),bd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(bd);return l<t.near||l>t.far?null:{distance:l,point:bd.clone(),object:n}}function Ed(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,vd),n.getVertexPosition(c,yd),n.getVertexPosition(l,_d);let u=l1(n,e,t,i,vd,yd,_d,aE);if(u){let d=new O;Hr.getBarycoord(aE,vd,yd,_d,d),r&&(u.uv=Hr.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(u.uv1=Hr.getInterpolatedAttribute(o,a,c,l,d,new Ee)),s&&(u.normal=Hr.getInterpolatedAttribute(s,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Hr.getNormal(vd,yd,_d,f.normal),u.face=f,u.barycoord=d}return u}var Ii=class n extends ei{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(y,m,p,w,S,b,R,A,C,L,E){let x=b/C,D=R/L,H=b/2,k=R/2,$=A/2,q=C+1,j=L+1,Z=0,V=0,ne=new O;for(let de=0;de<j;de++){let Te=de*D-k;for(let Qe=0;Qe<q;Qe++){let ht=Qe*x-H;ne[y]=ht*w,ne[m]=Te*S,ne[p]=$,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(Qe/C),d.push(1-de/L),Z+=1}}for(let de=0;de<L;de++)for(let Te=0;Te<C;Te++){let Qe=f+Te+q*de,ht=f+Te+q*(de+1),G=f+(Te+1)+q*(de+1),te=f+(Te+1)+q*de;c.push(Qe,ht,te),c.push(ht,G,te),V+=6}a.addGroup(h,V,E),h+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=Zo(n[t]);for(let r in i)e[r]=i[r]}return e}function u1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kv(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var yr={clone:Zo,merge:yn},d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=f1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Cc=class extends ji{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vr=new O,cE=new Ee,lE=new Ee,gn=class extends Cc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,cE,lE),t.subVectors(lE,cE)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,Vs=1,gr=class extends ji{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gn(Bs,Vs,e,t);r.layers=this.layers,this.add(r);let o=new gn(Bs,Vs,e,t);o.layers=this.layers,this.add(o);let s=new gn(Bs,Vs,e,t);s.layers=this.layers,this.add(s);let a=new gn(Bs,Vs,e,t);a.layers=this.layers,this.add(a);let c=new gn(Bs,Vs,e,t);c.layers=this.layers,this.add(c);let l=new gn(Bs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Dc=class extends eo{constructor(e=[],t=Xo,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xs=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new xt({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ai});o.uniforms.tEquirect.value=t;let s=new Tt(r,o),a=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Vn),new gr(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}},Vo=class extends ji{constructor(){super(),this.isGroup=!0,this.type="Group"}},h1={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Wo=class extends ji{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ev=new O,p1=new O,m1=new We,ui=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ev.subVectors(i,t).cross(p1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ev),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||m1.getNormalMatrix(e),r=this.coplanarPoint(Ev).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Uo=new $s,Md=new O,Zs=class{constructor(e=new ui,t=new ui,i=new ui,r=new ui,o=new ui,s=new ui){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){let i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],S=r[14],b=r[15];if(i[0].setComponents(c-o,f-l,m-h,b-p).normalize(),i[1].setComponents(c+o,f+l,m+h,b+p).normalize(),i[2].setComponents(c+s,f+u,m+g,b+w).normalize(),i[3].setComponents(c-s,f-u,m-g,b-w).normalize(),i[4].setComponents(c-a,f-d,m-y,b-S).normalize(),t===zi)i[5].setComponents(c+a,f+d,m+y,b+S).normalize();else if(t===Ec)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Uo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Uo)}intersectsSprite(e){return Uo.center.set(0,0,0),Uo.radius=.7071067811865476,Uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Uo)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Md.x=r.normal.x>0?e.max.x:e.min.x,Md.y=r.normal.y>0?e.max.y:e.min.y,Md.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Md)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ic=class extends eo{constructor(e,t,i=Jr,r,o,s,a=di,c=di,l,u=Gs,d=1){if(u!==Gs&&u!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ac=class n extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-s;for(let S=0;S<l;S++){let b=S*d-o;g.push(b,-w,0),y.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,b=w+l*(p+1),R=w+1+l*(p+1),A=w+1+l*p;h.push(S,b,A),h.push(b,R,A)}this.setIndex(h),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ks=class n extends ei{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+a,Math.PI),l=0,u=[],d=new O,f=new O,h=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let w=[],S=p/i,b=0;p===0&&s===0?b=.5/t:p===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let A=R/t;d.x=-e*Math.cos(r+A*o)*Math.sin(s+S*a),d.y=e*Math.cos(s+S*a),d.z=e*Math.sin(r+A*o)*Math.sin(s+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(A+b,1-S),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let S=u[p][w+1],b=u[p][w],R=u[p+1][w],A=u[p+1][w+1];(p!==0||s>0)&&h.push(S,b,A),(p!==i-1||c<Math.PI)&&h.push(b,R,A)}this.setIndex(h),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rc=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nc=class extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Od=class extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ld=class extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function g1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $o=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];e:{t:{let s;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break t}s=t.length;break n}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break t}s=i,i=0;break n}break e}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fd=class extends $o{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wv,endingEnd:wv}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Tv:o=e,a=2*t-i;break;case Cv:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tv:s=e,c=2*i-t;break;case Cv:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,b=h*m-h*y;for(let R=0;R!==a;++R)o[R]=p*s[u+R]+w*s[l+R]+S*s[c+R]+b*s[d+R];return o}},kd=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*d+s[c+f]*u;return o}},Ud=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sd(t,this.TimeBufferType),this.values=Sd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sd(e.times,Array),values:Sd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xc:t=this.InterpolantFactoryMethodDiscrete;break;case Ad:t=this.InterpolantFactoryMethodLinear;break;case wd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xc;case this.InterpolantFactoryMethodLinear:return Ad;case this.InterpolantFactoryMethodSmooth:return wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&g1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===wd,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Ad;var qr=class extends ti{constructor(e,t,i){super(e,t,i)}};qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=xc;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bd=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};Bd.prototype.ValueTypeName="color";var Vd=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};Vd.prototype.ValueTypeName="number";var Hd=class extends $o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)fi.slerpFlat(o,0,s,l-a,s,l,c);return o}},Pc=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Hd(this.times,this.values,this.getValueSize(),e)}};Pc.prototype.ValueTypeName="quaternion";Pc.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends ti{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=xc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var zd=class extends ti{constructor(e,t,i,r){super(e,t,i,r)}};zd.prototype.ValueTypeName="vector";var Gd=class extends ji{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Mv=new Gt,uE=new O,dE=new O,Av=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;uE.setFromMatrixPosition(e.matrixWorld),t.position.copy(uE),dE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dE),t.updateMatrixWorld(),Mv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mv),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var qo=class extends Cc{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rv=class extends Av{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oc=class extends Gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ji.DEFAULT_UP),this.updateMatrix(),this.target=new ji,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jd=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Lc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fE(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fE();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fE(){return performance.now()}var Jv="\\[\\]\\.:\\/",v1=new RegExp("["+Jv+"]","g"),Qv="[^"+Jv+"]",y1="[^"+Jv.replace("\\.","")+"]",_1=/((?:WC+[\/:])*)/.source.replace("WC",Qv),x1=/(WCOD+)?/.source.replace("WCOD",y1),b1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qv),E1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qv),M1=new RegExp("^"+_1+x1+b1+E1+"$"),S1=["material","materials","bones","map"],Nv=class{constructor(e,t,i){let r=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(v1,"")}static parseTrackName(t){let i=M1.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);S1.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Nv,n})();zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U6=new Float32Array(1);var Js=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fc=class extends Gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ey(n,e,t,i){let r=w1(i);switch(t){case Hv:return n*e;case Gv:return n*e/r.components*r.byteLength;case pf:return n*e/r.components*r.byteLength;case jv:return n*e*2/r.components*r.byteLength;case mf:return n*e*2/r.components*r.byteLength;case zv:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case gf:return n*e*4/r.components*r.byteLength;case Vc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yf:case xf:return Math.max(n,16)*Math.max(e,8)/4;case vf:case _f:return Math.max(n,8)*Math.max(e,8)/2;case bf:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jc:case Uf:case Bf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wv:case Vf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hf:case zf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w1(n){switch(n){case Ni:case Uv:return{byteLength:1,components:1};case Qs:case Bv:case pi:return{byteLength:2,components:1};case ff:case hf:return{byteLength:2,components:4};case Jr:case df:case hi:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function xM(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function T1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P1=`#ifdef USE_AOMAP
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
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z1=`#define PI 3.141592653589793
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
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iR="gl_FragColor = linearToOutputTexel( gl_FragColor );",rR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oR=`#ifdef USE_ENVMAP
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
#endif`,sR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aR=`#ifdef USE_ENVMAP
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
#endif`,cR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lR=`#ifdef USE_ENVMAP
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
#endif`,uR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pR=`#ifdef USE_GRADIENTMAP
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
}`,mR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yR=`uniform bool receiveShadow;
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
#endif`,_R=`#ifdef USE_ENVMAP
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
#endif`,xR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ER=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SR=`PhysicalMaterial material;
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
#endif`,wR=`struct PhysicalMaterial {
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
}`,TR=`
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
#endif`,CR=`#if defined( RE_IndirectDiffuse )
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
#endif`,DR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FR=`#if defined( USE_POINTS_UV )
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
#endif`,kR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`#ifdef USE_MORPHTARGETS
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
#endif`,GR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YR=`#ifdef USE_NORMALMAP
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
#endif`,ZR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dN=`float getShadowMask() {
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
}`,fN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hN=`#ifdef USE_SKINNING
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
#endif`,pN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mN=`#ifdef USE_SKINNING
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
#endif`,gN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_N=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xN=`#ifdef USE_TRANSMISSION
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
#endif`,bN=`#ifdef USE_TRANSMISSION
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
#endif`,EN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CN=`uniform sampler2D t2D;
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
}`,DN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NN=`#include <common>
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
}`,PN=`#if DEPTH_PACKING == 3200
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
}`,ON=`#define DISTANCE
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
}`,LN=`#define DISTANCE
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
}`,FN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UN=`uniform float scale;
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
}`,BN=`uniform vec3 diffuse;
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
}`,VN=`#include <common>
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
}`,HN=`uniform vec3 diffuse;
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
}`,zN=`#define LAMBERT
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
}`,GN=`#define LAMBERT
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
}`,jN=`#define MATCAP
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
}`,WN=`#define MATCAP
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
}`,$N=`#define NORMAL
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
}`,qN=`#define NORMAL
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
}`,XN=`#define PHONG
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
}`,YN=`#define PHONG
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
}`,ZN=`#define STANDARD
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
}`,KN=`#define STANDARD
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
}`,JN=`#define TOON
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
}`,QN=`#define TOON
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
}`,eP=`uniform float size;
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
}`,tP=`uniform vec3 diffuse;
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
}`,nP=`#include <common>
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
}`,iP=`uniform vec3 color;
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
}`,rP=`uniform float rotation;
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
}`,oP=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:C1,alphahash_pars_fragment:D1,alphamap_fragment:I1,alphamap_pars_fragment:A1,alphatest_fragment:R1,alphatest_pars_fragment:N1,aomap_fragment:P1,aomap_pars_fragment:O1,batching_pars_vertex:L1,batching_vertex:F1,begin_vertex:k1,beginnormal_vertex:U1,bsdfs:B1,iridescence_fragment:V1,bumpmap_pars_fragment:H1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:G1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:W1,color_fragment:$1,color_pars_fragment:q1,color_pars_vertex:X1,color_vertex:Y1,common:Z1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:J1,displacementmap_pars_vertex:Q1,displacementmap_vertex:eR,emissivemap_fragment:tR,emissivemap_pars_fragment:nR,colorspace_fragment:iR,colorspace_pars_fragment:rR,envmap_fragment:oR,envmap_common_pars_fragment:sR,envmap_pars_fragment:aR,envmap_pars_vertex:cR,envmap_physical_pars_fragment:_R,envmap_vertex:lR,fog_vertex:uR,fog_pars_vertex:dR,fog_fragment:fR,fog_pars_fragment:hR,gradientmap_pars_fragment:pR,lightmap_pars_fragment:mR,lights_lambert_fragment:gR,lights_lambert_pars_fragment:vR,lights_pars_begin:yR,lights_toon_fragment:xR,lights_toon_pars_fragment:bR,lights_phong_fragment:ER,lights_phong_pars_fragment:MR,lights_physical_fragment:SR,lights_physical_pars_fragment:wR,lights_fragment_begin:TR,lights_fragment_maps:CR,lights_fragment_end:DR,logdepthbuf_fragment:IR,logdepthbuf_pars_fragment:AR,logdepthbuf_pars_vertex:RR,logdepthbuf_vertex:NR,map_fragment:PR,map_pars_fragment:OR,map_particle_fragment:LR,map_particle_pars_fragment:FR,metalnessmap_fragment:kR,metalnessmap_pars_fragment:UR,morphinstance_vertex:BR,morphcolor_vertex:VR,morphnormal_vertex:HR,morphtarget_pars_vertex:zR,morphtarget_vertex:GR,normal_fragment_begin:jR,normal_fragment_maps:WR,normal_pars_fragment:$R,normal_pars_vertex:qR,normal_vertex:XR,normalmap_pars_fragment:YR,clearcoat_normal_fragment_begin:ZR,clearcoat_normal_fragment_maps:KR,clearcoat_pars_fragment:JR,iridescence_pars_fragment:QR,opaque_fragment:eN,packing:tN,premultiplied_alpha_fragment:nN,project_vertex:iN,dithering_fragment:rN,dithering_pars_fragment:oN,roughnessmap_fragment:sN,roughnessmap_pars_fragment:aN,shadowmap_pars_fragment:cN,shadowmap_pars_vertex:lN,shadowmap_vertex:uN,shadowmask_pars_fragment:dN,skinbase_vertex:fN,skinning_pars_vertex:hN,skinning_vertex:pN,skinnormal_vertex:mN,specularmap_fragment:gN,specularmap_pars_fragment:vN,tonemapping_fragment:yN,tonemapping_pars_fragment:_N,transmission_fragment:xN,transmission_pars_fragment:bN,uv_pars_fragment:EN,uv_pars_vertex:MN,uv_vertex:SN,worldpos_vertex:wN,background_vert:TN,background_frag:CN,backgroundCube_vert:DN,backgroundCube_frag:IN,cube_vert:AN,cube_frag:RN,depth_vert:NN,depth_frag:PN,distanceRGBA_vert:ON,distanceRGBA_frag:LN,equirect_vert:FN,equirect_frag:kN,linedashed_vert:UN,linedashed_frag:BN,meshbasic_vert:VN,meshbasic_frag:HN,meshlambert_vert:zN,meshlambert_frag:GN,meshmatcap_vert:jN,meshmatcap_frag:WN,meshnormal_vert:$N,meshnormal_frag:qN,meshphong_vert:XN,meshphong_frag:YN,meshphysical_vert:ZN,meshphysical_frag:KN,meshtoon_vert:JN,meshtoon_frag:QN,points_vert:eP,points_frag:tP,shadow_vert:nP,shadow_frag:iP,sprite_vert:rP,sprite_frag:oP},oe={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},$i={basic:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:yn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:yn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:yn([oe.points,oe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:yn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:yn([oe.common,oe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:yn([oe.sprite,oe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:yn([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:yn([oe.lights,oe.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};$i.physical={uniforms:yn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Gf={r:0,b:0,g:0},Ko=new Wr,sP=new Gt;function aP(n,e,t,i,r,o,s){let a=new Me(0),c=o===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function y(S){let b=!1,R=g(S);R===null?p(a,c):R&&R.isColor&&(p(R,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,b){let R=g(b);R&&(R.isCubeTexture||R.mapping===Uc)?(u===void 0&&(u=new Tt(new Ii(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Zo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ko.copy(b.backgroundRotation),Ko.x*=-1,Ko.y*=-1,Ko.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ko.y*=-1,Ko.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sP.makeRotationFromEuler(Ko)),u.material.toneMapped=nt.getTransfer(R.colorSpace)!==ft,(d!==R||f!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Tt(new Ac(2,2),new xt({name:"BackgroundMaterial",uniforms:Zo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(R.colorSpace)!==ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,b){S.getRGB(Gf,Kv(n)),i.buffers.color.setClear(Gf.r,Gf.g,Gf.b,b,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:y,addToRenderList:m,dispose:w}}function cP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),o=r,s=!1;function a(x,D,H,k,$){let q=!1,j=d(k,H,D);o!==j&&(o=j,l(o.object)),q=h(x,k,H,$),q&&g(x,k,H,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,b(x,D,H,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,H){let k=H.wireframe===!0,$=i[x.id];$===void 0&&($={},i[x.id]=$);let q=$[D.id];q===void 0&&(q={},$[D.id]=q);let j=q[k];return j===void 0&&(j=f(c()),q[k]=j),j}function f(x){let D=[],H=[],k=[];for(let $=0;$<t;$++)D[$]=0,H[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:k,object:x,attributes:{},index:null}}function h(x,D,H,k){let $=o.attributes,q=D.attributes,j=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=$[V],Te=q[V];if(Te===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;j++}return o.attributesNum!==j||o.index!==k}function g(x,D,H,k){let $={},q=D.attributes,j=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=q[V];de===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),$[V]=Te,j++}o.attributes=$,o.attributesNum=j,o.index=k}function y(){let x=o.newAttributes;for(let D=0,H=x.length;D<H;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let H=o.newAttributes,k=o.enabledAttributes,$=o.attributeDivisors;H[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),$[x]!==D&&(n.vertexAttribDivisor(x,D),$[x]=D)}function w(){let x=o.newAttributes,D=o.enabledAttributes;for(let H=0,k=D.length;H<k;H++)D[H]!==x[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function S(x,D,H,k,$,q,j){j===!0?n.vertexAttribIPointer(x,D,H,$,q):n.vertexAttribPointer(x,D,H,k,$,q)}function b(x,D,H,k){y();let $=k.attributes,q=H.getAttributes(),j=D.defaultAttributeValues;for(let Z in q){let V=q[Z];if(V.location>=0){let ne=$[Z];if(ne===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){let de=ne.normalized,Te=ne.itemSize,Qe=e.get(ne);if(Qe===void 0)continue;let ht=Qe.buffer,G=Qe.type,te=Qe.bytesPerElement,_e=G===n.INT||G===n.UNSIGNED_INT||ne.gpuType===df;if(ne.isInterleavedBufferAttribute){let ce=ne.data,xe=ce.stride,ct=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,ce.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Oe=0;Oe<V.locationSize;Oe++)S(V.location+Oe,Te/V.locationSize,G,de,xe*te,(ct+Te/V.locationSize*Oe)*te,_e)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,ne.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ce=0;ce<V.locationSize;ce++)S(V.location+ce,Te/V.locationSize,G,de,Te*te,Te/V.locationSize*ce*te,_e)}}else if(j!==void 0){let de=j[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}w()}function R(){L();for(let x in i){let D=i[x];for(let H in D){let k=D[H];for(let $ in k)u(k[$].object),delete k[$];delete D[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let H in D){let k=D[H];for(let $ in k)u(k[$].object),delete k[$];delete D[H]}delete i[x.id]}function C(x){for(let D in i){let H=i[D];if(H[x.id]===void 0)continue;let k=H[x.id];for(let $ in k)u(k[$].object),delete k[$];delete H[x.id]}}function L(){E(),s=!0,o!==r&&(o=r,l(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function lP(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uP(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ni&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hi&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:R,maxSamples:A}}function dP(n){let e=this,t=null,i=0,r=!1,o=!1,s=new ui,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let w=o?0:i,S=w*4,b=p.clippingState||null;c.value=b,b=u(g,f,S,h);for(let R=0;R!==S;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=h;S!==y;++S,b+=4)s.copy(d[S]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function fP(n){let e=new WeakMap;function t(s,a){return a===cf?s.mapping=Xo:a===lf&&(s.mapping=Yo),s}function i(s){if(s&&s.isTexture){let a=s.mapping;if(a===cf||a===lf)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new Xs(c.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}var ra=4,KE=[.125,.215,.35,.446,.526,.582],es=20,ty=new qo,JE=new Me,ny=null,iy=0,ry=0,oy=!1,Qo=(1+Math.sqrt(5))/2,ia=1/Qo,QE=[new O(-Qo,ia,0),new O(Qo,ia,0),new O(-ia,0,Qo),new O(ia,0,Qo),new O(0,Qo,-ia),new O(0,Qo,ia),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],hP=new O,$f=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=hP}=o;ny=this._renderer.getRenderTarget(),iy=this._renderer.getActiveCubeFace(),ry=this._renderer.getActiveMipmapLevel(),oy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ny,iy,ry),this._renderer.xr.enabled=oy,e.scissorTest=!1,jf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ny=this._renderer.getRenderTarget(),iy=this._renderer.getActiveCubeFace(),ry=this._renderer.getActiveMipmapLevel(),oy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:pi,format:Hn,colorSpace:pr,depthBuffer:!1},r=eM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eM(e,t,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pP(o)),this._blurMaterial=mP(o,e,t)}return r}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,ty)}_sceneToCubeUV(e,t,i,r,o){let c=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(JE),d.toneMapping=Ri,d.autoClear=!1;let g=new mr({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),y=new Tt(new Ii,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(JE),m=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[w],o.y,o.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[w],o.z)):(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[w]));let b=this._cubeSize;jf(r,S*b,w>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Xo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tM());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Tt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;jf(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,ty)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let o=1;o<r;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=QE[(r-o-1)%QE.length];this._blur(e,o-1,o,s,a)}t.autoClear=i}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Tt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*es-1),y=o/g,m=isFinite(o)?1+Math.floor(u*y):es;m>es&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let p=[],w=0;for(let C=0;C<es;++C){let L=C/y,E=Math.exp(-L*L/2);p.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let b=this._sizeLods[r],R=3*b*(r>S-ra?r-S+ra:0),A=4*(this._cubeSize-b);jf(t,R,A,3*b,2*b),c.setRenderTarget(t),c.render(d,ty)}};function pP(n){let e=[],t=[],i=[],r=n,o=n-ra+1+KE.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let c=1/a;s>n-ra?c=KE[s-n+ra-1]:s===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),S=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let A=0;A<h;A++){let C=A%3*2/3-1,L=A>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(E,y*g*A),S.set(f,m*g*A);let x=[A,A,A,A,A,A];b.set(x,p*g*A)}let R=new ei;R.setAttribute("position",new Qn(w,y)),R.setAttribute("uv",new Qn(S,m)),R.setAttribute("faceIndex",new Qn(b,p)),e.push(R),r>ra&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eM(n,e,t){let i=new vn(n,e,t);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mP(n,e,t){let i=new Float32Array(es),r=new O(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:my(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function tM(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:my(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function nM(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:my(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function my(){return`

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
	`}function gP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===cf||c===lf,u=c===Xo||c===Yo;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $f(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new $f(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function vP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yP(n,e,t,i){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let S=0,b=w.length;S<b;S+=3){let R=w[S+0],A=w[S+1],C=w[S+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){let w=g.array;y=g.version;for(let S=0,b=w.length/3-1;S<b;S+=3){let R=S+0,A=S+1,C=S+2;f.push(R,A,A,C,C,R)}}else return;let m=new(Zv(f)?Tc:wc)(f,1);m.version=y;let p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){let f=o.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function _P(n,e,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,h){n.drawElements(i,h,o,f*s),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,o,f*s,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/s,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bP(n,e,t){let i=new WeakMap,r=new Bt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;g===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let R=a.attributes.position.count*b,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let C=new Float32Array(R*A*4*d),L=new Sc(C,R,A,d);L.type=hi,L.needsUpdate=!0;let E=b*4;for(let D=0;D<d;D++){let H=p[D],k=w[D],$=S[D],q=R*A*4*D;for(let j=0;j<H.count;j++){let Z=j*E;g===!0&&(r.fromBufferAttribute(H,j),C[q+Z+0]=r.x,C[q+Z+1]=r.y,C[q+Z+2]=r.z,C[q+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,j),C[q+Z+4]=r.x,C[q+Z+5]=r.y,C[q+Z+6]=r.z,C[q+Z+7]=0),m===!0&&(r.fromBufferAttribute($,j),C[q+Z+8]=r.x,C[q+Z+9]=r.y,C[q+Z+10]=r.z,C[q+Z+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Ee(R,A)},i.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function EP(n,e,t,i){let r=new WeakMap;function o(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}var bM=new eo,iM=new Ic(1,1),EM=new Sc,MM=new Pd,SM=new Dc,rM=[],oM=[],sM=new Float32Array(16),aM=new Float32Array(9),cM=new Float32Array(4);function sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=rM[r];if(o===void 0&&(o=new Float32Array(r),rM[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xf(n,e){let t=oM[e];t===void 0&&(t=new Int32Array(e),oM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function wP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function TP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function CP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;cM.set(i),n.uniformMatrix2fv(this.addr,!1,cM),Jt(t,i)}}function DP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;aM.set(i),n.uniformMatrix3fv(this.addr,!1,aM),Jt(t,i)}}function IP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;sM.set(i),n.uniformMatrix4fv(this.addr,!1,sM),Jt(t,i)}}function AP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function NP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function PP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function OP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function FP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function kP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function UP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(iM.compareFunction=qv,o=iM):o=bM,t.setTexture2D(e||o,r)}function BP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||MM,r)}function VP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||SM,r)}function HP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||EM,r)}function zP(n){switch(n){case 5126:return MP;case 35664:return SP;case 35665:return wP;case 35666:return TP;case 35674:return CP;case 35675:return DP;case 35676:return IP;case 5124:case 35670:return AP;case 35667:case 35671:return RP;case 35668:case 35672:return NP;case 35669:case 35673:return PP;case 5125:return OP;case 36294:return LP;case 36295:return FP;case 36296:return kP;case 35678:case 36198:case 36298:case 36306:case 35682:return UP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return VP;case 36289:case 36303:case 36311:case 36292:return HP}}function GP(n,e){n.uniform1fv(this.addr,e)}function jP(n,e){let t=sa(e,this.size,2);n.uniform2fv(this.addr,t)}function WP(n,e){let t=sa(e,this.size,3);n.uniform3fv(this.addr,t)}function $P(n,e){let t=sa(e,this.size,4);n.uniform4fv(this.addr,t)}function qP(n,e){let t=sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XP(n,e){let t=sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YP(n,e){let t=sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZP(n,e){n.uniform1iv(this.addr,e)}function KP(n,e){n.uniform2iv(this.addr,e)}function JP(n,e){n.uniform3iv(this.addr,e)}function QP(n,e){n.uniform4iv(this.addr,e)}function eO(n,e){n.uniform1uiv(this.addr,e)}function tO(n,e){n.uniform2uiv(this.addr,e)}function nO(n,e){n.uniform3uiv(this.addr,e)}function iO(n,e){n.uniform4uiv(this.addr,e)}function rO(n,e,t){let i=this.cache,r=e.length,o=Xf(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||bM,o[s])}function oO(n,e,t){let i=this.cache,r=e.length,o=Xf(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||MM,o[s])}function sO(n,e,t){let i=this.cache,r=e.length,o=Xf(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||SM,o[s])}function aO(n,e,t){let i=this.cache,r=e.length,o=Xf(t,r);Kt(i,o)||(n.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||EM,o[s])}function cO(n){switch(n){case 5126:return GP;case 35664:return jP;case 35665:return WP;case 35666:return $P;case 35674:return qP;case 35675:return XP;case 35676:return YP;case 5124:case 35670:return ZP;case 35667:case 35671:return KP;case 35668:case 35672:return JP;case 35669:case 35673:return QP;case 5125:return eO;case 36294:return tO;case 36295:return nO;case 36296:return iO;case 35678:case 36198:case 36298:case 36306:case 35682:return rO;case 35679:case 36299:case 36307:return oO;case 35680:case 36300:case 36308:case 36293:return sO;case 36289:case 36303:case 36311:case 36292:return aO}}var ay=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zP(t.type)}},cy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cO(t.type)}},ly=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},sy=/(\w+)(\])?(\[|\.)?/g;function lM(n,e){n.seq.push(e),n.map[e.id]=e}function lO(n,e,t){let i=n.name,r=i.length;for(sy.lastIndex=0;;){let o=sy.exec(i),s=sy.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){lM(t,l===void 0?new ay(a,n,e):new cy(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ly(a),lM(t,d)),t=d}}}var oa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);lO(o,s,this)}}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function uM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uO=37297,dO=0;function fO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var dM=new We;function hO(n){nt._getMatrix(dM,nt.workingColorSpace,n);let e=`mat3( ${dM.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case bc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fO(n.getShaderSource(e),s)}else return r}function pO(n,e){let t=hO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mO(n,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="Cineon";break;case rf:t="ACESFilmic";break;case sf:t="AgX";break;case af:t="Neutral";break;case of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wf=new O;function gO(){nt.getLuminanceCoefficients(Wf);let n=Wf.x.toFixed(4),e=Wf.y.toFixed(4),t=Wf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wc).join(`
`)}function yO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _O(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Wc(n){return n!==""}function hM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xO=/^[ \t]*#include +<([\w\d./]+)>/gm;function uy(n){return n.replace(xO,EO)}var bO=new Map;function EO(n,e){let t=Ke[e];if(t===void 0){let i=bO.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uy(t)}var MO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mM(n){return n.replace(MO,SO)}function SO(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function gM(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function wO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function TO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function DO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kv:e="ENVMAP_BLENDING_MULTIPLY";break;case PE:e="ENVMAP_BLENDING_MIX";break;case OE:e="ENVMAP_BLENDING_ADD";break}return e}function IO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AO(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=wO(t),l=TO(t),u=CO(t),d=DO(t),f=IO(t),h=vO(t),g=yO(o),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wc).join(`
`),p.length>0&&(p+=`
`)):(m=[gM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wc).join(`
`),p=[gM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ri?mO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,pO("linearToOutputTexel",t.outputColorSpace),gO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wc).join(`
`)),s=uy(s),s=hM(s,t),s=pM(s,t),a=uy(a),a=hM(a,t),a=pM(a,t),s=mM(s),a=mM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+s,b=w+p+a,R=uM(r,r.VERTEX_SHADER,S),A=uM(r,r.FRAGMENT_SHADER,b);r.attachShader(y,R),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(D){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(A).trim(),q=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,A);else{let Z=fM(r,R,"vertex"),V=fM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||$==="")&&(j=!1);j&&(D.diagnostics={runnable:q,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(R),r.deleteShader(A),L=new oa(r,y),E=_O(r,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,uO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dO++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}var RO=0,dy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fy(e),t.set(e,i)),i}},fy=class{constructor(e){this.id=RO++,this.code=e,this.usedTimes=0}};function NO(n,e,t,i,r,o,s){let a=new jo,c=new dy,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,D,H,k){let $=H.fog,q=k.geometry,j=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),V=Z&&Z.mapping===Uc?Z.image.height:null,ne=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=de!==void 0?de.length:0,Qe=0;q.morphAttributes.position!==void 0&&(Qe=1),q.morphAttributes.normal!==void 0&&(Qe=2),q.morphAttributes.color!==void 0&&(Qe=3);let ht,G,te,_e;if(ne){let yt=$i[ne];ht=yt.vertexShader,G=yt.fragmentShader}else ht=E.vertexShader,G=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),_e=c.getFragmentShaderID(E);let ce=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),ct=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,Pt=!!E.map,Ot=!!E.matcap,lt=!!Z,T=!!E.aoMap,_n=!!E.lightMap,ut=!!E.bumpMap,Mt=!!E.normalMap,be=!!E.displacementMap,ot=!!E.emissiveMap,Ie=!!E.metalnessMap,qe=!!E.roughnessMap,qt=E.anisotropy>0,M=E.clearcoat>0,v=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,Y=E.transmission>0,z=qt&&!!E.anisotropyMap,Se=M&&!!E.clearcoatMap,se=M&&!!E.clearcoatNormalMap,ye=M&&!!E.clearcoatRoughnessMap,we=F&&!!E.iridescenceMap,K=F&&!!E.iridescenceThicknessMap,fe=W&&!!E.sheenColorMap,Pe=W&&!!E.sheenRoughnessMap,Re=!!E.specularMap,re=!!E.specularColorMap,Ue=!!E.specularIntensityMap,I=Y&&!!E.transmissionMap,le=Y&&!!E.thicknessMap,J=!!E.gradientMap,me=!!E.alphaMap,Q=E.alphaTest>0,X=!!E.alphaHash,ge=!!E.extensions,ze=Ri;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Ct={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:G,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:ct,instancingColor:ct&&k.instanceColor!==null,instancingMorph:ct&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:pr,alphaToCoverage:!!E.alphaToCoverage,map:Pt,matcap:Ot,envMap:lt,envMapMode:lt&&Z.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:_n,bumpMap:ut,normalMap:Mt,displacementMap:f&&be,emissiveMap:ot,normalMapObjectSpace:Mt&&E.normalMapType===UE,normalMapTangentSpace:Mt&&E.normalMapType===$v,metalnessMap:Ie,roughnessMap:qe,anisotropy:qt,anisotropyMap:z,clearcoat:M,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:v,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:K,sheen:W,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:Re,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:I,thicknessMap:le,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ho&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:X,combine:E.combine,mapUv:Pt&&y(E.map.channel),aoMapUv:T&&y(E.aoMap.channel),lightMapUv:_n&&y(E.lightMap.channel),bumpMapUv:ut&&y(E.bumpMap.channel),normalMapUv:Mt&&y(E.normalMap.channel),displacementMapUv:be&&y(E.displacementMap.channel),emissiveMapUv:ot&&y(E.emissiveMap.channel),metalnessMapUv:Ie&&y(E.metalnessMap.channel),roughnessMapUv:qe&&y(E.roughnessMap.channel),anisotropyMapUv:z&&y(E.anisotropyMap.channel),clearcoatMapUv:Se&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:K&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(E.sheenRoughnessMap.channel),specularMapUv:Re&&y(E.specularMap.channel),specularColorMapUv:re&&y(E.specularColorMap.channel),specularIntensityMapUv:Ue&&y(E.specularIntensityMap.channel),transmissionMapUv:I&&y(E.transmissionMap.channel),thicknessMapUv:le&&y(E.thicknessMap.channel),alphaMapUv:me&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Mt||qt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Pt||me),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Pt&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ni,flipSided:E.side===An,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(x,E),S(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function w(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){let x=g[E.type],D;if(x){let H=$i[x];D=yr.clone(H.uniforms)}else D=E.uniforms;return D}function R(E,x){let D;for(let H=0,k=u.length;H<k;H++){let $=u[H];if($.cacheKey===x){D=$,++D.usedTimes;break}}return D===void 0&&(D=new AO(n,x,E,o),u.push(D)),D}function A(E){if(--E.usedTimes===0){let x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:L}}function PO(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function OO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yM(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=s(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||OO),i.length>1&&i.sort(f||vM),r.length>1&&r.sort(f||vM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function LO(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new yM,n.set(i,[s])):r>=o.length?(s=new yM,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function FO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Me};break;case"SpotLight":t={position:new O,direction:new O,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function kO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UO=0;function BO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VO(n){let e=new FO,t=kO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,o=new Gt,s=new Gt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,S=0,b=0,R=0,A=0,C=0;l.sort(BO);for(let E=0,x=l.length;E<x;E++){let D=l[E],H=D.color,k=D.intensity,$=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*k,d+=H.g*k,f+=H.b*k;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);C++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=j,h++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(H).multiplyScalar(k),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;let Z=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[y]=Z.matrix,D.castShadow){let V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=q,b++}y++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(H).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let Z=D.shadow,V=t.get(D);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(k),j.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=h,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=R,L.numLightProbes=C,i.version=UO++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(S.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function _M(n){let e=new VO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function HO(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new _M(n),e.set(r,[a])):o>=s.length?(a=new _M(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GO=`uniform sampler2D shadow_pass;
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
}`;function jO(n,e,t){let i=new Zs,r=new Ee,o=new Ee,s=new Bt,a=new Od({depthPacking:kE}),c=new Ld,l={},u=t.maxTextureSize,d={[hr]:An,[An]:hr,[ni]:ni},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:zO,fragmentShader:GO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new ei;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ov;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ai),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==Wi&&this.type===Wi,$=p===Wi&&this.type!==Wi;for(let q=0,j=A.length;q<j;q++){let Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ne=V.getFrameExtents();if(r.multiply(ne),o.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,V.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,V.mapSize.y=o.y)),V.map===null||k===!0||$===!0){let Te=this.type!==Wi?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new vn(r.x,r.y,Te),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let de=V.getViewportCount();for(let Te=0;Te<de;Te++){let Qe=V.getViewport(Te);s.set(o.x*Qe.x,o.y*Qe.y,o.x*Qe.z,o.y*Qe.w),H.viewport(s),V.updateMatrices(Z,Te),i=V.getFrustum(),b(C,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&w(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,D)};function w(A,C){let L=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,y,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,L,h,y,null)}function S(A,C,L,E){let x=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=x.uuid,k=C.uuid,$=l[H];$===void 0&&($={},l[H]=$);let q=$[k];q===void 0&&(q=x.clone(),$[k]=q,C.addEventListener("dispose",R)),x=q}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Wi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=n.properties.get(x);H.light=L}return x}function b(A,C,L,E,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let k=e.update(A),$=A.material;if(Array.isArray($)){let q=k.groups;for(let j=0,Z=q.length;j<Z;j++){let V=q[j],ne=$[V.materialIndex];if(ne&&ne.visible){let de=S(A,ne,E,x);A.onBeforeShadow(n,A,C,L,k,de,V),n.renderBufferDirect(L,null,k,de,A,V),A.onAfterShadow(n,A,C,L,k,de,V)}}}else if($.visible){let q=S(A,$,E,x);A.onBeforeShadow(n,A,C,L,k,q,null),n.renderBufferDirect(L,null,k,q,A,null),A.onAfterShadow(n,A,C,L,k,q,null)}}let H=A.children;for(let k=0,$=H.length;k<$;k++)b(H[k],C,L,E,x)}function R(A){A.target.removeEventListener("dispose",R);for(let L in l){let E=l[L],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}var WO={[qd]:Xd,[Yd]:Jd,[Zd]:Qd,[zo]:Kd,[Xd]:qd,[Jd]:Yd,[Qd]:Zd,[Kd]:zo};function $O(n,e){function t(){let I=!1,le=new Bt,J=null,me=new Bt(0,0,0,0);return{setMask:function(Q){J!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){I=Q},setClear:function(Q,X,ge,ze,Ct){Ct===!0&&(Q*=ze,X*=ze,ge*=ze),le.set(Q,X,ge,ze),me.equals(le)===!1&&(n.clearColor(Q,X,ge,ze),me.copy(le))},reset:function(){I=!1,J=null,me.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,J=null,me=null,Q=null;return{setReversed:function(X){if(le!==X){let ge=e.get("EXT_clip_control");X?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),le=X;let ze=Q;Q=null,this.setClear(ze)}},getReversed:function(){return le},setTest:function(X){X?ce(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(X){J!==X&&!I&&(n.depthMask(X),J=X)},setFunc:function(X){if(le&&(X=WO[X]),me!==X){switch(X){case qd:n.depthFunc(n.NEVER);break;case Xd:n.depthFunc(n.ALWAYS);break;case Yd:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case Zd:n.depthFunc(n.EQUAL);break;case Kd:n.depthFunc(n.GEQUAL);break;case Jd:n.depthFunc(n.GREATER);break;case Qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=X}},setLocked:function(X){I=X},setClear:function(X){Q!==X&&(le&&(X=1-X),n.clearDepth(X),Q=X)},reset:function(){I=!1,J=null,me=null,Q=null,le=!1}}}function r(){let I=!1,le=null,J=null,me=null,Q=null,X=null,ge=null,ze=null,Ct=null;return{setTest:function(yt){I||(yt?ce(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(yt){le!==yt&&!I&&(n.stencilMask(yt),le=yt)},setFunc:function(yt,mi,qi){(J!==yt||me!==mi||Q!==qi)&&(n.stencilFunc(yt,mi,qi),J=yt,me=mi,Q=qi)},setOp:function(yt,mi,qi){(X!==yt||ge!==mi||ze!==qi)&&(n.stencilOp(yt,mi,qi),X=yt,ge=mi,ze=qi)},setLocked:function(yt){I=yt},setClear:function(yt){Ct!==yt&&(n.clearStencil(yt),Ct=yt)},reset:function(){I=!1,le=null,J=null,me=null,Q=null,X=null,ge=null,ze=null,Ct=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,b=null,R=null,A=null,C=new Me(0,0,0),L=0,E=!1,x=null,D=null,H=null,k=null,$=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,Z=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Z>=2);let ne=null,de={},Te=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),ht=new Bt().fromArray(Te),G=new Bt().fromArray(Qe);function te(I,le,J,me){let Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(I,X),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<J;ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(le+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}let _e={};_e[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),s.setFunc(zo),ut(!1),Mt(Pv),ce(n.CULL_FACE),T(Ai);function ce(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function xe(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ct(I,le){return d[I]!==le?(n.bindFramebuffer(I,le),d[I]=le,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(I,le){let J=h,me=!1;if(I){J=f.get(le),J===void 0&&(J=[],f.set(le,J));let Q=I.textures;if(J.length!==Q.length||J[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ge=Q.length;X<ge;X++)J[X]=n.COLOR_ATTACHMENT0+X;J.length=Q.length,me=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,me=!0);me&&n.drawBuffers(J)}function Pt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Ot={[Gr]:n.FUNC_ADD,[gE]:n.FUNC_SUBTRACT,[vE]:n.FUNC_REVERSE_SUBTRACT};Ot[yE]=n.MIN,Ot[_E]=n.MAX;let lt={[xE]:n.ZERO,[bE]:n.ONE,[EE]:n.SRC_COLOR,[Td]:n.SRC_ALPHA,[DE]:n.SRC_ALPHA_SATURATE,[TE]:n.DST_COLOR,[SE]:n.DST_ALPHA,[ME]:n.ONE_MINUS_SRC_COLOR,[Cd]:n.ONE_MINUS_SRC_ALPHA,[CE]:n.ONE_MINUS_DST_COLOR,[wE]:n.ONE_MINUS_DST_ALPHA,[IE]:n.CONSTANT_COLOR,[AE]:n.ONE_MINUS_CONSTANT_COLOR,[RE]:n.CONSTANT_ALPHA,[NE]:n.ONE_MINUS_CONSTANT_ALPHA};function T(I,le,J,me,Q,X,ge,ze,Ct,yt){if(I===Ai){y===!0&&(xe(n.BLEND),y=!1);return}if(y===!1&&(ce(n.BLEND),y=!0),I!==mE){if(I!==m||yt!==E){if((p!==Gr||b!==Gr)&&(n.blendEquation(n.FUNC_ADD),p=Gr,b=Gr),yt)switch(I){case Ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kc:n.blendFunc(n.ONE,n.ONE);break;case Lv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,S=null,R=null,A=null,C.set(0,0,0),L=0,m=I,E=yt}return}Q=Q||le,X=X||J,ge=ge||me,(le!==p||Q!==b)&&(n.blendEquationSeparate(Ot[le],Ot[Q]),p=le,b=Q),(J!==w||me!==S||X!==R||ge!==A)&&(n.blendFuncSeparate(lt[J],lt[me],lt[X],lt[ge]),w=J,S=me,R=X,A=ge),(ze.equals(C)===!1||Ct!==L)&&(n.blendColor(ze.r,ze.g,ze.b,Ct),C.copy(ze),L=Ct),m=I,E=!1}function _n(I,le){I.side===ni?xe(n.CULL_FACE):ce(n.CULL_FACE);let J=I.side===An;le&&(J=!J),ut(J),I.blending===Ho&&I.transparent===!1?T(Ai):T(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);let me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function Mt(I){I!==hE?(ce(n.CULL_FACE),I!==D&&(I===Pv?n.cullFace(n.BACK):I===pE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),D=I}function be(I){I!==H&&(j&&n.lineWidth(I),H=I)}function ot(I,le,J){I?(ce(n.POLYGON_OFFSET_FILL),(k!==le||$!==J)&&(n.polygonOffset(le,J),k=le,$=J)):xe(n.POLYGON_OFFSET_FILL)}function Ie(I){I?ce(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function qe(I){I===void 0&&(I=n.TEXTURE0+q-1),ne!==I&&(n.activeTexture(I),ne=I)}function qt(I,le,J){J===void 0&&(ne===null?J=n.TEXTURE0+q-1:J=ne);let me=de[J];me===void 0&&(me={type:void 0,texture:void 0},de[J]=me),(me.type!==I||me.texture!==le)&&(ne!==J&&(n.activeTexture(J),ne=J),n.bindTexture(I,le||_e[I]),me.type=I,me.texture=le)}function M(){let I=de[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){ht.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function Pe(I){G.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function Re(I,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let me=J.get(I);me===void 0&&(me=n.getUniformBlockIndex(le,I.name),J.set(I,me))}function re(I,le){let me=l.get(le).get(I);c.get(le)!==me&&(n.uniformBlockBinding(le,me,I.__bindingPointIndex),c.set(le,me))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,de={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,S=null,b=null,R=null,A=null,C=new Me(0,0,0),L=0,E=!1,x=null,D=null,H=null,k=null,$=null,ht.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:xe,bindFramebuffer:ct,drawBuffers:Oe,useProgram:Pt,setBlending:T,setMaterial:_n,setFlipSided:ut,setCullFace:Mt,setLineWidth:be,setPolygonOffset:ot,setScissorTest:Ie,activeTexture:qe,bindTexture:qt,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:we,texImage3D:K,updateUBOMapping:Re,uniformBlockBinding:re,texStorage2D:se,texStorage3D:ye,texSubImage2D:W,texSubImage3D:Y,compressedTexSubImage2D:z,compressedTexSubImage3D:Se,scissor:fe,viewport:Pe,reset:Ue}}function qO(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):Mc("canvas")}function y(M,v,F){let W=1,Y=qt(M);if((Y.width>F||Y.height>F)&&(W=F/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let z=Math.floor(W*Y.width),Se=Math.floor(W*Y.height);d===void 0&&(d=g(z,Se));let se=v?g(z,Se):d;return se.width=z,se.height=Se,se.getContext("2d").drawImage(M,0,0,z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+z+"x"+Se+")."),se}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(M,v,F,W,Y=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=v;if(v===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),v===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let Se=Y?bc:nt.getTransfer(W);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=Se===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(M,v){let F;return M?v===null||v===Jr||v===ea?F=n.DEPTH24_STENCIL8:v===hi?F=n.DEPTH32F_STENCIL8:v===Qs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jr||v===ea?F=n.DEPTH_COMPONENT24:v===hi?F=n.DEPTH_COMPONENT32F:v===Qs&&(F=n.DEPTH_COMPONENT16),F}function R(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==di&&M.minFilter!==Vn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){let v=M.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&u.delete(v)}function C(M){let v=M.target;v.removeEventListener("dispose",C),x(v)}function L(M){let v=i.get(M);if(v.__webglInit===void 0)return;let F=M.source,W=f.get(F);if(W){let Y=W[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(M),Object.keys(W).length===0&&f.delete(F)}i.remove(M)}function E(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let F=M.source,W=f.get(F);delete W[v.__cacheKey],s.memory.textures--}function x(M){let v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Y=0;Y<v.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=M.textures;for(let W=0,Y=F.length;W<Y;W++){let z=i.get(F[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),s.memory.textures--),i.remove(F[W])}i.remove(M)}let D=0;function H(){D=0}function k(){let M=D;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function $(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function q(M,v){let F=i.get(M);if(M.isVideoTexture&&Ie(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,M,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function j(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){_e(F,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){_e(F,M,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function V(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){ce(F,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let ne={[Dd]:n.REPEAT,[zr]:n.CLAMP_TO_EDGE,[Id]:n.MIRRORED_REPEAT},de={[di]:n.NEAREST,[LE]:n.NEAREST_MIPMAP_NEAREST,[Bc]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[uf]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR},Te={[BE]:n.NEVER,[WE]:n.ALWAYS,[VE]:n.LESS,[qv]:n.LEQUAL,[HE]:n.EQUAL,[jE]:n.GEQUAL,[zE]:n.GREATER,[GE]:n.NOTEQUAL};function Qe(M,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vn||v.magFilter===uf||v.magFilter===Bc||v.magFilter===Kr||v.minFilter===Vn||v.minFilter===uf||v.minFilter===Bc||v.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ne[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ne[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ne[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===di||v.minFilter!==Bc&&v.minFilter!==Kr||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ht(M,v){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",A));let W=v.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let z=$(v);if(z!==M.__cacheKey){Y[z]===void 0&&(Y[z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Y[z].usedTimes++;let Se=Y[M.__cacheKey];Se!==void 0&&(Y[M.__cacheKey].usedTimes--,Se.usedTimes===0&&E(v)),M.__cacheKey=z,M.__webglTexture=Y[z].texture}return F}function G(M,v,F){return Math.floor(Math.floor(M/F)/v)}function te(M,v,F,W){let z=M.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{z.sort((K,fe)=>K.start-fe.start);let Se=0;for(let K=1;K<z.length;K++){let fe=z[Se],Pe=z[K],Re=fe.start+fe.count,re=G(Pe.start,v.width,4),Ue=G(fe.start,v.width,4);Pe.start<=Re+1&&re===Ue&&G(Pe.start+Pe.count-1,v.width,4)===re?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Se,z[Se]=Pe)}z.length=Se+1;let se=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let K=0,fe=z.length;K<fe;K++){let Pe=z[K],Re=Math.floor(Pe.start/4),re=Math.ceil(Pe.count/4),Ue=Re%v.width,I=Math.floor(Re/v.width),le=re,J=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ue,I,le,J,F,W,v.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function _e(M,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Y=ht(M,v),z=v.source;t.bindTexture(W,M.__webglTexture,n.TEXTURE0+F);let Se=i.get(z);if(z.version!==Se.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);let se=nt.getPrimaries(nt.workingColorSpace),ye=v.colorSpace===vr?null:nt.getPrimaries(v.colorSpace),we=v.colorSpace===vr||se===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let K=y(v.image,!1,r.maxTextureSize);K=qe(v,K);let fe=o.convert(v.format,v.colorSpace),Pe=o.convert(v.type),Re=S(v.internalFormat,fe,Pe,v.colorSpace,v.isVideoTexture);Qe(W,v);let re,Ue=v.mipmaps,I=v.isVideoTexture!==!0,le=Se.__version===void 0||Y===!0,J=z.dataReady,me=R(v,K);if(v.isDepthTexture)Re=b(v.format===ta,v.type),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Re,K.width,K.height,0,fe,Pe,null));else if(v.isDataTexture)if(Ue.length>0){I&&le&&t.texStorage2D(n.TEXTURE_2D,me,Re,Ue[0].width,Ue[0].height);for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,Pe,re.data):t.texImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,fe,Pe,re.data);v.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,me,Re,K.width,K.height),J&&te(v,K,fe,Pe)):t.texImage2D(n.TEXTURE_2D,0,Re,K.width,K.height,0,fe,Pe,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,Ue[0].width,Ue[0].height,K.depth);for(let Q=0,X=Ue.length;Q<X;Q++)if(re=Ue[Q],v.format!==Hn)if(fe!==null)if(I){if(J)if(v.layerUpdates.size>0){let ge=ey(re.width,re.height,v.format,v.type);for(let ze of v.layerUpdates){let Ct=re.data.subarray(ze*ge/re.data.BYTES_PER_ELEMENT,(ze+1)*ge/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ze,re.width,re.height,1,fe,Ct)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,K.depth,fe,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Re,re.width,re.height,K.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?J&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,K.depth,fe,Pe,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Re,re.width,re.height,K.depth,0,fe,Pe,re.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,me,Re,Ue[0].width,Ue[0].height);for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],v.format!==Hn?fe!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,re.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,re.width,re.height,fe,Pe,re.data):t.texImage2D(n.TEXTURE_2D,Q,Re,re.width,re.height,0,fe,Pe,re.data)}else if(v.isDataArrayTexture)if(I){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Re,K.width,K.height,K.depth),J)if(v.layerUpdates.size>0){let Q=ey(K.width,K.height,v.format,v.type);for(let X of v.layerUpdates){let ge=K.data.subarray(X*Q/K.data.BYTES_PER_ELEMENT,(X+1)*Q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,fe,Pe,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,Pe,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,K.width,K.height,K.depth,0,fe,Pe,K.data);else if(v.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,me,Re,K.width,K.height,K.depth),J&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,Pe,K.data)):t.texImage3D(n.TEXTURE_3D,0,Re,K.width,K.height,K.depth,0,fe,Pe,K.data);else if(v.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,me,Re,K.width,K.height);else{let Q=K.width,X=K.height;for(let ge=0;ge<me;ge++)t.texImage2D(n.TEXTURE_2D,ge,Re,Q,X,0,fe,Pe,null),Q>>=1,X>>=1}}else if(Ue.length>0){if(I&&le){let Q=qt(Ue[0]);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}for(let Q=0,X=Ue.length;Q<X;Q++)re=Ue[Q],I?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe,Pe,re):t.texImage2D(n.TEXTURE_2D,Q,Re,fe,Pe,re);v.generateMipmaps=!1}else if(I){if(le){let Q=qt(K);t.texStorage2D(n.TEXTURE_2D,me,Re,Q.width,Q.height)}J&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Pe,K)}else t.texImage2D(n.TEXTURE_2D,0,Re,fe,Pe,K);m(v)&&p(W),Se.__version=z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ce(M,v,F){if(v.image.length!==6)return;let W=ht(M,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let z=i.get(Y);if(Y.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+F);let Se=nt.getPrimaries(nt.workingColorSpace),se=v.colorSpace===vr?null:nt.getPrimaries(v.colorSpace),ye=v.colorSpace===vr||Se===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let X=0;X<6;X++)!we&&!K?fe[X]=y(v.image[X],!0,r.maxCubemapSize):fe[X]=K?v.image[X].image:v.image[X],fe[X]=qe(v,fe[X]);let Pe=fe[0],Re=o.convert(v.format,v.colorSpace),re=o.convert(v.type),Ue=S(v.internalFormat,Re,re,v.colorSpace),I=v.isVideoTexture!==!0,le=z.__version===void 0||W===!0,J=Y.dataReady,me=R(v,Pe);Qe(n.TEXTURE_CUBE_MAP,v);let Q;if(we){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,Pe.width,Pe.height);for(let X=0;X<6;X++){Q=fe[X].mipmaps;for(let ge=0;ge<Q.length;ge++){let ze=Q[ge];v.format!==Hn?Re!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,Ue,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,0,0,ze.width,ze.height,Re,re,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge,Ue,ze.width,ze.height,0,Re,re,ze.data)}}}else{if(Q=v.mipmaps,I&&le){Q.length>0&&me++;let X=qt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ue,X.width,X.height)}for(let X=0;X<6;X++)if(K){I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,fe[X].width,fe[X].height,Re,re,fe[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,fe[X].width,fe[X].height,0,Re,re,fe[X].data);for(let ge=0;ge<Q.length;ge++){let Ct=Q[ge].image[X].image;I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,Ct.width,Ct.height,Re,re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,Ue,Ct.width,Ct.height,0,Re,re,Ct.data)}}else{I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,re,fe[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,Re,re,fe[X]);for(let ge=0;ge<Q.length;ge++){let ze=Q[ge];I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,0,0,Re,re,ze.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ge+1,Ue,Re,re,ze.image[X])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Y.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function xe(M,v,F,W,Y,z){let Se=o.convert(F.format,F.colorSpace),se=o.convert(F.type),ye=S(F.internalFormat,Se,se,F.colorSpace),we=i.get(v),K=i.get(F);if(K.__renderTarget=v,!we.__hasExternalTextures){let fe=Math.max(1,v.width>>z),Pe=Math.max(1,v.height>>z);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,z,ye,fe,Pe,v.depth,0,Se,se,null):t.texImage2D(Y,z,ye,fe,Pe,0,Se,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,K.__webglTexture,0,be(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,K.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(M,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let W=v.depthTexture,Y=W&&W.isDepthTexture?W.type:null,z=b(v.stencilBuffer,Y),Se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=be(v);ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,z,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,M)}else{let W=v.textures;for(let Y=0;Y<W.length;Y++){let z=W[Y],Se=o.convert(z.format,z.colorSpace),se=o.convert(z.type),ye=S(z.internalFormat,Se,se,z.colorSpace),we=be(v);F&&ot(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ye,v.width,v.height):ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ye,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ye,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let Y=W.__webglTexture,z=be(v);if(v.depthTexture.format===Gs)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===ta)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pt(M){let v=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=W}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let W=M.texture.mipmaps;W&&W.length>0?Oe(v.__webglFramebuffer[0],M):Oe(v.__webglFramebuffer,M)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),ct(v.__webglDepthbuffer[W],M,!1);else{let Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,z)}}else{let W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ct(v.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(M,v,F){let W=i.get(M);v!==void 0&&xe(W.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pt(M)}function lt(M){let v=M.texture,F=i.get(M),W=i.get(v);M.addEventListener("dispose",C);let Y=M.textures,z=M.isWebGLCubeRenderTarget===!0,Se=Y.length>1;if(Se||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,s.memory.textures++),z){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ye=0;ye<v.mipmaps.length;ye++)F.__webglFramebuffer[se][ye]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let se=0,ye=Y.length;se<ye;se++){let we=i.get(Y[se]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&ot(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<Y.length;se++){let ye=Y[se];F.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let we=o.convert(ye.format,ye.colorSpace),K=o.convert(ye.type),fe=S(ye.internalFormat,we,K,ye.colorSpace,M.isXRRenderTarget===!0),Pe=be(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,F.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)xe(F.__webglFramebuffer[se][ye],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye);else xe(F.__webglFramebuffer[se],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,ye=Y.length;se<ye;se++){let we=Y[se],K=i.get(we);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Qe(n.TEXTURE_2D,we),xe(F.__webglFramebuffer,M,we,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,W.__webglTexture),Qe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)xe(F.__webglFramebuffer[ye],M,v,n.COLOR_ATTACHMENT0,se,ye);else xe(F.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}M.depthBuffer&&Pt(M)}function T(M){let v=M.textures;for(let F=0,W=v.length;F<W;F++){let Y=v[F];if(m(Y)){let z=w(M),Se=i.get(Y).__webglTexture;t.bindTexture(z,Se),p(z),t.unbindTexture()}}}let _n=[],ut=[];function Mt(M){if(M.samples>0){if(ot(M)===!1){let v=M.textures,F=M.width,W=M.height,Y=n.COLOR_BUFFER_BIT,z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(M),se=v.length>1;if(se)for(let we=0;we<v.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ye=M.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<v.length;we++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let K=i.get(v[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,Y,n.NEAREST),c===!0&&(_n.length=0,ut.length=0,_n.push(n.COLOR_ATTACHMENT0+we),M.depthBuffer&&M.resolveDepthBuffer===!1&&(_n.push(z),ut.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_n))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let we=0;we<v.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let K=i.get(v[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,K,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function be(M){return Math.min(r.maxSamples,M.samples)}function ot(M){let v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ie(M){let v=s.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function qe(M,v){let F=M.colorSpace,W=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==pr&&F!==vr&&(nt.getTransfer(F)===ft?(W!==Hn||Y!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function qt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ot}function XO(n,e){function t(i,r=vr){let o,s=nt.getTransfer(r);if(i===Ni)return n.UNSIGNED_BYTE;if(i===ff)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uv)return n.BYTE;if(i===Bv)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===df)return n.INT;if(i===Jr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Hv)return n.ALPHA;if(i===zv)return n.RGB;if(i===Hn)return n.RGBA;if(i===Gs)return n.DEPTH_COMPONENT;if(i===ta)return n.DEPTH_STENCIL;if(i===Gv)return n.RED;if(i===pf)return n.RED_INTEGER;if(i===jv)return n.RG;if(i===mf)return n.RG_INTEGER;if(i===gf)return n.RGBA_INTEGER;if(i===Vc||i===Hc||i===zc||i===Gc)if(s===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===yf||i===_f||i===xf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bf||i===Ef||i===Mf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===bf||i===Ef)return s===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Mf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sf||i===wf||i===Tf||i===Cf||i===Df||i===If||i===Af||i===Rf||i===Nf||i===Pf||i===Of||i===Lf||i===Ff||i===kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Df)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ff)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Uf||i===Bf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===jc)return s===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wv||i===Vf||i===Hf||i===zf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===jc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Vf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var YO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZO=`
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

}`,hy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new eo,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xt({vertexShader:YO,fragmentShader:ZO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},py=class extends Gi{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new hy,m=t.getContextAttributes(),p=null,w=null,S=[],b=[],R=new Ee,A=null,C=new gn;C.viewport=new Bt;let L=new gn;L.viewport=new Bt;let E=[C,L],x=new jd,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=S[G];return te===void 0&&(te=new Ys,S[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=S[G];return te===void 0&&(te=new Ys,S[G]=te),te.getGripSpace()},this.getHand=function(G){let te=S[G];return te===void 0&&(te=new Ys,S[G]=te),te.getHandSpace()};function k(G){let te=b.indexOf(G.inputSource);if(te===-1)return;let _e=S[te];_e!==void 0&&(_e.update(G.inputSource,G.frame,l||s),_e.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let G=0;G<S.length;G++){let te=b[G];te!==null&&(b[G]=null,S[G].disconnect(te))}D=null,H=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return St(this,null,function*(){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ce=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?ta:Gs,ce=m.stencil?ea:Jr);let ct={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new vn(f.textureWidth,f.textureHeight,{format:Hn,type:Ni,depthTexture:new Ic(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new vn(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=yield r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(G){for(let te=0;te<G.removed.length;te++){let _e=G.removed[te],ce=b.indexOf(_e);ce>=0&&(b[ce]=null,S[ce].disconnect(_e))}for(let te=0;te<G.added.length;te++){let _e=G.added[te],ce=b.indexOf(_e);if(ce===-1){for(let ct=0;ct<S.length;ct++)if(ct>=b.length){b.push(_e),ce=ct;break}else if(b[ct]===null){b[ct]=_e,ce=ct;break}if(ce===-1)break}let xe=S[ce];xe&&xe.connect(_e)}}let j=new O,Z=new O;function V(G,te,_e){j.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);let ce=j.distanceTo(Z),xe=te.projectionMatrix.elements,ct=_e.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Pt=xe[14]/(xe[10]+1),Ot=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],T=(xe[8]-1)/xe[0],_n=(ct[8]+1)/ct[0],ut=Oe*T,Mt=Oe*_n,be=ce/(-T+_n),ot=be*-T;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ot),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xe[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ie=Oe+be,qe=Pt+be,qt=ut-ot,M=Mt+(ce-ot),v=Ot*Pt/qe*Ie,F=lt*Pt/qe*Ie;G.projectionMatrix.makePerspective(qt,M,v,F,Ie,qe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ne(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,_e=G.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),x.near=L.near=C.near=te,x.far=L.far=C.far=_e,(D!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,H=x.far),C.layers.mask=G.layers.mask|2,L.layers.mask=G.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;let ce=G.parent,xe=x.cameras;ne(x,ce);for(let ct=0;ct<xe.length;ct++)ne(xe[ct],ce);xe.length===2?V(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),de(G,x,ce)};function de(G,te,_e){_e===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(_e.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=js*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Te=null;function Qe(G,te){if(u=te.getViewerPose(l||s),g=te,u!==null){let _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let ce=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Oe=0;Oe<_e.length;Oe++){let Pt=_e[Oe],Ot=null;if(h!==null)Ot=h.getViewport(Pt);else{let T=d.getViewSubImage(f,Pt);Ot=T.viewport,Oe===0&&(e.setRenderTargetTextures(w,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(w))}let lt=E[Oe];lt===void 0&&(lt=new gn,lt.layers.enable(Oe),lt.viewport=new Bt,E[Oe]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Oe===0&&(x.matrix.copy(lt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(lt)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Oe=d.getDepthInformation(_e[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,r.renderState)}}for(let _e=0;_e<S.length;_e++){let ce=b[_e],xe=S[_e];ce!==null&&xe!==void 0&&xe.update(ce,te,l||s)}Te&&Te(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ht=new xM;ht.setAnimationLoop(Qe),this.setAnimationLoop=function(G){Te=G},this.dispose=function(){}}},Jo=new Wr,KO=new Gt;function JO(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Kv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),y(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,b=w.envMapRotation;S&&(m.envMap.value=S,Jo.copy(b),Jo.x*=-1,Jo.y*=-1,Jo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Jo.y*=-1,Jo.z*=-1),m.envMapRotation.value.setFromMatrix4(KO.makeRotationFromEuler(Jo)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QO(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let b=S.program;i.uniformBlockBinding(w,b)}function l(w,S){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",m));let R=S.program;i.updateUBOMapping(w,R);let A=e.render.frame;o[w.id]!==A&&(f(w),o[w.id]=A)}function u(w){let S=d();w.__bindingPointIndex=S;let b=n.createBuffer(),R=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=r[w.id],b=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,C=b.length;A<C;A++){let L=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,x=L.length;E<x;E++){let D=L[E];if(h(D,A,E,R)===!0){let H=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],$=0;for(let q=0;q<k.length;q++){let j=k[q],Z=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,H+$,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,S,b,R){let A=w.value,C=S+"_"+b;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){let S=w.uniforms,b=0,R=16;for(let C=0,L=S.length;C<L;C++){let E=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,D=E.length;x<D;x++){let H=E[x],k=Array.isArray(H.value)?H.value:[H.value];for(let $=0,q=k.length;$<q;$++){let j=k[$],Z=y(j),V=b%R,ne=V%Z.boundary,de=V+ne;b+=ne,de!==0&&R-de<Z.storage&&(b+=R-de),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=Z.storage}}}let A=b%R;return A>0&&(b+=R-A),w.__size=b,w.__cache={},this}function y(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var qf=class{constructor(e={}){let{canvas:t=$E(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,R=!1;this._outputColorSpace=In;let A=0,C=0,L=null,E=-1,x=null,D=new Bt,H=new Bt,k=null,$=new Me(0),q=0,j=t.width,Z=t.height,V=1,ne=null,de=null,Te=new Bt(0,0,j,Z),Qe=new Bt(0,0,j,Z),ht=!1,G=new Zs,te=!1,_e=!1,ce=new Gt,xe=new Gt,ct=new O,Oe=new Bt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function lt(){return L===null?V:1}let T=i;function _n(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",X,!1),T===null){let N="webgl2";if(T=_n(N,_),T===null)throw _n(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ut,Mt,be,ot,Ie,qe,qt,M,v,F,W,Y,z,Se,se,ye,we,K,fe,Pe,Re,re,Ue,I;function le(){ut=new vP(T),ut.init(),re=new XO(T,ut),Mt=new uP(T,ut,e,re),be=new $O(T,ut),Mt.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),ot=new xP(T),Ie=new PO,qe=new qO(T,ut,be,Ie,Mt,re,ot),qt=new fP(b),M=new gP(b),v=new T1(T),Ue=new cP(T,v),F=new yP(T,v,ot,Ue),W=new EP(T,F,v,ot),fe=new bP(T,Mt,qe),ye=new dP(Ie),Y=new NO(b,qt,M,ut,Mt,Ue,ye),z=new JO(b,Ie),Se=new LO,se=new HO(ut),K=new aP(b,qt,M,be,W,h,c),we=new jO(b,W,Mt),I=new QO(T,ot,Mt,be),Pe=new lP(T,ut,ot),Re=new _P(T,ut,ot),ot.programs=Y.programs,b.capabilities=Mt,b.extensions=ut,b.properties=Ie,b.renderLists=Se,b.shadowMap=we,b.state=be,b.info=ot}le();let J=new py(b,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let _=ut.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ut.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(j,Z,!1))},this.getSize=function(_){return _.set(j,Z)},this.setSize=function(_,N,U=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,Z=N,t.width=Math.floor(_*V),t.height=Math.floor(N*V),U===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(j*V,Z*V).floor()},this.setDrawingBufferSize=function(_,N,U){j=_,Z=N,V=U,t.width=Math.floor(_*U),t.height=Math.floor(N*U),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(Te)},this.setViewport=function(_,N,U,B){_.isVector4?Te.set(_.x,_.y,_.z,_.w):Te.set(_,N,U,B),be.viewport(D.copy(Te).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(Qe)},this.setScissor=function(_,N,U,B){_.isVector4?Qe.set(_.x,_.y,_.z,_.w):Qe.set(_,N,U,B),be.scissor(H.copy(Qe).multiplyScalar(V).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(_){be.setScissorTest(ht=_)},this.setOpaqueSort=function(_){ne=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,U=!0){let B=0;if(_){let P=!1;if(L!==null){let ee=L.texture.format;P=ee===gf||ee===mf||ee===pf}if(P){let ee=L.texture.type,ue=ee===Ni||ee===Jr||ee===Qs||ee===ea||ee===ff||ee===hf,ve=K.getClearColor(),he=K.getClearAlpha(),Le=ve.r,Fe=ve.g,Ce=ve.b;ue?(g[0]=Le,g[1]=Fe,g[2]=Ce,g[3]=he,T.clearBufferuiv(T.COLOR,0,g)):(y[0]=Le,y[1]=Fe,y[2]=Ce,y[3]=he,T.clearBufferiv(T.COLOR,0,y))}else B|=T.COLOR_BUFFER_BIT}N&&(B|=T.DEPTH_BUFFER_BIT),U&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",X,!1),K.dispose(),Se.dispose(),se.dispose(),Ie.dispose(),qt.dispose(),M.dispose(),W.dispose(),Ue.dispose(),I.dispose(),Y.dispose(),J.dispose(),J.removeEventListener("sessionstart",Dy),J.removeEventListener("sessionend",Iy),ro.stop()};function me(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let _=ot.autoReset,N=we.enabled,U=we.autoUpdate,B=we.needsUpdate,P=we.type;le(),ot.autoReset=_,we.enabled=N,we.autoUpdate=U,we.needsUpdate=B,we.type=P}function X(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ge(_){let N=_.target;N.removeEventListener("dispose",ge),ze(N)}function ze(_){Ct(_),Ie.remove(_)}function Ct(_){let N=Ie.get(_).programs;N!==void 0&&(N.forEach(function(U){Y.releaseProgram(U)}),_.isShaderMaterial&&Y.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,U,B,P,ee){N===null&&(N=Pt);let ue=P.isMesh&&P.matrixWorld.determinant()<0,ve=oS(_,N,U,B,P);be.setMaterial(B,ue);let he=U.index,Le=1;if(B.wireframe===!0){if(he=F.getWireframeAttribute(U),he===void 0)return;Le=2}let Fe=U.drawRange,Ce=U.attributes.position,tt=Fe.start*Le,_t=(Fe.start+Fe.count)*Le;ee!==null&&(tt=Math.max(tt,ee.start*Le),_t=Math.min(_t,(ee.start+ee.count)*Le)),he!==null?(tt=Math.max(tt,0),_t=Math.min(_t,he.count)):Ce!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,Ce.count));let Lt=_t-tt;if(Lt<0||Lt===1/0)return;Ue.setup(P,B,ve,U,he);let Vt,st=Pe;if(he!==null&&(Vt=v.get(he),st=Re,st.setIndex(Vt)),P.isMesh)B.wireframe===!0?(be.setLineWidth(B.wireframeLinewidth*lt()),st.setMode(T.LINES)):st.setMode(T.TRIANGLES);else if(P.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*lt()),P.isLineSegments?st.setMode(T.LINES):P.isLineLoop?st.setMode(T.LINE_LOOP):st.setMode(T.LINE_STRIP)}else P.isPoints?st.setMode(T.POINTS):P.isSprite&&st.setMode(T.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))st.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ae=P._multiDrawStarts,sn=P._multiDrawCounts,pt=P._multiDrawCount,gi=he?v.get(he).bytesPerElement:1,ns=Ie.get(B).currentProgram.getUniforms();for(let jn=0;jn<pt;jn++)ns.setValue(T,"_gl_DrawID",jn),st.render(Ae[jn]/gi,sn[jn])}else if(P.isInstancedMesh)st.renderInstances(tt,Lt,P.count);else if(U.isInstancedBufferGeometry){let Ae=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,sn=Math.min(U.instanceCount,Ae);st.renderInstances(tt,Lt,sn)}else st.render(tt,Lt)};function yt(_,N,U){_.transparent===!0&&_.side===ni&&_.forceSinglePass===!1?(_.side=An,_.needsUpdate=!0,el(_,N,U),_.side=hr,_.needsUpdate=!0,el(_,N,U),_.side=ni):el(_,N,U)}this.compile=function(_,N,U=null){U===null&&(U=_),p=se.get(U),p.init(N),S.push(p),U.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),_!==U&&_.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let B=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ee=P.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){let ve=ee[ue];yt(ve,U,P),B.add(ve)}else yt(ee,U,P),B.add(ee)}),p=S.pop(),B},this.compileAsync=function(_,N,U=null){let B=this.compile(_,N,U);return new Promise(P=>{function ee(){if(B.forEach(function(ue){Ie.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){P(_);return}setTimeout(ee,10)}ut.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let mi=null;function qi(_){mi&&mi(_)}function Dy(){ro.stop()}function Iy(){ro.start()}let ro=new xM;ro.setAnimationLoop(qi),typeof self<"u"&&ro.setContext(self),this.setAnimationLoop=function(_){mi=_,J.setAnimationLoop(_),_===null?ro.stop():ro.start()},J.addEventListener("sessionstart",Dy),J.addEventListener("sessionend",Iy),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,N,L),p=se.get(_,S.length),p.init(N),S.push(p),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(xe),_e=this.localClippingEnabled,te=ye.init(this.clippingPlanes,_e),m=Se.get(_,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){let ee=b.xr.getDepthSensingMesh();ee!==null&&wh(ee,N,-1/0,b.sortObjects)}wh(_,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ne,de),Ot=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ot&&K.addToRenderList(m,_),this.info.render.frame++,te===!0&&ye.beginShadows();let U=p.state.shadowsArray;we.render(U,_,N),te===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,P=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ee=N.cameras;if(P.length>0)for(let ue=0,ve=ee.length;ue<ve;ue++){let he=ee[ue];Ry(B,P,_,he)}Ot&&K.render(_);for(let ue=0,ve=ee.length;ue<ve;ue++){let he=ee[ue];Ay(m,_,he,he.viewport)}}else P.length>0&&Ry(B,P,_,N),Ot&&K.render(_),Ay(m,_,N);L!==null&&C===0&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(b,_,N),Ue.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],te===!0&&ye.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function wh(_,N,U,B){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||G.intersectsSprite(_)){B&&Oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(xe);let ue=W.update(_),ve=_.material;ve.visible&&m.push(_,ue,ve,U,Oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||G.intersectsObject(_))){let ue=W.update(_),ve=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Oe.copy(_.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(_.matrixWorld).applyMatrix4(xe)),Array.isArray(ve)){let he=ue.groups;for(let Le=0,Fe=he.length;Le<Fe;Le++){let Ce=he[Le],tt=ve[Ce.materialIndex];tt&&tt.visible&&m.push(_,ue,tt,U,Oe.z,Ce)}}else ve.visible&&m.push(_,ue,ve,U,Oe.z,null)}}let ee=_.children;for(let ue=0,ve=ee.length;ue<ve;ue++)wh(ee[ue],N,U,B)}function Ay(_,N,U,B){let P=_.opaque,ee=_.transmissive,ue=_.transparent;p.setupLightsView(U),te===!0&&ye.setGlobalState(b.clippingPlanes,U),B&&be.viewport(D.copy(B)),P.length>0&&Qc(P,N,U),ee.length>0&&Qc(ee,N,U),ue.length>0&&Qc(ue,N,U),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ry(_,N,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new vn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?pi:Ni,minFilter:Kr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ee=p.state.transmissionRenderTarget[B.id],ue=B.viewport||D;ee.setSize(ue.z*b.transmissionResolutionScale,ue.w*b.transmissionResolutionScale);let ve=b.getRenderTarget();b.setRenderTarget(ee),b.getClearColor($),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),Ot&&K.render(U);let he=b.toneMapping;b.toneMapping=Ri;let Le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),te===!0&&ye.setGlobalState(b.clippingPlanes,B),Qc(_,U,B),qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ce=0,tt=N.length;Ce<tt;Ce++){let _t=N[Ce],Lt=_t.object,Vt=_t.geometry,st=_t.material,Ae=_t.group;if(st.side===ni&&Lt.layers.test(B.layers)){let sn=st.side;st.side=An,st.needsUpdate=!0,Ny(Lt,U,B,Vt,st,Ae),st.side=sn,st.needsUpdate=!0,Fe=!0}}Fe===!0&&(qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee))}b.setRenderTarget(ve),b.setClearColor($,q),Le!==void 0&&(B.viewport=Le),b.toneMapping=he}function Qc(_,N,U){let B=N.isScene===!0?N.overrideMaterial:null;for(let P=0,ee=_.length;P<ee;P++){let ue=_[P],ve=ue.object,he=ue.geometry,Le=ue.group,Fe=ue.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),ve.layers.test(U.layers)&&Ny(ve,N,U,he,Fe,Le)}}function Ny(_,N,U,B,P,ee){_.onBeforeRender(b,N,U,B,P,ee),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(b,N,U,B,_,ee),P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,b.renderBufferDirect(U,N,B,P,_,ee),P.side=hr,P.needsUpdate=!0,b.renderBufferDirect(U,N,B,P,_,ee),P.side=ni):b.renderBufferDirect(U,N,B,P,_,ee),_.onAfterRender(b,N,U,B,P,ee)}function el(_,N,U){N.isScene!==!0&&(N=Pt);let B=Ie.get(_),P=p.state.lights,ee=p.state.shadowsArray,ue=P.state.version,ve=Y.getParameters(_,P.state,ee,N,U),he=Y.getProgramCacheKey(ve),Le=B.programs;B.environment=_.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(_.isMeshStandardMaterial?M:qt).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Le===void 0&&(_.addEventListener("dispose",ge),Le=new Map,B.programs=Le);let Fe=Le.get(he);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ue)return Oy(_,ve),Fe}else ve.uniforms=Y.getUniforms(_),_.onBeforeCompile(ve,b),Fe=Y.acquireProgram(ve,he),Le.set(he,Fe),B.uniforms=ve.uniforms;let Ce=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),Oy(_,ve),B.needsLights=aS(_),B.lightsStateVersion=ue,B.needsLights&&(Ce.ambientLightColor.value=P.state.ambient,Ce.lightProbe.value=P.state.probe,Ce.directionalLights.value=P.state.directional,Ce.directionalLightShadows.value=P.state.directionalShadow,Ce.spotLights.value=P.state.spot,Ce.spotLightShadows.value=P.state.spotShadow,Ce.rectAreaLights.value=P.state.rectArea,Ce.ltc_1.value=P.state.rectAreaLTC1,Ce.ltc_2.value=P.state.rectAreaLTC2,Ce.pointLights.value=P.state.point,Ce.pointLightShadows.value=P.state.pointShadow,Ce.hemisphereLights.value=P.state.hemi,Ce.directionalShadowMap.value=P.state.directionalShadowMap,Ce.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ce.spotShadowMap.value=P.state.spotShadowMap,Ce.spotLightMatrix.value=P.state.spotLightMatrix,Ce.spotLightMap.value=P.state.spotLightMap,Ce.pointShadowMap.value=P.state.pointShadowMap,Ce.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function Py(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=oa.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Oy(_,N){let U=Ie.get(_);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.batchingColor=N.batchingColor,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.instancingMorph=N.instancingMorph,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function oS(_,N,U,B,P){N.isScene!==!0&&(N=Pt),qe.resetTextureUnits();let ee=N.fog,ue=B.isMeshStandardMaterial?N.environment:null,ve=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pr,he=(B.isMeshStandardMaterial?M:qt).get(B.envMap||ue),Le=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!U.morphAttributes.position,tt=!!U.morphAttributes.normal,_t=!!U.morphAttributes.color,Lt=Ri;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=b.toneMapping);let Vt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=Vt!==void 0?Vt.length:0,Ae=Ie.get(B),sn=p.state.lights;if(te===!0&&(_e===!0||_!==x)){let xn=_===x&&B.id===E;ye.setState(B,_,xn)}let pt=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==sn.state.version||Ae.outputColorSpace!==ve||P.isBatchedMesh&&Ae.batching===!1||!P.isBatchedMesh&&Ae.batching===!0||P.isBatchedMesh&&Ae.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ae.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ae.instancing===!1||!P.isInstancedMesh&&Ae.instancing===!0||P.isSkinnedMesh&&Ae.skinning===!1||!P.isSkinnedMesh&&Ae.skinning===!0||P.isInstancedMesh&&Ae.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ae.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ae.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ae.instancingMorph===!1&&P.morphTexture!==null||Ae.envMap!==he||B.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ye.numPlanes||Ae.numIntersection!==ye.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Fe||Ae.morphTargets!==Ce||Ae.morphNormals!==tt||Ae.morphColors!==_t||Ae.toneMapping!==Lt||Ae.morphTargetsCount!==st)&&(pt=!0):(pt=!0,Ae.__version=B.version);let gi=Ae.currentProgram;pt===!0&&(gi=el(B,N,P));let ns=!1,jn=!1,ha=!1,It=gi.getUniforms(),ri=Ae.uniforms;if(be.useProgram(gi.program)&&(ns=!0,jn=!0,ha=!0),B.id!==E&&(E=B.id,jn=!0),ns||x!==_){be.buffers.depth.getReversed()?(ce.copy(_.projectionMatrix),XE(ce),YE(ce),It.setValue(T,"projectionMatrix",ce)):It.setValue(T,"projectionMatrix",_.projectionMatrix),It.setValue(T,"viewMatrix",_.matrixWorldInverse);let Rn=It.map.cameraPosition;Rn!==void 0&&Rn.setValue(T,ct.setFromMatrixPosition(_.matrixWorld)),Mt.logarithmicDepthBuffer&&It.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&It.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,jn=!0,ha=!0)}if(P.isSkinnedMesh){It.setOptional(T,P,"bindMatrix"),It.setOptional(T,P,"bindMatrixInverse");let xn=P.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),It.setValue(T,"boneTexture",xn.boneTexture,qe))}P.isBatchedMesh&&(It.setOptional(T,P,"batchingTexture"),It.setValue(T,"batchingTexture",P._matricesTexture,qe),It.setOptional(T,P,"batchingIdTexture"),It.setValue(T,"batchingIdTexture",P._indirectTexture,qe),It.setOptional(T,P,"batchingColorTexture"),P._colorsTexture!==null&&It.setValue(T,"batchingColorTexture",P._colorsTexture,qe));let oi=U.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&fe.update(P,U,gi),(jn||Ae.receiveShadow!==P.receiveShadow)&&(Ae.receiveShadow=P.receiveShadow,It.setValue(T,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ri.envMap.value=he,ri.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(ri.envMapIntensity.value=N.environmentIntensity),jn&&(It.setValue(T,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&sS(ri,ha),ee&&B.fog===!0&&z.refreshFogUniforms(ri,ee),z.refreshMaterialUniforms(ri,B,V,Z,p.state.transmissionRenderTarget[_.id]),oa.upload(T,Py(Ae),ri,qe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(oa.upload(T,Py(Ae),ri,qe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&It.setValue(T,"center",P.center),It.setValue(T,"modelViewMatrix",P.modelViewMatrix),It.setValue(T,"normalMatrix",P.normalMatrix),It.setValue(T,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let xn=B.uniformsGroups;for(let Rn=0,Th=xn.length;Rn<Th;Rn++){let oo=xn[Rn];I.update(oo,gi),I.bind(oo,gi)}}return gi}function sS(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function aS(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,N,U){let B=Ie.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ie.get(_.texture).__webglTexture=N,Ie.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let U=Ie.get(_);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0};let cS=T.createFramebuffer();this.setRenderTarget=function(_,N=0,U=0){L=_,A=N,C=U;let B=!0,P=null,ee=!1,ue=!1;if(_){let he=Ie.get(_);if(he.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)qe.setupRenderTarget(_);else if(he.__hasExternalTextures)qe.rebindTextures(_,Ie.get(_.texture).__webglTexture,Ie.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ce=_.depthTexture;if(he.__boundDepthTexture!==Ce){if(Ce!==null&&Ie.has(Ce)&&(_.width!==Ce.image.width||_.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(_)}}let Le=_.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);let Fe=Ie.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?P=Fe[N][U]:P=Fe[N],ee=!0):_.samples>0&&qe.useMultisampledRTT(_)===!1?P=Ie.get(_).__webglMultisampledFramebuffer:Array.isArray(Fe)?P=Fe[U]:P=Fe,D.copy(_.viewport),H.copy(_.scissor),k=_.scissorTest}else D.copy(Te).multiplyScalar(V).floor(),H.copy(Qe).multiplyScalar(V).floor(),k=ht;if(U!==0&&(P=cS),be.bindFramebuffer(T.FRAMEBUFFER,P)&&B&&be.drawBuffers(_,P),be.viewport(D),be.scissor(H),be.setScissorTest(k),ee){let he=Ie.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,U)}else if(ue){let he=Ie.get(_.texture),Le=N;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.__webglTexture,U,Le)}else if(_!==null&&U!==0){let he=Ie.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,he.__webglTexture,U)}E=-1},this.readRenderTargetPixels=function(_,N,U,B,P,ee,ue,ve=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ie.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he){be.bindFramebuffer(T.FRAMEBUFFER,he);try{let Le=_.textures[ve],Fe=Le.format,Ce=Le.type;if(!Mt.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-B&&U>=0&&U<=_.height-P&&(_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ve),T.readPixels(N,U,B,P,re.convert(Fe),re.convert(Ce),ee))}finally{let Le=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=function(_,N,U,B,P,ee,ue,ve=0){return St(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ie.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ue!==void 0&&(he=he[ue]),he)if(N>=0&&N<=_.width-B&&U>=0&&U<=_.height-P){be.bindFramebuffer(T.FRAMEBUFFER,he);let Le=_.textures[ve],Fe=Le.format,Ce=Le.type;if(!Mt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,tt),T.bufferData(T.PIXEL_PACK_BUFFER,ee.byteLength,T.STREAM_READ),_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ve),T.readPixels(N,U,B,P,re.convert(Fe),re.convert(Ce),0);let _t=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,_t);let Lt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield qE(T,Lt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,tt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ee),T.deleteBuffer(tt),T.deleteSync(Lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,U=0){let B=Math.pow(2,-U),P=Math.floor(_.image.width*B),ee=Math.floor(_.image.height*B),ue=N!==null?N.x:0,ve=N!==null?N.y:0;qe.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,U,0,0,ue,ve,P,ee),be.unbindTexture()};let lS=T.createFramebuffer(),uS=T.createFramebuffer();this.copyTextureToTexture=function(_,N,U=null,B=null,P=0,ee=null){ee===null&&(P!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=P,P=0):ee=0);let ue,ve,he,Le,Fe,Ce,tt,_t,Lt,Vt=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(U!==null)ue=U.max.x-U.min.x,ve=U.max.y-U.min.y,he=U.isBox3?U.max.z-U.min.z:1,Le=U.min.x,Fe=U.min.y,Ce=U.isBox3?U.min.z:0;else{let oi=Math.pow(2,-P);ue=Math.floor(Vt.width*oi),ve=Math.floor(Vt.height*oi),_.isDataArrayTexture?he=Vt.depth:_.isData3DTexture?he=Math.floor(Vt.depth*oi):he=1,Le=0,Fe=0,Ce=0}B!==null?(tt=B.x,_t=B.y,Lt=B.z):(tt=0,_t=0,Lt=0);let st=re.convert(N.format),Ae=re.convert(N.type),sn;N.isData3DTexture?(qe.setTexture3D(N,0),sn=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(qe.setTexture2DArray(N,0),sn=T.TEXTURE_2D_ARRAY):(qe.setTexture2D(N,0),sn=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);let pt=T.getParameter(T.UNPACK_ROW_LENGTH),gi=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ns=T.getParameter(T.UNPACK_SKIP_PIXELS),jn=T.getParameter(T.UNPACK_SKIP_ROWS),ha=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Vt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Vt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ce);let It=_.isDataArrayTexture||_.isData3DTexture,ri=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let oi=Ie.get(_),xn=Ie.get(N),Rn=Ie.get(oi.__renderTarget),Th=Ie.get(xn.__renderTarget);be.bindFramebuffer(T.READ_FRAMEBUFFER,Rn.__webglFramebuffer),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,Th.__webglFramebuffer);for(let oo=0;oo<he;oo++)It&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ie.get(_).__webglTexture,P,Ce+oo),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ie.get(N).__webglTexture,ee,Lt+oo)),T.blitFramebuffer(Le,Fe,ue,ve,tt,_t,ue,ve,T.DEPTH_BUFFER_BIT,T.NEAREST);be.bindFramebuffer(T.READ_FRAMEBUFFER,null),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||Ie.has(_)){let oi=Ie.get(_),xn=Ie.get(N);be.bindFramebuffer(T.READ_FRAMEBUFFER,lS),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,uS);for(let Rn=0;Rn<he;Rn++)It?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,oi.__webglTexture,P,Ce+Rn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,oi.__webglTexture,P),ri?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,ee,Lt+Rn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,ee),P!==0?T.blitFramebuffer(Le,Fe,ue,ve,tt,_t,ue,ve,T.COLOR_BUFFER_BIT,T.NEAREST):ri?T.copyTexSubImage3D(sn,ee,tt,_t,Lt+Rn,Le,Fe,ue,ve):T.copyTexSubImage2D(sn,ee,tt,_t,Le,Fe,ue,ve);be.bindFramebuffer(T.READ_FRAMEBUFFER,null),be.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ri?_.isDataTexture||_.isData3DTexture?T.texSubImage3D(sn,ee,tt,_t,Lt,ue,ve,he,st,Ae,Vt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(sn,ee,tt,_t,Lt,ue,ve,he,st,Vt.data):T.texSubImage3D(sn,ee,tt,_t,Lt,ue,ve,he,st,Ae,Vt):_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,tt,_t,ue,ve,st,Ae,Vt.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,tt,_t,Vt.width,Vt.height,st,Vt.data):T.texSubImage2D(T.TEXTURE_2D,ee,tt,_t,ue,ve,st,Ae,Vt);T.pixelStorei(T.UNPACK_ROW_LENGTH,pt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gi),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ns),T.pixelStorei(T.UNPACK_SKIP_ROWS,jn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ha),ee===0&&N.generateMipmaps&&T.generateMipmap(sn),be.unbindTexture()},this.copyTextureToTexture3D=function(_,N,U=null,B=null,P=0){return Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,N,U,B,P)},this.initRenderTarget=function(_){Ie.get(_).__webglFramebuffer===void 0&&qe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?qe.setTextureCube(_,0):_.isData3DTexture?qe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?qe.setTexture2DArray(_,0):qe.setTexture2D(_,0),be.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,be.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var wM={type:"change"},vy={type:"start"},CM={type:"end"},Yf=new qs,TM=new ui,eL=Math.cos(70*Yv.DEG2RAD),Qt=new O,zn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gy=1e-6,Zf=class extends Fc{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new fi,this._lastTargetPosition=new O,this._quat=new fi().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new O,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new O,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nL.bind(this),this._onPointerDown=tL.bind(this),this._onPointerUp=iL.bind(this),this._onContextMenu=uL.bind(this),this._onMouseWheel=sL.bind(this),this._onKeyDown=aL.bind(this),this._onTouchStart=cL.bind(this),this._onTouchMove=lL.bind(this),this._onMouseDown=rL.bind(this),this._onMouseMove=oL.bind(this),this._interceptControlDown=dL.bind(this),this._interceptControlUp=fL.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wM),this.update(),this.state=bt.NONE}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=zn:i>Math.PI&&(i-=zn),r<-Math.PI?r+=zn:r>Math.PI&&(r-=zn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let a=Qt.length();s=this._clampDistance(a*this._scale);let c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Yf.origin.copy(this.object.position),Yf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yf.direction))<eL?this.object.lookAt(this.target):(TM.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yf.intersectPlane(TM,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>gy||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gy||this._lastTargetPosition.distanceToSquared(this.target)>gy?(this.dispatchEvent(wM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zn/60*this.autoRotateSpeed*e:zn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Qt.copy(r).sub(this.target);let o=Qt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function tL(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function nL(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iL(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(CM),this.state=bt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rL(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Yr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Yr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(vy)}function oL(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sL(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(vy),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(CM))}function aL(n){this.enabled!==!1&&this._handleKeyDown(n)}function cL(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(vy)}function lL(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function uL(n){this.enabled!==!1&&n.preventDefault()}function dL(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fL(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var DM=`
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,IM=`
varying vec2 v_uv;

uniform sampler2D u_baseTexture;
uniform sampler2D u_bloomTexture;

void main() {
  vec4 baseColor = texture2D(u_baseTexture, v_uv);
  vec4 bloomColor = texture2D(u_bloomTexture, v_uv);
  gl_FragColor = baseColor + bloomColor;
}
`;var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hL=new qo(-1,1,1,-1,0,1),yy=class extends ei{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},pL=new yy,to=class{constructor(e){this._mesh=new Tt(pL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ca=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yr.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new to(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qc=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Kf=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ca(aa),this.copyPass.material.blending=Ai,this.clock=new Lc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,o=this.passes.length;r<o;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qc!==void 0&&(s instanceof qc?i=!0:s instanceof Kf&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jf=class extends ii{constructor(){super(),this.uniforms=yr.clone(Yc.uniforms),this.material=new Rc({name:Yc.name,uniforms:this.uniforms,vertexShader:Yc.vertexShader,fragmentShader:Yc.fragmentShader}),this._fsQuad=new to(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ef?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===af?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===of&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qf=class extends ii{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var AM={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class n extends ii{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(o,s,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new vn(o,s,{type:pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new vn(o,s,{type:pi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),s=Math.round(s/2)}let a=AM;this.highPassUniforms=yr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ee(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yr.clone(aa.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,blending:kc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new mr,this._fsQuad=new to(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new Ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};la.BlurDirectionX=new Ee(1,0);la.BlurDirectionY=new Ee(0,1);var _y=1,eh=class{renderer;bloomComposer;finalComposer;init(e,t,i,r){this.renderer=new qf({canvas:e,alpha:!1,antialias:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.outputColorSpace=In,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$d,this.renderer.toneMapping=Ri,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.autoUpdate=!0;let o=r.getScene(),s=r.getCamera(),a=new Qf(o,s);a.clearColor=new Me(0,0,0);let c=new Ee(t,i),l=new la(c,1,0,0);l.clearColor=new Me(0,0,0),this.bloomComposer=new Xc(this.renderer),this.bloomComposer.addPass(a),this.bloomComposer.addPass(l),this.bloomComposer.renderToScreen=!1;let u=this.bloomComposer.renderTarget2.texture,d=new xt({uniforms:{u_baseTexture:{value:null},u_bloomTexture:{value:u}},vertexShader:DM,fragmentShader:IM}),f=new ca(d,"u_baseTexture");f.needsSwap=!0;let h=new Jf;this.finalComposer=new Xc(this.renderer),this.finalComposer.addPass(a),this.finalComposer.addPass(f),this.finalComposer.addPass(h),this.finalComposer.renderToScreen=!0}onResize(e,t){console.log("Resizing renderer to:",e,t),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio)}filterObject(e,t,i,r){e instanceof Tt&&!e.layers.test(t)&&(i.set(e,e.material),e.material=r)}restoreObjects(e){e.forEach((t,i)=>{i instanceof Tt&&(i.material=t)})}getRenderer(){return this.renderer}render(e){let t=new mr({color:"black"}),i=new Map,r=new jo;r.set(_y);let o=e.getScene(),s=o.background;o.background=null,o.traverse(a=>this.filterObject(a,r,i,t)),this.bloomComposer.render(),this.restoreObjects(i),o.background=s,this.finalComposer.render()}dispose(){this.renderer.dispose(),this.bloomComposer.dispose(),this.finalComposer.dispose(),this.renderer=void 0,this.bloomComposer=void 0,this.finalComposer=void 0}};var th=class{scene;camera;controls;renderingPipeline;cells=[];create(e,t,i){this.scene=new Wo,this.camera=new gn(60,t/i,.1,2e3),this.camera.position.set(0,20,50),this.controls=new Zf(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=500,this.controls.maxPolarAngle=Math.PI/2,this.renderingPipeline=new eh,this.renderingPipeline.init(e,t,i,this)}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderingPipeline.onResize(e,t)}update(){this.controls.update(),this.renderingPipeline.render(this)}getScene(){return this.scene}getCamera(){return this.camera}getWorldCells(){return this.cells}getRenderer(){return this.renderingPipeline.getRenderer()}setWorldCells(e){this.cells=e}dispose(){this.controls.dispose(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose?.(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose?.()):e.material.dispose?.())}),this.renderingPipeline.dispose(),this.scene=void 0,this.camera=void 0,this.controls=void 0,this.renderingPipeline=void 0}};var no=new Ge("LAYER_FACTORY");var ua=class n{notificationsSubject=new Wn([]);notifications$=this.notificationsSubject.asObservable();notifications=[];show(e){let t=Math.random().toString(36).slice(2,10),i=at({id:t},e);return this.notifications.push(i),this.notificationsSubject.next([...this.notifications]),i.timeout&&i.type!=="progress"&&setTimeout(()=>this.dismiss(t),i.timeout),t}update(e,t){let i=this.notifications.findIndex(r=>r.id===e);i!==-1&&(this.notifications[i]=at(at({},this.notifications[i]),t),this.notificationsSubject.next([...this.notifications]))}dismiss(e){this.notifications=this.notifications.filter(t=>t.id!==e),this.notificationsSubject.next([...this.notifications])}clear(){this.notifications=[],this.notificationsSubject.next([])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var Gn=class n{constructor(e,t){this.notificationService=t;for(let i of e??[])this.factories.set(i.key,i),this.layerStates[i.key]={active:!1,generating:!1,progress:0};this.layerStatesSubject.next(at({},this.layerStates)),this.startWorker()}world=null;jobQueue=[];runningJob=null;runningJobSubject=new Wn(null);jobSignal=null;factories=new Map;layerStates={};layerStatesSubject=new Wn({});selectedLayerSubject=new Wn(null);setWorld(e){this.world=e}getLayers(){return Array.from(this.factories.keys())}getFactory(e){let t=this.factories.get(e);if(t)return{factory:t.factory,params:t.params}}getIcon(e){let t=this.factories.get(e);if(t)return t.icon}getLayerConfigParams(e){return this.factories.get(e)?.params}updateLayerConfigParam(e,t,i){let r=this.factories.get(e);if(!r)return;let s=r.params.find(a=>a.key===t);s&&(s.value=i)}getRunningJob(){return this.runningJobSubject.asObservable()}getLayerStates(){return this.layerStatesSubject.asObservable()}getLayerState(e){return this.layerStates[e]||{active:!1,generating:!1,progress:0}}generateAllLayers(){for(let e of this.getLayers())this.queueLayerGeneration(e)}resetLayer(e){let t=this.getFactory(e);t&&this.world&&(t.factory.reset(this.world),this.setLayerActive?.(e,t.factory.isActive(this.world)))}resetAllLayers(){for(let e of this.getLayers())this.resetLayer(e)}queueLayerGeneration(e){let t=this.getFactory(e);if(t&&this.world){let i=null;this.jobQueue.push({name:`${e} generation`,job:()=>St(this,null,function*(){try{this.notificationService&&(i=this.notificationService.show({type:"progress",message:`Generating ${e.charAt(0).toUpperCase()+e.slice(1)}\u2026`,progress:0})),yield new Promise(a=>setTimeout(a,500)),this.setLayerGenerating(e,!0),this.setLayerProgress(e,0);let r=t.factory.getPipeline(t.params,this.world),o=r.steps.length,s={};for(let a=0;a<o;a++){let c=r.steps[a];console.time(`Running step ${c.name}`),yield c.run(s),console.timeEnd(`Running step ${c.name}`),this.setLayerProgress(e,Math.round((a+1)/o*100)),this.notificationService&&i&&this.notificationService.update(i,{progress:Math.round((a+1)/o*100)}),yield new Promise(l=>setTimeout(l,200))}this.setLayerGenerating(e,!1),this.setLayerActive(e,t.factory.isActive(this.world)),this.notificationService&&i&&(this.notificationService.update(i,{type:"success",message:`${e.charAt(0).toUpperCase()+e.slice(1)} generated successfully!`,progress:void 0}),setTimeout(()=>this.notificationService?.dismiss(i),3e3))}catch(r){this.setLayerGenerating(e,!1),this.notificationService&&(i?(this.notificationService.update(i,{type:"error",message:`${e.charAt(0).toUpperCase()+e.slice(1)}: generation error`,progress:void 0}),setTimeout(()=>this.notificationService?.dismiss(i),4e3)):this.notificationService.show({type:"error",message:`${e.charAt(0).toUpperCase()+e.slice(1)}: generation error`,timeout:4e3})),console.error(`Error running job ${e} generation:`,r)}}),key:e}),this.jobSignal&&this.jobSignal()}}startWorker(){return St(this,null,function*(){for(;;){this.jobQueue.length===0&&(yield new Promise(t=>this.jobSignal=t),this.jobSignal=null);let e=this.jobQueue.shift();e&&(this.runningJob=e.name,this.runningJobSubject.next(this.runningJob),yield new Promise(t=>setTimeout(t)),yield e.job(),this.runningJob=null,this.runningJobSubject.next(this.runningJob))}})}setLayerActive(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{active:t}),this.layerStatesSubject.next(at({},this.layerStates))}setLayerGenerating(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{generating:t}),this.layerStatesSubject.next(at({},this.layerStates))}setLayerProgress(e,t){this.layerStates[e]=Xt(at({},this.layerStates[e]),{progress:t}),this.layerStatesSubject.next(at({},this.layerStates))}selectedLayer$=this.selectedLayerSubject.asObservable();setSelectedLayer(e){this.selectedLayerSubject.next(e)}static \u0275fac=function(t){return new(t||n)(ke(no,8),ke(ua))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var fa=class n{world;layerManager;framerateSubject=new Wn(0);frameCount=0;captureTime=performance.now();constructor(e){this.layerManager=e}getFramerate(){return this.framerateSubject.asObservable()}init(e,t,i){this.world=new th,this.world.create(e,t,i),this.layerManager.setWorld(this.world);for(let r of this.layerManager.getLayers())this.layerManager.queueLayerGeneration(r)}onResize(e,t){this.world.onResize(e,t)}update(){if(this.world.update(),this.frameCount++,this.frameCount>=60){let e=performance.now();this.framerateSubject.next(Math.round(1e3*this.frameCount/(e-this.captureTime))),this.frameCount=0,this.captureTime=e}}dispose(){this.world.dispose()}static \u0275fac=function(t){return new(t||n)(ke(Gn))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})};var gL=["canvas"],nh=class n{constructor(e){this.ngZone=e}canvasRef;gaiaService=pe(fa);animationId=0;ngAfterViewInit(){this.gaiaService.init(this.canvasRef.nativeElement,window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.gaiaService.onResize(window.innerWidth,window.innerHeight)});let e=()=>{this.gaiaService.update(),this.animationId=requestAnimationFrame(e)};this.ngZone.runOutsideAngular(()=>{e()})}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.gaiaService.dispose()}static \u0275fac=function(t){return new(t||n)(dt(Rt))};static \u0275cmp=rt({type:n,selectors:[["app-viewport"]],viewQuery:function(t,i){if(t&1&&ec(gL,7),t&2){let r;tc(r=nc())&&(i.canvasRef=r.first)}},decls:2,vars:0,consts:[["canvas",""]],template:function(t,i){t&1&&Ht(0,"canvas",null,0)},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;border-radius:0;transition:filter .3s ease}canvas[_ngcontent-%COMP%]:focus{outline:none}"],changeDetection:0})};var ih;function vL(){if(ih===void 0&&(ih=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(ih=n.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return ih}function Zc(n){return vL()?.createHTML(n)||n}function RM(n){return Error(`Unable to find icon with the name "${n}"`)}function yL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function NM(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function PM(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var _r=class{url;svgText;options;svgElement;constructor(e,t,i){this.url=e,this.svgText=t,this.options=i}},LM=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,i,r,o){this._httpClient=t,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(t,i,r){return this.addSvgIconInNamespace("",t,i,r)}addSvgIconLiteral(t,i,r){return this.addSvgIconLiteralInNamespace("",t,i,r)}addSvgIconInNamespace(t,i,r,o){return this._addSvgIconConfig(t,i,new _r(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,i,r,o){let s=this._sanitizer.sanitize(wn.HTML,r);if(!s)throw PM(r);let a=Zc(s);return this._addSvgIconConfig(t,i,new _r("",a,o))}addSvgIconSet(t,i){return this.addSvgIconSetInNamespace("",t,i)}addSvgIconSetLiteral(t,i){return this.addSvgIconSetLiteralInNamespace("",t,i)}addSvgIconSetInNamespace(t,i,r){return this._addSvgIconSetConfig(t,new _r(i,null,r))}addSvgIconSetLiteralInNamespace(t,i,r){let o=this._sanitizer.sanitize(wn.HTML,i);if(!o)throw PM(i);let s=Zc(o);return this._addSvgIconSetConfig(t,new _r("",s,r))}registerFontClassAlias(t,i=t){return this._fontCssClassesByAlias.set(t,i),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let i=this._sanitizer.sanitize(wn.RESOURCE_URL,t);if(!i)throw NM(t);let r=this._cachedIconsByUrl.get(i);return r?Ki(rh(r)):this._loadSvgIconFromConfig(new _r(t,null)).pipe(xa(o=>this._cachedIconsByUrl.set(i,o)),Ut(o=>rh(o)))}getNamedSvgIcon(t,i=""){let r=OM(i,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(t,s):jh(RM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Ki(rh(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ut(i=>rh(i)))}_getSvgFromIconSetConfigs(t,i){let r=this._extractIconWithNameFromAnySet(t,i);if(r)return Ki(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Rl(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wn.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Ki(null)})));return $h(o).pipe(Ut(()=>{let s=this._extractIconWithNameFromAnySet(t,i);if(!s)throw RM(t);return s}))}_extractIconWithNameFromAnySet(t,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(xa(i=>t.svgText=i),Ut(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Ki(null):this._fetchIcon(t).pipe(xa(i=>t.svgText=i))}_extractSvgIconFromSet(t,i,r){let o=t.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Zc("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(t){let i=this._document.createElement("DIV");i.innerHTML=t;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){let i=this._svgElementFromString(Zc("<svg></svg>")),r=t.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(t.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(t,i){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),i&&i.viewBox&&t.setAttribute("viewBox",i.viewBox),t}_fetchIcon(t){let{url:i,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw yL();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(wn.RESOURCE_URL,i);if(!s)throw NM(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(Ut(l=>Zc(l)),Nl(()=>this._inProgressUrlFetches.delete(s)),Zh());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(t,i,r){return this._svgIconConfigs.set(OM(t,i),r),this}_addSvgIconSetConfig(t,i){let r=this._iconSetConfigs.get(t);return r?r.push(i):this._iconSetConfigs.set(t,[i]),this}_svgElementFromConfig(t){if(!t.svgElement){let i=this._svgElementFromString(t.svgText);this._setSvgAttributes(i,t.options),t.svgElement=i}return t.svgElement}_getIconConfigFromResolvers(t,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,t);if(o)return _L(o)?new _r(o.url,null,o.options):new _r(o,null)}}static \u0275fac=function(i){return new(i||n)(ke(ev,8),ke(tv),ke(Wt,8),ke(En))};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rh(n){return n.cloneNode(!0)}function OM(n,e){return n+":"+e}function _L(n){return!!(n.url&&n.options)}var xy;try{xy=typeof Intl<"u"&&Intl.v8BreakIterator}catch{xy=!1}var oh=(()=>{class n{_platformId=pe(Pr);isBrowser=this._platformId?Ab(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||xy)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function by(n){return Array.isArray(n)?n:[n]}var FM=new Set,ts,xL=(()=>{class n{_platform=pe(oh);_nonce=pe(Ms,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):EL}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&bL(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bL(n,e){if(!FM.has(n))try{ts||(ts=document.createElement("style"),e&&ts.setAttribute("nonce",e),ts.setAttribute("type","text/css"),document.head.appendChild(ts)),ts.sheet&&(ts.sheet.insertRule(`@media ${n} {body{ }}`,0),FM.add(n))}catch(t){console.error(t)}}function EL(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var UM=(()=>{class n{_mediaMatcher=pe(xL);_zone=pe(Rt);_queries=new Map;_destroySubject=new si;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return kM(by(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=kM(by(t)).map(s=>this._registerQuery(s).observable),o=Wh(r);return o=ls(o.pipe(_a(1)),o.pipe(Kh(1),Xh(0))),o.pipe(Ut(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new mt(s=>{let a=c=>this._zone.run(()=>s.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Jh(i),Ut(({matches:s})=>({query:t,matches:s})),Qh(this._destroySubject)),mql:i};return this._queries.set(t,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function kM(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var io=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(io||{}),BM="cdk-high-contrast-black-on-white",VM="cdk-high-contrast-white-on-black",Ey="cdk-high-contrast-active",My=(()=>{class n{_platform=pe(oh);_hasCheckedHighContrastMode;_document=pe(Wt);_breakpointSubscription;constructor(){this._breakpointSubscription=pe(UM).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return io.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return io.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return io.BLACK_ON_WHITE}return io.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ey,BM,VM),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===io.BLACK_ON_WHITE?t.add(Ey,BM):i===io.WHITE_ON_BLACK&&t.add(Ey,VM)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ve({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Sy=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Zn({type:n});static \u0275inj=Ln({})}return n})();var wy=(()=>{class n{constructor(){pe(My)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Zn({type:n});static \u0275inj=Ln({imports:[Sy,Sy]})}return n})();var ML=["*"],SL=new Ge("MAT_ICON_DEFAULT_OPTIONS"),wL=new Ge("mat-icon-location",{providedIn:"root",factory:TL});function TL(){let n=pe(Wt),e=n?n.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}var HM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],CL=HM.map(n=>`[${n}]`).join(", "),DL=/^url\(['"]?#(.*?)['"]?\)$/,rn=(()=>{class n{_elementRef=pe(ir);_iconRegistry=pe(LM);_location=pe(wL);_errorHandler=pe(En);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let i=this._cleanupFontValue(t);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let i=this._cleanupFontValue(t);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ft.EMPTY;constructor(){let t=pe(new Yu("aria-hidden"),{optional:!0}),i=pe(SL,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let i=t.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,i=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=t.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),i.forEach(r=>t.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let i=t.querySelectorAll(CL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)HM.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(DL):null;if(l){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[i,r]=this._splitIconName(t);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(_a(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=rt({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(hn("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Sg(r.color?"mat-"+r.color:""),Or("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ng],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ML,decls:1,vars:0,template:function(i,r){i&1&&(bg(),Eg(0))},styles:[`mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}
`],encapsulation:2,changeDetection:0})}return n})(),on=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Zn({type:n});static \u0275inj=Ln({imports:[wy,wy]})}return n})();function IL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"sync"),ae())}function AL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"check"),ae())}function RL(n,e){n&1&&(ie(0,"mat-icon"),He(1,"error_outline"),ae())}function NL(n,e){if(n&1&&(Un(0),ie(1,"div",8),Ht(2,"div",9),ie(3,"span",10),He(4),ae()(),Bn()),n&2){let t=Je().$implicit;De(2),Wu("width",t.progress,"%"),De(2),ic("",t.progress,"%")}}function PL(n,e){if(n&1){let t=Tn();ie(0,"div",2)(1,"div",3)(2,"span",4),Dt(3,IL,2,0,"mat-icon",5)(4,AL,2,0,"mat-icon",5)(5,RL,2,0,"mat-icon",5),ae(),ie(6,"span",6),He(7),ae(),ie(8,"button",7),Nt("click",function(){let r=ln(t).$implicit,o=Je();return un(o.removeNotification(r.id))}),ie(9,"mat-icon"),He(10,"close"),ae()()(),Dt(11,NL,5,3,"ng-container",5),ae()}if(n&2){let t=e.$implicit;Or("success",t.type==="success")("error",t.type==="error")("progress",t.type==="progress"),De(3),je("ngIf",t.type==="progress"),De(),je("ngIf",t.type==="success"),De(),je("ngIf",t.type==="error"),De(2),dn(t.message),De(4),je("ngIf",t.type==="progress"&&typeof t.progress=="number")}}var sh=class n{notificationService=pe(ua);notifications$=this.notificationService.notifications$;constructor(){let e=()=>{let t=this.notificationService.show({type:"progress",message:"Demo: Generating layer, please wait...",progress:0}),i=this.notificationService.show({type:"success",message:"Demo: Layer generated successfully!",progress:100}),r=this.notificationService.show({type:"error",message:"Demo: An error occurred while generating the layer.",progress:0}),o=32,s=setInterval(()=>{o+=0,this.notificationService.update(t,{progress:o}),o<0&&(this.notificationService.update(t,{type:"success",message:"Demo: Layer generated successfully!",progress:void 0}),setTimeout(()=>this.notificationService.dismiss(t),2e3),clearInterval(s))},300)}}removeNotification(e){this.notificationService.dismiss(e)}trackById(e,t){return t.id}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-notification-container"]],decls:3,vars:4,consts:[[1,"notification-container-glass"],["class","notification-glass",3,"success","error","progress",4,"ngFor","ngForOf","ngForTrackBy"],[1,"notification-glass"],[1,"notif-row"],[1,"icon"],[4,"ngIf"],[1,"message"],["aria-label","Close notification",1,"close-btn",3,"click"],[1,"progress-bar-container"],[1,"progress-bar"],[1,"progress-label"]],template:function(t,i){t&1&&(ie(0,"div",0),Dt(1,PL,12,11,"div",1),Ro(2,"async"),ae()),t&2&&(De(),je("ngForOf",No(2,2,i.notifications$))("ngForTrackBy",i.trackById))},dependencies:[tn,Hi,wi,Po,on,rn],styles:[".notification-container-glass[_ngcontent-%COMP%]{position:fixed;bottom:var(--space-sm);right:var(--space-md);width:var(--notification-width, 340px);z-index:2000;display:flex;flex-direction:column;gap:var(--space-md);pointer-events:none;align-items:center}.notification-glass[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);border:var(--border);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);padding:var(--space-md) var(--space-xl);width:100%;max-width:380px;min-width:220px;min-height:48px;color:var(--color-text-main);font-family:var(--font-main);font-size:var(--font-size);pointer-events:auto;opacity:.98;transition:var(--transition);animation:_ngcontent-%COMP%_notif-fade-in .3s cubic-bezier(.4,0,.2,1);margin-bottom:var(--space-xs);box-sizing:border-box;position:relative;gap:var(--space-xs)}@keyframes _ngcontent-%COMP%_notif-fade-in{0%{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:.98;transform:none}}.notification-glass.success[_ngcontent-%COMP%]{color:var(--color-success)}.notification-glass.error[_ngcontent-%COMP%]{color:var(--color-error)}.notification-glass.progress[_ngcontent-%COMP%]{color:var(--color-accent)}.notif-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:100%;gap:var(--space-md)}.icon[_ngcontent-%COMP%]{min-width:var(--icon-size);min-height:var(--icon-size);display:flex;align-items:center;justify-content:center;margin-right:var(--space-xs)}.message[_ngcontent-%COMP%]{flex:1 1 auto;margin-right:var(--space-xs);white-space:normal;overflow-wrap:break-word;font-weight:400;font-size:var(--font-size);letter-spacing:.01em;color:var(--color-text-main);margin-bottom:0}.close-btn[_ngcontent-%COMP%]{background:none;border:none;outline:none;cursor:pointer;padding:.25rem;margin-left:.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background .15s;color:var(--color-text-main)}.close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.notification-glass.success[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-success)}.notification-glass.error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-error)}.notification-glass.progress[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{stroke:var(--color-accent);animation:_ngcontent-%COMP%_spin 1.2s linear infinite}.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1.2s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.progress-bar-container[_ngcontent-%COMP%]{width:100%;background:#a3b1c61a;border-radius:6px;height:7px;margin-top:.2rem;position:relative;overflow:hidden}.progress-bar[_ngcontent-%COMP%]{background:var(--color-accent);height:100%;border-radius:6px;transition:width .25s cubic-bezier(.4,0,.2,1)}.progress-label[_ngcontent-%COMP%]{position:absolute;right:8px;top:-18px;font-size:var(--font-size-secondary);color:var(--color-accent);font-weight:500;pointer-events:none;-webkit-user-select:none;user-select:none}@media (max-width: 600px){.notification-glass[_ngcontent-%COMP%]{max-width:98vw;min-width:0;padding:.9rem .7rem;font-size:.98rem}}"],changeDetection:0})};var OL=["panelRoot"];function LL(n,e){n&1&&(ie(0,"div",3)(1,"p"),He(2,"Configuration UI coming soon\u2026"),ae()())}function FL(n,e){n&1&&Ht(0,"hr",16)}function kL(n,e){if(n&1&&(ie(0,"h3"),He(1),ae()),n&2){let t=Je().$implicit;De(),dn(t)}}function UL(n,e){if(n&1){let t=Tn();ie(0,"div",20)(1,"div",21)(2,"label"),He(3),ae(),ie(4,"span",22),He(5),ae()(),ie(6,"input",23),Nt("input",function(r){ln(t);let o=Je().$implicit,s=Je(4);return un(s.onParamInput(o,r))}),ae()()}if(n&2){let t=Je().$implicit;hn("title",t.tooltip||null),De(2),hn("for",t.key),De(),dn(t.label),De(2),dn(t.value),De(),je("id",t.key)("min",t.min)("max",t.max)("step",t.step)("value",t.value)("disabled",t.disabled)}}function BL(n,e){if(n&1){let t=Tn();ie(0,"input",30),Nt("input",function(r){ln(t);let o=Je(2).$implicit,s=Je(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Je(2).$implicit;je("id",t.key)("min",t.min)("max",t.max)("step",t.step)("value",t.value)("disabled",t.disabled)}}function VL(n,e){if(n&1){let t=Tn();ie(0,"input",31),Nt("input",function(r){ln(t);let o=Je(2).$implicit,s=Je(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Je(2).$implicit;je("id",t.key)("value",t.value)("disabled",t.disabled)}}function HL(n,e){if(n&1){let t=Tn();ie(0,"span",22)(1,"label",32)(2,"input",33),Nt("change",function(r){ln(t);let o=Je(2).$implicit,s=Je(4);return un(s.onParamInput(o,r))}),ae(),Ht(3,"span",34),ae()()}if(n&2){let t=Je(2).$implicit;De(2),je("id",t.key)("checked",t.value)("disabled",t.disabled),hn("aria-checked",t.value)}}function zL(n,e){if(n&1){let t=Tn();ie(0,"input",35),Nt("input",function(r){ln(t);let o=Je(2).$implicit,s=Je(4);return un(s.onParamInput(o,r))}),ae()}if(n&2){let t=Je(2).$implicit;je("id",t.key)("value",t.value)("disabled",t.disabled)}}function GL(n,e){if(n&1&&(ie(0,"span",22),He(1),ae()),n&2){let t=Je(2).$implicit;De(),dn(t.value)}}function jL(n,e){if(n&1&&(ie(0,"div",24)(1,"label"),He(2),ae(),Un(3,17),Dt(4,BL,1,6,"input",25)(5,VL,1,3,"input",26)(6,HL,4,4,"span",27)(7,zL,1,3,"input",28)(8,GL,2,1,"span",29),Bn(),ae()),n&2){let t=Je().$implicit;hn("title",t.tooltip||null),De(),hn("for",t.key),De(),dn(t.label),De(),je("ngSwitch",t.type),De(),je("ngSwitchCase","number"),De(),je("ngSwitchCase","color"),De(),je("ngSwitchCase","checkbox"),De(),je("ngSwitchCase","text")}}function WL(n,e){if(n&1&&(Un(0)(1,17),Dt(2,UL,7,10,"div",18)(3,jL,9,8,"div",19),Bn()()),n&2){let t=e.$implicit;De(),je("ngSwitch",t.type),De(),je("ngSwitchCase","slider")}}function $L(n,e){if(n&1&&(Un(0),Dt(1,FL,1,0,"hr",13),ie(2,"div",14),Dt(3,kL,2,1,"h3",15)(4,WL,4,2,"ng-container",12),ae(),Bn()),n&2){let t=e.$implicit,i=e.index,r=Je(2).ngIf,o=Je();De(),je("ngIf",i>0),De(2),je("ngIf",t),De(),je("ngForOf",o.getParamsForSection(r.params,t))}}function qL(n,e){if(n&1&&(ie(0,"div",11),Dt(1,$L,5,3,"ng-container",12),ae()),n&2){let t=Je().ngIf,i=Je();De(),je("ngForOf",i.getSections(t.params))}}function XL(n,e){if(n&1){let t=Tn();ie(0,"div",4,1)(2,"div",5)(3,"span",6),He(4),ae(),ie(5,"button",7),Nt("click",function(){ln(t);let r=Je();return un(r.closePanel())}),ie(6,"mat-icon"),He(7,"close"),ae()()(),Dt(8,qL,2,1,"div",8),ie(9,"div",9)(10,"button",10),Nt("click",function(){ln(t);let r=Je();return un(r.onGenerate())}),He(11," Generate "),ae()()()}if(n&2){let t=e.ngIf,i=Je(),r=Mg(1);hn("aria-labelledby",i.layerTitleId),De(3),je("id",i.layerTitleId),De(),dn(t.layerName?t.layerName+" configuration":"Layer configuration"),De(4),je("ngIf",t.params&&t.params.length)("ngIfElse",r)}}var ah=class n{constructor(e){this.layerManager=e;this.layerConfig$=this.layerManager.selectedLayer$.pipe(Ut(t=>{if(this.selectedLayerKey=t,!t)return{layerName:null,params:[]};let i=this.layerManager.getLayerConfigParams(t)??[];return{layerName:t.charAt(0).toUpperCase()+t.slice(1),params:i}}))}layerConfig$;selectedLayerKey=null;panelRoot;layerTitleId="layer-config-title";ngAfterViewInit(){this.panelRoot&&this.panelRoot.nativeElement&&setTimeout(()=>this.panelRoot.nativeElement.focus(),0)}getSections(e){return Array.from(new Set(e.map(t=>t.section)))}getParamsForSection(e,t){return e.filter(i=>i.section===t)}closePanel(){this.layerManager.setSelectedLayer(null)}onGenerate(){this.selectedLayerKey&&this.layerManager.queueLayerGeneration(this.selectedLayerKey)}onParamInput(e,t){let i;console.log("Checkbox input detected",e),e.type==="checkbox"?i=t.target.checked:(i=t.target.value,(e.type==="number"||e.type==="slider")&&(i=i===""?null:Number(i))),this.selectedLayerKey&&this.layerManager.updateLayerConfigParam(this.selectedLayerKey,e.key,i)}static \u0275fac=function(t){return new(t||n)(dt(Gn))};static \u0275cmp=rt({type:n,selectors:[["app-layer-config-panel"]],viewQuery:function(t,i){if(t&1&&ec(OL,5),t&2){let r;tc(r=nc())&&(i.panelRoot=r.first)}},decls:4,vars:3,consts:[["placeholder",""],["panelRoot",""],["class","layer-config-panel","role","dialog","aria-modal","true","tabindex","-1",4,"ngIf"],[1,"placeholder"],["role","dialog","aria-modal","true","tabindex","-1",1,"layer-config-panel"],[1,"layer-config-header"],[1,"layer-config-title",3,"id"],["type","button","aria-label","Close configuration panel",1,"close-btn",3,"click"],["class","layer-config-body",4,"ngIf","ngIfElse"],[1,"layer-config-footer"],["type","button","aria-label","Generate with current configuration",1,"generate-btn",3,"click"],[1,"layer-config-body"],[4,"ngFor","ngForOf"],["class","config-section-separator",4,"ngIf"],[1,"config-section"],[4,"ngIf"],[1,"config-section-separator"],[3,"ngSwitch"],["class","config-row--slider",4,"ngSwitchCase"],["class","config-row",4,"ngSwitchDefault"],[1,"config-row--slider"],[1,"config-row-slider-header"],[1,"config-row-value"],["type","range",3,"input","id","min","max","step","value","disabled"],[1,"config-row"],["type","number","class","config-row-value",3,"id","min","max","step","value","disabled","input",4,"ngSwitchCase"],["type","color","class","config-row-value",3,"id","value","disabled","input",4,"ngSwitchCase"],["class","config-row-value",4,"ngSwitchCase"],["type","text","class","config-row-value",3,"id","value","disabled","input",4,"ngSwitchCase"],["class","config-row-value",4,"ngSwitchDefault"],["type","number",1,"config-row-value",3,"input","id","min","max","step","value","disabled"],["type","color",1,"config-row-value",3,"input","id","value","disabled"],[1,"switch","switch-label"],["type","checkbox","role","switch",3,"change","id","checked","disabled"],[1,"slider"],["type","text",1,"config-row-value",3,"input","id","value","disabled"]],template:function(t,i){t&1&&(Dt(0,LL,3,0,"ng-template",null,0,wg)(2,XL,12,5,"div",2),Ro(3,"async")),t&2&&(De(2),je("ngIf",No(3,1,i.layerConfig$)))},dependencies:[tn,Hi,wi,ac,Fg,kg,Po,on,rn],styles:['.layer-config-panel[_ngcontent-%COMP%]{position:fixed;top:calc(var(--nav-bar-height) + var(--space-sm));left:var(--space-sm);width:var(--config-width);height:calc(100vh - var(--nav-bar-height) - 2 * var(--space-sm));background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);border:var(--border);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);z-index:var(--nav-bar-z-index);display:flex;flex-direction:column;color:var(--color-text-main);font-family:var(--font-main);font-size:var(--font-size);overflow:hidden;transition:opacity .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1);opacity:1}.layer-config-header[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between;padding:var(--space-lg) var(--space-lg) var(--space-md) var(--space-lg);border-bottom:1px solid var(--color-border);background:transparent;font-size:var(--font-size-heading);font-weight:600;letter-spacing:.01em;color:var(--color-text-main)}.layer-config-header[_ngcontent-%COMP%]   .layer-config-title[_ngcontent-%COMP%]{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--font-main);font-size:var(--font-size-heading);font-weight:600;color:var(--color-text-main)}.layer-config-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:var(--btn-bg);border:none;border-radius:50%;width:var(--btn-size);height:var(--btn-size);display:flex;align-items:center;justify-content:center;color:var(--color-text-main);cursor:pointer;transition:background .18s,box-shadow .18s,transform .18s;outline:none}.layer-config-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.layer-config-footer[_ngcontent-%COMP%]{padding:var(--space-md) var(--space-lg) var(--space-lg) var(--space-lg);border-top:1px solid var(--color-border);background:transparent;display:flex;justify-content:flex-end;align-items:center}.generate-btn[_ngcontent-%COMP%]{width:100%;font-family:var(--font-main);font-size:var(--font-size);padding:var(--space-xs) var(--space-md);border-radius:var(--radius);border:var(--border);background:var(--color-accent);color:var(--color-text-main);box-shadow:var(--shadow);cursor:pointer;outline:none;transition:background var(--transition),color var(--transition),box-shadow var(--transition),filter var(--transition),transform var(--transition);min-width:0;min-height:2rem;font-weight:500;letter-spacing:.01em;display:flex;align-items:center;justify-content:center;gap:var(--space-xs);-webkit-user-select:none;user-select:none;will-change:filter,box-shadow,background,color,transform;box-shadow:0 1px 4px #0000001a,var(--shadow)}.generate-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px;z-index:1}.generate-btn[_ngcontent-%COMP%]:hover, .generate-btn[_ngcontent-%COMP%]:focus-visible{background:var(--color-accent-hover);color:#fff}.layer-config-body[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:var(--space-lg) var(--space-lg) var(--space-md) var(--space-lg);display:flex;flex-direction:column;gap:var(--space-lg);scrollbar-width:thin;scrollbar-color:rgba(163,177,198,.1) transparent}.layer-config-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.layer-config-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--color-accent);border-radius:8px}.layer-config_body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--color-card);border-radius:8px}.config-row[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{background:var(--color-card);color:var(--color-text-main);border:1px solid var(--color-border);padding:var(--space-xs) var(--space-md);border-radius:var(--radius);font-family:var(--font-main);font-size:var(--font-size);font-weight:400;outline:none;transition:border-color .15s,box-shadow .15s;box-shadow:none;min-width:0;width:100%}.config-row[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .config-row[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{flex:1 1 auto}.config-row[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%]{padding:0;width:2.2rem;height:2.2rem;cursor:pointer;background:none;box-shadow:0 1px 4px #0000001a}.config-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.config-section-separator[_ngcontent-%COMP%]{border:none;border-top:1px solid var(--color-border);margin:1.5rem 0;opacity:.7}.config-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;padding:.25rem .5rem;border-radius:6px;transition:background .15s,box-shadow .15s}.config-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:120px;color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400;flex:1 1 0}.switch-label[_ngcontent-%COMP%]{min-width:unset!important;color:var(--color-text-main)!important;font-size:1rem!important;font-weight:500!important;flex:unset!important}.config-row-value[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--color-text-main);font-size:1rem;font-weight:500;text-align:right;min-width:48px;margin-left:1rem}.config-row--slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;gap:.25rem;margin-bottom:1.25rem;padding:.25rem .5rem;border-radius:6px;transition:background .15s,box-shadow .15s}.config-row--slider[_ngcontent-%COMP%]   .config-row-slider-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.25rem}.config-row--slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:120px;flex:1 1 0;color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400}.config-row--slider[_ngcontent-%COMP%]   .config-row-value[_ngcontent-%COMP%]{min-width:48px;margin-left:1rem}.config-row--slider[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]{width:100%;margin:0;height:4px;background:var(--color-scrollbar);border-radius:2px;outline:none}.layer-config-panel[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{color:var(--color-text-secondary);font-style:italic;opacity:.8;padding:var(--space-xl) 0;text-align:center}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2.2rem;height:1.2rem;margin-left:.25rem;vertical-align:middle}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:30px;opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background:var(--color-card);border-radius:1.2rem;box-shadow:0 1px 4px #0000001a;transition:background .18s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background:var(--color-accent)}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:1rem;width:1rem;left:.15rem;bottom:.1rem;background:var(--color-text-main);border-radius:50%;transition:transform .18s;box-shadow:0 1px 4px #0000001a}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(1rem)}']})};var ch=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-logo"]],decls:4,vars:2,consts:[["viewBox","0 0 32 32","fill","none","xmlns","http://www.w3.org/2000/svg",1,"gaia-logo-svg",2,"width","var(--btn-size)","height","var(--btn-size)"],["cx","22","cy","10","r","2.2","fill","var(--color-text-main)"],["d","M6 23 L13 13 L20 23","stroke","var(--color-text-main)","stroke-width","2","fill","none","stroke-linecap","round","stroke-linejoin","round"],["d","M15 23 L17.5 18 L19 20.5 L21 17 L25 23","stroke","var(--color-text-main)","stroke-width","1.5","fill","none","stroke-linecap","round","stroke-linejoin","round"]],template:function(t,i){t&1&&(cu(),ie(0,"svg",0),Ht(1,"circle",1)(2,"path",2)(3,"path",3),ae()),t&2&&hn("width",null)("height",null)},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}.gaia-logo-svg[_ngcontent-%COMP%]{width:var(--btn-size);height:var(--btn-size);display:block}.gaia-logo-svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   ellipse[_ngcontent-%COMP%], .gaia-logo-svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{transition:fill .18s,stroke .18s}"]})};function YL(n,e){n&1&&Ts(0)}function ZL(n,e){if(n&1&&(Un(0),Dt(1,YL,1,0,"ng-container",6),Bn()),n&2){let t=Je().$implicit;De(),je("ngComponentOutlet",t.icon)}}function KL(n,e){if(n&1){let t=Tn();Un(0),ie(1,"button",2),Nt("click",function(){let r=ln(t).$implicit,o=Je();return un(o.toggleLayer(r))}),ie(2,"span",3),Dt(3,ZL,2,1,"ng-container",4),ae(),ie(4,"span",5),He(5),ae()(),Bn()}if(n&2){let t=e.$implicit,i=Je();De(),Or("active",t.active)("selected",i.selectedLayer===t.key),hn("aria-label",t.label),De(2),je("ngIf",t.icon),De(2),dn(t.label)}}var lh=class n{constructor(e){this.layerManager=e}sections=[];selectedLayer=null;sub=new Ft;ngOnInit(){let e=this.layerManager.getLayers();this.sections=e.map(t=>{let i=t.charAt(0).toUpperCase()+t.slice(1);return{key:t,label:i,icon:this.layerManager.getIcon(t),active:this.layerManager.getLayerState(t).active}}),this.sub.add(this.layerManager.getLayerStates().subscribe(t=>{for(let i of this.sections)i.active=t[i.key]?.active??!1})),this.sub.add(this.layerManager.selectedLayer$.subscribe(t=>{this.selectedLayer=t}))}ngOnDestroy(){this.sub.unsubscribe()}toggleLayer(e){this.selectedLayer===e.key?this.layerManager.setSelectedLayer(null):this.layerManager.setSelectedLayer(e.key)}static \u0275fac=function(t){return new(t||n)(dt(Gn))};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-layer-buttons"]],decls:2,vars:1,consts:[[1,"nav-bar-layer-buttons"],[4,"ngFor","ngForOf"],[1,"layer-btn",3,"click"],[1,"icon"],[4,"ngIf"],[1,"label"],[4,"ngComponentOutlet"]],template:function(t,i){t&1&&(ie(0,"div",0),Dt(1,KL,6,7,"ng-container",1),ae()),t&2&&(De(),je("ngForOf",i.sections))},dependencies:[tn,sc,Hi,wi],styles:[".nav-bar-layer-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5em}.layer-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5em;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em 1em;border-radius:var(--button-radius, 8px);cursor:pointer;transition:background .15s,color .15s}.layer-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.2em}.layer-btn[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1em;font-weight:500}.layer-btn.selected[_ngcontent-%COMP%]{background:var(--color-accent, #005BEA);color:var(--color-bg, #fff)}.layer-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #003e99);color:var(--color-bg, #fff)}"]})};var uh=class n{generateAll=new kn;reset=new kn;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-actions"]],outputs:{generateAll:"generateAll",reset:"reset"},decls:11,vars:0,consts:[[1,"nav-bar-actions"],["mat-icon-button","","aria-label","Generate all",1,"action-btn","action-btn-generate-all",3,"click"],[1,"label"],["mat-icon-button","","aria-label","Reset",1,"action-btn","action-btn-reset",3,"click"]],template:function(t,i){t&1&&(ie(0,"div",0)(1,"button",1),Nt("click",function(){return i.generateAll.emit()}),ie(2,"mat-icon"),He(3,"bolt"),ae(),ie(4,"span",2),He(5,"Generate All"),ae()(),ie(6,"button",3),Nt("click",function(){return i.reset.emit()}),ie(7,"mat-icon"),He(8,"refresh"),ae(),ie(9,"span",2),He(10,"Reset"),ae()()())},dependencies:[tn,on,rn],styles:[".nav-bar-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5em}.action-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5em;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em 1em;border-radius:var(--button-radius, 8px);cursor:pointer;transition:background .15s,color .15s}.action-btn-generate-all[_ngcontent-%COMP%]{background:var(--color-accent)}.action-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}.action-btn-reset[_ngcontent-%COMP%]:hover{background:var(--color-error-hover, #2ecc40);color:var(--color-bg, #fff)}.action-btn[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1em;font-weight:500}"]})};var dh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-options"]],decls:3,vars:0,consts:[["mat-icon-button","","aria-label","Options",1,"option-btn"]],template:function(t,i){t&1&&(ie(0,"button",0)(1,"mat-icon"),He(2,"settings"),ae()())},dependencies:[tn,on,rn],styles:[".option-btn[_ngcontent-%COMP%]{display:flex;align-items:center;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em;border-radius:50%;cursor:pointer;transition:background .15s,color .15s}.option-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}"]})};var fh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar-help"]],decls:3,vars:0,consts:[["mat-icon-button","","href","https://github.com/Daendrah/GaiaTweak","target","_blank","rel","noopener","aria-label","Help (GitHub)",1,"help-btn"]],template:function(t,i){t&1&&(ie(0,"a",0)(1,"mat-icon"),He(2,"help_outline"),ae()())},dependencies:[tn,on,rn],styles:[".help-btn[_ngcontent-%COMP%]{display:flex;align-items:center;background:none;border:none;color:var(--color-text-main);font:inherit;padding:.5em;border-radius:50%;cursor:pointer;transition:background .15s,color .15s;text-decoration:none}.help-btn[_ngcontent-%COMP%]:hover{background:var(--color-accent-hover, #2ecc40);color:var(--color-bg, #fff)}"]})};var hh=class n{constructor(e){this.cdr=e}gaiaService=pe(fa);sub=Ft.EMPTY;framerate=0;ngOnInit(){this.sub=this.gaiaService.getFramerate().subscribe(e=>{this.framerate=e,this.cdr.markForCheck()})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(t){return new(t||n)(dt(Ku))};static \u0275cmp=rt({type:n,selectors:[["app-fps-indicator"]],decls:5,vars:1,consts:[["title","Current framerate","aria-label","Framerate",1,"fps-indicator"],[1,"fps-label"],[1,"fps-value"]],template:function(t,i){t&1&&(ie(0,"div",0)(1,"span",1),He(2,"FPS:"),ae(),ie(3,"span",2),He(4),ae()()),t&2&&(De(4),dn(i.framerate))},styles:[".fps-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-xs);font-family:var(--font-main);font-size:var(--font-size-secondary);color:var(--color-text-main);background:none;border-radius:var(--radius);padding:var(--space-xs) var(--space-md);min-height:2rem;font-weight:500;letter-spacing:.01em;-webkit-user-select:none;user-select:none;box-sizing:border-box;width:100%;transition:color var(--transition),background var(--transition)}.fps-label[_ngcontent-%COMP%]{color:var(--color-text-secondary);font-size:var(--font-size-secondary);font-weight:400;letter-spacing:.02em}.fps-value[_ngcontent-%COMP%]{color:var(--color-success);font-size:1em;font-weight:600;letter-spacing:.01em;min-width:2.5ch;text-align:right}"],changeDetection:0})};function JL(n,e){n&1&&Ts(0)}function QL(n,e){if(n&1&&(Un(0),Dt(1,JL,1,0,"ng-container",13),Bn()),n&2){let t=Je().$implicit;De(),je("ngComponentOutlet",t.icon)}}function eF(n,e){if(n&1){let t=Tn();ie(0,"div",6)(1,"span",7),Dt(2,QL,2,1,"ng-container",8),ae(),ie(3,"span",9),He(4),ae(),ie(5,"label",10)(6,"input",11),Nt("change",function(){let r=ln(t).$implicit,o=Je(2);return un(o.toggleLayer(r))}),ae(),Ht(7,"span",12),ae()()}if(n&2){let t=e.$implicit;De(2),je("ngIf",t.icon),De(2),dn(t.label),De(2),je("checked",t.active)}}function tF(n,e){if(n&1){let t=Tn();ie(0,"div",1)(1,"div",2)(2,"span"),He(3,"Layer Visibility"),ae(),ie(4,"button",3),Nt("click",function(){ln(t);let r=Je();return un(r.close.emit())}),ie(5,"mat-icon"),He(6,"close"),ae()()(),ie(7,"div",4),Dt(8,eF,8,3,"div",5),ae()()}if(n&2){let t=Je();De(8),je("ngForOf",t.sections)}}var ph=class n{constructor(e){this.layerManager=e}open=!1;close=new kn;sections=[];ngOnInit(){let e=this.layerManager.getLayers();this.sections=e.map(t=>{let i=t.charAt(0).toUpperCase()+t.slice(1);return{key:t,label:i,icon:this.layerManager.getIcon(t),active:this.layerManager.getLayerState(t).active}}),this.layerManager.getLayerStates().subscribe(t=>{for(let i of this.sections)i.active=t[i.key]?.active??!1})}toggleLayer(e){e.active?this.layerManager.resetLayer(e.key):this.layerManager.queueLayerGeneration(e.key)}static \u0275fac=function(t){return new(t||n)(dt(Gn))};static \u0275cmp=rt({type:n,selectors:[["app-layer-toggle-panel"]],inputs:{open:"open"},outputs:{close:"close"},decls:1,vars:1,consts:[["class","layer-toggle-panel",4,"ngIf"],[1,"layer-toggle-panel"],[1,"panel-header"],["aria-label","Close panel",1,"close-btn",3,"click"],[1,"panel-body"],["class","layer-row",4,"ngFor","ngForOf"],[1,"layer-row"],[1,"icon"],[4,"ngIf"],[1,"label"],[1,"switch"],["type","checkbox","aria-label","Toggle layer",3,"change","checked"],[1,"slider"],[4,"ngComponentOutlet"]],template:function(t,i){t&1&&Dt(0,tF,9,1,"div",0),t&2&&je("ngIf",i.open)},dependencies:[tn,sc,Hi,wi,on,rn],styles:['.layer-toggle-panel[_ngcontent-%COMP%]{position:fixed;top:var(--nav-bar-height, 64px);right:var(--space-sm);min-width:260px;background:var(--color-card);border-radius:var(--radius);box-shadow:var(--shadow);z-index:var(--nav-bar-z-index, 1100);padding:var(--space-md);margin-top:var(--space-sm);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);color:var(--color-text-main)}.panel-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-size:1.1em;font-weight:600;margin-bottom:var(--space-md)}.close-btn[_ngcontent-%COMP%]{background:var(--btn-bg);border:none;border-radius:50%;width:var(--btn-size);height:var(--btn-size);display:flex;align-items:center;justify-content:center;color:var(--color-text-main);cursor:pointer;transition:background .18s,box-shadow .18s,transform .18s;outline:none}.close-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg)}.panel-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-md)}.layer-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md);padding:.3em 0}.layer-row[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.3em}.layer-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:1;font-size:1em}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:38px;height:22px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#444;border-radius:22px;transition:.2s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover + .slider[_ngcontent-%COMP%]{background-color:var(--color-accent-hover, #2ecc40)}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:var(--color-accent, #2ecc40)}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;left:3px;bottom:3px;background-color:#fff;border-radius:50%;transition:.2s}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(16px)}']})};var mh=class n{constructor(e){this.layerManager=e}togglePanelOpen=!1;onOptionsClick(){this.togglePanelOpen=!this.togglePanelOpen}onGenerateAll(){this.layerManager.generateAllLayers()}onReset(){this.layerManager.resetAllLayers()}closeTogglePanel(){this.togglePanelOpen=!1}static \u0275fac=function(t){return new(t||n)(dt(Gn))};static \u0275cmp=rt({type:n,selectors:[["app-nav-bar"]],decls:13,vars:1,consts:[["aria-label","Top menu bar",1,"nav-bar"],[1,"nav-bar-left"],[1,"nav-bar-logo"],[1,"nav-bar-title"],[1,"nav-bar-separator"],[1,"nav-bar-actions"],[3,"generateAll","reset"],[3,"click"],[3,"close","open"]],template:function(t,i){t&1&&(ie(0,"nav",0)(1,"div",1),Ht(2,"app-logo",2),ie(3,"span",3),He(4,"Gaia Tweak"),ae(),Ht(5,"span",4)(6,"app-nav-bar-layer-buttons"),ae(),ie(7,"div",5)(8,"app-nav-bar-actions",6),Nt("generateAll",function(){return i.onGenerateAll()})("reset",function(){return i.onReset()}),ae(),ie(9,"app-nav-bar-options",7),Nt("click",function(){return i.onOptionsClick()}),ae(),Ht(10,"app-nav-bar-help")(11,"app-fps-indicator"),ae()(),ie(12,"app-layer-toggle-panel",8),Nt("close",function(){return i.closeTogglePanel()}),ae()),t&2&&(De(12),je("open",i.togglePanelOpen))},dependencies:[ch,lh,uh,dh,fh,hh,ph],styles:[".nav-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100vw;height:var(--nav-bar-height, 64px);background:var(--nav-bar-bg);box-shadow:var(--nav-bar-shadow);border-radius:0 0 var(--nav-bar-radius) var(--nav-bar-radius);margin:0 auto;padding:var(--nav-bar-padding);position:fixed;top:0;left:0;z-index:var(--nav-bar\\e8-z-index, 1100);backdrop-filter:var(--nav-bar-blur);-webkit-backdrop-filter:var(--blur)}.nav-bar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md)}.nav-bar-title[_ngcontent-%COMP%]{font-family:var(--font-main);font-size:var(--font-size-heading);font-weight:600;color:var(--color-text-main);letter-spacing:.01em}.nav-bar-separator[_ngcontent-%COMP%]{display:inline-block;width:1px;height:32px;background:var(--color-border, #444);margin:0 var(--space-md);border-radius:1px}.nav-bar-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md)}.nav-bar-logo[_ngcontent-%COMP%]{height:40px;width:40px}"]})};function nF(n,e){n&1&&Ht(0,"app-layer-config-panel")}var gh=class n{selectedLayer$;constructor(e){this.selectedLayer$=e.selectedLayer$}static \u0275fac=function(t){return new(t||n)(dt(Gn))};static \u0275cmp=rt({type:n,selectors:[["app-root"]],decls:7,vars:3,consts:[[1,"app-container"],[1,"main-content"],[1,"viewport"],[4,"ngIf"]],template:function(t,i){t&1&&(ie(0,"div",0),Ht(1,"app-nav-bar"),ie(2,"div",1),Ht(3,"app-viewport",2),ae(),Ht(4,"app-notification-container"),Dt(5,nF,1,0,"app-layer-config-panel",3),Ro(6,"async"),ae()),t&2&&(De(5),je("ngIf",No(6,1,i.selectedLayer$)))},dependencies:[tn,wi,Po,nh,sh,ah,mh],styles:[".app-container[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;background:var(--bg-primary);color:var(--text-primary);position:relative}.main-content[_ngcontent-%COMP%]{flex:1;position:relative;height:100vh;overflow:hidden;background:var(--bg-primary);transition:margin-left .3s cubic-bezier(.4,0,.2,1)}.viewport[_ngcontent-%COMP%]{width:100%;height:100%}"]})};function it(n,e){let t=n.find(i=>i.key===e);return t?t.value:void 0}var Kc=`
precision highp float;

out vec3 v_position;
out vec2 v_uv;

void main() {
  v_position = position;
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var zM=`
precision highp float;

in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform float u_seed;
uniform bool u_background_enabled;
uniform float u_background_noise_intensity;
uniform vec3 u_deep_space_base;
uniform vec3 u_deep_space_dark;
uniform vec3 u_deep_space_mid;
uniform vec3 u_deep_space_subtle;

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 10.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float noise(vec3 v)
{
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy; // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i);
  vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
      dot(p2, x2), dot(p3, x3)));
}

// Fixed 8-octave Fractal Brownian Motion for maximum detail
float fbm(vec3 p, int octaves) {
  float value = 0.;
  float amplitude = .5;
  float frequency = 1.;
  float max = 0.;

  for (int i = 0; i < 20; i++) {
    if (i >= octaves) break; // Limit to specified octaves
    value += noise(p * frequency) * amplitude;
    max += amplitude;
    amplitude *= .5; // Halve amplitude each octave
    frequency *= 2.; // Double frequency each octave
  }

  return value / max;
}

vec4 generateBackground(vec3 pos) {
  float gradientFactor = smoothstep(0.0, 1.0, pos.y * 0.5 + 0.5);
  float noiseVariation = fbm(normalize(pos) * .8, 8) * u_background_noise_intensity;
  float totalGradient = clamp(gradientFactor + noiseVariation, 0.0, 1.0);
  vec3 gradientColor = mix(u_deep_space_dark, u_deep_space_subtle, totalGradient);
  vec3 baseBlend = mix(u_deep_space_base, gradientColor, .85);
  float midToneInfluence = smoothstep(.3, .7, totalGradient) * .15;
  vec3 midToneColor = mix(baseBlend, u_deep_space_mid, midToneInfluence);
  vec3 finalBackground = normalize(midToneColor) * 0.1;
  return vec4(midToneColor, 1.0);
}

void main() {
  if (!u_background_enabled) {
    outColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  outColor = generateBackground(v_position);
}
`;var GM=`
precision highp float;

in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform bool u_kuwahara_enabled;
uniform float u_kernel_radius;
uniform samplerCube u_previous_cubemap;

// Generalized Kuwahara filter with configurable sector count
vec4 generateKuwahara(vec3 pos) {
    const int SECTOR_COUNT = 4; // Number of angular sectors (change as needed)
    const int KERNEL_RADIUS = 2; // Kernel radius in samples (for 5x5, use 2)
    const int KERNEL_SIZE = KERNEL_RADIUS * 2 + 1;
    float stepSize = (0.03 * 2.0) / float(KERNEL_SIZE - 1);

    // Per-sector accumulators
    vec3 sum[SECTOR_COUNT];
    vec3 sumSq[SECTOR_COUNT];
    int count[SECTOR_COUNT];
    for (int i = 0; i < SECTOR_COUNT; ++i) {
        sum[i] = vec3(0.0);
        sumSq[i] = vec3(0.0);
        count[i] = 0;
    }

    // Center of kernel for angle calculation
    vec2 center = vec2(0.0);

    for (int x = -KERNEL_RADIUS; x <= KERNEL_RADIUS; x++) {
        for (int y = -KERNEL_RADIUS; y <= KERNEL_RADIUS; y++) {
            vec2 offset = vec2(float(x), float(y)) * stepSize;
            vec3 samplePos = normalize(pos) + vec3(offset, 0.0);
            vec3 color = texture(u_previous_cubemap, samplePos).rgb;
            vec3 colorSq = color * color;

            // Compute angle and assign to sector
            float angle = atan(float(y), float(x)); // [-PI, PI]
            if (angle < 0.0) angle += 6.28318530718; // [0, 2PI]
            int sector = int(floor(angle / (6.28318530718 / float(SECTOR_COUNT))));
            sector = clamp(sector, 0, SECTOR_COUNT - 1);

            sum[sector] += color;
            sumSq[sector] += colorSq;
            count[sector] += 1;
        }
    }

    // Compute mean and variance for each sector
    vec3 mean[SECTOR_COUNT];
    float variance[SECTOR_COUNT];
    for (int i = 0; i < SECTOR_COUNT; ++i) {
        if (count[i] > 0) {
            mean[i] = sum[i] / float(count[i]);
            variance[i] = dot(sumSq[i] / float(count[i]) - mean[i] * mean[i], vec3(1.0));
        } else {
            mean[i] = vec3(0.0);
            variance[i] = 1e20; // Large value to avoid selecting empty sector
        }
    }

    // Find sector with minimum variance
    int minIdx = 0;
    float minVar = variance[0];
    for (int i = 1; i < SECTOR_COUNT; ++i) {
        if (variance[i] < minVar) {
            minVar = variance[i];
            minIdx = i;
        }
    }

    return vec4(mean[minIdx], 1.0);
}

void main() {
  if (!u_kuwahara_enabled) {
    outColor = texture(u_previous_cubemap, v_position);
    return;
  }

  outColor = generateKuwahara(v_position);
}
`;var jM=`
precision highp float;

in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform bool u_stars_enabled;
uniform vec3 u_star_color_base;
uniform vec3 u_star_color_tint1;
uniform vec3 u_star_color_tint2;
uniform float u_color_threshold1;
uniform float u_color_threshold2;
uniform float u_star_brightness_max;
uniform float u_star_brightness_min;
uniform float u_star_density;
uniform float u_star_size_variation;
uniform samplerCube u_previous_cubemap;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec4 generateStars(vec2 uv) {
  float gridCount = 1.0 / (1.0 - clamp(u_star_density, 0.0, 1.0));
  vec2 grid = vec2(gridCount);
  vec2 sector = floor(uv * grid);
  vec3 starColor = vec3(0.0);
  for (int j = -1; j <= 1; ++j) {
    for (int i = -1; i <= 1; ++i) {
      vec2 neighborSector = sector + vec2(i, j);
      float starSeed = hash21(neighborSector);
      vec2 starPos = (neighborSector + vec2(
          hash21(neighborSector + 0.1),
          hash21(neighborSector + 0.2)
        )) / grid;

      float colorSeed = hash21(neighborSector + 0.3);
      vec3 starColorRamp;
      if (colorSeed < u_color_threshold1) {
        float t = colorSeed / u_color_threshold1;
        starColorRamp = mix(u_star_color_tint1, u_star_color_base, t);
      } else if (colorSeed < u_color_threshold2) {
        starColorRamp = u_star_color_base;
      } else {
        float t = (colorSeed - u_color_threshold2) / (1.0 - u_color_threshold2);
        starColorRamp = mix(u_star_color_base, u_star_color_tint2, t);
      }

      float sizeSeed = hash21(neighborSector + 0.4);
      float starSize = (sizeSeed * u_star_size_variation) / gridCount;
      float brightnessSeed = hash21(neighborSector + 0.5);
      float starBrightness = mix(u_star_brightness_min, u_star_brightness_max, brightnessSeed);
      float dist = length(uv - starPos);
      float starIntensity = smoothstep(starSize, 0.0, dist);

      starColor += starColorRamp * starIntensity * starBrightness;
    }
  }

  return vec4(starColor, length(starColor));
}

void main() {
if (!u_stars_enabled) {
    outColor = texture(u_previous_cubemap, v_position);
    return;
  }

  vec4 stars = generateStars(v_uv);
  outColor = mix(texture(u_previous_cubemap, v_position), stars, stars.a);
}
`;var WM=`
in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform samplerCube u_previous_cubemap;

#define MAX_STEPS 60
#define MAX_STEPS_LIGHTS 6
#define ABSORPTION_COEFFICIENT 0.9
#define SCATTERING_ANISO 0.3
#define PI 3.14159265359

float sdSphere(vec3 p, float radius) {
  return length(p) - radius;
}

float BeersLaw(float dist, float absorption) {
  return exp(-dist * absorption);
}

float HenyeyGreenstein(float g, float mu) {
  float gg = g * g;
  return (1.0 / (4.0 * PI)) * ((1.0 - gg) / pow(1.0 + gg - 2.0 * g * mu, 1.5));
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 10.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float noise(vec3 v)
{
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy; // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i);
  vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
      dot(p2, x2), dot(p3, x3)));
}

// Fixed 8-octave Fractal Brownian Motion for maximum detail
float fbm(vec3 p, int octaves) {
  float value = 0.;
  float amplitude = .5;
  float frequency = 2.2;
  float max = 0.;

  for (int i = 0; i < 20; i++) {
    if (i >= octaves) break; // Limit to specified octaves
    value += noise(p) * amplitude;
    p *= frequency;
    max += amplitude;
    amplitude *= .5; // Halve amplitude each octave
    frequency += 0.21; // Double frequency each octave
  }

  return value / max;
}

float scene(vec3 p, bool lowRes) {
  float distance = sdSphere(p, 1.2);

  float f = fbm(p * 0.8, 4);

  return -distance + f;
}

const vec3 SUN_POSITION = vec3(-0.6, 1.0, -0.2);
const float MARCH_SIZE = 0.1;

float lightmarch(vec3 position, vec3 rayDirection) {
  vec3 sunDirection = normalize(SUN_POSITION);
  float totalDensity = 0.0;
  float marchSize = 0.03;

  for (int step = 0; step < MAX_STEPS_LIGHTS; step++) {
    position += sunDirection * marchSize * float(step);

    float lightSample = scene(position, true);
    totalDensity += lightSample;
  }

  float transmittance = BeersLaw(totalDensity, ABSORPTION_COEFFICIENT);
  return transmittance;
}

float raymarch(vec3 rayOrigin, vec3 rayDirection) {
  float depth = 0.0;
  vec3 p = rayOrigin + depth * rayDirection;
  vec3 sunDirection = normalize(SUN_POSITION);

  float totalTransmittance = 1.0;
  float lightEnergy = 0.0;

  float phase = HenyeyGreenstein(SCATTERING_ANISO, dot(rayDirection, sunDirection));

  for (int i = 0; i < MAX_STEPS; i++) {
    float density = scene(p, false);
    // We only draw the density if it's greater than 0
    if (density > 0.0) {
      float lightTransmittance = lightmarch(p, rayDirection);
      float luminance = 0.025 + density * phase;

      totalTransmittance *= lightTransmittance;
      lightEnergy += totalTransmittance * luminance;
    }

    depth += MARCH_SIZE;
    p = rayOrigin + depth * rayDirection;
  }

  return clamp(lightEnergy, 0.0, 1.0);
}

void main() {
  vec2 uv = v_uv;
  uv -= 0.5;

  // Ray Origin - camera
  vec3 ro = vec3(0.0, 0.0, 5.0);
  // Ray Direction
  vec3 rd = normalize(vec3(uv, -1.0));

  vec3 color = texture(u_previous_cubemap, v_position).rgb;

  // Sun and Sky
  vec3 sunColor = vec3(1.0, 0.5, 0.3);
  vec3 sunDirection = normalize(SUN_POSITION);
  float sun = clamp(dot(sunDirection, rd), 0.0, 1.0);

  // Cloud
  float res = raymarch(ro, rd);
  color = color + sunColor * res;

  outColor = vec4(color, 1.0);
}
`;var vh=class{currentSkyboxTexture=null;currentCubeRenderTarget=null;generationScene;intermediateCubeTargets=[];constructor(){this.generationScene=new Wo}getPipeline(e,t){let i=[],r=it(e,"textureSize"),o=t.getRenderer();return i.push({name:"Creating resources",run:s=>St(this,null,function*(){this.intermediateCubeTargets=[];for(let a=0;a<4;++a)this.intermediateCubeTargets.push(new Xs(r,{format:Hn,colorSpace:pr,type:hi,minFilter:Vn,magFilter:Vn}));s.prevCubemap=null})}),i.push({name:"Generating skybox background",run:s=>St(this,null,function*(){let a=this.intermediateCubeTargets[0],c=new gr(.1,10,a);this.generationScene.clear();let l=this.createBackgroundCubemapShader(e,s.noiseTexture),u=new Tt(new Ii(1,1,1),l);u.geometry.scale(1,1,-1),this.generationScene.add(u),c.update(o,this.generationScene),this.generationScene.remove(u),u.geometry.dispose(),l.dispose(),s.prevCubemap=a.texture})}),i.push({name:"Generating cosmic clouds",run:s=>St(this,null,function*(){let a=s.prevCubemap,c=this.intermediateCubeTargets[1],l=new gr(.1,10,c);this.generationScene.clear();let u=this.createCloudsCubemapShader(e,a),d=new Tt(new Ii(1,1,1),u);d.geometry.scale(1,1,-1),this.generationScene.add(d),l.update(o,this.generationScene),this.generationScene.remove(d),d.geometry.dispose(),u.dispose(),s.prevCubemap=c.texture})}),i.push({name:"Post-processing Skybox",run:s=>St(this,null,function*(){let a=s.prevCubemap,c=this.intermediateCubeTargets[2],l=new gr(.1,10,c);this.generationScene.clear();let u=this.createPostProcessCubemapShader(e,a),d=new Tt(new Ii(1,1,1),u);d.geometry.scale(1,1,-1),this.generationScene.add(d),l.update(o,this.generationScene),this.generationScene.remove(d),d.geometry.dispose(),u.dispose(),s.prevCubemap=c.texture})}),i.push({name:"Generating Stars",run:s=>St(this,null,function*(){let a=s.prevCubemap,c=this.intermediateCubeTargets[3],l=new gr(.1,10,c);this.generationScene.clear();let u=this.createStarsCubemapShader(e,a),d=new Tt(new Ii(1,1,1),u);d.geometry.scale(1,1,-1),this.generationScene.add(d),l.update(o,this.generationScene),this.generationScene.remove(d),d.geometry.dispose(),u.dispose(),s.prevCubemap=c.texture})}),i.push({name:"Assemble cubemap",run:s=>St(this,null,function*(){this.currentCubeRenderTarget&&(this.currentCubeRenderTarget.dispose(),this.currentCubeRenderTarget=null);let a=this.intermediateCubeTargets[3];t.getScene().background=a.texture,this.currentSkyboxTexture=a.texture,this.currentCubeRenderTarget=a})}),i.push({name:"Finalize",run:s=>St(this,null,function*(){for(let a=0;a<this.intermediateCubeTargets.length-1;++a);})}),{steps:i}}reset(e){e&&e.getScene().background===this.currentSkyboxTexture&&(e.getScene().background=null),this.cleanup()}isActive(e){return e.getScene().background===this.currentSkyboxTexture&&!!this.currentSkyboxTexture}cleanup(){this.currentSkyboxTexture&&(this.currentSkyboxTexture.dispose(),this.currentSkyboxTexture=null),this.currentCubeRenderTarget&&(this.currentCubeRenderTarget.dispose(),this.currentCubeRenderTarget=null)}createBackgroundCubemapShader(e,t){function i(r){let o=new Me(r);return new O(o.r,o.g,o.b)}return new xt({uniforms:{u_seed:{value:it(e,"seed")},u_background_enabled:{value:it(e,"background.enabled")},u_background_noise_intensity:{value:it(e,"background.noiseIntensity")},u_deep_space_base:{value:i(it(e,"background.deepSpaceBase"))},u_deep_space_dark:{value:i(it(e,"background.deepSpaceDark"))},u_deep_space_mid:{value:i(it(e,"background.deepSpaceMid"))},u_deep_space_subtle:{value:i(it(e,"background.deepSpaceSubtle"))}},vertexShader:Kc,fragmentShader:zM,glslVersion:Qr})}createCloudsCubemapShader(e,t){return new xt({uniforms:{u_previous_cubemap:{value:t}},vertexShader:Kc,fragmentShader:WM,glslVersion:Qr})}createPostProcessCubemapShader(e,t){return new xt({uniforms:{u_kuwahara_enabled:{value:it(e,"kuwahara.enabled")},u_kernel_radius:{value:it(e,"kuwahara.kernelRadius")},u_previous_cubemap:{value:t}},vertexShader:Kc,fragmentShader:GM,glslVersion:Qr})}createStarsCubemapShader(e,t){function i(r){let o=new Me(r);return new O(o.r,o.g,o.b)}return new xt({uniforms:{u_stars_enabled:{value:it(e,"stars.enabled")},u_star_density:{value:it(e,"stars.density")},u_star_size_variation:{value:it(e,"stars.sizeVariation")},u_star_color_base:{value:i(it(e,"stars.colorBase"))},u_star_color_tint1:{value:i(it(e,"stars.colorTint1"))},u_star_color_tint2:{value:i(it(e,"stars.colorTint2"))},u_color_threshold1:{value:it(e,"stars.colorThreshold1")},u_color_threshold2:{value:it(e,"stars.colorThreshold2")},u_star_brightness_max:{value:it(e,"stars.brightnessMax")},u_star_brightness_min:{value:it(e,"stars.brightnessMin")},u_previous_cubemap:{value:t}},vertexShader:Kc,fragmentShader:jM,glslVersion:Qr})}};var yh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-skybox-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"view_in_ar"),ae())},dependencies:[on,rn],encapsulation:2})};var iF=[{key:"textureSize",label:"Texture Size",type:"number",value:512,min:64,max:2048,step:1,section:"General",tooltip:"Resolution of the skybox faces."},{key:"seed",label:"Seed",type:"number",value:42928,min:0,max:99999,step:1,section:"General",tooltip:"Random seed for procedural generation."},{key:"background.enabled",label:"Background Enabled",type:"checkbox",value:!0,section:"Background",tooltip:"Enable background noise."},{key:"background.noiseIntensity",label:"Background Noise Intensity",type:"slider",value:.15,min:0,max:1,step:.01,section:"Background",tooltip:"Intensity of background noise."},{key:"background.deepSpaceBase",label:"Deep Space Base",type:"color",value:"#0d2640",section:"Background",tooltip:"Base color for deep space."},{key:"background.deepSpaceDark",label:"Deep Space Dark",type:"color",value:"#051428",section:"Background",tooltip:"Dark color for deep space."},{key:"background.deepSpaceMid",label:"Deep Space Mid",type:"color",value:"#14334d",section:"Background",tooltip:"Mid color for deep space."},{key:"background.deepSpaceSubtle",label:"Deep Space Subtle",type:"color",value:"#1e4060",section:"Background",tooltip:"Subtle color for deep space."},{key:"kuwahara.enabled",label:"Kuwahara Enabled",type:"checkbox",value:!0,section:"Kuwahara",tooltip:"Enable Kuwahara filter."},{key:"kuwahara.kernelRadius",label:"Kuwahara Kernel Radius",type:"slider",value:.1,min:0,max:1,step:.01,section:"Kuwahara",tooltip:"Physical radius for Kuwahara filter."},{key:"stars.enabled",label:"Stars Enabled",type:"checkbox",value:!0,section:"Stars",tooltip:"Enable star generation."},{key:"stars.density",label:"Star Density",type:"slider",value:.95,min:0,max:1,step:.001,section:"Stars",tooltip:"Density of stars."},{key:"stars.sizeVariation",label:"Star Size Variation",type:"slider",value:.04,min:.01,max:1,step:.01,section:"Stars",tooltip:"Variation in star size."},{key:"stars.colorBase",label:"Star Color Base",type:"color",value:"#f2f9ff",section:"Stars",tooltip:"Base color for stars."},{key:"stars.colorTint1",label:"Star Color Tint 1",type:"color",value:"#a4c4ff",section:"Stars",tooltip:"First tint color for stars."},{key:"stars.colorTint2",label:"Star Color Tint 2",type:"color",value:"#fffacc",section:"Stars",tooltip:"Second tint color for stars."},{key:"stars.colorThreshold1",label:"Star Color Threshold 1",type:"slider",value:.25,min:0,max:1,step:.01,section:"Stars",tooltip:"Threshold for first star color ramp."},{key:"stars.colorThreshold2",label:"Star Color Threshold 2",type:"slider",value:.75,min:0,max:1,step:.01,section:"Stars",tooltip:"Threshold for second star color ramp."},{key:"stars.brightnessMax",label:"Star Brightness Max",type:"slider",value:1.2,min:0,max:2,step:.01,section:"Stars",tooltip:"Maximum star brightness."},{key:"stars.brightnessMin",label:"Star Brightness Min",type:"slider",value:.2,min:0,max:1,step:.01,section:"Stars",tooltip:"Minimum star brightness."}],$M={provide:no,useValue:{key:"skybox",factory:new vh,params:iF,icon:yh},multi:!0};var qM=`
  varying vec3 v_normal;

  void main() {
    v_normal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,XM=`
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
`;var _h="sunLight",Ty="sunMesh",xh=class{getPipeline(e,t){return{steps:[{name:"Generate sun",run:()=>St(this,null,function*(){this.generateSun(e,t)})}]}}reset(e){let t=e.getScene(),i=t.getObjectByName(_h),r=t.getObjectByName(Ty);i&&(t.remove(i),i.dispose?.()),r&&(t.remove(r),r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(o=>o.dispose()):r.material.dispose())}isActive(e){return!!e.getScene().getObjectByName(_h)}generateSun(e,t){let i=t.getScene().getObjectByName(_h),r=t.getScene().getObjectByName(Ty);if(!i&&!r){let d=this.createSun(t);i=d.light,r=d.mesh}let o=it(e,"sunAngle"),s=it(e,"sunDistance"),a=o/180*Math.PI,c=0,l=Math.cos(a)*s,u=-Math.sin(a)*s;if(i){i.position.set(c,l,u);let d=new Me(it(e,"sunLightColor"));i.color.setRGB(d.r,d.g,d.b)}if(r){r.position.set(c,l,u);let d=r.geometry,f=it(e,"sunSize");d.parameters.radius!==f&&(r.geometry.dispose(),r.geometry=new Ks(f,64,64));let h=r.material,g=new Me(it(e,"sunInnerColor")),y=new Me(it(e,"sunOuterColor"));h.uniforms.u_innerColor.value.setRGB(g.r,g.g,g.b),h.uniforms.u_outerColor.value.setRGB(y.r,y.g,y.b),h.uniforms.u_edgePower.value=it(e,"sunEdgePower"),h.needsUpdate=!0}}createSun(e){let t=new Oc(16777215,.9);t.position.set(100,80,50),t.castShadow=!0,t.shadow.mapSize.width=4096,t.shadow.mapSize.height=4096;let i=200;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.camera.near=1,t.shadow.camera.far=500,t.shadow.bias=-5e-4,t.shadow.normalBias=.05,t.shadow.radius=1.5,t.shadow.blurSamples=8;let r=new Ks(7,64,64),o=new xt({uniforms:{u_innerColor:{value:new Me(1,.35,0)},u_outerColor:{value:new Me(1,.99,.88)},u_edgePower:{value:2.5}},vertexShader:qM,fragmentShader:XM,transparent:!0,depthWrite:!1}),s=new Tt(r,o);return s.position.copy(t.position),s.castShadow=!1,s.receiveShadow=!1,s.layers.enable(_y),t.name=_h,s.name=Ty,e.getScene().add(t),e.getScene().add(s),{light:t,mesh:s}}};var bh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-lighting-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"lightbulb"),ae())},dependencies:[on,rn],encapsulation:2})};var rF=[{key:"sunSize",label:"Sun Size",type:"slider",value:7,min:0,max:20,step:.1,section:"Sun",tooltip:"Size of the sun."},{key:"sunAngle",label:"Sun Angle",type:"slider",value:50,min:0,max:360,step:1,section:"Sun",tooltip:"Angle of the sun."},{key:"sunDistance",label:"Sun Distance",type:"slider",value:100,min:0,max:1e3,step:1,section:"Sun",tooltip:"Distance of the sun."},{key:"sunLightColor",label:"Sun Light Color",type:"color",value:"#ffffdc",section:"Sun",tooltip:"Color of the sunlight."},{key:"sunOuterColor",label:"Sun Outer Color",type:"color",value:"#ffbc05",section:"Sun",tooltip:"Outer color of the sun."},{key:"sunInnerColor",label:"Sun Inner Color",type:"color",value:"#ff8800",section:"Sun",tooltip:"Inner color of the sun."},{key:"sunEdgePower",label:"Sun Edge Power",type:"slider",value:1,min:0,max:10,step:.01,section:"Sun",tooltip:"Edge power of the sun."}],YM={provide:no,useValue:{key:"lighting",factory:new xh,params:rF,icon:bh},multi:!0};var JM=Math.sqrt(3),QM=Math.sqrt(5),oF=.5*(JM-1),Jc=(3-JM)/6,hK=1/3,pK=1/6,mK=(QM-1)/4,gK=(5-QM)/20,ZM=n=>Math.floor(n)|0,KM=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function eS(n=Math.random){let e=sF(n),t=new Float64Array(e).map(r=>KM[r%12*2]),i=new Float64Array(e).map(r=>KM[r%12*2+1]);return function(o,s){let a=0,c=0,l=0,u=(o+s)*oF,d=ZM(o+u),f=ZM(s+u),h=(d+f)*Jc,g=d-h,y=f-h,m=o-g,p=s-y,w,S;m>p?(w=1,S=0):(w=0,S=1);let b=m-w+Jc,R=p-S+Jc,A=m-1+2*Jc,C=p-1+2*Jc,L=d&255,E=f&255,x=.5-m*m-p*p;if(x>=0){let k=L+e[E],$=t[k],q=i[k];x*=x,a=x*x*($*m+q*p)}let D=.5-b*b-R*R;if(D>=0){let k=L+w+e[E+S],$=t[k],q=i[k];D*=D,c=D*D*($*b+q*R)}let H=.5-A*A-C*C;if(H>=0){let k=L+1+e[E+1],$=t[k],q=i[k];H*=H,l=H*H*($*A+q*C)}return 70*(a+c+l)}}function sF(n){let t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){let r=i+~~(n()*(256-i)),o=t[i];t[i]=t[r],t[r]=o}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var iS=xS(nS());var Eh="terrainMesh",Mh=class{getPipeline(e,t){return{steps:[{name:"Generate shape",run:()=>St(null,null,function*(){})},{name:"Generate elevation",run:()=>St(null,null,function*(){})},{name:"Generate biome",run:()=>St(null,null,function*(){})},{name:"Generate mesh",run:()=>St(this,null,function*(){this.generateTerrain(e,t)})}]}}reset(e){let t=e.getScene(),i=t.getObjectByName(Eh);i&&(t.remove(i),i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose())}isActive(e){return!!e.getScene().getObjectByName(Eh)}generateTerrain(e,t){let i=t.getScene(),r=this.generateWorldGrid(e);t.setWorldCells(r);let o=i.getObjectByName(Eh);o&&(i.remove(o),o.geometry.dispose(),Array.isArray(o.material)?o.material.forEach(a=>a.dispose()):o.material.dispose());let s=this.generateTerrainMesh(e,r);s.name=Eh,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}generateWorldGrid(e){function t(f,h,g){let y=0,m=.5,p=0,w=1;for(let S=0;S<4;S++)y+=m*f(h*w,g*w),p+=m,w*=2,m*=.5;return y/p}let i=it(e,"radius"),r=it(e,"resolution"),o=i/r,s=o*2+1,a=.3,c=.2,l=it(e,"seed"),u=eS((0,iS.default)(l));return Array.from({length:s*s},(f,h)=>{let g=h%s-o,y=Math.floor(h/s)-o,m=-g-y,p=g/o,w=y/o,S=t(u,p*1,w*1)*.5+.5;S=S*(1-c)+.5*c;let b=(Math.abs(g/o)+Math.abs(y/o)+Math.abs(m/o))/1.8;return{height:(S*.5+.5)*20,biome:S-(1-a)*b*b<0?"water":"land"}})}generateTerrainMesh(e,t){let i=new ei,r=new Nc({vertexColors:!0,side:ni,shadowSide:ni}),o=it(e,"resolution"),s=it(e,"radius")/o,a=[],c=[],l=[],u={water:new Me(30654),land:new Me(2263842)},d=Math.sqrt(3)*o,f=2*o,h=[{dir:[1,0],currentEdge:[5,0],neighborEdge:[2,3]},{dir:[1,-1],currentEdge:[4,5],neighborEdge:[1,2]},{dir:[0,-1],currentEdge:[3,4],neighborEdge:[0,1]},{dir:[-1,0],currentEdge:[2,3],neighborEdge:[5,0]},{dir:[-1,1],currentEdge:[1,2],neighborEdge:[4,5]},{dir:[0,1],currentEdge:[0,1],neighborEdge:[3,4]}];for(let m=-s;m<=s;m++)for(let p=-s;p<=s;p++){let w=-m-p;if((Math.abs(m)+Math.abs(p)+Math.abs(w))/2>s)continue;let b=m+s,R=p+s,A=t[b*(s*2+1)+R],C=d*(m+p/2),L=f*3/4*p,E=A.height||0,x=u[A.biome]||new Me(8947848),D=a.length/3;a.push(C,E,L),l.push(x.r,x.g,x.b);for(let H=0;H<6;H++){let k=H*Math.PI/3+Math.PI/6,$=C+o*Math.cos(k),q=L+o*Math.sin(k);a.push($,E,q),l.push(x.r,x.g,x.b);let j=D+1+H,Z=H===5?D+1:j+1;c.push(D,j,Z)}for(let H=0;H<3;H++){let{dir:k,currentEdge:$,neighborEdge:q}=h[H],[j,Z]=k,V=m+j,ne=p+Z;if(Math.abs(V)>s||Math.abs(ne)>s||Math.abs(-V-ne)>s)continue;let de=V+s,Te=ne+s,ht=t[de*(s*2+1)+Te].height||0;if(Math.abs(E-ht)>.01){let G=D+1+$[0],te=D+1+$[1],_e=g(V,ne,s),ce=_e+1+q[0],xe=_e+1+q[1];E>ht?(c.push(G,xe,ce),c.push(G,ce,te)):(c.push(G,xe,te),c.push(te,xe,ce))}}}function g(m,p,w){let S=0;for(let b=-w;b<=w;b++)for(let R=-w;R<=w;R++){let A=-b-R;if(!((Math.abs(b)+Math.abs(R)+Math.abs(A))/2>w)){if(b===m&&R===p)return S*7;S++}}return-1}return i.setAttribute("position",new Zt(a,3)),i.setAttribute("color",new Zt(l,3)),i.setIndex(c),i.computeVertexNormals(),new Tt(i,r)}};var Sh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rt({type:n,selectors:[["app-terrain-icon"]],hostAttrs:[2,"display","contents"],decls:2,vars:0,template:function(t,i){t&1&&(ie(0,"mat-icon"),He(1,"landscape"),ae())},dependencies:[on,rn],encapsulation:2})};var aF=[{key:"seed",label:"Seed",type:"number",value:12345,min:0,max:99999,step:1,section:"General",tooltip:"Random seed for terrain."},{key:"radius",label:"Radius",type:"slider",value:16,min:1,max:256,step:1,section:"General",tooltip:"Radius of the terrain."},{key:"resolution",label:"Resolution",type:"slider",value:1,min:1,max:10,step:1,section:"General",tooltip:"Resolution of the terrain."}],rS={provide:no,useValue:{key:"terrain",factory:new Mh,params:aF,icon:Sh},multi:!0};qg(gh,{providers:[$M,YM,rS]}).catch(n=>console.error(n));
