/* =========================================================
   BLACKOUT — GLOBAL JAVASCRIPT
   People / Music / Art / History / Politics / Poetry /
   Stories / Archive / Gallery / Journal / Resources /
   About / Sketchbook
   ========================================================= */

"use strict";


/* =========================================================
   BASIC HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const escapeHTML = (value = "") => {
    const div = document.createElement("div");
    div.textContent = String(value);
    return div.innerHTML;
};


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function initNavigation() {

    const toggle = $(".menu-toggle");
    const nav =
        $(".main-nav") ||
        $(".nav-links") ||
        $(".site-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        toggle.classList.toggle(
            "open",
            isOpen
        );

        toggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });


    /* Close mobile menu after clicking a link */

    $$("a", nav).forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");
            toggle.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {

    const currentPage =
        document.body.dataset.page;

    if (!currentPage) return;

    const pageMap = {
        people: "people.html",
        music: "music.html",
        art: "art.html",
        history: "history.html",
        politics: "politics.html",
        poetry: "poetry.html",
        stories: "stories.html",
        archive: "archive.html",
        gallery: "gallery.html",
        journal: "journal.html",
        resources: "resources.html",
        about: "about.html",
        sketchbook: "sketchbook.html"
    };

    const currentFile =
        pageMap[currentPage];

    if (!currentFile) return;

    $$(
        ".main-nav a, .nav-links a, .site-nav a"
    ).forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href === currentFile ||
            href?.endsWith("/" + currentFile)
        ) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );
        }

    });

}


/* =========================================================
   SCROLL REVEALS
   ========================================================= */

function initRevealAnimations() {

    const elements =
        $$(".reveal");

    if (!elements.length) return;


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(el =>
            el.classList.add("visible")
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(el =>
        observer.observe(el)
    );

}


/* =========================================================
   EXPANDABLE CARDS
   ========================================================= */

function initExpandableCards() {

    $$(".expand-card").forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            const card =
                button.closest(
                    ".person-card, .card, .paper-card, article"
                );

            if (!card) return;

            const note =
                $(".hidden-note", card);

            const expanded =
                card.classList.toggle(
                    "expanded"
                );

            if (note) {

                note.hidden = !expanded;

            }

            if (
                button.dataset.openText ||
                button.dataset.closeText
            ) {

                button.textContent =
                    expanded
                        ? (
                            button.dataset.closeText ||
                            "CLOSE −"
                        )
                        : (
                            button.dataset.openText ||
                            "OPEN +"
                        );

            }

        });

    });

}


/* =========================================================
   GENERIC SEARCH
   =========================================================
   Supports:
   data-search-input
   data-search-target="#some-grid"
   ========================================================= */

function initSearchInputs() {

    $$("[data-search-input]").forEach(input => {

        const targetSelector =
            input.dataset.searchTarget;

        if (!targetSelector) return;

        const target =
            $(targetSelector);

        if (!target) return;

        const items =
            $$(
                ":scope > *",
                target
            );


        input.addEventListener(
            "input",
            () => {

                const query =
                    input.value
                        .trim()
                        .toLowerCase();

                let visible = 0;


                items.forEach(item => {

                    const searchable = (
                        item.dataset.search ||
                        item.textContent ||
                        ""
                    ).toLowerCase();

                    const matches =
                        !query ||
                        searchable.includes(query);

                    item.style.display =
                        matches ? "" : "none";

                    if (matches) {
                        visible++;
                    }

                });


                const empty =
                    input.dataset.searchEmpty
                        ? $(
                            input.dataset.searchEmpty
                        )
                        : null;

                if (empty) {

                    empty.style.display =
                        visible === 0
                            ? ""
                            : "none";
                }

            }
        );

    });

}


/* =========================================================
   PEOPLE DATA
   ========================================================= */

