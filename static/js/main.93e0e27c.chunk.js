(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(e,t,a){e.exports={Profile:"Profile_Profile__3JMGE",Name:"Profile_Name__3dczP",Tag:"Profile_Tag__1hEYT",Location:"Profile_Location__2HZ0a",Stats:"Profile_Stats__1xg3A",Quantity:"Profile_Quantity__2ywft",Label:"Profile_Label__3_f9I",Avatar:"Profile_Avatar__2lxEV",Description:"Profile_Description__3tje2"}},function(e,t,a){e.exports={Statistics:"Statistics_Statistics__3QX54",StatisticsTitle:"Statistics_StatisticsTitle__QL-gv",StatisticsList:"Statistics_StatisticsList__fONDC",StatisticsItem:"Statistics_StatisticsItem__1iRIR",StatisticsLabel:"Statistics_StatisticsLabel__1p0FK",StatisticsPercentage:"Statistics_StatisticsPercentage__PvKFl"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,,function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),l=(a(22),a(3)),s=a.n(l),o=function(e){var t=e.name,a=e.tag,n=e.location,c=e.avatar,i=e.stats;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.Profile},r.a.createElement("div",{className:s.a.Description},r.a.createElement("img",{src:c,alt:t,className:s.a.Avatar}),r.a.createElement("p",{className:s.a.Name},t),r.a.createElement("p",{className:s.a.Tag},"@",a),r.a.createElement("p",{className:s.a.Location},n)),r.a.createElement("ul",{className:s.a.Stats},r.a.createElement("li",null,r.a.createElement("span",{className:s.a.Label},"Followers "),r.a.createElement("span",{className:s.a.Quantity},i.followers)),r.a.createElement("li",null,r.a.createElement("span",{className:s.a.Label},"Views "),r.a.createElement("span",{className:s.a.Quantity},i.views)),r.a.createElement("li",null,r.a.createElement("span",{className:s.a.Label},"Likes "),r.a.createElement("span",{className:s.a.Quantity},i.likes)))))},u=a(5),m=a(4),d=a.n(m),p=function(e){var t=e.title,a=e.stats;return r.a.createElement("section",{className:d.a.Statistics},t&&r.a.createElement("h2",{className:d.a.StatisticsTitle},t),r.a.createElement("ul",{className:d.a.StatisticsList},a.map((function(e){return r.a.createElement("li",{className:d.a.StatisticsItem,key:e.id,style:{backgroundColor:"rgb(".concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),")")}},r.a.createElement("span",{className:d.a.StatisticsLabel},e.label),r.a.createElement("span",{className:d.a.StatisticsPercentage},e.percentage,"%"))}))))};p.defaultProps={title:""};var f=p,b=a(10),g=a(1),y=a(2);function h(){var e=Object(g.a)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n"]);return h=function(){return e},e}var x=y.a.ul(h());function E(){var e=Object(g.a)(["\n  font-size: 24px;\n"]);return E=function(){return e},e}function v(){var e=Object(g.a)(["\n  width: 97px;\n  height: 97px;\n  margin-right: 16px;\n  border-radius: 15px;\n  display: block;\n"]);return v=function(){return e},e}function _(){var e=Object(g.a)(["\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  background: ",";\n  display: block;\n  margin-left: 16px;\n  margin-right: 16px;\n"]);return _=function(){return e},e}function w(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  height: 112px;\n  width: 400px;\n  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n"]);return w=function(){return e},e}var S=y.a.li(w()),O=y.a.span(_(),(function(e){return e.isOnline?"rgb(75,175,76)":"rgb(254,82,78)"})),N=y.a.img(v()),j=y.a.p(E()),P=function(e){var t=e.isOnline,a=e.avatar,n=e.name;return r.a.createElement(S,null,r.a.createElement(O,{isOnline:t}),r.a.createElement(N,{src:a,alt:n}),r.a.createElement(j,null,n))},L=function(e){var t=e.friends;return r.a.createElement(x,null,t.map((function(e){return r.a.createElement(P,Object.assign({key:e.id},e))})))},k=a(14);function M(){var e=Object(g.a)(["\n  text-align: center;\n  :nth-child(3n-2) {\n    padding-left: 14.5%;\n    text-align: left;\n  }\n  :not(:last-child) {\n    border-right: 2px solid rgb(224, 230, 231);\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(g.a)(["\n  color: #5c6975;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: 0.45px;\n  :nth-child(odd) {\n    background-color: #00bcd4;\n  }\n"]);return T=function(){return e},e}function z(){var e=Object(g.a)(["\n  width: 33.333%;\n  :not(:last-child) {\n    border-right: 2px solid rgb(224, 230, 231);\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(g.a)(["\n  height: 50px;\n  :nth-child(even) {\n    background-color: #ecf2f3;\n  }\n"]);return J=function(){return e},e}function A(){var e=Object(g.a)(["\n  background-color: #00bcd4;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 30px;\n  text-transform: uppercase;\n  letter-spacing: 1.17px;\n"]);return A=function(){return e},e}function D(){var e=Object(g.a)(["\n  width: 872px;\n  height: 300px;\n  border-spacing: 0 0;\n  border-collapse: separate;\n  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);\n"]);return D=function(){return e},e}var U=y.a.table(D()),C=y.a.thead(A()),G=y.a.tr(J()),I=y.a.th(z()),Q=y.a.tbody(T()),F=y.a.td(M()),R=function(e){var t=e.items;return r.a.createElement(U,null,r.a.createElement(C,null,r.a.createElement(G,null,r.a.createElement(I,null,"Type"),r.a.createElement(I,null,"Amount"),r.a.createElement(I,null,"Currency"))),r.a.createElement(Q,null,t.map((function(e){return r.a.createElement(G,{key:e.id},r.a.createElement(F,null,e.type),r.a.createElement(F,null,e.amount),r.a.createElement(F,null,e.currency))}))))},K=a(15),Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{name:u.name,tag:u.tag,location:u.location,avatar:u.avatar,stats:u.stats}),r.a.createElement(f,{title:"upload stats",stats:b}),r.a.createElement(L,{friends:k}),r.a.createElement(R,{items:K}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.93e0e27c.chunk.js.map