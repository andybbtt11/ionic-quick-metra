import document from "document";
import * as messaging from "messaging";

import * as util from "./util";

console.log("App Started");

let nextTrainUi = document.getElementById('nextTrain');
let trainData = {}; 

let reverseBtn = document.getElementById('reverse');
reverseBtn.onactivate = (e) => {
  console.log('clicked');
  nextTrainUi.innerText = "Loading reverse route...";
  messaging.peerSocket.send(trainData);
}

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "stops" && evt.data.nextTrain) {
    const { nextTrain } = evt.data;
    const uiData =
          `${nextTrain.origin}:Departs at ${nextTrain.departure} Arrives in ${nextTrain.destination} at ${nextTrain.arrival}`;
    // Store train data for reversal
    trainData = nextTrain;
    // Set text on UI
    nextTrainUi.innerText = uiData;
  }
};

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.close = () => {
  console.log("App Socket Closed");
};
