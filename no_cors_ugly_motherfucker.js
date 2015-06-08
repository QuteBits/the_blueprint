//listen up kids! This fucker has everything from jQuery to Leap Motion js libraries to generating fucked up stylesheets in the code

//Use:

//0 buy Leap Motion

//1 install Chrome Developer Edition
//2 install Chrome Extension: Allow-Control-Allow-Origin: *
//3 install Chrome Extension: Custom JavaScript for websites

//you will also need a flag --allow-file-access-from-files for File Storage API

//4 define the target <video> element
var search_for = '.video-stream';

//number 2 is needed to erase all security checks in the browser
//number 3 is needed to inject this fucker into any page like YouTube which feeds the video through <video> element

//enjoy swiping the shit out of Leap Motion during playback










/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!                                                              
 * LeapJS v0.6.3                                                  
 * http://github.com/leapmotion/leapjs/                                        
 *                                                                             
 * Copyright 2013 LeapMotion, Inc. and other contributors                      
 * Released under the Apache-2.0 license                                     
 * http://github.com/leapmotion/leapjs/blob/master/LICENSE.txt                 
 */
;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var Pointable = require('./pointable'),
  glMatrix = require("gl-matrix")
  , vec3 = glMatrix.vec3
  , mat3 = glMatrix.mat3
  , mat4 = glMatrix.mat4
  , _ = require('underscore');


var Bone = module.exports = function(finger, data) {
  this.finger = finger;

  this._center = null, this._matrix = null;

  /**
  * An integer code for the name of this bone.
  *
  * * 0 -- metacarpal
  * * 1 -- proximal
  * * 2 -- medial
  * * 3 -- distal
  * * 4 -- arm
  *
  * @member type
  * @type {number}
  * @memberof Leap.Bone.prototype
  */
  this.type = data.type;

  /**
   * The position of the previous, or base joint of the bone closer to the wrist.
   * @type {vector3}
   */
  this.prevJoint = data.prevJoint;

  /**
   * The position of the next joint, or the end of the bone closer to the finger tip.
   * @type {vector3}
   */
  this.nextJoint = data.nextJoint;

  /**
   * The estimated width of the tool in millimeters.
   *
   * The reported width is the average width of the visible portion of the
   * tool from the hand to the tip. If the width isn't known,
   * then a value of 0 is returned.
   *
   * Pointable objects representing fingers do not have a width property.
   *
   * @member width
   * @type {number}
   * @memberof Leap.Pointable.prototype
   */
  this.width = data.width;

  var displacement = new Array(3);
  vec3.sub(displacement, data.nextJoint, data.prevJoint);

  this.length = vec3.length(displacement);


  /**
   *
   * These fully-specify the orientation of the bone.
   * See examples/threejs-bones.html for more info
   * Three vec3s:
   *  x (red): The rotation axis of the finger, pointing outwards.  (In general, away from the thumb )
   *  y (green): The "up" vector, orienting the top of the finger
   *  z (blue): The roll axis of the bone.
   *
   *  Most up vectors will be pointing the same direction, except for the thumb, which is more rightwards.
   *
   *  The thumb has one fewer bones than the fingers, but there are the same number of joints & joint-bases provided
   *  the first two appear in the same position, but only the second (proximal) rotates.
   *
   *  Normalized.
   */
  this.basis = data.basis;
};

Bone.prototype.left = function(){

  if (this._left) return this._left;

  this._left =  mat3.determinant(this.basis[0].concat(this.basis[1]).concat(this.basis[2])) < 0;

  return this._left;

};


/**
 * The Affine transformation matrix describing the orientation of the bone, in global Leap-space.
 * It contains a 3x3 rotation matrix (in the "top left"), and center coordinates in the fourth column.
 *
 * Unlike the basis, the right and left hands have the same coordinate system.
 *
 */
Bone.prototype.matrix = function(){

  if (this._matrix) return this._matrix;

  var b = this.basis,
      t = this._matrix = mat4.create();

  // open transform mat4 from rotation mat3
  t[0] = b[0][0], t[1] = b[0][1], t[2]  = b[0][2];
  t[4] = b[1][0], t[5] = b[1][1], t[6]  = b[1][2];
  t[8] = b[2][0], t[9] = b[2][1], t[10] = b[2][2];

  t[3] = this.center()[0];
  t[7] = this.center()[1];
  t[11] = this.center()[2];

  if ( this.left() ) {
    // flip the basis to be right-handed
    t[0] *= -1;
    t[1] *= -1;
    t[2] *= -1;
  }

  return this._matrix;
};

/**
 * Helper method to linearly interpolate between the two ends of the bone.
 *
 * when t = 0, the position of prevJoint will be returned
 * when t = 1, the position of nextJoint will be returned
 */
Bone.prototype.lerp = function(out, t){

  vec3.lerp(out, this.prevJoint, this.nextJoint, t);

};

/**
 *
 * The center position of the bone
 * Returns a vec3 array.
 *
 */
Bone.prototype.center = function(){

  if (this._center) return this._center;

  var center = vec3.create();
  this.lerp(center, 0.5);
  this._center = center;
  return center;

};

