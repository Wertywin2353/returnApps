let list = GetReqData('loadlist');
let lister = document.getElementById("AppList");
window.onload = function loadlist() {
    if(list == undefined && null) {
        lister.innerHTML = "<h1 style='text-align:center;'>Пожалуйста, укажите путь к файлу в Интернете.</h1>";
    }
    else {
        fetch(encodeURI(list))
            .then((res) => res.text())
            .then((text) => {
                drawList(text.split(","));
            })
        .catch((e) => console.error(e));
    }
    // https://www.dropbox.com/scl/fi/q86smw5t0o7mzctxiq6au/applist.ini?rlkey=qunch6pyehkyb3uil73a0y9a4&st=vu7y4epb&dl=1
}

function drawList(AppsArray) {
    let x = Object.keys(AppsArray).length;
    let y = 0;
    console.log('Founded Apps: ' + x);
    document.getElementById('total').innerHTML = x;
    while(y < x) {
        let str = String(AppsArray[y]);
        let currect = str.split(':');
        lister.innerHTML = lister.innerHTML + "<br>" + '<a href="http://' + currect[1] + '"><div id="App"><img src="download.png" class="dib"><h2>' + currect[0] + '</h2></div></a>';
        y++;
    }
}

function clicked(ClickID) {
    if(ClickID == 0) {
        let link = prompt("Укажите интернет адрес к ini файлу:");
        window.location.href = "index.html?loadlist=" + link;
    }
    else if(ClickID == 1) {
        window.location.href = "https://docs.google.com/gview?url=https://wertywin2353.github.io/returnApps/documentationForReturnApps.docx";
    }
}