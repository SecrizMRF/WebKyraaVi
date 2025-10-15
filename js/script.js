AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
}); 

function openAndDownloadPDF() {
  // Buka di tab baru
  window.open('documents/Portofolio.pdf', '_blank');
  // Download file
  const link = document.createElement('a');
  link.href = 'documents/Portofolio.pdf';
  link.download = 'Portofolio.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}