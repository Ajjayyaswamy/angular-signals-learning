import * as vscode from 'vscode';
import { getWebviewContent } from './webview';

let currentPanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext): void {
	context.subscriptions.push(
		vscode.commands.registerCommand('angularSignalsLearning.start', () => {
			if (currentPanel) {
				currentPanel.reveal(vscode.ViewColumn.One);
				return;
			}

			currentPanel = vscode.window.createWebviewPanel(
				'angularSignalsLearning',
				'Angular Signals Learning',
				vscode.ViewColumn.One,
				{ enableScripts: true }
			);
			currentPanel.webview.html = getWebviewContent();
			currentPanel.onDidDispose(() => {
				currentPanel = undefined;
			}, undefined, context.subscriptions);
		}));
}

export function deactivate(): void {}
