window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    // innerHeight = 100vh
    // -100(px) margin-top img
    scroll = window.innerHeight * 0.35 - 100;
    if (document.body.scrollTop > scroll || document.documentElement.scrollTop > scroll) {
        if (window.matchMedia("(max-width: 640px)").matches) {
            document.getElementById("header-fluid").style.backgroundColor = "#fff";
            document.getElementById("header-fluid").style.position = "fixed";
            document.getElementById("header-fluid").style.top = "0";
            document.getElementById("header-fluid").style.left = "0";
            document.getElementById("header-fluid").style.width = "100vw";
            document.getElementById("header-fluid").style.height = "80px";
            document.getElementById("header-fluid").style.zIndex = "1";

            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.left = "0";
            document.getElementById("header").style.right = "0";
            document.getElementById("header").style.margin = "0 auto";

            document.getElementById("avatar").style.cssText = "width: 50px !important; margin: 15px auto 0 auto !important;";
            document.getElementById("body").style.marginTop = "120px";
        } else {
            document.getElementById("header-fluid").style.backgroundColor = "#fff";
            document.getElementById("header-fluid").style.position = "fixed";
            document.getElementById("header-fluid").style.top = "0";
            document.getElementById("header-fluid").style.left = "0";
            document.getElementById("header-fluid").style.width = "100vw";
            document.getElementById("header-fluid").style.height = "120px";
            document.getElementById("header-fluid").style.zIndex = "1";

            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.left = "0";
            document.getElementById("header").style.right = "0";
            document.getElementById("header").style.margin = "0 auto";

            document.getElementById("avatar").style.width = "80px";
            document.getElementById("avatar").style.margin = "0";
            document.getElementById("avatar").style.alignSelf = "center";
            document.getElementById("avatar").style.justifySelf = "center";

            document.getElementById("body").style.marginTop = "120px";
        }
    } else {
        document.getElementById("header-fluid").style.backgroundColor = "transparent";  
        document.getElementById("header-fluid").style.position = "relative";   
        document.getElementById("header-fluid").style.width = "100%";

        document.getElementById("header").style.position = "relative";

        document.getElementById("avatar").style.width = "200px";
        document.getElementById("avatar").style.margin = "-100px auto 0 auto";

        document.getElementById("body").style.marginTop = "0";
    }
}
