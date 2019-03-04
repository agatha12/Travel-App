import React from 'react'
import firebase from "../../utils/firebase"
import photoAPI from '../../utils/photoAPI';

const Album = (props) => {
return (
    <div>
<h3>{props.name}</h3>
{props.photos.map((photo, index) => {
    //console.log(props.photos)
    return(
        <div id="PhotoDiv" key={index}>
    <img alt="" src={photo.URL}></img>
    <button id="deletePhoto" onClick={() => {firebase.deletePhoto(photo.photoName, props.photos, index, props.id)}}>Delete Photo</button>
    </div>
    )
})}
<button id="deleteAlbum" onClick={() => {photoAPI.deleteAlbum(props.id).then(window.location.replace("/photoAlbum"))}}>Delete Album</button>

    </div>
)
}

export default Album