// The negative of the z-basis
Bone.prototype.direction = function(){

 return [
   this.basis[2][0] * -1,
   this.basis[2][1] * -1,
   this.basis[2][2] * -1
 ];

};

},{"./pointable":14,"gl-matrix":23,"underscore":24}],2:[function(require,module,exports){
var CircularBuffer = module.exports = function(size) {
  this.pos = 0;
  this._buf = [];
  this.size = size;
}

CircularBuffer.prototype.get = function(i) {
  if (i == undefined) i = 0;
  if (i >= this.size) return undefined;
  if (i >= this._buf.length) return undefined;
  return this._buf[(this.pos - i - 1) % this.size];
}

CircularBuffer.prototype.push = function(o) {
  this._buf[this.pos % this.size] = o;
  return this.pos++;
}

},{}],3:[function(require,module,exports){
var chooseProtocol = require('../protocol').chooseProtocol
  , EventEmitter = require('events').EventEmitter
  , _ = require('underscore');

var BaseConnection = module.exports = function(opts) {
  this.opts = _.defaults(opts || {}, {
    host : '127.0.0.1',
    enableGestures: false,
    scheme: this.getScheme(),
    port: this.getPort(),
    background: false,
    optimizeHMD: false,
    requestProtocolVersion: BaseConnection.defaultProtocolVersion
  });
  this.host = this.opts.host;
  this.port = this.opts.port;
  this.scheme = this.opts.scheme;
  this.protocolVersionVerified = false;
  this.background = null;
  this.optimizeHMD = null;
  this.on('ready', function() {
    this.enableGestures(this.opts.enableGestures);
    this.setBackground(this.opts.background);
    this.setOptimizeHMD(this.opts.optimizeHMD);

    if (this.opts.optimizeHMD){
      console.log("Optimized for head mounted display usage.");
    }else {
      console.log("Optimized for desktop usage.");
    }

  });
};

// The latest available:
BaseConnection.defaultProtocolVersion = 6;

BaseConnection.prototype.getUrl = function() {
  return this.scheme + "//" + this.host + ":" + this.port + "/v" + this.opts.requestProtocolVersion + ".json";
}


BaseConnection.prototype.getScheme = function(){
  return 'ws:'
}

BaseConnection.prototype.getPort = function(){
  return 6437
}


BaseConnection.prototype.setBackground = function(state) {
  this.opts.background = state;
  if (this.protocol && this.protocol.sendBackground && this.background !== this.opts.background) {
    this.background = this.opts.background;
    this.protocol.sendBackground(this, this.opts.background);
  }
}

BaseConnection.prototype.setOptimizeHMD = function(state) {
  this.opts.optimizeHMD = state;
  if (this.protocol && this.protocol.sendOptimizeHMD && this.optimizeHMD !== this.opts.optimizeHMD) {
    this.optimizeHMD = this.opts.optimizeHMD;
    this.protocol.sendOptimizeHMD(this, this.opts.optimizeHMD);
  }
}

BaseConnection.prototype.handleOpen = function() {
  if (!this.connected) {
    this.connected = true;
    this.emit('connect');
  }
}

BaseConnection.prototype.enableGestures = function(enabled) {
  this.gesturesEnabled = enabled ? true : false;
  this.send(this.protocol.encode({"enableGestures": this.gesturesEnabled}));
}

BaseConnection.prototype.handleClose = function(code, reason) {
  if (!this.connected) return;
  this.disconnect();

  // 1001 - an active connection is closed
  // 1006 - cannot connect
  if (code === 1001 && this.opts.requestProtocolVersion > 1) {
    if (this.protocolVersionVerified) {
      this.protocolVersionVerified = false;
    }else{
      this.opts.requestProtocolVersion--;
    }
  }
  this.startReconnection();
}

BaseConnection.prototype.startReconnection = function() {
  var connection = this;
  if(!this.reconnectionTimer){
    (this.reconnectionTimer = setInterval(function() { connection.reconnect() }, 500));
  }
}

BaseConnection.prototype.stopReconnection = function() {
  this.reconnectionTimer = clearInterval(this.reconnectionTimer);
}

// By default, disconnect will prevent auto-reconnection.
// Pass in true to allow the reconnection loop not be interrupted continue
BaseConnection.prototype.disconnect = function(allowReconnect) {
  if (!allowReconnect) this.stopReconnection();
  if (!this.socket) return;
  this.socket.close();
  delete this.socket;
  delete this.protocol;
  delete this.background; // This is not persisted when reconnecting to the web socket server
  delete this.optimizeHMD;
  delete this.focusedState;
  if (this.connected) {
    this.connected = false;
    this.emit('disconnect');
  }
  return true;
}

BaseConnection.prototype.reconnect = function() {
  if (this.connected) {
    this.stopReconnection();
  } else {
    this.disconnect(true);
    this.connect();
  }
}

BaseConnection.prototype.handleData = function(data) {
  var message = JSON.parse(data);

  var messageEvent;
  if (this.protocol === undefined) {
    messageEvent = this.protocol = chooseProtocol(message);
    this.protocolVersionVerified = true;
    this.emit('ready');
  } else {
    messageEvent = this.protocol(message);
  }
  this.emit(messageEvent.type, messageEvent);
}

BaseConnection.prototype.connect = function() {
  if (this.socket) return;
  this.socket = this.setupSocket();
  return true;
}

BaseConnection.prototype.send = function(data) {
  this.socket.send(data);
}

BaseConnection.prototype.reportFocus = function(state) {
  if (!this.connected || this.focusedState === state) return;
  this.focusedState = state;
  this.emit(this.focusedState ? 'focus' : 'blur');
  if (this.protocol && this.protocol.sendFocused) {
    this.protocol.sendFocused(this, this.focusedState);
  }
}

_.extend(BaseConnection.prototype, EventEmitter.prototype);
},{"../protocol":15,"events":21,"underscore":24}],4:[function(require,module,exports){
var BaseConnection = module.exports = require('./base')
  , _ = require('underscore');


var BrowserConnection = module.exports = function(opts) {
  BaseConnection.call(this, opts);
  var connection = this;
  this.on('ready', function() { connection.startFocusLoop(); })
  this.on('disconnect', function() { connection.stopFocusLoop(); })
}

_.extend(BrowserConnection.prototype, BaseConnection.prototype);

BrowserConnection.__proto__ = BaseConnection;

BrowserConnection.prototype.useSecure = function(){
  return location.protocol === 'https:'
}

BrowserConnection.prototype.getScheme = function(){
  return this.useSecure() ? 'wss:' : 'ws:'
}

BrowserConnection.prototype.getPort = function(){
  return this.useSecure() ? 6436 : 6437
}

BrowserConnection.prototype.setupSocket = function() {
  var connection = this;
  var socket = new WebSocket(this.getUrl());
  socket.onopen = function() { connection.handleOpen(); };
  socket.onclose = function(data) { connection.handleClose(data['code'], data['reason']); };
  socket.onmessage = function(message) { connection.handleData(message.data) };
  socket.onerror = function(error) {

    // attempt to degrade to ws: after one failed attempt for older Leap Service installations.
    if (connection.useSecure() && connection.scheme === 'wss:'){
      connection.scheme = 'ws:';
      connection.port = 6437;
      connection.disconnect();
      connection.connect();
    }

  };
  return socket;
}

BrowserConnection.prototype.startFocusLoop = function() {
  if (this.focusDetectorTimer) return;
  var connection = this;
  var propertyName = null;
  if (typeof document.hidden !== "undefined") {
    propertyName = "hidden";
  } else if (typeof document.mozHidden !== "undefined") {
    propertyName = "mozHidden";
  } else if (typeof document.msHidden !== "undefined") {
    propertyName = "msHidden";
  } else if (typeof document.webkitHidden !== "undefined") {
    propertyName = "webkitHidden";
  } else {
    propertyName = undefined;
  }

  if (connection.windowVisible === undefined) {
    connection.windowVisible = propertyName === undefined ? true : document[propertyName] === false;
  }

  var focusListener = window.addEventListener('focus', function(e) {
    connection.windowVisible = true;
    updateFocusState();
  });

  var blurListener = window.addEventListener('blur', function(e) {
    connection.windowVisible = false;
    updateFocusState();
  });

  this.on('disconnect', function() {
    window.removeEventListener('focus', focusListener);
    window.removeEventListener('blur', blurListener);
  });

  var updateFocusState = function() {
    var isVisible = propertyName === undefined ? true : document[propertyName] === false;
    connection.reportFocus(isVisible && connection.windowVisible);
  }

  // save 100ms when resuming focus
  updateFocusState();

  this.focusDetectorTimer = setInterval(updateFocusState, 100);
}

BrowserConnection.prototype.stopFocusLoop = function() {
  if (!this.focusDetectorTimer) return;
  clearTimeout(this.focusDetectorTimer);
  delete this.focusDetectorTimer;
}

},{"./base":3,"underscore":24}],5:[function(require,module,exports){
var process=require("__browserify_process");var Frame = require('./frame')
  , Hand = require('./hand')
  , Pointable = require('./pointable')
  , Finger = require('./finger')
  , CircularBuffer = require("./circular_buffer")
  , Pipeline = require("./pipeline")
  , EventEmitter = require('events').EventEmitter
  , gestureListener = require('./gesture').gestureListener
  , Dialog = require('./dialog')
  , _ = require('underscore');

/**
 * Constructs a Controller object.
 *
 * When creating a Controller object, you may optionally pass in options
 * to set the host , set the port, enable gestures, or select the frame event type.
 *
 * ```javascript
 * var controller = new Leap.Controller({
 *   host: '127.0.0.1',
 *   port: 6437,
 *   enableGestures: true,
 *   frameEventName: 'animationFrame'
 * });
 * ```
 *
 * @class Controller
 * @memberof Leap
 * @classdesc
 * The Controller class is your main interface to the Leap Motion Controller.
 *
 * Create an instance of this Controller class to access frames of tracking data
 * and configuration information. Frame data can be polled at any time using the
 * [Controller.frame]{@link Leap.Controller#frame}() function. Call frame() or frame(0) to get the most recent
 * frame. Set the history parameter to a positive integer to access previous frames.
 * A controller stores up to 60 frames in its frame history.
 *
 * Polling is an appropriate strategy for applications which already have an
 * intrinsic update loop, such as a game.
 */


var Controller = module.exports = function(opts) {
  var inNode = (typeof(process) !== 'undefined' && process.versions && process.versions.node),
    controller = this;

  opts = _.defaults(opts || {}, {
    inNode: inNode
  });

  this.inNode = opts.inNode;

  opts = _.defaults(opts || {}, {
    frameEventName: this.useAnimationLoop() ? 'animationFrame' : 'deviceFrame',
    suppressAnimationLoop: !this.useAnimationLoop(),
    loopWhileDisconnected: false,
    useAllPlugins: false,
    checkVersion: true
  });

  this.animationFrameRequested = false;
  this.onAnimationFrame = function() {
    controller.emit('animationFrame', controller.lastConnectionFrame);
    if (controller.loopWhileDisconnected && (controller.connection.focusedState || controller.connection.opts.background) ){
      window.requestAnimationFrame(controller.onAnimationFrame);
    }else{
      controller.animationFrameRequested = false;
    }
  }
  this.suppressAnimationLoop = opts.suppressAnimationLoop;
  this.loopWhileDisconnected = opts.loopWhileDisconnected;
  this.frameEventName = opts.frameEventName;
  this.useAllPlugins = opts.useAllPlugins;
  this.history = new CircularBuffer(200);
  this.lastFrame = Frame.Invalid;
  this.lastValidFrame = Frame.Invalid;
  this.lastConnectionFrame = Frame.Invalid;
  this.accumulatedGestures = [];
  this.checkVersion = opts.checkVersion;
  if (opts.connectionType === undefined) {
    this.connectionType = (this.inBrowser() ? require('./connection/browser') : require('./connection/node'));
  } else {
    this.connectionType = opts.connectionType;
  }
  this.connection = new this.connectionType(opts);
  this.streamingCount = 0;
  this.devices = {};
  this.plugins = {};
  this._pluginPipelineSteps = {};
  this._pluginExtendedMethods = {};
  if (opts.useAllPlugins) this.useRegisteredPlugins();
  this.setupFrameEvents(opts);
  this.setupConnectionEvents();
}

Controller.prototype.gesture = function(type, cb) {
  var creator = gestureListener(this, type);
  if (cb !== undefined) {
    creator.stop(cb);
  }
  return creator;
}

/*
 * @returns the controller
 */
Controller.prototype.setBackground = function(state) {
  this.connection.setBackground(state);
  return this;
}

Controller.prototype.setOptimizeHMD = function(state) {
  this.connection.setOptimizeHMD(state);
  return this;
}

Controller.prototype.inBrowser = function() {
  return !this.inNode;
}

Controller.prototype.useAnimationLoop = function() {
  return this.inBrowser() && !this.inBackgroundPage();
}

Controller.prototype.inBackgroundPage = function(){
  // http://developer.chrome.com/extensions/extension#method-getBackgroundPage
  return (typeof(chrome) !== "undefined") &&
    chrome.extension &&
    chrome.extension.getBackgroundPage &&
    (chrome.extension.getBackgroundPage() === window)
}

/*
 * @returns the controller
 */
Controller.prototype.connect = function() {
  this.connection.connect();
  return this;
}

Controller.prototype.streaming = function() {
  return this.streamingCount > 0;
}

Controller.prototype.connected = function() {
  return !!this.connection.connected;
}

Controller.prototype.runAnimationLoop = function(){
  if (!this.suppressAnimationLoop && !this.animationFrameRequested) {
    this.animationFrameRequested = true;
    window.requestAnimationFrame(this.onAnimationFrame);
  }
}

/*
 * @returns the controller
 */
Controller.prototype.disconnect = function() {
  this.connection.disconnect();
  return this;
}

/**
 * Returns a frame of tracking data from the Leap.
 *
 * Use the optional history parameter to specify which frame to retrieve.
 * Call frame() or frame(0) to access the most recent frame; call frame(1) to
 * access the previous frame, and so on. If you use a history value greater
 * than the number of stored frames, then the controller returns an invalid frame.
 *
 * @method frame
 * @memberof Leap.Controller.prototype
 * @param {number} history The age of the frame to return, counting backwards from
 * the most recent frame (0) into the past and up to the maximum age (59).
 * @returns {Leap.Frame} The specified frame; or, if no history
 * parameter is specified, the newest frame. If a frame is not available at
 * the specified history position, an invalid Frame is returned.
 **/
Controller.prototype.frame = function(num) {
  return this.history.get(num) || Frame.Invalid;
}

Controller.prototype.loop = function(callback) {
  if (callback) {
    if (typeof callback === 'function'){
      this.on(this.frameEventName, callback);
    }else{
      // callback is actually of the form: {eventName: callback}
      this.setupFrameEvents(callback);
    }
  }

  return this.connect();
}

Controller.prototype.addStep = function(step) {
  if (!this.pipeline) this.pipeline = new Pipeline(this);
  this.pipeline.addStep(step);
}

// this is run on every deviceFrame
Controller.prototype.processFrame = function(frame) {
  if (frame.gestures) {
    this.accumulatedGestures = this.accumulatedGestures.concat(frame.gestures);
  }
  // lastConnectionFrame is used by the animation loop
  this.lastConnectionFrame = frame;
  this.runAnimationLoop();
  this.emit('deviceFrame', frame);
}

// on a this.deviceEventName (usually 'animationFrame' in browsers), this emits a 'frame'
Controller.prototype.processFinishedFrame = function(frame) {
  this.lastFrame = frame;
  if (frame.valid) {
    this.lastValidFrame = frame;
  }
  frame.controller = this;
  frame.historyIdx = this.history.push(frame);
  if (frame.gestures) {
    frame.gestures = this.accumulatedGestures;
    this.accumulatedGestures = [];
    for (var gestureIdx = 0; gestureIdx != frame.gestures.length; gestureIdx++) {
      this.emit("gesture", frame.gestures[gestureIdx], frame);
    }
  }
  if (this.pipeline) {
    frame = this.pipeline.run(frame);
    if (!frame) frame = Frame.Invalid;
  }
  this.emit('frame', frame);
  this.emitHandEvents(frame);
}

/**
 * The controller will emit 'hand' events for every hand on each frame.  The hand in question will be passed
 * to the event callback.
 *
 * @param frame
 */
Controller.prototype.emitHandEvents = function(frame){
  for (var i = 0; i < frame.hands.length; i++){
    this.emit('hand', frame.hands[i]);
  }
}

Controller.prototype.setupFrameEvents = function(opts){
  if (opts.frame){
    this.on('frame', opts.frame);
  }
  if (opts.hand){
    this.on('hand', opts.hand);
  }
}

/**
  Controller events.  The old 'deviceConnected' and 'deviceDisconnected' have been depricated -
  use 'deviceStreaming' and 'deviceStopped' instead, except in the case of an unexpected disconnect.

  There are 4 pairs of device events recently added/changed:
  -deviceAttached/deviceRemoved - called when a device's physical connection to the computer changes
  -deviceStreaming/deviceStopped - called when a device is paused or resumed.
  -streamingStarted/streamingStopped - called when there is/is no longer at least 1 streaming device.
                    Always comes after deviceStreaming.
  
  The first of all of the above event pairs is triggered as appropriate upon connection.  All of
  these events receives an argument with the most recent info about the device that triggered it.
  These events will always be fired in the order they are listed here, with reverse ordering for the
  matching shutdown call. (ie, deviceStreaming always comes after deviceAttached, and deviceStopped 
  will come before deviceRemoved).
  
  -deviceConnected/deviceDisconnected - These are considered deprecated and will be removed in
  the next revision.  In contrast to the other events and in keeping with it's original behavior,
  it will only be fired when a device begins streaming AFTER a connection has been established.
  It is not paired, and receives no device info.  Nearly identical functionality to
  streamingStarted/Stopped if you need to port.
*/
Controller.prototype.setupConnectionEvents = function() {
  var controller = this;
  this.connection.on('frame', function(frame) {
    controller.processFrame(frame);
  });
  // either deviceFrame or animationFrame:
  this.on(this.frameEventName, function(frame) {
    controller.processFinishedFrame(frame);
  });


  // here we backfill the 0.5.0 deviceEvents as best possible
  // backfill begin streaming events
  var backfillStreamingStartedEventsHandler = function(){
    if (controller.connection.opts.requestProtocolVersion < 5 && controller.streamingCount == 0){
      controller.streamingCount = 1;
      var info = {
        attached: true,
        streaming: true,
        type: 'unknown',
        id: "Lx00000000000"
      };
      controller.devices[info.id] = info;

      controller.emit('deviceAttached', info);
      controller.emit('deviceStreaming', info);
      controller.emit('streamingStarted', info);
      controller.connection.removeListener('frame', backfillStreamingStartedEventsHandler)
    }
  }

  var backfillStreamingStoppedEvents = function(){
    if (controller.streamingCount > 0) {
      for (var deviceId in controller.devices){
        controller.emit('deviceStopped', controller.devices[deviceId]);
        controller.emit('deviceRemoved', controller.devices[deviceId]);
      }
      // only emit streamingStopped once, with the last device
      controller.emit('streamingStopped', controller.devices[deviceId]);

      controller.streamingCount = 0;

      for (var deviceId in controller.devices){
        delete controller.devices[deviceId];
      }
    }
  }
  // Delegate connection events
  this.connection.on('focus', function() { controller.emit('focus'); });
  this.connection.on('blur', function() { controller.emit('blur') });
  this.connection.on('protocol', function(protocol) {

    protocol.on('beforeFrameCreated', function(frameData){
      controller.emit('beforeFrameCreated', frameData)
    });

    protocol.on('afterFrameCreated', function(frame, frameData){
      controller.emit('afterFrameCreated', frame, frameData)
    });

    controller.emit('protocol', protocol); 
  });

  this.connection.on('ready', function() {

    if (controller.checkVersion && !controller.inNode){
      // show dialog only to web users
      controller.checkOutOfDate();
    }

    controller.emit('ready');
  });

  this.connection.on('connect', function() {
    controller.emit('connect');
    controller.connection.removeListener('frame', backfillStreamingStartedEventsHandler)
    controller.connection.on('frame', backfillStreamingStartedEventsHandler);
  });

  this.connection.on('disconnect', function() {
    controller.emit('disconnect');
    backfillStreamingStoppedEvents();
  });

  // this does not fire when the controller is manually disconnected
  // or for Leap Service v1.2.0+
  this.connection.on('deviceConnect', function(evt) {
    if (evt.state){
      controller.emit('deviceConnected');
      controller.connection.removeListener('frame', backfillStreamingStartedEventsHandler)
      controller.connection.on('frame', backfillStreamingStartedEventsHandler);
    }else{
      controller.emit('deviceDisconnected');
      backfillStreamingStoppedEvents();
    }
  });

  // Does not fire for Leap Service pre v1.2.0
  this.connection.on('deviceEvent', function(evt) {
    var info = evt.state,
        oldInfo = controller.devices[info.id];

    //Grab a list of changed properties in the device info
    var changed = {};
    for(var property in info) {
      //If a property i doesn't exist the cache, or has changed...
      if( !oldInfo || !oldInfo.hasOwnProperty(property) || oldInfo[property] != info[property] ) {
        changed[property] = true;
      }
    }

    //Update the device list
    controller.devices[info.id] = info;

    //Fire events based on change list
    if(changed.attached) {
      controller.emit(info.attached ? 'deviceAttached' : 'deviceRemoved', info);
    }

    if(!changed.streaming) return;

    if(info.streaming) {
      controller.streamingCount++;
      controller.emit('deviceStreaming', info);
      if( controller.streamingCount == 1 ) {
        controller.emit('streamingStarted', info);
      }
      //if attached & streaming both change to true at the same time, that device was streaming
      //already when we connected.
      if(!changed.attached) {
        controller.emit('deviceConnected');
      }
    }
    //Since when devices are attached all fields have changed, don't send events for streaming being false.
    else if(!(changed.attached && info.attached)) {
      controller.streamingCount--;
      controller.emit('deviceStopped', info);
      if(controller.streamingCount == 0){
        controller.emit('streamingStopped', info);
      }
      controller.emit('deviceDisconnected');
    }

  });


  this.on('newListener', function(event, listener) {
    if( event == 'deviceConnected' || event == 'deviceDisconnected' ) {
      console.warn(event + " events are depricated.  Consider using 'streamingStarted/streamingStopped' or 'deviceStreaming/deviceStopped' instead");
    }
  });

};




// Checks if the protocol version is the latest, if if not, shows the dialog.
Controller.prototype.checkOutOfDate = function(){
  console.assert(this.connection && this.connection.protocol);

  var serviceVersion = this.connection.protocol.serviceVersion;
  var protocolVersion = this.connection.protocol.version;
  var defaultProtocolVersion = this.connectionType.defaultProtocolVersion;

  if (defaultProtocolVersion > protocolVersion){

    console.warn("Your Protocol Version is v" + protocolVersion +
        ", this app was designed for v" + defaultProtocolVersion);

    Dialog.warnOutOfDate({
      sV: serviceVersion,
      pV: protocolVersion
    });
    return true
  }else{
    return false
  }

};



Controller._pluginFactories = {};

/*
 * Registers a plugin, making is accessible to controller.use later on.
 *
 * @member plugin
 * @memberof Leap.Controller.prototype
 * @param {String} name The name of the plugin (usually camelCase).
 * @param {function} factory A factory method which will return an instance of a plugin.
 * The factory receives an optional hash of options, passed in via controller.use.
 *
 * Valid keys for the object include frame, hand, finger, tool, and pointable.  The value
 * of each key can be either a function or an object.  If given a function, that function
 * will be called once for every instance of the object, with that instance injected as an
 * argument.  This allows decoration of objects with additional data:
 *
 * ```javascript
 * Leap.Controller.plugin('testPlugin', function(options){
 *   return {
 *     frame: function(frame){
 *       frame.foo = 'bar';
 *     }
 *   }
 * });
 * ```
 *
 * When hand is used, the callback is called for every hand in `frame.hands`.  Note that
 * hand objects are recreated with every new frame, so that data saved on the hand will not
 * persist.
 *
 * ```javascript
 * Leap.Controller.plugin('testPlugin', function(){
 *   return {
 *     hand: function(hand){
 *       console.log('testPlugin running on hand ' + hand.id);
 *     }
 *   }
 * });
 * ```
 *
 * A factory can return an object to add custom functionality to Frames, Hands, or Pointables.
 * The methods are added directly to the object's prototype.  Finger and Tool cannot be used here, Pointable
 * must be used instead.
 * This is encouraged for calculations which may not be necessary on every frame.
 * Memoization is also encouraged, for cases where the method may be called many times per frame by the application.
 *
 * ```javascript
 * // This plugin allows hand.usefulData() to be called later.
 * Leap.Controller.plugin('testPlugin', function(){
 *   return {
 *     hand: {
 *       usefulData: function(){
 *         console.log('usefulData on hand', this.id);
 *         // memoize the results on to the hand, preventing repeat work:
 *         this.x || this.x = someExpensiveCalculation();
 *         return this.x;
 *       }
 *     }
 *   }
 * });
 *
 * Note that the factory pattern allows encapsulation for every plugin instance.
 *
 * ```javascript
 * Leap.Controller.plugin('testPlugin', function(options){
 *   options || options = {}
 *   options.center || options.center = [0,0,0]
 *
 *   privatePrintingMethod = function(){
 *     console.log('privatePrintingMethod - options', options);
 *   }
 *
 *   return {
 *     pointable: {
 *       publicPrintingMethod: function(){
 *         privatePrintingMethod();
 *       }
 *     }
 *   }
 * });
 *
 */
Controller.plugin = function(pluginName, factory) {
  if (this._pluginFactories[pluginName]) {
    console.warn("Plugin \"" + pluginName + "\" already registered");
  }
  return this._pluginFactories[pluginName] = factory;
};

/*
 * Returns a list of registered plugins.
 * @returns {Array} Plugin Factories.
 */
Controller.plugins = function() {
  return _.keys(this._pluginFactories);
};



var setPluginCallbacks = function(pluginName, type, callback){
  
  if ( ['beforeFrameCreated', 'afterFrameCreated'].indexOf(type) != -1 ){
    
      // todo - not able to "unuse" a plugin currently
      this.on(type, callback);
      
    }else {
      
      if (!this.pipeline) this.pipeline = new Pipeline(this);
    
      if (!this._pluginPipelineSteps[pluginName]) this._pluginPipelineSteps[pluginName] = [];

      this._pluginPipelineSteps[pluginName].push(
        
        this.pipeline.addWrappedStep(type, callback)
        
      );
      
    }
  
};

var setPluginMethods = function(pluginName, type, hash){
  var klass;
  
  if (!this._pluginExtendedMethods[pluginName]) this._pluginExtendedMethods[pluginName] = [];

  switch (type) {
    case 'frame':
      klass = Frame
      break;
    case 'hand':
      klass = Hand
      break;
    case 'pointable':
      klass = Pointable;
      _.extend(Finger.prototype, hash);
      _.extend(Finger.Invalid,   hash);
      break;
    case 'finger':
      klass = Finger;
      break;
    default:
      throw pluginName + ' specifies invalid object type "' + type + '" for prototypical extension'
  }

  _.extend(klass.prototype, hash);
  _.extend(klass.Invalid, hash);
  this._pluginExtendedMethods[pluginName].push([klass, hash])
  
}



/*
 * Begin using a registered plugin.  The plugin's functionality will be added to all frames
 * returned by the controller (and/or added to the objects within the frame).
 *  - The order of plugin execution inside the loop will match the order in which use is called by the application.
 *  - The plugin be run for both deviceFrames and animationFrames.
 *
 *  If called a second time, the options will be merged with those of the already instantiated plugin.
 *
 * @method use
 * @memberOf Leap.Controller.prototype
 * @param pluginName
 * @param {Hash} Options to be passed to the plugin's factory.
 * @returns the controller
 */
Controller.prototype.use = function(pluginName, options) {
  var functionOrHash, pluginFactory, key, pluginInstance;

  pluginFactory = (typeof pluginName == 'function') ? pluginName : Controller._pluginFactories[pluginName];

  if (!pluginFactory) {
    throw 'Leap Plugin ' + pluginName + ' not found.';
  }

  options || (options = {});

  if (this.plugins[pluginName]){
    _.extend(this.plugins[pluginName], options)
    return this;
  }

  this.plugins[pluginName] = options;

  pluginInstance = pluginFactory.call(this, options);

  for (key in pluginInstance) {

    functionOrHash = pluginInstance[key];

    if (typeof functionOrHash === 'function') {
      
      setPluginCallbacks.call(this, pluginName, key, functionOrHash);
      
    } else {
      
      setPluginMethods.call(this, pluginName, key, functionOrHash);
      
    }

  }

  return this;
};




/*
 * Stop using a used plugin.  This will remove any of the plugin's pipeline methods (those called on every frame)
 * and remove any methods which extend frame-object prototypes.
 *
 * @method stopUsing
 * @memberOf Leap.Controller.prototype
 * @param pluginName
 * @returns the controller
 */
Controller.prototype.stopUsing = function (pluginName) {
  var steps = this._pluginPipelineSteps[pluginName],
      extMethodHashes = this._pluginExtendedMethods[pluginName],
      i = 0, klass, extMethodHash;

  if (!this.plugins[pluginName]) return;

  if (steps) {
    for (i = 0; i < steps.length; i++) {
      this.pipeline.removeStep(steps[i]);
    }
  }

  if (extMethodHashes){
    for (i = 0; i < extMethodHashes.length; i++){
      klass = extMethodHashes[i][0]
      extMethodHash = extMethodHashes[i][1]
      for (var methodName in extMethodHash) {
        delete klass.prototype[methodName]
        delete klass.Invalid[methodName]
      }
    }
  }

  delete this.plugins[pluginName]

  return this;
}

Controller.prototype.useRegisteredPlugins = function(){
  for (var plugin in Controller._pluginFactories){
    this.use(plugin);
  }
}


_.extend(Controller.prototype, EventEmitter.prototype);

},{"./circular_buffer":2,"./connection/browser":4,"./connection/node":20,"./dialog":6,"./finger":7,"./frame":8,"./gesture":9,"./hand":10,"./pipeline":13,"./pointable":14,"__browserify_process":22,"events":21,"underscore":24}],6:[function(require,module,exports){
var process=require("__browserify_process");var Dialog = module.exports = function(message, options){
  this.options = (options || {});
  this.message = message;

  this.createElement();
};

Dialog.prototype.createElement = function(){
  this.element = document.createElement('div');
  this.element.className = "leapjs-dialog";
  this.element.style.position = "fixed";
  this.element.style.top = '8px';
  this.element.style.left = 0;
  this.element.style.right = 0;
  this.element.style.textAlign = 'center';
  this.element.style.zIndex = 1000;

  var dialog  = document.createElement('div');
  this.element.appendChild(dialog);
  dialog.style.className = "leapjs-dialog";
  dialog.style.display = "inline-block";
  dialog.style.margin = "auto";
  dialog.style.padding = "8px";
  dialog.style.color = "#222";
  dialog.style.background = "#eee";
  dialog.style.borderRadius = "4px";
  dialog.style.border = "1px solid #999";
  dialog.style.textAlign = "left";
  dialog.style.cursor = "pointer";
  dialog.style.whiteSpace = "nowrap";
  dialog.style.transition = "box-shadow 1s linear";
  dialog.innerHTML = this.message;


  if (this.options.onclick){
    dialog.addEventListener('click', this.options.onclick);
  }

  if (this.options.onmouseover){
    dialog.addEventListener('mouseover', this.options.onmouseover);
  }

  if (this.options.onmouseout){
    dialog.addEventListener('mouseout', this.options.onmouseout);
  }

  if (this.options.onmousemove){
    dialog.addEventListener('mousemove', this.options.onmousemove);
  }
};

Dialog.prototype.show = function(){
  document.body.appendChild(this.element);
  return this;
};

Dialog.prototype.hide = function(){
  document.body.removeChild(this.element);
  return this;
};




// Shows a DOM dialog box with links to developer.leapmotion.com to upgrade
// This will work whether or not the Leap is plugged in,
// As long as it is called after a call to .connect() and the 'ready' event has fired.
Dialog.warnOutOfDate = function(params){
  params || (params = {});

  var url = "http://developer.leapmotion.com?";

  params.returnTo = window.location.href;

  for (var key in params){
    url += key + '=' + encodeURIComponent(params[key]) + '&';
  }

  var dialog,
    onclick = function(event){

       if (event.target.id != 'leapjs-decline-upgrade'){

         var popup = window.open(url,
           '_blank',
           'height=800,width=1000,location=1,menubar=1,resizable=1,status=1,toolbar=1,scrollbars=1'
         );

         if (window.focus) {popup.focus()}

       }

       dialog.hide();

       return true;
    },


    message = "This site requires Leap Motion Tracking V2." +
      "<button id='leapjs-accept-upgrade'  style='color: #444; transition: box-shadow 100ms linear; cursor: pointer; vertical-align: baseline; margin-left: 16px;'>Upgrade</button>" +
      "<button id='leapjs-decline-upgrade' style='color: #444; transition: box-shadow 100ms linear; cursor: pointer; vertical-align: baseline; margin-left: 8px; '>Not Now</button>";

  dialog = new Dialog(message, {
      onclick: onclick,
      onmousemove: function(e){
        if (e.target == document.getElementById('leapjs-decline-upgrade')){
          document.getElementById('leapjs-decline-upgrade').style.color = '#000';
          document.getElementById('leapjs-decline-upgrade').style.boxShadow = '0px 0px 2px #5daa00';

          document.getElementById('leapjs-accept-upgrade').style.color = '#444';
          document.getElementById('leapjs-accept-upgrade').style.boxShadow = 'none';
        }else{
          document.getElementById('leapjs-accept-upgrade').style.color = '#000';
          document.getElementById('leapjs-accept-upgrade').style.boxShadow = '0px 0px 2px #5daa00';

          document.getElementById('leapjs-decline-upgrade').style.color = '#444';
          document.getElementById('leapjs-decline-upgrade').style.boxShadow = 'none';
        }
      },
      onmouseout: function(){
        document.getElementById('leapjs-decline-upgrade').style.color = '#444';
        document.getElementById('leapjs-decline-upgrade').style.boxShadow = 'none';
        document.getElementById('leapjs-accept-upgrade').style.color = '#444';
        document.getElementById('leapjs-accept-upgrade').style.boxShadow = 'none';
      }
    }
  );

  return dialog.show();
};


// Tracks whether we've warned for lack of bones API.  This will be shown only for early private-beta members.
Dialog.hasWarnedBones = false;

Dialog.warnBones = function(){
  if (this.hasWarnedBones) return;
  this.hasWarnedBones = true;

  console.warn("Your Leap Service is out of date");

  if ( !(typeof(process) !== 'undefined' && process.versions && process.versions.node) ){
    this.warnOutOfDate({reason: 'bones'});
  }

}
},{"__browserify_process":22}],7:[function(require,module,exports){
var Pointable = require('./pointable'),
  Bone = require('./bone')
  , Dialog = require('./dialog')
  , _ = require('underscore');

/**
* Constructs a Finger object.
*
* An uninitialized finger is considered invalid.
* Get valid Finger objects from a Frame or a Hand object.
*
* @class Finger
* @memberof Leap
* @classdesc
* The Finger class reports the physical characteristics of a finger.
*
* Both fingers and tools are classified as Pointable objects. Use the
* Pointable.tool property to determine whether a Pointable object represents a
* tool or finger. The Leap classifies a detected entity as a tool when it is
* thinner, straighter, and longer than a typical finger.
*
* Note that Finger objects can be invalid, which means that they do not
* contain valid tracking data and do not correspond to a physical entity.
* Invalid Finger objects can be the result of asking for a Finger object
* using an ID from an earlier frame when no Finger objects with that ID
* exist in the current frame. A Finger object created from the Finger
* constructor is also invalid. Test for validity with the Pointable.valid
* property.
*/
var Finger = module.exports = function(data) {
  Pointable.call(this, data); // use pointable as super-constructor
  
  /**
  * The position of the distal interphalangeal joint of the finger.
  * This joint is closest to the tip.
  * 
  * The distal interphalangeal joint is located between the most extreme segment
  * of the finger (the distal phalanx) and the middle segment (the medial
  * phalanx).
  *
  * @member dipPosition
  * @type {number[]}
  * @memberof Leap.Finger.prototype
  */  
  this.dipPosition = data.dipPosition;

  /**
  * The position of the proximal interphalangeal joint of the finger. This joint is the middle
  * joint of a finger.
  *
  * The proximal interphalangeal joint is located between the two finger segments
  * closest to the hand (the proximal and the medial phalanges). On a thumb,
  * which lacks an medial phalanx, this joint index identifies the knuckle joint
  * between the proximal phalanx and the metacarpal bone.
  *
  * @member pipPosition
  * @type {number[]}
  * @memberof Leap.Finger.prototype
  */  
  this.pipPosition = data.pipPosition;

  /**
  * The position of the metacarpopophalangeal joint, or knuckle, of the finger.
  *
  * The metacarpopophalangeal joint is located at the base of a finger between
  * the metacarpal bone and the first phalanx. The common name for this joint is
  * the knuckle.
  *
  * On a thumb, which has one less phalanx than a finger, this joint index
  * identifies the thumb joint near the base of the hand, between the carpal
  * and metacarpal bones.
  *
  * @member mcpPosition
  * @type {number[]}
  * @memberof Leap.Finger.prototype
  */  
  this.mcpPosition = data.mcpPosition;

  /**
   * The position of the Carpometacarpal joint
   *
   * This is at the distal end of the wrist, and has no common name.
   *
   */
  this.carpPosition = data.carpPosition;

  /**
  * Whether or not this finger is in an extended posture.
  *
  * A finger is considered extended if it is extended straight from the hand as if
  * pointing. A finger is not extended when it is bent down and curled towards the 
  * palm.
  * @member extended
  * @type {Boolean}
  * @memberof Leap.Finger.prototype
  */
  this.extended = data.extended;

  /**
  * An integer code for the name of this finger.
  * 
  * * 0 -- thumb
  * * 1 -- index finger
  * * 2 -- middle finger
  * * 3 -- ring finger
  * * 4 -- pinky
  *
  * @member type
  * @type {number}
  * @memberof Leap.Finger.prototype
  */
  this.type = data.type;

  this.finger = true;
  
  /**
  * The joint positions of this finger as an array in the order base to tip.
  *
  * @member positions
  * @type {array[]}
  * @memberof Leap.Finger.prototype
  */
  this.positions = [this.carpPosition, this.mcpPosition, this.pipPosition, this.dipPosition, this.tipPosition];

  if (data.bases){
    this.addBones(data);
  } else {
    Dialog.warnBones();
  }

};

_.extend(Finger.prototype, Pointable.prototype);


Finger.prototype.addBones = function(data){
  /**
  * Four bones per finger, from wrist outwards:
  * metacarpal, proximal, medial, and distal.
  *
  * See http://en.wikipedia.org/wiki/Interphalangeal_articulations_of_hand
  */
  this.metacarpal   = new Bone(this, {
    type: 0,
    width: this.width,
    prevJoint: this.carpPosition,
    nextJoint: this.mcpPosition,
    basis: data.bases[0]
  });

  this.proximal     = new Bone(this, {
    type: 1,
    width: this.width,
    prevJoint: this.mcpPosition,
    nextJoint: this.pipPosition,
    basis: data.bases[1]
  });

  this.medial = new Bone(this, {
    type: 2,
    width: this.width,
    prevJoint: this.pipPosition,
    nextJoint: this.dipPosition,
    basis: data.bases[2]
  });

  /**
   * Note that the `distal.nextJoint` position is slightly different from the `finger.tipPosition`.
   * The former is at the very end of the bone, where the latter is the center of a sphere positioned at
   * the tip of the finger.  The btipPosition "bone tip position" is a few mm closer to the wrist than
   * the tipPosition.
   * @type {Bone}
   */
  this.distal       = new Bone(this, {
    type: 3,
    width: this.width,
    prevJoint: this.dipPosition,
    nextJoint: data.btipPosition,
    basis: data.bases[3]
  });

  this.bones = [this.metacarpal, this.proximal, this.medial, this.distal];
};

Finger.prototype.toString = function() {
    return "Finger [ id:" + this.id + " " + this.length + "mmx | width:" + this.width + "mm | direction:" + this.direction + ' ]';
};

Finger.Invalid = { valid: false };

},{"./bone":1,"./dialog":6,"./pointable":14,"underscore":24}],8:[function(require,module,exports){
var Hand = require("./hand")
  , Pointable = require("./pointable")
  , createGesture = require("./gesture").createGesture
  , glMatrix = require("gl-matrix")
  , mat3 = glMatrix.mat3
  , vec3 = glMatrix.vec3
  , InteractionBox = require("./interaction_box")
  , Finger = require('./finger')
  , _ = require("underscore");

/**
 * Constructs a Frame object.
 *
 * Frame instances created with this constructor are invalid.
 * Get valid Frame objects by calling the
 * [Controller.frame]{@link Leap.Controller#frame}() function.
 *<C-D-Space>
 * @class Frame
 * @memberof Leap
 * @classdesc
 * The Frame class represents a set of hand and finger tracking data detected
 * in a single frame.
 *
 * The Leap detects hands, fingers and tools within the tracking area, reporting
 * their positions, orientations and motions in frames at the Leap frame rate.
 *
 * Access Frame objects using the [Controller.frame]{@link Leap.Controller#frame}() function.
 */
var Frame = module.exports = function(data) {
  /**
   * Reports whether this Frame instance is valid.
   *
   * A valid Frame is one generated by the Controller object that contains
   * tracking data for all detected entities. An invalid Frame contains no
   * actual tracking data, but you can call its functions without risk of a
   * undefined object exception. The invalid Frame mechanism makes it more
   * convenient to track individual data across the frame history. For example,
   * you can invoke:
   *
   * ```javascript
   * var finger = controller.frame(n).finger(fingerID);
   * ```
   *
   * for an arbitrary Frame history value, "n", without first checking whether
   * frame(n) returned a null object. (You should still check that the
   * returned Finger instance is valid.)
   *
   * @member valid
   * @memberof Leap.Frame.prototype
   * @type {Boolean}
   */
  this.valid = true;
  /**
   * A unique ID for this Frame. Consecutive frames processed by the Leap
   * have consecutive increasing values.
   * @member id
   * @memberof Leap.Frame.prototype
   * @type {String}
   */
  this.id = data.id;
  /**
   * The frame capture time in microseconds elapsed since the Leap started.
   * @member timestamp
   * @memberof Leap.Frame.prototype
   * @type {number}
   */
  this.timestamp = data.timestamp;
  /**
   * The list of Hand objects detected in this frame, given in arbitrary order.
   * The list can be empty if no hands are detected.
   *
   * @member hands[]
   * @memberof Leap.Frame.prototype
   * @type {Leap.Hand}
   */
  this.hands = [];
  this.handsMap = {};
  /**
   * The list of Pointable objects (fingers and tools) detected in this frame,
   * given in arbitrary order. The list can be empty if no fingers or tools are
   * detected.
   *
   * @member pointables[]
   * @memberof Leap.Frame.prototype
   * @type {Leap.Pointable}
   */
  this.pointables = [];
  /**
   * The list of Tool objects detected in this frame, given in arbitrary order.
   * The list can be empty if no tools are detected.
   *
   * @member tools[]
   * @memberof Leap.Frame.prototype
   * @type {Leap.Pointable}
   */
  this.tools = [];
  /**
   * The list of Finger objects detected in this frame, given in arbitrary order.
   * The list can be empty if no fingers are detected.
   * @member fingers[]
   * @memberof Leap.Frame.prototype
   * @type {Leap.Pointable}
   */
  this.fingers = [];

  /**
   * The InteractionBox associated with the current frame.
   *
   * @member interactionBox
   * @memberof Leap.Frame.prototype
   * @type {Leap.InteractionBox}
   */
  if (data.interactionBox) {
    this.interactionBox = new InteractionBox(data.interactionBox);
  }
  this.gestures = [];
  this.pointablesMap = {};
  this._translation = data.t;
  this._rotation = _.flatten(data.r);
  this._scaleFactor = data.s;
  this.data = data;
  this.type = 'frame'; // used by event emitting
  this.currentFrameRate = data.currentFrameRate;

  if (data.gestures) {
   /**
    * The list of Gesture objects detected in this frame, given in arbitrary order.
    * The list can be empty if no gestures are detected.
    *
    * Circle and swipe gestures are updated every frame. Tap gestures
    * only appear in the list for a single frame.
    * @member gestures[]
    * @memberof Leap.Frame.prototype
    * @type {Leap.Gesture}
    */
    for (var gestureIdx = 0, gestureCount = data.gestures.length; gestureIdx != gestureCount; gestureIdx++) {
      this.gestures.push(createGesture(data.gestures[gestureIdx]));
    }
  }
  this.postprocessData(data);
};

Frame.prototype.postprocessData = function(data){
  if (!data) {
    data = this.data;
  }

  for (var handIdx = 0, handCount = data.hands.length; handIdx != handCount; handIdx++) {
    var hand = new Hand(data.hands[handIdx]);
    hand.frame = this;
    this.hands.push(hand);
    this.handsMap[hand.id] = hand;
  }

  data.pointables = _.sortBy(data.pointables, function(pointable) { return pointable.id });

  for (var pointableIdx = 0, pointableCount = data.pointables.length; pointableIdx != pointableCount; pointableIdx++) {
    var pointableData = data.pointables[pointableIdx];
    var pointable = pointableData.dipPosition ? new Finger(pointableData) : new Pointable(pointableData);
    pointable.frame = this;
    this.addPointable(pointable);
  }
};

/**
 * Adds data from a pointable element into the pointablesMap; 
 * also adds the pointable to the frame.handsMap hand to which it belongs,
 * and to the hand's tools or hand's fingers map.
 * 
 * @param pointable {Object} a Pointable
 */
Frame.prototype.addPointable = function (pointable) {
  this.pointables.push(pointable);
  this.pointablesMap[pointable.id] = pointable;
  (pointable.tool ? this.tools : this.fingers).push(pointable);
  if (pointable.handId !== undefined && this.handsMap.hasOwnProperty(pointable.handId)) {
    var hand = this.handsMap[pointable.handId];
    hand.pointables.push(pointable);
    (pointable.tool ? hand.tools : hand.fingers).push(pointable);
    switch (pointable.type){
      case 0:
        hand.thumb = pointable;
        break;
      case 1:
        hand.indexFinger = pointable;
        break;
      case 2:
        hand.middleFinger = pointable;
        break;
      case 3:
        hand.ringFinger = pointable;
        break;
      case 4:
        hand.pinky = pointable;
        break;
    }
  }
};

/**
 * The tool with the specified ID in this frame.
 *
 * Use the Frame tool() function to retrieve a tool from
 * this frame using an ID value obtained from a previous frame.
 * This function always returns a Pointable object, but if no tool
 * with the specified ID is present, an invalid Pointable object is returned.
 *
 * Note that ID values persist across frames, but only until tracking of a
 * particular object is lost. If tracking of a tool is lost and subsequently
 * regained, the new Pointable object representing that tool may have a
 * different ID than that representing the tool in an earlier frame.
 *
 * @method tool
 * @memberof Leap.Frame.prototype
 * @param {String} id The ID value of a Tool object from a previous frame.
 * @returns {Leap.Pointable} The tool with the
 * matching ID if one exists in this frame; otherwise, an invalid Pointable object
 * is returned.
 */
Frame.prototype.tool = function(id) {
  var pointable = this.pointable(id);
  return pointable.tool ? pointable : Pointable.Invalid;
};

/**
 * The Pointable object with the specified ID in this frame.
 *
 * Use the Frame pointable() function to retrieve the Pointable object from
 * this frame using an ID value obtained from a previous frame.
 * This function always returns a Pointable object, but if no finger or tool
 * with the specified ID is present, an invalid Pointable object is returned.
 *
 * Note that ID values persist across frames, but only until tracking of a
 * particular object is lost. If tracking of a finger or tool is lost and subsequently
 * regained, the new Pointable object representing that finger or tool may have
 * a different ID than that representing the finger or tool in an earlier frame.
 *
 * @method pointable
 * @memberof Leap.Frame.prototype
 * @param {String} id The ID value of a Pointable object from a previous frame.
 * @returns {Leap.Pointable} The Pointable object with
 * the matching ID if one exists in this frame;
 * otherwise, an invalid Pointable object is returned.
 */
Frame.prototype.pointable = function(id) {
  return this.pointablesMap[id] || Pointable.Invalid;
};

/**
 * The finger with the specified ID in this frame.
 *
 * Use the Frame finger() function to retrieve the finger from
 * this frame using an ID value obtained from a previous frame.
 * This function always returns a Finger object, but if no finger
 * with the specified ID is present, an invalid Pointable object is returned.
 *
 * Note that ID values persist across frames, but only until tracking of a
 * particular object is lost. If tracking of a finger is lost and subsequently
 * regained, the new Pointable object representing that physical finger may have
 * a different ID than that representing the finger in an earlier frame.
 *
 * @method finger
 * @memberof Leap.Frame.prototype
 * @param {String} id The ID value of a finger from a previous frame.
 * @returns {Leap.Pointable} The finger with the
 * matching ID if one exists in this frame; otherwise, an invalid Pointable
 * object is returned.
 */
Frame.prototype.finger = function(id) {
  var pointable = this.pointable(id);
  return !pointable.tool ? pointable : Pointable.Invalid;
};

/**
 * The Hand object with the specified ID in this frame.
 *
 * Use the Frame hand() function to retrieve the Hand object from
 * this frame using an ID value obtained from a previous frame.
 * This function always returns a Hand object, but if no hand
 * with the specified ID is present, an invalid Hand object is returned.
 *
 * Note that ID values persist across frames, but only until tracking of a
 * particular object is lost. If tracking of a hand is lost and subsequently
 * regained, the new Hand object representing that physical hand may have
 * a different ID than that representing the physical hand in an earlier frame.
 *
 * @method hand
 * @memberof Leap.Frame.prototype
 * @param {String} id The ID value of a Hand object from a previous frame.
 * @returns {Leap.Hand} The Hand object with the matching
 * ID if one exists in this frame; otherwise, an invalid Hand object is returned.
 */
Frame.prototype.hand = function(id) {
  return this.handsMap[id] || Hand.Invalid;
};

/**
 * The angle of rotation around the rotation axis derived from the overall
 * rotational motion between the current frame and the specified frame.
 *
 * The returned angle is expressed in radians measured clockwise around
 * the rotation axis (using the right-hand rule) between the start and end frames.
 * The value is always between 0 and pi radians (0 and 180 degrees).
 *
 * The Leap derives frame rotation from the relative change in position and
 * orientation of all objects detected in the field of view.
 *
 * If either this frame or sinceFrame is an invalid Frame object, then the
 * angle of rotation is zero.
 *
 * @method rotationAngle
 * @memberof Leap.Frame.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @param {number[]} [axis] The axis to measure rotation around.
 * @returns {number} A positive value containing the heuristically determined
 * rotational change between the current frame and that specified in the sinceFrame parameter.
 */
Frame.prototype.rotationAngle = function(sinceFrame, axis) {
  if (!this.valid || !sinceFrame.valid) return 0.0;

  var rot = this.rotationMatrix(sinceFrame);
  var cs = (rot[0] + rot[4] + rot[8] - 1.0)*0.5;
  var angle = Math.acos(cs);
  angle = isNaN(angle) ? 0.0 : angle;

  if (axis !== undefined) {
    var rotAxis = this.rotationAxis(sinceFrame);
    angle *= vec3.dot(rotAxis, vec3.normalize(vec3.create(), axis));
  }

  return angle;
};

/**
 * The axis of rotation derived from the overall rotational motion between
 * the current frame and the specified frame.
 *
 * The returned direction vector is normalized.
 *
 * The Leap derives frame rotation from the relative change in position and
 * orientation of all objects detected in the field of view.
 *
 * If either this frame or sinceFrame is an invalid Frame object, or if no
 * rotation is detected between the two frames, a zero vector is returned.
 *
 * @method rotationAxis
 * @memberof Leap.Frame.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @returns {number[]} A normalized direction vector representing the axis of the heuristically determined
 * rotational change between the current frame and that specified in the sinceFrame parameter.
 */
Frame.prototype.rotationAxis = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return vec3.create();
  return vec3.normalize(vec3.create(), [
    this._rotation[7] - sinceFrame._rotation[5],
    this._rotation[2] - sinceFrame._rotation[6],
    this._rotation[3] - sinceFrame._rotation[1]
  ]);
}

/**
 * The transform matrix expressing the rotation derived from the overall
 * rotational motion between the current frame and the specified frame.
 *
 * The Leap derives frame rotation from the relative change in position and
 * orientation of all objects detected in the field of view.
 *
 * If either this frame or sinceFrame is an invalid Frame object, then
 * this method returns an identity matrix.
 *
 * @method rotationMatrix
 * @memberof Leap.Frame.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @returns {number[]} A transformation matrix containing the heuristically determined
 * rotational change between the current frame and that specified in the sinceFrame parameter.
 */
Frame.prototype.rotationMatrix = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return mat3.create();
  var transpose = mat3.transpose(mat3.create(), this._rotation)
  return mat3.multiply(mat3.create(), sinceFrame._rotation, transpose);
}

