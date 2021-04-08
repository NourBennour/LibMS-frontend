import { Component } from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import headerImg from "../assets/SMU-LOGO.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar style={{ backgroundColor: "#203549" }} id='topnavbar'>
            <Container>
              <img src={headerImg} alt='' width={263} height={122} />
            </Container>
          </Navbar>

          <div
            className='navbar navbar-expand-md'
            style={{ backgroundColor: "#007EA4" }}
          >
            <Container className='justify-content-center justify-content-md-between'>
              <div className='font-weight-light mr-0 text-white'>
                My SMU-Library Account
              </div>
            </Container>
          </div>
        </header>
      </>
    );
  }
}
