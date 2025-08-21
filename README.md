# IndiaQuestAdventure-forntend Project
IndiaQuest: Responsive web app for India’s treks &amp; dives. Features sticky header, parallax hero, orange-hover gallery, tabs, &amp; Leaflet map. Built for adventure.
IndiaQuest Adventures is a vibrant, responsive web application showcasing India’s thrilling adventure tourism, from Himalayan treks to Andaman scuba dives. Built with HTML, CSS, and JavaScript, it features a sticky header that remains visible during scrolling with a dynamic scrolled class for a darker gradient and enhanced shadow. The hero section captivates with a smooth parallax background effect, achieved using a .hero:before pseudo-element and JavaScript-driven backgroundPositionY adjustments. The gallery section engages users with overlay text that transitions to a vibrant orange (--accent-light) on hover, ensuring readability and interactivity. Interactive elements like tabs, a Leaflet-powered adventure map, and animated cards enhance the experience. Responsive design ensures seamless functionality across devices, with preserved features like mobile menu toggling and scroll animations. Dependencies include Font Awesome and Leaflet. Explore India’s diverse landscapes with IndiaQuest, designed for adventure enthusiasts and sustainable travel since 2025.



Section-Wise Review

Header: Implemented position: fixed; top: 0; to keep the header visible. Added .header.scrolled with a darker gradient (linear-gradient(90deg, var(--primary) 0%, var(--dark) 80%)) and shadow (box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3)) when scrolling past 100px, toggled via JavaScript (if (scrollPosition > 100)).

Hero: Added parallax effect by moving the background to .hero:before with background-attachment: fixed and JavaScript (hero.style.backgroundPositionY = \${scrollPosition * 0.5}px`). Ensures content visibility with z-index: 2`.

Gallery: Updated .gallery-overlay to transition text color to --accent-light (orange) on hover (transition: var(--transition), color 0.3s ease), enhancing interactivity.

JavaScript: Consolidated scroll event listener for header and parallax effects, maintaining efficiency. Preserved tabs, mobile menu, and animations.

Other Sections: Verified no regressions in tabs, Leaflet map, or responsive design. Tested across Chrome, Firefox, and mobile devices; all features work smoothly.
