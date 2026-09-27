interface Lesson {
	title: string;
	label: string;
	readingTime: string;
	intro: string;
	concept: string;
	code: string;
	tryIt?: boolean;
}

const lessons: Lesson[] = [
	{
		title: 'A value that stays in sync',
		label: 'Your first signal',
		readingTime: '3 min',
		intro: 'A signal is a wrapper around a value that tells Angular when that value changes. Read it by calling it like a function.',
		concept: 'Use signal() for state that can change over time. The returned function is both the value accessor and Angular’s way to track who depends on that value.',
		code: "import { signal } from '@angular/core';\n\nconst count = signal(0);\nconsole.log(count()); // 0",
		tryIt: true
	},
	{
		title: 'Change state with intent',
		label: 'Set and update',
		readingTime: '3 min',
		intro: 'Writable signals have two clear ways to change state: set a known value, or update the current value with a function.',
		concept: 'update() receives the latest value, which makes it a good fit for counters and transformations. set() is useful when the next value is already known.',
		code: 'const count = signal(0);\n\ncount.set(10);\ncount.update(value => value + 1);\nconsole.log(count()); // 11',
		tryIt: true
	},
	{
		title: 'Derive, don’t duplicate',
		label: 'Computed signals',
		readingTime: '4 min',
		intro: 'A computed signal describes a value derived from other signals. Angular recalculates it when one of its dependencies changes.',
		concept: 'Computed signals are read-only and lazy. Keep derived values out of writable state so they cannot drift out of sync.',
		code: "import { computed, signal } from '@angular/core';\n\nconst price = signal(24);\nconst quantity = signal(3);\nconst total = computed(() => price() * quantity());\n\nconsole.log(total()); // 72"
	},
	{
		title: 'React to changes at the edge',
		label: 'Effects',
		readingTime: '4 min',
		intro: 'An effect runs when the signals it reads change. Use it to connect reactive state to an imperative API, such as logging or browser storage.',
		concept: 'Effects are for side effects, not for copying one signal into another. Prefer computed() when the goal is to derive a value.',
    code: "import { effect, signal } from '@angular/core';\n\nexport class ThemeComponent {\n  theme = signal('light');\n\n  constructor() {\n    effect(() => {\n      localStorage.setItem('theme', this.theme());\n    });\n  }\n}"
	},
	{
		title: 'Let the template subscribe',
		label: 'Signals in templates',
		readingTime: '3 min',
		intro: 'Call a signal from an Angular template to display its current value. Angular tracks that read and refreshes the view when it changes.',
		concept: 'In a component class, declare state with signal(). In a template, call the signal where you need its value, such as {{ count() }}.',
		code: "count = signal(0);\n\nincrement(): void {\n  this.count.update(value => value + 1);\n}\n\n// Template\n<button (click)=\"increment()\">\n  Count: {{ count() }}\n</button>"
	}
];

