var cart = 0;
let myBtns = document.querySelectorAll(".shop-btn");
myBtns.forEach(function (myBtn) {
  // Iterate over each button
  myBtn.onclick = function () {
    cart += 1;
    console.log(`added to cart ${cart} times`);
    const cartNav = document.getElementById("cart-nav");
    cartNav.setAttribute("data-count", cart);
  };
});


document.getElementById("hamburger").addEventListener("click", function () {
  const navbarList = document.getElementById("navbar-list");
  navbarList.classList.toggle("show"); // Toggle the display of the navbar items
});

// Change active class on menu link click

//chatgpt code :( 
// document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  const activeLinkKey = "activeLink"; // Key for local storage

  // Function to set the active link based on local storage
  function setActiveLink() {
      const activeLink = localStorage.getItem(activeLinkKey);
      
      menuLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.href === activeLink) {
              link.classList.add("active");
          }
      });
  }

  // Set active link on page load
  setActiveLink();

  menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
          // Store the clicked link in local storage
          localStorage.setItem(activeLinkKey, this.href);
      });
  });
