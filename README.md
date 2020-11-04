# What to do
I want to connect Firebase node.js AdminSDK to Auth emulator.
However something failed.

# How to reproduce
1. clone the repo
2. run `firebase use:<your project id>` in a terminal window
3. run `firebase emulators:start` in the terminal 
4. open a new window, run `export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"` 
5. run `yarn start`

Therefore, you can see the error.
```
(node:92639) UnhandledPromiseRejectionWarning: Error: Credential implementation provided to initializeApp() via the "credential" property failed to fetch a valid Google OAuth2 access token with the following error: "Error fetching access token: Error while making request: getaddrinfo ENOTFOUND metadata.google.internal. Error code: ENOTFOUND".
```

Reference:
https://firebase.google.com/docs/emulator-suite/connect_auth#admin_sdks

ISSUE https://github.com/firebase/firebase-admin-node/issues/1077
