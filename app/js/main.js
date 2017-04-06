var navBtn = document.getElementById("nav-btn"),
    listNav = document.getElementById("list-nav");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("navigation__btn-toggle--closed");
  navBtn.classList.toggle("navigation__btn-toggle--open");
  listNav.classList.toggle("show");
});
