/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/blinkzrpn"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/theerapon-rattapantanon-595a86167/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/blinkz333"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Credit by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
          
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
