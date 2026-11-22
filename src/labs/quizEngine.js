/* =========================================================================
   REUSABLE PER-CHAPTER ACTIVE-RECALL KNOWLEDGE CHECK QUIZ ENGINE
   ========================================================================= */
import { getState, recordQuizResult } from '../state.js';

export function renderQuizHTML(chId, questions) {
  const saved = getState().passedQuizzes[chId];
  const badge = saved && saved.passed
    ? `<span class="pill mint" id="quiz-pill-${chId}">✓ Passed (${saved.score}/${saved.total})</span>`
    : `<span class="pill violet" id="quiz-pill-${chId}">0 / ${questions.length} Answered</span>`;

  return `
    <section class="quiz-box no-print" id="quiz-box-${chId}">
      <div class="quiz-head">
        <span class="lab-title" style="color:var(--mint-deep);">Knowledge Check // Active Recall Quiz</span>
        ${badge}
      </div>
      <div class="quiz-body">
        ${questions.map((q, qi) => `
          <div class="quiz-q" data-qi="${qi}">
            <div class="quiz-q-title">${qi + 1}. ${q.q}</div>
            <div class="quiz-opts">
              ${q.opts.map((opt, oi) => `<button class="quiz-opt" data-qi="${qi}" data-oi="${oi}">${opt}</button>`).join('')}
            </div>
            <div class="quiz-fb" id="qfb-${chId}-${qi}" hidden></div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

export function initQuiz(chId, questions, onStateChange) {
  const box = document.getElementById(`quiz-box-${chId}`);
  if (!box) return;
  const answers = new Map();

  box.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = Number(btn.dataset.qi);
      const oi = Number(btn.dataset.oi);
      const q = questions[qi];
      const isRight = oi === q.ans;
      answers.set(qi, isRight);

      // Update buttons for this question
      const qWrap = box.querySelector(`.quiz-q[data-qi="${qi}"]`);
      qWrap.querySelectorAll('.quiz-opt').forEach(b => {
        const idx = Number(b.dataset.oi);
        b.classList.remove('correct', 'wrong');
        if (idx === q.ans) b.classList.add('correct');
        else if (idx === oi && !isRight) b.classList.add('wrong');
      });

      const fb = document.getElementById(`qfb-${chId}-${qi}`);
      fb.hidden = false;
      fb.innerHTML = isRight
        ? `<strong style="color:var(--mint-deep);">✓ Spot on!</strong> ${q.why}`
        : `<strong style="color:var(--magenta-deep);">✕ Not quite.</strong> ${q.why}`;

      // Score tally
      let score = 0;
      answers.forEach(v => { if (v) score++; });
      const pill = document.getElementById(`quiz-pill-${chId}`);
      if (answers.size === questions.length) {
        const res = recordQuizResult(chId, score, questions.length);
        pill.className = res.passed ? 'pill mint' : 'pill amber';
        pill.textContent = res.passed ? `✓ Passed (${score}/${questions.length})` : `Score: ${score}/${questions.length} — Retry`;
        if (onStateChange) onStateChange();
      } else {
        pill.textContent = `${answers.size} / ${questions.length} Answered`;
      }
    });
  });
}
