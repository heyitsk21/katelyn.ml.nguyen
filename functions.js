// function loadStyle() {
//     page_style = localStorage.getItem("page_stylesheet_name");
//     if(page_style === null) {
//         page_style = "second_style.css"; //this is what i'm making the default style
//     }
//     document.getElementById("page_style").setAttribute("href", page_style);
// }

// function switchCss() {
//     if (page_style === "styles_home.css") {
//         // document.getElementById("selected_css").setAttribute("href", "second_style.css");
//         // page_style = "second_style.css";
//         localStorage.setItem("page_stylesheet_name", "style_home.css");
//     } else {
//         // document.getElementById("selected_css").setAttribute("href", "style_home.css");
//         // page_style = "style_home.css";
//         localStorage.setItem("page_stylesheet_name", "second_style.css");
//     }
// }

function toggleStyleSheet() {
    var element = document.getElementById("selected_css");
    var stylename = element.getAttribute("href");
    if (stylename == "style_home.css") {
        stylename = "second_style.css";
    }
    else {
        stylename = "style_home.css";
    }

    element.setAttribute("href", stylename);
    localStorage.setItem("style", stylename);
}

window.onload = function() {
    var local1 = localStorage.getItem("style");
    var element = document.getElementById("selected_css");
    var stylename = element.getAttribute("href");
    element.setAttribute("href",local1);
}

// function setIcon(favImg){
//     let headTitle = document.querySelector('head');
//     let setFavicon = document.createElement('link');
//     setFavicon.setAttribute('rel','icon');
//     setFavicon.setAttribute('href',favImg);
//     headTitle.appendChild(setFavicon);
// }

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Link copied to clipboard: ' + text);

    // var Text = document.getElementById("")

    // navigator.clipboard.writeText(text);
}


toggleStyleSheet()


// loadStyle()


// "1" + 1 = "11" //
// "1" - 1 = 0    //



// var num = 0; // global variable

// function button1() {
//     num++;
//     document.getElementById("output").innerText = "Pressed x "+num+"of times.";
// }

// function switchToPlain() {
//     document.getElementById("selected_css").setAttribute("href", "")
// }

// function switchToPlain() {
//     document.getElementById("selected_css").setAttribute("href", "")
// }