const followBtn = document.querySelector(".follow-btn");
followBtn.addEventListener("click", () => {
  const isFollowed = followBtn.classList.toggle("followed");
  if (isFollowed) {
    followBtn.children[0].src = "images/icons/check-icon.svg";
    followBtn.children[1].textContent = "Followed";
  } else {
    followBtn.children[0].src = "images/icons/plus-icon.svg";
    followBtn.children[1].textContent = "Follow";
  }
});

const galleryImgs = document.querySelectorAll(".gallery-img");
const galleyModal = document.querySelector(".gallery-modal");
const modalCloseBtn = document.querySelector(".close-btn");

galleryImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    galleyModal.children[1].src = e.target.src;
    galleyModal.classList.add("show");
  });
});
modalCloseBtn.addEventListener("click", () =>
  galleyModal.classList.remove("show")
);
