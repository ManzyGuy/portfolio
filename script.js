$(document).ready(function () {
    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Mobile Navigation Toggle
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });

    // Close mobile menu when clicking a link
    $('.nav-link').on('click', function () {
        $('.hamburger').removeClass('active');
        $('.nav-list').removeClass('active');
    });

    // Smooth Scrolling for Navigation Links
    $('nav a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Header Scroll Effect
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }

        // Back to top button
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    // Back to top button
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });

    // Services Data
    const services = [
        {
            title: "IT Support & Repairs",
            icon: "fa-solid fa-wrench",
            items: [
                "Computer & phone repair",
                "Software installation",
                "Network troubleshooting"
            ]
        },
        {
            title: "Website Development",
            icon: "fa-solid fa-globe",
            items: [
                "Business websites",
                "Portfolio sites",
                "Website maintenance"
            ]
        },
        {
            title: "Custom Software",
            icon: "fa-solid fa-code",
            items: [
                "Small business systems",
                "Desktop apps",
                "Database solutions"
            ]
        },
        {
            title: "UI/UX Design",
            icon: "fa-solid fa-pen-nib",
            items: [
                "App interfaces",
                "Wireframes",
                "User-focused design"
            ]
        },
        {
            title: "Training & Support",
            icon: "fa-solid fa-chalkboard-user",
            items: [
                "Staff ICT training",
                "System onboarding",
                "Basic computer literacy"
            ]
        }
    ];

    // Populate Services Grid
    const servicesGrid = $('.services-grid');
    services.forEach(service => {
        const itemsList = service.items.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('');
        servicesGrid.append(`
            <div class="service-card">
                 <div class="service-icon-wrapper">
                    <i class="${service.icon} fa-2x"></i> 
                 </div>
                <h3>${service.title}</h3>
                <ul class="service-list">
                    ${itemsList}
                </ul>
            </div>
        `);
    });

    // Projects Data
    const projects = [
        {
            title: "Inventory System for Small Business",
            problem: "Manual tracking was slow and error-prone.",
            solution: "Built a desktop app with database integration focusing on ease of use.",
            result: "Improved tracking efficiency and significantly reduced errors.",
            image: "https://placehold.co/600x400/2563eb/ffffff?text=Inventory+System"
        },
        {
            title: "School Communication Portal",
            problem: "Parents were missing important updates and fee notifications.",
            solution: "Developed a responsive web portal for seamless announcements.",
            result: "Increased engagement and faster information dissemination.",
            image: "https://placehold.co/600x400/10b981/ffffff?text=School+Portal"
        },
        {
            title: "Local Retailer IT Upgrade",
            problem: "Outdated hardware and frequent network failures.",
            solution: "Repaired existing machines, upgraded network, and trained staff.",
            result: "Zero downtime in the last 6 months and faster checkout times.",
            image: "https://placehold.co/600x400/f59e0b/ffffff?text=IT+Upgrade"
        }
    ];

    // Initialize Projects Carousel
    $('.projects-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Populate Projects Carousel
    projects.forEach(project => {
        $('.projects-carousel').slick('slickAdd', `
            <div class="project-slide case-study-slide">
                <div class="case-study-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-content case-study-content">
                    <h3>${project.title}</h3>
                    
                    <div class="case-section">
                        <h4><i class="fas fa-exclamation-circle" style="color: #ef4444;"></i> The Problem</h4>
                        <p>${project.problem}</p>
                    </div>
                    
                    <div class="case-section">
                        <h4><i class="fas fa-lightbulb" style="color: #f59e0b;"></i> The Solution</h4>
                        <p>${project.solution}</p>
                    </div>
                    
                    <div class="case-section">
                        <h4><i class="fas fa-chart-line" style="color: #10b981;"></i> The Result</h4>
                        <p>${project.result}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // Experience Data
    const experience = [
        {
            title: "ICT Support Intern",
            company: "Malawi Human Rights Commission (MHRC)",
            description: "Helped maintain systems, resolved user issues, and supported network operations."
        },
        {
            title: "Software Developer Intern",
            company: "ICTAID",
            description: "Worked on software development, debugging, and system support."
        },
        {
            title: "ICT Tutor",
            company: "Shinning Stars Academy",
            description: "Taught ICT and supported system setup."
        }
    ];

    // Populate Experience Timeline
    const timeline = $('.experience-timeline');
    experience.forEach((item, index) => {
        const itemHTML = `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <h4 style="color: var(--secondary-color); font-size: 0.95rem; margin-bottom: 0.5rem;">${item.company}</h4>
                    <p style="margin-top: 0.5rem;">${item.description}</p>
                </div>
            </div>
        `;
        timeline.append(itemHTML);
    });

    // Contact Form Submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Simple validation
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Send email via mailto
        const subject = encodeURIComponent(`New Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
        
        window.location.href = `mailto:kawongaemmanuel3@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        alert(`Thank you, ${name}! Your email client has been opened to send the message.`);

        // Reset form
        this.reset();
    });
});