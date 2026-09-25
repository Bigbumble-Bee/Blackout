/* =========================================
   BLACKOUT
   Main JavaScript
========================================= */


/* MOBILE MENU */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

  });

}


/* =========================================
   QUOTE MACHINE
========================================= */

const quotes = [

  {
    text: "The function of freedom is to free someone else.",
    author: "Toni Morrison"
  },

  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr."
  },

  {
    text: "Nobody's free until everybody's free.",
    author: "Fannie Lou Hamer"
  },

  {
    text: "The master's tools will never dismantle the master's house.",
    author: "Audre Lorde"
  },

  {
    text: "Not everything that is faced can be changed; but nothing can be changed until it is faced.",
    author: "James Baldwin"
  },

  {
    text: "Freedom is a constant struggle.",
    author: "Angela Davis"
  }

];


const quoteButton =
  document.querySelector("#quoteButton");

const quoteElement =
  document.querySelector("#quote");

const quoteAuthor =
  document.querySelector("#quoteAuthor");


if (
  quoteButton &&
  quoteElement &&
  quoteAuthor
) {

  quoteButton.addEventListener("click", () => {

    const random =
      quotes[
        Math.floor(
          Math.random() * quotes.length
        )
      ];

    quoteElement.textContent =
      `“${random.text}”`;

    quoteAuthor.textContent =
      `— ${random.author}`;

  });

}


/* =========================================
   MUSIC RANDOMIZER
========================================= */

const musicButton =
  document.querySelector("#musicQuoteButton");

const musicQuote =
  document.querySelector("#musicQuote");

const musicAuthor =
  document.querySelector("#musicQuoteAuthor");


const musicThoughts = [

  [
    "What does this song reveal about the time it was created?",
    "LISTEN CLOSER"
  ],

  [
    "Who is the artist speaking to?",
    "AUDIENCE"
  ],

  [
    "What part of the song feels political?",
    "POWER"
  ],

  [
    "What part of the song feels personal?",
    "IDENTITY"
  ],

  [
    "What story is the artist trying to preserve?",
    "MEMORY"
  ]

];


if (
  musicButton &&
  musicQuote &&
  musicAuthor
) {

  musicButton.addEventListener("click", () => {

    const item =
      musicThoughts[
        Math.floor(
          Math.random() * musicThoughts.length
        )
      ];

    musicQuote.textContent =
      `“${item[0]}”`;

    musicAuthor.textContent =
      `— ${item[1]}`;

  });

}


/* =========================================
   INTERACTIVE WALL
========================================= */

const wall =
  document.querySelector("#wall");

const wallForm =
  document.querySelector("#wallForm");

const wallInput =
  document.querySelector("#wallInput");

const wallColor =
  document.querySelector("#wallColor");


if (
  wall &&
  wallForm &&
  wallInput &&
  wallColor
) {

  wallForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const text =
      wallInput.value.trim();

    if (!text) {
      return;
    }


    const note =
      document.createElement("div");

    note.className =
      "wall-tag";

    note.textContent =
      text;


    const colors = {

      red: "#d88982",

      yellow: "#dfbd3d",

      blue: "#9bbdc8",

      green: "#9eb9a5",

      pink: "#d88b9b",

      white: "#f5eddd"

    };


    note.style.color =
      colors[wallColor.value];


    note.style.left =
      `${Math.random() * 75 + 5}%`;

    note.style.top =
      `${Math.random() * 70 + 5}%`;

    note.style.transform =
      `rotate(${Math.random() * 16 - 8}deg)`;


    wall.appendChild(note);

    makeDraggable(note);

    wallInput.value = "";

  });

}


/* =========================================
   DRAGGABLE WALL TAGS
========================================= */

function makeDraggable(element) {

  let dragging = false;

  let offsetX = 0;
  let offsetY = 0;


  element.addEventListener(
    "pointerdown",
    (event) => {

      dragging = true;

      element.setPointerCapture(
        event.pointerId
      );


      const rect =
        element.getBoundingClientRect();

      offsetX =
        event.clientX - rect.left;

      offsetY =
        event.clientY - rect.top;

    }
  );


  element.addEventListener(
    "pointermove",
    (event) => {

      if (!dragging) {
        return;
      }


      const wallRect =
        element.parentElement.getBoundingClientRect();


      const x =
        event.clientX -
        wallRect.left -
        offsetX;


      const y =
        event.clientY -
        wallRect.top -
        offsetY;


      element.style.left =
        `${(x / wallRect.width) * 100}%`;

      element.style.top =
        `${(y / wallRect.height) * 100}%`;

    }
  );


  element.addEventListener(
    "pointerup",
    () => {

      dragging = false;

    }
  );

}


document
  .querySelectorAll(".wall-tag")
  .forEach(makeDraggable);


/* =========================================
   SEARCH
========================================= */

const search =
  document.querySelector("#siteSearch");


if (search) {

  const searchableCards =
    document.querySelectorAll(
      "[data-search]"
    );


  search.addEventListener(
    "input",
    () => {

      const query =
        search.value
          .toLowerCase()
          .trim();


      searchableCards.forEach(card => {

        const text =
          card.dataset.search
            .toLowerCase();


        if (
          text.includes(query)
        ) {

          card.style.display = "";

        } else {

          card.style.display = "none";

        }

      });

    }
  );

}


/* =========================================
   ART FILTER
========================================= */

const filterButtons =
  document.querySelectorAll(
    "[data-filter]"
  );


filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const filter =
        button.dataset.filter;


      filterButtons.forEach(btn => {

        btn.classList.remove(
          "active"
        );

      });


      button.classList.add(
        "active"
      );


      const items =
        document.querySelectorAll(
          "[data-category]"
        );


      items.forEach(item => {

        if (
          filter === "all" ||
          item.dataset.category === filter
        ) {

          item.style.display = "";

        } else {

          item.style.display = "none";

        }

      });

    }
  );

});


/* =========================================
   JOURNAL
========================================= */

const journalForm =
  document.querySelector(
    "#journalForm"
  );

const journalEntries =
  document.querySelector(
    "#journalEntries"
  );


if (
  journalForm &&
  journalEntries
) {

  const storageKey =
    "blackoutJournal";


  let entries =
    JSON.parse(
      localStorage.getItem(
        storageKey
      ) || "[]"
    );


  function escapeHTML(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  function renderJournal() {

    journalEntries.innerHTML = "";


    entries.forEach(
      (entry, index) => {

        const article =
          document.createElement(
            "article"
          );


        article.className =
          "journal-entry";


        article.innerHTML = `

          <small>
            ${escapeHTML(entry.date)}
          </small>

          <h2>
            ${escapeHTML(entry.title)}
          </h2>

          <p>
            ${escapeHTML(entry.body)
              .replaceAll("\n", "<br>")}
          </p>

          <button
            class="small-button"
            data-delete="${index}"
          >
            REMOVE
          </button>

        `;


        journalEntries.appendChild(
          article
        );

      }
    );


    document
      .querySelectorAll(
        "[data-delete]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.delete
              );


            entries.splice(
              index,
              1
            );


            localStorage.setItem(
              storageKey,
              JSON.stringify(entries)
            );


            renderJournal();

          }
        );

      });

  }


  journalForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const formData =
        new FormData(
          journalForm
        );


      const title =
        formData.get("title");

      const body =
        formData.get("body");


      entries.unshift({

        title,
        body,

        date:
          new Date()
            .toLocaleDateString()

      });


      localStorage.setItem(
        storageKey,
        JSON.stringify(entries)
      );


      journalForm.reset();

      renderJournal();

    }
  );


  renderJournal();

}
