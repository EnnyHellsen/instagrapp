import React from "react";
import "./Home.css";
import InstagramItem from "../../components/InstagramItem";
import Hero from "../../components/Hero";
import { ImageContext } from '../../App'

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [imageResponse, setImageResponse] = React.useState([]);
  const [activePosition, setActivePosition] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);

  const instagramData = React.useContext(ImageContext);
  console.log(instagramData)

  // const getInstagram = async () => {
  //   await fetch('/.netlify/functions/getAllMedia', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     // .then(resp => resp.json())
  //     .then(data => {
  //       return data.text()
  //     })
  //     .then(data => {
  //       // console.log(data)
  //       setImageResponse(JSON.parse(data))
  //       setIsLoading(false)
  //     })
  //     .catch(error => {
  //       setIsLoading(false)
  //       console.log('err:', error);
  //     });
  // }

  const handleScroll = (event) => {

  }

  const scrolled = window.scrollY;

  React.useEffect(() => {
    const prevState = scrollTop;
    setScrollTop(window.scrollY);
    const currentState = scrollTop;

    if (prevState < currentState) {
      setActivePosition(true)
    } else if (prevState > currentState) {
      setActivePosition(false)
    }
  }, [scrolled])


  React.useEffect(() => {
    // getInstagram();
  }, [imageResponse])

  return (
    <div>
      <Hero activePos={activePosition} />
      <div className="Home">
        <div className="lander">
          {/* {isLoading && <h1>Loading content..</h1>} */}
          <InstagramItem data={instagramData} isDoneFetchingData={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;