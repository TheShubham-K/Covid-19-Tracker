const xhr = new XMLHttpRequest();
var a = "state";
var b = "bottd";
var y = ["Confirmed", "Recovered", "Deaths", '\u2191', '\u2193'];

xhr.onload = function () {
    var obj = JSON.parse(xhr.response);
    for (var i = 0; i < 38; i++) {
        if (obj.statewise[i].state != null) {
            createObject(i);
            document.getElementById(a + i).innerHTML = obj.statewise[i].state;
            document.getElementById(b + i + 0).innerHTML = obj.statewise[i].confirmed;
            document.getElementById(b + i + 1).innerHTML = obj.statewise[i].recovered;
            document.getElementById(b + i + 2).innerHTML = obj.statewise[i].deaths;
            document.getElementById(b + i + 3).innerHTML = obj.statewise[i].deltaconfirmed;
            document.getElementById(b + i + 3).style.color = "green";
            document.getElementById(b + i + 4).innerHTML = obj.statewise[i].deltadeaths;
            document.getElementById(b + i + 4).style.color = "red";
        }

    }
};

xhr.open('get', 'https://api.covid19india.org/data.json');
xhr.send();

function createObject(x) {
    var newDiv = document.createElement('div');
    newDiv.className = "contain";
    newDiv.id = "card" + x;
    document.getElementById("main").appendChild(newDiv);

    var newTable = document.createElement('table');
    document.getElementById("card" + x).appendChild(newTable);
    newTable.id = "table" + x;

    var newTBody = document.createElement('tbody');
    document.getElementById("table" + x).appendChild(newTBody);
    newTBody.id = "tbody" + x;

    var topTr = document.createElement('tr');
    document.getElementById("tbody" + x).appendChild(topTr);
    topTr.id = "toptr" + x;

    var topTd = document.createElement('td');
    document.getElementById("toptr" + x).appendChild(topTd);
    topTd.id = "state" + x;
    topTd.className = "head";
    document.getElementById("state" + x).colSpan = "5";

    var midTr = document.createElement('tr');
    document.getElementById("tbody" + x).appendChild(midTr);
    midTr.id = "midtr" + x;


    for (var j = 0; j < 5; j++) {
        var midTd = document.createElement('td');
        document.getElementById("midtr" + x).appendChild(midTd);
        midTd.id = "midtd" + x + j;
        document.getElementById("midtd" + x + j).innerText = y[j];
    }

    var botTr = document.createElement('tr');
    document.getElementById("tbody" + x).appendChild(botTr);
    botTr.id = "bottr" + x;

    for (var j = 0; j < 5; j++) {
        var botTd = document.createElement('td');
        document.getElementById("bottr" + x).appendChild(botTd);
        botTd.id = "bottd" + x + j;
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}