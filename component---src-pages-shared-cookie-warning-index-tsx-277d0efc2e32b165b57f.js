(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n.n(o),i=n(0),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCookieWarning:!1,animateOut:!1},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=!localStorage.getItem("dps-cookie-acknowledged");this.setState({showCookieWarning:e})},n.componentDidUpdate=function(e,t){this.state.animateOut&&localStorage.setItem("dps-cookie-acknowledged","true")},n.render=function(){var e=this,t=this.state.animateOut?"cookie-warning--animate-out":"";return i.createElement(i.Fragment,null,this.state.showCookieWarning&&i.createElement("section",{className:"cookie-warning u-content-wrapper "+t},i.createElement("div",{className:"u-content"},i.createElement("p",{className:"cookie-warning__description"},"To help personalize content, measure accesses, and provide a safer experience, we use cookies. By clicking or navigating the site, you agree to allow our collection of information on and off UnternehmerTUM through cookies. Learn more, including about available controls: ",i.createElement("a",{href:"/privacy-policy#cookies"},"Cookies Policy.")),i.createElement("button",{className:"cookie-warning__button u-button",onClick:function(){return e.setState({animateOut:!0})}},"Close"))))},t}(i.Component);t.default=r}}]);
//# sourceMappingURL=component---src-pages-shared-cookie-warning-index-tsx-277d0efc2e32b165b57f.js.map