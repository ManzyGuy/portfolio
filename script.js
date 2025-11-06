$(document).ready(function() {
    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Mobile Navigation Toggle
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });

    // Close mobile menu when clicking a link
    $('.nav-link').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.nav-list').removeClass('active');
    });

    // Smooth Scrolling for Navigation Links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Header Scroll Effect
    $(window).on('scroll', function() {
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
    $('.back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });

    // Skills Filter
    $('.filter-btn').on('click', function() {
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

    // Skills Data
    const skills = [
        {
            name: "React.js",
            description: "Frontend development.",
            icon: "images/react.png",
            category: "frontend"
        },
        {
            name: "Tailwind CSS",
            description: "Frontend styling.",
            icon: "images/tailwind.png",
            category: "frontend"
        },
        {
            name: "HTML",
            description: "Web structure.",
            icon: "images/html.png",
            category: "frontend"
        },
        {
            name: "CSS",
            description: "Web styling.",
            icon: "images/css.png",
            category: "frontend"
        },
        {
            name: "JavaScript",
            description: "Web interactivity.",
            icon: "images/js.png",
            category: "frontend"
        },
        {
            name: "C# .NET",
            description: "Software and backend development.",
            icon: "images/dotnet.png",
            category: "backend"
        },
        {
            name: "Python",
            description: "Machine learning and automation.",
            icon: "images/python.png",
            category: "backend"
        },
        {
            name: "Express.js",
            description: "Backend services.",
            icon: "images/expressjs.png",
            category: "backend"
        },
        {
            name: "PHP",
            description: "Backend development.",
            icon: "images/php.png",
            category: "backend"
        },
        {
            name: "PostgreSQL",
            description: "Database management.",
            icon: "images/postgres.png",
            category: "database"
        },
        {
            name: "MySQL",
            description: "Database management.",
            icon: "images/mysql.png",
            category: "database"
        },
        {
            name: "SQLite",
            description: "Database management.",
            icon: "images/sqlite.png",
            category: "database"
        },
        {
            name: "Oracle",
            description: "Database management.",
            icon: "images/oracle.png",
            category: "database"
        },
        {
            name: "R Programming",
            description: "Data analysis.",
            icon: "images/r.png",
            category: "other"
        },
        {
            name: "Android",
            description: "Application Development.",
            icon: "images/app.jpeg",
            category: "other"
        },
        {
            name: "Networking",
            description: "LAN, WAN, WLAN configuration and management.",
            icon: "images/computer.png",
            category: "other"
        },
        {
            name: "Technical Support",
            description: "Software installation, Network & Systems Security.",
            icon: "images/computer.png",
            category: "other"
        },
        {
            name: "Microsoft Office Suite",
            description: "Word, Excel, Access, Project.",
            icon: "images/microsoft.png",
            category: "other"
        }
    ];

    // Populate Skills Grid
    const skillsGrid = $('.skills-grid');
    skills.forEach(skill => {
        const card = `
            <div class="skill-card" data-category="${skill.category}">
                <img src="${skill.icon}" alt="${skill.name} Icon" class="skill-icon">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `;
        skillsGrid.append(card);
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
            date: "November 2025 – Present",
            description: "Providing ICT tutoring services to students and professionals. Offering freelance basic ICT solutions including system setup and configuration. Delivering technical support and training on various software applications."
        },
        {
            title: "Systems Analyst Intern, Malawi Human Rights Commission (MHRC)",
            date: "July 2025 – October 2025",
            description: "Assisting in the management and maintenance of the Commission's network infrastructure. Troubleshooting and resolving hardware and software issues. Supporting users with system problems and ensuring network uptime. Documenting technical procedures and contributing to system improvements. Coordinated documentary production, videography, and photography projects. Developed visual content to support organizational initiatives. Utilized multimedia assets to enhance communication and engagement."
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
            name: "Database Management",
            issuer: "PostgreSQL, MySQL, SQLite, Oracle"
        },
        {
            name: "System Administration",
            issuer: "Windows and Linux, Server administration"
        },
        {
            name: "Hardware Support",
            issuer: "Maintenance and repair of computers, laptops, servers"
        },
        {
            name: "Web Development",
            issuer: "Website design and development"
        },
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
    certifications.forEach(certification => {
        const card = `
            <div class="certification-card">
                <h3>${certification.name}</h3>
                <p>${certification.issuer}</p>
            </div>
        `;
        certificationsGrid.append(card);
    });

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

    // Contact Form Submission
    $('#contactForm').on('submit', function(e) {
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
    $('#download-cv').on('click', function(e) {
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