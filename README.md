# TorahTongue

TorahTongue is a language-learning website concept for studying historical Hebrew (Leshon Hakodesh), Talmudic Aramaic, and Yiddish. It is designed for elementary, secondary, and adult learners, with age-aware lesson presentation and options to explore pronunciation and community traditions.

> **Project status:** Early, dependency-free web prototype. The current version demonstrates the landing page, learner preferences, and sample lesson cards. It is not yet a complete curriculum or a substitute for a reviewed language-learning product.

## Learning tracks

- **Historical Hebrew / Leshon Hakodesh** — foundational reading, vocabulary, and grammar leading toward classical texts.
- **Talmudic Aramaic** — vocabulary and grammar for guided study of Talmudic passages.
- **Yiddish** — a shared learning path with regional and community pronunciation options. Planned options include Lithuanian/Litvish, Polish, Hungarian/Ungrish, Galician, Ukrainian, Southern, Western, and contemporary Haredi usage profiles.

Hebrew pronunciation and recitation options may include Ashkenazic, Sephardic, Yemenite, and other community traditions as reviewed content becomes available. Profiles are learning preferences, not claims that each label represents a single uniform pronunciation or a separate language. Some dialect and community labels overlap.

## Prototype features

- Responsive, accessible landing page
- Learner age-band selector: elementary, secondary, and adult
- Tradition selector with a neutral/unspecified option
- Course cards for all three learning tracks
- Sample, illustrative lesson content
- Local profile preference saving in the browser
- No account, server, tracking, or external dependency required

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
├── styles.css      # Responsive visual design and accessibility styles
├── app.js          # Profile preferences and interactive lesson controls
└── README.md       # Project overview and development notes
```

## Content and editorial principles

TorahTongue aims to:

- Respect the diversity of Jewish learning, pronunciation, and community customs.
- Distinguish language facts, textual interpretation, and community practice.
- Identify sources and the tradition represented by audio and examples.
- Have language and text-study material reviewed by qualified educators and speakers before presenting it as authoritative.
- Use public-domain or properly licensed texts, translations, and recordings.
- Make clear where traditions vary internally or overlap.

The sample lessons in this prototype are demonstrations only. Before publishing instructional content, verify wording, transliteration, grammar, sources, and recordings with qualified reviewers.

## Roadmap

1. Review the product scope with language educators and community advisors.
2. Define age-appropriate learning objectives and content review workflows.
3. Develop a source-attributed lesson and vocabulary data model.
4. Add reviewed audio, transcripts, quizzes, and spaced repetition.
5. Add secure accounts and progress sync only when needed, with child privacy and parental/educator controls designed from the start.
6. Expand tradition profiles based on reliable, reviewed recordings and clearly documented scope.

## Future architecture direction

The prototype is static by design. A production service could use a responsive web frontend, a documented API, PostgreSQL for structured curriculum and progress, and object storage for licensed media. Accounts, classroom features, analytics, and cloud sync should be introduced only with an appropriate privacy and security plan, especially for children.

## Contributing

For content contributions, include the source, intended age/proficiency level, language variety or community represented, and reviewer information. Avoid submitting copyrighted material unless you have permission to share it. Open an issue to discuss substantial feature or curriculum proposals.

## License

No license has been selected yet. Until one is added, the code and content remain under their default copyright; please ask the repository owner before reuse or redistribution.
