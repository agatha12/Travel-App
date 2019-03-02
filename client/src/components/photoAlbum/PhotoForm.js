import React from "react";
import PropTypes from 'prop-types'
//import FileUploader from 'react-firebase-file-uploader'
import firebase from "../../utils/firebase"
import PreviewPicture from "./PreviewImage";





class PhotoAlbum extends React.Component {

    constructor(state) {
        super(state);
        this.state = {
            picture: null,
            pictureURL: null,
        }
    }


    // state = {
    //     image: '',
    //     imageURL: '',
    //     progress: 0
    // }

    // handleUploadStart = () => {
    //     this.setState({
    //         progress: 0
    //     })
    // }

    // handleUploadSUccess = filename => {

    //     this.setState({
    //         image: filename,
    //         progress: 100
    //     })
    //     firebase.upload(filename)
    // }

    displayPicture = event => {
        let reader = new FileReader();
        let file = event.target.files[0]
        console.log(file)
        //firebase.upload(file)
        reader.onloadend = () => {
            this.setState({
                picture: file,
                pictureURL: reader.result
            })
        }
        reader.readAsDataURL(file)
        // setTimeout(() => {console.log(this.state)}, 5000) 
    }

    addPic = picture => {
        picture.preventDefault()
        console.log(picture)
        firebase.upload(this.state.picture)
    }


    render() {
        //console.log(this.state)
        return (
            <div>
                <form onSubmit={this.addPic} className="form-group">
                    <label>Photo</label>
                    <input onChange={(event) => {
                        this.displayPicture(event)
                    }} type="file" className="form-control"></input>
                <input  type="submit" className="btn btn-primary btn-block"></input>               
                
                <PreviewPicture 
                pictureURL={this.state.pictureURL}/>
                
                 </form>
                
                
                
                {/* <FileUploader
accept="image/*"
name="image"
storageRef={firebase.storageRef}
onUploadStart={this.handleUploadStart}
onUploadSuccess={this.handleUploadSuccess}

/> */}

            </div>
        )
    }
}

PhotoAlbum.props = {
    userName: PropTypes.String
}

export default PhotoAlbum;

