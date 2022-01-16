document.addEventListener('contextmenu', (e) => {
    if (document.querySelector("div[data-testid='videoPlayer']").contains(e.target)) {
        function change() {
            const flex = document.querySelector("div[role='menuitem']");
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
                    navigator.clipboard.writeText(window.location.href.replace("https://", "https://fx"));
                });
                opt2.querySelector("span").textContent = "Copy MP4 Link";
                opt2.classList.add("fxtwitterclass");
                opt2.addEventListener("click", () => {
                    navigator.clipboard.writeText(window.location.href.replace("https://", "https://fx").concat(".mp4"));
                });
                flex.parentElement.append(opt1);
                flex.parentElement.append(opt2);
            }
        }
        let inter = setInterval(() => {
            if (document.querySelector("div[role='menuitem']") != null) {
                change();
                clearInterval(inter);
            }
        }, 4);
    }
});