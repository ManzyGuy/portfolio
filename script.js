/* ==========================================================================
   Emmanuel Ungweru Kawonga - Portfolio Scripts
   Software Developer | ICT & Digital Solutions Consultant
   ========================================================================== */

$(document).ready(function () {
    // ----------------------------------------------------------------------
    // 1. Dynamic Year in Footer
    // ----------------------------------------------------------------------
    $('#year').text(new Date().getFullYear());

    // ----------------------------------------------------------------------
    // 2. Mobile Navigation Toggle & Backdrop
    // ----------------------------------------------------------------------
    const $hamburger = $('#hamburgerBtn');
    const $navList = $('#nav-list');

    $hamburger.on('click', function () {
        $(this).toggleClass('active');
        $navList.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    // Close mobile menu when clicking any nav link
    $('.nav-link').on('click', function () {
        $hamburger.removeClass('active');
        $navList.removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // ----------------------------------------------------------------------
    // 3. Header Scroll Effect & Back to Top Button
    // ----------------------------------------------------------------------
    const $header = $('#navbar');
    const $backToTop = $('#backToTopBtn');

    $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();

        // Header glassmorphic background on scroll
        if (scrollTop > 50) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }

        // Show/hide Back to Top button
        if (scrollTop > 400) {
            $backToTop.addClass('active');
        } else {
            $backToTop.removeClass('active');
        }

        // Active link highlighting on scroll
        updateActiveNavLink();
    });

    // Back to top click handler
    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // ----------------------------------------------------------------------
    // 4. Smooth Scrolling for Anchor Links
    // ----------------------------------------------------------------------
    $('a[href^="#"]').on('click', function (e) {
        const targetId = $(this).attr('href');
        if (targetId === '#' || targetId === '') return;

        const $target = $(targetId);
        if ($target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $target.offset().top - 80
            }, 600);
        }
    });

    // Function to highlight active nav item based on viewport position
    function updateActiveNavLink() {
        const scrollPosition = $(window).scrollTop() + 120;

        $('section[id]').each(function () {
            const top = $(this).offset().top;
            const height = $(this).outerHeight();
            const id = $(this).attr('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${id}"]`).addClass('active');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 5. Project Showcase Filtering
    // ----------------------------------------------------------------------
    $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');

        // Update active filter button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Filter cards
        const $cards = $('.project-card');
        if (filter === 'all') {
            $cards.stop().fadeIn(300);
        } else {
            $cards.each(function () {
                const category = $(this).data('category');
                if (category === filter) {
                    $(this).stop().fadeIn(300);
                } else {
                    $(this).stop().fadeOut(200);
                }
            });
        }
    });

    // ----------------------------------------------------------------------
    // 6. EmailJS & reCAPTCHA Contact Form Integration
    // ----------------------------------------------------------------------
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: "Ij2q37f5uL0CJI-Np",
        SERVICE_ID: "service_wiofnb8",
        TEMPLATE_ID: "template_mhss4cl"
    };

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    function showStatus(message, type) {
        const $status = $('#form-status');
        $status.text(message)
            .removeClass('success error')
            .addClass(type)
            .fadeIn();

        if (type === 'success') {
            setTimeout(function () {
                $status.fadeOut();
            }, 8000);
        }
    }

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const form = this;
        const $btn = $('#submitBtn');
        const $btnText = $btn.find('.btn-text');
        const $spinner = $('#submitSpinner');
        const $status = $('#form-status');

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const message = $('#message').val().trim();

        // Validation
        if (!name || !email || !phone || !message) {
            showStatus('Please fill in all required fields.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }

        // Set Loading State
        $btn.prop('disabled', true).css('opacity', '0.75');
        $btnText.text('Sending Message...');
        $spinner.show();
        $status.hide();

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
            .then(function (response) {
                showStatus('Thank you! Your message has been sent successfully. I will get back to you promptly.', 'success');
                form.reset();
            })
            .catch(function (error) {
                console.error('EmailJS Error:', error);
                showStatus('Failed to send message. Please reach out directly via email or WhatsApp.', 'error');
            })
            .finally(function () {
                $btn.prop('disabled', false).css('opacity', '1');
                $btnText.text('Send Message');
                $spinner.hide();
            });
    });
});