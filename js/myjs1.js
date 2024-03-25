function searchBnet() {
    console.log("hello");
    window.open("https://overwatch.blizzard.com/en_US/search/?q=" + btag, "_blank");
}

var btagform = document.getElementById("btagform");
var btag = document.getElementById("btag");
btagform.addEventListener("submit", searchBnet);