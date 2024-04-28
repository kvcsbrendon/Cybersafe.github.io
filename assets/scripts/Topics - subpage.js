document.addEventListener("DOMContentLoaded", function() {
  var accordionItems = document.getElementsByClassName("accordion-item");

  for (var i = 0; i < accordionItems.length; i++) {
    var button = accordionItems[i].querySelector("button");
    button.addEventListener("click", toggleAccordion);
  }

  function toggleAccordion() {
    var content = this.nextElementSibling;
    var expanded = this.getAttribute("aria-expanded");

    if (expanded === "true") {
      this.setAttribute("aria-expanded", "false");
      content.style.display = "none";
    } else {
      this.setAttribute("aria-expanded", "true");
      content.style.display = "block";
    }
  }
});