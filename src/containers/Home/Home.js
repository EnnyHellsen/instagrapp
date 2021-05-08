import React from "react";
import "./Home.css";
import InstagramItem from "../../components/InstagramItem";
import Hero from "../../components/Hero";
import { ImageContext } from '../../App'

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const instagramData = React.useContext(ImageContext);

  return (
    <div>
      <Hero />
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