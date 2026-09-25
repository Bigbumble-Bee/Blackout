/* =========================================================
   BLACKOUT — INTERACTION ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       GLOBAL
    ----------------------------------------------------- */

    const page = document.body.dataset.page || "";

    const people = [
        {
            id: "baldwin",
            name: "James Baldwin",
            category: "Writer / Essayist",
            letter: "JB",
            imageName: "James Baldwin",
            bio:
                "An American writer and essayist whose work examined race, identity, sexuality, religion, belonging, and American society.",
            tags: ["literature", "race", "identity", "philosophy"],
            timeline: [
                ["1924", "Born in New York City."],
                ["1953", "Published Go Tell It on the Mountain."],
                ["1955", "Published Notes of a Native Son."],
                ["1963", "Published The Fire Next Time."],
                ["1987", "Died in France."]
            ]
        },

        {
            id: "davis",
            name: "Angela Davis",
            category: "Scholar / Author / Activist",
            letter: "AD",
            imageName: "Angela Davis",
            bio:
                "A scholar and author whose work has addressed prisons, race, gender, political movements, and social justice.",
            tags: ["prisons", "race", "gender", "philosophy"],
            timeline: [
                ["1944", "Born in Birmingham, Alabama."],
                ["1960s", "Became involved in civil rights and political organizing."],
                ["1970s", "Became a major figure in debates about prisons and political repression."],
                ["1981", "Published Women, Race & Class."],
                ["Today", "Continues writing and teaching."]
            ]
        },

        {
            id: "nin",
            name: "Nina Simone",
            category: "Musician / Composer",
            letter: "NS",
            imageName: "Nina Simone",
            bio:
                "A pianist, singer, and composer whose music crossed jazz, blues, classical, soul, and protest traditions.",
            tags: ["music", "jazz", "protest", "art"],
            timeline: [
                ["1933", "Born in North Carolina."],
                ["1950s", "Began recording professionally."],
                ["1960s", "Released music connected with the civil-rights era."],
                ["1970s", "Moved and continued performing internationally."],
                ["2003", "Died in France."]
            ]
        },

        {
            id: "kendrick",
            name: "Kendrick Lamar",
            category: "Rapper / Songwriter",
            letter: "KL",
            imageName: "Kendrick Lamar",
            bio:
                "A rapper and songwriter from Compton, California, known for concept-driven albums addressing identity, community, inequality, faith, and personal experience.",
            tags: ["hip-hop", "storytelling", "identity", "music"],
            timeline: [
                ["1987", "Born in Compton, California."],
                ["2012", "Released good kid, m.A.A.d city."],
                ["2015", "Released To Pimp a Butterfly."],
                ["2017", "Released DAMN."],
                ["2022", "Released Mr. Morale & the Big Steppers."]
            ]
        },

        {
            id: "joy",
            name: "Joy Harjo",
            category: "Poet / Musician / Writer",
            letter: "JH",
            imageName: "Joy Harjo",
            bio:
                "A Muscogee poet, musician, and writer whose work explores memory, Indigenous identity, history, place, and survival.",
            tags: ["poetry", "Indigenous", "music", "memory"],
            timeline: [
                ["1951", "Born in Tulsa, Oklahoma."],
                ["1970s", "Began publishing poetry."],
                ["1980s", "Published major poetry collections."],
                ["2019", "Became the first Native American U.S. Poet Laureate."],
                ["Today", "Continues writing and performing."]
            ]
        },

        {
            id: "cesar",
            name: "César Chávez",
            category: "Labor Organizer / Activist",
            letter: "CC",
            imageName: "Cesar Chavez",
            bio:
                "A labor organizer who worked with farm workers and helped build a major labor movement in the United States.",
            tags: ["labor", "Latino", "organizing", "history"],
            timeline: [
                ["1927", "Born in Arizona."],
                ["1950s", "Worked as a community organizer."],
                ["1960s", "Helped organize farm workers."],
                ["1970s", "Continued labor organizing and advocacy."],
                ["1993", "Died in Arizona."]
            ]
        },

        {
            id: "marley",
            name: "Bob Marley",
            category: "Musician / Songwriter",
            letter: "BM",
            imageName: "Bob Marley",
            bio:
                "A Jamaican musician and songwriter whose work helped bring reggae to a worldwide audience and frequently addressed spirituality, unity, freedom, and social conditions.",
            tags: ["reggae", "music", "Jamaica", "culture"],
            timeline: [
                ["1945", "Born in Jamaica."],
                ["1960s", "Recorded with The Wailers."],
                ["1970s", "Became an internationally recognized reggae artist."],
                ["1980", "Performed his final concert."],
                ["1981", "Died in Miami."]
            ]
        },

        {
            id: "frida",
            name: "Frida Kahlo",
            category: "Artist",
            letter: "FK",
            imageName: "Frida Kahlo",
            bio:
                "A Mexican painter known for self-portraits and work dealing with identity, the body, Mexican culture, relationships, and personal experience.",
            tags: ["art", "Mexico", "identity", "painting"],
            timeline: [
                ["1907", "Born in Coyoacán, Mexico."],
                ["1920s", "Began developing her painting practice."],
                ["1930s", "Exhibited internationally."],
                ["1940s", "Continued producing major paintings."],
                ["1954", "Died in Mexico City."]
            ]
        }
    ];

    const poems = [
        {
            title: "Concrete Flowers",
            author: "BLACKOUT Original",
            tags: ["city", "hope", "identity"],
            text:
`The sidewalk remembers
every shoe that crossed it.

Every laugh.
Every argument.
Every name scratched into brick.

Something still grows
where nobody planted anything.

Maybe that is the point.`
        },

        {
            title: "No Permission",
            author: "BLACKOUT Original",
            tags: ["voice", "freedom", "identity"],
            text:
`They told the wall
to stay quiet.

So the wall learned color.

They told the microphone
to lower its voice.

So the room learned rhythm.

Some things do not disappear
when you tell them
to disappear.`
        },

        {
            title: "Names",
            author: "BLACKOUT Original",
            tags: ["memory", "history", "family"],
            text:
`Write the names.

Not because the page
can hold everything.

Write them
because memory
needs somewhere to stand.`
        },

        {
            title: "Corner Store Philosophy",
            author: "BLACKOUT Original",
            tags: ["philosophy", "community", "city"],
            text:
`The old man said
every block has a philosophy.

You just have to listen.

A bus teaches patience.
A mural teaches memory.
A grandmother teaches time.

The city has been talking
the whole time.`
        }
    ];

    /* -----------------------------------------------------
       MOBILE NAVIGATION
    ----------------------------------------------------- */

    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }

    /* -----------------------------------------------------
       ACTIVE NAV
    ----------------------------------------------------- */

    const currentFile =
        location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".main-nav a").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentFile) {
            link.classList.add("active");
        }
    });

    /* -----------------------------------------------------
       MODAL SYSTEM
    ----------------------------------------------------- */

    function openModal(html) {
        let modal = document.getElementById("blackoutModal");

        if (!modal) {
            modal = document.createElement("div");
            modal.id = "blackoutModal";
            modal.className = "modal";

            modal.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close">X</button>
                    <div class="modal-body"></div>
                </div>
            `;

            document.body.appendChild(modal);

            modal.addEventListener("click", event => {
                if (
                    event.target === modal ||
                    event.target.classList.contains("modal-close")
                ) {
                    closeModal();
                }
            });

            document.addEventListener("keydown", event => {
                if (event.key === "Escape") {
                    closeModal();
                }
            });
        }

        modal.querySelector(".modal-body").innerHTML = html;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        const modal = document.getElementById("blackoutModal");

        if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    /* -----------------------------------------------------
       PEOPLE
    ----------------------------------------------------- */

    const peopleGrid = document.querySelector("#peopleGrid");

    if (peopleGrid) {
        renderPeople(people);

        const search = document.querySelector("#peopleSearch");

        if (search) {
            search.addEventListener("input", () => {
                const value = search.value.toLowerCase();

                const filtered = people.filter(person =>
                    `${person.name} ${person.category} ${person.tags.join(" ")}`
                        .toLowerCase()
                        .includes(value)
                );

                renderPeople(filtered);
            });
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
            const card = document.createElement("article");

            card.className = "person-card";

            card.innerHTML = `
                <div class="person-image">
                    <div class="person-initial">
                        ${person.letter}
                    </div>
                </div>

                <div class="person-info">
                    <h3>${person.name}</h3>
                    <p>${person.category}</p>
                </div>

                <span class="click-label">
                    OPEN PROFILE →
                </span>
            `;

            card.addEventListener("click", () => {
                openPerson(person);
            });

            peopleGrid.appendChild(card);
        });
    }

    async function openPerson(person) {

        openModal(`
            <div class="modal-layout">

                <div>
                    <div class="modal-image" id="personImageBox">
                        <div class="person-initial">
                            ${person.letter}
                        </div>
                    </div>
                </div>

                <div>
                    <span class="modal-label">
                        ${person.category}
                    </span>

                    <h2>${person.name}</h2>

                    <p>${person.bio}</p>

                    <div class="toolbar">
                        ${person.tags.map(tag =>
                            `<span class="btn dark">${tag}</span>`
                        ).join("")}
                    </div>

                    <h3>Timeline</h3>

                    <div class="timeline">
                        ${person.timeline.map(item => `
                            <div class="timeline-item">
                                <div class="timeline-year">
                                    ${item[0]}
                                </div>
                                <div>
                                    ${item[1]}
                                </div>
                            </div>
                        `).join("")}
                    </div>

                    <div class="notice">
                        Profile information is provided as a starting point for
                        further research. Use the resource section to dig deeper.
                    </div>
                </div>

            </div>
        `);

        /*
         * Wikipedia's public REST endpoint is used only to retrieve
         * a thumbnail for the profile.
         */
        try {
            const endpoint =
                "https://en.wikipedia.org/api/rest_v1/page/summary/" +
                encodeURIComponent(person.imageName);

            const response = await fetch(endpoint);

            if (!response.ok) return;

            const data = await response.json();

            if (data.thumbnail && data.thumbnail.source) {
                const box = document.getElementById("personImageBox");

                if (box) {
                    box.innerHTML = `
                        <img
                            src="${data.thumbnail.source}"
                            alt="${person.name}"
                        >
                    `;
                }
            }
        } catch (error) {
            console.log("Profile image unavailable.");
        }
    }

    /* -----------------------------------------------------
       PEOPLE TIMELINE FILTER
    ----------------------------------------------------- */

    const peopleTimeline = document.querySelector("#peopleTimeline");

    if (peopleTimeline) {

        people.forEach(person => {
            person.timeline.forEach(item => {

                const article = document.createElement("article");

                article.className = "timeline-item";

                article.dataset.person = person.id;

                article.innerHTML = `
                    <div class="timeline-year">
                        ${item[0]}
                    </div>

                    <strong>${person.name}</strong>

                    <p>${item[1]}</p>
                `;

                peopleTimeline.appendChild(article);
            });
        });

        const timelineFilter =
            document.querySelector("#timelineFilter");

        if (timelineFilter) {
            timelineFilter.addEventListener("change", () => {

                document
                    .querySelectorAll("#peopleTimeline .timeline-item")
                    .forEach(item => {

                        if (
                            !timelineFilter.value ||
                            item.dataset.person === timelineFilter.value
                        ) {
                            item.classList.remove("hidden");
                        } else {
                            item.classList.add("hidden");
                        }

                    });
            });
        }
    }

    /* -----------------------------------------------------
       POETRY
    ----------------------------------------------------- */

    const poetryWall = document.querySelector("#poetryWall");

    if (poetryWall) {

        renderPoems(poems);

        const poemSearch =
            document.querySelector("#poemSearch");

        if (poemSearch) {
            poemSearch.addEventListener("input", () => {

                const value =
                    poemSearch.value.toLowerCase();

                renderPoems(
                    poems.filter(poem =>
                        `${poem.title} ${poem.author} ${poem.tags.join(" ")}`
                            .toLowerCase()
                            .includes(value)
                    )
                );
            });
        }
    }

    function renderPoems(list) {

        if (!poetryWall) return;

        poetryWall.innerHTML = "";

        list.forEach((poem, index) => {

            const article = document.createElement("article");

            article.className = "poem-card";

            article.innerHTML = `
                <div class="card-meta">
                    ${poem.author}
                </div>

                <div class="poem-title">
                    ${poem.title}
                </div>

                <div class="poem-preview">
                    ${poem.text.split("\n").slice(0, 5).join("\n")}
                </div>

                <div class="card-meta">
                    ${poem.tags.join(" / ")}
                </div>
            `;

            article.addEventListener("click", () => {
                openPoem(poem);
            });

            poetryWall.appendChild(article);
        });
    }

    function openPoem(poem) {

        const favoriteKey =
            `blackout-poem-${poem.title}`;

        const saved =
            localStorage.getItem(favoriteKey) === "true";

        openModal(`
            <span class="modal-label">
                ${poem.author}
            </span>

            <h2>${poem.title}</h2>

            <div class="poem-preview"
                 style="font-size:2rem; max-width:800px;">
                ${poem.text}
            </div>

            <div class="toolbar">

                <button
                    class="btn yellow"
                    id="favoritePoem">
                    ${saved ? "★ SAVED" : "☆ SAVE POEM"}
                </button>

                <button
                    class="btn dark"
                    id="randomPrompt">
                    NEW PROMPT
                </button>

            </div>

            <div
                id="poemPrompt"
                class="notice">
                Write about something ordinary
                that secretly means everything.
            </div>
        `);

        const favorite =
            document.querySelector("#favoritePoem");

        if (favorite) {
            favorite.addEventListener("click", () => {

                const current =
                    localStorage.getItem(favoriteKey) === "true";

                localStorage.setItem(
                    favoriteKey,
                    String(!current)
                );

                favorite.textContent =
                    !current ? "★ SAVED" : "☆ SAVE POEM";
            });
        }

        const prompts = [
            "Write about a place that remembers you.",
            "Write a poem using five street sounds.",
            "Write about something people overlook.",
            "Write from the perspective of an old photograph.",
            "Write about a name and what it carries.",
            "Write about a wall that could talk.",
            "Write about a song without quoting its lyrics."
        ];

        const promptButton =
            document.querySelector("#randomPrompt");

        if (promptButton) {
            promptButton.addEventListener("click", () => {

                const prompt =
                    prompts[Math.floor(Math.random() * prompts.length)];

                document.querySelector("#poemPrompt").textContent =
                    prompt;
            });
        }
    }

    /* -----------------------------------------------------
       POETRY GENERATOR
    ----------------------------------------------------- */

    const poemGenerator =
        document.querySelector("#generatePoem");

    if (poemGenerator) {

        poemGenerator.addEventListener("click", () => {

            const lines = [
                "The city keeps a thousand secrets.",
                "Someone painted over the warning.",
                "A window stayed open.",
                "The sidewalk remembered every footstep.",
                "There was music three blocks away.",
                "Nobody asked the wall for permission.",
                "The night made room for another voice.",
                "A name survived the rain.",
                "The corner store became a classroom.",
                "Someone laughed like tomorrow was possible."
            ];

            const selected = [];

            for (let i = 0; i < 5; i++) {
                selected.push(
                    lines[Math.floor(Math.random() * lines.length)]
                );
            }

            const output =
                document.querySelector("#generatedPoem");

            if (output) {
                output.textContent =
                    selected.join("\n");
            }
        });
    }

    /* -----------------------------------------------------
       GRAFFITI WALL
    ----------------------------------------------------- */

    const graffitiWall =
        document.querySelector("#graffitiWall");

    if (graffitiWall) {

        const defaultTags = [
            ["MALIK", 10, 15, -5, "#e7c84b"],
            ["VON", 70, 20, 7, "#d94a3a"],
            ["DA'VAUN", 25, 65, -8, "#347ca6"],
            ["LEAK", 72, 70, 4, "#d65b8a"],
            ["BLACKOUT", 40, 40, -3, "#718d52"]
        ];

        defaultTags.forEach(tag => {
            createGraffitiTag(...tag);
        });

        const addButton =
            document.querySelector("#addGraffiti");

        if (addButton) {
            addButton.addEventListener("click", () => {

                const input =
                    document.querySelector("#graffitiInput");

                if (!input || !input.value.trim()) return;

                createGraffitiTag(
                    input.value.trim(),
                    Math.random() * 75 + 5,
                    Math.random() * 75 + 5,
                    Math.random() * 18 - 9,
                    randomGraffitiColor()
                );

                input.value = "";
            });
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

        tag.className = "graffiti-tag";

        tag.textContent = text;

        tag.style.left = `${left}%`;
        tag.style.top = `${top}%`;
        tag.style.transform =
            `rotate(${rotation}deg)`;
        tag.style.color = color;

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
            Math.floor(Math.random() * colors.length)
        ];
    }

    function makeDraggable(element) {

        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;

        element.addEventListener("pointerdown", event => {

            dragging = true;

            const rect =
                element.getBoundingClientRect();

            offsetX =
                event.clientX - rect.left;

            offsetY =
                event.clientY - rect.top;

            element.setPointerCapture(event.pointerId);
        });

        element.addEventListener("pointermove", event => {

            if (!dragging) return;

            const parent =
                element.parentElement.getBoundingClientRect();

            let x =
                ((event.clientX - parent.left - offsetX)
                    / parent.width) * 100;

            let y =
                ((event.clientY - parent.top - offsetY)
                    / parent.height) * 100;

            x = Math.max(0, Math.min(90, x));
            y = Math.max(0, Math.min(90, y));

            element.style.left = `${x}%`;
            element.style.top = `${y}%`;
        });

        element.addEventListener("pointerup", () => {
            dragging = false;
        });
    }

    /* -----------------------------------------------------
       SKETCHBOOK
    ----------------------------------------------------- */

    const canvas =
        document.querySelector("#sketchCanvas");

    if (canvas) {
        initializeSketchbook(canvas);
    }

    function initializeSketchbook(canvas) {

        const ctx =
            canvas.getContext("2d");

        const wrapper =
            canvas.parentElement;

        function resizeCanvas() {

            const oldImage =
                canvas.width && canvas.height
                    ? ctx.getImageData(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    )
                    : null;

            const rect =
                canvas.getBoundingClientRect();

            canvas.width = rect.width;
            canvas.height = rect.height;

            ctx.fillStyle = "#ebe2cf";
            ctx.fillRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            if (oldImage) {
                ctx.putImageData(oldImage, 0, 0);
            }
        }

        resizeCanvas();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        let drawing = false;
        let color = "#111111";
        let size = 8;
        let eraser = false;

        const undoStack = [];
        const redoStack = [];

        function saveState() {

            undoStack.push(
                ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                )
            );

            if (undoStack.length > 30) {
                undoStack.shift();
            }

            redoStack.length = 0;
        }

        function getPosition(event) {

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

        canvas.addEventListener(
            "pointerdown",
            event => {

                saveState();

                drawing = true;

                canvas.setPointerCapture(
                    event.pointerId
                );

                const pos =
                    getPosition(event);

                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
            }
        );

        canvas.addEventListener(
            "pointermove",
            event => {

                if (!drawing) return;

                const pos =
                    getPosition(event);

                ctx.lineWidth = size;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";

                if (eraser) {
                    ctx.strokeStyle = "#ebe2cf";
                } else {
                    ctx.strokeStyle = color;
                }

                ctx.lineTo(pos.x, pos.y);
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

        canvas.addEventListener(
            "pointerleave",
            () => {
                drawing = false;
            }
        );

        document
            .querySelectorAll(".color-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(".color-btn")
                            .forEach(
                                b => b.classList.remove("active")
                            );

                        button.classList.add("active");

                        color =
                            button.dataset.color;

                        eraser = false;
                    }
                );
            });

        const brushSize =
            document.querySelector("#brushSize");

        if (brushSize) {
            brushSize.addEventListener(
                "input",
                () => {
                    size =
                        Number(brushSize.value);
                }
            );
        }

        const eraserButton =
            document.querySelector("#eraser");

        if (eraserButton) {
            eraserButton.addEventListener(
                "click",
                () => {
                    eraser = !eraser;
                    eraserButton.textContent =
                        eraser
                            ? "ERASER ON"
                            : "ERASER";
                }
            );
        }

        const undoButton =
            document.querySelector("#undo");

        if (undoButton) {
            undoButton.addEventListener(
                "click",
                () => {

                    if (!undoStack.length) return;

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

        const redoButton =
            document.querySelector("#redo");

        if (redoButton) {
            redoButton.addEventListener(
                "click",
                () => {

                    if (!redoStack.length) return;

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

        const clearButton =
            document.querySelector("#clearCanvas");

        if (clearButton) {
            clearButton.addEventListener(
                "click",
                () => {

                    saveState();

                    ctx.fillStyle = "#ebe2cf";

                    ctx.fillRect(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                }
            );
        }

        const saveButton =
            document.querySelector("#saveSketch");

        if (saveButton) {
            saveButton.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        "blackout-sketch",
                        canvas.toDataURL()
                    );

                    saveButton.textContent =
                        "SAVED ✓";

                    setTimeout(() => {
                        saveButton.textContent =
                            "SAVE SKETCH";
                    }, 1500);
                }
            );
        }

        const loadButton =
            document.querySelector("#loadSketch");

        if (loadButton) {
            loadButton.addEventListener(
                "click",
                () => {

                    const saved =
                        localStorage.getItem(
                            "blackout-sketch"
                        );

                    if (!saved) return;

                    const image =
                        new Image();

                    image.onload = () => {

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

                    image.src = saved;
                }
            );
        }

        const downloadButton =
            document.querySelector("#downloadSketch");

        if (downloadButton) {
            downloadButton.addEventListener(
                "click",
                () => {

                    const link =
                        document.createElement("a");

                    link.download =
                        "blackout-sketch.png";

                    link.href =
                        canvas.toDataURL("image/png");

                    link.click();
                }
            );
        }
    }

    /* -----------------------------------------------------
       RANDOM QUOTE / TEXT
    ----------------------------------------------------- */

    const randomText =
        document.querySelector("#randomText");

    if (randomText) {

        const messages = [
            "Make something worth remembering.",
            "Culture is memory with a pulse.",
            "Question what you were told.",
            "The wall can be a page.",
            "Art can document what statistics miss.",
            "Listen before you speak.",
            "Archive the ordinary.",
            "Make room for another voice."
        ];

        randomText.addEventListener(
            "click",
            () => {

                const output =
                    document.querySelector("#randomOutput");

                if (!output) return;

                output.textContent =
                    messages[
                        Math.floor(
                            Math.random() *
                            messages.length
                        )
                    ];
            }
        );
    }

    /* -----------------------------------------------------
       JOURNAL LOCAL STORAGE
    ----------------------------------------------------- */

    const journalForm =
        document.querySelector("#journalForm");

    if (journalForm) {

        renderJournal();

        journalForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const title =
                    document.querySelector("#journalTitle")
                        .value.trim();

                const text =
                    document.querySelector("#journalText")
                        .value.trim();

                if (!text) return;

                const entries =
                    JSON.parse(
                        localStorage.getItem(
                            "blackout-journal"
                        ) || "[]"
                    );

                entries.unshift({
                    title:
                        title || "Untitled",
                    text,
                    date:
                        new Date().toLocaleDateString()
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
            document.querySelector("#journalEntries");

        if (!container) return;

        const entries =
            JSON.parse(
                localStorage.getItem(
                    "blackout-journal"
                ) || "[]"
            );

        container.innerHTML = "";

        entries.forEach((entry, index) => {

            const article =
                document.createElement("article");

            article.className =
                "card dark-card";

            article.innerHTML = `
                <div class="card-meta">
                    ${entry.date}
                </div>

                <h3>${escapeHTML(entry.title)}</h3>

                <p>
                    ${escapeHTML(entry.text)}
                </p>

                <button
                    class="btn red"
                    data-delete="${index}">
                    DELETE
                </button>
            `;

            container.appendChild(article);
        });

        container
            .querySelectorAll("[data-delete]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.delete
                            );

                        entries.splice(index, 1);

                        localStorage.setItem(
                            "blackout-journal",
                            JSON.stringify(entries)
                        );

                        renderJournal();
                    }
                );
            });
    }

    function escapeHTML(value) {

        return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

});
