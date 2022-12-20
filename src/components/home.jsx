import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const Home = () => {
  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="home">
          <div className="home-bg">
            <div className="environment"></div>
            <h1 className="name glitch layers" data-text="Cate K">
              <span>
                Cate K
              </span>
            </h1>

            <h2 className="role">Software & Blockchain Developer</h2>
            <br />
            <br />
            <br />

            <div className="indicator"></div>
          </div>

          <div className="page-content">
            <h1>About Me</h1>
            <p>Hi, I'm Cate. I'm a software and blockchain developer, particularly on Ethereum-based projects.</p>
            <p>My passion is in coding and creating apps that can enhance people's lives and empower them to help others. I love to work on projects that are useful, commercially viable and have a positive social impact. Also, I live in beautiful Australia and enjoy playing the piano!</p>

            <Link to="/portfolio">
              <button className="animated-btn">
                <span>See my portfolio!</span>
              </button>
            </Link>
            <br />
            <br />

            <h1>My Skills</h1>
            <ul className="skills">
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
              <li>C# / .NET</li>
              <li>Java</li>
              <li>HTML5</li>
              <li>Pug</li>
              <li>CSS3 / SCSS</li>
            </ul>
            <br />

            <h1>Contact Me</h1>
            <p>I'd love to help or collaborate with you in your software or blockchain project. Feel free to contact me at <a className="email" href="mailto:cate@caitlen.dev">cate@caitlen.dev</a>!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;