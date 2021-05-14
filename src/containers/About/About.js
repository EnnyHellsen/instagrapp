import React, { Component } from "react";
import "./About.css";
import Portrait from './../../assets/images/portrait.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="about-heading"> Nora Hellsén </h1>
        <h2 className="about-subheading"> Ädelmetallsmed </h2>
        <p className="about-paragraph">
          De saker i livet vi inte egentligen behöver kanske är vad som säger mest om oss som personer. Smycken är ett sätt att visa identitet men även förmedla samhällskritik och känslor. Att förvandla våra tankar till fysiska objekt kan ibland hjälpa oss förstå och kommunicera dem bättre. Dock, ibland vill man också bara känna sig fin :) <br /><br />
          Skönhet i sig är ett relativt begrepp som inte behöver syfta på ideal, normer eller perfektion. Genom mitt skapande bestämmer jag själv vad som är vackert. I smyckekonsten kan jag välja vilken del av kroppen som ska framhävas, på vilket sätt och med vilken känsla. Genom dina val av smycken kan du välja själv precis vad du vill förmedla till omvärlden. <br /><br />
          Jag gillar att vara sarkastisk genom mina smycken och blanda allvar med skämt. Skapar jag med humor eller bitterhet?</p>
        <img className="about-img" alt="nora hellsen" src={Portrait} />
        <div className="about-experience">
          <h4> Utbildning </h4>
          <p> <strong>Pågående </strong> Smyckekonst Kandidatprogrammet HDK</p>
          <p> <strong> 2018-2020 </strong>  Metallformgiving/Silversmide Leksands folkhögskola</p>
          <p> <strong> 2016-2017 </strong> Lärling hos Sofia Sjörén och Lisa Kamal</p>
        </div>
      </div>
    );
  };
}
