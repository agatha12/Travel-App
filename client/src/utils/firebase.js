import * as firebase from 'firebase';
import "firebase/storage"
import React from 'react'
import photoAPI from './photoAPI'


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

  upload: function (picture, user, albumName, id, currentPhotos) {
    console.log(picture)
    // new Date().getTime()
    let storageRef = firebase.storage().ref(`photos/${user}/${albumName}/${picture.name}`)
    let task = storageRef.put(picture)

    task.on('state_changed',
      function progress(snapshot) {
        //document.getElementById("progressDiv").empty()
        document.getElementById("progressDiv").append("Your photo is uploading...")

      },
      function error(err) {
        alert(err)
        console.log(err)
      },
      function complete() {
        console.log("done")
        const images = firebase.storage().ref(`photos/${user}/${albumName}/${picture.name}`)
   
      console.log(2)
       
      images.getDownloadURL().then((url) => { 
        let newImage = {
          photoName: `photos/${user}/${albumName}/${picture.name}`,
          URL: url
        }
        photoAPI.updateForm(id, [...currentPhotos, newImage])});
      window.location.replace("/photoAlbum")
      }

    )
  },


  deletePhoto: function (photoName, currentPhotos, index, id) {

    let Ref = firebase.storage().ref(photoName);


    Ref.delete().then(function () {

      let newArray = currentPhotos
      currentPhotos.splice((index), 1)
      console.log(index)
      console.log(newArray)
      console.log(currentPhotos)
      photoAPI.updateForm(id, newArray);
      window.location.replace("/photoAlbum")

    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });
  }


}