const BLACKOUT_PEOPLE = [

    {
        name: "James Baldwin",
        category: "Black culture",
        era: "1924–1987",
        role: "Writer / Essayist",
        bio:
            "American writer and essayist whose work examined race, sexuality, religion, identity, and American society.",
        color: "var(--red)",
        symbol: "JB"
    },

    {
        name: "Angela Davis",
        category: "Black culture",
        era: "1944–present",
        role: "Scholar / Activist",
        bio:
            "Scholar and writer whose work has addressed race, gender, prisons, political movements, and social justice.",
        color: "var(--yellow)",
        symbol: "AD"
    },

    {
        name: "Nina Simone",
        category: "Music",
        era: "1933–2003",
        role: "Musician / Singer",
        bio:
            "Pianist, singer, and songwriter whose music crossed jazz, blues, classical, soul, and civil-rights expression.",
        color: "var(--blue)",
        symbol: "NS"
    },

    {
        name: "Kendrick Lamar",
        category: "Contemporary",
        era: "1987–present",
        role: "Rapper / Artist",
        bio:
            "Rapper and songwriter whose work frequently explores identity, community, violence, faith, race, and American life.",
        color: "var(--orange)",
        symbol: "KL"
    },

    {
        name: "Joy Harjo",
        category: "Indigenous history",
        era: "1951–present",
        role: "Poet / Musician",
        bio:
            "Muscogee poet, musician, and writer whose work connects memory, Indigenous identity, history, music, and place.",
        color: "var(--green)",
        symbol: "JH"
    },

    {
        name: "César Chávez",
        category: "Latino culture",
        era: "1927–1993",
        role: "Labor Organizer",
        bio:
            "Labor organizer associated with farmworker organizing and the United Farm Workers movement.",
        color: "var(--red)",
        symbol: "CC"
    },

    {
        name: "Bob Marley",
        category: "Music",
        era: "1945–1981",
        role: "Musician / Songwriter",
        bio:
            "Jamaican musician whose reggae became internationally influential and whose work often addressed peace, freedom, identity, and social conditions.",
        color: "var(--yellow)",
        symbol: "BM"
    },

    {
        name: "Frida Kahlo",
        category: "Art",
        era: "1907–1954",
        role: "Painter",
        bio:
            "Mexican painter known for self-portraits and work engaging identity, physical experience, Mexican culture, and symbolism.",
        color: "var(--purple)",
        symbol: "FK"
    }

];


/* =========================================================
   CHARACTER DATA
   ========================================================= */

const BLACKOUT_CREW = [

    {
        name: "Malik",
        role: "THE OBSERVER",
        symbol: "M",
        color: "var(--red)"
    },

    {
        name: "Von",
        role: "THE MAKER",
        symbol: "V",
        color: "var(--yellow)"
    },

    {
        name: "Da'Vaun",
        role: "THE QUESTION",
        symbol: "D",
        color: "var(--blue)"
    },

    {
        name: "Leak",
        role: "THE INTERRUPTION",
        symbol: "L",
        color: "var(--green)"
    }

];


/* =========================================================
   CHARACTER AVATAR
   ========================================================= */

function createCharacterFace(character) {

    const face =
        document.createElement("div");

    face.className =
        "character-face blackout-character";

    face.style.setProperty(
        "--character-color",
        character.color
    );

    face.innerHTML = `
        <div class="character-head">
            <span class="character-hair"></span>
            <span class="character-eye left"></span>
            <span class="character-eye right"></span>
            <span class="character-mouth"></span>
        </div>

        <span class="character-symbol">
            ${escapeHTML(character.symbol)}
        </span>
    `;

    return face;
}


/* =========================================================
   PERSON AVATAR
   ========================================================= */

function createPersonPortrait(person) {

    const portrait =
        document.createElement("div");

    portrait.className =
        "person-portrait blackout-portrait";

    portrait.style.setProperty(
        "--portrait-color",
        person.color
    );

    portrait.innerHTML = `
        <div class="portrait-face">
            <span class="portrait-hair"></span>
            <span class="portrait-eye left"></span>
            <span class="portrait-eye right"></span>
            <span class="portrait-nose"></span>
            <span class="portrait-mouth"></span>
        </div>

        <span class="portrait-initials">
            ${escapeHTML(person.symbol)}
        </span>
    `;

    return portrait;
}


/* =========================================================
   PEOPLE PAGE
   ========================================================= */

