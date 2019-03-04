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

      },
      function error(err) {
        console.log(err)
      },
      function complete() {
        console.log("done")
        const images = firebase.storage().ref(`photos/${user}/${albumName}/${picture.name}`)
   
    //const image = images.child('image1');
    // if (currentPhotos.length === 0){
    //   console.log(0)
    //   images.getDownloadURL().then((url) => { photoAPI.updateForm(id, {photos: [url]})});

    // }
    // else if(currentPhotos.length === 1){
    //   console.log(1)
    //   images.getDownloadURL().then((url) => { photoAPI.updateForm(id, {photos: [currentPhotos, url]})});

    // }
    // else{
      console.log(2)
      images.getDownloadURL().then((url) => { photoAPI.updateForm(id, [...currentPhotos, url])});

    //}
      }

    )
  },

  getPhoto: function (photo, id, currentPhotos) {
    const images = firebase.storage().ref(photo)
    console.log(photo)
    //const image = images.child('image1');
    images.getDownloadURL().then((url) => { photoAPI.updateForm(id, {photos: [...currentPhotos, {photoName: url}]})});
  },

  deletePhoto: function (photo) {
    // Create a reference to the file to delete
    var desertRef = firebase.storage().ref('photos/'+photo);

    // Delete the file
    desertRef.delete().then(function () {
      // File deleted successfully
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });
  }


}

