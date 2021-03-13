import React from "react";
import { ImageContext } from '../../App'
import './imagePage.css';

const ImagePage = ({ location }) => {
  const [imageData, setImageData] = React.useState({});

  const imageId = location.pathname.substring(11);
  const instagramData = React.useContext(ImageContext);

  React.useEffect(() => {

    instagramData.find(item => {
      if (item.id === imageId) {
        setImageData(item)
      }
    });
  }, [instagramData])

  console.log(imageData)
  return (
    <div>
      <img className="image-page-img" src={imageData.media_url} />
      <p> {imageData.caption} </p>
    </div>
  )
}

export default ImagePage;
