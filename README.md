# TorahTongue

The link to the prototype https://torahtongue.netlify.app/
Another link using GitHub pages https://supery613.github.io/TorahTongue_1.0/

TorahTongue is a language-learning website concept for studying historical Hebrew (Leshon Hakodesh), Talmudic Aramaic, and Yiddish. It is designed for elementary, secondary, and adult learners, with age-aware lesson presentation and options to explore pronunciation and community traditions.

> **Project status:** Early, dependency-free web prototype. The current version demonstrates the landing page, learner preferences, sample lesson cards, and a static sign-in/sign-up interface. It is not yet a complete curriculum or a substitute for a reviewed language-learning product.

## Learning tracks

- **Historical Hebrew / Leshon Hakodesh** — foundational reading, vocabulary, and grammar leading toward classical texts.
- **Talmudic Aramaic** — vocabulary and grammar for guided study of Talmudic passages.
- **Yiddish** — a shared learning path with regional and community pronunciation options.

## Prototype features

- Responsive, accessible landing page
- Learner age-band selector: elementary, secondary, and adult
- Tradition selector with a neutral/unspecified option
- Course cards for all three learning tracks
- Sample, illustrative lesson content
- Local profile preference saving in the browser
- Corner account icon with sign-in and sign-up dialog forms
- No account server, tracking, external dependency, or password storage

## Run locally

Clone or download the repository, then open `index.html` in a current browser. For local development, a simple static server can also be used:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
.
├── index.html       # App page and course content structure
├── styles.css      # Responsive visual design and account dialog styles
├── app.js          # Profile preferences, lessons, and prototype account UI
└── README.md       # Project overview and development notes
```

## Account prototype notice

The sign-in and sign-up forms demonstrate the interface only. A production account system requires server-side authentication, password hashing, verification, secure sessions, privacy controls, and appropriate safeguards for users who are minors.
