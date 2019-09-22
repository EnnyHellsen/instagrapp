import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            activePos: false,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
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

    render() {
        const { activePos } = this.state;
        console.log(activePos);

        return (
            <div className="hero">
                <h1 className={activePos ? 'active' : ''}> Nora Hellsén Jewellery </h1>
                <img onClick={() => console.log('klickad')} src={chevron} />
            </div>
        )
    }
}

export default Hero