import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="/#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="smoothscroll"
                  href="#home"
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="smoothscroll"
                  href="#about"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="smoothscroll"
                  href="#resume"
                >
                  Resume
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="smoothscroll"
                  href="#portfolio"
                >
                  Works
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="smoothscroll"
                  href="#contact"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hi, I'm {resumeData.name}.
              </h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
