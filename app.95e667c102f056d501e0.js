(()=>{"use strict";var t={291:(t,e,n)=>{t.exports=n.p+"assets/5df8a5c7dcda04cc3f1e.jpg"},241:(t,e,n)=>{t.exports=n.p+"assets/a318dfda9223c9b6bcc1.jpg"},973:(t,e,n)=>{t.exports=n.p+"assets/032cb68ed96890ac0c3b.jpg"}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.p="./";const r=n.p+"assets/50816e42231842d4567c.svg",s=n.p+"assets/7cd24bfa252235321377.svg",a=n.p+"assets/d1e5ea128500ff92cefd.svg",o=n.p+"assets/a59f0405b34e25bfdd3c.svg",i=n.p+"assets/3fa1430d324a93f55472.svg",c=n.p+"assets/ba837e3ecc073286cbc4.mp3",d=n.p+"assets/b7ee8a84e7ecf1112c27.mp3",u=n.p+"assets/24f5c09b90641ef35477.mp3";var h=function(){function t(t,e){void 0===t&&(t=null),void 0===e&&(e=null),this.app=t,this.listWeather=e,this.currentWeather=null,this.bodyStyle=null,this.weatherSoundsIcon=null,this.app=t,this.listWeather=e.map((function(t){return t.sound=new Audio(t.soundUrl),t.sound.volume=.5,t})),this.bodyStyle=document.body.style}return t.prototype.Init=function(){var t=this;this.currentWeather=this.listWeather[1],this.render(),this.bodyStyle.backgroundImage="url(".concat(this.currentWeather.backgroundUrl,")"),this.SetStyleActiveSelectedItem(),this.weatherSoundsIcon=document.getElementById("app__weather_sounds__icon"),this.weatherSoundsIcon.addEventListener("click",(function(){t.currentWeather.sound.paused?t.playSound():t.pauseSound()}))},t.prototype.render=function(){var t=this,e="";this.listWeather.forEach((function(t){e+='<div class="weather_sound__item" style="background-image: url('.concat(t.backgroundUrl,')" data-id="').concat(t.id,'">\n\t\t\t\t<img class="weather_sound__item_icon" src="').concat(t.icon,'">\n\t\t\t</div>')}));var n='\t\t\t\t\n\t\t\t<img src="'.concat(i,'" id="app__weather_sounds__icon"/>\n\t\t\t<input type="range" min="1" max="100" value="50" id="app__weather_sounds__volume">');this.app.innerHTML='\n\t\t<div id="weather_sound__items">'.concat(e,'</div>\n\t\t<div id="app__weather_sounds__controls">').concat(n,"</div>\n\t\t");var r=document.querySelectorAll(".weather_sound__item");Array.from(r).forEach((function(e){e.addEventListener("click",(function(e){var n=e.currentTarget;t.changeWeather(n.getAttribute("data-id"))}))})),document.getElementById("app__weather_sounds__volume").oninput=function(e){var n=e.target;t.changeVolume(Number(n.value))}},t.prototype.changeWeather=function(t){if(null!=this.currentWeather){var e=!this.currentWeather.sound.paused;if(this.currentWeather.id===t&&e)return void this.pauseSound()}this.stopAllAudio(),this.currentWeather=this.listWeather.find((function(e){return e.id===t})),this.bodyStyle.backgroundImage="url(".concat(this.currentWeather.backgroundUrl,")"),this.playSound(),this.SetStyleActiveSelectedItem()},t.prototype.stopAllAudio=function(){this.listWeather.forEach((function(t){t.sound.pause()})),this.weatherSoundsIcon.src=i},t.prototype.changeVolume=function(t){this.listWeather.forEach((function(e){e.sound.volume=t/100}))},t.prototype.playSound=function(){this.currentWeather.sound.play(),this.weatherSoundsIcon.src=a},t.prototype.pauseSound=function(){this.currentWeather.sound.pause(),this.weatherSoundsIcon.src=i},t.prototype.SetStyleActiveSelectedItem=function(){var t=this,e=document.querySelectorAll(".weather_sound__item");Array.from(e).forEach((function(e){e.getAttribute("data-id")===t.currentWeather.id?e.classList.add("active"):e.classList.remove("active")}))},t}();const p=h;document.getElementById("app").innerHTML='\n\t<div id="app__container">\n\t\t<div id="app__title"></div>\n\t\t<div id="app__weather_sounds"></div>\n\t</div>\n';var l=[{id:"0",name:"sun",icon:o,backgroundUrl:n(241),soundUrl:c},{id:"1",name:"rain",icon:r,backgroundUrl:n(291),soundUrl:d},{id:"2",name:"winter",icon:s,backgroundUrl:n(973),soundUrl:u}];document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("app__weather_sounds");new p(t,l).Init(),document.getElementById("app__title").innerHTML="Weather sounds"}))})();
//# sourceMappingURL=app.95e667c102f056d501e0.js.map