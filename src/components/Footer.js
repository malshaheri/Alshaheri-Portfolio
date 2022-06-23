import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <motion.li
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <i className={item.className} />
                      </a>
                    </motion.li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
