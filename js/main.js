document.addEventListener('DOMContentLoaded', function() {
    
    // Select all the key elements
    const allSections = document.querySelectorAll('.page');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');

    // Function to switch between views
    function showPage(targetId) {
        
        // 1. Hide every content section first
        allSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // 2. Logic for "Home"
        if (targetId === 'home') {
            // Show the Profile Header
            if (header) header.style.display = 'block';
            
            // Show About and News sections
            const about = document.getElementById('about');
            const news = document.getElementById('news');
            
            if (about) {
                about.style.display = 'block';
                about.classList.add('active');
            }
            if (news) {
                news.style.display = 'block';
                news.classList.add('active');
            }
        } 
        // 3. Logic for all other tabs (Research, Teaching, etc.)
        else {
            // Hide the Profile Header to save space
            if (header) header.style.display = 'none';

            // Find the specific section (e.g., id="publications") and show it
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.style.display = 'block';
                activeSection.classList.add('active');
            }
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('data-target');
            
            // Only react if the link has a data-target attribute
            if (target) {
                e.preventDefault(); // Stop standard link behavior
                showPage(target);   // Run our switch function
            }
        });
    });

    // Run this immediately on load so the page isn't blank
    showPage('home');
});
