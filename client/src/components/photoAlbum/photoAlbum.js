import React from "react";
import PropTypes from 'prop-types'
import photoAPI from '../../utils/photoAPI'
import Album from './Album'
import PhotoForm from './PhotoForm'
import firebase from "../../utils/firebase"
import "./style.css"
import PreviewPicture from "./PreviewImage"





class PhotoAlbum extends React.Component {

  constructor(state) {
    super(state);
    this.state = {
      albumName: "",
      userAlbums: [],
      index: null,
      picture: null,
      pictureURL: null
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = () => {

    photoAPI.getAlbums(this.props.userName).then(res => {

      this.setState({
        userAlbums: res.data,
        index: this.props.index
      })
    })

  }

  
  afterAlbumDelete = () => {

    photoAPI.getAlbums(this.props.userName).then(res => {


      this.setState({
        userAlbums: res.data,
        index: null
      })
    })

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };
  displayPicture = event => {
    let reader = new FileReader();
    let file = event.target.files[0]

    reader.onloadend = () => {

      let url = reader.result

        this.setState({
            picture: file,
            pictureURL: url       })
    }
    reader.readAsDataURL(file)
}

  addPic = picture => {
    picture.preventDefault()
    if (this.state.picture.type === "image/png" || this.state.picture.type === "image/jpeg"){

    let index = this.state.index
    let id = this.state.userAlbums[index]._id
    let currentPhotos = this.state.userAlbums[index].photos
    let albumName = this.state.userAlbums[index].albumName
    firebase.upload(this.state.picture, this.props.userName, albumName, id, currentPhotos)
    }
    else {
      alert("file must be an image")
    }

  }


  createAlbum = event => {
    event.preventDefault()
    let album = {
      albumName: this.state.albumName,
      photos: [],
      userName: this.props.userName
    }

    photoAPI.createAlbum(
      album
    ).then(res => {
      window.location.replace("/photoAlbum")
    })
      .catch(err => console.log(err));


  }

  click = index => {

    this.props.updateIndex(index)
    this.setState({
      index: index
    })
  }

  displayAlbum = () => {
    if (this.state.index !== null) {
      let index = this.state.index
      let name = this.state.userAlbums[index].albumName
      let photos = this.state.userAlbums[index].photos
      let id = this.state.userAlbums[index]._id

      return (
        <div>
          <Album
            name={name}
            photos={photos}
            id={id}
            afterAlbumDelete={this.afterAlbumDelete}
          />
          <PhotoForm
            addPic={this.addPic}
            displayPicture={this.displayPicture}
            handleChange={this.handleChange}
          />
            <PreviewPicture 
                pictureURL={this.state.pictureURL}/>
        </div>)

    }
    else {
      return (
        <div></div>
      )
    }
  }

  displayIndex = () => {
    const index = this.state.index
    if (index === null) {
      return (
        <div>
          <h1>Your Albums</h1>
          <div id="albumsbuttons">
            {this.state.userAlbums.map((album, index) => {
              return (<button key={index} onClick={() => {

                this.click(index)
              }}>{album.albumName}</button>)
            })}
          </div>
          <form onSubmit={this.createAlbum}>
            <h4>Create new album</h4>
            <label>Album Name</label>
            <input id="albumName" name="albumName" onChange={this.handleChange} type="text"></input>
            <input className="submit" type="submit"></input>
          </form>
        </div>

      )
    }
    else {
      return (
        <div>
          <button onClick={() => { this.click(null) }}>Back to Albums</button>
          {this.displayAlbum()}

        </div>

      )
    }

  }





  render() {
console.log(this.state)
    return (
      <div id="displayDiv">
        {this.displayIndex()}
      </div>

    )
  }
}

PhotoAlbum.props = {
  userName: PropTypes.String,
  index: PropTypes.String,
  updateIndex: PropTypes.func
}

export default PhotoAlbum;

