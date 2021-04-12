import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import headerImg from '../assets/SMU-LOGO.png';

interface IProps {
  title: string;
  navItems: Item[];
  account: boolean;
}

interface Item {
  name: string;
  link: string;
}

export default function Header({ title, navItems, account, ...props }: IProps) {
  return (
    <>
      <header>
        <Navbar style={{ backgroundColor: '#203549' }} id="topnavbar">
          <Container>
            <Link to="/">
              {' '}
              <img src={headerImg} alt="" width={263} height={122} />{' '}
            </Link>
          </Container>
        </Navbar>

        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar navbar-expand-md navbar-dark"
          style={{ backgroundColor: '#007EA4' }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className="justify-content-center justify-content-md-between">
              {title.length ? (
                <div className="font-weight-light mr-0 text-white">{title}</div>
              ) : (
                <Nav className="mx-auto">
                  {navItems.map((item) => (
                    <Nav.Link href={item.link} className="text-white px-5">
                      {' '}
                      {item.name}{' '}
                    </Nav.Link>
                  ))}
                </Nav>
              )}
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}
