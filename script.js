/* =========================================================
   BLACKOUT — GLOBAL INTERACTION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initGraffitiWall();
    initRevealAnimations();
    initClickableCards();
    initModals();
    initPeoplePage();
    initTimeline();
    initPoetryPage();
    initSearch();
    initKeyboardSupport();
});


/* =========================================================
   NAVIGATION
   ========================================================= */

function initNavigation() {
    const toggles = document.querySelectorAll(
        ".menu-toggle, .nav-toggle, .mobile-menu-button"
    );

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const nav =
                toggle.parentElement?.querySelector(".nav-links") ||
                toggle.parentElement?.querySelector("nav ul") ||
                document.querySelector(".nav-links") ||
                document.querySelector("nav ul");

            if (!nav) return;

            nav.classList.toggle("open");
            nav.classList.toggle("active");

            const expanded =
                nav.classList.contains("open") ||
                nav.classList.contains("active");

            toggle.setAttribute("aria-expanded", expanded);
        });
    });

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(
        ".nav-link, nav a"
    ).forEach(link => {
        const href = link.getAttribute("href");

        if (!href) return;

        const cleanHref = href.split("#")[0];

        if (
            cleanHref === currentPage ||
            (currentPage === "" && cleanHref === "index.html")
        ) {
            link.classList.add("active-page");
            link.setAttribute("aria-current", "page");
        }
    });

    document.querySelectorAll(
        ".nav-link, nav a"
    ).forEach(link => {
        link.addEventListener("click", () => {
            const nav =
                document.querySelector(".nav-links.open") ||
                document.querySelector("nav ul.open") ||
                document.querySelector(".nav-links.active") ||
                document.querySelector("nav ul.active");

            if (nav) {
                nav.classList.remove("open", "active");
            }
        });
    });
}


/* =========================================================
   GRAFFITI WALL
   ========================================================= */

function initGraffitiWall() {
    if (document.querySelector(".blackout-graffiti")) return;

    const wall = document.createElement("div");
    wall.className = "blackout-graffiti";
    wall.setAttribute("aria-hidden", "true");

    wall.innerHTML = `
        <span class="g1">CREATE</span>
        <span class="g2">REMEMBER</span>
        <span class="g3">QUESTION</span>
        <span class="g4">LISTEN</span>
    `;

    document.body.prepend(wall);
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initRevealAnimations() {
    const items = document.querySelectorAll(
        ".card, .panel, .content-card, .person-card, " +
        ".poem-card, .story-card, .resource-card, " +
        ".archive-card, section"
    );

    items.forEach((item, index) => {
        if (item.classList.contains("hero") ||
            item.classList.contains("page-hero")) {
            return;
        }

        item.classList.add("reveal");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08
            }
        );

        observer.observe(item);
    });
}


/* =========================================================
   CLICKABLE CARDS
   ========================================================= */

function initClickableCards() {
    document.querySelectorAll("[data-href]").forEach(card => {
        card.addEventListener("click", event => {
            if (event.target.closest("a, button")) return;

            const destination = card.dataset.href;

            if (destination) {
                window.location.href = destination;
            }
        });

        card.setAttribute("tabindex", "0");

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.click();
            }
        });
    });
}


/* =========================================================
   MODALS
   ========================================================= */

function initModals() {
    document.querySelectorAll("[data-modal-target]").forEach(trigger => {
        trigger.addEventListener("click", () => {
            const targetID = trigger.dataset.modalTarget;
            const modal = document.getElementById(targetID);

            if (modal) openModal(modal);
        });
    });

    document.querySelectorAll(
        ".modal-close, .close-modal, [data-close-modal]"
    ).forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal, .overlay");

            if (modal) closeModal(modal);
        });
    });

    document.querySelectorAll(".modal, .overlay").forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;

        document.querySelectorAll(
            ".modal.active, .modal.open, .overlay.active"
        ).forEach(closeModal);
    });
}

function openModal(modal) {
    modal.classList.add("active", "open");
    document.body.style.overflow = "hidden";

    const close =
        modal.querySelector(".modal-close") ||
        modal.querySelector(".close-modal");

    close?.focus();
}

