import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Shared/Header';
import libraryPic from '../../assets/library-pic.png';

export default function Main() {
  const navItems = [
    { name: 'About', link: '#' },
    { name: 'Catalogs', link: '#' },
    { name: 'Code', link: '#' },
    { name: 'Contact Us', link: '#' },
  ];
  return (
    <>
      <Header title="" navItems={navItems} account={true} />
      <div
        className="d-flex flex-column min-vh-100"
        style={{ backgroundColor: '#F6F8FB' }}
      >
        <Container className="text-left wrapper flex-grow-1" fluid>
          <Row>
            <Col>
              <img src={libraryPic} alt="" className="d-block w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
