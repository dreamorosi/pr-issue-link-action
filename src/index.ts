import core from '@actions/core';
import github from '@actions/github';
// import type { Prettify } from './types';

// type s = Prettify<typeof github.context>;

// Get the PR author, number, body, status, and title from either input or context
// Check if the PR has been opened, edited, synchronize, or else - if else, skip
// Check if the PR body contains the magic string (aka the issue number(s))
// If it doesn't, leave a comment in the PR saying so
// If it does, for each issue number
// - Check if the issue exists and is open (if not, leave a comment in the PR saying so)
// - Check if the issue is assigned to the PR author (if not, leave a comment in the PR saying so)
// - Check if the issue is linked (aka it includes one of the closing words)
// - - If it does, continue to the next issue number
// - - If it doesn't, try to link the issue by adding a comment with the closing word + issue number (alternatively, do it by updating the PR body)
// End

try {
  // `some-input` input defined in action metadata file
  const someInput = core.getInput('some-input', {
    required: true,
    trimWhitespace: true,
  });
  core.info(`Hello ${someInput}!`);
  const time = new Date().toTimeString();
  core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  }
  core.setFailed('Unknown error');
}
