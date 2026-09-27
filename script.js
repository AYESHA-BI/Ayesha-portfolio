/* =========================================
   AYESHA BI PORTFOLIO
   DYNAMIC JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================= HEADER ================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ================= DYNAMIC TECHNOLOGY ================= */

const typingText =
    document.getElementById("typingText");


const technologies = [

    "AWS",
    "Linux",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Bash",
    "DevOps Automation"

];


let technologyIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeTechnology() {

    if (!typingText) {
        return;
    }


    const currentTechnology =
        technologies[technologyIndex];


    if (!deleting) {

        typingText.textContent =
            currentTechnology.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentTechnology.length
        ) {

            deleting = true;


            setTimeout(
                typeTechnology,
                1300
            );


            return;

        }


        setTimeout(
            typeTechnology,
            80
        );


    } else {

        typingText.textContent =
            currentTechnology.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;


            technologyIndex =
                (technologyIndex + 1) %
                technologies.length;


            setTimeout(
                typeTechnology,
                400
            );


            return;

        }


        setTimeout(
            typeTechnology,
            45
        );

    }

}


typeTechnology();


/* ================= FLOWER SLIDESHOW ================= */

const flowers =
    document.querySelectorAll(".flower-image");


const indicators =
    document.querySelectorAll(".indicator");


let flowerIndex = 0;


function showFlower(index) {

    if (!flowers.length) {
        return;
    }


    flowers.forEach((flower) => {

        flower.classList.remove("active");

    });


    indicators.forEach((indicator) => {

        indicator.classList.remove("active");

    });


    flowers[index].classList.add("active");


    if (indicators[index]) {

        indicators[index].classList.add("active");

    }


    flowerIndex = index;

}


function nextFlower() {

    flowerIndex++;


    if (flowerIndex >= flowers.length) {

        flowerIndex = 0;

    }


    showFlower(flowerIndex);

}


let flowerTimer;


if (flowers.length > 1) {

    flowerTimer =
        setInterval(
            nextFlower,
            4500
        );

}


/* CLICK IMAGE INDICATORS */

indicators.forEach(
    (indicator, index) => {

        indicator.addEventListener(
            "click",
            () => {

                showFlower(index);


                clearInterval(
                    flowerTimer
                );


                flowerTimer =
                    setInterval(
                        nextFlower,
                        4500
                    );

            }
        );

    }
);


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        updateActiveNavigation();

    }
);


/* ================= CONSOLE ================= */

console.log(
    "Ayesha Bi | DevOps Portfolio loaded successfully."
);
