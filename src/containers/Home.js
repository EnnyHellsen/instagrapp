import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import config from "../config";
import response from "../response";
import InstagramItem from "../components/InstagramItem";
import Hero from "../components/Hero";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      response,
      scrollTop: 0,
      activePos: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  getInstagram = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await API.get("instagram", "media/recent?max_id=2092130121568933544_7165710768", {
        queryStringParameters: { access_token: config.instagram.accessToken }
      });
      this.setState({ isLoading: false, response: response });
    } catch (e) {
      this.setState({ isLoading: false });
    }
  }

  handleScroll(event) {
    const prevState = this.state.scrollTop;
    this.setState({ scrollTop: event.srcElement.scrollingElement.scrollTop });
    const currentState = this.state.scrollTop;

    if (prevState < currentState) {
      this.setState({ activePos: true })
    } else if (prevState > currentState) {
      this.setState({ activePos: false })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getInstagram();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <React.Fragment>
        <Hero activePos={this.state.activePos} />
        <div className="Home">
          <div className="lander">
            {this.state.isLoading && <h1>Loading content..</h1>}
            {!this.state.isLoading && <InstagramItem data={this.state.response.data} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}


// popupImage = event => {
//   event.preventDefault();
//   console.log(event.target);
//   event.target.src =
//     event.target.src ===
//       this.state.response.data[event.target.id].images.standard_resolution.url
//       ? this.state.response.data[event.target.id].images.low_resolution.url
//       : this.state.response.data[event.target.id].images.standard_resolution
//         .url;
//   return console.log(
//     this.state.response.data[event.target.id].images.standard_resolution.url
//   );
// };
