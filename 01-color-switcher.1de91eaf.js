!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){a.classList.remove("disabled"),e.classList.add("disabled"),o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log(setInterval)})),a.addEventListener("click",(function(){e.classList.remove("disabled"),a.classList.add("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.1de91eaf.js.map
