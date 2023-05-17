const refs = {
  toggleBtn: document.querySelector(".toggle"),
  block: document.querySelector(".drop-down"),
  body: document.querySelector("body"),
  icon: document.querySelector(".icon"),
};

const toggleBlock = () => {
  refs.block.classList.toggle("hidden");
  refs.body.classList.toggle("no-scroll");
  refs.icon.classList.toggle("rotate-180");
};

refs.toggleBtn.addEventListener("click", toggleBlock);
