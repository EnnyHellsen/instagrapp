import React from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const ImageContext = React.createContext([]);

const App = () => {
  const [instagramData, setInstagramData] = React.useState([])

  const getInstagram = async () => {
    await fetch('/.netlify/functions/getAllMedia', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        return data.text()
      })
      .then(data => {
        console.log('fetched data')
        setInstagramData(JSON.parse(data))
      })
      .catch(error => {
        console.log('err:', error);
      });
  }

  React.useEffect(() => {
    getInstagram();
  }, [])

  return (
    // Only render ui if the app is not currently authenticating
    <div className="App">
      <ImageContext.Provider value={instagramData}>
        <Header extra={'childProps.name'} />
        <Routes childProps={'childProps'} />
        <Footer />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
