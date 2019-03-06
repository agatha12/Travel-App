import React from "react"

const PreviewPicture = (props) => {
    const { pictureURL } = props;
    return (
    <img alt="" className="img-fluid mb-2 mt-2" src={pictureURL}></img>
    )

}
export default PreviewPicture