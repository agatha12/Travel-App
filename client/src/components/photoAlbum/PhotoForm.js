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
                    
                <input  type="submit" className="submit"></input>               
                <div id="progressDiv">
                <progress value="0" max="100" id="uploader">0%</progress>
                </div>
              
                
                 </form>



            </div>
        )
    }


export default PhotoForm;