/**
 * The scale factor derived from the overall motion between the current frame and the specified frame.
 *
 * The scale factor is always positive. A value of 1.0 indicates no scaling took place.
 * Values between 0.0 and 1.0 indicate contraction and values greater than 1.0 indicate expansion.
 *
 * The Leap derives scaling from the relative inward or outward motion of all
 * objects detected in the field of view (independent of translation and rotation).
 *
 * If either this frame or sinceFrame is an invalid Frame object, then this method returns 1.0.
 *
 * @method scaleFactor
 * @memberof Leap.Frame.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative scaling.
 * @returns {number} A positive value representing the heuristically determined
 * scaling change ratio between the current frame and that specified in the sinceFrame parameter.
 */
Frame.prototype.scaleFactor = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return 1.0;
  return Math.exp(this._scaleFactor - sinceFrame._scaleFactor);
}

/**
 * The change of position derived from the overall linear motion between the
 * current frame and the specified frame.
 *
 * The returned translation vector provides the magnitude and direction of the
 * movement in millimeters.
 *
 * The Leap derives frame translation from the linear motion of all objects
 * detected in the field of view.
 *
 * If either this frame or sinceFrame is an invalid Frame object, then this
 * method returns a zero vector.
 *
 * @method translation
 * @memberof Leap.Frame.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative translation.
 * @returns {number[]} A vector representing the heuristically determined change in
 * position of all objects between the current frame and that specified in the sinceFrame parameter.
 */
Frame.prototype.translation = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return vec3.create();
  return vec3.subtract(vec3.create(), this._translation, sinceFrame._translation);
}

/**
 * A string containing a brief, human readable description of the Frame object.
 *
 * @method toString
 * @memberof Leap.Frame.prototype
 * @returns {String} A brief description of this frame.
 */
Frame.prototype.toString = function() {
  var str = "Frame [ id:"+this.id+" | timestamp:"+this.timestamp+" | Hand count:("+this.hands.length+") | Pointable count:("+this.pointables.length+")";
  if (this.gestures) str += " | Gesture count:("+this.gestures.length+")";
  str += " ]";
  return str;
}

/**
 * Returns a JSON-formatted string containing the hands, pointables and gestures
 * in this frame.
 *
 * @method dump
 * @memberof Leap.Frame.prototype
 * @returns {String} A JSON-formatted string.
 */
Frame.prototype.dump = function() {
  var out = '';
  out += "Frame Info:<br/>";
  out += this.toString();
  out += "<br/><br/>Hands:<br/>"
  for (var handIdx = 0, handCount = this.hands.length; handIdx != handCount; handIdx++) {
    out += "  "+ this.hands[handIdx].toString() + "<br/>";
  }
  out += "<br/><br/>Pointables:<br/>";
  for (var pointableIdx = 0, pointableCount = this.pointables.length; pointableIdx != pointableCount; pointableIdx++) {
      out += "  "+ this.pointables[pointableIdx].toString() + "<br/>";
  }
  if (this.gestures) {
    out += "<br/><br/>Gestures:<br/>";
    for (var gestureIdx = 0, gestureCount = this.gestures.length; gestureIdx != gestureCount; gestureIdx++) {
        out += "  "+ this.gestures[gestureIdx].toString() + "<br/>";
    }
  }
  out += "<br/><br/>Raw JSON:<br/>";
  out += JSON.stringify(this.data);
  return out;
}

/**
 * An invalid Frame object.
 *
 * You can use this invalid Frame in comparisons testing
 * whether a given Frame instance is valid or invalid. (You can also check the
 * [Frame.valid]{@link Leap.Frame#valid} property.)
 *
 * @static
 * @type {Leap.Frame}
 * @name Invalid
 * @memberof Leap.Frame
 */
Frame.Invalid = {
  valid: false,
  hands: [],
  fingers: [],
  tools: [],
  gestures: [],
  pointables: [],
  pointable: function() { return Pointable.Invalid },
  finger: function() { return Pointable.Invalid },
  hand: function() { return Hand.Invalid },
  toString: function() { return "invalid frame" },
  dump: function() { return this.toString() },
  rotationAngle: function() { return 0.0; },
  rotationMatrix: function() { return mat3.create(); },
  rotationAxis: function() { return vec3.create(); },
  scaleFactor: function() { return 1.0; },
  translation: function() { return vec3.create(); }
};

},{"./finger":7,"./gesture":9,"./hand":10,"./interaction_box":12,"./pointable":14,"gl-matrix":23,"underscore":24}],9:[function(require,module,exports){
var glMatrix = require("gl-matrix")
  , vec3 = glMatrix.vec3
  , EventEmitter = require('events').EventEmitter
  , _ = require('underscore');

/**
 * Constructs a new Gesture object.
 *
 * An uninitialized Gesture object is considered invalid. Get valid instances
 * of the Gesture class, which will be one of the Gesture subclasses, from a
 * Frame object.
 *
 * @class Gesture
 * @abstract
 * @memberof Leap
 * @classdesc
 * The Gesture class represents a recognized movement by the user.
 *
 * The Leap watches the activity within its field of view for certain movement
 * patterns typical of a user gesture or command. For example, a movement from side to
 * side with the hand can indicate a swipe gesture, while a finger poking forward
 * can indicate a screen tap gesture.
 *
 * When the Leap recognizes a gesture, it assigns an ID and adds a
 * Gesture object to the frame gesture list. For continuous gestures, which
 * occur over many frames, the Leap updates the gesture by adding
 * a Gesture object having the same ID and updated properties in each
 * subsequent frame.
 *
 * **Important:** Recognition for each type of gesture must be enabled;
 * otherwise **no gestures are recognized or reported**.
 *
 * Subclasses of Gesture define the properties for the specific movement patterns
 * recognized by the Leap.
 *
 * The Gesture subclasses for include:
 *
 * * CircleGesture -- A circular movement by a finger.
 * * SwipeGesture -- A straight line movement by the hand with fingers extended.
 * * ScreenTapGesture -- A forward tapping movement by a finger.
 * * KeyTapGesture -- A downward tapping movement by a finger.
 *
 * Circle and swipe gestures are continuous and these objects can have a
 * state of start, update, and stop.
 *
 * The screen tap gesture is a discrete gesture. The Leap only creates a single
 * ScreenTapGesture object appears for each tap and it always has a stop state.
 *
 * Get valid Gesture instances from a Frame object. You can get a list of gestures
 * from the Frame gestures array. You can also use the Frame gesture() method
 * to find a gesture in the current frame using an ID value obtained in a
 * previous frame.
 *
 * Gesture objects can be invalid. For example, when you get a gesture by ID
 * using Frame.gesture(), and there is no gesture with that ID in the current
 * frame, then gesture() returns an Invalid Gesture object (rather than a null
 * value). Always check object validity in situations where a gesture might be
 * invalid.
 */
var createGesture = exports.createGesture = function(data) {
  var gesture;
  switch (data.type) {
    case 'circle':
      gesture = new CircleGesture(data);
      break;
    case 'swipe':
      gesture = new SwipeGesture(data);
      break;
    case 'screenTap':
      gesture = new ScreenTapGesture(data);
      break;
    case 'keyTap':
      gesture = new KeyTapGesture(data);
      break;
    default:
      throw "unknown gesture type";
  }

 /**
  * The gesture ID.
  *
  * All Gesture objects belonging to the same recognized movement share the
  * same ID value. Use the ID value with the Frame::gesture() method to
  * find updates related to this Gesture object in subsequent frames.
  *
  * @member id
  * @memberof Leap.Gesture.prototype
  * @type {number}
  */
  gesture.id = data.id;
 /**
  * The list of hands associated with this Gesture, if any.
  *
  * If no hands are related to this gesture, the list is empty.
  *
  * @member handIds
  * @memberof Leap.Gesture.prototype
  * @type {Array}
  */
  gesture.handIds = data.handIds.slice();
 /**
  * The list of fingers and tools associated with this Gesture, if any.
  *
  * If no Pointable objects are related to this gesture, the list is empty.
  *
  * @member pointableIds
  * @memberof Leap.Gesture.prototype
  * @type {Array}
  */
  gesture.pointableIds = data.pointableIds.slice();
 /**
  * The elapsed duration of the recognized movement up to the
  * frame containing this Gesture object, in microseconds.
  *
  * The duration reported for the first Gesture in the sequence (with the
  * start state) will typically be a small positive number since
  * the movement must progress far enough for the Leap to recognize it as
  * an intentional gesture.
  *
  * @member duration
  * @memberof Leap.Gesture.prototype
  * @type {number}
  */
  gesture.duration = data.duration;
 /**
  * The gesture ID.
  *
  * Recognized movements occur over time and have a beginning, a middle,
  * and an end. The 'state()' attribute reports where in that sequence this
  * Gesture object falls.
  *
  * Possible values for the state field are:
  *
  * * start
  * * update
  * * stop
  *
  * @member state
  * @memberof Leap.Gesture.prototype
  * @type {String}
  */
  gesture.state = data.state;
 /**
  * The gesture type.
  *
  * Possible values for the type field are:
  *
  * * circle
  * * swipe
  * * screenTap
  * * keyTap
  *
  * @member type
  * @memberof Leap.Gesture.prototype
  * @type {String}
  */
  gesture.type = data.type;
  return gesture;
}

/*
 * Returns a builder object, which uses method chaining for gesture callback binding.
 */
var gestureListener = exports.gestureListener = function(controller, type) {
  var handlers = {};
  var gestureMap = {};

  controller.on('gesture', function(gesture, frame) {
    if (gesture.type == type) {
      if (gesture.state == "start" || gesture.state == "stop") {
        if (gestureMap[gesture.id] === undefined) {
          var gestureTracker = new Gesture(gesture, frame);
          gestureMap[gesture.id] = gestureTracker;
          _.each(handlers, function(cb, name) {
            gestureTracker.on(name, cb);
          });
        }
      }
      gestureMap[gesture.id].update(gesture, frame);
      if (gesture.state == "stop") {
        delete gestureMap[gesture.id];
      }
    }
  });
  var builder = {
    start: function(cb) {
      handlers['start'] = cb;
      return builder;
    },
    stop: function(cb) {
      handlers['stop'] = cb;
      return builder;
    },
    complete: function(cb) {
      handlers['stop'] = cb;
      return builder;
    },
    update: function(cb) {
      handlers['update'] = cb;
      return builder;
    }
  }
  return builder;
}

var Gesture = exports.Gesture = function(gesture, frame) {
  this.gestures = [gesture];
  this.frames = [frame];
}

Gesture.prototype.update = function(gesture, frame) {
  this.lastGesture = gesture;
  this.lastFrame = frame;
  this.gestures.push(gesture);
  this.frames.push(frame);
  this.emit(gesture.state, this);
}

Gesture.prototype.translation = function() {
  return vec3.subtract(vec3.create(), this.lastGesture.startPosition, this.lastGesture.position);
}

_.extend(Gesture.prototype, EventEmitter.prototype);

/**
 * Constructs a new CircleGesture object.
 *
 * An uninitialized CircleGesture object is considered invalid. Get valid instances
 * of the CircleGesture class from a Frame object.
 *
 * @class CircleGesture
 * @memberof Leap
 * @augments Leap.Gesture
 * @classdesc
 * The CircleGesture classes represents a circular finger movement.
 *
 * A circle movement is recognized when the tip of a finger draws a circle
 * within the Leap field of view.
 *
 * ![CircleGesture](images/Leap_Gesture_Circle.png)
 *
 * Circle gestures are continuous. The CircleGesture objects for the gesture have
 * three possible states:
 *
 * * start -- The circle gesture has just started. The movement has
 *  progressed far enough for the recognizer to classify it as a circle.
 * * update -- The circle gesture is continuing.
 * * stop -- The circle gesture is finished.
 */
var CircleGesture = function(data) {
 /**
  * The center point of the circle within the Leap frame of reference.
  *
  * @member center
  * @memberof Leap.CircleGesture.prototype
  * @type {number[]}
  */
  this.center = data.center;
 /**
  * The normal vector for the circle being traced.
  *
  * If you draw the circle clockwise, the normal vector points in the same
  * general direction as the pointable object drawing the circle. If you draw
  * the circle counterclockwise, the normal points back toward the
  * pointable. If the angle between the normal and the pointable object
  * drawing the circle is less than 90 degrees, then the circle is clockwise.
  *
  * ```javascript
  *    var clockwiseness;
  *    if (circle.pointable.direction.angleTo(circle.normal) <= PI/4) {
  *        clockwiseness = "clockwise";
  *    }
  *    else
  *    {
  *        clockwiseness = "counterclockwise";
  *    }
  * ```
  *
  * @member normal
  * @memberof Leap.CircleGesture.prototype
  * @type {number[]}
  */
  this.normal = data.normal;
 /**
  * The number of times the finger tip has traversed the circle.
  *
  * Progress is reported as a positive number of the number. For example,
  * a progress value of .5 indicates that the finger has gone halfway
  * around, while a value of 3 indicates that the finger has gone around
  * the the circle three times.
  *
  * Progress starts where the circle gesture began. Since the circle
  * must be partially formed before the Leap can recognize it, progress
  * will be greater than zero when a circle gesture first appears in the
  * frame.
  *
  * @member progress
  * @memberof Leap.CircleGesture.prototype
  * @type {number}
  */
  this.progress = data.progress;
 /**
  * The radius of the circle in mm.
  *
  * @member radius
  * @memberof Leap.CircleGesture.prototype
  * @type {number}
  */
  this.radius = data.radius;
}

CircleGesture.prototype.toString = function() {
  return "CircleGesture ["+JSON.stringify(this)+"]";
}

/**
 * Constructs a new SwipeGesture object.
 *
 * An uninitialized SwipeGesture object is considered invalid. Get valid instances
 * of the SwipeGesture class from a Frame object.
 *
 * @class SwipeGesture
 * @memberof Leap
 * @augments Leap.Gesture
 * @classdesc
 * The SwipeGesture class represents a swiping motion of a finger or tool.
 *
 * ![SwipeGesture](images/Leap_Gesture_Swipe.png)
 *
 * Swipe gestures are continuous.
 */
var SwipeGesture = function(data) {
 /**
  * The starting position within the Leap frame of
  * reference, in mm.
  *
  * @member startPosition
  * @memberof Leap.SwipeGesture.prototype
  * @type {number[]}
  */
  this.startPosition = data.startPosition;
 /**
  * The current swipe position within the Leap frame of
  * reference, in mm.
  *
  * @member position
  * @memberof Leap.SwipeGesture.prototype
  * @type {number[]}
  */
  this.position = data.position;
 /**
  * The unit direction vector parallel to the swipe motion.
  *
  * You can compare the components of the vector to classify the swipe as
  * appropriate for your application. For example, if you are using swipes
  * for two dimensional scrolling, you can compare the x and y values to
  * determine if the swipe is primarily horizontal or vertical.
  *
  * @member direction
  * @memberof Leap.SwipeGesture.prototype
  * @type {number[]}
  */
  this.direction = data.direction;
 /**
  * The speed of the finger performing the swipe gesture in
  * millimeters per second.
  *
  * @member speed
  * @memberof Leap.SwipeGesture.prototype
  * @type {number}
  */
  this.speed = data.speed;
}

SwipeGesture.prototype.toString = function() {
  return "SwipeGesture ["+JSON.stringify(this)+"]";
}

/**
 * Constructs a new ScreenTapGesture object.
 *
 * An uninitialized ScreenTapGesture object is considered invalid. Get valid instances
 * of the ScreenTapGesture class from a Frame object.
 *
 * @class ScreenTapGesture
 * @memberof Leap
 * @augments Leap.Gesture
 * @classdesc
 * The ScreenTapGesture class represents a tapping gesture by a finger or tool.
 *
 * A screen tap gesture is recognized when the tip of a finger pokes forward
 * and then springs back to approximately the original postion, as if
 * tapping a vertical screen. The tapping finger must pause briefly before beginning the tap.
 *
 * ![ScreenTap](images/Leap_Gesture_Tap2.png)
 *
 * ScreenTap gestures are discrete. The ScreenTapGesture object representing a tap always
 * has the state, STATE_STOP. Only one ScreenTapGesture object is created for each
 * screen tap gesture recognized.
 */
var ScreenTapGesture = function(data) {
 /**
  * The position where the screen tap is registered.
  *
  * @member position
  * @memberof Leap.ScreenTapGesture.prototype
  * @type {number[]}
  */
  this.position = data.position;
 /**
  * The direction of finger tip motion.
  *
  * @member direction
  * @memberof Leap.ScreenTapGesture.prototype
  * @type {number[]}
  */
  this.direction = data.direction;
 /**
  * The progess value is always 1.0 for a screen tap gesture.
  *
  * @member progress
  * @memberof Leap.ScreenTapGesture.prototype
  * @type {number}
  */
  this.progress = data.progress;
}

ScreenTapGesture.prototype.toString = function() {
  return "ScreenTapGesture ["+JSON.stringify(this)+"]";
}

/**
 * Constructs a new KeyTapGesture object.
 *
 * An uninitialized KeyTapGesture object is considered invalid. Get valid instances
 * of the KeyTapGesture class from a Frame object.
 *
 * @class KeyTapGesture
 * @memberof Leap
 * @augments Leap.Gesture
 * @classdesc
 * The KeyTapGesture class represents a tapping gesture by a finger or tool.
 *
 * A key tap gesture is recognized when the tip of a finger rotates down toward the
 * palm and then springs back to approximately the original postion, as if
 * tapping. The tapping finger must pause briefly before beginning the tap.
 *
 * ![KeyTap](images/Leap_Gesture_Tap.png)
 *
 * Key tap gestures are discrete. The KeyTapGesture object representing a tap always
 * has the state, STATE_STOP. Only one KeyTapGesture object is created for each
 * key tap gesture recognized.
 */
var KeyTapGesture = function(data) {
    /**
     * The position where the key tap is registered.
     *
     * @member position
     * @memberof Leap.KeyTapGesture.prototype
     * @type {number[]}
     */
    this.position = data.position;
    /**
     * The direction of finger tip motion.
     *
     * @member direction
     * @memberof Leap.KeyTapGesture.prototype
     * @type {number[]}
     */
    this.direction = data.direction;
    /**
     * The progess value is always 1.0 for a key tap gesture.
     *
     * @member progress
     * @memberof Leap.KeyTapGesture.prototype
     * @type {number}
     */
    this.progress = data.progress;
}

KeyTapGesture.prototype.toString = function() {
  return "KeyTapGesture ["+JSON.stringify(this)+"]";
}

},{"events":21,"gl-matrix":23,"underscore":24}],10:[function(require,module,exports){
var Pointable = require("./pointable")
  , Bone = require('./bone')
  , glMatrix = require("gl-matrix")
  , mat3 = glMatrix.mat3
  , vec3 = glMatrix.vec3
  , _ = require("underscore");

/**
 * Constructs a Hand object.
 *
 * An uninitialized hand is considered invalid.
 * Get valid Hand objects from a Frame object.
 * @class Hand
 * @memberof Leap
 * @classdesc
 * The Hand class reports the physical characteristics of a detected hand.
 *
 * Hand tracking data includes a palm position and velocity; vectors for
 * the palm normal and direction to the fingers; properties of a sphere fit
 * to the hand; and lists of the attached fingers and tools.
 *
 * Note that Hand objects can be invalid, which means that they do not contain
 * valid tracking data and do not correspond to a physical entity. Invalid Hand
 * objects can be the result of asking for a Hand object using an ID from an
 * earlier frame when no Hand objects with that ID exist in the current frame.
 * A Hand object created from the Hand constructor is also invalid.
 * Test for validity with the [Hand.valid]{@link Leap.Hand#valid} property.
 */
var Hand = module.exports = function(data) {
  /**
   * A unique ID assigned to this Hand object, whose value remains the same
   * across consecutive frames while the tracked hand remains visible. If
   * tracking is lost (for example, when a hand is occluded by another hand
   * or when it is withdrawn from or reaches the edge of the Leap field of view),
   * the Leap may assign a new ID when it detects the hand in a future frame.
   *
   * Use the ID value with the {@link Frame.hand}() function to find this
   * Hand object in future frames.
   *
   * @member id
   * @memberof Leap.Hand.prototype
   * @type {String}
   */
  this.id = data.id;
  /**
   * The center position of the palm in millimeters from the Leap origin.
   * @member palmPosition
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
  this.palmPosition = data.palmPosition;
  /**
   * The direction from the palm position toward the fingers.
   *
   * The direction is expressed as a unit vector pointing in the same
   * direction as the directed line from the palm position to the fingers.
   *
   * @member direction
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
  this.direction = data.direction;
  /**
   * The rate of change of the palm position in millimeters/second.
   *
   * @member palmVeclocity
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
  this.palmVelocity = data.palmVelocity;
  /**
   * The normal vector to the palm. If your hand is flat, this vector will
   * point downward, or "out" of the front surface of your palm.
   *
   * ![Palm Vectors](images/Leap_Palm_Vectors.png)
   *
   * The direction is expressed as a unit vector pointing in the same
   * direction as the palm normal (that is, a vector orthogonal to the palm).
   * @member palmNormal
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
  this.palmNormal = data.palmNormal;
  /**
   * The center of a sphere fit to the curvature of this hand.
   *
   * This sphere is placed roughly as if the hand were holding a ball.
   *
   * ![Hand Ball](images/Leap_Hand_Ball.png)
   * @member sphereCenter
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
  this.sphereCenter = data.sphereCenter;
  /**
   * The radius of a sphere fit to the curvature of this hand, in millimeters.
   *
   * This sphere is placed roughly as if the hand were holding a ball. Thus the
   * size of the sphere decreases as the fingers are curled into a fist.
   *
   * @member sphereRadius
   * @memberof Leap.Hand.prototype
   * @type {number}
   */
  this.sphereRadius = data.sphereRadius;
  /**
   * Reports whether this is a valid Hand object.
   *
   * @member valid
   * @memberof Leap.Hand.prototype
   * @type {boolean}
   */
  this.valid = true;
  /**
   * The list of Pointable objects (fingers and tools) detected in this frame
   * that are associated with this hand, given in arbitrary order. The list
   * can be empty if no fingers or tools associated with this hand are detected.
   *
   * Use the {@link Pointable} tool property to determine
   * whether or not an item in the list represents a tool or finger.
   * You can also get only the tools using the Hand.tools[] list or
   * only the fingers using the Hand.fingers[] list.
   *
   * @member pointables[]
   * @memberof Leap.Hand.prototype
   * @type {Leap.Pointable[]}
   */
  this.pointables = [];
  /**
   * The list of fingers detected in this frame that are attached to
   * this hand, given in arbitrary order.
   *
   * The list can be empty if no fingers attached to this hand are detected.
   *
   * @member fingers[]
   * @memberof Leap.Hand.prototype
   * @type {Leap.Pointable[]}
   */
  this.fingers = [];
  
  if (data.armBasis){
    this.arm = new Bone(this, {
      type: 4,
      width: data.armWidth,
      prevJoint: data.elbow,
      nextJoint: data.wrist,
      basis: data.armBasis
    });
  }else{
    this.arm = null;
  }
  
  /**
   * The list of tools detected in this frame that are held by this
   * hand, given in arbitrary order.
   *
   * The list can be empty if no tools held by this hand are detected.
   *
   * @member tools[]
   * @memberof Leap.Hand.prototype
   * @type {Leap.Pointable[]}
   */
  this.tools = [];
  this._translation = data.t;
  this._rotation = _.flatten(data.r);
  this._scaleFactor = data.s;

  /**
   * Time the hand has been visible in seconds.
   *
   * @member timeVisible
   * @memberof Leap.Hand.prototype
   * @type {number}
   */
   this.timeVisible = data.timeVisible;

  /**
   * The palm position with stabalization
   * @member stabilizedPalmPosition
   * @memberof Leap.Hand.prototype
   * @type {number[]}
   */
   this.stabilizedPalmPosition = data.stabilizedPalmPosition;

   /**
   * Reports whether this is a left or a right hand.
   *
   * @member type
   * @type {String}
   * @memberof Leap.Hand.prototype
   */
   this.type = data.type;
   this.grabStrength = data.grabStrength;
   this.pinchStrength = data.pinchStrength;
   this.confidence = data.confidence;
}

/**
 * The finger with the specified ID attached to this hand.
 *
 * Use this function to retrieve a Pointable object representing a finger
 * attached to this hand using an ID value obtained from a previous frame.
 * This function always returns a Pointable object, but if no finger
 * with the specified ID is present, an invalid Pointable object is returned.
 *
 * Note that the ID values assigned to fingers persist across frames, but only
 * until tracking of a particular finger is lost. If tracking of a finger is
 * lost and subsequently regained, the new Finger object representing that
 * finger may have a different ID than that representing the finger in an
 * earlier frame.
 *
 * @method finger
 * @memberof Leap.Hand.prototype
 * @param {String} id The ID value of a finger from a previous frame.
 * @returns {Leap.Pointable} The Finger object with
 * the matching ID if one exists for this hand in this frame; otherwise, an
 * invalid Finger object is returned.
 */
Hand.prototype.finger = function(id) {
  var finger = this.frame.finger(id);
  return (finger && (finger.handId == this.id)) ? finger : Pointable.Invalid;
}

/**
 * The angle of rotation around the rotation axis derived from the change in
 * orientation of this hand, and any associated fingers and tools, between the
 * current frame and the specified frame.
 *
 * The returned angle is expressed in radians measured clockwise around the
 * rotation axis (using the right-hand rule) between the start and end frames.
 * The value is always between 0 and pi radians (0 and 180 degrees).
 *
 * If a corresponding Hand object is not found in sinceFrame, or if either
 * this frame or sinceFrame are invalid Frame objects, then the angle of rotation is zero.
 *
 * @method rotationAngle
 * @memberof Leap.Hand.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @param {numnber[]} [axis] The axis to measure rotation around.
 * @returns {number} A positive value representing the heuristically determined
 * rotational change of the hand between the current frame and that specified in
 * the sinceFrame parameter.
 */
Hand.prototype.rotationAngle = function(sinceFrame, axis) {
  if (!this.valid || !sinceFrame.valid) return 0.0;
  var sinceHand = sinceFrame.hand(this.id);
  if(!sinceHand.valid) return 0.0;
  var rot = this.rotationMatrix(sinceFrame);
  var cs = (rot[0] + rot[4] + rot[8] - 1.0)*0.5
  var angle = Math.acos(cs);
  angle = isNaN(angle) ? 0.0 : angle;
  if (axis !== undefined) {
    var rotAxis = this.rotationAxis(sinceFrame);
    angle *= vec3.dot(rotAxis, vec3.normalize(vec3.create(), axis));
  }
  return angle;
}

/**
 * The axis of rotation derived from the change in orientation of this hand, and
 * any associated fingers and tools, between the current frame and the specified frame.
 *
 * The returned direction vector is normalized.
 *
 * If a corresponding Hand object is not found in sinceFrame, or if either
 * this frame or sinceFrame are invalid Frame objects, then this method returns a zero vector.
 *
 * @method rotationAxis
 * @memberof Leap.Hand.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @returns {number[]} A normalized direction Vector representing the axis of the heuristically determined
 * rotational change of the hand between the current frame and that specified in the sinceFrame parameter.
 */
Hand.prototype.rotationAxis = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return vec3.create();
  var sinceHand = sinceFrame.hand(this.id);
  if (!sinceHand.valid) return vec3.create();
  return vec3.normalize(vec3.create(), [
    this._rotation[7] - sinceHand._rotation[5],
    this._rotation[2] - sinceHand._rotation[6],
    this._rotation[3] - sinceHand._rotation[1]
  ]);
}

/**
 * The transform matrix expressing the rotation derived from the change in
 * orientation of this hand, and any associated fingers and tools, between
 * the current frame and the specified frame.
 *
 * If a corresponding Hand object is not found in sinceFrame, or if either
 * this frame or sinceFrame are invalid Frame objects, then this method returns
 * an identity matrix.
 *
 * @method rotationMatrix
 * @memberof Leap.Hand.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative rotation.
 * @returns {number[]} A transformation Matrix containing the heuristically determined
 * rotational change of the hand between the current frame and that specified in the sinceFrame parameter.
 */
Hand.prototype.rotationMatrix = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return mat3.create();
  var sinceHand = sinceFrame.hand(this.id);
  if(!sinceHand.valid) return mat3.create();
  var transpose = mat3.transpose(mat3.create(), this._rotation);
  var m = mat3.multiply(mat3.create(), sinceHand._rotation, transpose);
  return m;
}

