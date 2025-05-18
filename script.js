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
            name: "C# .NET", 
            description: "Desktop and mobile application development.", 
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
            name: "R Programming", 
            description: "Data analysis.", 
            icon: "images/r.png",
            category: "other"
        },
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
            name: "Express.js", 
            description: "Backend services.", 
            icon: "images/expressjs.png",
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
            name: "SQL", 
            description: "Database design and management.", 
            icon: "images/sql.png",
            category: "database"
        },
        { 
            name: "Microsoft Office Suite", 
            description: "Word, Excel, Access, Project.", 
            icon: "images/microsoft.png",
            category: "other"
        },
        { 
            name: "Computer Systems and Networking Security", 
            description: "Strong understanding.", 
            icon: "images/computer.png",
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
            title: "Software Development Intern, ICTAID",
            date: "February 2024 – August 2024",
            description: "Assisted in testing, debugging, and contributing to the development of software applications. Collaborated with team members to identify and resolve software defects. Documented software designs, code, and testing activities. Continuously learned and applied the latest software development practices. Engaged in marketing ICTAID's services to potential clients."
        },
        {
            title: "Freelance Web Developer",
            date: "2022 – Present",
            description: "Developed and maintained websites for small businesses and individuals. Worked closely with clients to understand requirements and deliver tailored solutions. Implemented responsive designs and optimized websites for performance and SEO."
        },
        {
            title: "University Projects",
            date: "2021 – 2024",
            description: "Completed various academic projects including database systems, web applications, and software prototypes. Gained hands-on experience with different technologies and methodologies through coursework and team projects."
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