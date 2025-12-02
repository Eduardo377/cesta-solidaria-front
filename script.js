const modal = document.getElementById("modalPix");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const donateButtons = document.querySelectorAll(".btn-donate");

donateButtons.forEach((button) => {
    button.addEventListener("click", function () {
        modal.style.display = "block";
    });
});

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function copyPix() {
    var copyText = document.getElementById("pixKey");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then(() => {
    const feedback = document.getElementById("copyFeedback");
    feedback.classList.add("visible");
    setTimeout(() => {
            feedback.classList.remove("visible");
        }, 3000);
    });
}