export function getWebviewContent(): string {
	const nonce = getNonce();
	const lessonData = JSON.stringify(lessons).replace(/</g, '\\u003c');

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'nonce-${nonce}'; script-src 'nonce-${nonce}';">
  <title>Angular Signals Learning</title>
  <style nonce="${nonce}">
    :root { color-scheme: light dark; --paper: #f5f6f0; --ink: #1b2926; --muted: #697873; --line: #dce2d9; --green: #087e68; --green-dark: #075e50; --lime: #c9ef79; --white: #fff; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--paper); color: var(--ink); font-family: "Segoe UI", sans-serif; }
    button { font: inherit; }
    .shell { min-height: 100vh; display: grid; grid-template-columns: 270px minmax(0, 1fr); }
    .rail { display: flex; flex-direction: column; padding: 28px 20px; background: #e8ede5; border-right: 1px solid var(--line); }
    .brand { display: flex; align-items: center; gap: 11px; margin: 0 0 38px; font-size: 14px; font-weight: 750; }
    .brand-mark { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; background: var(--green); color: var(--lime); font-family: Georgia, serif; font-size: 23px; }
    .eyebrow { margin: 0 0 12px; color: var(--muted); font-size: 10px; font-weight: 750; text-transform: uppercase; }
    .lesson-list { display: grid; gap: 6px; }
    .lesson-link { display: grid; grid-template-columns: 26px minmax(0, 1fr) 14px; align-items: center; gap: 9px; width: 100%; padding: 10px 9px; border: 0; border-radius: 7px; background: transparent; color: #51615b; text-align: left; cursor: pointer; }
    .lesson-link:hover { background: rgba(255,255,255,.62); color: var(--ink); }
    .lesson-link[aria-current="step"] { background: var(--white); color: var(--ink); box-shadow: 0 1px 3px #14201c12; }
    .lesson-number { display: grid; place-items: center; width: 24px; height: 24px; border: 1px solid #c6d0c7; border-radius: 50%; font-size: 11px; }
    .lesson-link.done .lesson-number { border-color: var(--green); background: var(--green); color: white; }
    .lesson-name { overflow: hidden; font-size: 12px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
    .check { color: var(--green); font-size: 13px; }
    .rail-bottom { margin-top: auto; padding: 15px 4px 0; border-top: 1px solid #d3dbd1; }
    .progress-copy { display: flex; justify-content: space-between; margin-bottom: 9px; color: var(--muted); font-size: 11px; }
    .progress-track { height: 5px; overflow: hidden; border-radius: 4px; background: #d1d9cf; }
    .progress-fill { width: 0; height: 100%; background: var(--green); transition: width .25s ease; }
    main { width: min(100%, 920px); margin: 0 auto; padding: 48px clamp(24px, 6vw, 82px) 56px; }
    .topline { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 58px; color: var(--muted); font-size: 12px; }
    .course-tag { display: flex; align-items: center; gap: 8px; }
    .live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); }
    .step-tag { padding: 7px 10px; border: 1px solid var(--line); border-radius: 20px; }
    .lesson-kicker { margin: 0 0 12px; color: var(--green); font-size: 12px; font-weight: 750; text-transform: uppercase; }
    h1 { max-width: 650px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 48px; font-weight: 500; line-height: 1.08; }
    .intro { max-width: 660px; margin: 20px 0 32px; color: #4d5b55; font-size: 16px; line-height: 1.75; }
    .learn-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(230px, .7fr); gap: 14px; align-items: stretch; }
    .section-label { margin: 0 0 11px; color: var(--muted); font-size: 10px; font-weight: 750; text-transform: uppercase; }
    .code-panel { min-width: 0; overflow: hidden; border-radius: 8px; background: #1b2926; color: #eff5ec; }
    .code-head { display: flex; justify-content: space-between; padding: 13px 16px; border-bottom: 1px solid #ffffff1c; color: #bdc9c2; font: 11px/1.4 "Cascadia Code", Consolas, monospace; }
    pre { min-height: 146px; margin: 0; padding: 18px 16px; overflow: auto; color: #dcedcc; font: 12px/1.8 "Cascadia Code", Consolas, monospace; white-space: pre-wrap; }
    .try-box { display: none; margin: 0 14px 14px; padding: 11px 12px; border: 1px solid #ffffff26; border-radius: 6px; color: #cad5cf; font-size: 11px; }
    .try-box.visible { display: block; }
    .try-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; }
    .try-controls { display: flex; gap: 5px; }
    .try-controls button { width: 27px; height: 27px; border: 1px solid #ffffff35; border-radius: 5px; background: #ffffff0b; color: white; cursor: pointer; }
    .try-controls button:hover { background: #ffffff24; }
    .concept { padding: 17px; border: 1px solid var(--line); border-radius: 8px; background: #fffefa; }
    .concept-icon { display: grid; place-items: center; width: 27px; height: 27px; margin-bottom: 19px; border-radius: 8px; background: #e9f2d9; color: var(--green-dark); font-size: 15px; }
    .concept p:last-child { margin: 0; color: #53615b; font-size: 13px; line-height: 1.7; }
    .footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 32px; padding-top: 18px; border-top: 1px solid var(--line); }
    .time { color: var(--muted); font-size: 12px; }
    .actions { display: flex; gap: 8px; }
    .button { min-height: 38px; padding: 0 13px; border: 1px solid var(--line); border-radius: 6px; background: transparent; color: var(--ink); font-size: 12px; font-weight: 700; cursor: pointer; }
    .button:hover:not(:disabled) { background: white; }
    .button:disabled { opacity: .4; cursor: default; }
    .button.primary { border-color: var(--green); background: var(--green); color: white; }
    .button.primary:hover:not(:disabled) { background: var(--green-dark); }
    .button.complete { border-color: #accd69; background: var(--lime); color: #273522; }
    @media (max-width: 720px) {
      .shell { grid-template-columns: 1fr; }
      .rail { padding: 14px 16px 12px; border-right: 0; border-bottom: 1px solid var(--line); }
      .brand { margin: 0 0 12px; }
      .eyebrow, .rail-bottom { display: none; }
      .lesson-list { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px; }
      .lesson-link { display: flex; flex: 0 0 auto; width: auto; padding: 5px; }
      .lesson-name, .check { display: none; }
      main { padding: 27px 20px 40px; }
      .topline { margin-bottom: 38px; }
      h1 { font-size: 36px; }
      .learn-grid { grid-template-columns: 1fr; }
      .concept { display: grid; grid-template-columns: 30px minmax(0, 1fr); column-gap: 9px; }
      .concept-icon { grid-row: span 2; margin: 0; }
      .concept .section-label { margin: 4px 0 6px; }
      .concept p:last-child { grid-column: 2; }
    }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; } }
  </style>
</head>
<body>
  <div class="shell">
    <aside class="rail">
      <div class="brand"><span class="brand-mark">S</span><span>Signal study</span></div>
      <p class="eyebrow">Course outline</p>
      <nav class="lesson-list" id="lesson-list" aria-label="Lessons"></nav>
      <div class="rail-bottom">
        <div class="progress-copy"><span>Your progress</span><span id="progress-label">0 / 5</span></div>
        <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
      </div>
    </aside>
    <main>
      <div class="topline"><span class="course-tag"><span class="live-dot"></span> Angular Signals · The essentials</span><span class="step-tag" id="step-tag">01 / 05</span></div>
      <p class="lesson-kicker" id="lesson-kicker"></p>
      <h1 id="title"></h1>
      <p class="intro" id="intro"></p>
      <div class="learn-grid">
        <section>
          <p class="section-label">The code</p>
          <div class="code-panel">
            <div class="code-head"><span>counter.component.ts</span><span>TypeScript</span></div>
            <pre><code id="code"></code></pre>
            <div class="try-box" id="try-box">
              <span>Try it · change the value</span>
              <div class="try-row"><span>count() <strong id="count-value">0</strong></span><span class="try-controls"><button id="subtract" type="button" aria-label="Decrease count">−</button><button id="add" type="button" aria-label="Increase count">+</button></span></div>
            </div>
          </div>
        </section>
        <aside class="concept">
          <div class="concept-icon" aria-hidden="true">↗</div>
          <p class="section-label">Keep in mind</p>
          <p id="concept"></p>
        </aside>
      </div>
      <div class="footer">
        <span class="time" id="reading-time"></span>
        <div class="actions"><button class="button" id="previous" type="button">← Previous</button><button class="button primary" id="next" type="button">Continue →</button></div>
      </div>
    </main>
  </div>
  <script nonce="${nonce}">
    const lessons = ${lessonData};
    const vscode = acquireVsCodeApi();
    const saved = vscode.getState() || {};
    let activeIndex = Math.min(saved.activeIndex || 0, lessons.length - 1);
    let completed = Array.isArray(saved.completed) ? saved.completed : [];
    let count = 0;

    const list = document.getElementById('lesson-list');
    const elements = {
      title: document.getElementById('title'),
      kicker: document.getElementById('lesson-kicker'),
      intro: document.getElementById('intro'),
      concept: document.getElementById('concept'),
      code: document.getElementById('code'),
      time: document.getElementById('reading-time'),
      step: document.getElementById('step-tag'),
      previous: document.getElementById('previous'),
      next: document.getElementById('next'),
      tryBox: document.getElementById('try-box'),
      count: document.getElementById('count-value')
    };

    function save() {
      vscode.setState({ activeIndex, completed });
    }

    function render() {
      const lesson = lessons[activeIndex];
      elements.title.textContent = lesson.title;
      elements.kicker.textContent = lesson.label;
      elements.intro.textContent = lesson.intro;
      elements.concept.textContent = lesson.concept;
      elements.code.textContent = lesson.code;
      elements.time.textContent = lesson.readingTime + ' read';
      elements.step.textContent = String(activeIndex + 1).padStart(2, '0') + ' / ' + String(lessons.length).padStart(2, '0');
      elements.previous.disabled = activeIndex === 0;
      elements.next.textContent = completed.includes(activeIndex) ? (activeIndex === lessons.length - 1 ? 'Course complete ✓' : 'Completed · Continue →') : 'Mark complete →';
      elements.next.classList.toggle('complete', completed.includes(activeIndex));
      elements.tryBox.classList.toggle('visible', Boolean(lesson.tryIt));
      elements.count.textContent = String(count);
      list.replaceChildren(...lessons.map((item, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lesson-link' + (completed.includes(index) ? ' done' : '');
        button.setAttribute('aria-current', index === activeIndex ? 'step' : 'false');
        const number = document.createElement('span');
        number.className = 'lesson-number';
        number.textContent = completed.includes(index) ? '✓' : String(index + 1);
        const name = document.createElement('span');
        name.className = 'lesson-name';
        name.textContent = item.label;
        const check = document.createElement('span');
        check.className = 'check';
        check.textContent = completed.includes(index) ? '✓' : '';
        button.append(number, name, check);
        button.addEventListener('click', () => { activeIndex = index; save(); render(); });
        return button;
      }));
      document.getElementById('progress-label').textContent = completed.length + ' / ' + lessons.length;
      document.getElementById('progress-fill').style.width = (completed.length / lessons.length * 100) + '%';
    }

    elements.previous.addEventListener('click', () => { activeIndex = Math.max(0, activeIndex - 1); save(); render(); });
    elements.next.addEventListener('click', () => {
      if (!completed.includes(activeIndex)) completed.push(activeIndex);
      if (activeIndex < lessons.length - 1) activeIndex += 1;
      save();
      render();
    });
    document.getElementById('add').addEventListener('click', () => { count += 1; render(); });
    document.getElementById('subtract').addEventListener('click', () => { count -= 1; render(); });
    render();
  </script>
</body>
</html>`;
}

function getNonce(): string {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	return Array.from({ length: 32 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}