import React from 'react'
import firebase from "../../utils/firebase"
import photoAPI from '../../utils/photoAPI';

const Album = (props) => {
return (
    <div className="photo">
<h3>{props.name}</h3>


{props.photos.map((photo, index) => {

    return(
        <div className="PhotoDiv" key={index}>
    <img className="userPhoto" alt="" src={photo.URL}></img><br></br>
    <button id="deletePhoto" onClick={() => {firebase.deletePhoto(photo.photoName, props.photos, index, props.id)}}>Delete Photo</button>
    </div>
    )
})}

    <h4>Delete this album</h4>
    <button id="deleteAlbum" onClick={() => {photoAPI.deleteAlbum(props.id).then( props.afterAlbumDelete())}}>Delete Album</button>

    </div>
)
}

export default Album