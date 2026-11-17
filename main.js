/* Marketon by Prateek - main.js
   Keeps the site simple. Everything works without JavaScript;
   this file only adds two small conveniences. */

"use strict";

// 1. Show the current year in the footer.
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. Stop placeholder links (marked with data-placeholder) from jumping to the
//    top of the page. Once you replace a link with a real one, delete the
//    data-placeholder attribute and it will work normally.
var placeholderLinks = document.querySelectorAll("[data-placeholder]");
placeholderLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
