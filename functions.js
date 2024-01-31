var num = 0; // global variable

// function button1() {
//     num++;
//     document.getElementById("output").innerText = "Pressed x "+num+"of times.";
// }

function switchToParis() {
    document.getElementById("selected_css").setAttribute("href", "style_home.css")
}

function switchToPlain() {
    document.getElementById("selected_css").setAttribute("href", "")
}

function switchToPlain() {
    document.getElementById("selected_css").setAttribute("href", "")
}

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Link copied to clipboard: ' + text);
}

// "1" + 1 = "11" //
// "1" - 1 = 0    //