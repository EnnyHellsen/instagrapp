import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import config from "../config";
import response from "../response";
import { Col, Row } from "react-bootstrap";
import InstagramItem from "../components/InstagramItem";
import Hero from "../components/Hero";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      response
    };
    this.getInstagram();
  }

  renderInstagram = () => {
    return this.state.response.data.map((value, index) => {

      let instagramText = value.caption.text;
      let position = instagramText.search(/#/i);
      position > 150 ? position = 150 : null;
      let finalString = instagramText.slice(0, position);

      if (value.tags.indexOf("silversmed") > -1) {
        return (
          <InstagramItem className="insta-div" key={value.id}>
            <img
              onClick={this.popupImage}
              id={index}
              alt={value.caption.text.substr(0, 40)}
              src={value.images.low_resolution.url}
            />
            <p> {finalString.length > 149 ? finalString + `..` : finalString}</p>
          </InstagramItem >
        )
      } else {
        return false
      }
    });
  };

  popupImage = event => {
    event.preventDefault();
    console.log(event.target);
    event.target.src =
      event.target.src ===
        this.state.response.data[event.target.id].images.standard_resolution.url
        ? this.state.response.data[event.target.id].images.low_resolution.url
        : this.state.response.data[event.target.id].images.standard_resolution
          .url;
    return console.log(
      this.state.response.data[event.target.id].images.standard_resolution.url
    );
  };

  getInstagram = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await API.get("instagram", "media/recent/", {
        queryStringParameters: { access_token: config.instagram.accessToken }
      });
      this.setState({ isLoading: false, response: response });
      console.log(response);
    } catch (e) {
      console.log(e);
      console.log(e.message);
      console.log(e.body);
      this.setState({ isLoading: false });
    }
  };

  render() {

    let image = this.state.response.data[11].images.standard_resolution.url;

    return (
      <React.Fragment>
        <Hero image={image} />
        <div className="Home">
          <div className="lander">
            {this.state.isLoading && <h1>Loading content..</h1>}
            {!this.state.isLoading && this.renderInstagram()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
