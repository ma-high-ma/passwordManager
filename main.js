const modalWrapper = document.querySelector(".modals-wrapper");

function displayModal(id) {
    const modal = document.getElementById(id);
    modalWrapper.style.display = "flex";
    modal.style.display = "flex";
    //close-modal
    const close = document.getElementById("close-modal");
    close.addEventListener("click", () => {
    modalWrapper.style.display = "none";
    modal.style.display = "none";
    })
}