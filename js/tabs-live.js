    function City(evt, cityName) {
        var i, tabcontentlive, tablinkslive;
        tabcontentlive = document.getElementsByClassName("tabcontentlive");
        for (i = 0; i < tabcontentlive.length; i++) {
            tabcontentlive[i].style.display = "none";
        }
        tablinkslive = document.getElementsByClassName("tablinkslive");
        for (i = 0; i < tablinkslive.length; i++) {
            tablinkslive[i].className = tablinkslive[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    setTimeout(() => { document.getElementById("one-live").click() }, 500);

