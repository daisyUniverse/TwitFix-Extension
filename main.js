function specparent(a, b) { //element and tag to find
    for (b = b.toLowerCase(); a && a.parentNode;)
        if (a = a.parentNode, a.tagName && a.tagName.toLowerCase() == b) return a;
    return null
}
document.addEventListener('contextmenu', (e) => {
    const varray = Array.from(document.querySelectorAll("div[data-testid='videoPlayer']")).filter(i => (i.contains(e.target)));
    if (varray.length > 0) {
        const menu = varray[0];
        const url = Array.from(specparent(menu, "article").querySelectorAll("a")).filter(a => (a.href.includes("status")))[0].href;

        function change() {
            const flex = menu.querySelector("div[role='menuitem']");
            if (!flex.parentElement.contains(flex.parentElement.querySelector(".fxtwitterclass"))) {
                const css = `
                .fxtwitterclass{
                    text-align: center; 
                    cursor: pointer;
                    -webkit-box-direction: normal;
                    -webkit-box-orient: horizontal;
                    flex-direction: row;
                    transition-duration: 0.2s;
                    outline-style: none;
                    transition-property: background-color, box-shadow;
                    width: 100%;
                    padding: 16px;
                }
                .fxtwitterclass:hover{
                    background-color: rgba(255, 255, 255, 0.03);
                }
                `;
                const style = document.createElement('style');
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                document.getElementsByTagName('head')[0].appendChild(style);
                const ogitem = flex.children[0];
                const opt1 = ogitem.cloneNode(true);
                const opt2 = ogitem.cloneNode(true);
                opt1.querySelector("span").textContent = "Copy Twitfix Link";
                opt1.classList.add("fxtwitterclass");
                opt1.addEventListener("click", () => {
                    navigator.clipboard.writeText(url.replace("https://", "https://fx"));
                });
                opt2.querySelector("span").textContent = "Copy MP4 Link";
                opt2.classList.add("fxtwitterclass");
                opt2.addEventListener("click", () => {
                    navigator.clipboard.writeText(url.replace("https://", "https://fx").concat(".mp4"));
                });
                flex.parentElement.append(opt1);
                flex.parentElement.append(opt2);
            }
        }
        let inter = setInterval(() => {
            if (menu.querySelector("div[role='menuitem']") != null) {
                change();
                clearInterval(inter);
            }
        }, 4);
    }
});