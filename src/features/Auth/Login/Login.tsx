import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <body
        className='d-flex flex-column min-vh-100'
        style={{ backgroundColor: "#F6F8FB" }}
      >
        <Container className='text-left wrapper flex-grow-1'>
          <div
            className='d-block mt-5 mb-5 font-weight-light'
            style={{ fontSize: "2em" }}
          >
            Login
          </div>
          <div className='d-block' style={{ fontSize: "1.232em" }}>
            <Row>
              <Col className='border-left'>
                <form className='mb-3'>
                  <div className='form-group'>
                    <label htmlFor='emailAddr'>Email address</label>
                    <input
                      type='email'
                      className='form-control w-75'
                      id='emailAddr'
                      aria-describedby='emailHelp'
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      className='form-control w-75'
                      id='password'
                    />
                  </div>
                  <button type='submit' className='btn btn-primary w-75'>
                    Submit
                  </button>
                </form>
              </Col>
              <Col className='border-left'>
                <Row>
                  <Col>
                    <h4>Security Notice</h4>
                    <div className='mt-1'>
                      <small>
                        Logging in will allow you to access SMU Library's
                        resources. Make sure not to share your credentials.
                      </small>
                      <div>
                        <small>
                          <i
                            className='bi bi-arrow-right-circle-fill mr-2'
                            style={{ color: "#203549" }}
                          ></i>
                        </small>
                        <Link to='/'>
                          <small>Forgot password?</small>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='mt-5'>
                  <Col>
                    <h4>Don't have an account?</h4>
                    <button type='button' className='btn btn-primary btn-sm'>
                      Register
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </body>
    );
  }
}
