
  
        // Initialize the map
        function initMap() {
            const map = L.map('adventure-map').setView([23.2599, 77.4126], 5);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            const destinations = [
                { name: "Manali, Himachal", coords: [32.2396, 77.1887], description: "Skiing, paragliding, rafting. Best time: Dec-Mar." },
                { name: "Spiti Valley, Himachal", coords: [32.2500, 78.0167], description: "Mountain biking, camping. Best time: May-Sep." },
                { name: "Bir Billing, Himachal", coords: [32.0500, 76.7167], description: "World-class paragliding. Best time: Oct-Jun." },
                { name: "Rishikesh, Uttarakhand", coords: [30.0869, 78.2676], description: "Rafting, bungee jumping. Best time: Sep-Jun." },
                { name: "Auli, Uttarakhand", coords: [30.5286, 79.5716], description: "Skiing, snowboarding. Best time: Dec-Mar." },
                { name: "Jim Corbett, Uttarakhand", coords: [29.5300, 78.7747], description: "Jeep safari, tiger spotting. Best time: Nov-Jun." },
                { name: "Leh-Ladakh", coords: [34.1526, 77.5771], description: "Bike trips, Chadar Trek. Best time: Jun-Sep." },
                { name: "Zanskar River, Ladakh", coords: [33.5000, 76.8333], description: "Frozen river trekking. Best time: Jan-Feb." },
                { name: "Gangtok, Sikkim", coords: [27.3389, 88.6065], description: "Trekking, rafting, yak rides. Best time: Mar-Jun." },
                { name: "Sundarbans, West Bengal", coords: [21.9497, 88.8983], description: "Mangrove safari, tiger spotting. Best time: Sep-Mar." },
                { name: "Darjeeling, West Bengal", coords: [27.0360, 88.2627], description: "Trekking, Teesta rafting. Best time: Mar-May." },
                { name: "Cherrapunji, Meghalaya", coords: [25.2702, 91.7322], description: "Caving, root bridge trekking. Best time: Oct-Apr." },
                { name: "Kaziranga, Assam", coords: [26.5775, 93.1711], description: "Jeep/elephant safari, rhino spotting. Best time: Nov-Apr." },
                { name: "Jaisalmer, Rajasthan", coords: [26.9176, 70.5848], description: "Camel safari, dune bashing. Best time: Oct-Feb." },
                { name: "Gir, Gujarat", coords: [21.1356, 70.5982], description: "Asiatic lion safari. Best time: Oct-Jun." },
                { name: "Rann of Kutch, Gujarat", coords: [23.7337, 69.8597], description: "Rann Utsav, jeep tours. Best time: Nov-Feb." },
                { name: "Goa", coords: [15.2993, 74.1240], description: "Scuba diving, parasailing. Best time: Oct-Mar." },
                { name: "Gokarna, Karnataka", coords: [14.5500, 74.3167], description: "Beach trekking, surfing. Best time: Oct-Mar." },
                { name: "Coorg, Karnataka", coords: [12.3375, 75.8069], description: "Rafting, plantation treks. Best time: Oct-Mar." },
                { name: "Varkala, Kerala", coords: [8.7379, 76.7167], description: "Cliff diving, surfing. Best time: Oct-Mar." },
                { name: "Kodaikanal, Tamil Nadu", coords: [10.2381, 77.4892], description: "Rock climbing, trekking. Best time: Oct-Mar." },
                { name: "Havelock, Andaman", coords: [11.9759, 92.9982], description: "Scuba diving, snorkeling. Best time: Nov-Apr." },
                { name: "Agatti, Lakshadweep", coords: [10.8575, 72.1964], description: "Scuba diving, kayaking. Best time: Oct-May." }
            ];
            
            destinations.forEach(destination => {
                const marker = L.marker(destination.coords).addTo(map);
                marker.bindPopup(`
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <a href="#" class="btn">Explore Adventure</a>
                `);
            });
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            initMap();
            
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    btn.classList.add('active');
                    const tabId = btn.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter form');
            
            newsletterForms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    alert(`Thank you for subscribing with: ${email}`);
                    this.reset();
                });
            });
            
            function animateOnScroll() {
                const elements = document.querySelectorAll('.adventure-card, .gallery-item, .testimonial-card, .feature');
                
                elements.forEach(el => {
                    const position = el.getBoundingClientRect();
                    if(position.top < window.innerHeight - 100) {
                        el.classList.add('animated');
                    }
                });
            }
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
            
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = "linear-gradient(90deg, var(--primary) 0%, var(--dark) 80%)";
                    header.style.padding = "10px 0";
                    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
                } else {
                    header.style.background = "linear-gradient(90deg, var(--primary) 0%, var(--dark) 100%)";
                    header.style.padding = "15px 0";
                    header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
                }
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
   