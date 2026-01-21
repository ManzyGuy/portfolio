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

    // Skills Data
    // Skills Data
    const skills = [
        // Frontend
        { name: "React.js", description: "Frontend Framework", icon: "fa-brands fa-react", category: "frontend" },
        { name: "Tailwind CSS", description: "CSS Framework", icon: "fa-solid fa-wind", category: "frontend" },
        { name: "HTML", description: "Markup Language", icon: "fa-brands fa-html5", category: "frontend" },
        { name: "CSS", description: "Styling", icon: "fa-brands fa-css3-alt", category: "frontend" },
        { name: "JavaScript", description: "Programming", icon: "fa-brands fa-js", category: "frontend" },
        
        // Backend
        { name: "C# (.NET)", description: "Software Development", icon: "fa-brands fa-microsoft", category: "backend" },
        { name: "Python", description: "Programming", icon: "fa-brands fa-python", category: "backend" },
        { name: "R Programming", description: "Data Analysis", icon: "fa-solid fa-chart-bar", category: "backend" },
        { name: "Express.js", description: "Node.js Framework", icon: "fa-brands fa-node-js", category: "backend" },
        { name: "PHP", description: "Server-side Scripting", icon: "fa-brands fa-php", category: "backend" },

        // Database
        { name: "PostgreSQL", description: "Relational Database", icon: "fa-solid fa-database", category: "database" },
        { name: "MySQL", description: "Database System", icon: "fa-solid fa-database", category: "database" },
        { name: "SQLite", description: "Embedded Database", icon: "fa-solid fa-server", category: "database" },
        { name: "Oracle", description: "Enterprise Database", icon: "fa-solid fa-database", category: "database" },

        // Other
        { name: "Android Dev", description: "Mobile Apps", icon: "fa-brands fa-android", category: "other" },
        { name: "Web Dev", description: "Web Applications", icon: "fa-solid fa-globe", category: "other" },
        { name: "Desktop Dev", description: "Desktop Apps", icon: "fa-solid fa-desktop", category: "other" },
        { name: "System Admin", description: "Windows & Linux", icon: "fa-brands fa-linux", category: "other" },
        { name: "Networking", description: "LAN, WAN, WLAN", icon: "fa-solid fa-network-wired", category: "other" },
        { name: "Hardware Support", description: "Maintenance & Repair", icon: "fa-solid fa-screwdriver-wrench", category: "other" },
        { name: "Tech Support", description: "Security & Installation", icon: "fa-solid fa-headset", category: "other" },
        { name: "Microsoft Office", description: "Productivity Tools", icon: "fa-brands fa-microsoft", category: "other" }
    ];

    // Populate Skills Grid
    const skillsGrid = $('.skills-grid');
    skills.forEach(skill => {
        skillsGrid.append(`
            <div class="skill-card" data-category="${skill.category}">
                 <div class="skill-icon-wrapper">
                    <i class="${skill.icon} fa-3x"></i> 
                 </div>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `);
    });

    // Skills Filter
    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        if (filter === 'all') {
            $('.skill-card').show();
        } else {
            $('.skill-card').hide();
            $(`.skill-card[data-category="${filter}"]`).show();
        }
    });

    // Projects Data
    const projects = [
        {
            title: "Company Websites",
            description: "Developed websites for several companies using modern web technologies.",
            image: "https://placehold.co/600x400/2563eb/ffffff?text=Company+Websites",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Brochure Website",
            description: "Created an informative website for a school project with responsive design.",
            image: "https://placehold.co/600x400/10b981/ffffff?text=Brochure+Website",
            tags: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "Expense Tracking System",
            description: "Designed a Windows desktop application for tracking expenses with reporting features.",
            image: "https://placehold.co/600x400/f59e0b/ffffff?text=Expense+Tracker",
            tags: ["C#", ".NET", "SQL"]
        },
        {
            title: "Database Prototype",
            description: "Developed a MySQL database for data management with complex relationships.",
            image: "https://placehold.co/600x400/6366f1/ffffff?text=Database+Prototype",
            tags: ["MySQL", "Database Design"]
        },
        {
            title: "Security Application",
            description: "Built a mobile panic button app for emergency situations with GPS tracking.",
            image: "https://placehold.co/600x400/ef4444/ffffff?text=Security+App",
            tags: ["Android", "Java", "Firebase"]
        },
        {
            title: "AI Chatbot",
            description: "Developed an interactive chatbot as a side project using natural language processing.",
            image: "https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Chatbot",
            tags: ["Python", "NLP", "Machine Learning"]
        },
         {
            title: "School Information Website",
            description: "Responsive school website with admissions portal, gallery, and content management system.",
            image: "https://placehold.co/600x400/ec4899/ffffff?text=School+Website",
            tags: ["PHP", "MySQL", "JavaScript"]
        },
         {
            title: "Church Media Support",
            description: "Managed website content and digital media to enhance communication and visibility.",
            image: "https://placehold.co/600x400/06b6d4/ffffff?text=Media+Support",
            tags: ["WordPress", "CMS"]
        }
    ];

    // Initialize Projects Carousel
    $('.projects-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
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
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        $('.projects-carousel').slick('slickAdd', `
            <div class="project-slide">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
            </div>
        `);
    });

    // Experience Data
    const experience = [
        {
            title: "ICT Tutor & Freelance ICT Consultant",
            company: "Self-Employed, Lilongwe",
            date: "October 2025 – Present",
            description: "Deliver ICT tutoring to students and professionals, focusing on practical understanding and confidence in technology use. Train users on software applications, basic computing, and digital productivity tools. Provide freelance ICT support including system setup, configuration, and troubleshooting. Develop clear explanations and training materials to help users understand and adopt systems effectively."
        },
        {
            title: "Systems / ICT Support Intern",
            company: "Malawi Human Rights Commission (MHRC), Lilongwe",
            date: "July 2025 – October 2025",
            description: "Provided ICT support to staff, resolving hardware, software, and network-related issues. Assisted in administering and maintaining network infrastructure to ensure system reliability and uptime. Supported users with system access issues, installations, and troubleshooting. Documented technical procedures and contributed to system improvements. Additional Responsibilities: Supported documentary production, videography, and photography projects. Developed multimedia content to enhance organizational communication and outreach."
        },
        {
            title: "Software Developer Intern",
            company: "ICTAID, Lilongwe",
            date: "February 2024 – December 2024",
            description: "Assisted in developing, testing, and debugging software applications. Supported system development projects through documentation and technical assistance. Provided basic hardware and software troubleshooting support. Collaborated with team members on ICT solutions tailored to client needs."
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
                    <p class="timeline-date">${item.date}</p>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        timeline.append(itemHTML);
    });

    // Certifications Data
    const certifications = [
        {
            name: "Level 4 Diploma in Computing",
            issuer: "NACIT"
        },
        {
            name: "Level 5 Advanced Diploma in Computing",
            issuer: "NACIT"
        }
    ];

    // Populate Certifications Grid
    const certificationsGrid = $('.certifications-grid');
    if (certificationsGrid.length) {
        certifications.forEach(certification => {
            const card = `
                <div class="certification-card">
                    <h3>${certification.name}</h3>
                    <p>${certification.issuer}</p>
                </div>
            `;
            certificationsGrid.append(card);
        });
    }

    // Volunteer Work Data
    const volunteerWork = [
        {
            title: "Media Support",
            date: "2019–2022",
            description: "Videography and photography – Bwaila Living Waters Church"
        },
        {
             title: "Presidential Debate Taskforce",
             date: "2025",
             description: "ICT and operational support"
        },
        {
            title: "Digital Profile Management",
            date: "2022–2024",
            description: "Managed Google Business profile for Walani Tiga Fashion House"
        }
    ];

    // Populate Volunteer Work Timeline
    const volunteerTimeline = $('.volunteer-timeline');
    if (volunteerTimeline.length) {
        volunteerWork.forEach((item, index) => {
            const itemHTML = `
                <div class="volunteer-item">
                    <div class="volunteer-content">
                        <h3>${item.title}</h3>
                        <p class="volunteer-date">${item.date}</p>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            volunteerTimeline.append(itemHTML);
        });
    }

    // Contact Form Submission
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

        // Reset form
        this.reset();
    });

    // Download CV Button
    $('#download-cv').on('click', function (e) {
        e.preventDefault();
        alert('Downloading CV...');
        // In a real implementation, this would trigger a file download
        // window.location.href = 'path/to/cv.pdf';
    });

    // Typed.js Animation for Hero Subtitle
    if ($('.hero-subtitle').length) {
        const typed = new Typed('.hero-subtitle', {
            strings: ['Software Developer', 'Problem Solver', 'Tech Enthusiast', 'Continuous Learner'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }
});