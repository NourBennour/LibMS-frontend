import { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../Shared/Header';

function LoginF ( ) {
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState("");
  const history =useHistory(); 
  useEffect (() => {
    if (localStorage.getItem('user-info')) {
      history.push("/add")
    }
  }, [])

  async function LoginF(){
    console.warn(email,password)
    let item={email,password};
    let result= await fetch("http://localhost:3000/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result = await result.json() 
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
  }};


export default class Login extends Component {
  render() {
    return (
      <>
        <Header title="My SMU-Library Account" navItems={[]} account={false} />
        <div
          className="d-flex flex-column min-vh-100"
          style={{ backgroundColor: '#F6F8FB' }}
        >
          <Container className="text-left wrapper flex-grow-1">
            <div
              className="d-block mt-5 mb-5 font-weight-light"
              style={{ fontSize: '2em' }}
            >
              Login
            </div>
            <div className="d-block" style={{ fontSize: '1.232em' }}>
              <Row>
                <Col className="border-left">
                  <form className="mb-3" data-testid="login-form">
                    <div className="form-group">
                      <label htmlFor="emailAddr">Email address</label>
                      <input
                        type="email"
                        className="form-control w-75"
                        id="emailAddr"
                        aria-describedby="emailHelp"
                        //for validation
                        //onChange={(e)=>setEmail(e.target.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control w-75"
                        id="password"
                        //for validation
                        //onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-75" onClick={LoginF}>
                      Submit
                    </button>
                  </form>
                </Col>
                <Col className="border-left">
                  <Row>
                    <Col>
                      <h4>Security Notice</h4>
                      <div className="mt-1">
                        <small>
                          Logging in will allow you to access SMU Library's
                          resources. Make sure not to share your credentials.
                        </small>
                        <div>
                          <small>
                            <i
                              className="bi bi-arrow-right-circle-fill mr-2"
                              style={{ color: '#203549' }}
                            ></i>
                          </small>
                          <Link to="/">
                            <small>Forgot password?</small>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <h4>Don't have an account?</h4>
                      <Link to="/register">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Register
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
   
   );
    } } 
  
