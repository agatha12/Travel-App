import React from 'react'
import firebase from "../../utils/firebase"

const Album = (props) => {
return (
    <div>
<h3>{props.name}</h3>
{props.photos.map((photo, index) => {
    return(
    <img key={index} alt="" src={photo}></img>
    )
})}


    </div>
)
}

export default Album