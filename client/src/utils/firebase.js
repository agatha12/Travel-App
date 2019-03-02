import * as firebase from 'firebase';
import "firebase/storage"


var config = {
  apiKey: "AIzaSyA4AhVPBIoyLljkMj4cAo0hNkD2vpoKtMs",
  authDomain: "travel-app-10c33.firebaseapp.com",
  databaseURL: "https://travel-app-10c33.firebaseio.com",
  projectId: "travel-app-10c33",
  storageBucket: "travel-app-10c33.appspot.com",
  messagingSenderId: "78857878836"
};

firebase.initializeApp(config);

const auth = firebase.auth()


export default {

  mount: function (handleChange) {

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser.email)
        handleChange(firebaseUser.email)
      }
      else {
        console.log("you are logged out")
        handleChange("")

      }
    })


  },

  login: function (email, password) {
    console.log(email, password)
    auth.signInWithEmailAndPassword(email, password);


  },

  signup: function (email, password) {

    auth.createUserWithEmailAndPassword(email, password);

  },

  logout: function () {
    auth.signOut()
  },

  upload: function (picture) {
    console.log(picture.target)
    console.log(picture[0])
   // firebase.storage.ref('photos').child(filename).getDownloadURL()
    let storageRef = firebase.storage().ref(`photos/${new Date().getTime()}`)
    let task = storageRef.put(picture)
    
    task.on('state_changed',
    function progress(snapshot){

    },
    function error(err) {
      console.log(err)
    },
    function complete(){
      console.log("done")
    }
      
    )
  }
  // storageRef: function() {
  //   return(
  //     firebase.storage().ref('photos')
  //   )
  // }



}

