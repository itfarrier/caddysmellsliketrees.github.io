webpackJsonp([0xefeaa6d1881d],{77:function(e,t,l){!function(t,l){e.exports=l()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,n=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,d=r&&r(Object);return function o(u,s,c){if("string"!=typeof s){if(d){var f=r(s);f&&f!==d&&o(u,f,c)}var p=n(s);a&&(p=p.concat(a(s)));for(var b=0;b<p.length;++b){var m=p[b];if(!(e[m]||t[m]||c&&c[m])){var h=i(s,m);try{l(u,m,h)}catch(e){}}}return u}return u}})},12:function(e,t,l){var n,a,i;!function(l){var r=/iPhone/i,d=/iPod/i,o=/iPad/i,u=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,c=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,f=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,p=/Windows Phone/i,b=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,m=/BlackBerry/i,h=/BB10/i,v=/Opera Mini/i,E=/(CriOS|Chrome)(?=.*\bMobile\b)/i,y=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,g=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),w=function(e,t){return e.test(t)},F=function(e){var t=e||navigator.userAgent,l=t.split("[FBAN");if("undefined"!=typeof l[1]&&(t=l[0]),l=t.split("Twitter"),"undefined"!=typeof l[1]&&(t=l[0]),this.apple={phone:w(r,t),ipod:w(d,t),tablet:!w(r,t)&&w(o,t),device:w(r,t)||w(d,t)||w(o,t)},this.amazon={phone:w(c,t),tablet:!w(c,t)&&w(f,t),device:w(c,t)||w(f,t)},this.android={phone:w(c,t)||w(u,t),tablet:!w(c,t)&&!w(u,t)&&(w(f,t)||w(s,t)),device:w(c,t)||w(f,t)||w(u,t)||w(s,t)},this.windows={phone:w(p,t),tablet:w(b,t),device:w(p,t)||w(b,t)},this.other={blackberry:w(m,t),blackberry10:w(h,t),opera:w(v,t),firefox:w(y,t),chrome:w(E,t),device:w(m,t)||w(h,t)||w(v,t)||w(y,t)||w(E,t)},this.seven_inch=w(g,t),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},A=function(){var e=new F;return e.Class=F,e};"undefined"!=typeof e&&e.exports&&"undefined"==typeof window?e.exports=F:"undefined"!=typeof e&&e.exports&&"undefined"!=typeof window?e.exports=A():(a=[],n=l.isMobile=A(),i="function"==typeof n?n.apply(t,a):n,!(void 0!==i&&(e.exports=i)))}(this)},129:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(12),i=n(a),r=l(73),d=(n(r),l(1)),o=n(d),u=l(35),s=n(u),c=l(222),f=n(c),p=function(){return o.default.createElement("div",null,o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-8 offset-2 "+f.default.serif},o.default.createElement("div",{className:i.default.any?f.default.padding:f.default.paddingDesktop},o.default.createElement("section",null,o.default.createElement("h1",null,"Эта группа — наш деревянный сруб"),o.default.createElement("p",null,"В феврале 2015‐го упали наши зёрна в неведомую землю, а к октябрю появились первые ростки. Плодами мы зацветаем медленно, но наши ветви крепнут и наливаются соком всё гуще и пряней!"),o.default.createElement("p",null,"Мы играем душеполезные песни на каждый день. Они у нас срастаются в леса так, что их тяжело отделить друг от друга, а между ними бликуют смелыми оленями стихи.")),o.default.createElement("section",null,o.default.createElement("h1",null,"Состав:"),o.default.createElement("ul",null,o.default.createElement("li",null,"Андрей Швецов",o.default.createElement("br",null),"(ударные, вейв‐драм, перкуссия)"),o.default.createElement("li",null,"Вадим Колеватов",o.default.createElement("br",null),"(ударные)"),o.default.createElement("li",null,"Владислав Луцык",o.default.createElement("br",null),"(аккордеон, духовые, вокал, бэк‐вокал)"),o.default.createElement("li",null,"Дмитрий Вавилов",o.default.createElement("br",null),"(укулеле, перкуссия, декламация стихов)"),o.default.createElement("li",null,"Светлана Подабед",o.default.createElement("br",null),"(духовые, гитара, вокал, бэк‐вокал, декламация стихов, перкуссия)"),o.default.createElement("li",null,"Сергей Нефедьев",o.default.createElement("br",null),"(гитара, вокал, бэк‐вокал, перкуссия)"),o.default.createElement("li",null,"Сергей Цветков",o.default.createElement("br",null),"(бас‐гитара, декламация стихов)"))),o.default.createElement("section",null,o.default.createElement("h1",null,o.default.createElement("a",{href:"/documents/technicalRider.pdf"},"ТЕХНИЧЕСКИЙ РАЙДЕР"," ",o.default.createElement("img",{alt:"PDF logo",className:f.default.pdf,src:"/vectors/file-pdf.svg"})))))))),o.default.createElement(s.default,null))};t.default=p,e.exports=t.default},222:function(e,t){e.exports={padding:"src-pages----about-module---padding---2yvEd",paddingDesktop:"src-pages----about-module---paddingDesktop---3HYTd",pdf:"src-pages----about-module---pdf---3jd4s",serif:"src-pages----about-module---serif---fGMsm"}}});
//# sourceMappingURL=component---src-pages-about-js-ec5b7fb1966bb5f41691.js.map