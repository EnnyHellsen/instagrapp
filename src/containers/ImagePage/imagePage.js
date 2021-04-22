import React from "react";
import { ImageContext } from '../../App'
import './imagePage.css';

const ImagePage = ({ location }) => {
  const [imageData, setImageData] = React.useState({});

  const imageId = location.pathname.substring(11);
  const instagramData = React.useContext(ImageContext);

  React.useEffect(() => {

    instagramData.find(item => {
      if (item.fields.id === imageId) {
        setImageData(item.fields)
      }
    });
  }, [instagramData])

  return (
    <section className="image-page-container">
      <img className="image-page-img" src={imageData.media_url} />
      <p className="image-page-description"> {imageData.caption} </p>
    </section>
  )
}

export default ImagePage;
