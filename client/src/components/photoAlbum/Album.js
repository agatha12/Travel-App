import React from 'react'
import firebase from "../../utils/firebase"
import photoAPI from '../../utils/photoAPI';

const Album = (props) => {
return (
    <div>
<h3>{props.name}</h3>
<button id="deleteAlbum" onClick={() => {photoAPI.deleteAlbum(props.id).then( props.afterAlbumDelete())}}>Delete Album</button>

{props.photos.map((photo, index) => {

    return(
        <div id="PhotoDiv" key={index}>
    <img alt="" src={photo.URL}></img><br></br>
    <button id="deletePhoto" onClick={() => {firebase.deletePhoto(photo.photoName, props.photos, index, props.id)}}>Delete Photo</button>
    </div>
    )
})}

    </div>
)
}

export default Album