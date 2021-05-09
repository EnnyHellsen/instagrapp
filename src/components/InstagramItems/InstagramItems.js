import React from "react";
import './InstagramItems.css';
import { Link } from 'react-router-dom'

const InstagramItem = ({ data, isDoneFetchingData }) => {

  return (
    <div className="instagram-container" id="start">
      {data.map(item => {
        const { caption, media_url, id, media_type } = item.fields;

        const position = caption.search(/#/i);
        const adjustLength = position < 50 ? position : 50
        const captionWithoutTags = caption.slice(0, adjustLength);

        return (
          <Link
            to={`/portfolio/${id}`}
            key={id}
          >
            <div className="instagram-item">
              {
                media_type === 'VIDEO' ?
                  <video aria-label={caption.slice(0, position)} className="instagram-image" autoPlay loop>
                    <source src={media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  :
                  <img
                    className="instagram-image"
                    alt={caption.slice(0, 40)}
                    src={media_url}
                  />
              }
              <div className="instagram-text-container">
                <p> {captionWithoutTags.length >= 50 ? captionWithoutTags + `..` : captionWithoutTags}</p>
              </div>
            </div>
          </Link>
        )
      })}

      {/* {
        isDoneFetchingData === false ?
          <div className="instagram-loader" >
            <div></div>
            <div></div>
          </div>
          : null
      } */}
    </div>
  )
};

export default InstagramItem;
