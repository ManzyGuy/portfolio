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
    const skills = [
        { name: "C# (.NET)", description: "Software Development", icon: "images/dotnet.png", category: "backend" },
        { name: "Python", description: "Software Development", icon: "images/python.png", category: "backend" },
        { name: "R Programming", description: "Software Development", icon: "images/r.png", category: "backend" },
        { name: "React.js", description: "Frontend Development", icon: "images/react.png", category: "frontend" },
        { name: "Tailwind CSS", description: "Frontend Development", icon: "images/tailwind.png", category: "frontend" },
        { name: "HTML", description: "Frontend Development", icon: "images/html.png", category: "frontend" },
        { name: "CSS", description: "Frontend Development", icon: "images/css.png", category: "frontend" },
        { name: "JavaScript", description: "Frontend Development", icon: "images/js.png", category: "frontend" },
        { name: "Express.js", description: "Backend Development", icon: "images/expressjs.png", category: "backend" },
        { name: "PHP", description: "Backend Development", icon: "images/php.png", category: "backend" },
        { name: "PostgreSQL", description: "Database Management", icon: "images/postgres.png", category: "database" },
        { name: "MySQL", description: "Database Management", icon: "images/mysql.png", category: "database" },
        { name: "SQLite", description: "Database Management", icon: "images/sqlite.png", category: "database" },
        { name: "Oracle", description: "Database Management", icon: "images/oracle.png", category: "database" },
        { name: "Android Dev", description: "Application Development", icon: "images/app.jpeg", category: "other" },
        { name: "Web Dev", description: "Application Development", icon: "images/web.png", category: "other" },
        { name: "Desktop Dev", description: "Application Development", icon: "images/desktop.png", category: "other" },
        { name: "Sys Admin", description: "Windows & Linux", icon: "images/server.png", category: "other" },
        { name: "Networking", description: "LAN, WAN, WLAN", icon: "images/network.png", category: "other" },
        { name: "Hardware Support", description: "Maintenance & Repair", icon: "images/hardware.png", category: "other" },
        { name: "Tech Support", description: "Security & Installation", icon: "images/support.png", category: "other" },
        { name: "Microsoft Office", description: "Productivity Tools", icon: "images/microsoft.png", category: "other" }
    ];

    // Populate Skills Grid
    const skillsGrid = $('.skills-grid');
    skills.forEach(skill => {
        // Use a default icon if specific one doesn't exist or just use a generic code icon for now to avoid broken images
        // For this update, I'll keep the logic but be aware images might need to be checked.
        const card = `
            <div class="skill-card" data-category="${skill.category}">
                <div class="skill-icon-wrapper">
                    <i class="fas fa-code"></i> 
                </div>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `;
        // Note: I replaced img with a font awesome icon wrapper for now as I don't have all the new icons. 
        // If the user wants specific images, they should be added to the images folder.
        // Reverting to img tag if I assume images exist, but for safety I will use the icon class logic if I can, 
        // but the previous code used <img>. Let's stick to <img> but maybe add an error handler or just keep it as is.
        // Actually, let's use the <img> tag as before, but I'll need to make sure the paths are correct.
        // The user didn't provide new images, so I will use a generic placeholder or the existing ones where possible.
        // For the purpose of this task, I will use the <img> tag but with a fallback or just keep it simple.

        // Let's use the code from before but cleaned up.
        skillsGrid.append(`
            <div class="skill-card" data-category="${skill.category}">
                 <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" onerror="this.src='images/default-skill.png'; this.onerror=null;"> 
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
            image: "images/company.jpeg",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Brochure Website",
            description: "Created an informative website for a school project with responsive design.",
            image: "images/xul_web.jpeg",
            tags: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "Expense Tracking System",
            description: "Designed a Windows desktop application for tracking expenses with reporting features.",
            image: "images/exp_tracker.jpeg",
            tags: ["C#", ".NET", "SQL"]
        },
        {
            title: "Database Prototype",
            description: "Developed a MySQL database for data management with complex relationships.",
            image: "images/database.jpeg",
            tags: ["MySQL", "Database Design"]
        },
        {
            title: "Security Application",
            description: "Built a mobile panic button app for emergency situations with GPS tracking.",
            image: "images/app.jpeg",
            tags: ["Android", "Java", "Firebase"]
        },
        {
            title: "AI Chatbot",
            description: "Developed an interactive chatbot as a side project using natural language processing.",
            image: "images/chatbot.jpeg",
            tags: ["Python", "NLP", "Machine Learning"]
        },
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
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='images/default-project.png'; this.onerror=null;">
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
            date: "November 2025 – Present",
            description: "Providing ICT tutoring services to students and professionals. Offering freelance basic ICT solutions including system setup and configuration. Delivering technical support and training on various software applications."
        },
        {
            title: "Systems Analyst Intern, Malawi Human Rights Commission (MHRC)",
            date: "July 2025 – October 2025",
            description: "Assisting in the management and maintenance of the Commission's network infrastructure. Troubleshooting and resolving hardware and software issues. Supporting users with system problems and ensuring network uptime. Documenting technical procedures and contributing to system improvements. Additional Responsibilities: Communications and Multimedia - Coordinated documentary production, videography, and photography projects. Developed visual content to support organizational initiatives. Utilized multimedia assets to enhance communication and engagement."
        },
        {
            title: "Software Development Intern, ICTAID",
            date: "February 2024 – December 2024",
            description: "Assisted in testing, debugging, and developing software applications. Provided support on software and hardware troubleshooting. Collaborated on ICT-related project development and documentation. Participated in marketing and client outreach for ICTAID services."
        }
    ];

    // Populate Experience Timeline
    const timeline = $('.experience-timeline');
    experience.forEach((item, index) => {
        const itemHTML = `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${item.title}</h3>
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
            description: "Videography and photography at Bwaila Living Waters Church"
        },
        {
            title: "Digital Profile Management",
            date: "2022–2024",
            description: "Managed Walani Tiga Fashion House's Google Business profile"
        },
        {
            title: "Presidential Debate Taskforce",
            date: "2025",
            description: "Contributed to the smooth execution of the debate, ensuring a successful outcome"
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