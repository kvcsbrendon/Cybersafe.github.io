document.addEventListener('DOMContentLoaded', function() {
  // Show PDF 1 by default
  showPDF('pdf1');

  // Add event listeners to the buttons
  document.getElementById('pdf1-button').addEventListener('click', function() {
    showPDF('pdf1');
  });

  document.getElementById('pdf2-button').addEventListener('click', function() {
    showPDF('pdf2');
  });

  document.getElementById('pdf3-button').addEventListener('click', function() {
    showPDF('pdf3');
  });

  document.getElementById('pdf4-button').addEventListener('click', function() {
    showPDF('pdf4');
  });
  document.getElementById('pdf5-button').addEventListener('click', function() {
    showPDF('pdf5');
  });
  document.getElementById('pdf6-button').addEventListener('click', function() {
    showPDF('pdf6');
  });
});

function showPDF(pdfId) {
  var pdfContainers = document.getElementsByClassName('pdf-container');
  for (var i = 0; i < pdfContainers.length; i++) {
    pdfContainers[i].style.display = 'none';
  }
  document.getElementById(pdfId).style.display = 'block';

  // Hide all download buttons
  var downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(function(button) {
    button.style.display = 'none';
  });

  // Show download button for the currently displayed PDF
  var currentDownloadButton = document.getElementById(pdfId + '-download');
  if (currentDownloadButton) {
    currentDownloadButton.style.display = 'inline-block';
  }
}
