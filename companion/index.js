import * as messaging from "messaging";
import { settingsStorage } from "settings";
import metra from './metra';

console.log("Companion Started");

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.close = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.onchange = (evt) => {
  console.log('Recieved new settings', evt);
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  // Update app if both stops are provided
  if (data.newValue.length > 1) {
   sendSettingsVal(data); 
  }
};

messaging.peerSocket.onmessage = (evt) => {
  console.log('Received message from App');
  const origin = evt.data.origin;
  const dest = evt.data.destination;
  const reversedRoute = metra('upw', dest, origin);
  const reversed = {
    key: 'stops',
    nextTrain: reversedRoute,
  };
  messaging.peerSocket.send(reversed);
}

// Restore any previously saved settings and send to the device
function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendSettingsVal(data);
    }
  }
}

// Send data to device using Messaging API
function sendSettingsVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    console.log('Sending NextStop data to app...');
    const info = JSON.parse(data.newValue);
    const or = info[0].name;
    const dst = info[1].name;
    const nextTrain = metra('upw', or, dst);
    const sendData = {
      key: data.key,
      nextTrain,
    };
    messaging.peerSocket.send(sendData);
  }
}
