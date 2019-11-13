import React from "react";
import './InstagramItem.css';

const InstagramItem = ({ data, isDoneFetchingData }) => {
  return (
    <div className="instagram-container" id="start">
      {data.map(item => {

        let instagramText = item.caption.text;
        let position = instagramText.search(/#/i);
        position > 150 ? position = 150 : null;
        let finalString = instagramText.slice(0, position);

        if (item.tags.indexOf("norahellsen") > -1) {
          return (
            <a
              href={`/portfolio/${finalString.slice(0, 10)}`}
              key={item.id}
            >
              <div className="instagram-item">
                <img
                  className="instagram-image"
                  alt={item.caption.text.substr(0, 40)}
                  src={item.images.standard_resolution.url}
                />
                <div className="instagram-text-container">
                  <p> {finalString.length > 149 ? finalString + `..` : finalString}</p>
                </div>
              </div>
            </a>
          )
        } else {
          return false;
        }
      })}

      {
        isDoneFetchingData === false ?
          <div className="instagram-loader" >
            <div></div>
            <div></div>
          </div>
          : null
      }
    </div>
  )
};

export default InstagramItem;
