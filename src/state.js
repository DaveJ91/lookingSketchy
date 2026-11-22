/* =========================================================================
   PERSISTENT TEXTBOOK STATE (LOCALSTORAGE + JSON EXPORT/IMPORT)
   ========================================================================= */
const STORAGE_KEY = 'lcs_textbook_state_v2';

const DEFAULT_STATE = {
  version: 2,
  completedChapters: [],   // ['ch1', 'ch2', ...]
  passedQuizzes: {},       // { ch1: { score: 3, total: 3, passed: true } }
  bootcampDays: [],        // [0, 1, ...]
  gradChecks: [],          // [0, 1, ...]
  notes: {},               // { ch1: 'My reflections...' }
  favorites: [],           // ['draw:mug', 'steal:banner', ...]
  sketchFilter: true,      // subtle hand-drawn ink tooth on SVG shapes
  script: 'moderna'
};

let state = structuredClone(DEFAULT_STATE);

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = {
        ...structuredClone(DEFAULT_STATE),
        ...parsed,
        passedQuizzes: { ...(parsed.passedQuizzes || {}) },
        notes: { ...(parsed.notes || {}) }
      };
    } else {
      // Graceful migration from v1 keys if present
      const v1Ch = JSON.parse(localStorage.getItem('lcs_textbook_completed_chapters_v1') || '[]');
      const v1Boot = JSON.parse(localStorage.getItem('lcs_textbook_14day_bootcamp_v1') || '[]');
      if (v1Ch.length || v1Boot.length) {
        state.completedChapters = v1Ch;
        state.bootcampDays = v1Boot;
        saveState();
      }
    }
  } catch (e) {
    state = structuredClone(DEFAULT_STATE);
  }
  return state;
}

export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not persist textbook state:', e);
  }
}

export function getState() {
  return state;
}

export function toggleChapterComplete(chId) {
  if (state.completedChapters.includes(chId)) {
    state.completedChapters = state.completedChapters.filter(x => x !== chId);
  } else {
    state.completedChapters = [...state.completedChapters, chId];
  }
  saveState();
  return state.completedChapters.includes(chId);
}

export function recordQuizResult(chId, score, total) {
  const passed = score >= Math.ceil(total * 0.66);
  const prev = state.passedQuizzes[chId];
  state.passedQuizzes[chId] = {
    score: prev ? Math.max(prev.score, score) : score,
    total,
    passed: (prev && prev.passed) || passed
  };
  saveState();
  return state.passedQuizzes[chId];
}

export function toggleBootcampDay(dayIdx) {
  if (state.bootcampDays.includes(dayIdx)) {
    state.bootcampDays = state.bootcampDays.filter(x => x !== dayIdx);
  } else {
    state.bootcampDays = [...state.bootcampDays, dayIdx];
  }
  saveState();
  return state.bootcampDays;
}

export function clearBootcampDays() {
  state.bootcampDays = [];
  saveState();
}

export function toggleGradCheck(idx) {
  if (state.gradChecks.includes(idx)) {
    state.gradChecks = state.gradChecks.filter(x => x !== idx);
  } else {
    state.gradChecks = [...state.gradChecks, idx];
  }
  saveState();
  return state.gradChecks;
}

export function setChapterNote(chId, text) {
  state.notes[chId] = text;
  saveState();
}

export function setScriptPref(variant) {
  state.script = variant === 'trad' ? 'trad' : 'moderna';
  saveState();
}

export function toggleFavorite(key) {
  if (!Array.isArray(state.favorites)) state.favorites = [];
  if (state.favorites.includes(key)) {
    state.favorites = state.favorites.filter(x => x !== key);
  } else {
    state.favorites = [...state.favorites, key];
  }
  saveState();
  return state.favorites.includes(key);
}

export function isFavorite(key) {
  return Array.isArray(state.favorites) && state.favorites.includes(key);
}

export function setSketchFilter(enabled) {
  state.sketchFilter = Boolean(enabled);
  saveState();
}

export function exportStateJSON() {
  return JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2);
}

export function importStateJSON(jsonText) {
  const parsed = JSON.parse(jsonText);
  if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON structure');
  state = {
    ...structuredClone(DEFAULT_STATE),
    completedChapters: Array.isArray(parsed.completedChapters) ? parsed.completedChapters : [],
    passedQuizzes: parsed.passedQuizzes && typeof parsed.passedQuizzes === 'object' ? parsed.passedQuizzes : {},
    bootcampDays: Array.isArray(parsed.bootcampDays) ? parsed.bootcampDays : [],
    gradChecks: Array.isArray(parsed.gradChecks) ? parsed.gradChecks : [],
    notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
    favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
    sketchFilter: parsed.sketchFilter !== false,
    script: parsed.script === 'trad' ? 'trad' : 'moderna'
  };
  saveState();
  return state;
}

export function resetAllState() {
  state = structuredClone(DEFAULT_STATE);
  saveState();
  return state;
}
