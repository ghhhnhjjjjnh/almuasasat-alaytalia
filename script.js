const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");

navToggle.addEventListener("click", () => {
  const isVisible = mainNav.getAttribute("data-visible");

  if (isVisible === "false") {
    mainNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  } else {
    mainNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
});

// إغلاق القائمة عند الضغط على أي رابط بداخلها
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});