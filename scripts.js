/* Place your JavaScript in this file */
function iframeChange() {
    var buttons = document.querySelector(".loadiframe");
    var iframe = document.getElementById('frame');

    buttons.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            iframe.src = e.target.dataset.src;
        }
    });
}
window.onload = iframeChange;
//iframe set/change
