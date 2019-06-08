# Settings By Folder

https://github.com/eyedean/vscode-settings-by-folder.git

Themes are great but sometimes some are better than others for a certain language.

This extension lets you select which theme to apply by language.

If you prefer, like me, to edit Markdown and AsciiDoc files using a dark theme but code using a light theme, or prefer the coloration of a theme for a specific language, this extension is made for you.

## Preview

![Preview](/images/preview.gif)

## How to use

1. Create a `.vscode` in the folder you want to customize.
2. Create a `settings.json` in there.
3. Put your settings in there. e.g. for changing theme when any of the files in that folder (and subfolders) are open, you can add the following in `<customFolder>/.vscode/settings.json`
```json
{
	"workbench.colorTheme": "Red"
}
```

## How does it work?

Everytime an editor is opened, this extension looks for `.vscode/settings.json` in the immediate parent folder of that file, and recursively goes up until it finds on (or give up).  

In case it finds one, it applies the settings to the [WorkplaceFolder Configuration](https://code.visualstudio.com/api/references/vscode-api#WorkspaceConfiguration). That's limited to the workspace that's open, and not globally for all VS Code workspaces and windows.

Otherwise, if it doesn't find any `.vscode/settings.json` all the way to the root, it resets all the attributes it has ever changed, to its default value.

## Keep it mind



## Credits

Special thanks to [@jsaulou](https://github.com/jsaulou) for making [Theme-By-Language](https://github.com/jsaulou/vscode-theme-by-language) extension which led into this extension!

**Enjoy!**