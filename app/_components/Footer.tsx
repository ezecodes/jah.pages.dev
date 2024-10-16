import { FC } from "react";

const Footer: FC<{}> = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Me</h3>
          <p>
            I'm Elijah Eze, a dedicated backend developer and cloud engineer. I
            specialize in creating scalable, efficient, and secure systems.
            Let's connect and build something amazing together!
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://medium.com/@elijaheze777" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/elijah-eze-1b367521b"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@elijaheze777" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
                  alt="Medium"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ezecodes" target="_blank">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a href="mailto:elijaheze777@gmail.com" target="_blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                  alt="Email"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Elijah Eze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
