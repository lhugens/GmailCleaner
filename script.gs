/**
 * Main entry point to clean Spam and Trash in Gmail.
 */
const cleanSpamAndEmptyTrash = () => {
  try {
    console.info('Starting to clean Spam and Trash folders.');
    
    // Step 1: Move Spam to Trash
    moveSpamToTrash_();
    
    // Step 2: Permanently Delete Trash Emails
    deleteAllTrashEmails_();
    
    console.info('Finished cleaning Spam and Trash.');
  } catch (error) {
    console.error(`Error during cleaning: ${error.message}`);
  }
};

/**
 * Moves all emails in Spam to Trash.
 */
const moveSpamToTrash_ = () => {
  const spamThreads = GmailApp.getSpamThreads();
  const threadCount = spamThreads.length;
  
  if (threadCount > 0) {
    spamThreads.forEach(thread => thread.moveToTrash());
    console.info(`Moved ${threadCount} threads from Spam to Trash.`);
  } else {
    console.info('No threads in Spam.');
  }
};

/**
 * Permanently deletes all emails from Trash using Gmail API.
 */
const deleteAllTrashEmails_ = () => {
  const threads = GmailApp.getTrashThreads();
  const threadCount = threads.length;
  
  if (threadCount > 0) {
    const messageIds = threads.flatMap(thread => 
      thread.getMessages().map(message => message.getId())
    );

    const batchSize = 100;  // Gmail API limits to 100 at a time
    for (let i = 0; i < messageIds.length; i += batchSize) {
      const batch = messageIds.slice(i, i + batchSize);
      Gmail.Users.Messages.batchDelete({ids: batch}, 'me');
    }
    console.info(`Permanently deleted ${messageIds.length} messages from Trash.`);
  } else {
    console.info('Trash is already empty.');
  }
};
