# Create Pull Request in Azure DevOps Extension

The Create Pull Request in Azure DevOps extension allows you to quickly create a pull request in Azure DevOps directly from Visual Studio Code.

## Features

- Create a pull request in Azure DevOps for your current repository.
- Customize source and target branches and repositories for the pull request.
- Open the pull request creation link in your default browser.

## Prerequisites

Before using this extension, please ensure that you have the following:

- Visual Studio Code installed on your machine.
- An active Azure DevOps account with a repository set up.

## Installation

1. Launch Visual Studio Code.
2. Open the Extensions view by clicking on the square icon in the sidebar or selecting `View -> Extensions`.
3. Search for "Create Pull Request in Azure DevOps" in the Extensions Marketplace.
4. Click the "Install" button next to the extension with the same name.
5. Once installed, click the "Reload" button to activate the extension.

## Usage

1. Open the project or repository in Visual Studio Code for which you want to create a pull request in Azure DevOps.
2. Provide the following information in the configuration:
   - Azure DevOps Repository URL.
   - Source Repository Name.
   - Source Repository ID.
   - Target Repository Name.
   - Target Repository ID.
3. Open the Command Palette by pressing `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
4. Search for the command "Azure DevOps: Create Pull Request" and select it.
5. The extension will open the pull request creation link in your default browser, pre-filled with the provided information.

## Configuration

You can configure the settings for the extension by following these steps:

1. Open the User Settings or Workspace Settings in Visual Studio Code.
2. Search for "Create Pull Request in Azure DevOps" in the settings search bar.
3. Edit the configuration settings as needed:
   - `extension.repositoryUrl`: URL of your Azure DevOps repository.
   - `extension.sourceRepoName`: Name of the source repository.
   - `extension.sourceRepoID`: ID of the source repository.
   - `extension.targetRepoName`: Name of the target repository.
   - `extension.targetRepoID`: ID of the target repository.

## Feedback and Issues

If you encounter any issues, have suggestions, or would like to report a bug, please [create an issue](https://github.com/maxbrooks114/CreateADOPR/issues) in the GitHub repository.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/MaxBrooks114/CreateADOPR This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

All software is available as open source under the terms of the MIT License.

