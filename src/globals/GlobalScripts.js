import { useEffect } from 'react';

const GlobalScripts = () => {

    useEffect(() => {


        const navBar = document.querySelector(".nav");
        let currentScrollPos = window.scrollY;
        let newScrollPos;
        let scrollTypeIs = "manual";
        let navLinks = document.querySelectorAll('.nav__item');
        let timeoutIsActive = false;
        let scrollTimeout;
        let navOpenBtn = document.querySelector(".nav__hamburger");
        let navCloseBtn = document.querySelector(".nav__close");
        let mobNavMenu = document.querySelector(".nav__wrap");
        const skillCards = document.querySelector(".skills__wrap");
        const allSkillCards = document.querySelectorAll(".skill-card");
        const careerGrid = document.querySelector(".career-grid");
        const workGrid = document.querySelector(".work-grid");
        const allWorkItems = document.querySelectorAll(".work-item");
        const socialGrid = document.querySelector(".socials-grid");
        const allSocialItems = document.querySelectorAll(".social-item");
        const certsGrid = document.querySelector(".certifs__inner-wrap");
        const allCerts = document.querySelectorAll(".certif");
        let sections = document.querySelectorAll('.section');
        let visibleSections = [];
        let lastVisibleSection;
        let allMoreInfoBtns = document.querySelectorAll(".career-info__more-info");
        let allMoreInfoText = document.querySelectorAll(".career-info__more-info-text");

        for (let i = 0; i < allMoreInfoBtns.length; i++) {
            allMoreInfoBtns[i].addEventListener("click", handleMoreInfoClick);
        }

        function initDropdowns() {
            for (let i = 0; i < allMoreInfoBtns.length; i++) {
                allMoreInfoText[i].classList.remove("career-info__more-info-text--hidden");
                allMoreInfoText[i].style.maxHeight = "unset";
                let thisElemHeight = allMoreInfoText[i].offsetHeight;
                allMoreInfoText[i].setAttribute("data-max-height", thisElemHeight);
                let newMaxHeight = allMoreInfoText[i].getAttribute("data-max-height");
                allMoreInfoText[i].style.maxHeight = newMaxHeight + "px";
                allMoreInfoText[i].classList.add("career-info__more-info-text--hidden");
            }
            console.log("Dropdowns initted");
        }

        let previousWidth = window.innerWidth;

        document.addEventListener("DOMContentLoaded", initDropdowns);
        window.addEventListener('resize', () => {
            const currentWidth = window.innerWidth;

            /* Accordion max-heights will only be recalculated if thw width of the page is resized, not the height. */
            if (currentWidth !== previousWidth) {
                initDropdowns();
                console.log("Dropdowns initted through window resize");
            }
            previousWidth = currentWidth;
        });

        function handleMoreInfoClick() {
            console.log("More info clicked");
            this.parentElement.querySelector(".career-info__more-info-text").classList.toggle("career-info__more-info-text--hidden");
            console.log("Class --hidden toggled on/off once");
        }

        document.addEventListener("scroll", (e) => {
            toggleNav();
        });

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", () => {
                clearTimeout(scrollTimeout);
                timeoutIsActive = false;
                scrollTypeIs = "auto";
                toggleNav();
            });
        }

        function handleAutoScroll() {
            scrollTypeIs = "manual";
            timeoutIsActive = false;
        }

        function toggleNav() {
            newScrollPos = window.scrollY;

            if (mobNavMenu.classList.contains("nav__wrap--retracted")) {
                if (scrollTypeIs === "manual") {
                    if (newScrollPos >= 1000) {
                        if (newScrollPos > currentScrollPos) {
                            document.querySelector(".nav").classList.add("nav__hidden");
                        } else {
                            document.querySelector(".nav").classList.remove("nav__hidden");
                        }
                    } else {
                        document.querySelector(".nav").classList.remove("nav__hidden");
                    }

                } else if (scrollTypeIs !== "manual") {

                    if (!timeoutIsActive) {
                        timeoutIsActive = true;
                        scrollTimeout = setTimeout(handleAutoScroll, "2000");
                    }

                }
            }

            currentScrollPos = newScrollPos;
        }

        navOpenBtn.addEventListener("click", toggleMobNavMenu);
        navCloseBtn.addEventListener("click", toggleMobNavMenu);

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", toggleMobNavMenu);
        }

        function toggleMobNavMenu() {
            document.body.classList.toggle("prevent-scrolling");
            mobNavMenu.classList.toggle("nav__wrap--retracted");
            document.querySelector(".nav").classList.remove("nav__hidden");
        }

        const skillsOpts = {
            root: null,
            rootMargin: '1px',
            threshold: 0.3,
        };

        const careerOpts = {
            root: null,
            rootMargin: '1px',
            threshold: 0.1,
        };

        const cardsAnimCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCards();
                }
            });
        };

        const certsAnimCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("is intersecting");
                    animateCerts();
                }
            });
        };

        const careerAnimCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        animateCareerGrid();
                    }
                        , 200);
                }
            });
        };

        // const workAnimCallback = (entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             animateWorkGrid();
        //         }
        //     });
        // };

        // const socialAnimCallback = (entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             animateSocialGrid();
        //         }
        //     });
        // };

        const skillObserver = new IntersectionObserver(cardsAnimCallback, skillsOpts);
        const certsObserver = new IntersectionObserver(certsAnimCallback, skillsOpts);
        const careerObserver = new IntersectionObserver(careerAnimCallback, careerOpts);
        // const workObserver = new IntersectionObserver(workAnimCallback, careerOpts);
        // const socialObserver = new IntersectionObserver(socialAnimCallback, skillsOpts);

        skillObserver.observe(skillCards);
        certsObserver.observe(certsGrid);
        careerObserver.observe(careerGrid);
        // workObserver.observe(workGrid);
        // socialObserver.observe(socialGrid);

        function animateCards() {
            for (let i = 0; i < allSkillCards.length; i++) {
                allSkillCards[i].classList.add("skill-card--animate");
            }
        }

        function animateCerts() {
            console.log("animateCerts function running");
            for (let i = 0; i < allCerts.length; i++) {
                allCerts[i].classList.add("certif--animate");
                console.log("looping and adding classes");
            }
        }

        function animateCareerGrid() {
            for (let i = 0; i < careerGrid.children.length; i++) {
                careerGrid.children[i].classList.add("career-grid--animate");
            }
        }

        // function animateWorkGrid() {
        //     for (let i = 0; i < allWorkItems.length; i++) {
        //         allWorkItems[i].classList.add("work-item--animate");
        //     }
        // }

        // function animateSocialGrid() {
        //     for (let i = 0; i < allSocialItems.length; i++) {
        //         allSocialItems[i].classList.add("social-item--animate");
        //     }
        // }


        const sectionOpts = {
            root: null,
            rootMargin: '1px',
            threshold: 0,
        };

        document.addEventListener("DOMContentLoaded", (event) => {
            const sectionOpts = {
                root: null,
                rootMargin: '1px',
                threshold: 0.5,
            };

            let visibleSections = [];

            function createSectionCallback(sectionName) {
                return function (entries, observer) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (!visibleSections.includes(sectionName)) {
                                visibleSections.push(sectionName);
                            }
                        } else {
                            let indexToRemove = visibleSections.indexOf(sectionName);
                            if (indexToRemove !== -1) {
                                visibleSections.splice(indexToRemove, 1);
                            }
                        }

                        // Sort the array in numerical order
                        visibleSections.sort((a, b) => a - b);
                    });
                };
            }

            const sectionCallbacks = {};

            for (let i = 0; i < sections.length; i++) {
                const sectionName = i;
                const sectionObserver = new IntersectionObserver(createSectionCallback(sectionName), sectionOpts);
                sectionCallbacks[sectionName] = createSectionCallback(sectionName);
                sectionObserver.observe(sections[i]);
            }

            document.addEventListener("scroll", setNavHighlights);

            function setNavHighlights() {

                if (visibleSections.length === 3) {
                    lastVisibleSection = visibleSections[visibleSections.length - 2];
                } else {
                    lastVisibleSection = visibleSections[visibleSections.length - 1];
                }


                if (!navLinks[lastVisibleSection].classList.contains("nav__item--active")) {
                    for (let i = 0; i < navLinks.length; i++) {
                        navLinks[i].classList.remove("nav__item--active");
                    }
                    navLinks[lastVisibleSection].classList.add("nav__item--active");
                }
            }
        });
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((element) => {
            element.classList.remove('hidden');
        });
    }, []);



    return null;
};

export default GlobalScripts;