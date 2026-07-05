const totalCards = cards.length;
const ticketSize = 20;
const storeKey = "lecture03-cards-progress-v1";
const langKey = "lecture03-cards-lang";
const app = document.getElementById("app");

const copy = {
  ru: {
    title: "Лекция 3",
    subtitle: "Вероятность, статистика, проверка гипотез",
    stats: "Статистика",
    correct: "правильно",
    total: "всего",
    answers: "ответов",
    ticket: "Билет",
    final: "Полный тест",
    startTicket: "Начать билет",
    startFinal: "Начать полный тест",
    reset: "Сбросить прогресс",
    question: "Вопрос",
    of: "из",
    next: "Дальше",
    skip: "Пропустить",
    finish: "Завершить",
    right: "Верно",
    remember: "Нужно запомнить",
    resultTicket: "Результат билета",
    resultFinal: "Результат полного теста",
    cumulative: "Накопленный результат",
    newTicket: "Новый билет",
    topics: "Темы",
    locked: "Откроется после всех карточек",
    back: "Назад"
  },
  en: {
    title: "Lecture 3",
    subtitle: "Probability, statistics, hypothesis testing",
    stats: "Statistics",
    correct: "correct",
    total: "total",
    answers: "answers",
    ticket: "Ticket",
    final: "Full test",
    startTicket: "Start ticket",
    startFinal: "Start full test",
    reset: "Reset progress",
    question: "Question",
    of: "of",
    next: "Next",
    skip: "Skip",
    finish: "Finish",
    right: "Correct",
    remember: "Remember",
    resultTicket: "Ticket result",
    resultFinal: "Full test result",
    cumulative: "Cumulative result",
    newTicket: "New ticket",
    topics: "Topics",
    locked: "Unlocks after all cards",
    back: "Back"
  }
};

let uiLang = localStorage.getItem(langKey) === "en" ? "en" : "ru";
let progress = loadProgress();
let state = {
  screen: "home",
  deck: [],
  index: 0,
  answered: {},
  mode: "ticket"
};

function t(key) {
  return copy[uiLang][key] || copy.ru[key] || key;
}

function local(value) {
  if (value && typeof value === "object") return value[uiLang] || value.ru || value.en || "";
  return value || "";
}

function setLang(lang) {
  uiLang = lang === "en" ? "en" : "ru";
  localStorage.setItem(langKey, uiLang);
  render();
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storeKey)) || { mastered: {}, attempts: 0 };
  } catch {
    return { mastered: {}, attempts: 0 };
  }
}

function saveProgress() {
  localStorage.setItem(storeKey, JSON.stringify(progress));
}

function shuffle(items) {
  const copyItems = [...items];
  for (let i = copyItems.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyItems[i], copyItems[j]] = [copyItems[j], copyItems[i]];
  }
  return copyItems;
}

function masteredCount() {
  return Object.keys(progress.mastered).length;
}

function isFinalUnlocked() {
  return masteredCount() >= totalCards;
}

function buildTicket() {
  const mastered = new Set(Object.keys(progress.mastered).map(Number));
  const unmastered = shuffle(cards.filter(card => !mastered.has(card.id)));
  const masteredCards = shuffle(cards.filter(card => mastered.has(card.id)));
  return [...unmastered, ...masteredCards].slice(0, Math.min(ticketSize, totalCards));
}

function startTicket() {
  state = {
    screen: "quiz",
    mode: "ticket",
    deck: buildTicket(),
    index: 0,
    answered: {}
  };
  clearSessionChoices();
  render();
}

function startFinalTest() {
  if (!isFinalUnlocked()) return;
  state = {
    screen: "quiz",
    mode: "final",
    deck: shuffle(cards),
    index: 0,
    answered: {}
  };
  clearSessionChoices();
  render();
}

function clearSessionChoices() {
  cards.forEach(card => {
    delete card.sessionChoices;
  });
}

function clearProgress() {
  progress = { mastered: {}, attempts: 0 };
  saveProgress();
  render();
}

function goHome() {
  state.screen = "home";
  render();
}

function topbar(subtitle = t("subtitle")) {
  return `
    <div class="topbar">
      <div class="brand">
        <h1>${t("title")}</h1>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <div class="top-actions">
        <div class="lang-toggle" role="group" aria-label="Language">
          <button class="${uiLang === "ru" ? "active" : ""}" type="button" onclick="setLang('ru')">RU</button>
          <button class="${uiLang === "en" ? "active" : ""}" type="button" onclick="setLang('en')">EN</button>
        </div>
        ${state.screen === "home" ? "" : `<button class="icon-btn" type="button" onclick="goHome()" aria-label="${t("back")}">←</button>`}
      </div>
    </div>
  `;
}

function renderHome() {
  const learned = masteredCount();
  const unlocked = isFinalUnlocked();
  app.innerHTML = `
    ${topbar()}
    <section class="stats" aria-label="${t("stats")}">
      <div class="stat"><strong>${learned}</strong><span>${t("correct")}</span></div>
      <div class="stat"><strong>${totalCards}</strong><span>${t("total")}</span></div>
      <div class="stat"><strong>${progress.attempts || 0}</strong><span>${t("answers")}</span></div>
    </section>
    <section class="home-grid">
      <article class="mode-card">
        <h2>${t("ticket")}</h2>
        <button class="primary-btn" type="button" onclick="startTicket()">${t("startTicket")}</button>
      </article>
      <article class="mode-card">
        <h2>${t("final")}</h2>
        <p>${unlocked ? "" : t("locked")}</p>
        <button class="${unlocked ? "primary-btn" : "ghost-btn"}" type="button" ${unlocked ? "" : "disabled"} onclick="startFinalTest()">${t("startFinal")}</button>
      </article>
    </section>
    <section class="topic-panel">
      <h2>${t("topics")}</h2>
      <div class="topic-grid">${topicStats().map(topicChip).join("")}</div>
    </section>
    <div class="actions single">
      <button class="danger-btn" type="button" onclick="clearProgress()">${t("reset")}</button>
    </div>
  `;
}

