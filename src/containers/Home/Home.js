import React from "react";
import "./Home.css";
import InstagramItems from "../../components/InstagramItems";
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
          <InstagramItems data={instagramData} isDoneFetchingData={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;