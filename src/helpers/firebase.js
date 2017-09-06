import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD7Gl8MSnXR8eYw1Az6f1E-PdhpddPBsbg",
  authDomain: "hwyd-3d2d0.firebaseapp.com",
  databaseURL: "https://hwyd-3d2d0.firebaseio.com",
  projectId: "hwyd-3d2d0",
  storageBucket: "hwyd-3d2d0.appspot.com",
  messagingSenderId: "29725506847"
}

firebase.initializeApp(config)

export const provider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()

export default firebase
