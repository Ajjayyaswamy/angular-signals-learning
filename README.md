<p align="center">
	<img src="icon.png" width="112" height="112" alt="Angular Signals Learning logo">
</p>

<h1 align="center">Angular Signals Learning</h1>

<p align="center">A hands-on, five-lesson introduction to Angular Signals, right inside VS Code.</p>

<p align="center">
	<a href="https://marketplace.visualstudio.com/items?itemName=Ajjayyaswamy.angular-signals-learning"><img alt="Visual Studio Marketplace version" src="https://img.shields.io/visual-studio-marketplace/v/Ajjayyaswamy.angular-signals-learning?label=Marketplace"></a>
	<a href="https://marketplace.visualstudio.com/items?itemName=Ajjayyaswamy.angular-signals-learning"><img alt="Visual Studio Marketplace installs" src="https://img.shields.io/visual-studio-marketplace/i/Ajjayyaswamy.angular-signals-learning?label=installs"></a>
	<a href="https://github.com/Ajjayyaswamy/angular-signals-learning/blob/main/LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-087e68.svg"></a>
</p>

## Learn Signals by Building Understanding

Move from your first writable signal to reactive values in Angular templates with concise explanations and focused TypeScript examples. No Angular project is required; the course runs in its own VS Code panel.

## Course Outline

| Step | Lesson | You'll learn | Time |
| --- | --- | --- | ---: |
| 01 | Your first signal | Create a signal and read its current value | 3 min |
| 02 | Set and update | Change a value with `set()` and `update()` | 3 min |
| 03 | Computed signals | Derive read-only values with `computed()` | 4 min |
| 04 | Effects | Connect signal changes to side effects with `effect()` | 4 min |
| 05 | Signals in templates | Read reactive state from an Angular template | 3 min |

## What You Get

- Five short, ordered lessons designed for learning in small steps
- TypeScript examples that show the Angular Signals APIs
- A small interactive counter to explore changing values
- Lesson navigation and completion tracking as you work
- A compact panel that adapts to narrow editor layouts

## Install and Start

1. In VS Code, open **Extensions** with **Ctrl+Shift+X** (Windows/Linux) or **Cmd+Shift+X** (macOS).
2. Search for **Angular Signals Learning** and select **Install**. You can also install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Ajjayyaswamy.angular-signals-learning).
3. After installation, open the Command Palette with **Ctrl+Shift+P** (Windows/Linux) or **Cmd+Shift+P** (macOS).
4. Type **Angular Signals: Start Learning** and press **Enter**. This opens the course in a new editor tab; installation alone does not open the course automatically.
5. Choose a lesson from the course outline. Use **Mark complete** to record a lesson and continue through the course.

If VS Code asks you to reload after installation or an update, select **Reload** first, then run the start command. To open the course again later, run the same command from the Command Palette.

## Run From Source

Requirements: VS Code 1.85 or later, Node.js, and npm.

```sh
git clone https://github.com/Ajjayyaswamy/angular-signals-learning.git
cd angular-signals-learning
npm install
npm run compile
```

Open the folder in VS Code, press **F5** to launch the Extension Development Host, then run **Angular Signals: Start Learning** from its Command Palette.

## Development

- `npm run compile` builds the extension.
- `npm run watch` rebuilds when source files change.
- Press **F5** to test in the Extension Development Host.

## Contributing

Issues and pull requests are welcome. Keep lessons concise, accurate to Angular's Signals APIs, and focused on one learning objective at a time.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
