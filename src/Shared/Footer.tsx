import { Component } from "react";
import Container from "react-bootstrap/Container";
import footerLogo from "../assets/footer_logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className='text-lg-start' style={{ backgroundColor: "#203549" }}>
        <Container>
          <img src={footerLogo} alt='' />
        </Container>
      </footer>
    );
  }
}
