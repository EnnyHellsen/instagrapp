import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import config from "../config";
// import response from "../response";
import InstagramItem from "../components/InstagramItem";
import Hero from "../components/Hero";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      response: [],
      scrollTop: 0,
      activePos: false,
      nextUrl: "",
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  rootRef = React.createRef();
  myRef = React.createRef();


  getInstagram = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await API.get("instagram", "media/recent/", {
        queryStringParameters: { access_token: config.instagram.accessToken }
      });
      this.setState({
        isLoading: false,
        response: response.data,
        nextUrl: response.pagination.next_url
      });
    } catch (e) {
      this.setState({ isLoading: false });
    }
  }

  getMoreImages = async () => {
    try {
      const newResponse = await API.get("instagram", 'media/recent/?next_url=https://api.instagram.com/v1/users/7165710768/media/recent?next_url=&max_id=2029720840606920844_7165710768', {
        queryStringParameters: { access_token: config.instagram.accessToken }
      });
      this.setState({
        response: [...this.state.response, ...newResponse.data],
        nextUrl: newResponse.pagination.next_url,
      });
    } catch (e) {
      console.log('error', e);
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

    const callback = entry => {
      console.log(entry);
      entry[0].isIntersecting ? this.getMoreImages() : null;
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.1,
    });

    let target = this.myRef.current;
    observer.observe(target);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <React.Fragment>
        <Hero activePos={this.state.activePos} />
        <div className="Home">
          <div className="lander" ref={this.rootRef}>
            {this.state.isLoading && <h1>Loading content..</h1>}
            {!this.state.isLoading && <InstagramItem data={this.state.response} />}
            <div ref={this.myRef}>
              Item to be observed with intersection observer
          </div>
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