function closeModal(modal) {
    modal.classList.remove("active", "open");

    if (
        !document.querySelector(
            ".modal.active, .modal.open, .overlay.active"
        )
    ) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   PEOPLE
   ========================================================= */

const blackoutPeople = [
    {
        name: "Malik",
        type: "BLACKOUT character",
        group: "Character",
        role: "The observer / documentarian",
        color: "red",
        bio:
            "One of the recurring BLACKOUT characters. Malik moves through the site like somebody carrying a camera, notebook, and too many questions.",
        tags: ["BLACKOUT", "Story", "Photography"],
        character: true
    },

    {
        name: "Von",
        type: "BLACKOUT character",
        group: "Character",
        role: "The writer / questioner",
        color: "yellow",
        bio:
            "A recurring BLACKOUT character connected to writing, notes, questions, and the messy process of figuring things out.",
        tags: ["BLACKOUT", "Writing", "Journal"],
        character: true
    },

    {
        name: "Da'Vaun",
        type: "BLACKOUT character",
        group: "Character",
        role: "The sound / culture collector",
        color: "blue",
        bio:
            "A recurring character whose world connects music, culture, movement, and the stories carried through sound.",
        tags: ["BLACKOUT", "Music", "Culture"],
        character: true
    },

    {
        name: "Leak",
        type: "BLACKOUT character",
        group: "Character",
        role: "The artist / wall writer",
        color: "purple",
        bio:
            "A recurring BLACKOUT character connected to graffiti, visual art, sketchbooks, posters, and the physical feeling of a city wall.",
        tags: ["BLACKOUT", "Art", "Graffiti"],
        character: true
    },

    {
        name: "Langston Hughes",
        type: "Poet / writer",
        group: "Black culture",
        role: "Poet, writer, cultural figure",
        wiki: "Langston_Hughes",
        bio:
            "American poet and writer associated with the Harlem Renaissance. His work frequently explored Black life, identity, everyday experience, music, and racial inequality.",
        tags: ["Poetry", "Harlem Renaissance", "Literature"]
    },

    {
        name: "Maya Angelou",
        type: "Poet / writer",
        group: "Black culture",
        role: "Poet, memoirist, writer",
        wiki: "Maya_Angelou",
        bio:
            "American poet, memoirist, and writer whose work explored identity, race, resilience, memory, and human dignity.",
        tags: ["Poetry", "Memoir", "Literature"]
    },

    {
        name: "Audre Lorde",
        type: "Poet / writer",
        group: "Black culture",
        role: "Poet, essayist, activist",
        wiki: "Audre_Lorde",
        bio:
            "American poet and essayist whose writing addressed race, gender, sexuality, identity, power, and resistance.",
        tags: ["Poetry", "Essays", "Identity"]
    },

    {
        name: "Joy Harjo",
        type: "Poet / writer",
        group: "Indigenous culture",
        role: "Poet, musician, writer",
        wiki: "Joy_Harjo",
        bio:
            "Muscogee poet, musician, and writer whose work connects poetry, Indigenous identity, memory, history, land, and music.",
        tags: ["Poetry", "Indigenous", "Music"]
    },

    {
        name: "Gwendolyn Brooks",
        type: "Poet / writer",
        group: "Black culture",
        role: "Poet and writer",
        wiki: "Gwendolyn_Brooks",
        bio:
            "American poet whose work frequently focused on Black communities, everyday life, social conditions, and the rhythms of urban life.",
        tags: ["Poetry", "Chicago", "Literature"]
    },

    {
        name: "Nikki Giovanni",
        type: "Poet / writer",
        group: "Black culture",
        role: "Poet, writer, educator",
        wiki: "Nikki_Giovanni",
        bio:
            "American poet, writer, and educator known for poetry addressing Black identity, family, culture, social issues, and personal experience.",
        tags: ["Poetry", "Black Arts", "Education"]
    }
];


function initPeoplePage() {
    const container =
        document.querySelector("#people-grid") ||
        document.querySelector(".people-grid");

    if (!container) return;

    if (container.children.length > 0 &&
        !container.dataset.dynamicPeople) {
        enhanceExistingPeople(container);
        return;
    }

    container.dataset.dynamicPeople = "true";
    renderPeople(container, blackoutPeople);
}

function renderPeople(container, people) {
    container.innerHTML = "";

    people.forEach(person => {
        const card = document.createElement("article");

        card.className = "person-card card tape reveal visible";
        card.dataset.personName = person.name;

        card.innerHTML = `
            <div class="person-portrait">
                ${
                    person.character
                        ? createCharacterFace(person.color)
                        : `
                            <div class="character-face"
                                 data-wiki-image="${escapeHTML(person.wiki || "")}">
                                <div class="portrait-placeholder">
                                    ${escapeHTML(person.name.charAt(0))}
                                </div>
                            </div>
                        `
                }
            </div>

            <span class="stamp ${person.color || ""}">
                ${escapeHTML(person.group)}
            </span>

            <h3 class="person-name">
                ${escapeHTML(person.name)}
            </h3>

            <p class="person-role">
                ${escapeHTML(person.role)}
            </p>

            <div class="person-tags">
                ${person.tags.map(tag =>
                    `<span class="tag">${escapeHTML(tag)}</span>`
                ).join("")}
            </div>

            <button class="person-more" type="button">
                OPEN FILE →
            </button>
        `;

        card.addEventListener("click", event => {
            if (event.target.closest("button") ||
                event.currentTarget === card) {
                openPerson(person);
            }
        });

        container.appendChild(card);

        if (!person.character && person.wiki) {
            loadWikipediaImage(person, card);
        }
    });
}


function enhanceExistingPeople(container) {
    container.querySelectorAll(
        ".person-card, .person, .character-card"
    ).forEach(card => {
        card.classList.add("person-card", "tape");
    });
}


function createCharacterFace(color) {
    return `
        <div class="character-face character-${color}">
            <div class="face-hair"></div>
            <div class="face-head">
                <span class="eye left"></span>
                <span class="eye right"></span>
                <span class="nose"></span>
                <span class="mouth"></span>
            </div>
            <div class="face-neck"></div>
        </div>
    `;
}


async function loadWikipediaImage(person, card) {
    const target = card.querySelector("[data-wiki-image]");

    if (!target || !person.wiki) return;

    try {
        const url =
            "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(person.wiki);

        const response = await fetch(url);

        if (!response.ok) return;

        const data = await response.json();

        if (!data.thumbnail?.source) return;

        target.innerHTML = `
            <img
                src="${escapeAttribute(data.thumbnail.source)}"
                alt="${escapeAttribute(person.name)}"
                loading="lazy"
            >
        `;
    } catch {
        /* Keep the BLACKOUT placeholder if the image cannot load. */
    }
}


function openPerson(person) {
    let modal = document.getElementById("blackout-person-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "blackout-person-modal";
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-content tape">
                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close"
                >×</button>

                <div id="blackout-person-content"></div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector(".modal-close")
            .addEventListener("click", () => closeModal(modal));

        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    }

    const content =
        document.getElementById("blackout-person-content");

    content.innerHTML = `
        <span class="stamp">
            ${escapeHTML(person.type)}
        </span>

        <h2>${escapeHTML(person.name)}</h2>

        <p>
            <strong>${escapeHTML(person.role)}</strong>
        </p>

        <p>${escapeHTML(person.bio)}</p>

        <div class="person-tags">
            ${person.tags.map(tag =>
                `<span class="tag">${escapeHTML(tag)}</span>`
            ).join("")}
        </div>

        ${
            person.wiki
                ? `
                    <p style="margin-top:2rem">
                        <a
                            class="button"
                            target="_blank"
                            rel="noopener"
                            href="https://en.wikipedia.org/wiki/${encodeURIComponent(person.wiki)}"
                        >
                            EXPLORE SOURCE →
                        </a>
                    </p>
                `
                : ""
        }
    `;

    openModal(modal);
}


/* =========================================================
   TIMELINE
   ========================================================= */

const blackoutTimeline = [
    {
        year: "1920s–1930s",
        title: "Harlem Renaissance",
        category: "Black culture",
        summary:
            "A major period of Black literary, artistic, musical, and intellectual activity centered especially in Harlem.",
        color: "red"
    },

    {
        year: "1940s–1950s",
        title: "Black Arts & Cultural Networks",
        category: "Art",
        summary:
            "Artists, writers, musicians, and communities continued developing cultural spaces and forms that challenged exclusion and represented Black life.",
        color: "yellow"
    },

    {
        year: "1950s–1960s",
        title: "Civil Rights Era",
        category: "History",
        summary:
            "A period of major organizing, protest, litigation, legislation, and cultural activity around racial segregation and civil rights in the United States.",
        color: "blue"
    },

    {
        year: "1960s–1970s",
        title: "Black Arts Movement",
        category: "Art",
        summary:
            "Writers, visual artists, musicians, and theater makers developed work centered on Black identity, political consciousness, community, and cultural independence.",
        color: "purple"
    },

    {
        year: "1960s–1970s",
        title: "Chicano Movement",
        category: "Latino culture",
        summary:
            "Mexican American activists, students, workers, artists, and organizers advocated around civil rights, labor, education, land, and cultural identity.",
        color: "green"
    },

    {
        year: "1960s–1970s",
        title: "American Indian Movement Era",
        category: "Indigenous history",
        summary:
            "Indigenous activists organized around sovereignty, treaty rights, community issues, and the political and cultural visibility of Native peoples.",
        color: "orange"
    },

    {
        year: "1970s–1980s",
        title: "Hip-Hop Emerges",
        category: "Music",
        summary:
            "Hip-hop culture developed through DJing, MCing, breakdancing, graffiti, and community-centered creative practices, particularly in New York City.",
        color: "red"
    },

    {
        year: "1980s–1990s",
        title: "Independent Cultural Media",
        category: "Culture",
        summary:
            "Zines, independent music scenes, community publications, street art, and alternative media created additional ways for communities to tell their own stories.",
        color: "yellow"
    },

    {
        year: "2000s–Today",
        title: "Digital Culture & Archiving",
        category: "Contemporary",
        summary:
            "Digital platforms have expanded how artists, writers, musicians, historians, and communities document, share, remix, and preserve culture.",
        color: "blue"
    }
];


function initTimeline() {
    const timeline =
        document.querySelector("#people-timeline") ||
        document.querySelector(".timeline");

    if (!timeline) return;

    if (
        timeline.dataset.blackoutTimeline === "true"
    ) {
        renderTimeline(timeline);
        return;
    }

    const existingItems =
        timeline.querySelectorAll(".timeline-item");

    if (existingItems.length > 0) {
        existingItems.forEach(item => {
            item.classList.add("timeline-item");
        });

        return;
    }

    timeline.dataset.blackoutTimeline = "true";
    renderTimeline(timeline);
}


function renderTimeline(container, filter = "all") {
    const items = filter === "all"
        ? blackoutTimeline
        : blackoutTimeline.filter(
            item => item.category === filter
        );

    container.innerHTML = items.map((item, index) => `
        <article class="timeline-item">
            <span class="timeline-year">
                ${escapeHTML(item.year)}
            </span>

            <span class="stamp ${item.color || ""}">
                ${escapeHTML(item.category)}
            </span>

            <h3>${escapeHTML(item.title)}</h3>

            <p>
                ${escapeHTML(item.summary)}
            </p>

            <button
                type="button"
                class="timeline-more"
                data-index="${index}"
            >
                READ ENTRY →
            </button>
        </article>
    `).join("");

    container.querySelectorAll(".timeline-more")
        .forEach(button => {
            button.addEventListener("click", () => {
                const item =
                    items[Number(button.dataset.index)];

                openTimelineEntry(item);
            });
        });
}


function openTimelineEntry(item) {
    const modal = document.createElement("div");

    modal.className = "modal active";

    modal.innerHTML = `
        <div class="modal-content tape">
            <button class="modal-close" type="button">×</button>

            <span class="timeline-year">
                ${escapeHTML(item.year)}
            </span>

            <h2>${escapeHTML(item.title)}</h2>

            <span class="stamp">
                ${escapeHTML(item.category)}
            </span>

            <p>
                ${escapeHTML(item.summary)}
            </p>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const close = () => {
        modal.remove();
        document.body.style.overflow = "";
    };

    modal.querySelector(".modal-close")
        .addEventListener("click", close);

    modal.addEventListener("click", event => {
        if (event.target === modal) close();
    });
}


/* =========================================================
   POETRY
   ========================================================= */

const blackoutPoets = [
    {
        poet: "Langston Hughes",
        title: "Selected Work",
        category: "Harlem Renaissance",
        excerpt:
            "A short excerpt can be placed here from a public-domain poem.",
        description:
            "Explore Hughes through the relationship between poetry, music, Black life, and the Harlem Renaissance.",
        source:
            "https://www.poetryfoundation.org/poets/langston-hughes"
    },

    {
        poet: "Maya Angelou",
        title: "Selected Work",
        category: "Identity / Memory",
        excerpt:
            "Use a brief authorized excerpt here rather than reproducing an entire copyrighted poem.",
        description:
            "Angelou's poetry and prose frequently explore identity, memory, race, resilience, and human dignity.",
        source:
            "https://www.poetryfoundation.org/poets/maya-angelou"
    },

    {
        poet: "Audre Lorde",
        title: "Selected Work",
        category: "Identity / Power",
        excerpt:
            "A short excerpt belongs here when an authorized source permits it.",
        description:
            "Lorde's poetry and essays examine identity, power, race, gender, sexuality, and resistance.",
        source:
            "https://www.poetryfoundation.org/poets/audre-lorde"
    },

    {
        poet: "Gwendolyn Brooks",
        title: "Selected Work",
        category: "Black Life",
        excerpt:
            "A short excerpt can be displayed here.",
        description:
            "Brooks frequently wrote about Black communities, ordinary life, social conditions, and urban experience.",
        source:
            "https://www.poetryfoundation.org/poets/gwendolyn-brooks"
    },

    {
        poet: "Joy Harjo",
        title: "Selected Work",
        category: "Indigenous / Memory",
        excerpt:
            "Use a short excerpt or your own commentary here.",
        description:
            "Harjo's work brings poetry, music, Indigenous identity, history, memory, and place into conversation.",
        source:
            "https://www.poetryfoundation.org/poets/joy-harjo"
    },

    {
        poet: "Nikki Giovanni",
        title: "Selected Work",
        category: "Black Arts",
        excerpt:
            "A short authorized excerpt can appear here.",
        description:
            "Giovanni's writing spans poetry, family, Black identity, culture, education, and social questions.",
        source:
            "https://www.poetryfoundation.org/poets/nikki-giovanni"
    }
];


function initPoetryPage() {
    const grid =
        document.querySelector("#poetry-grid") ||
        document.querySelector(".poetry-grid");

    if (!grid) return;

    if (
        grid.children.length > 0 &&
        !grid.dataset.blackoutPoetry
    ) {
        grid.dataset.blackoutPoetry = "true";
        enhancePoetryCards(grid);
        return;
    }

    renderPoetry(grid, blackoutPoets);
}


function renderPoetry(container, poems) {
    container.innerHTML = poems.map(poem => `
        <article class="poetry-card poem-card tape">
            <span class="stamp">
                ${escapeHTML(poem.category)}
            </span>

            <h3 class="poet-name">
                ${escapeHTML(poem.poet)}
            </h3>

            <p class="poem-title">
                ${escapeHTML(poem.title)}
            </p>

            <blockquote>
                ${escapeHTML(poem.excerpt)}
            </blockquote>

            <p>
                ${escapeHTML(poem.description)}
            </p>

            <a
                class="button"
                href="${escapeAttribute(poem.source)}"
                target="_blank"
                rel="noopener"
            >
                READ / EXPLORE →
            </a>
        </article>
    `).join("");
}


function enhancePoetryCards(grid) {
    grid.querySelectorAll(
        ".poetry-card, .poem-card"
    ).forEach(card => {
        card.classList.add("poem-card", "tape");
    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function initSearch() {
    document.querySelectorAll(
        "[data-search-input]"
    ).forEach(input => {
        const targetSelector =
            input.dataset.searchTarget;

        const target =
            document.querySelector(targetSelector);

        if (!target) return;

        input.addEventListener("input", () => {
            const query =
                input.value.trim().toLowerCase();

            target.querySelectorAll(
                ".card, .poem-card, .person-card, " +
                ".story-card, .resource-card, " +
                ".archive-card, .timeline-item"
            ).forEach(item => {
                const text =
                    item.textContent.toLowerCase();

                item.style.display =
                    !query || text.includes(query)
                        ? ""
                        : "none";
            });
        });
    });
}


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

function initKeyboardSupport() {
    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;

        document.querySelectorAll(
            ".modal.active, .modal.open, .overlay.active"
        ).forEach(closeModal);
    });
}


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
    return escapeHTML(value);
}
