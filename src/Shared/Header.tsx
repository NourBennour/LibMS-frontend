import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import headerImg from '../assets/SMU-LOGO.png';

interface IProps {
  title: string;
  navItems: Item[];
}

interface Item {
  name: string;
  link: string;
}

export default function Header({ title, navItems, ...props }: IProps) {
  return (
    <>
      <header>
        <Navbar style={{ backgroundColor: '#203549' }} id="topnavbar">
          <Container>
            <img src={headerImg} alt="" width={263} height={122} />
          </Container>
        </Navbar>

        <div
          className="navbar navbar-expand-md"
          style={{ backgroundColor: '#007EA4' }}
        >
          <Container className="justify-content-center justify-content-md-between">
            <div className="font-weight-light mr-0 text-white">{title}</div>
          </Container>
        </div>
      </header>
    </>
  );
}
