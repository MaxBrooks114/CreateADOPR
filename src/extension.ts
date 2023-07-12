// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	  const commandId = 'CreateADOPR.CreatePullRequest';
		
		const disposable = vscode.commands.registerCommand(commandId, () => {
    const config = vscode.workspace.getConfiguration();
    const repositoryUrl = config.get('extension.repositoryUrl') as string;
    const sourceRepoName = config.get('extension.soureRepoName') as string;
    const soureRepoID = config.get('extension.sourceRepoID') as string;
    const targetRepoName = config.get('extension.targetRepoName') as string;
    const targetRepoID = config.get('extension.targetRepoID') as string;

    // Logic to create a pull request in Azure DevOps and open the link in the browser
    const azureDevOpsUrl = `${repositoryUrl}/pullrequestcreate?sourceRef=${sourceRepoName}&targetRef=${targetRepoName}&sourceRepositoryId=${soureRepoID}&targetRepositoryId=${targetRepoID}`;

    vscode.env.openExternal(vscode.Uri.parse(azureDevOpsUrl));
});

context.subscriptions.push(disposable);


}

// This method is called when your extension is deactivated
export function deactivate() {}
