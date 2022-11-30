# Bulk Messenger Conversations Removal Tool
Bulk conversations delete automation tool for Meta's Messenger

## Prequisties
* Nodejs installed.

## Instructions 

* Run ``npm i``

* Replace ``.env`` file content ``EMAIL_HERE`` and ``PASSWORD_HERE`` with your own information.

* Lastly run `npx playwright test` to run the tool.

_NOTE: Tool automatically runs on headless mode, meaning you don't get the see the process. To prevent that from happening you can run playwright test with the config file._ 

To run playwright in headful mode : ``npx playwright test --config=src/config.ts``
