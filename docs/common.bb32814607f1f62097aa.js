(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/RhQ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("yNUO"),o=n("TYT/"),i=function(){function t(){}return t.prototype.transform=function(t){return r(t)},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Pb({name:"parseDate",type:t,pure:!0}),t}()},"0gkb":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("mrSG"),o=n("fB3y"),i=n("TYT/"),u=n("cUzu"),c=function(t){function e(e){var n=t.call(this,e,"paper-sizes")||this;return n.http=e,n}return Object(r.b)(e,t),e.\u0275fac=function(t){return new(t||e)(i.ec(u.b))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(o.a)},SWMs:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("mrSG"),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.b)(e,t),Object.defineProperty(e.prototype,"type_label",{get:function(){return 1==this.type?"Print":"Scan"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"is_printing",{get:function(){return 1==this.type},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"is_scanning",{get:function(){return 2==this.type},enumerable:!0,configurable:!0}),e}(n("gSfl").a)},chSY:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("mrSG"),o=n("fB3y"),i=n("TYT/"),u=n("cUzu"),c=function(t){function e(e){var n=t.call(this,e,"service-rates")||this;return n.http=e,n}return Object(r.b)(e,t),e.\u0275fac=function(t){return new(t||e)(i.ec(u.b))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(o.a)},fB3y:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("AytR"),o=n("67Y/"),i=function(){function t(t,e,n){void 0===n&&(n=null),this.httpClient=t,this.resource=e,this.host=n,this.meta={},this.host||(this.host=r.a.endpoint)}return t.prototype.getResourceURI=function(){return this.host+"/"+this.resource},Object.defineProperty(t.prototype,"uri",{get:function(){return this.getResourceURI()},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this.httpClient.get(this.host+"/"+t)},t.prototype.queryRaw=function(t){return this.httpClient.get(this.host+"/"+this.resource,t)},t.prototype.create=function(t){return this.httpClient.post(this.host+"/"+this.resource,t)},t.prototype.update=function(t){return this.httpClient.put(this.host+"/"+this.resource+"/"+t.id,t)},t.prototype.save=function(t){return t instanceof FormData&&"undefined"==t.get("id").toString()||!(t instanceof FormData)&&!t.id?this.create(t):this.update(t)},t.prototype.read=function(t,e){return void 0===e&&(e={}),this.httpClient.get(this.host+"/"+this.resource+"/"+t,e)},t.prototype.query=function(t){var e=this;return void 0===t&&(t={}),this.httpClient.get(this.host+"/"+this.resource,t).pipe(Object(o.a)((function(t){return e.convertData(t)})))},t.prototype.delete=function(t){return this.httpClient.delete(this.host+"/"+this.resource+"/"+t)},t.prototype.convertData=function(t){for(var e in t)t.hasOwnProperty(e)&&"data"!=e&&(this.meta[e]=t[e]);return t.data},t.prototype.getMeta=function(){return this.meta},t}()},l5Kb:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("TYT/"),o=function(){function t(){this.data={}}return t.prototype.set=function(t,e){this.data[t]=e},t.prototype.get=function(t){var e;return null!=(e=this.data[t])?e:null},t.prototype.unset=function(t){delete this.data[t]},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()},o9IV:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("mrSG"),o=n("fB3y"),i=n("TYT/"),u=n("cUzu"),c=function(t){function e(e){var n=t.call(this,e,"print-qualities")||this;return n.http=e,n}return Object(r.b)(e,t),e.\u0275fac=function(t){return new(t||e)(i.ec(u.b))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(o.a)}}]);