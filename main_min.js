function specparent(c,d){for(d=d.toLowerCase();c&&c.parentNode;)if(c=c.parentNode,c.tagName&&c.tagName.toLowerCase()==d)return c;return null}document.addEventListener("contextmenu",a=>{const b=Array.from(document.querySelectorAll("div[data-testid='videoPlayer']")).filter(b=>b.contains(a.target));if(0<b.length){function a(){const a=d.querySelector("div[role='menuitem']"),b=a.parentElement;if(!b.contains(b.querySelector(".fxtwitterclass"))){document.getElementsByTagName("head")[0].appendChild(c);const d=a.cloneNode(!0),f=a.cloneNode(!0);d.querySelector("span").textContent="Copy Twitfix Link",d.classList.add("fxtwitterclass"),d.addEventListener("click",()=>{navigator.clipboard.writeText(e.replace("https://","https://fx"))}),f.querySelector("span").textContent="Copy MP4 Link",f.classList.add("fxtwitterclass"),f.addEventListener("click",()=>{navigator.clipboard.writeText(e.replace("https://","https://fx").concat(".mp4"))}),b.append(d),b.append(f)}}const c=document.createElement("style");c.styleSheet?c.styleSheet.cssText=".fxtwitterclass {    background-color: unset;}body[style*=\"background-color: rgb(21, 32, 43)\"] .fxtwitterclass:hover,body[style*=\"background-color: #15202B\"] .fxtwitterclass:hover {    background-color: rgba(255, 255, 255, 0.03);}body[style*=\"background-color: rgb(255, 255, 255)\"] .fxtwitterclass:hover,body[style*=\"background-color: #FFFFFF\"] .fxtwitterclass:hover {    background-color: rgba(0, 0, 0, 0.03);}":c.appendChild(document.createTextNode(".fxtwitterclass {    background-color: unset;}body[style*=\"background-color: rgb(21, 32, 43)\"] .fxtwitterclass:hover,body[style*=\"background-color: #15202B\"] .fxtwitterclass:hover {    background-color: rgba(255, 255, 255, 0.03);}body[style*=\"background-color: rgb(255, 255, 255)\"] .fxtwitterclass:hover,body[style*=\"background-color:  #FFFFFF\"] .fxtwitterclass:hover {    background-color: rgba(0, 0, 0, 0.03);}"));const d=b[0],e=Array.from(specparent(d,"article").querySelectorAll("a")).filter(b=>b.href.includes("status"))[0].href;let f=setInterval(()=>{null!=d.querySelector("div[role='menuitem']")&&(a(),clearInterval(f))},4)}});