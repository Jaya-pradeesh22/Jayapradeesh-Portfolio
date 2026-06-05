document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const allNavLinks = document.querySelectorAll(".nav-link");
    const skillCards = document.querySelectorAll(".skill-card");
    const statNumbers = document.querySelectorAll(".stat-number");

    /* Smooth scroll for only internal nav links */
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* Navbar scroll style + active section */
    const setActiveSection = () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        allNavLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });

        if (window.scrollY > 40) {
            navbar.style.background = "rgba(7, 11, 20, 0.92)";
            navbar.style.boxShadow = "0 14px 35px rgba(2, 6, 23, 0.35)";
            navbar.style.borderBottom = "1px solid rgba(96, 165, 250, 0.18)";
        } else {
            navbar.style.background = "rgba(7, 11, 20, 0.78)";
            navbar.style.boxShadow = "0 10px 30px rgba(2, 6, 23, 0.25)";
            navbar.style.borderBottom = "1px solid rgba(96, 165, 250, 0.10)";
        }
    };

    window.addEventListener("scroll", setActiveSection);
    setActiveSection();

    /* Skill hover percentage effect */
    skillCards.forEach(card => {
        const percent = card.querySelector(".skill-percent");

        if (!percent) return;

        if (!percent.dataset.original) {
            percent.dataset.original = percent.textContent;
        }

        card.addEventListener("mouseenter", () => {
            percent.textContent = "100%";
        });

        card.addEventListener("mouseleave", () => {
            percent.textContent = percent.dataset.original;
        });
    });

    /* Stats counter */
    let statsStarted = false;

    const animateValue = (element, start, end, duration, suffix = "") => {
        let startTimestamp = null;

        const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = `${value}${suffix}`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    const startStatsCounter = () => {
        statNumbers.forEach(stat => {
            const text = stat.textContent.trim();

            if (text.includes("Java")) return;

            const number = parseInt(text, 10);
            if (!isNaN(number)) {
                animateValue(stat, 0, number, 1200, "+");
            }
        });
    };

    const aboutSection = document.querySelector("#about");

    const observeStats = () => {
        if (!aboutSection || statsStarted) return;

        const top = aboutSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            startStatsCounter();
            statsStarted = true;
        }
    };

    window.addEventListener("scroll", observeStats);
    observeStats();

    /* Reveal cards on scroll */
    const revealElements = document.querySelectorAll(
        ".glass-card, .skill-card, .project-card, .experience-card, .stat-item"
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-item");
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    /* External link safety */
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute("rel", "noopener noreferrer");
    });

    document.body.classList.add("loaded");
});