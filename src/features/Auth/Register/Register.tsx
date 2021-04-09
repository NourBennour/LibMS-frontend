import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Register(props: any) {
  return (
    <div
      className='d-flex flex-column min-vh-100'
      style={{ backgroundColor: "#F6F8FB" }}
    >
      <Container className='text-left wrapper flex-grow-1'>
        <div
          className='d-block mt-5 mb-5 font-weight-light'
          style={{ fontSize: "2em" }}
        >
          Register
        </div>
        <div className='d-block' style={{ fontSize: "1.232em" }}>
          <Row>
            <Col className='border-left'>
              <form className='mb-3' data-testid='registration-form'>
                <div className='form-group'>
                  <label htmlFor='firstName'>First name</label>
                  <input
                    type='text'
                    className='form-control w-75'
                    id='firstName'
                    aria-describedby='firstNameHelp'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='lastName'>Last name</label>
                  <input
                    type='text'
                    className='form-control w-75'
                    id='lastName'
                    aria-describedby='lastNameHelp'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='emailAddr'>Email address</label>
                  <input
                    type='email'
                    className='form-control w-75'
                    id='emailAddr'
                    aria-describedby='emailHelp'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='uniID'>University ID</label>
                  <input
                    type='text'
                    className='form-control w-75'
                    id='uniID'
                    aria-describedby='uniIDHelp'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    className='form-control w-75'
                    id='password'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm password</label>
                  <input
                    type='password'
                    className='form-control w-75'
                    id='confirmPassword'
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
                  <h4>SMU Library Account</h4>
                  <div className='mt-1'>
                    <small>
                      Create an account using your SMU email (@smu.tn,
                      @medtech.tn or @msb.tn). Please note that any other email
                      domain is not allowed.
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <h4>Already have an account?</h4>
                  <Link to='/login'>
                    <button type='button' className='btn btn-primary btn-sm'>
                      Log in
                    </button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
