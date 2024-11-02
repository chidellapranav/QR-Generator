// index.js

// Event listener for form submission
document.getElementById('qrForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const url = document.getElementById('urlInput').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCanvas = document.getElementById('qrCanvas');
  
    if (url) {
      qrCodeContainer.classList.add('visible'); // Show QR code container
  
      // Generate QR code
      QRCode.toCanvas(qrCanvas, url, { width: 200, margin: 2 }, (err) => {
        if (err) {
          console.error(err);
          alert('Error generating QR Code');
        }
      });
    }
  });
  
  // Download QR code as an image
  function downloadQRCode() {
    const qrCanvas = document.getElementById('qrCanvas');
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCanvas.toDataURL('image/png');
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  }
  