function renderPeopleCards() {

    const grid =
        $("#people-grid") ||
        $("#peopleGrid");

    if (!grid) return;


    /*
       If the HTML already contains people cards,
       do not destroy them.

       Otherwise create the cards from the
       BLACKOUT people data.
    */

    const existing =
        $$(".person-card", grid);

    if (existing.length) {

        existing.forEach(card => {

            const name =
                $(".person-name, h3", card)
                    ?.textContent
                    ?.trim();

            const person =
                BLACKOUT_PEOPLE.find(
                    p =>
                        p.name.toLowerCase() ===
                        name?.toLowerCase()
                );

            if (
                person &&
                !$(".person-portrait", card) &&
                !$(".character-face", card)
            ) {

                const firstChild =
                    card.firstElementChild;

                card.insertBefore(
                    createPersonPortrait(person),
                    firstChild
                );

            }

        });

        return;
    }


    BLACKOUT_PEOPLE.forEach(person => {

        const card =
            document.createElement("article");

        card.className =
            "person-card";

        card.dataset.search = `
            ${person.name}
            ${person.category}
            ${person.role}
            ${person.bio}
        `;

        card.innerHTML = `
            <div class="person-portrait-wrap"></div>

            <span class="tag">
                ${escapeHTML(person.category)}
            </span>

            <h3 class="person-name">
                ${escapeHTML(person.name)}
            </h3>

            <p class="person-role">
                ${escapeHTML(person.role)}
            </p>

            <p>
                ${escapeHTML(person.bio)}
            </p>

            <button
                type="button"
                class="expand-card"
                data-open-text="READ NOTE +"
                data-close-text="CLOSE NOTE −"
            >
                READ NOTE +
            </button>

            <div class="hidden-note" hidden>
                <strong>
                    ${escapeHTML(person.era)}
                </strong>

                <p>
                    ${escapeHTML(person.bio)}
                </p>
            </div>
        `;

        const portrait =
            createPersonPortrait(person);

        $(".person-portrait-wrap", card)
            .appendChild(portrait);

        grid.appendChild(card);

    });

}


/* =========================================================
   PEOPLE TIMELINE
   ========================================================= */

const PEOPLE_TIMELINE = [

    {
        year: "1924",
        title: "James Baldwin",
        category: "Black culture",
        text:
            "James Baldwin was born in New York City and later became an internationally recognized writer and essayist."
    },

    {
        year: "1927",
        title: "César Chávez",
        category: "Latino culture",
        text:
            "César Chávez was born in Arizona and later became associated with farmworker organizing."
    },

    {
        year: "1933",
        title: "Nina Simone",
        category: "Music",
        text:
            "Nina Simone was born in North Carolina and became a major pianist, singer, and songwriter."
    },

    {
        year: "1944",
        title: "Angela Davis",
        category: "Black culture",
        text:
            "Angela Davis was born in Alabama and became a scholar, writer, and activist."
    },

    {
        year: "1945",
        title: "Bob Marley",
        category: "Music",
        text:
            "Bob Marley was born in Jamaica and became one of reggae's most internationally recognized musicians."
    },

    {
        year: "1951",
        title: "Joy Harjo",
        category: "Indigenous history",
        text:
            "Joy Harjo was born in Oklahoma and became a poet, musician, and writer of Muscogee heritage."
    },

    {
        year: "1954",
        title: "Frida Kahlo enters the historical record as a continuing cultural influence",
        category: "Art",
        text:
            "Frida Kahlo's paintings continued to have a major cultural presence after her death in 1954."
    },

    {
        year: "1987",
        title: "Kendrick Lamar",
        category: "Contemporary",
        text:
            "Kendrick Lamar was born in Compton, California and later became an internationally recognized rapper and songwriter."
    }

];


function renderTimeline(element, filter = "all") {

    if (!element) return;

    const entries =
        PEOPLE_TIMELINE.filter(item => {

            if (!filter || filter === "all") {
                return true;
            }

            return (
                item.category.toLowerCase() ===
                filter.toLowerCase()
            );

        });


    element.innerHTML = entries.map(item => `
        <article
            class="timeline-item"
            data-category="${escapeHTML(item.category)}"
        >

            <div class="timeline-year">
                ${escapeHTML(item.year)}
            </div>

            <div class="timeline-content">

                <h3>
                    ${escapeHTML(item.title)}
                </h3>

                <span class="tag">
                    ${escapeHTML(item.category)}
                </span>

                <p>
                    ${escapeHTML(item.text)}
                </p>

            </div>

        </article>
    `).join("");

}


