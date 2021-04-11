import { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Shared/Header';

export default class Auth extends Component {
  render() {
    return (
      <>
        <Header title="My SMU-Library Account" navItems={[]} />
        <div
          className="d-flex flex-column min-vh-100"
          style={{ backgroundColor: '#F6F8FB' }}
        >
          <Container className="text-left wrapper flex-grow-1">
            <div
              className="d-block mt-5 mb-5 font-weight-light"
              style={{ fontSize: '2em' }}
            >
              Login to borrow books and check your requests
            </div>
            <div className="d-block" style={{ fontSize: '1.232em' }}>
              <Row>
                <Col className="border-left">
                  <h4>SMU Students, Faculty and Staff</h4>
                  <div className="mt-1">
                    <Link to="/login" data-testid="login-link">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-testid="login-button"
                      >
                        Log in
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col className="border-left">
                  <h4>Create new account</h4>
                  <div className="mt-1">
                    <Link to="/register" data-testid="register-link">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-testid="register-button"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-5">
                <Col className="border-left">
                  <h4>Policies & Information</h4>
                  <div>
                    <small>
                      <a href="#!">
                        <i className="bi bi-link-45deg"></i>
                        Who can access?
                      </a>
                    </small>
                  </div>
                  <div>
                    <small>
                      <a href="#!">
                        <i className="bi bi-link-45deg"></i>
                        SMU Library Regulations
                      </a>
                    </small>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
