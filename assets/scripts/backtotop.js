window.onload = function() {
  showBackToTopButton();
};

window.onscroll = function() {
  showBackToTopButton();
};

function showBackToTopButton() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  var windowHeight = window.innerHeight;
  var documentHeight = Math.max(
      document.body.scrollHeight, 
      document.documentElement.scrollHeight,
      document.body.offsetHeight, 
      document.documentElement.offsetHeight,
      document.body.clientHeight, 
      document.documentElement.clientHeight
  );

  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) || documentHeight > windowHeight) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }

  if ((document.body.scrollTop === 0 && document.documentElement.scrollTop === 0)) {
      backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





// **********************************************
// *   This code was written by Brendon Kovacs   *
// *                                             *
// *   If you have any questions or inquiries,   *
// *   please contact me at:                     *
// *   kvcsbrendon@gmail.com                     *
// *                                             *
// **********************************************