function topicStats() {
  const grouped = new Map();
  cards.forEach(card => {
    if (!grouped.has(card.topic)) grouped.set(card.topic, { topic: card.topic, total: 0, done: 0 });
    const item = grouped.get(card.topic);
    item.total += 1;
    if (progress.mastered[card.id]) item.done += 1;
  });
  return [...grouped.values()];
}

function topicChip(item) {
  const pct = Math.round((item.done / item.total) * 100);
  return `
    <div class="topic-chip">
      <span>${escapeHtml(item.topic)}</span>
      <strong>${item.done}/${item.total}</strong>
      <div class="mini-line"><div style="width:${pct}%"></div></div>
    </div>
  `;
}

function renderQuiz() {
  if (state.index >= state.deck.length) {
    renderResult();
    return;
  }
  const card = state.deck[state.index];
  const answered = state.answered[card.id];
  const current = state.index + 1;
  const pct = Math.round((state.index / state.deck.length) * 100);
  app.innerHTML = `
    ${topbar(state.mode === "final" ? t("final") : t("ticket"))}
    <section class="toolbar">
      <div class="progress-wrap">
        <div class="progress-line"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-meta"><span>${t("question")} ${current} ${t("of")} ${state.deck.length}</span><span>${masteredCount()} ${t("of")} ${totalCards}</span></div>
      </div>
      <div class="number-grid">${state.deck.map((item, idx) => numberButton(item, idx)).join("")}</div>
    </section>
    <article class="study-card">
      <img class="visual" src="${card.visual}" alt="">
      <div class="study-main">
        <div class="tag-row"><span class="tag">${escapeHtml(card.topic)}</span><span class="tag">${t("subtitle")}</span></div>
        <h2 class="question">${formatInline(local(card.question))}</h2>
        <div class="answer-list">
          ${getChoices(card).map(choice => answerButton(card, choice, answered)).join("")}
        </div>
        ${answered ? reveal(card, answered) : ""}
        <div class="actions ${answered ? "" : "single"}">
          ${answered ? `<button class="ghost-btn" type="button" onclick="nextQuestion()">${t("next")}</button>` : `<button class="ghost-btn" type="button" onclick="skipQuestion()">${t("skip")}</button>`}
          ${answered ? `<button class="primary-btn" type="button" onclick="goHome()">${t("finish")}</button>` : ""}
        </div>
      </div>
    </article>
  `;
}

function getChoices(card) {
  if (!card.sessionChoices) {
    card.sessionChoices = shuffle(card.choices.map((choice, index) => ({ ...choice, index })));
  }
  return card.sessionChoices;
}

function numberButton(item, idx) {
  const answered = state.answered[item.id];
  const cls = idx === state.index ? "current" : answered ? (answered.correct ? "right" : "wrong") : "";
  return `<button class="num ${cls}" type="button" onclick="jumpTo(${idx})">${idx + 1}</button>`;
}

function answerButton(card, choice, answered) {
  let cls = "";
  if (answered) {
    if (choice.index === 0) cls = "correct";
    if (choice.index === answered.choiceIndex && !answered.correct) cls = "incorrect";
  }
  return `<button class="answer-btn ${cls}" type="button" ${answered ? "disabled" : ""} onclick="chooseAnswer(${card.id}, ${choice.index})">${formatInline(local(choice))}</button>`;
}

function reveal(card, answered) {
  const title = answered.correct ? t("right") : t("remember");
  return `
    <div class="reveal">
      <strong>${title}: ${formatInline(local(card.answer))}</strong>
      <p>${escapeHtml(local(card.explain))}</p>
    </div>
  `;
}

function chooseAnswer(id, choiceIndex) {
  const correct = choiceIndex === 0;
  state.answered[id] = { choiceIndex, correct };
  progress.attempts = (progress.attempts || 0) + 1;
  if (correct) {
    progress.mastered[id] = true;
  } else {
    delete progress.mastered[id];
  }
  saveProgress();
  render();
}

function nextQuestion() {
  state.index += 1;
  render();
}

function skipQuestion() {
  state.index = Math.min(state.index + 1, state.deck.length);
  render();
}

function jumpTo(index) {
  state.index = index;
  render();
}

function renderResult() {
  const results = Object.values(state.answered);
  const right = results.filter(item => item.correct).length;
  const total = state.deck.length;
  const wrongCards = state.deck.filter(card => state.answered[card.id] && !state.answered[card.id].correct);
  const unlocked = isFinalUnlocked();
  app.innerHTML = `
    ${topbar(state.mode === "final" ? t("resultFinal") : t("resultTicket"))}
    <article class="result-card mode-card">
      <h2>${right} ${t("of")} ${total}</h2>
      <p>${t("cumulative")}: ${masteredCount()} ${t("of")} ${totalCards}.</p>
      <div class="actions">
        <button class="primary-btn" type="button" onclick="startTicket()">${t("newTicket")}</button>
        <button class="ghost-btn" type="button" ${unlocked ? "" : "disabled"} onclick="startFinalTest()">${t("final")}</button>
      </div>
    </article>
    <section class="summary-list">
      ${wrongCards.map(card => `
        <div class="summary-item">
          <strong>${escapeHtml(local(card.question))}</strong>
          <span>${formatInline(local(card.answer))}</span>
        </div>
      `).join("")}
    </section>
  `;
}

function render() {
  if (state.screen === "home") renderHome();
  if (state.screen === "quiz") renderQuiz();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<span class="code">$1</span>');
}

render();
