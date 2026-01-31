/* =========================
   Smooth Scroll for Nav
========================= */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* =========================
   Active Navbar Highlight
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* =========================
   Skills Hover Logic (FIXED)
========================= */
document.querySelectorAll(".skill").forEach(skill => {
    const percent = skill.querySelector(".skill-percent");

    // store original value once
    if (!percent.dataset.original) {
        percent.dataset.original = percent.textContent;
    }

    skill.addEventListener("mouseenter", () => {
        percent.textContent = "100% 😎";
    });

    skill.addEventListener("mouseleave", () => {
        percent.textContent = percent.dataset.original;
    });
});

/* =========================
   About Stats Counter
========================= */
const statItems = document.querySelectorAll(".stat-number");
let statsStarted = false;

function startStatsCounter() {
    statItems.forEach(stat => {
        const target = +stat.dataset.target;
        let count = 0;

        const updateCount = () => {
            const increment = Math.ceil(target / 40);
            count += increment;

            if (count < target) {
                stat.textContent = count;
                setTimeout(updateCount, 40);
            } else {
                stat.textContent = target + "+";
            }
        };

        updateCount();
    });
}

window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector("#about");
    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100 && !statsStarted) {
        startStatsCounter();
        statsStarted = true;
    }
});

/* =========================
   Timeline Reveal Animation
========================= */
const timelineItems = document.querySelectorAll(".timeline-item");

const revealTimeline = () => {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

/* =========================
   External Link Safety
========================= */
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute("rel", "noopener noreferrer");
});

/* =========================
   Contact Button Feedback
========================= */
// const contactForm = document.querySelector(".contact-form");
//
// if (contactForm) {
//     contactForm.addEventListener("submit", e => {
//         e.preventDefault();
//         alert("Thanks for reaching out! 🚀 I'll get back to you soon.");
//         contactForm.reset();
//     });
// }

/* =========================
   Small UX Polish
========================= */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
const form = document.querySelector('.contact-form');

// if (form) {
//     form.addEventListener('submit', function () {
//         setTimeout(() => {
//             form.reset();
//             alert('Message sent successfully 🚀 I will get back to you soon!');
//         }, 500);
//     });
// }
