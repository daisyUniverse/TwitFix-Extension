function specparent(a, b) { //element and tag to find
    for (b = b.toLowerCase(); a && a.parentNode;)
        if (a = a.parentNode, a.tagName && a.tagName.toLowerCase() == b) return a;
    return null
}
document.addEventListener('contextmenu', (e) => {
    const varray = Array.from(document.querySelectorAll("div[data-testid='videoPlayer']")).filter(i => (i.contains(e.target)));
    if (varray.length > 0) {
        const css = `
            .fxtwitterclass {
                background-color: unset;
            }
            body[style*="background-color: rgb(21, 32, 43)"] .fxtwitterclass:hover,
            body[style*="background-color: #15202B"] .fxtwitterclass:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }
            body[style*="background-color: rgb(255, 255, 255)"] .fxtwitterclass:hover,
            body[style*="background-color: #FFFFFF"] .fxtwitterclass:hover {
                background-color: rgba(0, 0, 0, 0.03);
            }
        `;
        const style = document.createElement('style');
        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
        const menu = varray[0];
        const url = Array.from(specparent(menu, "article").querySelectorAll("a")).filter(a => (a.href.includes("status")))[0].href;

        function change() {
            const ogitem = menu.querySelector("div[role='menuitem']");
            const flex = ogitem.parentElement;
            if (!flex.contains(flex.querySelector(".fxtwitterclass"))) {

                document.getElementsByTagName('head')[0].appendChild(style);
                const opt1 = ogitem.cloneNode(true);
                const opt2 = ogitem.cloneNode(true);
                opt1.querySelector("span").textContent = "Copy Twitfix Link";
                opt1.classList.add("fxtwitterclass");
                //opt1.classList.remove("r-1panhkp");
                opt1.addEventListener("click", () => {
                    navigator.clipboard.writeText(url.replace("https://", "https://fx"));
                });
                opt2.querySelector("span").textContent = "Copy MP4 Link";
                opt2.classList.add("fxtwitterclass");
                //opt2.classList.remove("r-1panhkp");
                opt2.addEventListener("click", () => {
                    navigator.clipboard.writeText(url.replace("https://", "https://fx").concat(".mp4"));
                });
                flex.append(opt1);
                flex.append(opt2);
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