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

// The static prototype provides the account forms only. Never store passwords in browser storage.
const authStyles = document.createElement('link');
authStyles.rel = 'stylesheet';
authStyles.href = 'auth.css';
document.head.append(authStyles);

const authDialogMarkup = `
  <button class="account-button" type="button" aria-label="Sign in or create an account" aria-haspopup="dialog">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
    <span>Sign in</span>
  </button>
  <dialog class="auth-dialog" aria-labelledby="auth-title">
    <div class="auth-heading">
      <div><p class="eyebrow">Your TorahTongue account</p><h2 id="auth-title">Welcome back</h2></div>
      <button class="auth-close" type="button" aria-label="Close sign-in dialog">×</button>
    </div>
    <div class="auth-tabs" aria-label="Account options">
      <button class="auth-tab is-active" type="button" data-auth-view="signin" aria-pressed="true">Sign in</button>
      <button class="auth-tab" type="button" data-auth-view="signup" aria-pressed="false">Sign up</button>
    </div>
    <form class="auth-form" id="signin-form" data-auth-panel="signin">
      <label for="signin-identifier">Username or email address</label>
      <input id="signin-identifier" name="identifier" type="text" autocomplete="username" placeholder="Username or email" required>
      <label for="signin-password">Password</label>
      <input id="signin-password" name="password" type="password" autocomplete="current-password" required>
      <button class="button button-dark" type="submit">Sign in</button>
    </form>
    <form class="auth-form" id="signup-form" data-auth-panel="signup" hidden>
      <label for="signup-name">Name</label>
      <input id="signup-name" name="name" type="text" autocomplete="name" required>
      <label for="signup-username">Username</label>
      <input id="signup-username" name="username" type="text" autocomplete="username" minlength="3" required>
      <label for="signup-birthdate">Date of birth</label>
      <input id="signup-birthdate" name="birthdate" type="date" autocomplete="bday" required>
      <label for="signup-language">Main language</label>
      <select id="signup-language" name="language" required>
        <option value="" selected disabled>Select a language</option>
        <option>English</option><option>Hebrew</option><option>Yiddish</option><option>Aramaic</option><option>Other</option>
      </select>
      <label for="signup-email">Email address</label>
      <input id="signup-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
      <label for="signup-password">Create a password</label>
      <input id="signup-password" name="password" type="password" autocomplete="new-password" minlength="8" aria-describedby="password-hint" required>
      <p class="password-hint" id="password-hint">Use at least 8 characters.</p>
      <button class="button button-dark" type="submit">Create account</button>
    </form>
    <p class="auth-message" role="status" aria-live="polite">This prototype has no account server. Forms are for demonstration only; don't enter a real password.</p>
  </dialog>`;

const authHost = document.createElement('div');
authHost.className = 'auth-host';
authHost.innerHTML = authDialogMarkup;
document.querySelector('.site-header').append(authHost);

const authDialog = authHost.querySelector('dialog');
const authMessage = authHost.querySelector('.auth-message');
const signupDate = authHost.querySelector('#signup-birthdate');
if (signupDate) signupDate.max = new Date().toISOString().slice(0, 10);

authHost.querySelector('.account-button').addEventListener('click', () => authDialog.showModal());
authHost.querySelector('.auth-close').addEventListener('click', () => authDialog.close());
authDialog.addEventListener('click', (event) => {
  if (event.target === authDialog) authDialog.close();
});

authHost.querySelectorAll('.auth-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const view = tab.dataset.authView;
    authHost.querySelectorAll('.auth-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    authHost.querySelectorAll('[data-auth-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.authPanel !== view;
    });
    authHost.querySelector('#auth-title').textContent = view === 'signup' ? 'Create your account' : 'Welcome back';
    authMessage.textContent = 'This prototype has no account server. Forms are for demonstration only; don’t enter a real password.';
  });
});

authHost.querySelectorAll('.auth-form').forEach((authForm) => {
  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    authMessage.textContent = 'The form is ready, but account creation and sign-in are not connected yet. A secure server is needed before accounts can work. No information was saved.';
    authForm.querySelectorAll('input[type="password"]').forEach((input) => { input.value = ''; });
  });
});
