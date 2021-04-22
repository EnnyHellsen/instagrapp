import React from "react";
import { ImageContext } from '../../App'
import './imagePage.css';

const ImagePage = ({ location }) => {
  const [imageData, setImageData] = React.useState({});

  const imageId = location.pathname.substring(11);
  const instagramData = React.useContext(ImageContext);

  console.log(imageId);

  React.useEffect(() => {
    if (imageId.length > 1) {
      instagramData.find(item => {
        if (item.fields.id === imageId) {
          setImageData(item.fields)
        }
      })
    }
  }, [instagramData, imageId])

  const position = imageData.caption ? imageData.caption.search(/#/i) : 0;
  const captionWithoutTags = imageData.caption ? imageData.caption.slice(0, position) : 'placeholder';

  return (
    <section className="image-page-container">
      { imageData.media_type === 'VIDEO' ?
        <video aria-label={captionWithoutTags} className="instagram-image" controls>
          <source src={imageData.media_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        :
        <img
          className="image-page-img"
          alt={captionWithoutTags}
          src={imageData.media_url}
        />
      }
      <p className="image-page-description"> {imageData.caption} </p>
    </section>
  )
}

export default ImagePage;
