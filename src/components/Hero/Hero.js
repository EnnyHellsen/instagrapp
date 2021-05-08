import React from "react";
import "./Hero.css";
import chevron from './chevron.svg';
import logo from './nora-logga-transparent.png';

const Hero = () => {
  const [activePosition, setActivePosition] = React.useState(true);
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  }

  React.useEffect(() => {
    if (scrollTop > 130) {
      setActivePosition(true)
    } else {
      setActivePosition(false)
    }
  }, [scrollTop])


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="hero">
      <img alt="logo" className="hero-logo" src={logo} />
      <h1 className={activePosition ? 'hero-title active' : 'hero-title'}> Nora Hellsén smyckekonst</h1>
      <p className="hero-description"> Välkommen till min portfolio! Jag är för närvarande student inom metallkonsten och skapar främst smycken av ädelmetall och andra material.</p>
      <a href="/#start">
        <img alt="down-arrow" className="chevron" src={chevron} />
      </a>
    </div>
  )
}

export default Hero;
