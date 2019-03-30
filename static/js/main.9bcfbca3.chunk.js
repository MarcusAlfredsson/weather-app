(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(46)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(15),i=n(3),c=n(4),o=n(6),s=n(5),l=n(7),u=n(48),h=n(49),d=(n(31),n(9)),m=(n(32),function(e){var t=e.name;return a.createElement("header",{className:"App-header header"},a.createElement("a",{href:"".concat("/weather-app","/list"),className:"App-menu"},a.createElement("span",{className:"fas fa-list"})),a.createElement("h1",{className:"App-title"},t))}),f=function e(t,n){Object(i.a)(this,e),this.id=void 0,this.name=void 0,this.id=t,this.name=n},v="6a703ad20e8fe394b475a7a2450b2c65",p="https://api.openweathermap.org/data/2.5/";var w="weather-cities";function y(){return JSON.parse(localStorage.getItem(w)||"[]")}n(33);var g=function(e){var t=e.addCity,n=e.onChange,r=e.cityText;return a.createElement("form",{onSubmit:t,className:"add-city"},a.createElement("span",{className:"add-city__header"},"L\xe4gg till stad"),a.createElement("div",{className:"add-city-input"},a.createElement("div",{className:"add-city-input-container"},a.createElement("input",{type:"text",className:"add-city-input-field__input",onChange:n,value:r}),"}"),a.createElement("button",{type:"submit"},a.createElement("i",{className:"fas fa-2x fa-plus-circle"}))))},E=(n(34),n(12)),b=n(14),j=n(13),O=n(11),N=function(e){switch(e.icon){case"Sun":case"Clear":return a.createElement(O.a,{icon:j.c,color:"yellow"});case"Rain":return a.createElement(O.a,{icon:j.d,color:"blue"});case"Snow":return a.createElement(O.a,{icon:j.b});case"Clouds":case"Fog":default:return a.createElement(O.a,{icon:j.a,color:"grey"})}};function S(){var e=Object(E.a)(["\n  display: flex;\n  align-items: center;\n"]);return S=function(){return e},e}function C(){var e=Object(E.a)(["\n  color: red;\n"]);return C=function(){return e},e}function x(){var e=Object(E.a)(["\n  padding-top: 4px;\n  padding-right: 5px;\n"]);return x=function(){return e},e}function k(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  border-bottom: 1px solid white;\n  padding: 10px;\n"]);return k=function(){return e},e}var W=b.a.a(k()),L=b.a.span(x()),T=b.a.button(C()),_=b.a.div(S()),I=function(e){var t=e.item,n=e.removeItem;return a.createElement(W,{as:"a",href:"city/".concat(t.id)},a.createElement(L,null,t.name),a.createElement(_,null,a.createElement(L,null,Math.round(t.main.temp)),a.createElement(N,{icon:t.weather[0].main}),a.createElement(T,{type:"button",onClick:function(e){return n(t,e)}},a.createElement("i",{className:"fa fa-2x fa-minus-circle"}))))},D=(n(39),function(e){var t=e.errorString;return a.createElement("div",{className:"error"},a.createElement(O.a,{icon:"exclamation-circle"}),a.createElement("span",{className:"error-text"},t))}),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={cities:[],cityText:"",error:""},n.removeItem=n.removeItem.bind(Object(d.a)(Object(d.a)(n))),n.onChange=n.onChange.bind(Object(d.a)(Object(d.a)(n))),n.addCity=n.addCity.bind(Object(d.a)(Object(d.a)(n))),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var n,a,r=t.coords,i=r.latitude,c=r.longitude;(n=i,a=c,fetch("".concat(p,"weather?lat=").concat(n,"&lon=").concat(a,"&appid=").concat(v,"&units=metric")).then(function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then(function(t){var n=e.state.cities;n.unshift(t),e.setState({cities:n})}).catch(function(){return e.setState({error:"Could not get weather of current location"})})});var t=y();t.length>0&&function(e){return fetch("".concat(p,"group?id=").concat(e,"&appid=").concat(v,"&units=metric")).then(function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})}(t.map(function(e){return e.id}).reduce(function(e,t){return"".concat(e,",").concat(t)})).then(function(t){return e.setState({cities:t.list})}).catch(function(){return e.setState({error:"Could not get weather for stored cities"})})}},{key:"render",value:function(){var e=this;return a.createElement("div",{className:"full-scale city-handler"},this.state.error?a.createElement(D,{errorString:this.state.error}):"",a.createElement("div",{className:"App-cities"},a.createElement(m,{name:"City view"}),this.state.cities.map(function(t){return a.createElement(I,{key:t.name,item:t,removeItem:e.removeItem})})),a.createElement("div",{className:"App-cities"},a.createElement(g,{onChange:this.onChange,addCity:this.addCity,cityText:this.state.cityText})))}},{key:"onChange",value:function(e){null!==e&&null!==e.target&&null!==e.target.value&&this.setState({cityText:e.target.value})}},{key:"addCity",value:function(e){var t=this;e.preventDefault();var n,a=this.state,r=a.cities,i=a.cityText;void 0===r.find(function(e){return e.name.toLowerCase()===i.toLowerCase()})?(n=i,fetch("".concat(p,"weather?q=").concat(n,"&appid=").concat(v,"&units=metric")).then(function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then(function(e){r.push(e),function(e){var t=y();t.push(e),localStorage.setItem(w,JSON.stringify(t))}(new f(e.id,i)),t.setState({cities:r,cityText:""})}).catch(function(){return t.setState({error:"Could not get weather for specified city"})}):this.setState({error:"City already exists"})}},{key:"removeItem",value:function(e,t){t.preventDefault();var n=this.state.cities.filter(function(t){return t.name!==e.name});!function(e){var t=y().filter(function(t){return t.name.toLowerCase()!==e.name.toLowerCase()});localStorage.setItem(w,JSON.stringify(t))}(e),this.setState({cities:n})}}]),t}(a.Component),M=function e(){Object(i.a)(this,e),this.name=void 0,this.id=void 0,this.main=void 0,this.weather=void 0,this.dt=void 0,this.dt_txt=void 0,this.name="",this.id="",this.main={temp:0},this.weather=[{main:""}],this.dt=0,this.dt_txt=""},H=function e(){Object(i.a)(this,e),this.name=void 0,this.id=void 0,this.main=void 0,this.weather=void 0,this.dt=void 0,this.dt_txt=void 0,this.wind=void 0,this.name="",this.id="",this.main={temp:0,pressure:0,humidity:0},this.weather=[{main:""}],this.dt=0,this.dt_txt="",this.wind={speed:0,deg:0}},P=(n(40),function(e){var t=e.weather;return null===t.main||void 0===t.main?null:a.createElement("div",{className:"selected-weather-view"},a.createElement("div",{className:"current-weather"},a.createElement("span",{className:"current-temperature"},Math.round(t.main.temp)),a.createElement("span",null,"\xb0")),a.createElement("div",{className:"detailed-data"},a.createElement("div",null,a.createElement("div",{className:"detailed-data__label"},"Wind"),a.createElement("div",null,t.wind.speed," m/s",a.createElement("span",null,a.createElement("i",{style:{transform:"rotate(".concat(t.wind.deg,"deg")},className:"fas fa-arrow-up"})))),a.createElement("div",null,a.createElement("div",{className:"detailed-data__label"},"Humidity"),a.createElement("div",null,t.main.humidity,"%")),a.createElement("div",null,a.createElement("div",{className:"detailed-data__label"},"Pressure"),a.createElement("div",null,t.main.pressure,"hPa"))))});n(41);n(42),n(43);var J=function(e){var t=e.weather,n=e.selectedWeather,r=e.changeSelectedWeather,i=t.dt===n.dt;return a.createElement("button",{onClick:function(){return r(t)},className:"weather-list-item ".concat(i?"weather-list-item--selected":"")},a.createElement("span",null,function(e){var t=new Date(e.replace(" ","T"));return 1==="".concat(t.getHours()).length?"0".concat(t.getHours()):"".concat(t.getHours())}(t.dt_txt)),a.createElement("div",null,a.createElement(N,{icon:t.weather[0].main})),a.createElement("div",null,Math.round(t.main.temp),"\xb0"))},F=function(e){var t=e.weatherList,n=e.selectedWeather,r=e.changeSelectedWeather,i=function(e){var t={},n=!0,a=!1,r=void 0;try{for(var i,c=function(){var e=i.value,n=e.dt_txt.split(" ")[0];Object.keys(t).find(function(e){return e===n})?t[n].push(e):t[n]=[e]},o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)c()}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t}(t);return a.createElement("div",{className:"weather-list scrollbar"},Object.keys(i).map(function(e){return a.createElement("div",{key:e,className:"day-container"},a.createElement("span",{className:"day-title"},function(e){var t=new Date(e).getDay();if(t===(new Date).getDay())return"Today";switch(t){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return""}}(e)),a.createElement("div",{className:"day-weather-container"},i[e].map(function(e){return a.createElement(J,{key:e.dt,weather:e,selectedWeather:n,changeSelectedWeather:r})})))}))};function R(e){return e.weather&&e.weather.length>0?e.weather[0].main:""}var B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selectedWeather:new H,weatherIcon:""},n.changeSelectedWeather=function(e){n.setState({selectedWeather:e,weatherIcon:R(e)})},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=function(e){var t=new Date(1e3*e.dt);return 19<t.getHours()||t.getHours()<6?"weather-displayer--night":e.weather&&e.weather.length>0?"Sun"===e.weather[0].main?"weather-displayer--sun":"Clear"===e.weather[0].main?"weather-displayer--sun":"Rain"===e.weather[0].main?"weather-displayer--rain":"Snow"===e.weather[0].main?"weather-displayer--snow":(e.weather[0].main,"weather-displayer--clouds"):""}(this.state.selectedWeather);return a.createElement("div",{className:"weather-displayer ".concat(e)},a.createElement(m,{name:this.props.cityName}),a.createElement("div",{className:"city-item"},a.createElement(P,{weather:this.state.selectedWeather})),a.createElement("div",{className:"footer"},a.createElement(F,{weatherList:this.props.weatherList,selectedWeather:this.state.selectedWeather,changeSelectedWeather:this.changeSelectedWeather})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.weatherList.length>0&&""===t.selectedWeather.name){var n=e.weatherList[0];return{selectedWeather:n,weatherIcon:R(n)}}return null}}]),t}(a.PureComponent),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={city:new M,weatherList:[]},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var n,a,r=t.coords,i=r.latitude,c=r.longitude;(n=i,a=c,fetch("".concat(p,"forecast?lat=").concat(n,"&lon=").concat(a,"&appid=").concat(v,"&units=metric")).then(function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then(function(t){return e.setState({city:t.city,weatherList:t.list})}).catch(function(e){return console.error(e)})})}},{key:"render",value:function(){return a.createElement(B,{weatherList:this.state.weatherList,cityName:this.state.city.name})}}]),t}(a.Component),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={city:new M,weatherList:[]},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,fetch("".concat(p,"forecast?id=").concat(e,"&appid=").concat(v,"&units=metric")).then(function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then(function(e){return t.setState({city:e.city,weatherList:e.list})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){return a.createElement(B,{weatherList:this.state.weatherList,cityName:this.state.city.name})}}]),t}(a.Component),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={error:""},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return""!==this.state.error?a.createElement("div",null,this.state.error):a.createElement("div",{className:"App"},a.createElement(u.a,null,a.createElement("div",{className:"route-container"},a.createElement(h.a,{exact:!0,path:"".concat("/weather-app","/"),component:q}),a.createElement(h.a,{path:"".concat("/weather-app","/list"),component:A}),a.createElement(h.a,{path:"".concat("/weather-app","/city/:id"),component:Q}))))}}]),t}(a.Component),$=(n(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.render(a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/weather-app","/service-worker.js");$?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):z(e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.9bcfbca3.chunk.js.map