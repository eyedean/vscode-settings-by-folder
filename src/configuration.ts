import * as vscode from 'vscode';
import * as fs from 'fs';
import { parse } from 'jsonc-parser';

const SETTING_FILE = '.vscode/settings.json';

let touchedKeys = new Set<string>();

export function applyDefaultTheme() {
	let configs = vscode.workspace.getConfiguration();
	touchedKeys.forEach((key) => {
		let allValues = configs.inspect(key);
		let defaultValue = allValues ? allValues.defaultValue : '';
		configs.update(key, defaultValue, false);
	});
}

export async function applyThemeFromSettings (editor: vscode.TextEditor): Promise<void> {
	let path = editor.document.uri.fsPath;
	let parts = path.split("/");
	parts.pop(); // this file's name
	while (parts.length > 1) {
		let currentPath = parts.join('/') + '/' + SETTING_FILE;

		if (fs.existsSync(currentPath)) {
			let settingsObject = parse(fs.readFileSync(currentPath, 'utf-8'));
			let changesMade = false;
			for (let key in settingsObject) {
				if (settingsObject.hasOwnProperty(key)) {
					touchedKeys.add(key);
					await vscode.workspace.getConfiguration().update(key, settingsObject[key], false);
					changesMade = true;
				}
			}
			if (changesMade) {
				return;
			}
		}
		parts.pop();
	}

	// no setting file was found.
	return applyDefaultTheme();
}

export function applyCurrentEditorTheme() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
		return applyThemeFromSettings(editor);
    } else {
        return applyDefaultTheme();
    }
}