/* =========================================================
   PEOPLE TIMELINE FILTER
   ========================================================= */

function initPeopleTimeline() {

    const timeline =
        $("#peopleTimeline") ||
        $("#people-timeline");

    if (!timeline) return;


    const filter =
        $("#timelineFilter");


    if (filter) {

        renderTimeline(
            timeline,
            filter.value || "all"
        );

        filter.addEventListener(
            "change",
            () => {

                renderTimeline(
                    timeline,
                    filter.value || "all"
                );

            }
        );

    } else {

        renderTimeline(
            timeline,
            "all"
        );

    }

}


/* =========================================================
   PEOPLE CREW
   ========================================================= */

function initCrewCards() {

    const container =
        $("#crewGrid") ||
        $("#crew-grid");

    if (!container) return;


    if (container.children.length) {
        return;
    }


    BLACKOUT_CREW.forEach(character => {

        const card =
            document.createElement("article");

        card.className =
            "person-card crew-card";

        card.innerHTML = `
            <div class="crew-face"></div>

            <span class="tag">
                BLACKOUT CREW
            </span>

            <h3>
                ${escapeHTML(character.name)}
            </h3>

            <p>
                ${escapeHTML(character.role)}
            </p>
        `;

        $(".crew-face", card)
            .appendChild(
                createCharacterFace(character)
            );

        container.appendChild(card);

    });

}


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

function initFilterButtons() {

    $$("[data-filter-group]").forEach(group => {

        const targetSelector =
            group.dataset.filterTarget;

        const target =
            targetSelector
                ? $(targetSelector)
                : null;

        if (!target) return;


        const buttons =
            $$("[data-filter]", group);


        const items =
            $$("[data-filter-item]", target);


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    buttons.forEach(
                        b =>
                            b.classList.remove(
                                "active"
                            )
                    );

                    button.classList.add(
                        "active"
                    );

                    const filter =
                        button.dataset.filter;


                    items.forEach(item => {

                        const categories =
                            (
                                item.dataset.filterItem ||
                                ""
                            )
                                .toLowerCase()
                                .split(",");

                        const show =
                            filter === "all" ||
                            categories.includes(
                                filter.toLowerCase()
                            );

                        item.style.display =
                            show ? "" : "none";

                    });

                }
            );

        });

    });

}


/* =========================================================
   ART FILTER
   ========================================================= */

function initArtFilters() {

    const wall =
        $("#artWall");

    if (!wall) return;


    const buttons =
        $$("[data-art-filter]");

    const cards =
        $$(".art-card", wall);


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    b =>
                        b.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );

                const filter =
                    button.dataset.artFilter;


                cards.forEach(card => {

                    const category =
                        (
                            card.dataset.category ||
                            ""
                        ).toLowerCase();

                    card.style.display =
                        filter === "all" ||
                        category === filter
                            ? ""
                            : "none";

                });

            }
        );

    });

}


/* =========================================================
   HISTORY FILTER
   ========================================================= */

function initHistoryFilters() {

    const timeline =
        $("#historyTimeline");

    if (!timeline) return;


    const buttons =
        $$("[data-history-filter]");

    const entries =
        $$(".history-entry", timeline);


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    b =>
                        b.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );

                const filter =
                    button.dataset.historyFilter;


                entries.forEach(entry => {

                    const category =
                        (
                            entry.dataset.history ||
                            ""
                        ).toLowerCase();

                    entry.style.display =
                        filter === "all" ||
                        category === filter
                            ? ""
                            : "none";

                });

            }
        );

    });

}


/* =========================================================
   HISTORY JUMP LINKS
   ========================================================= */

function initHistoryJumps() {

    $$("[data-target]").forEach(button => {

        const targetID =
            button.dataset.target;

        if (!targetID) return;

        const target =
            document.getElementById(
                targetID
            );

        if (!target) return;


        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   MUSIC CARD INTERACTIONS
   ========================================================= */

function initMusicCards() {

    $$(".music-card, .album-card").forEach(card => {

        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        "a, button"
                    )
                ) {
                    return;
                }

                card.classList.toggle(
                    "selected"
                );

            }
        );

    });

}


/* =========================================================
   POETRY SEARCH / FILTER
   ========================================================= */

