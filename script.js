// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function myFunction(recipe) {
  let dots = document.querySelector(`.text[recipe="${recipe}"] .dots`);
  let moreText = document.querySelector(`.text[recipe="${recipe}"] .more`);
  let btnText = document.querySelector(`.text[recipe="${recipe}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