/**
 * The scale factor derived from the hand's motion between the current frame and the specified frame.
 *
 * The scale factor is always positive. A value of 1.0 indicates no scaling took place.
 * Values between 0.0 and 1.0 indicate contraction and values greater than 1.0 indicate expansion.
 *
 * The Leap derives scaling from the relative inward or outward motion of a hand
 * and its associated fingers and tools (independent of translation and rotation).
 *
 * If a corresponding Hand object is not found in sinceFrame, or if either this frame or sinceFrame
 * are invalid Frame objects, then this method returns 1.0.
 *
 * @method scaleFactor
 * @memberof Leap.Hand.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative scaling.
 * @returns {number} A positive value representing the heuristically determined
 * scaling change ratio of the hand between the current frame and that specified in the sinceFrame parameter.
 */
Hand.prototype.scaleFactor = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return 1.0;
  var sinceHand = sinceFrame.hand(this.id);
  if(!sinceHand.valid) return 1.0;

  return Math.exp(this._scaleFactor - sinceHand._scaleFactor);
}

/**
 * The change of position of this hand between the current frame and the specified frame
 *
 * The returned translation vector provides the magnitude and direction of the
 * movement in millimeters.
 *
 * If a corresponding Hand object is not found in sinceFrame, or if either this frame or
 * sinceFrame are invalid Frame objects, then this method returns a zero vector.
 *
 * @method translation
 * @memberof Leap.Hand.prototype
 * @param {Leap.Frame} sinceFrame The starting frame for computing the relative translation.
 * @returns {number[]} A Vector representing the heuristically determined change in hand
 * position between the current frame and that specified in the sinceFrame parameter.
 */
Hand.prototype.translation = function(sinceFrame) {
  if (!this.valid || !sinceFrame.valid) return vec3.create();
  var sinceHand = sinceFrame.hand(this.id);
  if(!sinceHand.valid) return vec3.create();
  return [
    this._translation[0] - sinceHand._translation[0],
    this._translation[1] - sinceHand._translation[1],
    this._translation[2] - sinceHand._translation[2]
  ];
}

/**
 * A string containing a brief, human readable description of the Hand object.
 * @method toString
 * @memberof Leap.Hand.prototype
 * @returns {String} A description of the Hand as a string.
 */
Hand.prototype.toString = function() {
  return "Hand (" + this.type + ") [ id: "+ this.id + " | palm velocity:"+this.palmVelocity+" | sphere center:"+this.sphereCenter+" ] ";
}

/**
 * The pitch angle in radians.
 *
 * Pitch is the angle between the negative z-axis and the projection of
 * the vector onto the y-z plane. In other words, pitch represents rotation
 * around the x-axis.
 * If the vector points upward, the returned angle is between 0 and pi radians
 * (180 degrees); if it points downward, the angle is between 0 and -pi radians.
 *
 * @method pitch
 * @memberof Leap.Hand.prototype
 * @returns {number} The angle of this vector above or below the horizon (x-z plane).
 *
 */
Hand.prototype.pitch = function() {
  return Math.atan2(this.direction[1], -this.direction[2]);
}

/**
 *  The yaw angle in radians.
 *
 * Yaw is the angle between the negative z-axis and the projection of
 * the vector onto the x-z plane. In other words, yaw represents rotation
 * around the y-axis. If the vector points to the right of the negative z-axis,
 * then the returned angle is between 0 and pi radians (180 degrees);
 * if it points to the left, the angle is between 0 and -pi radians.
 *
 * @method yaw
 * @memberof Leap.Hand.prototype
 * @returns {number} The angle of this vector to the right or left of the y-axis.
 *
 */
Hand.prototype.yaw = function() {
  return Math.atan2(this.direction[0], -this.direction[2]);
}

/**
 *  The roll angle in radians.
 *
 * Roll is the angle between the y-axis and the projection of
 * the vector onto the x-y plane. In other words, roll represents rotation
 * around the z-axis. If the vector points to the left of the y-axis,
 * then the returned angle is between 0 and pi radians (180 degrees);
 * if it points to the right, the angle is between 0 and -pi radians.
 *
 * @method roll
 * @memberof Leap.Hand.prototype
 * @returns {number} The angle of this vector to the right or left of the y-axis.
 *
 */
Hand.prototype.roll = function() {
  return Math.atan2(this.palmNormal[0], -this.palmNormal[1]);
}

/**
 * An invalid Hand object.
 *
 * You can use an invalid Hand object in comparisons testing
 * whether a given Hand instance is valid or invalid. (You can also use the
 * Hand valid property.)
 *
 * @static
 * @type {Leap.Hand}
 * @name Invalid
 * @memberof Leap.Hand
 */
Hand.Invalid = {
  valid: false,
  fingers: [],
  tools: [],
  pointables: [],
  left: false,
  pointable: function() { return Pointable.Invalid },
  finger: function() { return Pointable.Invalid },
  toString: function() { return "invalid frame" },
  dump: function() { return this.toString(); },
  rotationAngle: function() { return 0.0; },
  rotationMatrix: function() { return mat3.create(); },
  rotationAxis: function() { return vec3.create(); },
  scaleFactor: function() { return 1.0; },
  translation: function() { return vec3.create(); }
};

},{"./bone":1,"./pointable":14,"gl-matrix":23,"underscore":24}],11:[function(require,module,exports){
/**
 * Leap is the global namespace of the Leap API.
 * @namespace Leap
 */
module.exports = {
  Controller: require("./controller"),
  Frame: require("./frame"),
  Gesture: require("./gesture"),
  Hand: require("./hand"),
  Pointable: require("./pointable"),
  Finger: require("./finger"),
  InteractionBox: require("./interaction_box"),
  CircularBuffer: require("./circular_buffer"),
  UI: require("./ui"),
  JSONProtocol: require("./protocol").JSONProtocol,
  glMatrix: require("gl-matrix"),
  mat3: require("gl-matrix").mat3,
  vec3: require("gl-matrix").vec3,
  loopController: undefined,
  version: require('./version.js'),
  /**
   * The Leap.loop() function passes a frame of Leap data to your
   * callback function and then calls window.requestAnimationFrame() after
   * executing your callback function.
   *
   * Leap.loop() sets up the Leap controller and WebSocket connection for you.
   * You do not need to create your own controller when using this method.
   *
   * Your callback function is called on an interval determined by the client
   * browser. Typically, this is on an interval of 60 frames/second. The most
   * recent frame of Leap data is passed to your callback function. If the Leap
   * is producing frames at a slower rate than the browser frame rate, the same
   * frame of Leap data can be passed to your function in successive animation
   * updates.
   *
   * As an alternative, you can create your own Controller object and use a
   * {@link Controller#onFrame onFrame} callback to process the data at
   * the frame rate of the Leap device. See {@link Controller} for an
   * example.
   *
   * @method Leap.loop
   * @param {function} callback A function called when the browser is ready to
   * draw to the screen. The most recent {@link Frame} object is passed to
   * your callback function.
   *
   * ```javascript
   *    Leap.loop( function( frame ) {
   *        // ... your code here
   *    })
   * ```
   */
  loop: function(opts, callback) {
    if (opts && callback === undefined && (!opts.frame && !opts.hand)) {
      callback = opts;
      opts = {};
    }

    if (this.loopController) {
      if (opts){
        this.loopController.setupFrameEvents(opts);
      }
    }else{
      this.loopController = new this.Controller(opts);
    }

    this.loopController.loop(callback);
    return this.loopController;
  },

  /*
   * Convenience method for Leap.Controller.plugin
   */
  plugin: function(name, options){
    this.Controller.plugin(name, options)
  }
}

},{"./circular_buffer":2,"./controller":5,"./finger":7,"./frame":8,"./gesture":9,"./hand":10,"./interaction_box":12,"./pointable":14,"./protocol":15,"./ui":16,"./version.js":19,"gl-matrix":23}],12:[function(require,module,exports){
var glMatrix = require("gl-matrix")
  , vec3 = glMatrix.vec3;

/**
 * Constructs a InteractionBox object.
 *
 * @class InteractionBox
 * @memberof Leap
 * @classdesc
 * The InteractionBox class represents a box-shaped region completely within
 * the field of view of the Leap Motion controller.
 *
 * The interaction box is an axis-aligned rectangular prism and provides
 * normalized coordinates for hands, fingers, and tools within this box.
 * The InteractionBox class can make it easier to map positions in the
 * Leap Motion coordinate system to 2D or 3D coordinate systems used
 * for application drawing.
 *
 * ![Interaction Box](images/Leap_InteractionBox.png)
 *
 * The InteractionBox region is defined by a center and dimensions along the x, y, and z axes.
 */
var InteractionBox = module.exports = function(data) {
  /**
   * Indicates whether this is a valid InteractionBox object.
   *
   * @member valid
   * @type {Boolean}
   * @memberof Leap.InteractionBox.prototype
   */
  this.valid = true;
  /**
   * The center of the InteractionBox in device coordinates (millimeters).
   * This point is equidistant from all sides of the box.
   *
   * @member center
   * @type {number[]}
   * @memberof Leap.InteractionBox.prototype
   */
  this.center = data.center;

  this.size = data.size;
  /**
   * The width of the InteractionBox in millimeters, measured along the x-axis.
   *
   * @member width
   * @type {number}
   * @memberof Leap.InteractionBox.prototype
   */
  this.width = data.size[0];
  /**
   * The height of the InteractionBox in millimeters, measured along the y-axis.
   *
   * @member height
   * @type {number}
   * @memberof Leap.InteractionBox.prototype
   */
  this.height = data.size[1];
  /**
   * The depth of the InteractionBox in millimeters, measured along the z-axis.
   *
   * @member depth
   * @type {number}
   * @memberof Leap.InteractionBox.prototype
   */
  this.depth = data.size[2];
}

/**
 * Converts a position defined by normalized InteractionBox coordinates
 * into device coordinates in millimeters.
 *
 * This function performs the inverse of normalizePoint().
 *
 * @method denormalizePoint
 * @memberof Leap.InteractionBox.prototype
 * @param {number[]} normalizedPosition The input position in InteractionBox coordinates.
 * @returns {number[]} The corresponding denormalized position in device coordinates.
 */
InteractionBox.prototype.denormalizePoint = function(normalizedPosition) {
  return vec3.fromValues(
    (normalizedPosition[0] - 0.5) * this.size[0] + this.center[0],
    (normalizedPosition[1] - 0.5) * this.size[1] + this.center[1],
    (normalizedPosition[2] - 0.5) * this.size[2] + this.center[2]
  );
}

/**
 * Normalizes the coordinates of a point using the interaction box.
 *
 * Coordinates from the Leap Motion frame of reference (millimeters) are
 * converted to a range of [0..1] such that the minimum value of the
 * InteractionBox maps to 0 and the maximum value of the InteractionBox maps to 1.
 *
 * @method normalizePoint
 * @memberof Leap.InteractionBox.prototype
 * @param {number[]} position The input position in device coordinates.
 * @param {Boolean} clamp Whether or not to limit the output value to the range [0,1]
 * when the input position is outside the InteractionBox. Defaults to true.
 * @returns {number[]} The normalized position.
 */
InteractionBox.prototype.normalizePoint = function(position, clamp) {
  var vec = vec3.fromValues(
    ((position[0] - this.center[0]) / this.size[0]) + 0.5,
    ((position[1] - this.center[1]) / this.size[1]) + 0.5,
    ((position[2] - this.center[2]) / this.size[2]) + 0.5
  );

  if (clamp) {
    vec[0] = Math.min(Math.max(vec[0], 0), 1);
    vec[1] = Math.min(Math.max(vec[1], 0), 1);
    vec[2] = Math.min(Math.max(vec[2], 0), 1);
  }
  return vec;
}

/**
 * Writes a brief, human readable description of the InteractionBox object.
 *
 * @method toString
 * @memberof Leap.InteractionBox.prototype
 * @returns {String} A description of the InteractionBox object as a string.
 */
InteractionBox.prototype.toString = function() {
  return "InteractionBox [ width:" + this.width + " | height:" + this.height + " | depth:" + this.depth + " ]";
}

/**
 * An invalid InteractionBox object.
 *
 * You can use this InteractionBox instance in comparisons testing
 * whether a given InteractionBox instance is valid or invalid. (You can also use the
 * InteractionBox.valid property.)
 *
 * @static
 * @type {Leap.InteractionBox}
 * @name Invalid
 * @memberof Leap.InteractionBox
 */
InteractionBox.Invalid = { valid: false };

},{"gl-matrix":23}],13:[function(require,module,exports){
var Pipeline = module.exports = function (controller) {
  this.steps = [];
  this.controller = controller;
}

Pipeline.prototype.addStep = function (step) {
  this.steps.push(step);
}

Pipeline.prototype.run = function (frame) {
  var stepsLength = this.steps.length;
  for (var i = 0; i != stepsLength; i++) {
    if (!frame) break;
    frame = this.steps[i](frame);
  }
  return frame;
}

Pipeline.prototype.removeStep = function(step){
  var index = this.steps.indexOf(step);
  if (index === -1) throw "Step not found in pipeline";
  this.steps.splice(index, 1);
}

/*
 * Wraps a plugin callback method in method which can be run inside the pipeline.
 * This wrapper method loops the callback over objects within the frame as is appropriate,
 * calling the callback for each in turn.
 *
 * @method createStepFunction
 * @memberOf Leap.Controller.prototype
 * @param {Controller} The controller on which the callback is called.
 * @param {String} type What frame object the callback is run for and receives.
 *       Can be one of 'frame', 'finger', 'hand', 'pointable', 'tool'
 * @param {function} callback The method which will be run inside the pipeline loop.  Receives one argument, such as a hand.
 * @private
 */
Pipeline.prototype.addWrappedStep = function (type, callback) {
  var controller = this.controller,
    step = function (frame) {
      var dependencies, i, len;
      dependencies = (type == 'frame') ? [frame] : (frame[type + 's'] || []);

      for (i = 0, len = dependencies.length; i < len; i++) {
        callback.call(controller, dependencies[i]);
      }

      return frame;
    };

  this.addStep(step);
  return step;
};
},{}],14:[function(require,module,exports){
var glMatrix = require("gl-matrix")
  , vec3 = glMatrix.vec3;

/**
 * Constructs a Pointable object.
 *
 * An uninitialized pointable is considered invalid.
 * Get valid Pointable objects from a Frame or a Hand object.
 *
 * @class Pointable
 * @memberof Leap
 * @classdesc
 * The Pointable class reports the physical characteristics of a detected
 * finger or tool.
 *
 * Both fingers and tools are classified as Pointable objects. Use the
 * Pointable.tool property to determine whether a Pointable object represents a
 * tool or finger. The Leap classifies a detected entity as a tool when it is
 * thinner, straighter, and longer than a typical finger.
 *
 * Note that Pointable objects can be invalid, which means that they do not
 * contain valid tracking data and do not correspond to a physical entity.
 * Invalid Pointable objects can be the result of asking for a Pointable object
 * using an ID from an earlier frame when no Pointable objects with that ID
 * exist in the current frame. A Pointable object created from the Pointable
 * constructor is also invalid. Test for validity with the Pointable.valid
 * property.
 */
var Pointable = module.exports = function(data) {
  /**
   * Indicates whether this is a valid Pointable object.
   *
   * @member valid
   * @type {Boolean}
   * @memberof Leap.Pointable.prototype
   */
  this.valid = true;
  /**
   * A unique ID assigned to this Pointable object, whose value remains the
   * same across consecutive frames while the tracked finger or tool remains
   * visible. If tracking is lost (for example, when a finger is occluded by
   * another finger or when it is withdrawn from the Leap field of view), the
   * Leap may assign a new ID when it detects the entity in a future frame.
   *
   * Use the ID value with the pointable() functions defined for the
   * {@link Frame} and {@link Frame.Hand} classes to find this
   * Pointable object in future frames.
   *
   * @member id
   * @type {String}
   * @memberof Leap.Pointable.prototype
   */
  this.id = data.id;
  this.handId = data.handId;
  /**
   * The estimated length of the finger or tool in millimeters.
   *
   * The reported length is the visible length of the finger or tool from the
   * hand to tip. If the length isn't known, then a value of 0 is returned.
   *
   * @member length
   * @type {number}
   * @memberof Leap.Pointable.prototype
   */
  this.length = data.length;
  /**
   * Whether or not the Pointable is believed to be a tool.
   * Tools are generally longer, thinner, and straighter than fingers.
   *
   * If tool is false, then this Pointable must be a finger.
   *
   * @member tool
   * @type {Boolean}
   * @memberof Leap.Pointable.prototype
   */
  this.tool = data.tool;
  /**
   * The estimated width of the tool in millimeters.
   *
   * The reported width is the average width of the visible portion of the
   * tool from the hand to the tip. If the width isn't known,
   * then a value of 0 is returned.
   *
   * Pointable objects representing fingers do not have a width property.
   *
   * @member width
   * @type {number}
   * @memberof Leap.Pointable.prototype
   */
  this.width = data.width;
  /**
   * The direction in which this finger or tool is pointing.
   *
   * The direction is expressed as a unit vector pointing in the same
   * direction as the tip.
   *
   * ![Finger](images/Leap_Finger_Model.png)
   * @member direction
   * @type {number[]}
   * @memberof Leap.Pointable.prototype
   */
  this.direction = data.direction;
  /**
   * The tip position in millimeters from the Leap origin.
   * Stabilized
   *
   * @member stabilizedTipPosition
   * @type {number[]}
   * @memberof Leap.Pointable.prototype
   */
  this.stabilizedTipPosition = data.stabilizedTipPosition;
  /**
   * The tip position in millimeters from the Leap origin.
   *
   * @member tipPosition
   * @type {number[]}
   * @memberof Leap.Pointable.prototype
   */
  this.tipPosition = data.tipPosition;
  /**
   * The rate of change of the tip position in millimeters/second.
   *
   * @member tipVelocity
   * @type {number[]}
   * @memberof Leap.Pointable.prototype
   */
  this.tipVelocity = data.tipVelocity;
  /**
   * The current touch zone of this Pointable object.
   *
   * The Leap Motion software computes the touch zone based on a floating touch
   * plane that adapts to the user's finger movement and hand posture. The Leap
   * Motion software interprets purposeful movements toward this plane as potential touch
   * points. When a Pointable moves close to the adaptive touch plane, it enters the
   * "hovering" zone. When a Pointable reaches or passes through the plane, it enters
   * the "touching" zone.
   *
   * The possible states include:
   *
   * * "none" -- The Pointable is outside the hovering zone.
   * * "hovering" -- The Pointable is close to, but not touching the touch plane.
   * * "touching" -- The Pointable has penetrated the touch plane.
   *
   * The touchDistance value provides a normalized indication of the distance to
   * the touch plane when the Pointable is in the hovering or touching zones.
   *
   * @member touchZone
   * @type {String}
   * @memberof Leap.Pointable.prototype
   */
  this.touchZone = data.touchZone;
  /**
   * A value proportional to the distance between this Pointable object and the
   * adaptive touch plane.
   *
   * ![Touch Distance](images/Leap_Touch_Plane.png)
   *
   * The touch distance is a value in the range [-1, 1]. The value 1.0 indicates the
   * Pointable is at the far edge of the hovering zone. The value 0 indicates the
   * Pointable is just entering the touching zone. A value of -1.0 indicates the
   * Pointable is firmly within the touching zone. Values in between are
   * proportional to the distance from the plane. Thus, the touchDistance of 0.5
   * indicates that the Pointable is halfway into the hovering zone.
   *
   * You can use the touchDistance value to modulate visual feedback given to the
   * user as their fingers close in on a touch target, such as a button.
   *
   * @member touchDistance
   * @type {number}
   * @memberof Leap.Pointable.prototype
   */
  this.touchDistance = data.touchDistance;

  /**
   * How long the pointable has been visible in seconds.
   *
   * @member timeVisible
   * @type {number}
   * @memberof Leap.Pointable.prototype
   */
  this.timeVisible = data.timeVisible;
}

/**
 * A string containing a brief, human readable description of the Pointable
 * object.
 *
 * @method toString
 * @memberof Leap.Pointable.prototype
 * @returns {String} A description of the Pointable object as a string.
 */
Pointable.prototype.toString = function() {
  return "Pointable [ id:" + this.id + " " + this.length + "mmx | width:" + this.width + "mm | direction:" + this.direction + ' ]';
}

/**
 * Returns the hand which the pointable is attached to.
 */
Pointable.prototype.hand = function(){
  return this.frame.hand(this.handId);
}

/**
 * An invalid Pointable object.
 *
 * You can use this Pointable instance in comparisons testing
 * whether a given Pointable instance is valid or invalid. (You can also use the
 * Pointable.valid property.)

 * @static
 * @type {Leap.Pointable}
 * @name Invalid
 * @memberof Leap.Pointable
 */
Pointable.Invalid = { valid: false };

},{"gl-matrix":23}],15:[function(require,module,exports){
var Frame = require('./frame')
  , Hand = require('./hand')
  , Pointable = require('./pointable')
  , Finger = require('./finger')
  , _ = require('underscore')
  , EventEmitter = require('events').EventEmitter;

var Event = function(data) {
  this.type = data.type;
  this.state = data.state;
};

exports.chooseProtocol = function(header) {
  var protocol;
  switch(header.version) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      protocol = JSONProtocol(header);
      protocol.sendBackground = function(connection, state) {
        connection.send(protocol.encode({background: state}));
      }
      protocol.sendFocused = function(connection, state) {
        connection.send(protocol.encode({focused: state}));
      }
      protocol.sendOptimizeHMD = function(connection, state) {
        connection.send(protocol.encode({optimizeHMD: state}));
      }
      break;
    default:
      throw "unrecognized version";
  }
  return protocol;
}

var JSONProtocol = exports.JSONProtocol = function(header) {

  var protocol = function(frameData) {

    if (frameData.event) {

      return new Event(frameData.event);

    } else {

      protocol.emit('beforeFrameCreated', frameData);

      var frame = new Frame(frameData);

      protocol.emit('afterFrameCreated', frame, frameData);

      return frame;

    }

  };

  protocol.encode = function(message) {
    return JSON.stringify(message);
  };
  protocol.version = header.version;
  protocol.serviceVersion = header.serviceVersion;
  protocol.versionLong = 'Version ' + header.version;
  protocol.type = 'protocol';

  _.extend(protocol, EventEmitter.prototype);

  return protocol;
};



},{"./finger":7,"./frame":8,"./hand":10,"./pointable":14,"events":21,"underscore":24}],16:[function(require,module,exports){
exports.UI = {
  Region: require("./ui/region"),
  Cursor: require("./ui/cursor")
};
},{"./ui/cursor":17,"./ui/region":18}],17:[function(require,module,exports){
var Cursor = module.exports = function() {
  return function(frame) {
    var pointable = frame.pointables.sort(function(a, b) { return a.z - b.z })[0]
    if (pointable && pointable.valid) {
      frame.cursorPosition = pointable.tipPosition
    }
    return frame
  }
}

},{}],18:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter
  , _ = require('underscore')

