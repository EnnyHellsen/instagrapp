import React from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const ImageContext = React.createContext([]);

const App = () => {
  const [instagramData, setInstagramData] = React.useState([])

  const populateAirtable = async () => {
    await fetch('/.netlify/functions/populateAirtable', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        console.log(data.text());
      })
      .catch(error => {
        console.log('err:', error);
      });
  }

  const getAirtable = async () => {
    await fetch('/.netlify/functions/getAirtableRecords', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        return data.text()
      })
      .then(data => {
        console.log(JSON.parse(data));
        setInstagramData(JSON.parse(data));
      })
      .catch(error => {
        console.log('err:', error);
      });
  }

  React.useEffect(() => {
    // populateAirtable();
    getAirtable();
  }, [])

  return (
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
