# Settings By Folder

VS Code allows custom settings (e.g. themes) by User, by Workspace (e.g. window), by Workspace Folder (e.g. multiple repos in one workspace), **but not per sub-folder in a single repo.**

This extension solves that problem.

## Preview

![Preview](/images/preview.gif)

## How to use

1. Create a `.vscode` in the folder you want to customize, say `/backend`.
2. Create a `settings.json` in there.
3. Put your settings in there. e.g. for changing theme when any of the files in that folder (and subfolders) are open, you can add the following in `<projectRoot>/backend/.vscode/settings.json`
```json
{
	"workbench.colorTheme": "Red"
}
```
4. Now create another one in a different folder, e.g. `<projectRoot>/frontend/.vscode/settings.json` being:
```json
{
	"workbench.colorTheme": "Monokai Dimmed"
}
```

That's it!  Switch between the files in the above folders and enjoy. ;) 

## How does it work?

Everytime an editor is opened, this extension looks for `.vscode/settings.json` in the immediate parent folder of that file, and recursively goes up until it finds on (or give up).  

In case it finds one, it applies the settings to the [WorkplaceFolder Configuration](https://code.visualstudio.com/api/references/vscode-api#WorkspaceConfiguration). That's limited to the workspace that's open, and not globally for all VS Code workspaces and windows.

Otherwise, if it doesn't find any `.vscode/settings.json` all the way to the root, it resets all the attributes it has ever changed, to its default value.

## Keep it mind
Unless you want your configs to be shared with other people, you can add `**/.vscode/**` to your `.gitignore`. B-) 


## Credits

Special thanks to [@jsaulou](https://github.com/jsaulou) for making [Theme-By-Language](https://github.com/jsaulou/vscode-theme-by-language) extension which led into this extension!

**Cheers!**