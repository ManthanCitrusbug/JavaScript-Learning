window.onscroll = function() {navbar()};

        function navbar() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("scroll").style.backgroundColor = "white";
            document.getElementById("scroll").style.height = "80px";
            document.getElementById("scroll").style.boxShadow = "0px 1px 12px rgb(0 0 0 / 8%)";
            document.getElementById("logo_move").style.color = "#ff385c";
            document.getElementById("logo_move").style.animation = "logo_anim 0.10s";
            document.getElementById("navigation_button").style.border = "1px solid lightgray"
            document.getElementById("navigation_button").style.animation = "logo_anim 0.10s"
            document.getElementById("languages").style.color = "black"
            document.getElementById("languages").style.animation = "logo_anim 0.10s"
            document.getElementById("host").style.color = "black"
            document.getElementById("host").style.animation = "logo_anim 0.10s"
            document.getElementById("search_btn").style.height = "48px";
            document.getElementById("search_btn").style.width = "300px";
            document.getElementById("search_bar_flex").style.display = "none";
            document.getElementById("search_btn").style.margin = "17px auto";
            document.getElementById("search_btn").style.position = "relative";
            document.getElementById("search_btn").style.transition = "0.4s";
            document.getElementById("search_btn").style.border = "1px solid rgb(0 0 0 / 8%)";
            document.getElementById("search_btn").style.boxShadow = "0px 1px 12px rgb(0 0 0 / 8%)";
            document.getElementById("search_btn").style.color = "black";
            document.getElementById("option_remove").style.height = "0px";
            document.getElementById("search_logo").style.height = "32px";
            document.getElementById("search_logo").style.width = "32px";
            document.getElementById("start").style.display = "block";
            
        } else {
            document.getElementById("search_btn").style.display = "block";
            document.getElementById("scroll").style.backgroundColor = "black";
            document.getElementById("scroll").style.height = "160px";
            document.getElementById("logo_move").style.color = "white";
            document.getElementById("logo_move").style.animation = "logo_anim 0.10s";
            document.getElementById("navigation_button").style.border = "none"
            document.getElementById("languages").style.color = "white"
            document.getElementById("host").style.color = "white"
            document.getElementById("search_bar_flex").style.display = "";
            document.getElementById("search_btn").style.height = "64px";
            document.getElementById("search_btn").style.width = "848px";
            document.getElementById("search_btn").style.margin = "0px auto";
            document.getElementById("search_btn").style.display = "block";
            document.getElementById("search_btn").style.textAlign = "left";
            document.getElementById("option_remove").style.color = "white";
            document.getElementById("option_remove").style.display = "block";
            document.getElementById("option_remove").style.transition = "0.4s";
            document.getElementById("option_remove").style.height = "80px";
            document.getElementById("search_logo").style.height = "48px";
            document.getElementById("search_logo").style.width = "48px";
            document.getElementById("search_logo").style.display = "block";
            document.getElementById("start").style.display = "none";
            // document.getElementById("search_logo").style.position = "fixed"
            // document.getElementById("search").style.display = "none";
            // document.getElementById("search_btn").style.display = "block";
        }
        }