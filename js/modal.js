(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    animatedModal: document.querySelector("[data-modal-animated]"),
    // body: document.querySelector("[data-body]"),
  };

  console.log(refs.modal.dataset);

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    const clases = [...refs.animatedModal.classList];
    if (clases.includes("animate__bounceOut")) {
      refs.animatedModal.classList.add("animate__bounceIn");
      refs.animatedModal.classList.remove("animate__bounceOut");
    } else {
      refs.animatedModal.classList.remove("animate__bounceIn");
      refs.animatedModal.classList.add("animate__bounceOut");
    }

    // refs.body.classList.toggle("no-scroll");
  }
})();
