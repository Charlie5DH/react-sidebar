(this.webpackJsonpsidebar=this.webpackJsonpsidebar||[]).push([[0],{27:function(e,c,s){},37:function(e,c,s){},38:function(e,c,s){},39:function(e,c,s){"use strict";s.r(c);var a=s(2),t=s.n(a),n=s(19),i=s.n(n),j=(s(27),s(10)),l=s(11),r=s(4),d=s(13),o=s(21),h=s(53),b=s(1),x=function(e){var c=e.name,s=e.subMenus,a=e.icon,n=e.onClick,i=e.to,r=(e.exact,t.a.useState(!1)),d=Object(j.a)(r,2),o=d[0],h=d[1];return Object(b.jsxs)("li",{onClick:n,children:[Object(b.jsxs)(l.b,{exact:!0,to:i,onClick:function(){return h(!o)},className:"menu-item",children:[Object(b.jsx)("div",{className:"menu-icon",children:a}),Object(b.jsxs)("span",{children:[c," ",s&&s.length>0?o?Object(b.jsx)("i",{class:"bi bi-caret-up-fill"}):Object(b.jsx)("i",{class:"bi bi-caret-down-fill"}):""]})]}),s&&s.length>0?Object(b.jsx)("ul",{className:"sub-menu ".concat(o?"active":""),children:s.map((function(e,c){return Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:e.to,children:e.name})},c)}))}):null]})},O=(s(37),[{name:"Locations",to:"/",exact:!0,icon:Object(b.jsx)("i",{class:"bi bi-geo-alt-fill"})},{name:"Overview",exact:!0,icon:Object(b.jsx)(d.b,{}),to:"/overview",subMenus:[{name:"Charts",icon:Object(b.jsx)(o.a,{}),to:"/overview/charts"},{name:"Tickets",icon:Object(b.jsx)(d.d,{}),to:"/overview/tickets"}]},{name:"Plant Scheme",icon:Object(b.jsx)(d.c,{}),to:"/plant"},{name:"Analytics",icon:Object(b.jsx)("i",{class:"bi bi-bar-chart-fill"}),to:"/analytics"},{name:"Predictive",icon:Object(b.jsx)(d.a,{}),to:"/predictive"},{name:"Schedule",icon:Object(b.jsx)("i",{class:"bi bi-calendar3"}),to:"/schedule"},{name:"Actions",icon:Object(b.jsx)(h.a,{}),to:"/actions"},{name:"Chat",icon:Object(b.jsx)("i",{class:"bi bi-chat-left-dots-fill"}),to:"/contact"},{name:"Documentation",icon:Object(b.jsx)("i",{class:"bi bi-file-earmark-text-fill"}),to:"/documentation"},{name:"Users",icon:Object(b.jsx)(d.e,{}),to:"/users"}]),m=function(e){var c=Object(a.useState)(!1),s=Object(j.a)(c,2),n=s[0],i=s[1];return t.a.useEffect((function(){n&&document.querySelectorAll(".sub-menu").forEach((function(e){e.classList.remove("active")})),e.onCollapse(n)}),[n]),Object(b.jsxs)("div",{className:"side-menu ".concat(n?"inactive":""),children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsx)("div",{className:"logo ".concat(n?"inactive":""),children:Object(b.jsx)(l.b,{to:"/",className:"link",children:n?Object(b.jsx)("span",{children:"MC"}):Object(b.jsx)("span",{children:"MyCompany"})})}),Object(b.jsx)("div",{onClick:function(){return i(!n)},className:"toggle-menu-btn",children:n?Object(b.jsx)("i",{class:"bi bi-arrow-right-circle-fill"}):Object(b.jsx)("i",{class:"bi bi-arrow-left-circle-fill"})})]}),Object(b.jsx)("div",{className:"divider"}),Object(b.jsx)("div",{className:"main-menu",children:Object(b.jsx)("ul",{children:O.slice(0,7).map((function(e,c){return Object(b.jsx)(x,{name:e.name,to:e.to,subMenus:e.subMenus||[],icon:e.icon,exact:e.exact,onClick:function(){n&&i(!1)}},c)}))})}),Object(b.jsx)("div",{className:"divider middle"}),Object(b.jsx)("div",{className:"main-menu",children:Object(b.jsx)("ul",{children:O.slice(7).map((function(e,c){return Object(b.jsx)(x,{name:e.name,to:e.to,subMenus:e.subMenus||[],icon:e.icon,exact:e.exact,onClick:function(){n&&i(!1)}},c)}))})}),Object(b.jsxs)("div",{className:"side-menu-footer",children:[Object(b.jsx)("div",{className:"footer-avatar",children:Object(b.jsx)("img",{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"user-logged"})}),Object(b.jsxs)("div",{className:"user-info",children:[Object(b.jsx)("h5",{children:"Jane Doe"}),Object(b.jsx)("p",{children:"janedoe@gmail.com"}),Object(b.jsx)("p",{children:"engineer"})]})]})]})};s(38);var p=function(){var e=t.a.useState(!1),c=Object(j.a)(e,2),s=c[0],a=c[1];return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(m,{onCollapse:function(e){a(e)}}),Object(b.jsx)("div",{className:"global-container ".concat(s?"inactive":""),children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)("span",{className:"headers",children:"Home"})}),Object(b.jsx)(r.a,{path:"/actions",children:Object(b.jsx)("span",{className:"headers",children:"Actions"})}),Object(b.jsx)(r.a,{path:"/analytics",children:Object(b.jsx)("span",{className:"headers",children:"Analytics"})}),Object(b.jsx)(r.a,{path:"/contact",children:Object(b.jsx)("span",{className:"headers",children:"Contact"})}),Object(b.jsx)(r.a,{path:"/notifications",children:Object(b.jsx)("span",{className:"headers",children:"Notification"})}),Object(b.jsx)(r.a,{exact:!0,path:"/overview",children:Object(b.jsx)("span",{className:"headers",children:"Overview"})}),Object(b.jsx)(r.a,{path:"/overview/charts",children:Object(b.jsx)("span",{className:"headers",children:"Charts"})}),Object(b.jsx)(r.a,{path:"/overview/tickets",children:Object(b.jsx)("span",{className:"headers",children:"Tickets"})}),Object(b.jsx)(r.a,{path:"/plant",children:Object(b.jsx)("span",{className:"headers",children:"plant"})}),Object(b.jsx)(r.a,{path:"/predictive",children:Object(b.jsx)("span",{className:"headers",children:"Predictive"})}),Object(b.jsx)(r.a,{path:"/settings",children:Object(b.jsx)("span",{className:"headers",children:"Settings"})}),Object(b.jsx)(r.a,{path:"/users",children:Object(b.jsx)("span",{className:"headers",children:"Users"})}),Object(b.jsx)(r.a,{path:"/user/:id",children:Object(b.jsx)("span",{className:"headers",children:"User"})}),Object(b.jsx)(r.a,{path:"/documentation",children:Object(b.jsx)("span",{className:"headers",children:"Documentation"})}),Object(b.jsx)(r.a,{path:"/data",children:Object(b.jsx)("span",{className:"headers",children:"Data"})}),Object(b.jsx)(r.a,{path:"/schedule",children:Object(b.jsx)("span",{className:"headers",children:"Schedule"})}),Object(b.jsx)(r.a,{path:"/sensors/:id",children:Object(b.jsx)("span",{className:"headers",children:"Sensor"})}),Object(b.jsx)(r.a,{path:"/advisor/:id",children:Object(b.jsx)("span",{className:"headers",children:"Advisor"})}),Object(b.jsx)(r.a,{path:"/plants/:id",children:Object(b.jsx)("span",{className:"headers",children:"Plant X"})}),Object(b.jsx)(r.a,{path:"/plant-scheme/:id",children:Object(b.jsx)("span",{className:"headers",children:"Scheme id"})}),Object(b.jsx)(r.a,{path:"/plants-assets/:id/:id",children:Object(b.jsx)("span",{className:"headers"})})]})})]})};i.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.17d0f436.chunk.js.map