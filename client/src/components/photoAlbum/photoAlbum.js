import React from "react";
import PropTypes from 'prop-types'
import photoAPI from '../../utils/photoAPI'
import Album from './Album'
import PhotoForm from './PhotoForm'
import firebase from "../../utils/firebase"





class PhotoAlbum extends React.Component {

    constructor(state) {
        super(state);
        this.state = {
        albumName: "",
        userAlbums: [],
        index: null
        }
    }

    componentDidMount(){
      this.getInfo()
    }

    getInfo = () => {
      photoAPI.getAlbums(this.props.userName).then(res => {
        console.log(res.data)
        res.data.map((album, index) => {
          let key={index}
          this.setState({
          userAlbums: [...this.state.userAlbums, album], 
        })})
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
    console.log(file)
    reader.onloadend = () => {
        this.setState({
            picture: file,
            pictureURL: reader.result,
            albumName: ""
        })
    }
    reader.readAsDataURL(file)
}

addPic = picture => {
    picture.preventDefault()
    console.log(picture)
    
    let index = this.state.index
    let id = this.state.userAlbums[index]._id
    let currentPhotos = this.state.userAlbums[index].photos
    let albumName = this.state.userAlbums[index].albumName
    firebase.upload(this.state.picture, this.props.userName, albumName, id, currentPhotos)
    
    
}




    createAlbum = event => {
      event.preventDefault()
      console.log(this.state)
      console.log(event.target) 

      let album = {
        albumName: this.state.albumName,
        photos: [],
        userName: this.props.userName,
        picture: null,
        pictureURL: null,
        img: null
      }
      console.log(album)
      photoAPI.createAlbum(
        album
    ).then(res => {console.log(res)})
        .catch(err => console.log(err));


    }

    click = index => {
      console.log(index)
      this.setState({
        index: index
      })
    }

    displayAlbum = () => {
      if (this.state.index !== null){
        let index = this.state.index
        let name = this.state.userAlbums[index].albumName
        let photos= this.state.userAlbums[index].photos
        
        return (
          <div>
        <Album
        name={name}
        photos={photos}
        />
        <PhotoForm
        addPic={this.addPic}
        displayPicture={this.displayPicture}
        handleChange={this.handleChange}
        pictureUrl={this.state.pictureURL}
        img={this.state.img}
        />
        </div>)

      }
      else{
        return (
          <div></div>
        )
      }
    }


  


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Your Albums</h1>
                <div id="albumsbuttons">
                  {this.state.userAlbums.map((album, index) => {
                    return (<button onClick={() => {

                      this.click(index)
                    }}>{album.albumName}</button>)
                  })}
                </div>

                {this.displayAlbum()}
                
              <form onSubmit={this.createAlbum}>
                <h4>Create new album</h4>
                <label>Album Name</label>
                <input name="albumName" onChange={this.handleChange} type="text"></input>
                <input type="submit"></input>
              </form>
            </div>
        )
    }
}

PhotoAlbum.props = {
    userName: PropTypes.String
}

export default PhotoAlbum;

