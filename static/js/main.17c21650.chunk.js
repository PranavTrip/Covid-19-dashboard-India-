(this.webpackJsonpstatewisecovidtracker=this.webpackJsonpstatewisecovidtracker||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),a=c.n(n),r=c(3),d=c.n(r),i=c(5),j=c(6),h=(c(12),c(13),c(0)),l=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(i.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.statewise);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"main_div",children:[Object(h.jsx)("div",{className:"main-heading  my-3 mb-8",children:Object(h.jsxs)("h1",{className:"text-center",children:[Object(h.jsx)("span",{className:"fw-bold",children:" India "})," Covid-19 StateWise Dashboard"]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover table-striped ",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Confirmed"}),Object(h.jsx)("th",{children:"Recovered"}),Object(h.jsx)("th",{children:"Deaths"}),Object(h.jsx)("th",{children:"Active"}),Object(h.jsx)("th",{children:"Last Updated On"})]})}),Object(h.jsx)("tbody",{className:"tbody-dark",children:c.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.state}),Object(h.jsx)("td",{id:"confirmed",children:e.confirmed}),Object(h.jsx)("td",{id:"recovered",children:e.recovered}),Object(h.jsx)("td",{id:"death",children:e.deaths}),Object(h.jsx)("td",{id:"active",children:e.active}),Object(h.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})})};a.a.render(Object(h.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.17c21650.chunk.js.map