function initPoetryFilters() {

    const wall =
        $("#poetryWall") ||
        $("#poetry-grid");

    if (!wall) return;


    const search =
        $("#poemSearch");

    const cards =
        $(
            ".poetry-card, .poem-card",
            wall
        );


    function filterPoems() {

        const query =
            search
                ? search.value
                    .trim()
                    .toLowerCase()
                : "";


        cards.forEach(card => {

            const text =
                card.textContent
                    .toLowerCase();

            card.style.display =
                !query ||
                text.includes(query)
                    ? ""
                    : "none";

        });

    }


    if (search) {
        search.addEventListener(
            "input",
            filterPoems
        );
    }


    $$(
        "[data-poetry-filter]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.poetryFilter;

                $$(
                    "[data-poetry-filter]"
                ).forEach(
                    b =>
                        b.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );


                cards.forEach(card => {

                    if (
                        filter === "all"
                    ) {

                        card.style.display =
                            "";

                        return;
                    }


                    const categories =
                        (
                            card.dataset.category ||
                            ""
                        )
                            .toLowerCase();


                    card.style.display =
                        categories.includes(
                            filter.toLowerCase()
                        )
                            ? ""
                            : "none";

                });

            }
        );

    });

}


/* =========================================================
   RANDOM TEXT / QUOTE
   ========================================================= */

function initRandomText() {

    const buttons =
        $$("[data-random-text]");

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const outputSelector =
                    button.dataset.randomTarget;

                const output =
                    outputSelector
                        ? $(outputSelector)
                        : null;

                if (!output) return;


                const choices =
                    (
                        button.dataset.randomText ||
                        ""
                    )
                        .split("|")
                        .map(x => x.trim())
                        .filter(Boolean);


                if (!choices.length) return;


                const choice =
                    choices[
                        Math.floor(
                            Math.random() *
                            choices.length
                        )
                    ];


                output.textContent =
                    choice;

            }
        );

    });

}


/* =========================================================
   GENERIC BUTTON → SCROLL
   ========================================================= */

function initScrollButtons() {

    $$("[data-scroll-to]").forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const target =
                    $(
                        button.dataset.scrollTo
                    );

                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

function initKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            /*
               "/" focuses a search box when
               the user isn't already typing.
            */

            if (
                event.key === "/" &&
                !["INPUT", "TEXTAREA", "SELECT"]
                    .includes(
                        document.activeElement.tagName
                    )
            ) {

                const search =
                    $(
                        "#peopleSearch, #poemSearch, #siteSearch"
                    );

                if (search) {

                    event.preventDefault();
                    search.focus();

                }

            }

        }
    );

}


/* =========================================================
   EXTERNAL LINKS
   ========================================================= */

function initExternalLinks() {

    $$("a[href]").forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;


        if (
            href.startsWith("http://") ||
            href.startsWith("https://")
        ) {

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }

    });

}


/* =========================================================
   ACTIVE HASH SECTION
   ========================================================= */

function initHashNavigation() {

    if (!window.location.hash) return;

    const id =
        window.location.hash.slice(1);

    const target =
        document.getElementById(id);

    if (!target) return;


    setTimeout(() => {

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 150);

}


/* =========================================================
   LITTLE RANDOM ROTATIONS
   ========================================================= */

function initRandomCardMotion() {

    $$(".paper-card, .person-card, .poem-card").forEach(
        card => {

            if (
                card.dataset.noRotate === "true"
            ) {
                return;
            }


            if (
                card.style.transform
            ) {
                return;
            }


            const rotation =
                (
                    Math.random() * 3
                ) - 1.5;


            card.style.setProperty(
                "--blackout-rotation",
                `${rotation}deg`
            );

        }
    );

}


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

function initBLACKOUT() {

    initNavigation();
    initActiveNavigation();

    initRevealAnimations();

    initExpandableCards();

    initSearchInputs();

    renderPeopleCards();
    initPeopleTimeline();
    initCrewCards();

    initFilterButtons();

    initArtFilters();
    initHistoryFilters();
    initHistoryJumps();

    initMusicCards();
    initPoetryFilters();

    initRandomText();
    initScrollButtons();

    initKeyboardShortcuts();

    initExternalLinks();

    initHashNavigation();

    initRandomCardMotion();

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initBLACKOUT
    );

} else {

    initBLACKOUT();

}
