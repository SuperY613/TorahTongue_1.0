const lessons = {
  hebrew: {
    title: 'A first step in historical Hebrew',
    description: 'Notice how a word is built and read. This sample demonstrates the lesson format; instructional content needs expert review before release.',
    word: 'דָּבָר',
    transliteration: 'davar · “word / thing”',
    lang: 'he'
  },
  aramaic: {
    title: 'Meet a common Talmudic word',
    description: 'Explore how a short Aramaic word works in context. A full learning lesson should include its source, parsing, and reviewed explanation.',
    word: 'מַאי',
    transliteration: 'mai · “what?” (illustrative example; context matters)',
    lang: 'he'
  },
  yiddish: {
    title: 'Listen for a Yiddish word',
    description: 'Yiddish pronunciation can vary by region and community. A complete lesson would include recordings labeled with speaker and tradition details.',
    word: 'וואָרט',
    transliteration: 'vort · “word” (illustrative example)',
    lang: 'yi'
  }
};

const form = document.querySelector('#profile-form');
const ageSelect = document.querySelector('#age-band');
const traditionSelect = document.querySelector('#tradition');
const message = document.querySelector('#profile-message');
const summary = document.querySelector('#profile-summary');
const title = document.querySelector('#lesson-title');
const description = document.querySelector('#lesson-description');
const word = document.querySelector('#lesson-word');
const transliteration = document.querySelector('#lesson-transliteration');
const action = document.querySelector('#lesson-action');
const feedback = document.querySelector('#lesson-feedback');

const ageLabels = {
  elementary: 'Elementary learner',
  secondary: 'Secondary school learner',
  adult: 'Adult learner'
};
const traditionLabels = {
  unspecified: 'no tradition selected',
  litvish: 'Litvish / Lithuanian',
  hasidic: 'Hasidic (community varies)',
  polish: 'Polish / Galician-related',
  hungarian: 'Hungarian / Ungrish',
  ukrainian: 'Ukrainian regional varieties',
  southern: 'Southern Yiddish regional varieties',
  western: 'Western Yiddish',
  sephardic: 'Sephardic Hebrew',
  yemenite: 'Yemenite Hebrew',
  custom: 'another or mixed tradition'
};

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem('torahTonguePreferences') || '{}');
    if (ageLabels[saved.ageBand]) ageSelect.value = saved.ageBand;
    if (traditionLabels[saved.tradition]) traditionSelect.value = saved.tradition;
  } catch (error) {
    // If browser storage is unavailable or malformed, keep the default selections.
  }
  updateSummary();
}

function updateSummary() {
  const age = ageLabels[ageSelect.value] || 'Learner';
  const tradition = traditionLabels[traditionSelect.value] || 'no tradition selected';
  summary.textContent = `${age} · ${tradition}. Choose any course to preview a sample lesson.`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const preferences = { ageBand: ageSelect.value, tradition: traditionSelect.value };
  try {
    localStorage.setItem('torahTonguePreferences', JSON.stringify(preferences));
    message.textContent = 'Preferences saved in this browser. You can change them whenever you like.';
  } catch (error) {
    message.textContent = 'Preferences are active for this visit but could not be saved in this browser.';
  }
  updateSummary();
});

ageSelect.addEventListener('change', updateSummary);
traditionSelect.addEventListener('change', updateSummary);

document.querySelectorAll('.lesson-link').forEach((link) => {
  link.addEventListener('click', () => {
    const lesson = lessons[link.dataset.course];
    if (!lesson) return;
    title.textContent = lesson.title;
    description.textContent = lesson.description;
    word.textContent = lesson.word;
    word.lang = lesson.lang;
    transliteration.textContent = lesson.transliteration;
    feedback.textContent = '';
    action.textContent = 'Mark as explored';
  });
});

action.addEventListener('click', () => {
  feedback.textContent = 'Nice work exploring this sample. Full lesson progress will be available in a future version.';
  action.textContent = 'Explored';
});

loadPreferences();
