# Angular Signals Learning

Learn Angular Signals one idea at a time, right inside VS Code. This extension turns the essentials into five short lessons with focused explanations, TypeScript examples, and a small interactive counter.

## What You'll Learn

| Lesson | Topic | Approx. time |
| --- | --- | ---: |
| 1 | Create and read your first writable signal | 3 min |
| 2 | Change signal values with `set()` and `update()` | 3 min |
| 3 | Derive state with `computed()` | 4 min |
| 4 | Use `effect()` for side effects | 4 min |
| 5 | Read signals in Angular templates | 3 min |

## Features

- Short, step-by-step lessons with Angular-focused examples
- Interactive counter to try changing signal state
- Lesson navigation and completion tracking
- Progress saved when the webview is closed and reopened
- A responsive interface designed to work in a narrow editor pane

## Start Learning

1. Open the Command Palette with **Ctrl+Shift+P** (**Cmd+Shift+P** on macOS).
2. Run **Angular Signals: Start Learning**.
3. Choose a lesson from the course outline, then use **Mark complete** to track your progress.

## Run From Source

Requirements: VS Code 1.85 or later, Node.js, and npm.

```sh
git clone https://github.com/Ajjayyaswamy/angular-signals-learning.git
cd angular-signals-learning
npm install
npm run compile
```

Open the folder in VS Code, press **F5** to launch the Extension Development Host, and run **Angular Signals: Start Learning** from its Command Palette.

## Development

- `npm run compile` builds the extension TypeScript.
- `npm run watch` rebuilds when source files change.
- Press **F5** in VS Code to test in the Extension Development Host.

## Contributing

Issues and pull requests are welcome. Keep lessons concise, accurate to Angular's Signals APIs, and focused on one learning objective at a time.
