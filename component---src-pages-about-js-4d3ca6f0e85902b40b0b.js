webpackJsonp([0xefeaa6d1881d],{12:function(e,t,l){var n,i,a;!function(l){var d=/iPhone/i,r=/iPod/i,u=/iPad/i,o=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,f=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,c=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,p=/Windows Phone/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,b=/BlackBerry/i,m=/BB10/i,E=/Opera Mini/i,v=/(CriOS|Chrome)(?=.*\bMobile\b)/i,w=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,y=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),A=function(e,t){return e.test(t)},F=function(e){var t=e||navigator.userAgent,l=t.split("[FBAN");if("undefined"!=typeof l[1]&&(t=l[0]),l=t.split("Twitter"),"undefined"!=typeof l[1]&&(t=l[0]),this.apple={phone:A(d,t),ipod:A(r,t),tablet:!A(d,t)&&A(u,t),device:A(d,t)||A(r,t)||A(u,t)},this.amazon={phone:A(f,t),tablet:!A(f,t)&&A(c,t),device:A(f,t)||A(c,t)},this.android={phone:A(f,t)||A(o,t),tablet:!A(f,t)&&!A(o,t)&&(A(c,t)||A(s,t)),device:A(f,t)||A(c,t)||A(o,t)||A(s,t)},this.windows={phone:A(p,t),tablet:A(h,t),device:A(p,t)||A(h,t)},this.other={blackberry:A(b,t),blackberry10:A(m,t),opera:A(E,t),firefox:A(w,t),chrome:A(v,t),device:A(b,t)||A(m,t)||A(E,t)||A(w,t)||A(v,t)},this.seven_inch=A(y,t),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},K=function(){var e=new F;return e.Class=F,e};"undefined"!=typeof e&&e.exports&&"undefined"==typeof window?e.exports=F:"undefined"!=typeof e&&e.exports&&"undefined"!=typeof window?e.exports=K():(i=[],n=l.isMobile=K(),a="function"==typeof n?n.apply(t,i):n,!(void 0!==a&&(e.exports=a)))}(this)},112:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=l(12),a=n(i),d=l(1),r=n(d),u=l(29),o=n(u),s=l(197),f=n(s),c=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-8 offset-2 "+f.default.serif},r.default.createElement("div",{className:a.default.any?f.default.padding:f.default.paddingDesktop},r.default.createElement("section",null,r.default.createElement("h1",null,"Эта группа — наш деревянный сруб"),r.default.createElement("p",null,"В феврале 2015&hyphen;го упали наши зёрна в неведомую землю, а к октябрю появились первые ростки. Плодами мы зацветаем медленно, но наши ветви крепнут и наливаются соком всё гуще и пряней!"),r.default.createElement("p",null,"Мы играем душеполезные песни на каждый день. Они у нас срастаются в леса так, что их тяжело отделить друг от друга, а между ними бликуют смелыми оленями стихи.")),r.default.createElement("section",null,r.default.createElement("h1",null,"Состав:"),r.default.createElement("ul",null,r.default.createElement("li",null,"Андрей Швецов",r.default.createElement("br",null),"(ударные, вейв&hyphen;драм, перкуссия)"),r.default.createElement("li",null,"Вадим Колеватов",r.default.createElement("br",null),"(ударные)"),r.default.createElement("li",null,"Владислав Луцык",r.default.createElement("br",null),"(аккордеон, духовые, вокал, бэк&hyphen;вокал)"),r.default.createElement("li",null,"Дмитрий Вавилов",r.default.createElement("br",null),"(укулеле, перкуссия, декламация стихов)"),r.default.createElement("li",null,"Светлана Подабед",r.default.createElement("br",null),"(духовые, гитара, вокал, бэк&hyphen;вокал, декламация стихов, перкуссия)"),r.default.createElement("li",null,"Сергей Нефедьев",r.default.createElement("br",null),"(гитара, вокал, бэк&hyphen;вокал, перкуссия)"),r.default.createElement("li",null,"Сергей Цветков",r.default.createElement("br",null),"(бас&hyphen;гитара, декламация стихов)"))))))),r.default.createElement(o.default,null))};t.default=c,e.exports=t.default},197:function(e,t){e.exports={serif:"src-pages----about-module---serif---fGMsm",padding:"src-pages----about-module---padding---2yvEd",paddingDesktop:"src-pages----about-module---paddingDesktop---3HYTd"}}});
//# sourceMappingURL=component---src-pages-about-js-4d3ca6f0e85902b40b0b.js.map