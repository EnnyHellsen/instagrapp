import React from "react";
import './InstagramItem.css';

const InstagramItem = ({ data }) => {

  return (
    <div className="instagram-container">
      {data.map(item => {

        let instagramText = item.caption.text;
        let position = instagramText.search(/#/i);
        position > 150 ? position = 150 : null;
        let finalString = instagramText.slice(0, position);

        if (item.tags.indexOf("norahellsen") > -1) {
          return (
            <div
              className="instagram-item"
              key={item.id}>
              <img
                className="instagram-image"
                alt={item.caption.text.substr(0, 40)}
                src={item.images.standard_resolution.url}
              />
              <div className="instagram-text-container">
                <p> {finalString.length > 149 ? finalString + `..` : finalString}</p>
              </div>
            </div>
          )
        } else {
          return false;
        }
      })}
    </div>
  )
};

export default InstagramItem;