var Region = module.exports = function(start, end) {
  this.start = new Vector(start)
  this.end = new Vector(end)
  this.enteredFrame = null
}

Region.prototype.hasPointables = function(frame) {
  for (var i = 0; i != frame.pointables.length; i++) {
    var position = frame.pointables[i].tipPosition
    if (position.x >= this.start.x && position.x <= this.end.x && position.y >= this.start.y && position.y <= this.end.y && position.z >= this.start.z && position.z <= this.end.z) {
      return true
    }
  }
  return false
}

Region.prototype.listener = function(opts) {
  var region = this
  if (opts && opts.nearThreshold) this.setupNearRegion(opts.nearThreshold)
  return function(frame) {
    return region.updatePosition(frame)
  }
}

Region.prototype.clipper = function() {
  var region = this
  return function(frame) {
    region.updatePosition(frame)
    return region.enteredFrame ? frame : null
  }
}

Region.prototype.setupNearRegion = function(distance) {
  var nearRegion = this.nearRegion = new Region(
    [this.start.x - distance, this.start.y - distance, this.start.z - distance],
    [this.end.x + distance, this.end.y + distance, this.end.z + distance]
  )
  var region = this
  nearRegion.on("enter", function(frame) {
    region.emit("near", frame)
  })
  nearRegion.on("exit", function(frame) {
    region.emit("far", frame)
  })
  region.on('exit', function(frame) {
    region.emit("near", frame)
  })
}

Region.prototype.updatePosition = function(frame) {
  if (this.nearRegion) this.nearRegion.updatePosition(frame)
  if (this.hasPointables(frame) && this.enteredFrame == null) {
    this.enteredFrame = frame
    this.emit("enter", this.enteredFrame)
  } else if (!this.hasPointables(frame) && this.enteredFrame != null) {
    this.enteredFrame = null
    this.emit("exit", this.enteredFrame)
  }
  return frame
}

Region.prototype.normalize = function(position) {
  return new Vector([
    (position.x - this.start.x) / (this.end.x - this.start.x),
    (position.y - this.start.y) / (this.end.y - this.start.y),
    (position.z - this.start.z) / (this.end.z - this.start.z)
  ])
}

Region.prototype.mapToXY = function(position, width, height) {
  var normalized = this.normalize(position)
  var x = normalized.x, y = normalized.y
  if (x > 1) x = 1
  else if (x < -1) x = -1
  if (y > 1) y = 1
  else if (y < -1) y = -1
  return [
    (x + 1) / 2 * width,
    (1 - y) / 2 * height,
    normalized.z
  ]
}

