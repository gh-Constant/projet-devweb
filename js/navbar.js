document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarDefault = document.getElementById('navbar-default');

    navbarToggle.addEventListener('click', function() {
        navbarDefault.classList.toggle('active');
        navbarToggle.setAttribute('aria-expanded', navbarDefault.classList.contains('active'));
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbarDefault.contains(event.target);
        const isClickOnToggle = navbarToggle.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggle && navbarDefault.classList.contains('active')) {
            navbarDefault.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Ensure the menu is visible on larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) { // md breakpoint
            navbarDefault.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
        }
    });
});