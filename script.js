$(document).ready(function() {
    // Smooth Scrolling for Navigation Links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50 // -50 for header offset
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Skills Section: Create Skill Cards Dynamically
        // Skills Section: Create Skill Cards Dynamically
const skills = [
    { name: "C# .NET", description: "Desktop and mobile application development.", icon: "images/dotnet.png" }, 
    { name: "Python", description: "Machine learning and automation.", icon: "images/python.png" },
    { name: "R Programming", description: "Data analysis.", icon: "images/r.png" },
    { name: "React.js", description: "Frontend development.", icon: "images/react.png" },
    { name: "Tailwind CSS", description: "Frontend styling.", icon: "images/tailwind.png" },
    { name: "HTML", description: "Web structure.", icon: "images/html.png" },
    { name: "CSS", description: "Web styling.", icon: "images/css.png" },
    { name: "JavaScript", description: "Web interactivity.", icon: "images/js.png" },
    { name: "Express.js", description: "Backend services.", icon: "images/expressjs.png" },
    { name: "PostgreSQL", description: "Database management.", icon: "images/postgres.png" },
    { name: "MySQL", description: "Database management.", icon: "images/mysql.png" },
    { name: "SQLite", description: "Database management.", icon: "images/sqlite.png" },
    { name: "Oracle", description: "Database management.", icon: "images/oracle.png" },
    { name: "SQL", description: "Database design and management.", icon: "images/sql.png" },
    { name: "Microsoft Office Suite", description: "Word, Excel, Access, Project.", icon: "images/microsoft.png" },
    { name: "Computer Systems and Networking Security", description: "Strong understanding.", icon: "images/computer.png" }
];

   
const skillsGrid = $('.skills-grid');
skills.forEach(skill => {
    const card = `
        <div class="skill-card">
            <img src="${skill.icon}" alt="${skill.name} Icon" class="skill-icon">
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        </div>
    `;
    skillsGrid.append(card);
});

    // Projects Section: Slick Carousel
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    // Projects Data 
    const projects = [
        { title: "Company Websites", description: "Developed websites for several companies.", image: "images/company.jpeg" },
        { title: "Brochure Website", description: "Created an informative website for a school project.", image: "images/xul_web.jpeg" },
        { title: "Expense Tracking System", description: "Designed a Windows desktop application for tracking expenses.", image: "images/exp_tracker.jpeg" },
        { title: "Database Prototype", description: "Developed a MySQL database for data management.", image: "images/database.jpeg" },
        { title: "Security Application", description: "Built a mobile panic button app for emergency situations.", image: "images/app.jpeg" },
        { title: "AI Chatbot", description: "Developed an interactive chatbot as a side project.", image: "images/chatbot.jpeg" },
    ];

    // Populate Carousel
    projects.forEach(project => {
        $('.carousel').slick('slickAdd', `
            <div>
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `);
    });

    // Experience Timeline Data (Replace with your actual experience details)
    const experience = [
        {
            title: "Software Development Intern, ICTAID",
            date: "February 2024 – August 2024",
            description: "Assisted in testing, debugging, and contributing to the development of software applications. Collaborated with team members to identify and resolve software defects. Documented software designs, code, and testing activities. Continuously learned and applied the latest software development practices. Engaged in marketing ICTAID’s services to potential clients."
        }
    ];

    // Populate Experience Timeline
    const timeline = $('.experience-timeline');
    experience.forEach(item => {
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
});