_.extend(Region.prototype, EventEmitter.prototype)
},{"events":21,"underscore":24}],19:[function(require,module,exports){
// This file is automatically updated from package.json by grunt.
module.exports = {
  full: '0.6.3',
  major: 0,
  minor: 6,
  dot: 3
}
},{}],20:[function(require,module,exports){

},{}],21:[function(require,module,exports){
var process=require("__browserify_process");if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;
function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (x === xs[i]) return i;
    }
    return -1;
}

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = indexOf(list, listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  if (arguments.length === 0) {
    this._events = {};
    return this;
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (typeof emitter._events[type] === 'function')
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

},{"__browserify_process":22}],22:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],23:[function(require,module,exports){
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/*
* Rotate a 3D vector around the x-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];

    //perform rotation
    r[0] = p[0];
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];

    return out;
};

/*
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateY = function(out, a, b, c){
    var p = [], r=[];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
    r[1] = p[1];
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
  
    return out;
};

/*
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateZ = function(out, a, b, c){
    var p = [], r=[];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
    r[2] = p[2];
  
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
  
    return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[7]-m[5])*fRoot;
        out[1] = (m[2]-m[6])*fRoot;
        out[2] = (m[3]-m[1])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[k*3+j] - m[j*3+k]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

},{}],24:[function(require,module,exports){
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}],25:[function(require,module,exports){
if (typeof(window) !== 'undefined' && typeof(window.requestAnimationFrame) !== 'function') {
  window.requestAnimationFrame = (
    window.webkitRequestAnimationFrame   ||
    window.mozRequestAnimationFrame      ||
    window.oRequestAnimationFrame        ||
    window.msRequestAnimationFrame       ||
    function(callback) { setTimeout(callback, 1000 / 60); }
  );
}

Leap = require("../lib/index");

},{"../lib/index":11}]},{},[25])
;

/*    
 * LeapJS-Plugins  - v0.1.8 - 2014-10-07    
 * http://github.com/leapmotion/leapjs-plugins/    
 *    
 * Copyright 2014 LeapMotion, Inc    
 *    
 * Licensed under the Apache License, Version 2.0 (the "License");    
 * you may not use this file except in compliance with the License.    
 * You may obtain a copy of the License at    
 *    
 *     http://www.apache.org/licenses/LICENSE-2.0    
 *    
 * Unless required by applicable law or agreed to in writing, software    
 * distributed under the License is distributed on an "AS IS" BASIS,    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.    
 * See the License for the specific language governing permissions and    
 * limitations under the License.    
 *    
 */    

//CoffeeScript generated from main/hand-entry/leap.hand-entry.coffee
/*
Emits controller events when a hand enters of leaves the frame
"handLost" and "handFound"
Each event also includes the hand object, which will be invalid for the handLost event.
*/


(function() {
  var handEntry;

  handEntry = function() {
    var activeHandIds;
    activeHandIds = [];
    if (Leap.version.major === 0 && Leap.version.minor < 5) {
      console.warn("The hand entry plugin requires LeapJS 0.5.0 or newer.");
    }
    this.on("deviceStopped", function() {
      for (var i = 0, len = activeHandIds.length; i < len; i++){
      id = activeHandIds[i];
      activeHandIds.splice(i, 1);
      // this gets executed before the current frame is added to the history.
      this.emit('handLost', this.lastConnectionFrame.hand(id))
      i--;
      len--;
    };
    });
    return {
      frame: function(frame) {
        var id, newValidHandIds, _i, _len, _results;
        newValidHandIds = frame.hands.map(function(hand) {
          return hand.id;
        });
        for (var i = 0, len = activeHandIds.length; i < len; i++){
        id = activeHandIds[i];
        if(  newValidHandIds.indexOf(id) == -1){
          activeHandIds.splice(i, 1);
          // this gets executed before the current frame is added to the history.
          this.emit('handLost', this.frame(1).hand(id));
          i--;
          len--;
        }
      };
        _results = [];
        for (_i = 0, _len = newValidHandIds.length; _i < _len; _i++) {
          id = newValidHandIds[_i];
          if (activeHandIds.indexOf(id) === -1) {
            activeHandIds.push(id);
            _results.push(this.emit('handFound', frame.hand(id)));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };
  };

  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('handEntry', handEntry);
  } else if (typeof module !== 'undefined') {
    module.exports.handEntry = handEntry;
  } else {
    throw 'leap.js not included';
  }

}).call(this);

//CoffeeScript generated from main/hand-hold/leap.hand-hold.coffee
(function() {
  var handHold;

  handHold = function() {
    var dataFn, interFrameData;
    interFrameData = {};
    dataFn = function(prefix, hashOrKey, value) {
      var dict, key, _name, _results;
      interFrameData[_name = prefix + this.id] || (interFrameData[_name] = []);
      dict = interFrameData[prefix + this.id];
      if (value !== void 0) {
        return dict[hashOrKey] = value;
      } else if ({}.toString.call(hashOrKey) === '[object String]') {
        return dict[hashOrKey];
      } else {
        _results = [];
        for (key in hashOrKey) {
          value = hashOrKey[key];
          if (value === void 0) {
            _results.push(delete dict[key]);
          } else {
            _results.push(dict[key] = value);
          }
        }
        return _results;
      }
    };
    return {
      hand: {
        data: function(hashOrKey, value) {
          return dataFn.call(this, 'h', hashOrKey, value);
        },
        hold: function(object) {
          if (object) {
            return this.data({
              holding: object
            });
          } else {
            return this.hold(this.hovering());
          }
        },
        holding: function() {
          return this.data('holding');
        },
        release: function() {
          var release;
          release = this.data('holding');
          this.data({
            holding: void 0
          });
          return release;
        },
        hoverFn: function(getHover) {
          return this.data({
            getHover: getHover
          });
        },
        hovering: function() {
          var getHover;
          if (getHover = this.data('getHover')) {
            return this._hovering || (this._hovering = getHover.call(this));
          }
        }
      },
      pointable: {
        data: function(hashOrKey, value) {
          return dataFn.call(this, 'p', hashOrKey, value);
        }
      }
    };
  };

  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('handHold', handHold);
  } else if (typeof module !== 'undefined') {
    module.exports.handHold = handHold;
  } else {
    throw 'leap.js not included';
  }

}).call(this);




/*
 * LeapJS Playback - v0.2.1 - 2014-05-14
 * http://github.com/leapmotion/leapjs-playback/
 *
 * Copyright 2014 LeapMotion, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

;(function( window, undefined ){
 'use strict';
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.3.3
var LZString = {


  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _f : String.fromCharCode,

  compressToBase64 : function (input) {
    if (input == null) return "";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = LZString.compress(input);

    while (i < input.length*2) {

      if (i%2==0) {
        chr1 = input.charCodeAt(i/2) >> 8;
        chr2 = input.charCodeAt(i/2) & 255;
        if (i/2+1 < input.length)
          chr3 = input.charCodeAt(i/2+1) >> 8;
        else
          chr3 = NaN;
      } else {
        chr1 = input.charCodeAt((i-1)/2) & 255;
        if ((i+1)/2 < input.length) {
          chr2 = input.charCodeAt((i+1)/2) >> 8;
          chr3 = input.charCodeAt((i+1)/2) & 255;
        } else
          chr2=chr3=NaN;
      }
      i+=3;

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
        LZString._keyStr.charAt(enc1) + LZString._keyStr.charAt(enc2) +
          LZString._keyStr.charAt(enc3) + LZString._keyStr.charAt(enc4);

    }

    return output;
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    var output = "",
        ol = 0,
        output_,
        chr1, chr2, chr3,
        enc1, enc2, enc3, enc4,
        i = 0, f=LZString._f;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = LZString._keyStr.indexOf(input.charAt(i++));
      enc2 = LZString._keyStr.indexOf(input.charAt(i++));
      enc3 = LZString._keyStr.indexOf(input.charAt(i++));
      enc4 = LZString._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      if (ol%2==0) {
        output_ = chr1 << 8;

        if (enc3 != 64) {
          output += f(output_ | chr2);
        }
        if (enc4 != 64) {
          output_ = chr3 << 8;
        }
      } else {
        output = output + f(output_ | chr1);

        if (enc3 != 64) {
          output_ = chr2 << 8;
        }
        if (enc4 != 64) {
          output += f(output_ | chr3);
        }
      }
      ol+=3;
    }

    return LZString.decompress(output);

  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    var output = "",
        i,c,
        current,
        status = 0,
        f = LZString._f;

    input = LZString.compress(input);

    for (i=0 ; i<input.length ; i++) {
      c = input.charCodeAt(i);
      switch (status++) {
        case 0:
          output += f((c >> 1)+32);
          current = (c & 1) << 14;
          break;
        case 1:
          output += f((current + (c >> 2))+32);
          current = (c & 3) << 13;
          break;
        case 2:
          output += f((current + (c >> 3))+32);
          current = (c & 7) << 12;
          break;
        case 3:
          output += f((current + (c >> 4))+32);
          current = (c & 15) << 11;
          break;
        case 4:
          output += f((current + (c >> 5))+32);
          current = (c & 31) << 10;
          break;
        case 5:
          output += f((current + (c >> 6))+32);
          current = (c & 63) << 9;
          break;
        case 6:
          output += f((current + (c >> 7))+32);
          current = (c & 127) << 8;
          break;
        case 7:
          output += f((current + (c >> 8))+32);
          current = (c & 255) << 7;
          break;
        case 8:
          output += f((current + (c >> 9))+32);
          current = (c & 511) << 6;
          break;
        case 9:
          output += f((current + (c >> 10))+32);
          current = (c & 1023) << 5;
          break;
        case 10:
          output += f((current + (c >> 11))+32);
          current = (c & 2047) << 4;
          break;
        case 11:
          output += f((current + (c >> 12))+32);
          current = (c & 4095) << 3;
          break;
        case 12:
          output += f((current + (c >> 13))+32);
          current = (c & 8191) << 2;
          break;
        case 13:
          output += f((current + (c >> 14))+32);
          current = (c & 16383) << 1;
          break;
        case 14:
          output += f((current + (c >> 15))+32, (c & 32767)+32);
          status = 0;
          break;
      }
    }

    return output + f(current + 32);
  },


  decompressFromUTF16 : function (input) {
    if (input == null) return "";
    var output = "",
        current,c,
        status=0,
        i = 0,
        f = LZString._f;

    while (i < input.length) {
      c = input.charCodeAt(i) - 32;

      switch (status++) {
        case 0:
          current = c << 1;
          break;
        case 1:
          output += f(current | (c >> 14));
          current = (c&16383) << 2;
          break;
        case 2:
          output += f(current | (c >> 13));
          current = (c&8191) << 3;
          break;
        case 3:
          output += f(current | (c >> 12));
          current = (c&4095) << 4;
          break;
        case 4:
          output += f(current | (c >> 11));
          current = (c&2047) << 5;
          break;
        case 5:
          output += f(current | (c >> 10));
          current = (c&1023) << 6;
          break;
        case 6:
          output += f(current | (c >> 9));
          current = (c&511) << 7;
          break;
        case 7:
          output += f(current | (c >> 8));
          current = (c&255) << 8;
          break;
        case 8:
          output += f(current | (c >> 7));
          current = (c&127) << 9;
          break;
        case 9:
          output += f(current | (c >> 6));
          current = (c&63) << 10;
          break;
        case 10:
          output += f(current | (c >> 5));
          current = (c&31) << 11;
          break;
        case 11:
          output += f(current | (c >> 4));
          current = (c&15) << 12;
          break;
        case 12:
          output += f(current | (c >> 3));
          current = (c&7) << 13;
          break;
        case 13:
          output += f(current | (c >> 2));
          current = (c&3) << 14;
          break;
        case 14:
          output += f(current | (c >> 1));
          current = (c&1) << 15;
          break;
        case 15:
          output += f(current | c);
          status=0;
          break;
      }


      i++;
    }

    return LZString.decompress(output);
    //return output;

  },



  compress: function (uncompressed) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data_string="",
        context_data_val=0,
        context_data_position=0,
        ii,
        f=LZString._f;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == 15) {
                context_data_position = 0;
                context_data_string += f(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == 15) {
                context_data_position = 0;
                context_data_string += f(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position == 15) {
                context_data_position = 0;
                context_data_string += f(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == 15) {
                context_data_position = 0;
                context_data_string += f(context_data_val);
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == 15) {
              context_data_position = 0;
              context_data_string += f(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == 15) {
              context_data_position = 0;
              context_data_string += f(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == 15) {
              context_data_position = 0;
              context_data_string += f(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == 15) {
              context_data_position = 0;
              context_data_string += f(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == 15) {
              context_data_position = 0;
              context_data_string += f(context_data_val);
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == 15) {
            context_data_position = 0;
            context_data_string += f(context_data_val);
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == 15) {
        context_data_position = 0;
        context_data_string += f(context_data_val);
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == 15) {
        context_data_string += f(context_data_val);
        break;
      }
      else context_data_position++;
    }
    return context_data_string;
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = "",
        i,
        w,
        bits, resb, maxpower, power,
        c,
        f = LZString._f,
        data = {string:compressed, val:compressed.charCodeAt(0), position:32768, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = 32768;
        data.val = data.string.charCodeAt(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = 32768;
              data.val = data.string.charCodeAt(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = 32768;
              data.val = data.string.charCodeAt(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = result = c;
    while (true) {
      if (data.index > data.string.length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = 32768;
          data.val = data.string.charCodeAt(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = 32768;
              data.val = data.string.charCodeAt(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = 32768;
              data.val = data.string.charCodeAt(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result;
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result += entry;

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};

if( typeof module !== 'undefined' && module != null ) {
  module.exports = LZString
}

// https://gist.github.com/paulirish/5438650

// relies on Date.now() which has been supported everywhere modern for years.
// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values

// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed


(function(){

  // prepare base perf object
  if (typeof window.performance === 'undefined') {
      window.performance = {};
  }

  if (!window.performance.now){

    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }


    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }

  }

})();
function Recording (options){
  this.options = options || (options = {});
  this.loading = false;
  this.timeBetweenLoops = options.timeBetweenLoops || 50;

  // see https://github.com/leapmotion/leapjs/blob/master/Leap_JSON.rst
  this.packingStructure = [
    'id',
    'timestamp',
    // this should be replace/upgraded with a whitelist instead of a blacklist.
    // leaving out r,s,y, and gestures
    {hands: [[
      'id',
      'type',
      'direction',
      'palmNormal',
      'palmPosition',
      'palmVelocity',
      'stabilizedPalmPosition',
      'pinchStrength',
      'grabStrength',
      'confidence'
      // leaving out r, s, t, sphereCenter, sphereRadius
    ]]},
    {pointables: [[
      'id',
      'direction',
      'handId',
      'length',
      'stabilizedTipPosition',
      'tipPosition',
      'tipVelocity',
      'tool',
      'carpPosition',
      'mcpPosition',
      'pipPosition',
      'dipPosition',
      'btipPosition',
      'bases',
      'type'
      // leaving out touchDistance, touchZone
    ]]},
    {interactionBox: [
      'center', 'size'
    ]}
  ];

  this.setFrames(options.frames || [])
}


Recording.prototype = {

  setFrames: function (frames) {
    this.frameData = frames;
    this.frameIndex = 0;
    this.frameCount = frames.length;
    this.leftCropPosition = 0;
    this.rightCropPosition = this.frameCount;
    this.setMetaData();
  },

  addFrame: function(frameData){
    this.frameData.push(frameData);
  },

  currentFrame: function () {
    return this.frameData[this.frameIndex];
  },

  nextFrame: function () {
    var frameIndex = this.frameIndex + 1;
    // || 1 to prevent `mod 0` error when finishing recording before setFrames has been called.
    frameIndex = frameIndex % (this.rightCropPosition || 1);
    if ((frameIndex < this.leftCropPosition)) {
      frameIndex = this.leftCropPosition;
    }
    return this.frameData[frameIndex];
  },


  advanceFrame: function () {
    this.frameIndex++;

    if (this.frameIndex >= this.rightCropPosition && !this.options.loop) {
      this.frameIndex--;
      // there is currently an issue where angular watching the right handle position
      // will cause this to fire prematurely
      // when switching to an earlier recording
      return false
    }


    this.frameIndex = this.frameIndex % (this.rightCropPosition || 1);

    if ((this.frameIndex < this.leftCropPosition)) {
      this.frameIndex = this.leftCropPosition;
    }

    return true
  },

  // resets to beginning if at end
  readyPlay: function(){
    this.frameIndex++;
    if (this.frameIndex >= this.rightCropPosition) {
      this.frameIndex = this.frameIndex % (this.rightCropPosition || 1);

      if ((this.frameIndex < this.leftCropPosition)) {
        this.frameIndex = this.leftCropPosition;
      }
    }else{
      this.frameIndex--;
    }
  },

  cloneCurrentFrame: function(){
    return JSON.parse(JSON.stringify(this.currentFrame()));
  },


  // this method would be well-moved to its own object/class -.-
  // for every point, lerp as appropriate
  // note: currently hand and finger props are hard coded, but things like stabilizedPalmPosition should be optional
  // should have this be set from the packingStructure or some such, but only for vec3s.
  createLerpFrameData: function(t){
    // http://stackoverflow.com/a/5344074/478354
    var currentFrame = this.currentFrame(),
        nextFrame = this.nextFrame(),
        handProps   = ['palmPosition', 'stabilizedPalmPosition', 'sphereCenter', 'direction', 'palmNormal', 'palmVelocity'],
        fingerProps = ['mcpPosition', 'pipPosition', 'dipPosition', 'tipPosition', 'direction'],
        frameData = this.cloneCurrentFrame(),
        numHands = frameData.hands.length,
        numPointables = frameData.pointables.length,
        len1 = handProps.length,
        len2 = fingerProps.length,
        prop, hand, pointable;

    for (var i = 0; i < numHands; i++){
      hand = frameData.hands[i];

      for (var j = 0; j < len1; j++){
        prop = handProps[j];

        if (!currentFrame.hands[i][prop]){
          continue;
        }

        if (!nextFrame.hands[i]){
          continue;
        }

        Leap.vec3.lerp(
          hand[prop],
          currentFrame.hands[i][prop],
          nextFrame.hands[i][prop],
          t
        );

        console.assert(hand[prop]);
      }

    }

    for ( i = 0; i < numPointables; i++){
      pointable = frameData.pointables[i];

      for ( j = 0; j < len2; j++){
        prop = fingerProps[j];

        if (!currentFrame.pointables[i][prop]){
          continue;
        }

        if (!nextFrame.hands[i]){
          continue;
        }

        Leap.vec3.lerp(
          pointable[prop],
          currentFrame.pointables[i][prop],
          nextFrame.pointables[i][prop],
          0
        );
//          console.assert(t >= 0 && t <= 1);
//          if (t > 0) debugger;

      }

    }

    return frameData;
  },

  // returns ms
  timeToNextFrame: function () {
    var elapsedTime = (this.nextFrame().timestamp - this.currentFrame().timestamp) / 1000;
    if (elapsedTime < 0) {
      elapsedTime = this.timeBetweenLoops; //arbitrary pause at slightly less than 30 fps.
    }
    console.assert(!isNaN(elapsedTime));
    return elapsedTime;
  },


  blank: function(){
    return this.frameData.length === 0;
  },

  // sets the crop-point of the current recording to the current position.
  leftCrop: function () {
    this.leftCropPosition = this.frameIndex
  },

  // sets the crop-point of the current recording to the current position.
  rightCrop: function () {
    this.rightCropPosition = this.frameIndex
  },

  // removes every other frame from the array
  // Accepts an optional `factor` integer, which is the number of frames
  // discarded for every frame kept.
  cullFrames: function (factor) {
    console.log('cull frames', factor);
    factor || (factor = 1);
    for (var i = 0; i < this.frameData.length; i++) {
      this.frameData.splice(i, factor);
    }
    this.setMetaData();
  },

  // Returns the average frames per second of the recording
  frameRate: function () {
    if (this.frameData.length == 0) {
      return 0
    }
    return this.frameData.length / (this.frameData[this.frameData.length - 1].timestamp - this.frameData[0].timestamp) * 1000000;
  },

  // returns frames without any circular references
  croppedFrameData: function () {
    return this.frameData.slice(this.leftCropPosition, this.rightCropPosition);
  },


  setMetaData: function () {

    var newMetaData = {
      formatVersion: 2,
      generatedBy: 'LeapJS Playback 0.2.0',
      frames: this.rightCropPosition - this.leftCropPosition,
      protocolVersion: this.options.requestProtocolVersion,
      serviceVersion: this.options.serviceVersion,
      frameRate: this.frameRate().toPrecision(2),
      modified: (new Date).toString()
    };

    this.metadata || (this.metadata = {});

    for (var key in newMetaData) {
      this.metadata[key] = newMetaData[key];
    }
  },

  // returns an array
  // the first item is the keys of the following items
  // nested arrays are expected to have idententical siblings
  packedFrameData: function(){
    var frameData = this.croppedFrameData(),
      packedFrames = [],
      frameDatum;

    packedFrames.push(this.packingStructure);

    for (var i = 0, len = frameData.length; i < len; i++){
      frameDatum = frameData[i];

      packedFrames.push(
        this.packArray(
          this.packingStructure,
          frameDatum
        )
      );

    }

    return packedFrames;
  },

  // recursive method
  // creates a structure of frame data matching packing structure
  // there may be an issue here where hands/pointables are wrapped in one more array than necessary
  packArray: function(structure, data){
    var out = [], nameOrHash;

    for (var i = 0, len1 = structure.length; i < len1; i++){

      // e.g., nameOrHash is either 'id' or {hand: [...]}
      nameOrHash = structure[i];

      if ( typeof  nameOrHash === 'string'){

        out.push(
          data[nameOrHash]
        );

      }else if (Object.prototype.toString.call(nameOrHash) == "[object Array]") {
        // nested array, such as hands or fingers

        for (var j = 0, len2 = data.length; j < len2; j++){
          out.push(
            this.packArray(
              nameOrHash,
              data[j]
            )
          );
        }

      } else { // key-value (nested object) such as interactionBox

        console.assert(nameOrHash);

        for (var key in nameOrHash) break;

        console.assert(key);
        console.assert(nameOrHash[key]);
        console.assert(data[key]);

        out.push(this.packArray(
          nameOrHash[key],
          data[key]
        ));

      }

    }

    return out;
  },

  // expects the first array element to describe the following arrays
  // this algorithm copies frames to a new array
  // could there be merit in something which would do an in-place substitution?
  unPackFrameData: function(packedFrames){
    var packingStructure = packedFrames[0];
    var frameData = [],
        frameDatum;

    for (var i = 1, len = packedFrames.length; i < len; i++) {
      frameDatum = packedFrames[i];
      frameData.push(
        this.unPackArray(
          packingStructure,
          frameDatum
        )
      );

    }

    return frameData;
  },

  // data is a frame or subset of frame
  // returns a frame object
  // this is the structure of the array
  // gets unfolded to key-value pairs
  // e.g.:
  //  this.packingStructure = [
  //    'id',
  //    'timestamp',
  //    {hands: [[
  //      'id',
  //      'direction',
  //      'palmNormal',
  //      'palmPosition',
  //      'palmVelocity'
  //    ]]},
  //    {pointables: [[
  //      'direction',
  //      'handId',
  //      'length',
  //      'stabilizedTipPosition',
  //      'tipPosition',
  //      'tipVelocity',
  //      'tool'
  //    ]]},
  //    {interactionBox: [
  //      'center', 'size'
  //    ]}
  //  ];
  unPackArray: function(structure, data){
    var out = {}, nameOrHash;

    for (var i = 0, len1 = structure.length; i < len1; i++){

     // e.g., nameOrHash is either 'id' or {hand: [...]}
     nameOrHash = structure[i];

     if ( typeof  nameOrHash === 'string'){

       out[nameOrHash] = data[i];

     }else if (Object.prototype.toString.call(nameOrHash) == "[object Array]") {
       // nested array, such as hands or fingers
       // nameOrHash ["id", "direction", "palmNormal", "palmPosition", "palmVelocity"]
       // data [ [ 31, [vec3], [vec3], ...] ]

       var subArray = [];

       for (var j = 0, len2 = data.length; j < len2; j++){
         subArray.push(
           this.unPackArray(
             nameOrHash,
             data[j]
           )
         );
       }
       return subArray;

     } else { // key-value (nested object) such as interactionBox

       for (var key in nameOrHash) break;

       out[key] = this.unPackArray(
         nameOrHash[key],
         data[i]
       );

     }

    }

    return out;
  },

  toHash: function () {
    this.setMetaData();
    return {
      metadata: this.metadata,
      frames: this.packedFrameData()
    }
  },

  // Returns the cropped data as JSON or compressed
  // http://pieroxy.net/blog/pages/lz-string/index.html
  export: function (format) {
    var json = JSON.stringify(this.toHash());

    if (format == 'json') return json;

    return LZString.compressToBase64(json);
  },

  save: function(format){
    var filename;

    filename = this.metadata.title ? this.metadata.title.replace(/\s/g, '') : 'leap-playback-recording';

    if (this.metadata.frameRate) {
      filename += "-" + (Math.round(this.metadata.frameRate)) + "fps";
    }

    if (format === 'json') {

      saveAs(new Blob([this.export('json')], {
        type: "text/JSON;charset=utf-8"
      }), filename + ".json");

    } else {

      saveAs(new Blob([this.export('lz')], {
        type: "application/x-gzip;charset=utf-8"
      }),  filename + ".json.lz");

    }

  },

  decompress: function (data) {
    return LZString.decompressFromBase64(data);
  },

  loaded: function(){
    return !!(this.frameData && this.frameData.length)
  },


  // optional callback once frames are loaded, will have a context of player
  loadFrameData: function (callback) {
    var xhr = new XMLHttpRequest(),
        url = this.url,
        recording = this,
        contentLength = 0;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 0) {
          if (xhr.responseText) {

            recording.finishLoad(xhr.responseText, callback);

          } else {
            console.error('Leap Playback: "' + url + '" seems to be unreachable or the file is empty.');
          }
        } else {
          console.error('Leap Playback: Couldn\'t load "' + url + '" (' + xhr.status + ')');
        }
      }
    };

    xhr.addEventListener('progress', function(oEvent){

      if ( recording.options.loadProgress ) {

        if (oEvent.lengthComputable) {
          var percentComplete = oEvent.loaded / oEvent.total;
          recording.options.loadProgress( recording, percentComplete, oEvent );
        }

      }

    });

    this.loading = true;

    xhr.open("GET", url, true);
    xhr.send(null);
  },

  finishLoad: function(responseData, callback){

    var url = this.url;

    if (url.split('.')[url.split('.').length - 1] == 'lz') {
      responseData = this.decompress(responseData);
    }

    responseData = JSON.parse(responseData);

    if (responseData.metadata.formatVersion == 2) {
      responseData.frames = this.unPackFrameData(responseData.frames);
    }

    this.metadata = responseData.metadata;

    console.log('Recording loaded:', this.metadata);

    this.loading = false;

    if (callback) {
      callback.call(this, responseData.frames);
    }

  }

};
(function () {
  var CONNECT_LEAP_ICON = '<img class="playback-connect-leap" style="margin: 0px 2px -2px 0px; max-width: 100%;" src="data:image/gif;base64,R0lGODlh9AHmAPf/AOnxtbS0tc3eVTMzNM3NztvnhtbX1/Hy86ioqezs7Z6entzd3r7UJdHhZcnKzOjo6sXZO319fkJCQurq6xMTFPj65q2treHh4vT42uXl5/Lz9JCQkfP09FxcXebm54yMjsvMzSgoKdfleLGxsUtLTPDx8cHCwlNTVSIiI6CgoYSEhAUFBpmZmtHS1Li5ucHDxNHR0err7HZ2duDrl8XFxvP09vv98/Dx8trb3MjIyN7e3x4eHmZmZj4+PrzTHtDQ0uvs7dra2uzt7ZWVldfY2cPExtbX2AsLDImJiff4+MbHysjIyoCBgsXGyHp6er6+vsDVKm5ucOTk5XFxc83O0MbGx2FhYm1tbsDWLKWlpu70xRkZGkVFRtPU1pydoM/Q0bKztKamqCQkJeLi5O/w8Glpab/AwtjY2f7+/WtrbcfIytjZ26qrrDc4OdHS0nBxc7/VJ5KTlI6Oj9LS0/v8/b7UI3JzdMPDxIqKi5aWl7y9vi4uL8fHx3BwcNvc3pKSk62usCsrLN/f4Ly8vZydnp2dndXV1snJycXGym5vcefn6IuMjYWFhYODhiMjJCYmJ+fo6UhISR8fH/7+/hsbHP39/ejo6cHWLu/v8Lq7vPv7++nq6+3u7q+wsby9wL6/wvj4+Pz8/Pr6+vLy8+bn6O7u7vj4+e3u7/f3+PT19fn5+ff39/T09Pb29+jo6MHWL/b29vLy8vT09e7v8L2+v/Pz9O7u7/39/vHy9L2+wbi6ve/v7+no6fz9/fn6+vj5+fv7/Pr7+////v7//8XGx/X19vX29vb39+7v7/z8/enp6uPk5fr6+/n5+g8PENTU1Hh4eYeHh05OT+fo6JGSk0BAQOTl6CAgIS8vML+/wHNzc5eYmLa3t+Xm54OEhfn4+Y+PkFdXV1hZWv3++IiIiJGRkZubm3t8ff7+/35/gOjp6ru8vmRkZMTFyLO0tWJiY6eoqycnKGxsbkNDQ77TIl5eX6Kjo+Xm6QcHBwgICZSUlvLz8y0tLv///wAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMUExNDAzQjE2NzExRTNBMUE1RTA3Qjc0NDg0NDMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyMUExNDA0QjE2NzExRTNBMUE1RTA3Qjc0NDg0NDMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDIxQTE0MDFCMTY3MTFFM0ExQTVFMDdCNzQ0ODQ0MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDIxQTE0MDJCMTY3MTFFM0ExQTVFMDdCNzQ0ODQ0MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAD/ACwAAAAA9AHmAAAI/wD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDi/8fT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZIYD+gZKDDMzB06OGHIIYo4ogklmjiiSimqOKKLK54hg4TVGJhSqEYEscAR6zgz4489ujjj0AGKeSQRBZp5JFIJqnkkjuusIUELEgxyYwi7WLODv6s4Eg9TLCgwJdghinmmGSWaeaZaKap5ppstunmm3mccwIlOu7RiSZUdqQJHkf4MwAeMATTz6CEFmrooYgmquiijDbq6KOQRirppIdyUIU2lPhzzQhT5onRGVi20QkwlJZq6qmopqrqqoSOQogY/pD/kICnFfUzhD8UEEIHq7z26uuvwC5Khh0rOEMArRJN4oQ/PayBKBpCqKEHLdRWa60eL4Cg7bbcduvtt+CGK+645JZr7rnoptvtArAkOkimKSD7UD8y+NPBMYZOAkI0J7TBTwgABywwwPHkuMLBCCes8MIMN+zwwxBHLPHEFFdsMcL5oHDCNtMcisMA/pgjb0NI+FMPqYVmU08IkjwSQiAwxyxzzPxsweTNOOes8848A0lBGhcYqkgb/mQzskJ3+CONoIROIMMjYgTCz9RUV2311Hs40/PWXHftdc65GroACkdkcPRBuziDghSFrhHJNVJfLbfV2Dyi49d456033lbI/1KoCSsM0OnZA5XhjwuFztGDI3M3TrfNe0cu+eRKSuM3oUz4EwDhAxlgcqEXVMO446Tzswc/fVKu+uqs+yNOobEEQkExnP8jDT5zEKqJFSiU7js2KLQu/PB5b1BoGP7ow3kMK3RQaArX+C49NhQQb/31Oh9hAKGrBHKNjGfn4Q8thCZQTTzS+75HIPhg7/77R5ZRKB7+6HBaJZrkr//+/Pfv//8ADCD/QtGPnQwgBO0alD16l77fYQl+EIxgj5xxBkJ1wR9MMM0qBkCBDnrwgyAMoQhHSMISgnALZ9AJK/LBg0KJQwwNnJ7WJEhD+CFBd20IRAFJowh/RGIRKgiiEP+HSMQiGvGISEyiCshhOAvohAD+sAehcICNuMWQdNiIx91qyEXi9aBQVnAGK0rjCn8cQoX+cGJOkJcDQnEDhlf8HeS6SEfWUaJjgxJfDMjojxygUY04kYM/gjYoOYwujr5LXR0XOTkQEGoE/pgDH/2YE1akUSeMoIAtCBUBBiISi7BipCj3FgBCFcEfnZgkGs0xiQAObiXaoIAQCHUOT37ScdQbpS6/FgZCEcMfI1BlTkqQjxWU8AjQcEksZzmoTt6ydOvLxy6n2TMEEIoG/mCDMHEiBH/sIBLzCKc4w8kFZ8QDfLCUJSdt+cy5YeMa1Ixnzqw5KGwu4pWgKSMlcVL/Cn/0YVFcCAE6E9IPDAjDI8tcZztLh40ZyvOhSKJnP+y5CtLoUyf9TEM/asHRjnK0HxIQaEMEIIIdbiShzWTnQq+2hxBsEaIwFZJEsfmBG9xiNBfNST950AoP+PSnPr1BD0TKkAb4QARo4AhK++HMleIyUzGNKpBm6o+aVlQ0OeWnP3iACkV49atercVQB5qQBsCBAQ0Yx0nVmVKnOm4Pe1CkVOdK1Q+MwhY47SNGt9pVsH5VrERdiFkvAQcIVEAjS22qW935iLk61h91HYUlTPqZrN5kp331qyIAS1aEDPYSWIACBjKSWJUutmrYmONjYRrZDISCMV+wwAhmS9va/9q2ti6Ihhn3ylXNhnWsDfksaOugBYyU9rSNi+ZqY9paUSwGBjszAW8z61fOBhcOl8hudn0wA8pK5LjIdWfwlgvR1qpiMdzwxwYuEIT2uve97fXDM9iQhTCEARBT8McTEMIM7w5EFK0IsICT4N9JOPcgqhBwK1bRWYHs9Bu8iLCEIywL4BYVu9rNLgNEcFCKgDe8cssleeXZWlAsxgX+qMJDWrEGHODAGizQ70GGwYcDF6QSTQABDL7A4y8YAZ//EIQZ8FSQJLyACj/4wg9A0A51HKSf78CEIKZM5SlPoAfnvG6Gs/sKtNrAw2xlqmlBbLpAvHTEuizxYgLgjztAZP8ZP2jBAuIgY4NMQg02JkgoilBRQxlEEw4AwRgMkoomyIhQtjADGQzSzxOAIBeQjjSklXDABhtEuBl+RWEP+90wK5bMdHsgmnep5q/AIgaCMAAITOACC9iDBRtgxDmmUIZ6nEAa86iGrnfN6177ugfzIEEI/CHdh2giznOuc0EmsYQ8D2TPSWDIMogwinaQtdA3JcgFjMBof5ygCboIt7jD/YJKa3nLWx5tRD4MaqtlbdSkvmZVR5EBE3+FFa4IwhfuwA02pCAO0ThHH9ghDlz7yxGSSLjCF87whl/jGiGoHjciAudk79fOzT4ItBfC7Bv8AwRCKAi2CwIEKnS7A2P/6ILKV65yQbQhsArBNLpBC4B1e3rMoK7bmeFNx1KHhVCTCLrQhV6Johv96EhP+tH/oQgcvEFzEZHFFyx+EGY7WyAbV4gQHDClBIDglSMfSD9aMOiC9POfigqopQsi85lz178JYXe7Uatanvdc3natd2Jg4Qc7QB0ilfgB1TF+9X+Eoh2gqIQpTKEK7/YDBBMQyCSaUAKCpEIJlQgFKJpxgBY0IRndRnui1H7umWv3FXUoQIcZIve5Yw11dl+kzw1jDBzkd3MQmYQRBr/sjBvk8EnoBggI8IXXEqQVRTD+Py4AA8urIRQXAAEVqCAIIpvdH/LDhPa3r31ghHTtBGn7/8w1LQC1sv7mrg+xI2Jfx9kXpva3j0g/1sB7glhd40VAxT8IZRAjVN8WQsAKoFAEpjAQI8d/CLFTPQVUPyVUMFdWGGZ6mXYJr/BlC9F66ccPIsZ+NeR+hAF/f/cQuld/A3F/v1cE0YYQqvACzCAKa0AEHvAPLmaATZBtC4FZvrVZFiZYESiBXEYPBQB3BYGB6bc+7cOBNOSBg2EK9wANIegQlSBndHZxvVd4WXcQOtACBrEKL0BkYXeDfJWD1nVhPqhdWOADACCEQ4h+GXg12CAJSJiEeEdv9uYVoFACysBecwACNKAH3NAJCJACLBAHi8AI6QANMpCIiriIjNiITv/QAT0AT7j3EMUwdVNYdb5XEHtWhzfWDgdgEI9nCQLxhQqBg741hjxYhqB1CcXlEESYgQ0VhxGkhFnBCooQBARgAgGAAIVQDioADVdgBeFAAj1wQDuwBciYjMq4jMy4BZIgO8QWERkgeJeIcaOQeaGQjVNyeCWAjdkIPg/wdQdhC0owJbJADOA3EKaoWagYcz04c1jwCpzmimzYhnTjUrIIP7SYFUA3dEOndAAZkEj3D5DEB4DXAlKobATRD0agBg7wkA7QBGZzC1QAkQ+5BF8wJYawCwgxCVRAO6LQAkD2ZGF4ijvojhLYZRBggQ/xirAIVfmIPfsYGP0ACP6QCf3/4I86OXSkYARGMAbiQ4UFkZP+uENE6Y8CMSgEZZQOsY7VdZIQKIF1IALmBxEuWYRxFZMyOYd6lxiTAA7+sA0LMAdkiZBm2QI7xmMw4AB60JZK4A0KaRNOCVbtGJXohnqqNxFXmX7YEEpaSTwzCRiToA87YzQ6VZLsCJWe9Y7ZRQ8zUBF76XqBwEF/CZhcyYmGIQqCwAiJ8Aae+QaJEJqJEAWkWZpXUJpRYAcnoFeH2Vsm+YCLuWWhVXOQWY/2yFKBIE2V2TqB+RemAATFEJw1MJzEyQEchQvImZzJSQfrwJpa5ZqJCZsHgWlYcAnzCGbMJGa32TjvtJu8eZlgkS///2h02ZiNwAAM+RMMorCeouALqqAKv/ALiwcKSYAK9mmfq3ADMQAE/BkDE7AJABqgm6AOBFqgkHCgB8BmBtma1EWXijmdGKZphmVctrmddFM93qk6vTkVhUJ0ldALoZA/66kKpgAKqNAKwSkLHMAB+xALB1ACJUAGu4AMp3AKnCAE/Nmfm5Cj/fmfAgqgBWqgCKqgvGUKlnCkSHqkFSadl4ZdXZZWpFWhFko1LbVzGZo3GyoVHRp0RQeiIaoJI1qiq7AKsFAMqZAKK1oLLgqjMYoJszALNWqjOMqjQOCfPwqkQaoOBwoJCeoPC/qcC8iAHuCA6SgQZoWXSRWl2flpU/+KWjB5pXuTpVGxpZPQpdkooqJAoqAwpmV6pmm6pjBKBm4KpzV6o3Rapz76o3mqp0Pqp3slDmtgkRbZBS9XqP9gVm+3VouKc1OKDXIFqXgjqVBBqZb6pWG6qWRqpmhqnKDapm8ap6ZKp3Z6p6u6p336pzfRTVwAD17Qrd7arVkQCI9gq0bVirqqUI0aYo0FrHojrE9BrB96qWCaqWKarJ7KrC8aqqMKrXPKo9OqqnlqrUSqU1bqI9gwkkPZAOqmVFKarlOTWuyKpeDpFfDqpZiqqZyqrJ+ar85KqnJ6qv8qoNXaqvt0E6zgDG2AB0ywsizLBI2wDfYgCA3RDyzJsLv/6rBysz6/GrHVNLFdUbHG+p4mmqyyoKJqegD5OqM0eqP9GgMxsKP+mqoiG7AI6g761Q8CmbVau7UCOQkJ4AzyowFiO7YacAAIixJLVUs4G2LjxbNc00uD8kt5h5lbcSjD4I9HlwzJUJ7yuj/q2Z6+ELjN8J7v6QuxsJ89eqcDSrV8CgYrkA5q8AmSO7mUW7mWe7mYm7ma+wlFAAgrYAVJsKeiSwq2OhKZxAmEkg68mq4b6LY8ww2E8gL+sAh0qBi/ALWoqrgj27grEAGI4AnAG7zCO7zEW7zGe7zI6wkmwAb+8A6hK7oHSrowUQ7+IAiEQg2HtLZVsz4F67pL8gWE/9IJ/sACtdCViHG7ORqyAbq7B+C4jdACShC/8ju/9Fu/9nu/+Ju/SgACjgu60Bu9pSsSCNBmhJINcKS9oea9O3MN2QmWAUAG5nsY6Ju41Mq4BzAC+DAPU5AGHNzBHvzBIBzCIjzCJJwGwegP7PC80Cu9L7EAIUMogjAAVoTAVBOLCowzXOBC+dACCRDBhgEKkLC+BPq/pFDERmzEp6AGj1pDcpAK/wsJLOwSxeAM71Ao7JC9NGw6WnTDN/MH3OMI8aAOluDDhXGUO3nGQ5cKQJADgDACnfDGcBzHcjzHdFzHdnzHbwwILkAKrLrCASwSbeAItUAogIDFWQyxXKwkFP9gvYNCBf5UC4pAxpvxC6QwC2WLtJicyZq8yZzcyZ78yZl8A33sxzGhAJpDKLVAAo+QxdsLe4mMJFFQKOcATDcQyXS7GaZACk+8y7zcy778y8AMxX8cErtwBCdQKJ3gCDN8yOv3ykYiCWNAKDewAyGQAcpgy6GRy8G8zdzczbwcxS+RXw5QKFEgCayMWhjqzEMiRYSyDf4gB5CMzaChzd5cz/YMzODsEsqwAtJQKAkgDaubrsqlzkHiBIWiDDvgCDoQA14lyZpBz/cc0RK9p/nsEhHgD1kAOpEQ0I3anQT9I++ADoUiD/4wBLLwVQ6dGRA90SxdzxXdEqxwjBVEKFL/0AHPeM4a6FAfjUGGYgH+wAUxcM0NfcsPrcstfdTd/NIt4TltkACFcgzgADzLvLZVutOBAAaGQgUUsAUtYAtglQHnNc9GjdRkHSNmrJNquBL9QGcn0AqGQgR2MAAogAIvMzN2fdd4ndd6jdd7UHdcHAJ4QAaG4gZ0wgbxjNKFV9RkvdgxkNY3UQzawCxs06FjkALywAVtIMMI7AwrgA+e/dmgHdqiPdqkXdqmfdqondqqTdpHsANcoA0ugC+GQgA2Qwgn7VceoHyesdKLzdKNHRSmgAl+dw00kCiwEAt+EGjqstznAgNEYADQHd3SPd3UXd3Wfd3Ynd3avd3cbd2K/8AKipICnK0AsmAJmjVZ2TzWve3bjm0TmmAJozAEfQINJRAs9n3f+J3fjaID4aApYFDevsWR6b3eR/3bQNEPSmoCRLMD+lAK+v3gEB7hqqIDTtAn4hAEh43bRK3YBM7eQlELHqAIZGAJcmAzFCAPLjABkyDhLN7iLo61YxAGt+MPbYAANyAEOehVZ5sZogAEcfrjnBDkQj7kRF7kRn7kSF7kQiDYQhEKIa4IylALc0Y0/nAEe8ADEQAOG7DlXN7lXv7lYB7mYj7mZF7mZn7maJ7mao7m5bAI0LAy7ZMPXIAAExAL5p3ji1Y7/+DVXxUDtTABL8AIkRACurnT2OMMgf+wMQRwA7Eg1DnuWnpueBngV8qACbJwA1JgCC+QCZze6Z7+6aAe6qI+6qRe6qZ+6qie6qq+6qzOB0FAChwlBHee44rgAZUX6f8A4r5lCROQANz368Ae7MI+7MRe7MZ+7Mie7Mq+7Mwe7Lbgn7NO615lCTsuL/0gBE8u7dq+7dze7d7+7eAe7uI+7uOeAYlNOJUQ7eS+7uze7u7+7vAe7h4wRriuZ+oe7/ie7/q+7/zuVR4wCu19NqFw7/1e8AZ/8Aj/Vf8e8OieANme8BAf8RJP7h4AC/WuEP3ACj418Rzf8R7vVxmQALp98QhRCTeQAQ//8Sq/8vnuARkwAY1H8lDdyAoxAFQsf/M4/+0/pQiYEPMyDxH9EAqwUAu2MAHKkKRIn/RKv/RM3/RO//RQH/VSP/VUX/VJqgwxEAusIArV/vMMMShoHPZiP/ZkX/Zmf/Zon/Zqf/ZK6fVu//ZwH/dyP/d0X/d2f/d4n/d6v/d83/d+//eAH/iCP/iEX/iGf/iIn/iKv/iM3/iO//iQH/mSP/mUX/mWf/mYn/mav/mc3/me//mgH/qiP/qkX/qmf/qon/qqv/qs3/qu//qwH/uyP/u0X/u2f/u4n/u6v/u83/u+//vAH/zCP/zXERAAOw==">';
  var MOVE_HAND_OVER_LEAP_ICON = '<img class="playback-move-hand" style="margin: 0px 2px -2px 0px; max-width: 100%;" src="data:image/gif;base64,R0lGODlh9AHtAPf/AJ2dnfT09KWlpZWVlejo6bGxsRwcHHl5eYmJiRMTFOrq66GhoYWFhcHCxObm54GBgdjY2GFhYcXGydPT0+Dg4OPj4319fQsLC0ZGRuTk5GlpaVVVVV5eXpGRkXFxcd7e3kFBQXV1ddbW1lJSUsDAwNvb221tbk1OTgMDAykpKaurqzw9PdTU1FlZWdzc3JiYmMjKzLu7u8jIyJubnPLy9M7Ozr2/wUlJSTo6OsLCwmRkZDY2NtDQ0DIyMr29vaytsKysrC4uLra2ttHS1CUlJtXX2MrKy6+vr5qamiEhIczMzM3O0LS0tMTExMbGxsbIyt7e4I2Njby8vOTl5qioqMPEx+rr7KqqrOjo6np6fNTV17i4uMzNzo+Pj3Z3ePHx8rm7veDh4uzt7r/AwoeHh8PDxM/Q0sTFx42OkMDBw+fo6bW3utjZ2vHy8tHR0sjJyru8v+Xl5d3d3dzc3mNjZJ+fn2pra+np6t/f4OLj5NPT1V9fYFdXV8HCxsDBxbO0tq6vsqqsrk9PT0tLS5KTlGdnZ4uMjn1+gHd4e1JTUzs7PEJCQzMzMysrK+fn6P7+/v////39/fPz8+7u7/z8/Pv7+/f39/b29vr6+vj4+Pn5+e7u7vLy8u/v7+3t7ezs7PDw8Ozs7fHx8fDw8fb29/Ly8/X19fr6+/z8/fn5+tvc3e/v8HNzdKmpqvf3+CMjJPDx8fP09OPk5ZmZmvj5+Xt8flBQUP39/mtsbvLz8+/w8Nra3NXW15+govr7+x8fH7m5uicnJ+fn6ezt7Zqcn7Kzs7S0s1hYWLe4uvz9/aanqq2trf3+/ouLi2NkZqOjo5aXmqKkppeYmmBgYPv7/JSVl4ODg4eHihcXFw8PD/7//9HS0kBAQOHh4mhoa0RERDAwMPf4+AcHB+vr7NfX11xcXKenp5manJqameXm6ExMTcjHyfv8/G9vb/j4+UdHRywsLHN0dj4+PsrLzTQ0NObm6Obn6efm6Ly9v39/fzc4OL2+v+3s7fb39wAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMUExNDA3QjE2NzExRTNBMUE1RTA3Qjc0NDg0NDMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyMUExNDA4QjE2NzExRTNBMUE1RTA3Qjc0NDg0NDMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDIxQTE0MDVCMTY3MTFFM0ExQTVFMDdCNzQ0ODQ0MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDIxQTE0MDZCMTY3MTFFM0ExQTVFMDdCNzQ0ODQ0MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAD/ACwAAAAA9AHtAAAI/wD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t1LMtInOUwOeBBgia/hw3TrpPDHuPErB4gjS07LgPEKDz5YiPDgL0WlyaBDe92EIgEESAQh7fHXRLTr11UF+BtwUIi/BbBz62b6wh+Jg3H8WdhNvPjQGP6oHMyEIsgj49Cj59zkj85BSr8ufJbOvfvLAOLgPf83GMEfKO/o05+klOQCpYNdWKufT/9j+QwHr/hTUb+/f4sI+OPEQSL4k8V/CCbYkH4FHGQKCjuMp+CEFP4T3DQHaWJAAu9V6CGCnKDAiIQECeLPJh+m2F8lG5I4kDX+vKHijPPx4U8nBwHgzxY09ujdAf7UcBAb/njh45HR6SfFQZz4gwNqSEapWwb+HLBcAthEIuWWr33iDzdQFjSIP5dwaSZomBhggIsCeeHPBGfGGZmJnhw0i29y5skXZyIctIs/HegpKF4DyGeQl98MqihdEFR5kCXZvMLmopSmpYA/NyCEgT+mVOrpWplkQ8SkdvgDwaeoosWNeQcFaESqsJL/VR4eBxnhTxSx5gpWoWUcdIc/J+gqLFcFHmiQJOIEEeawzFLVjT8tHAQJPeJ02uy1UllyQQ/LDrQaBdiG+xQk+ogTwEGVCSnuuktt4E8FtfqDALv0ItUbCwc9y0G9/BLFw60HiYLCk/0W/JMc/mBoECSNZKOJwRDvlIk4OCBkIrwRZ2wTJClcUKZB+fjDhsYk0zSmAvE+U/LKMD3w5kEu+KMDyzSz1ASgB3mJQc08o1SgBwdF8gs2mPRs9EgCL4LQO/6gfPTTHj2SRDaFGWSCPx9ArfVGkKxap0HA+FPH1mRj5HI3B7HgD9Bltz3RPrf56o8tbtcNUQ2OGhQJNkTb/+33Qk1uIO0KJ/5teNBYbleQBv44cvjjA5GLAie1+SME5JhXhrZBSgiHOeRM+CPAQQT4s+/nh8sgb9AXBKMl6n+XHq1BjwQhDuWw+01JNgYoTtDVTude9yM9oPBxQQX4U4zwfpcKrkFl+NMM83a34s8yB+HhjwbU103CbAdVIg4Rr3dP9qV8HPRIMOIcb77WmFxA/kEj+DPO+2RHkoI4mRy0gOX4IxtnPnEQ5LwggFurAwANoj07IFBrtsGNQTCBghSU74E9G8fagja1/mHQaBOz4EFa4A9JfNBokSDCBYpmECT4o1cn7NnV7meQI8QthjybAZ4MQgF/PACHNIsEOf844I8rLAcF9JgUEAvGhUY0xoEGwU42WLjEiKmgMRfwR4QOsgh/4K6KBusGChozRmx0qCDNiFFaHqEJTWCiEm1soyUs4YAJeBCMXIlEEBrDmDHe4SDWw55YTKGAJjgBGF2wnTgukABxOFIcfPzSMyBARTxaBW6RzKIMDuIGH4YlEkSMpD+IkIIUBKOUKZCHCUyQhRC8ojHYMMEyzmPJqTxiB6LMIhMOEgAndWsroTNACAbQASQ0QRKReEQklrnMglACD+YYQTYawwdy/LKWStFeJMvROTJkiG9n7Eoi/IGfimBCBF34BWNusA0lYrMoAeIjChzAHH1cc1Nf7Mo3/BH/B2lFohLUcCdBKEECXPpDEQIYh+/eSRTiRTJTlMBGAi44kMq86ivL8Ic+KvBGX7hCDWFgwxP60AAJDEEOklgo7WSwKsZgQwMsCCdDgfKJMfLRiP8YZz4HosPLfYUS8mAMOPjgjAdcAxeFyAIaiBEIODSgChLQwzBkWhBIuKAZi8iiP5IggDvO1CdSiCQKvuYmHhxkAv6YxSeRsBhRMmaR4HjHMbIAjR9UgaLSqkQZTuDSOljrqzwhIR9dJ5D//cYgTUqUWCLhgG3UYAAR6IFb+5gAeXTgaw0hAGf8cYED/BGwObFEAiJprH8864cGCZUB8PoVSKigrRcIgi00wIFF/4yWj+LARfAYMg4LQNIfhcAYaGsSs0huYyCe+NIvIbFPr4KFBOpMmBM2QSJTdAMJ5cBGY8SBood0ggG3LUcJrjlcllggkti4I6QkdRBW+IMcYpHEavwRAQIuxBJ4iEIPDDCyiFziCElgzAg2949IWOISVC3vSCixRz5GoCCLmNxBOrBDr1ACANP8xUUfAgmVPqQSW9ijOFTwAVakYIxEyEefFFySHkayQQTh00HIkdavsEER/kABA9x3kkgs4Lf+MMAiVqBdfxyBxSSJDx8vgCOCUHhABknuO7oSiUL54x1Zi2IlKkGJSJBXI3fY1EHdAIk71GG05UTyRxzKx0wVBP+tqC1IAC6QAoFGxRPuugAQXAQJWJjhDH3wgwSesARV5OELp1gzCRYjDjt8ABJo8AcD1AwSB9i0McopyK+CRbse8C8rkYCRPxhBq9R8YQhpAMQh9sCHQlyjDldYgw1scK6PUKIA2r2AB7iQnapRmiM6lKd9CXIJOpPKH7vAyiN04I8E1KGS/zAFL9aAhhOM9tIXyAY2cHACOpzBBc7ViCQ6kOFXAuDXHIGEifhoz4PIAwWiQJcar9K5RtByIJTgRTWmEQyXLmIHQHZraT3SiQdoFRv9RHdGOBFwf6jsINPwR6kLEr0DXgVIG/7HLT5wCCf6IxsgUIc+bouCX3CDAyb/QAIJSPACE/Q3JJvIRxZR0I6EK7wiNowkgQsSBX+4QW4jwAoZZoOaR3wgBP32xyBU8IJvjDEbhSCBA7zckk0wYJoye/TNJ+IuPoowbf6weEEYzq2rgCKL3CgHN2yaiG5QwhxZ7ME+fB0TTnTAAIyRBzCgvXWFmEKrjYmzQSrgD8HRDhwewwoEApxjelgDXJZg2gWEwNqYYEIIDU5AIYDhiS/3/R+2ieTLjyWOdhukHP7YeVU0oQACdGI8LNAuBjCbE6NrAOsaXcDUP2+QrjcmCQkWCCQQT/eBnPe4XiEBJDWQYGVS4vmosPNJLuECBLR1lA+oAd8VfgncM2bgB3GX/3AJorojc+URGfUHjAlyinHgYR4SqIL8JWCGdAR/JYwVAF9dyoo38PjX3xNJK5YQ8TGABPEs5UAs+yQOMCQQlHAHvGADyoAIdOAN8cAKGOgFD5AFPFB5LREAQtACWnUBuFAAO4VkggVL9ycQeCN2BEEdYKIVYeMkJTAQlwAFEvADiKAP3udW8lBrNXEJOfAAt4UNHCAE8YZkxRZJIcAQCGMdtJMCCeBhUuEJKCAOQjAe0tYA5yAIt5UEJkAC+3AEZEiGxXAFjOAkHggTlcACCNADWKIPIUACoOB5lhSAfKQuCtEJX4IQ9WNzVoE3xgIJUwAH5zAIT6cDbLCGj3ADAv/CE5GABwuwB9wAAi0QBW8gCtIHRPMFS1RIEI9ABFRzEJwxelVBJHTzD6pwDSswRgZAGAvxCBXwDK9Ugz7xCATwBgxgBxpgAQCQiZuIQZpwW43RhA3hiLs1EMkDBFlRCQEGAFTgccHQVQthCjPQYAZihzcBCaYAAQLQAV0AAEIAAQEQjPijOpEkIw0RAqZyEAjDPVkhA0DGDUbwiQMBd+s0AJBxFJpQAWVQDAXgAzWQAZZgjtRTHnw0RQ4RPbRhEJfiZlmhAAIADHGgjY/AOD40bEtRCZ6wCzVQAxCQAZ2wfQGUCUXWGO3wEDSWklFkANhgj2BBCSSEDQb4FI+QCZ//4ACudwkwyTzbIErq2BDUkYoGsU80dBaUYCM9QHu2RAmZYAk9KTznxUcJ8DAO8QjY0DsHUQj+8DxmIQr7xAj/JxCoIAmrMAqlUAnJxHstEQmM1xhs4xCQQDhMKRChk2ll4Qaj9Q3F9w+PAAssIAFjEAi9AAhp8ARKwAZxkAkGyZYYQSSRtEsQkQXvAnZxORYsME0IIFOQwAlcAAiE4A30gA0XgA30QAdkAAgNcAYygAe0oI2OiRFT2RjZYEIQgRz8YRDBYXiL1QFj5E2p0QY/YAdE9nvyEF3NtgheEA1gUAZmQAG5sIaxWRGU8Ep8xJsPwQUGgjjB0JhREQnlgQLP/7AssdAKi/BbRlgAcfAelDAOMdAORSYOr7AHdZAGVdAHLIAHuYAJsDmdDPEnkbQ8EUEdxyAtOIACTQYWfwIPO4cJy9BgSTADLnB/lbAND6APY4QCilALfxB/+AAH80AOanAJmOCd/vkPs8kYFwCED/EICaCV5OEP+wgWnTM9AvEIWtBS+lAAJKk+4yAARMAYCTAC1QAGEvAGZ5AGcAAHUbUL4xAAlpAKvvAIkNCfn0cJQXqdE0E8EmYQxVBhX/EsPTB1EEAHWZQCE2CiBSYCt8cYrzAIdGAIzFkFTwADT1AGaTAGevoEXDAEReAAsHAJzGCllIYwAUoREQeIA2Ergv/nFZBwDH3EGNkwAOE2EZZQAIPgfcHADepwDAdwDYQAa3+ADGsABjbQAE9wBjAwBAqQaNNZGUtmmxJhQ7lZEFTyYGJBCSpwAjhQDkDwVxshCnigAh6AAwlwaVRJBK8AD/QgD7bgBdJgAxLQAGFAqMOlR5FElBKhOsBZEJFAZ9IpGQFwBxUAATNABqwQAYKAA2pCmnwED7VgA2fAC6nAli7GR7UqEbeqPrZzgtEhR5zwCd0wCzggVL0AAw0wBWqKTUO3ZAkqEZRwAcB3ECZylPUBCSywKReQBTAgAfOgC9aKTZEADw9lEY8AD9VyEAoUAwnyCOYwRosQCGZQBhBQqQr/dq+Nka8TQQeFYxA3My8KwgJ7dAEmYANLcAZQEJXvFE/b9bATYQ7+4AMHUQL+YAIUUgkdkEVJwABvsARvoAbhWkuR4HGNMWUXEVaBYhCakCwLaxx4xhj6cA5LsARmQF03K0rMeBEO4A+soD6vkHgewgOEo3RXYAZuoAVtELIflEa45bQTIT6NwFpjopEU8ghN0G8o0ALFUARaoAruAFgpFElKgxEpdAGVqkMsqyKasAB4lwAHQAJsUATd0KNLhLOMIUgYwZWO+w9hgwQ9YgkDcKz08AI8oAC7kA60G0M9h1vdhRE6IrUGQSTgpyIBQAhE8AsRYAQikAd4UA+WoLjC/xMJ1tkYIAC+BmEbY6O2KCAPbaseomANjKAIc9gNCuAADhALYWs+2sRHuIsRjWIlLZkNNqsiFMAAG7AB+UAC20ABCqAGo3AK5vs4SrZdzYsRzOEcB8FXLIokklAMXtAOUSAEItANoTAMkxAO7Ws34htJMagR7KGQBtEbSnAmmuAGM4AAMxADE+ACk9AGukAKlBDBbrO/jdG/GVE/dfkPySNBZ/IIdxADAnAETTABHzAK/RAAPEml7zPBfVTBGUFhOXAQ3SQomuACJFAG21AC3YBotKAJ7KDFzPMI45t3QmwQgcRL/iAPivIIoLAL5NANDuAIARAJydBl2lDHPfMBov+ksxnxJ8boTBKVvFyiCZvgepzQCa6QTHAMO1zsD9zlEZeARJNCOBs8KGzEk11WpYhcM6HIwqtMEJggUQnmKqkiIVWaO7brD60AErZAJgchGz51ot2xvBQMEi6jhwRhI2YlzNzxCNfHGIvwygURNuVQPpFwCSGTAivIzLCRy3jpEZXgRD2wADMwDVl6AcjHzdFBzG+1uxvRCS2loo2AAJSrzsRxspGEAdKsPt1QDHRYkPbMHc8SSeYQ0JTCzp7sxQYtJ7UTSWa70IIy0Hw0OhAtKIxbzBWdJ5EgWXz00BkdJ4QXSRT90XGC0OKQxCSNJI+gDw6d0nEiCoDHGDjl0lz/Yqjb9Vk0vSX/w0cwmtNSQmF8pA4+zSUhw0czM9RSQpl8BI9IjSSdrK1XsQklkAGXsM9NHRM6wkevsM1OUQczlw09MAIeAAw8QAGaeNVGQWORFMZXQbWTpaIpcAOFQAUyUAKcQHVozRPdF0ngoLRJIWpv7VbikAQrMA1AQAITEACUkMJ57RE2kq19CRVWFtiU3RgGQA+CMAvAUAOfUAmM3dgV0SiilAQqENlN4QjIWtmq3RgJEASC8AJHIAOgoAn5C9oYoW6TlQAbAADA8AagIAnAHdzCPdzEXdzGfdzIDdzlWBFusAINt9rQTZspwAdRIAAk4AhrCApI8ALc3d3e//3dA3BYtv0PnkCM0X3e6H3eGFDKLRrPb2Xe6b3aQYDTBuED51124/0PjoB38d3f/u1WUDgRkJCljTEDlRAAXGAM6LAHONAe4pDa//0KVJgDc9MFwJADK5fhGV4GhhAPF1Ax+U2lJMDf/13i/Z0Apr0QkOAlkSQEqlylAaAAccAFUeAB5YABPYCc/p2MA3EziKAHnicLP3AB3PDZzGwK9msKelAOz23iTk7ZBmCVEEEJomAEyIoCb+AJ9mu/oTAKo/AFpBDmXyALEFAGgdAB7aAOOPAKEE7ZCv0PlGDfWVAEnmcPgIACfEAKtZ3RlBAHjvDnk/AFwLAHJ/nkhj5ZB/9grStOAFawf4xxAuNwB38+6ZT+5wSgAKGwCl8gCabwBcIwB+vwA7PAComwAuzz1owgqwOBCpMADCgAAlnwBhMw67Re682wGi1AA53X2AEQyJNOAGipBa1gAoNADwlwAY+U7Mq+7Mze7M7+7Mt+AdMwB9YaCX4uBuQwAhdwARvAAvxQ6eAe7o5AAHcwDpOAlqTQBliAB1xQDABgAeXwDR0jDiCwDv+XCpOwD23+1tMgCQ5wC41NCr5O6QQQCl9gCmIgC7swAXjaAA7/8BAf8RI/8RRf8RafBjywCuPQmI/g66EQCm7ABR9/D+Je8iVP7uPgCehOAwrQDTUwD3fgCV/7MEEOIAutMAszkPM6v/M8zwXjQABGPp2PIAwDD+53oADjEAqTsPRM3/RO//RQH/VSP/VMHwr3MAoTMQq+fgeh4AmSbvJgH/bjfvSe4PVxIOUD4cSOsOnJLdyhEAelYNuUMAkEIPZ2f/d4H/YEIAmKCwml8PV5H/jiPg6ugBCP0Al5rwB8H+KP0PiO//iQH/mSP/mUX/mW//hCDAmXv/mcH/l22PmNb9X5PfqkX/qmf/qon/qqv/qs3/qu//qwH/uyP/u0X/u2f/u4n/u6v/u83/u+//vAH/zCP/zEX/zGf/zIn/zKv/zM3/zO//zQH/3SP/3UX/3Wf/1GERAAOw==" />';


  function Player(controller, options) {
    var player = this;
    options || (options = {});

//    this.frameData = [];

    this.options = options;
    this.recording = options.recording;

    this.controller = controller;
    this.resetTimers();
    this.setupLoops();
    this.controller.connection.on('ready', function () {
      player.setupProtocols();
    });

    this.userHasControl = false;


    if (options.recording) {
      if (Object.prototype.toString.call(options.recording) == '[object String]') {
        options.recording = {
          url: options.recording
        }
      }
      this.setRecording(options.recording);
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      document.body.addEventListener('keydown', function (e) {
        if (e.which === player.options.pauseHotkey) {
          player.toggle();
        }
      }, false);
    });

  }

  Player.prototype = {
    resetTimers: function (){
      this.timeSinceLastFrame = 0;
      this.lastFrameTime = null;
    },

    setupLoops: function () {
      var player = this;

      // Loop with explicit frame timing
      this.stepFrameLoop = function (timestamp) {
        if (player.state != 'playing') return;

        player.sendFrameAt(timestamp || performance.now());

        requestAnimationFrame(player.stepFrameLoop);
      };


    },

    // This is how we intercept frame data early
    // By hooking in before Frame creation, we get data exactly as the frame sends it.
    setupProtocols: function () {
      var player = this;
      // This is the original normal protocol, used while in record mode but not recording.
      this.stopProtocol = this.controller.connection.protocol;

      // This consumes all frame data, making the device act as if not streaming
      this.playbackProtocol = function (data) {
        // The old protocol still needs to emit events, so we use it, but intercept Frames
        var eventOrFrame = player.stopProtocol(data);
        if (eventOrFrame instanceof Leap.Frame) {

          if (player.pauseOnHand) {
            if (data.hands.length > 0) {
              player.userHasControl = true;
              player.controller.emit('playback.userTakeControl');
              player.setGraphic();
              player.idle();
            } else if (data.hands.length == 0) {
              if (player.userHasControl && player.resumeOnHandLost) {
                player.userHasControl = false;
                player.controller.emit('playback.userReleaseControl');
                player.setGraphic('wave');
              }

            }
          }

          // prevent the actual frame from getting through
          return {type: 'playback'}
        } else {
          return eventOrFrame;
        }
      };

      // This pushes frame data, and watches for hands to auto change state.
      // Returns the eventOrFrame without modifying it.
      this.recordProtocol = function (data) {
        var eventOrFrame = player.stopProtocol(data);
        if (eventOrFrame instanceof Leap.Frame) {
          player.recordFrameHandler(data);
        }
        return eventOrFrame;
      };

      // Copy methods/properties from the default protocol over
      for (var property in this.stopProtocol) {
        if (this.stopProtocol.hasOwnProperty(property)) {
          this.playbackProtocol[property] = this.stopProtocol[property]
          this.recordProtocol[property] = this.stopProtocol[property]
        }
      }

      // todo: this is messy. Should cover all cases, not just active playback!
      if (this.state == 'playing') {
        this.controller.connection.protocol = this.playbackProtocol
      }
    },



    // Adds playback = true to artificial frames
    sendFrameAt: function (now) {

      if (this.lastFrameTime){
        // chrome bug, see: https://code.google.com/p/chromium/issues/detail?id=268213
        // http://jsfiddle.net/pehrlich/35pTx/
        // console.assert(this.lastFrameTime < now);
        if (now < this.lastFrameTime){
          // this fix will cause an extra animation frame before the lerp frame advances. no big.
          this.lastFrameTime = now;
        }else{
          this.timeSinceLastFrame += (now - this.lastFrameTime);
        }
      }

      this.lastFrameTime = now;

      console.assert(!isNaN(this.timeSinceLastFrame));


      var timeToNextFrame;

      // handle frame dropping, etc
      while ( this.timeSinceLastFrame > ( timeToNextFrame = this.recording.timeToNextFrame() ) ){
        this.timeSinceLastFrame -= timeToNextFrame;
        if (!this.recording.advanceFrame()){
          this.pause();
          this.controller.emit('playback.playbackFinished', this);
          return
        }
      }

      this.sendFrame(
        this.recording.createLerpFrameData(this.timeSinceLastFrame / timeToNextFrame)
      );

    },

    sendFrame: function(frameData){
      if (!frameData) throw "Frame data not provided";

      var frame = new Leap.Frame(frameData);

      // send a deviceFrame to the controller:
      // this frame gets picked up by the controllers own animation loop.

      this.controller.processFrame(frame);
      return true
    },

    sendImmediateFrame: function(frameData){
      if (!frameData) throw "Frame data not provided";

      var frame = new Leap.Frame(frameData);

      // sends an animation frame to the controller

      this.controller.processFinishedFrame(frame);
      return true
    },

    setFrameIndex: function (frameIndex) {
      if (frameIndex != this.recording.frameIndex) {
        this.recording.frameIndex = frameIndex % this.recording.frameCount;
        this.sendFrame(this.recording.currentFrame());
      }
    },


    // used after record
    stop: function () {
      this.idle();

      delete this.recording;

      this.recording = new Recording({
        timeBetweenLoops:       this.options.timeBetweenLoops,
        loop:                   this.options.loop,
        requestProtocolVersion: this.controller.connection.opts.requestProtocolVersion,
        serviceVersion:         this.controller.connection.protocol.serviceVersion
      });

      this.controller.emit('playback.stop', this);
    },

    // used after play
    pause: function () {
      // todo: we should change this idle state to paused or leave it as playback with a pause flag
      // state should correspond always to protocol handler (through a setter)?
      this.state = 'idle';
      this.hideOverlay();
      this.controller.emit('playback.pause', this);
    },

    idle: function () {
      this.state = 'idle';
      this.controller.connection.protocol = this.stopProtocol;
    },

    toggle: function () {
      if (this.state == 'idle') {
        this.play();
      } else if (this.state == 'playing') {
        this.pause();
      }
    },

    // switches to record mode, which will be begin capturing data when a hand enters the frame,
    // and stop when a hand leaves
    // Todo: replace frameData with a full fledged recording, including metadata.
    record: function () {
      this.clear();
      this.stop();
      this.state = 'recording';
      this.controller.connection.protocol = this.recordProtocol;
      this.setGraphic('connect');
      this.controller.emit('playback.record', this)
    },

    // if there is existing frame data, sends a frame with nothing in it
    clear: function () {
      if (!this.recording || this.recording.blank()) return;
      var finalFrame = this.recording.cloneCurrentFrame();
      finalFrame.hands = [];
      finalFrame.fingers = [];
      finalFrame.pointables = [];
      finalFrame.tools = [];
      this.sendImmediateFrame(finalFrame);
    },

    recordPending: function () {
      return this.state == 'recording' && this.recording.blank()
    },

    isRecording: function () {
      return this.state == 'recording' && !this.recording.blank()
    },

    finishRecording: function () {
      // change to the playbackHandler which suppresses frames:
      this.controller.connection.protocol = this.playbackProtocol;
      this.recording.setFrames(this.recording.frameData);
      this.controller.emit('playback.recordingFinished', this)
    },


    loaded: function () {
      return this.recording.loaded();
    },

    loading: function(){
      return this.recording.loading;
    },


    /* Plays back the provided frame data
     * Params {object|boolean}:
     *  - frames: previously recorded frame json
     * - loop: whether or not to loop playback.  Defaults to true.
     */
    play: function () {
      if (this.state === 'playing') return;
      if ( this.loading() || this.recording.blank() ) return;

      this.state = 'playing';
      this.controller.connection.protocol = this.playbackProtocol;

      var player = this;

      // prevent the normal controller response while playing
      this.controller.connection.removeAllListeners('frame');
      this.controller.connection.on('frame', function (frame) {
        // resume play when hands are removed:
        if (player.resumeOnHandLost && player.autoPlay && player.state == 'idle' && frame.hands.length == 0) {
          player.play();
        }

        // The default LeapJS callback processes the frame, which is what we do now:
        player.controller.processFrame(frame);
      });

      // Kick off
      this.resetTimers();
      this.recording.readyPlay();
      this.stepFrameLoop();

      this.controller.emit('playback.play', this);
    },

    // this method replaces connection.handleData when in record mode
    // It accepts the raw connection data which is used to make a frame.
    recordFrameHandler: function (frameData) {
      // Would be better to check controller.streaming() in showOverlay, but that method doesn't exist, yet.
      this.setGraphic('wave');
      if (frameData.hands.length > 0) {
        this.recording.addFrame(frameData);
        this.hideOverlay();
      } else if ( !this.recording.blank() ) {
        this.finishRecording();
      }
    },


    // Accepts a hash with any of
    // URL, recording, metadata
    // once loaded, the recording is immediately activated
    setRecording: function (options) {
      var player = this;

      // otherwise, the animation loop may try and play non-existant frames:
      this.pause();

      // this is called on the context of the recording
      var loadComplete = function (frames) {

        this.setFrames(frames);

        if (player.recording != this){
          console.log('recordings changed during load');
          return
        }

        if (player.autoPlay) {
          player.play();
          if (player.pauseOnHand && !player.controller.streaming() ) {
            player.setGraphic('connect');
          }
        }

        player.controller.emit('playback.recordingSet', this);
      };

      this.recording = options;

      // Here we turn the existing argument in to a recording
      // this allows frames to be added to the existing object via ajax
      // saving ajax requests
      if (!(options instanceof Recording)){

        this.recording.__proto__ = Recording.prototype;
        Recording.call(this.recording, {
          timeBetweenLoops: this.options.timeBetweenLoops,
          loop:             this.options.loop,
          loadProgress: function(recording, percentage, oEvent){
            player.controller.emit('playback.ajax:progress', recording, percentage, oEvent);
          }
        });

      }


      if ( this.recording.loaded() ) {

        loadComplete.call(this.recording, this.recording.frameData);

      } else if (options.url) {

        this.controller.emit('playback.ajax:begin', this, this.recording);

        // called in the context of the recording
        this.recording.loadFrameData(function(frames){
          loadComplete.call(this, frames);
          player.controller.emit('playback.ajax:complete', player, this);
        });

      }


      return this;
    },


    hideOverlay: function () {
      if (!this.overlay) return;
      this.overlay.style.display = 'none';
    },


    // Accepts either "connect", "wave", or undefined.
    setGraphic: function (graphicName) {
      if (!this.overlay) return;
      if (this.graphicName == graphicName) return;

      this.graphicName = graphicName;
      switch (graphicName) {
        case 'connect':
          this.overlay.style.display = 'block';
          this.overlay.innerHTML = CONNECT_LEAP_ICON;
          break;
        case 'wave':
          this.overlay.style.display = 'block';
          this.overlay.innerHTML = MOVE_HAND_OVER_LEAP_ICON;
          break;
        case undefined:
          this.overlay.innerHTML = '';
          break;
      }
    }

  };

  // will only play back if device is disconnected
  // Accepts options:
  // - frames: [string] URL of .json frame data
  // - autoPlay: [boolean true] Whether to turn on and off playback based off of connection state
  // - overlay: [boolean or DOM element] Whether or not to show the overlay: "Connect your Leap Motion Controller"
  //            if a DOM element is passed, that will be shown/hidden instead of the default message.
  // - pauseOnHand: [boolean true] Whether to stop playback when a hand is in field of view
  // - resumeOnHandLost: [boolean true] Whether to resume playback after the hand leaves the frame
  // - requiredProtocolVersion: clients connected with a lower protocol number will not be able to take control of the
  // - timeBetweenLoops: [number, ms] delay between looping playback
  // controller with their device.  This option, if set, ovverrides autoPlay
  // - pauseHotkey: [number or false, default: 32 (spacebar)] - keycode for pause, bound to body
  var playback = function (scope) {
    var controller = this;
    var autoPlay = scope.autoPlay;
    if (autoPlay === undefined) autoPlay = true;

    var pauseOnHand = scope.pauseOnHand;
    if (pauseOnHand === undefined) pauseOnHand = true;

    var resumeOnHandLost = scope.resumeOnHandLost;
    if (resumeOnHandLost === undefined) resumeOnHandLost = true;

    var timeBetweenLoops = scope.timeBetweenLoops;
    if (timeBetweenLoops === undefined) timeBetweenLoops = 50;

    var requiredProtocolVersion = scope.requiredProtocolVersion;

    var pauseHotkey = scope.pauseHotkey;
    if (pauseHotkey === undefined) pauseHotkey = 32; // spacebar

    var loop = scope.loop;
    if (loop === undefined) loop = true;

    var overlay = scope.overlay;
    // A better fix would be to set an onload handler for this, rather than disable the overlay.
    if (overlay === undefined && document.body) {
      overlay = document.createElement('div');
      document.body.appendChild(overlay);
      overlay.style.width = '100%';
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '-' + window.getComputedStyle(document.body).getPropertyValue('margin');
      overlay.style.padding = '10px';
      overlay.style.textAlign = 'center';
      overlay.style.fontSize = '18px';
      overlay.style.opacity = '0.8';
      overlay.style.display = 'none';
      overlay.style.zIndex = '10';
      overlay.id = 'connect-leap';
      overlay.style.cursor = 'pointer';
      overlay.addEventListener("click", function () {
        this.style.display = 'none';
        return false;
      }, false);

    }


    scope.player = new Player(this, {
      recording: scope.recording,
      loop: loop,
      pauseHotkey: pauseHotkey,
      timeBetweenLoops: timeBetweenLoops
    });

    // By doing this, we allow player methods to be accessible on the scope
    // this is the controller
    scope.player.overlay = overlay;
    scope.player.pauseOnHand = pauseOnHand;
    scope.player.resumeOnHandLost = resumeOnHandLost;
    scope.player.requiredProtocolVersion = requiredProtocolVersion;
    scope.player.autoPlay = autoPlay;

    var setupStreamingEvents = function () {
      if (scope.player.pauseOnHand && controller.connection.opts.requestProtocolVersion < scope.requiredProtocolVersion) {
        console.log('Protocol Version too old (' + controller.connection.opts.requestProtocolVersion + '), disabling device interaction.');
        scope.player.pauseOnHand = false;
        return
      }

      if (autoPlay) {
        controller.on('streamingStarted', function () {
          if (scope.player.state == 'recording') {
            scope.player.pause();
            scope.player.setGraphic('wave');
          } else {
            if (pauseOnHand) {
              scope.player.setGraphic('wave');
            } else {
              scope.player.setGraphic();
            }
          }
        });

        controller.on('streamingStopped', function () {
          scope.player.play();
        });
      }
      controller.on('streamingStopped', function () {
        scope.player.setGraphic('connect');
      });
    }

    // ready happens before streamingStarted, allowing us to check the version before responding to streamingStart/Stop
    // we can't call this any earlier, or protcol version won't be available
    if (!!this.connection.connected) {
      setupStreamingEvents()
    } else {
      this.on('ready', setupStreamingEvents)
    }

    return {}
  }


  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('playback', playback);
  } else if (typeof module !== 'undefined') {
    module.exports.playback = playback;
  } else {
    throw 'leap.js not included';
  }

}).call(this);
}( window ));
//CoffeeScript generated from main/screen-position/leap.screen-position.coffee
/*
Adds the "screenPosition" method by default to hands and pointables.  This returns a vec3 (an array of length 3)
with [x,y,z] screen coordinates indicating where the hand is, originating from the bottom left.
This method can accept an optional vec3, allowing it to convert any arbitrary vec3 of coordinates.

Custom positioning methods can be passed in, allowing different scaling techniques,
e.g., http://msdn.microsoft.com/en-us/library/windows/hardware/gg463319.aspx (Pointer Ballistics)
Here we scale based upon the interaction box and screen size:

options:
  scale, scaleX, and scaleY.  They all default to 1.
  verticalOffset: in pixels.  This number is added to the returned Y value.  Defaults to 0.



controller.use 'screenPosition', {
  method: (positionVec3)->
    Arguments for Leap.vec3 are (out, a, b)
    [
      Leap.vec3.subtract(positionVec3, positionVec3, @frame.interactionBox.center)
      Leap.vec3.divide(positionVec3, positionVec3, @frame.interactionBox.size)
      Leap.vec3.multiply(positionVec3, positionVec3, [document.body.offsetWidth, document.body.offsetHeight, 0])
    ]
}
More info on vec3 can be found, here: http://glmatrix.net/docs/2.2.0/symbols/vec3.html
*/


