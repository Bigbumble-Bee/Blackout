/* =========================================================
   BLACKOUT — INTERACTION ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
       ===================================================== */

    const people = [

        {
            id: "baldwin",
            name: "James Baldwin",
            category: "Writer / Essayist",
            wiki: "James Baldwin",
            letter: "JB",

            bio:
                "An American writer and essayist whose work examined race, identity, sexuality, religion, belonging, and American society.",

            tags: [
                "literature",
                "race",
                "identity",
                "philosophy"
            ],

            timeline: [
                {
                    year: "1924",
                    title: "Born",
                    description:
                        "James Baldwin was born in New York City."
                },
                {
                    year: "1953",
                    title: "Go Tell It on the Mountain",
                    description:
                        "Baldwin published his first major novel, exploring religion, family, identity, and growing up."
                },
                {
                    year: "1955",
                    title: "Notes of a Native Son",
                    description:
                        "Baldwin published a collection of essays examining race, culture, literature, and American life."
                },
                {
                    year: "1963",
                    title: "The Fire Next Time",
                    description:
                        "Baldwin published a major work examining race, religion, and the United States."
                },
                {
                    year: "1987",
                    title: "Death",
                    description:
                        "Baldwin died in Saint-Paul-de-Vence, France."
                }
            ]
        },

        {
            id: "davis",
            name: "Angela Davis",
            category: "Scholar / Author / Activist",
            wiki: "Angela Davis",
            letter: "AD",

            bio:
                "A scholar and author whose work has addressed prisons, race, gender, political movements, and social justice.",

            tags: [
                "prisons",
                "race",
                "gender",
                "philosophy"
            ],

            timeline: [
                {
                    year: "1944",
                    title: "Born",
                    description:
                        "Angela Davis was born in Birmingham, Alabama."
                },
                {
                    year: "1960s",
                    title: "Political Organizing",
                    description:
                        "Davis became involved in civil-rights and political organizing."
                },
                {
                    year: "1970s",
                    title: "Prison and Political Repression",
                    description:
                        "Her case became part of a major national debate involving prisons, political repression, and civil liberties."
                },
                {
                    year: "1981",
                    title: "Women, Race & Class",
                    description:
                        "Davis published Women, Race & Class, examining relationships among race, gender, class, and historical movements."
                },
                {
                    year: "Today",
                    title: "Scholarship",
                    description:
                        "Davis continues to write, teach, and speak about politics, prisons, race, gender, and social movements."
                }
            ]
        },

        {
            id: "nin",
            name: "Nina Simone",
            category: "Musician / Composer",
            wiki: "Nina Simone",
            letter: "NS",

            bio:
                "A pianist, singer, and composer whose work crossed jazz, blues, classical, soul, and protest traditions.",

            tags: [
                "music",
                "jazz",
                "protest",
                "art"
            ],

            timeline: [
                {
                    year: "1933",
                    title: "Born",
                    description:
                        "Nina Simone was born Eunice Kathleen Waymon in Tryon, North Carolina."
                },
                {
                    year: "1950s",
                    title: "Recording Career",
                    description:
                        "Simone began building a professional recording career that crossed several musical traditions."
                },
                {
                    year: "1960s",
                    title: "Civil Rights Era",
                    description:
                        "Her music increasingly engaged with racial injustice, identity, and the political atmosphere of the period."
                },
                {
                    year: "1970s",
                    title: "International Career",
                    description:
                        "Simone continued performing and recording internationally."
                },
                {
                    year: "2003",
                    title: "Death",
                    description:
                        "Nina Simone died in Carry-le-Rouet, France."
                }
            ]
        },

        {
            id: "kendrick",
            name: "Kendrick Lamar",
            category: "Rapper / Songwriter",
            wiki: "Kendrick Lamar",
            letter: "KL",

            bio:
                "A rapper and songwriter from Compton, California, known for concept-driven albums addressing identity, community, inequality, faith, and personal experience.",

            tags: [
                "hip-hop",
                "storytelling",
                "identity",
                "music"
            ],

            timeline: [
                {
                    year: "1987",
                    title: "Born",
                    description:
                        "Kendrick Lamar was born in Compton, California."
                },
                {
                    year: "2012",
                    title: "good kid, m.A.A.d city",
                    description:
                        "Lamar released a major concept album centered on adolescence, environment, family, violence, faith, and personal identity."
                },
                {
                    year: "2015",
                    title: "To Pimp a Butterfly",
                    description:
                        "The album explored race, fame, identity, community, music history, and personal conflict."
                },
                {
                    year: "2017",
                    title: "DAMN.",
                    description:
                        "Lamar released DAMN., another concept-driven album exploring identity, morality, faith, and public life."
                },
                {
                    year: "2022",
                    title: "Mr. Morale & the Big Steppers",
                    description:
                        "The album explored family, identity, relationships, generational experiences, and personal reflection."
                }
            ]
        },

        {
            id: "joy",
            name: "Joy Harjo",
            category: "Poet / Musician / Writer",
            wiki: "Joy Harjo",
            letter: "JH",

            bio:
                "A Muscogee poet, musician, and writer whose work explores memory, Indigenous identity, history, place, and survival.",

            tags: [
                "poetry",
                "Indigenous",
                "music",
                "memory"
            ],

            timeline: [
                {
                    year: "1951",
                    title: "Born",
                    description:
                        "Joy Harjo was born in Tulsa, Oklahoma."
                },
                {
                    year: "1970s",
                    title: "Poetry",
                    description:
                        "Harjo developed her writing and performance practice."
                },
                {
                    year: "1980s",
                    title: "Major Publications",
                    description:
                        "Harjo published poetry collections exploring Indigenous identity, memory, place, and history."
                },
                {
                    year: "2019",
                    title: "U.S. Poet Laureate",
                    description:
                        "Harjo became the first Native American to serve as U.S. Poet Laureate."
                },
                {
                    year: "Today",
                    title: "Writing and Music",
                    description:
                        "Harjo continues working across poetry, music, performance, and cultural memory."
                }
            ]
        },

        {
            id: "cesar",
            name: "César Chávez",
            category: "Labor Organizer / Activist",
            wiki: "Cesar Chavez",
            letter: "CC",

            bio:
                "A labor organizer who worked with farm workers and helped build a major labor movement in the United States.",

            tags: [
                "labor",
                "Latino",
                "organizing",
                "history"
            ],

            timeline: [
                {
                    year: "1927",
                    title: "Born",
                    description:
                        "César Chávez was born in Yuma, Arizona."
                },
                {
                    year: "1950s",
                    title: "Community Organizing",
                    description:
                        "Chávez worked as a community organizer before moving more deeply into farm-worker organizing."
                },
                {
                    year: "1960s",
                    title: "Farm Worker Organizing",
                    description:
                        "Chávez helped organize farm workers and build a labor movement."
                },
                {
                    year: "1970s",
                    title: "Labor Advocacy",
                    description:
                        "He continued organizing and advocating around working conditions and labor rights."
                },
                {
                    year: "1993",
                    title: "Death",
                    description:
                        "Chávez died in San Luis, Arizona."
                }
            ]
        },

        {
            id: "marley",
            name: "Bob Marley",
            category: "Musician / Songwriter",
            wiki: "Bob Marley",
            letter: "BM",

            bio:
                "A Jamaican musician and songwriter whose work helped bring reggae to a worldwide audience and frequently addressed spirituality, unity, freedom, and social conditions.",

            tags: [
                "reggae",
                "music",
                "Jamaica",
                "culture"
            ],

            timeline: [
                {
                    year: "1945",
                    title: "Born",
                    description:
                        "Bob Marley was born in Nine Mile, Jamaica."
                },
                {
                    year: "1960s",
                    title: "The Wailers",
                    description:
                        "Marley developed his recording career with The Wailers."
                },
                {
                    year: "1970s",
                    title: "International Recognition",
                    description:
                        "Marley became one of the most internationally recognized reggae musicians."
                },
                {
                    year: "1980",
                    title: "Final Concert",
                    description:
                        "Marley performed his final concert in Pittsburgh."
                },
                {
                    year: "1981",
                    title: "Death",
                    description:
                        "Bob Marley died in Miami, Florida."
                }
            ]
        },

        {
            id: "frida",
            name: "Frida Kahlo",
            category: "Artist",
            wiki: "Frida Kahlo",
            letter: "FK",

            bio:
                "A Mexican painter known for self-portraits and work dealing with identity, the body, Mexican culture, relationships, and personal experience.",

            tags: [
                "art",
                "Mexico",
                "identity",
                "painting"
            ],

            timeline: [
                {
                    year: "1907",
                    title: "Born",
                    description:
                        "Frida Kahlo was born in Coyoacán, Mexico City."
                },
                {
                    year: "1920s",
                    title: "Painting",
                    description:
                        "Kahlo developed her distinctive painting practice."
                },
                {
                    year: "1930s",
                    title: "International Exhibitions",
                    description:
                        "Her work began receiving international attention."
                },
                {
                    year: "1940s",
                    title: "Major Works",
                    description:
                        "Kahlo continued producing paintings centered on identity, experience, symbolism, and Mexican culture."
                },
                {
                    year: "1954",
                    title: "Death",
                    description:
                        "Frida Kahlo died in Mexico City."
                }
            ]
        }
    ];

    /* =====================================================
       MOBILE NAV
       ===================================================== */

    const navToggle =
        document.querySelector(".nav-toggle");

    const mainNav =
        document.querySelector(".main-nav");

    if (navToggle && mainNav) {

        navToggle.addEventListener(
            "click",
            () => {
                mainNav.classList.toggle("open");
            }
        );
    }

    /* =====================================================
       ACTIVE NAV
       ===================================================== */

    const currentFile =
        location.pathname.split("/").pop() ||
        "index.html";

    document
        .querySelectorAll(".main-nav a")
        .forEach(link => {

            if (
                link.getAttribute("href") ===
                currentFile
            ) {
                link.classList.add("active");
            }

        });

    /* =====================================================
       MODALS
       ===================================================== */

    function openModal(html) {

        let modal =
            document.querySelector("#blackoutModal");

        if (!modal) {

            modal =
                document.createElement("div");

            modal.id =
                "blackoutModal";

            modal.className =
                "modal";

            modal.innerHTML = `
                <div class="modal-content">

                    <button
                        class="modal-close"
                        aria-label="Close">
                        X
                    </button>

                    <div class="modal-body"></div>

                </div>
            `;

            document.body.appendChild(modal);

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal ||
                        event.target.classList.contains(
                            "modal-close"
                        )
                    ) {
                        closeModal();
                    }

                }
            );
        }

        modal
            .querySelector(".modal-body")
            .innerHTML = html;

        modal.classList.add("open");

        document.body.style.overflow =
            "hidden";
    }

    function closeModal() {

        const modal =
            document.querySelector(
                "#blackoutModal"
            );

        if (modal) {

            modal.classList.remove("open");

            document.body.style.overflow =
                "";
        }
    }

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeModal();
            }

        }
    );

    /* =====================================================
       PEOPLE
       ===================================================== */

    const peopleGrid =
        document.querySelector("#peopleGrid");

    if (peopleGrid) {

        renderPeople(people);

        /*
         * THIS IS THE IMPORTANT CHANGE:
         * Load every person's image immediately.
         */
        loadPeopleImages();

        const search =
            document.querySelector(
                "#peopleSearch"
            );

        if (search) {

            search.addEventListener(
                "input",
                () => {

                    const value =
                        search.value
                            .toLowerCase()
                            .trim();

                    const filtered =
                        people.filter(person =>
                            (
                                person.name +
                                " " +
                                person.category +
                                " " +
                                person.tags.join(" ")
                            )
                                .toLowerCase()
                                .includes(value)
                        );

                    renderPeople(filtered);

                    loadPeopleImages();
                }
            );
        }
    }

    function renderPeople(list) {

        if (!peopleGrid) return;

        peopleGrid.innerHTML = "";

        if (!list.length) {

            peopleGrid.innerHTML = `
                <div class="notice">
                    No people matched that search.
                </div>
            `;

            return;
        }

        list.forEach(person => {

            const card =
                document.createElement("article");

            card.className =
                "person-card";

            card.dataset.person =
                person.id;

            card.innerHTML = `

                <div
                    class="person-image"
                    id="person-image-${person.id}">

                    <div class="person-initial">
                        ${person.letter}
                    </div>

                    <span class="person-loading">
                        LOADING IMAGE...
                    </span>

                </div>

                <div class="person-info">

                    <h3>
                        ${person.name}
                    </h3>

                    <p>
                        ${person.category}
                    </p>

                </div>

                <span class="click-label">
                    OPEN PROFILE →
                </span>
            `;

            card.addEventListener(
                "click",
                () => openPerson(person)
            );

            peopleGrid.appendChild(card);
        });
    }

    async function loadPeopleImages() {

        for (const person of people) {

            const box =
                document.querySelector(
                    `#person-image-${person.id}`
                );

            if (!box) continue;

            try {

                const endpoint =
                    "https://en.wikipedia.org/api/rest_v1/page/summary/" +
                    encodeURIComponent(person.wiki);

                const response =
                    await fetch(endpoint);

                if (!response.ok) {
                    continue;
                }

                const data =
                    await response.json();

                if (
                    data.thumbnail &&
                    data.thumbnail.source
                ) {

                    box.innerHTML = `
                        <img
                            src="${data.thumbnail.source}"
                            alt="${escapeHTML(person.name)}"
                            loading="lazy">
                    `;
                }

            } catch (error) {

                /*
                 * If the image cannot load,
                 * the person's initials remain.
                 */

                const loading =
                    box.querySelector(
                        ".person-loading"
                    );

                if (loading) {
                    loading.remove();
                }
            }
        }
    }

    function openPerson(person) {

        openModal(`

            <div class="modal-layout">

                <div>

                    <div
                        class="modal-image"
                        id="modalPersonImage">

                        <div class="person-initial">
                            ${person.letter}
                        </div>

                    </div>

                </div>

                <div>

                    <span class="modal-label">
                        ${person.category}
                    </span>

                    <h2>
                        ${person.name}
                    </h2>

                    <p>
                        ${person.bio}
                    </p>

                    <div
                        class="toolbar">

                        ${person.tags.map(tag => `
                            <span class="btn dark">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                    <h3>
                        TIMELINE
                    </h3>

                    <div class="timeline">

                        ${person.timeline.map(event => `

                            <article
                                class="timeline-item">

                                <div class="timeline-year">
                                    ${event.year}
                                </div>

                                <div class="timeline-person">
                                    ${person.name}
                                </div>

                                <div class="timeline-title">
                                    ${event.title}
                                </div>

                                <div class="timeline-description">
                                    ${event.description}
                                </div>

                            </article>

                        `).join("")}

                    </div>

                    <div class="notice">

                        Use the profile as a starting point.
                        Explore the person's actual work and
                        additional sources for deeper research.

                    </div>

                </div>

            </div>
        `);

        /*
         * Reuse the already-loaded image if possible.
         */
        const cardImage =
            document.querySelector(
                `#person-image-${person.id} img`
            );

        const modalImage =
            document.querySelector(
                "#modalPersonImage"
            );

        if (
            cardImage &&
            modalImage
        ) {

            modalImage.innerHTML = `
                <img
                    src="${cardImage.src}"
                    alt="${escapeHTML(person.name)}">
            `;
        }
    }

    /* =====================================================
       PEOPLE TIMELINE
       ===================================================== */

    const peopleTimeline =
        document.querySelector(
            "#peopleTimeline"
        );

    if (peopleTimeline) {

        renderTimeline("");

        const filter =
            document.querySelector(
                "#timelineFilter"
            );

        if (filter) {

            filter.addEventListener(
                "change",
                () => {

                    renderTimeline(
                        filter.value
                    );

                }
            );
        }
    }

    function renderTimeline(filter) {

        if (!peopleTimeline) return;

        peopleTimeline.innerHTML = "";

        const events = [];

        people.forEach(person => {

            if (
                filter &&
                person.id !== filter
            ) {
                return;
            }

            person.timeline.forEach(event => {

                events.push({
                    ...event,
                    person:
                        person.name,
                    personId:
                        person.id
                });

            });
        });

        /*
         * Sort recognizable years first.
         * "Today" goes to the bottom.
         */
        events.sort((a,b) => {

            const yearA =
                parseInt(a.year);

            const yearB =
                parseInt(b.year);

            if (
                Number.isNaN(yearA) &&
                Number.isNaN(yearB)
            ) return 0;

            if (Number.isNaN(yearA)) return 1;

            if (Number.isNaN(yearB)) return -1;

            return yearA - yearB;
        });

        events.forEach(event => {

            const item =
                document.createElement(
                    "article"
                );

            item.className =
                "timeline-item";

            item.innerHTML = `

                <div class="timeline-year">
                    ${event.year}
                </div>

                <div class="timeline-person">
                    ${event.person}
                </div>

                <div class="timeline-title">
                    ${event.title}
                </div>

                <div class="timeline-description">
                    ${event.description}
                </div>

            `;

            peopleTimeline.appendChild(item);
        });
    }

    /* =====================================================
       GRAFFITI WALL
       ===================================================== */

    const graffitiWall =
        document.querySelector(
            "#graffitiWall"
        );

    if (graffitiWall) {

        const defaultTags = [

            ["MALIK", 10, 15, -5, "#e7c84b"],

            ["VON", 70, 20, 7, "#d94a3a"],

            ["DA'VAUN", 25, 65, -8, "#347ca6"],

            ["LEAK", 72, 70, 4, "#d65b8a"],

            ["BLACKOUT", 40, 40, -3, "#718d52"]

        ];

        defaultTags.forEach(
            tag => createGraffitiTag(...tag)
        );

        const button =
            document.querySelector(
                "#addGraffiti"
            );

        if (button) {

            button.addEventListener(
                "click",
                () => {

                    const input =
                        document.querySelector(
                            "#graffitiInput"
                        );

                    if (
                        !input ||
                        !input.value.trim()
                    ) {
                        return;
                    }

                    createGraffitiTag(
                        input.value.trim(),
                        Math.random() * 75 + 5,
                        Math.random() * 75 + 5,
                        Math.random() * 18 - 9,
                        randomGraffitiColor()
                    );

                    input.value = "";
                }
            );
        }
    }

    function createGraffitiTag(
        text,
        left,
        top,
        rotation,
        color
    ) {

        if (!graffitiWall) return;

        const tag =
            document.createElement("div");

        tag.className =
            "graffiti-tag";

        tag.textContent =
            text;

        tag.style.left =
            `${left}%`;

        tag.style.top =
            `${top}%`;

        tag.style.transform =
            `rotate(${rotation}deg)`;

        tag.style.color =
            color;

        makeDraggable(tag);

        graffitiWall.appendChild(tag);
    }

    function randomGraffitiColor() {

        const colors = [
            "#e7c84b",
            "#d94a3a",
            "#347ca6",
            "#d65b8a",
            "#718d52",
            "#e77b2f",
            "#8054a6"
        ];

        return colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];
    }

    function makeDraggable(element) {

        let dragging = false;

        let offsetX = 0;
        let offsetY = 0;

        element.addEventListener(
            "pointerdown",
            event => {

                dragging = true;

                const rect =
                    element.getBoundingClientRect();

                offsetX =
                    event.clientX -
                    rect.left;

                offsetY =
                    event.clientY -
                    rect.top;

                element.setPointerCapture(
                    event.pointerId
                );
            }
        );

        element.addEventListener(
            "pointermove",
            event => {

                if (!dragging) return;

                const parent =
                    element.parentElement
                        .getBoundingClientRect();

                let x =
                    (
                        event.clientX -
                        parent.left -
                        offsetX
                    ) /
                    parent.width *
                    100;

                let y =
                    (
                        event.clientY -
                        parent.top -
                        offsetY
                    ) /
                    parent.height *
                    100;

                x =
                    Math.max(
                        0,
                        Math.min(90,x)
                    );

                y =
                    Math.max(
                        0,
                        Math.min(90,y)
                    );

                element.style.left =
                    `${x}%`;

                element.style.top =
                    `${y}%`;
            }
        );

        element.addEventListener(
            "pointerup",
            () => {
                dragging = false;
            }
        );
    }

    /* =====================================================
       SKETCHBOOK
       ===================================================== */

    const canvas =
        document.querySelector(
            "#sketchCanvas"
        );

    if (canvas) {
        initializeSketchbook(canvas);
    }

    function initializeSketchbook(canvas) {

        const ctx =
            canvas.getContext("2d");

        let drawing = false;

        let color = "#111111";

        let size = 8;

        let eraser = false;

        const undoStack = [];

        const redoStack = [];

        function resizeCanvas() {

            const rect =
                canvas.getBoundingClientRect();

            const old =
                canvas.width > 0 &&
                canvas.height > 0
                    ? canvas.toDataURL()
                    : null;

            canvas.width =
                rect.width;

            canvas.height =
                rect.height;

            ctx.fillStyle =
                "#ebe2cf";

            ctx.fillRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            if (old) {

                const image =
                    new Image();

                image.onload = () => {

                    ctx.drawImage(
                        image,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                };

                image.src =
                    old;
            }
        }

        resizeCanvas();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        function position(event) {

            const rect =
                canvas.getBoundingClientRect();

            return {
                x:
                    event.clientX -
                    rect.left,

                y:
                    event.clientY -
                    rect.top
            };
        }

        function saveState() {

            undoStack.push(
                ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                )
            );

            if (
                undoStack.length >
                30
            ) {
                undoStack.shift();
            }

            redoStack.length = 0;
        }

        canvas.addEventListener(
            "pointerdown",
            event => {

                saveState();

                drawing = true;

                canvas.setPointerCapture(
                    event.pointerId
                );

                const p =
                    position(event);

                ctx.beginPath();

                ctx.moveTo(
                    p.x,
                    p.y
                );
            }
        );

        canvas.addEventListener(
            "pointermove",
            event => {

                if (!drawing) return;

                const p =
                    position(event);

                ctx.lineWidth =
                    size;

                ctx.lineCap =
                    "round";

                ctx.lineJoin =
                    "round";

                ctx.strokeStyle =
                    eraser
                        ? "#ebe2cf"
                        : color;

                ctx.lineTo(
                    p.x,
                    p.y
                );

                ctx.stroke();
            }
        );

        canvas.addEventListener(
            "pointerup",
            () => {

                drawing = false;

                ctx.closePath();
            }
        );

        document
            .querySelectorAll(".color-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".color-btn"
                            )
                            .forEach(
                                b =>
                                    b.classList.remove(
                                        "active"
                                    )
                            );

                        button.classList.add(
                            "active"
                        );

                        color =
                            button.dataset.color;

                        eraser = false;
                    }
                );
            });

        const brush =
            document.querySelector(
                "#brushSize"
            );

        if (brush) {

            brush.addEventListener(
                "input",
                () => {

                    size =
                        Number(
                            brush.value
                        );
                }
            );
        }

        const eraserButton =
            document.querySelector(
                "#eraser"
            );

        if (eraserButton) {

            eraserButton.addEventListener(
                "click",
                () => {

                    eraser =
                        !eraser;

                    eraserButton.textContent =
                        eraser
                            ? "ERASER ON"
                            : "ERASER";
                }
            );
        }

        const undo =
            document.querySelector(
                "#undo"
            );

        if (undo) {

            undo.addEventListener(
                "click",
                () => {

                    if (
                        !undoStack.length
                    ) return;

                    redoStack.push(
                        ctx.getImageData(
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        )
                    );

                    ctx.putImageData(
                        undoStack.pop(),
                        0,
                        0
                    );
                }
            );
        }

        const redo =
            document.querySelector(
                "#redo"
            );

        if (redo) {

            redo.addEventListener(
                "click",
                () => {

                    if (
                        !redoStack.length
                    ) return;

                    undoStack.push(
                        ctx.getImageData(
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        )
                    );

                    ctx.putImageData(
                        redoStack.pop(),
                        0,
                        0
                    );
                }
            );
        }

        const clear =
            document.querySelector(
                "#clearCanvas"
            );

        if (clear) {

            clear.addEventListener(
                "click",
                () => {

                    saveState();

                    ctx.fillStyle =
                        "#ebe2cf";

                    ctx.fillRect(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                }
            );
        }

        const save =
            document.querySelector(
                "#saveSketch"
            );

        if (save) {

            save.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        "blackout-sketch",
                        canvas.toDataURL()
                    );

                    save.textContent =
                        "SAVED ✓";

                    setTimeout(
                        () => {
                            save.textContent =
                                "SAVE SKETCH";
                        },
                        1500
                    );
                }
            );
        }

        const load =
            document.querySelector(
                "#loadSketch"
            );

        if (load) {

            load.addEventListener(
                "click",
                () => {

                    const saved =
                        localStorage.getItem(
                            "blackout-sketch"
                        );

                    if (!saved) return;

                    const image =
                        new Image();

                    image.onload =
                        () => {

                            ctx.clearRect(
                                0,
                                0,
                                canvas.width,
                                canvas.height
                            );

                            ctx.drawImage(
                                image,
                                0,
                                0,
                                canvas.width,
                                canvas.height
                            );
                        };

                    image.src =
                        saved;
                }
            );
        }

        const download =
            document.querySelector(
                "#downloadSketch"
            );

        if (download) {

            download.addEventListener(
                "click",
                () => {

                    const link =
                        document.createElement(
                            "a"
                        );

                    link.download =
                        "blackout-sketch.png";

                    link.href =
                        canvas.toDataURL(
                            "image/png"
                        );

                    link.click();
                }
            );
        }
    }

    /* =====================================================
       JOURNAL
       ===================================================== */

    const journalForm =
        document.querySelector(
            "#journalForm"
        );

    if (journalForm) {

        renderJournal();

        journalForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const title =
                    document
                        .querySelector(
                            "#journalTitle"
                        )
                        .value
                        .trim();

                const text =
                    document
                        .querySelector(
                            "#journalText"
                        )
                        .value
                        .trim();

                if (!text) return;

                const entries =
                    JSON.parse(
                        localStorage.getItem(
                            "blackout-journal"
                        ) || "[]"
                    );

                entries.unshift({
                    title:
                        title ||
                        "Untitled",

                    text,

                    date:
                        new Date()
                            .toLocaleDateString()
                });

                localStorage.setItem(
                    "blackout-journal",
                    JSON.stringify(entries)
                );

                journalForm.reset();

                renderJournal();
            }
        );
    }

    function renderJournal() {

        const container =
            document.querySelector(
                "#journalEntries"
            );

        if (!container) return;

        const entries =
            JSON.parse(
                localStorage.getItem(
                    "blackout-journal"
                ) || "[]"
            );

        container.innerHTML = "";

        entries.forEach(
            (entry,index) => {

                const article =
                    document.createElement(
                        "article"
                    );

                article.className =
                    "card dark-card";

                article.innerHTML = `

                    <div class="card-meta">
                        ${entry.date}
                    </div>

                    <h3>
                        ${escapeHTML(
                            entry.title
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            entry.text
                        )}
                    </p>

                    <button
                        class="btn red"
                        data-delete="${index}">
                        DELETE
                    </button>

                `;

                container.appendChild(
                    article
                );
            }
        );

        container
            .querySelectorAll(
                "[data-delete]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const entries =
                            JSON.parse(
                                localStorage.getItem(
                                    "blackout-journal"
                                ) || "[]"
                            );

                        entries.splice(
                            Number(
                                button.dataset.delete
                            ),
                            1
                        );

                        localStorage.setItem(
                            "blackout-journal",
                            JSON.stringify(
                                entries
                            )
                        );

                        renderJournal();
                    }
                );
            });
    }

    /* =====================================================
       SAFE TEXT
       ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replaceAll(
                "&",
                "&amp;"
            )
            .replaceAll(
                "<",
                "&lt;"
            )
            .replaceAll(
                ">",
                "&gt;"
            )
            .replaceAll(
                '"',
                "&quot;"
            )
            .replaceAll(
                "'",
                "&#039;"
            );
    }

});
