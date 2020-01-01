import * as functions from 'firebase-functions';

const universal = require(`../dist/server`).app;
export const ssr = functions.https.onRequest(universal);