(function() {
  var screenPosition;

  screenPosition = function(options) {
    var baseScale, baseVerticalOffset, position, positioningMethods;
    if (options == null) {
      options = {};
    }
    options.positioning || (options.positioning = 'absolute');
    options.scale || (options.scale = 1);
    options.scaleX || (options.scaleX = 1);
    options.scaleY || (options.scaleY = 1);
    options.scaleZ || (options.scaleZ = 1);
    options.verticalOffset || (options.verticalOffset = 0);
    baseScale = 6;
    baseVerticalOffset = -100;
    positioningMethods = {
      absolute: function(positionVec3) {
        return [(window.innerWidth / 2) + (positionVec3[0] * baseScale * options.scale * options.scaleX), window.innerHeight + baseVerticalOffset + options.verticalOffset - (positionVec3[1] * baseScale * options.scale * options.scaleY), positionVec3[2] * baseScale * options.scale * options.scaleZ];
      }
    };
    position = function(vec3, memoize) {
      var screenPositionVec3;
      if (memoize == null) {
        memoize = false;
      }
      screenPositionVec3 = typeof options.positioning === 'function' ? options.positioning.call(this, vec3) : positioningMethods[options.positioning].call(this, vec3);
      if (memoize) {
        this.screenPositionVec3 = screenPositionVec3;
      }
      return screenPositionVec3;
    };
    return {
      hand: {
        screenPosition: function(vec3) {
          return position.call(this, vec3 || this.palmPosition, !vec3);
        }
      },
      pointable: {
        screenPosition: function(vec3) {
          return position.call(this, vec3 || this.tipPosition, !vec3);
        }
      }
    };
  };

  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('screenPosition', screenPosition);
  } else if (typeof module !== 'undefined') {
    module.exports.screenPosition = screenPosition;
  } else {
    throw 'leap.js not included';
  }

}).call(this);

