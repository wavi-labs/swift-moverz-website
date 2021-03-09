const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
mobileMenu.classList.add('hidden');
var mobileMenuOpen = false;
console.log("Script starting");
const navbar = document.getElementById('navbar');
const navbarLinks = navbar.querySelectorAll('a');

var tabs = Array.from(document.getElementsByClassName("tab"));
var mobileTabs = Array.from(document.getElementsByClassName("mobile-tab"));

window.addEventListener('resize', () => {
  mobileMenuOpen = false;
  mobileMenu.classList.add('hidden');
});

// NAVBAR START //
navbarLinks.forEach((link) => {
  link.onclick = function () {
    mobileMenu.classList.add('hidden');
  }
});
// NAVBAR END //

// Mobile Menu Start //
mobileMenuButton.onclick = () => {
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    console.log("hello");
  } else {
    mobileMenuOpen = true;
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    console.log("hello");
  }
}
// Mobile Menu End //

// TABS //
tabs.forEach(e => {
  e.onclick = function () {
    if (e.classList.contains("tab")) {
      tabs.forEach(e_ => {
        e_.classList.remove("tab-selected");
        e_.classList.add("tab");
      });
      e.classList.remove("tab");
      e.classList.add("tab-selected");
    }
  }
});
// TABS END //
mobileTabs[0].classList.remove('mobile-tab');
mobileTabs[0].classList.add('mobile-tab-selected');
// MOBILE TABS //
mobileTabs.forEach(e => {
  e.onclick = function () {
    if (e.classList.contains("mobile-tab")) {
      mobileTabs.forEach(e_ => {
        e_.classList.remove("mobile-tab-selected");
        e_.classList.add("mobile-tab");
      });
      e.classList.remove("mobile-tab");
      e.classList.add("mobile-tab-selected");
    }
    if (mobileMenuOpen) {
      mobileMenuOpen = false;
      mobileMenu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      cross.classList.toggle('hidden');
      console.log("hello");
    } else {
      mobileMenuOpen = true;
      mobileMenu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      cross.classList.toggle('hidden');
      console.log("hello");
    }
  }
});
// MOBILE TABS END //
