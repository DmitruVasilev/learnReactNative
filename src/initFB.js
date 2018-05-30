import firebase from 'firebase'

export const appName = "learnredu"

export const config = {
  apiKey: "AIzaSyBHzLilkavMAhoDqnclEnv4huG9G2o7YrU",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "523750069838"
}

firebase.initializeApp(config)