//CoffeeScript generated from main/transform/leap.transform.coffee
(function() {
  var __slice = [].slice;

  Leap.plugin('transform', function(scope) {
    var noop, transformDirections, transformMat4Implicit0, transformPositions, _matrix;
    if (scope == null) {
      scope = {};
    }
    noop = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _matrix = new THREE.Matrix4;
    scope.getMatrix = function(hand) {
      var matrix;
      if (scope.transform) {
        matrix = typeof scope.transform === 'function' ? scope.transform(hand) : scope.transform;
        if (window['THREE'] && matrix instanceof THREE.Matrix4) {
          return matrix.elements;
        } else {
          return matrix;
        }
      } else if (scope.position || scope.quaternion || scope.scale) {
        _matrix.set.apply(_matrix, noop);
        if (scope.quaternion) {
          _matrix.makeRotationFromQuaternion(typeof scope.quaternion === 'function' ? scope.quaternion(hand) : scope.quaternion);
        }
        if (scope.scale) {
          _matrix.scale(typeof scope.scale === 'function' ? scope.scale(hand) : scope.scale);
        }
        if (scope.position) {
          _matrix.setPosition(typeof scope.position === 'function' ? scope.position(hand) : scope.position);
        }
        return _matrix.elements;
      } else {
        return noop;
      }
    };
    transformPositions = function() {
      var matrix, vec3, vec3s, _i, _len, _results;
      matrix = arguments[0], vec3s = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _results = [];
      for (_i = 0, _len = vec3s.length; _i < _len; _i++) {
        vec3 = vec3s[_i];
        if (vec3) {
          _results.push(Leap.vec3.transformMat4(vec3, vec3, matrix));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    transformMat4Implicit0 = function(out, a, m) {
      var x, y, z;
      x = a[0];
      y = a[1];
      z = a[2];
      out[0] = m[0] * x + m[4] * y + m[8] * z;
      out[1] = m[1] * x + m[5] * y + m[9] * z;
      out[2] = m[2] * x + m[6] * y + m[10] * z;
      return out;
    };
    transformDirections = function() {
      var matrix, vec3, vec3s, _i, _len, _results;
      matrix = arguments[0], vec3s = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _results = [];
      for (_i = 0, _len = vec3s.length; _i < _len; _i++) {
        vec3 = vec3s[_i];
        if (vec3) {
          _results.push(transformMat4Implicit0(vec3, vec3, matrix));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    return {
      hand: function(hand) {
        var finger, matrix, _i, _len, _ref, _results;
        matrix = scope.getMatrix(hand);
        transformPositions(matrix, hand.palmPosition, hand.stabilizedPalmPosition, hand.sphereCenter);
        transformDirections(matrix, hand.direction, hand.palmNormal, hand.palmVelocity);
        _ref = hand.fingers;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          finger = _ref[_i];
          transformPositions(matrix, finger.carpPosition, finger.mcpPosition, finger.pipPosition, finger.dipPosition, finger.distal.nextJoint, finger.tipPosition);
          _results.push(transformDirections(matrix, finger.direction));
        }
        return _results;
      }
    };
  });

}).call(this);

//CoffeeScript generated from main/version-check/leap.version-check.coffee
(function() {
  var versionCheck;

  versionCheck = function(scope) {
    scope.alert || (scope.alert = false);
    scope.requiredProtocolVersion || (scope.requiredProtocolVersion = 6);
    scope.disconnect || (scope.disconnect = true);
    if ((typeof Leap !== 'undefined') && Leap.Controller) {
      if (Leap.version.minor < 5 && Leap.version.dot < 4) {
        console.warn("LeapJS Version Check plugin incompatible with LeapJS pre 0.4.4");
      }
    }
    this.on('ready', function() {
      var current, message, required;
      required = scope.requiredProtocolVersion;
      current = this.connection.opts.requestProtocolVersion;
      if (current < required) {
        message = "Protocol Version too old. v" + required + " required, v" + current + " available.";
        if (scope.disconnect) {
          this.disconnect();
          message += " Disconnecting.";
        }
        console.warn(message);
        if (scope.alert) {
          alert("Your Leap Software version is out of date.  Visit http://www.leapmotion.com/setup to update");
        }
        return this.emit('versionCheck.outdated', {
          required: required,
          current: current,
          disconnect: scope.disconnect
        });
      }
    });
    return {};
  };

  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('versionCheck', versionCheck);
  } else if (typeof module !== 'undefined') {
    module.exports.versionCheck = versionCheck;
  } else {
    throw 'leap.js not included';
  }

}).call(this);


//default variables
var debugging = false;

//default variables - Leap Motion
var hand_located = false; //if a single hand is currently located over leap motion
var gesture_action = "swap"; //current action to be performed if the hand goes off
var delay = 0; //current delay in frames
var delay_value = 15; //default delay assigned if any action is triggered by Leap Motion
var pinch_strength = 0; //pinch strength indicator
var startFrame, startAngle;

//show console messages if debugging variable is on
function debug(message) {
  if(debugging) {
    console.log(message);
  }
}

//var lastDate = Date.now();

//Define some vars required later
var new_screenshot_index = 0; //how many screenshots did we take
var w, h, ratio; //needed for screenshots
var video; //video element

//configure the behavior of the Leap Motion device
var controller;

//accordion shit
function setup_acc(title, content){
  $(title).click(function(){$(content).toggle(500);});
  $(title).click();
}

function setup_me(){
  $('#footer-container').after('<div class="row"><div id="current">0:00</div><div id="duration">0:00</div></div><div class="row screenshots"></div>');
$('body').append("<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'><link rel='stylesheet' href='css/font-awesome.min.css'><style>.row {  text-align: center;  font-weight: 150%;  font-family: Lucida Sans Unicode;  width: 80%;  right: 0;  margin-bottom: 40px;}#current, #duration {  width: 50%;  float: left;}.clickme {  box-sizing: border-box;  float: left;  width: 30%;  padding: 20px;  background-color: #FFF;  border: 2px solid #009;  color: #009;}.clickme:hover {  cursor: pointer;  background-color: #009;  border: 2px solid #009;  color: #FFF;}.row .clickme:nth-of-type(2),.row .clickme:nth-of-type(3) {  margin-left: 5%;}.screenshot {  width: 100%;  overflow: auto;  margin-bottom: 20px;  padding: 10px;  padding-right: 30px;  background-color: #EEE;  border-bottom: 1px solid #CCC;}.screenshot:hover {  cursor: pointer;}.screenshot .description {  text-align: left;  margin-top: 15px;}.screenshot canvas {  float: left;}.screenshots {  position: fixed;  float: 0;  top: 0;  height: 100%;  z-index: 10;  width: 20%;  overflow: auto;  background-color: #EEE;  -webkit-box-shadow: 0px 0px 17px 5px rgba(0,0,0,0.59);  -moz-box-shadow: 0px 0px 17px 5px rgba(0,0,0,0.59);  box-shadow: 0px 0px 17px 5px rgba(0,0,0,0.59);}.selected {  background-color: #BBB;}video {    position:relative;    z-index:0;}.overlay {    position: fixed;    top:50px;    left:50px;    width:50px;    height:50px;    z-index: 2147483647;    color: #FFF;    font-size: 200%;}body {  background-color: #000;}</style>");

  controller  = Leap.loop( {}, function(frame) {
      //show all the response shit from the device
      debug(frame);

      //ok, if we are allowed to process the input from the Leap Motion and if it shouldnt be delayed
      if(frame.valid && delay == 0) {
        if(!startFrame) { startFrame = frame; }
        //if we lost the hand
        if (hand_located && frame.hands.length == 0) {
          if(gesture_action == "swap"){
            action_snapshot();
            /* hack for exiting a full-screen mode: doesnt work for security reasons
            $('#video-active').trigger({
              type: 'keyup',
              which: 27 // Escape key
            });
            */
          }

          //reset values
          gesture_action = "swap";
          hand_located = false;
        } else if (frame.hands.length == 1) { //recognized a single hand
          if(hand_located){
            rotation = frame.hands[0].rotationAngle(startFrame);
            rotation_diff = rotation - startAngle;
          } else {
            startFrame = frame;
            startAngle = frame.hands[0].rotationAngle(startFrame);
          }

          //single-handed gestures
          if((gesture_action != "tap") && (gesture_action != "pinch")) {
            for(var gesture_index = 0; gesture_index < frame.gestures.length; gesture_index++) {
              if(frame.hands[0].pinch_strength > 0.5){
                gesture_action = "pinch";
                console.log(frame.hands[0].pinch_strength);
              }
            }
            if(gesture_action != "pinch") {
              for(var gesture_index = 0; gesture_index < frame.gestures.length; gesture_index++) {
                if(frame.fingers[1].carpPosition[1] > -10 || frame.fingers[1].carpPosition[1] < 10){
                  gesture_action = "tap";
                  action_toggle_play();
                }
              }
            }
          }
          hand_located = true;
        }
      } else { delay--; } //reduce delay by one frame
    });


  //during playback just update the time
  $(search_for).on(
     "timeupdate",
      function(event){
        //update timers
        onTrackedVideoFrame(this.currentTime.toFixed(1), this.duration.toFixed(1));
      }
    );

  //Get handles on the video and canvas elements
  video = document.querySelector('video');

  //Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
  video.addEventListener('loadedmetadata', function() {
    // Calculate the ratio of the video's width to height
    ratio = video.videoHeight / video.videoWidth;
    w = parseInt(video.videoWidth/4.0);
    h = parseInt(w * ratio, 10);
  }, false);
};

//update visuals of the timers
function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime);
    $("#duration").text(duration);
}

//toggle fullscreen mode
function action_toggle_fullscreen() {
  var elem = document.getElementById("video-active");

  if (
    document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    if (elem.requestFullscreen) { elem.requestFullscreen(); } 
    else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
    else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen(); }
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
  } else {
    if (elem.exitFullscreen) { elem.exitFullscreen(); }
    else if (elem.msExitFullscreen) { elem.msExitFullscreen(); }
    else if (elem.mozCancelFullScreen) { elem.mozCancelFullScreen(); }
    else { Document.exitFullscreen(); } 
  }
}

//play-pause toggle of the video element
function action_toggle_play() {
  if (video.paused) {
    video.play();
    change_icon('play');    
  } else {
    video.pause();
    change_icon('pause');    
  }
  delay = delay_value;
}

// Takes a snapshot of the video
function action_snapshot() {
  //dimensions
  this.width = w;
  this.height = h;
  //create canvas old-school style
  this.element = document.createElement('canvas');
  $('.screenshots').append('<div class="screenshot screenshot_'+new_screenshot_index+'"></div>');

  //update attributes
  $(this.element)
     .attr('id', 'screenshot_'+new_screenshot_index)
     .text('unsupported browser')
     .width(this.width)
     .height(this.height)
     .appendTo('.screenshot_'+new_screenshot_index);

  //some fake data
  var fake_data_html = '<b>title:</b> Ex Machina | <b>user:</b> Gary' +
             '<br><b>time:</b> ' + $('#current').text() + 's';

  $('.screenshot_'+new_screenshot_index).append('<div class="description" value="'+$("#current").text()+'"></div>');
  $('.screenshot_'+new_screenshot_index+' .description').html(fake_data_html);
  $('.screenshot_'+new_screenshot_index).click(function(){
    $('.screenshot').removeClass('selected');
    $(this).addClass('selected');

    countdown = 5;
    adjusted_time = parseFloat($(this).find('.description').attr('value')) - countdown;
    if(adjusted_time < 0){adjusted_time = 0;}

    video.currentTime = adjusted_time;
    video.play();
    change_icon ('countdown', countdown);
  });

  this.context = this.element.getContext("2d");

  // Get a handle on the 2d context of the canvas element
  //var context = canvas.element.get(0).getContext('2d');
  this.context.fillRect(0, 0, w, h);
  this.context.drawImage(video, 0, 0, w, h);

  //just slowly add the screenshot and scroll to the bottom
  new_screenshot_index++;
  $('.screenshots').animate({
    scrollTop: $('.screenshots').get(0).scrollHeight
  }, 2000);

  //blink with the heart
  change_icon('love');


  delay = delay_value;
}

//blinking confirmation beakon effect
function change_icon (action, countdown) {
  countdown = countdown || 0;

  $('.overlay').html('');
  $('.overlay').css('opacity', '1');

  if(action == 'play'){
    $('.overlay').html('<i class="fa fa-play fa-2x"></i>');
  } else if (action == 'pause') {
    $('.overlay').html('<i class="fa fa-pause fa-2x"></i>');
  } else if (action == 'love') {
    $('.overlay').html('<i class="fa fa-heart fa-2x"></i>');
  } else if (action == 'countdown' && countdown > 0) {
    $('.overlay').html('<i class="fa fa-clock-o fa-2x"></i>'+countdown);
    countdown--;
    console.log(countdown);
    setTimeout( function() { change_icon('countdown', countdown); }, 1000);
  }

  $('.overlay').animate( { opacity: 0 }, 800 );
}

setup_me();