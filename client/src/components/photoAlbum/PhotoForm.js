import React from "react";
import PreviewPicture from "./PreviewImage"



const PhotoForm = (props) => {



        return (
            <div>
                <h3>Add a new photo</h3>
                <form onSubmit={props.addPic} className="form-group">
                    <label>Photo</label>
                    <input onChange={(event) => {
                        props.displayPicture(event)
                    }} type="file" className="form-control"></input>
                    <label>Album Name</label>
                    <input onChange={props.handleChange} type="text" name="albumName"></input>
                <input  type="submit" className="submit"></input>               
                <div id="progressDiv"></div>
                <PreviewPicture 
                pictureURL={props.pictureURL}/>
                <PreviewPicture 
                pictureURL={props.img}/>
                
                 </form>



            </div>
        )
    }


export default PhotoForm;

