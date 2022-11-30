# Bulk Messenger Conversations Removal Tool
Bulk conversations delete automation tool for Meta's Messenger

## Why?
I surfed the web looking for existing tools such as scripts or extensions to get the job done, but I was really surprised that I couldn't find any.

So I decided to make mine.

## Prequisties
* Nodejs installed (_In case you don't have it : https://nodejs.org/en/download/_).

## Instructions 

* Open a terminal in root directory.

* Run ``npm i``

* Replace ``.env`` file content ``EMAIL_HERE`` and ``PASSWORD_HERE`` with your own information.

* Lastly run `npx playwright test`.

_NOTE: Tool automatically runs on headless mode, meaning you don't get the see the process. To prevent that from happening you can run playwright test with the config file._ 

To run playwright in headful mode : ``npx playwright test --config=src/config.ts``
