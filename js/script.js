document.write('<h2>Ground</h2>');
var place = document.getElementById('place');
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    var size = Choice3.value;
    for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        if (entry[1] === 'circle') {
            place.innerHTML = 'new text' + '<div class = \"circle\" style = \"height:' + size + 'px;width:' + size + 'px\"</div>';
        }
        if (entry[1] === 'rectangle') {
            place.innerHTML = 'new text' + '<div class = \"rectangle\" style = \"height:' + size + 'px;width:' + size + 'px\"</div>';
        }
    };
    log.innerText = output;
    event.preventDefault();
}, false);

var size = Choice3.value;
console.log(size);