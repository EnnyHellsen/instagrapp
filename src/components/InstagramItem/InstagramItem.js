import React from "react";
import './InstagramItem.css';

const InstagramItem = ({ data, isDoneFetchingData }) => {
  return (
    <div className="instagram-container" id="start">
      {data.map(item => {
        const { caption, media_url, id } = item.fields;

        let instagramText = caption;
        let position = instagramText.search(/#/i);
        position > 150 ? position = 150 : null;
        let finalString = instagramText.slice(0, position);

        return (
          <a
            href={`/portfolio/${id}`}
            key={id}
          >
            <div className="instagram-item">
              <img
                className="instagram-image"
                alt={caption.substr(0, 40)}
                src={media_url}
              />
              <div className="instagram-text-container">
                <p> {finalString.length > 149 ? finalString + `..` : finalString}</p>
              </div>
            </div>
          </a>
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
