import React from "react";

const Image = ({ location }) => {
  const [imageData, setImageData] = React.useState([]);
  // const imageId = JSON.stringify(location, null, 2)

  console.log('location', location)

  React.useEffect(() => {
    fetch('/.netlify/functions/getSingleImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'media-id': 'hello'
      }
    })
      .then(data => {
        return data.text()
      })
      .then(data => {
        console.log(data)
        // setImageData(JSON.parse(data))
      })
      .catch(error => {
        console.log('err:', error);
      });
  })

  console.log(imageData)

  return (
    <div>
      <p> bild </p>
      <p> bild </p>
      <p> bild </p>
    </div>
  )
}

export default Image;
