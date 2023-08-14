let navItems = document.querySelectorAll(".topside > div > ul > li > a");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    document.querySelector(".topside > div > ul > li > a.active").classList.remove("active");
    e.target.classList.add("active");
  });
});