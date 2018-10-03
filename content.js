var decryptSelection = function (text) {
    console.log("decryptSelection is invoked");
    console.log(text);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: text,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(json => {console.log(json)
            $("<p>"+json.body+"</p>").appendTo('body').modal();
        })
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "decryptSelection") {
        decryptSelection(message.selection);
    }
});

var clickedEl = null;

document.addEventListener("mousedown", function (event) {
    //right click
    if (event.button == 2) {
        clickedEl = event.target;
        console.log(clickedEl)
    }
}, true);