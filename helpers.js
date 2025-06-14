document.addEventListener('DOMContentLoaded', () => {
  // Remove the icons from the github-related links in the footer
  const footerTocIcons = document.querySelectorAll('footer .nav-footer .nav-footer-center .toc-action i');
  footerTocIcons.forEach(icon => {
    icon.remove();
  });
});
