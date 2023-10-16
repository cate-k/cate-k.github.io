import React from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const Portfolio = () => {
  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="portfolio">
          <h1>Portfolio</h1>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/docupay.png")}
              alt="DocuPay"
            />

            <div className="project-info">
              <h2>DocuPay</h2>

              <ul className="tools">
                <li>Solidity</li>
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Web3.js</li>
                <li>Truffle</li>
                <li>Ganache</li>
                <li>Infura</li>
                <li>Git & GitHub</li>
                <li>JSON</li>
              </ul>

              <p className="description">DocuPay is a DApp backed by a smart contract where users can quickly share PDF files on informational products or reports, and get paid in Ethereum when someone purchases their file to download.</p>

              <a className="animated-link" href="https://cate-k.github.io/docupay" target="_blank" rel="noopener noreferrer">
                <span>View DocuPay</span>
              </a>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/authentifyer.png")}
              alt="Authentifyer"
            />

            <div className="project-info">
              <h2>Authentifyer</h2>

              <ul className="tools">
                <li>Solidity</li>
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Web3.js</li>
                <li>Truffle</li>
                <li>Ganache</li>
                <li>Infura</li>
                <li>Git & GitHub</li>
                <li>JSON</li>
              </ul>

              <p className="description">Authentifyer is a DApp that enables users to identify if a physical product (e.g. sneakers) is authentic or an imitation by scanning unique QR codes.</p>

              <a className="animated-link" href="https://cate-k.github.io/authentifyer" target="_blank" rel="noopener noreferrer">
                <span>View Authentifyer</span>
              </a>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/wilson-financial-services.png")}
              alt="Wilson Financial Services"
            />

            <div className="project-info">
              <h2>Wilson Financial Services</h2>

              <ul className="tools">
                <li>Pug</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Git & GitHub</li>
              </ul>

              <p className="description">A demo website for an accounting firm's services.</p>

              <a className="animated-link" href="https://cate-k.github.io/wilson-financial-services" target="_blank" rel="noopener noreferrer">
                <span>View Wilson Financial Services</span>
              </a>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/the-busy-bean.png")}
              alt="The Busy Bean"
            />

            <div className="project-info">
              <h2>The Busy Bean</h2>

              <ul className="tools">
                <li>Pug</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Git & GitHub</li>
              </ul>

              <p className="description">A demo website for a café called "The Busy Bean."</p>

              <a className="animated-link" href="https://cate-k.github.io/the-busy-bean" target="_blank" rel="noopener noreferrer">
                <span>View The Busy Bean</span>
              </a>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/food-koala.png")}
              alt="FoodKoala"
            />

            <div className="project-info">
              <h2>FoodKoala</h2>

              <ul className="tools">
                <li>Pug</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Git & GitHub</li>
              </ul>

              <p className="description">A demo website for a meal kit delivery service.</p>

              <a className="animated-link" href="https://cate-k.github.io/food-koala" target="_blank" rel="noopener noreferrer">
                <span>View FoodKoala</span>
              </a>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src={require("../styles/images/golden-times.png")}
              alt="Golden Times"
            />

            <div className="project-info">
              <h2>Golden Times</h2>

              <ul className="tools">
                <li>C# / .NET</li>
                <li>Git & GitHub</li>
              </ul>

              <p className="description">Golden Times is a platform where people over the age of 60 can enjoy activities and interact with others who have similar interests and are around their age.</p>

              <a className="animated-link" href="https://github.com/cate-k/golden-times#readme" target="_blank" rel="noopener noreferrer">
                <span>View GitHub repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;