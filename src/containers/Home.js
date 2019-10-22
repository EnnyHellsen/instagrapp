import React, { Component } from "react";
import "./Home.css";
// import { API } from "aws-amplify";
// import config from "../config";
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
      maxId: "",
      isDoneFetchingData: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  myRef = React.createRef();


  getInstagram = async () => {
    await fetch('/api/fetchInstagram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          isLoading: false,
          response: data.data,
          maxId: data.pagination.next_max_id,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  getMoreImages = async () => {
    const maxId = this.state.maxId;

    if (maxId) {
      await fetch('/api/fetchMoreInstagram', {
        method: 'POST',
        body: JSON.stringify(maxId),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.pagination.next_max_id != null) {
            console.log(data);
            this.setState({
              response: [...this.state.response, ...data.data],
              maxId: data.pagination.next_max_id,
            });
          } else {
            this.setState({ isDoneFetchingData: true })
          }
        })
        .catch(error => {
          console.log(error);
        });
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

    const handleIntersectionObserver = entry => {
      entry[0].isIntersecting ? this.getMoreImages() : null;
    }
    const observer = new IntersectionObserver(handleIntersectionObserver, {
      root: null,
      threshold: 0.1,
    });

    const target = this.myRef.current;
    observer.observe(target);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <div>
        <Hero activePos={this.state.activePos} />
        <div className="Home">
          <div className="lander">
            {this.state.isLoading && <h1>Loading content..</h1>}
            {!this.state.isLoading && <InstagramItem data={this.state.response} isDoneFetchingData={this.state.isDoneFetchingData} />}
            <div ref={this.myRef}></div>
          </div>
        </div>
      </div>
    );
  }
}