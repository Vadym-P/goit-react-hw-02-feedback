(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistic_list__19NWE",item:"Statistic_item__4E-b6",value:"Statistic_value__1G_ie"}},,function(e,t,a){e.exports={wrapper:"FeedbackOptions_wrapper__2DPdt",feedbackBtn:"FeedbackOptions_feedbackBtn__3nEWK"}},,,,function(e,t,a){e.exports={title:"Section_title__2-OpA"}},function(e,t,a){e.exports={notification:"Notification_notification__3aiJv"}},function(e,t,a){e.exports={container:"Feedback_container__6vE1L"}},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(6),i=a.n(s),r=a(4),o=a(3),l=a.n(o),j=a(0),d=function(e){var t=e.onGood,a=e.onNeutral,c=e.onBad;return Object(j.jsxs)("div",{className:l.a.wrapper,children:[Object(j.jsx)("button",{type:"button",className:l.a.feedbackBtn,onClick:t,children:"Good"}),Object(j.jsx)("button",{type:"button",className:l.a.feedbackBtn,onClick:a,children:"Neutral"}),Object(j.jsx)("button",{type:"button",className:l.a.feedbackBtn,onClick:c,children:"Bad"})]})},b=a(1),u=a.n(b),O=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(j.jsxs)("ul",{className:u.a.list,children:[Object(j.jsxs)("li",{className:u.a.item,children:["Good: ",t>0?Object(j.jsx)("span",{className:u.a.value,children:t}):t]}),Object(j.jsxs)("li",{className:u.a.item,children:["Neutral:"," ",a>0?Object(j.jsx)("span",{className:u.a.value,children:a}):a]}),Object(j.jsxs)("li",{className:u.a.item,children:["Bad: ",c>0?Object(j.jsx)("span",{className:u.a.value,children:c}):c]}),Object(j.jsxs)("li",{className:u.a.item,children:["Total: ",n>0?Object(j.jsx)("span",{className:u.a.value,children:n}):n]}),Object(j.jsxs)("li",{className:u.a.item,children:["Positive feedback:"," ","0%"!==s?Object(j.jsx)("span",{className:u.a.value,children:s}):s]})]})},h=a(7),x=a.n(h),f=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:x.a.title,children:t}),a]})},p=a(8),m=a.n(p);function v(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:m.a.notification,children:t})})}var N=a(9),_=a.n(N);function k(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)(0),u=Object(r.a)(b,2),h=u[0],x=u[1],p=function(){return a+o+h};return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)(f,{title:"Please leave your feedback",children:Object(j.jsx)(d,{onGood:function(){return n(a+1)},onNeutral:function(){return l(o+1)},onBad:function(){return x(h+1)}})}),Object(j.jsx)(f,{title:"Statistics",children:0!==p()?Object(j.jsx)(O,{good:a,neutral:o,bad:h,total:p(),positivePercentage:function(){var e=a+o+h;return(0===e?0:Math.round(100*a/e))+"%"}()}):Object(j.jsx)(v,{message:"No feedback given"})})]})}function S(){return Object(j.jsx)("div",{children:Object(j.jsx)(k,{})})}a(15);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.querySelector("#root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.0b4d047e.chunk.js.map