'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb()
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {
    return this.toIntent('HelloWorldIntent');
  },

  HelloWorldIntent() {
    this.ask("Hello World! What's your name?", 'Please tell me your name.');
  },

  MyNameIsIntent() {
    this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
  },
});

app.hook('before.platform.output', async (error, host, jovo) => {
  const request = jovo.$request;
  const session = jovo.$request['session']
  const manualRequestObject = request['request'];
  await db.collection("users").doc("user-id").collection("REQUEST_DATA").doc(request.getTimestamp()).set({
      timestamp: request.getTimestamp(),
      userID: request.getUserId(),
      intent: request.getIntentName() ? request.getIntentName() : manualRequestObject['type'],
      inputs: request.getInputs(),
      isNewSession: request.isNewSession(),
      sessionId: session['sessionId'],
      deviceName: request.getDeviceName(),
      locale: request.getLocale(),
      deviceHasAudioInterface: request.hasAudioInterface(),
      deviceHasScreenInterface: request.hasScreenInterface(),
      deviceHasVideoInterface: request.hasVideoInterface(),
      sessionAttributes: request.getSessionData() ? request.getSessionData() : "no session attributes",
      deviceID: request['context']["System"]['device']['deviceId'] ? request['context']["System"]['device']['deviceId'] : "no device ID found"
  })
  .then(function() {
      console.log("Request data successfully written to Firestore!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
});

module.exports = { app };
