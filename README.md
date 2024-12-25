# Gmail Cleaner - Automated Spam and Trash Management

This Google Script automates the process of moving all spam emails to the trash and permanently deleting all emails in the trash bin.

## Prerequisites

- A Google account with access to Google Cloud Console and Google Apps Script.
- Basic familiarity with Google Cloud Console and Apps Script.

## Setup Instructions

Follow these steps to set up Gmail Cleaner:

### 1. Create a Google Cloud Project

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Click on **Select a Project** and then **New Project** to create a new project.

### 2. Enable the Gmail API

- In the left sidebar, navigate to **APIs & Services > Library**.
- Search for **Gmail API** and click **Enable** to add the Gmail API to your project.

### 3. Add the Gmail API to Google Apps Script

- Open [Google Apps Script](https://script.google.com/) and create a new project.
- In the **Services** section on the left panel, click the **+ Add a Service** button.
- Select **Gmail API** from the list and click **Add**.

### 4. Paste the Script Code

- Copy the code from the `script.gs` file and paste it into the Google Apps Script IDE.

### 5. Configure and Run the Script

- In the top dropdown menu of the IDE, select the `cleanSpamAndEmptyTrash` function.
- Click the **Run** button to execute the script.

### 6. Grant Necessary Permissions

- A prompt will appear asking you to sign in to your Gmail account and grant the necessary permissions for the script to run.

### 7. Set Up a Trigger for Automated Execution

- Click on the **Triggers** icon (clock symbol) in the Apps Script IDE.
- Add a new trigger to run the `cleanSpamAndEmptyTrash` function at a regular interval (e.g., daily or weekly).

## Conclusion

Your Gmail Cleaner script is now set up and will automatically clean up spam and trash in your Gmail account based on the configured schedule.

