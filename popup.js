document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.nav-button');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(button => {
      button.addEventListener('click', () => {
          navButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(tab => tab.classList.remove('active'));

          button.classList.add('active');

          const tabId = button.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });
});
