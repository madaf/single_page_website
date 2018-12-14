"use strict";

function toggleText(event) {
  if (event.target && event.target.className == 'Services__toggle') {
    var next = event.target.nextElementSibling;
    var previous = event.target.previousElementSibling;
    next.style.display == "none" ? (next.style.display = "block", previous.innerHTML = "-") : (next.style.display = "none", previous.innerHTML = "+");
  }
}

document.addEventListener('click', toggleText, true);
//# sourceMappingURL=script.js.map