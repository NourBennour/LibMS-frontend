import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterForm } from "./RegisterForm";

import { useYupValidationResolver } from "./validation/ValidationResolver";
import { ValidationScheme } from "./validation/ValidationScheme";

export default function Register(props: any) {
  const validEmailDomains = ['smu.tn', 'msb.tn', 'medtech.tn', 'lci.tn'];

  const onSubmit = (data: RegisterForm): void =>
    console.info(JSON.stringify(data));

  const resolver = useYupValidationResolver(ValidationScheme);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver,
  });
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
              <Form
                className='mb-3'
                data-testid='registration-form'
                onSubmit={handleSubmit(onSubmit)}
              >
                <Form.Group>
                  <Form.Label htmlFor='firstName'>First name</Form.Label>
                  <Form.Control
                    type='text'
                    className='w-75'
                    id='firstName'
                    aria-label='firstName'
                    {...register("firstName")}
                    aria-describedby='firstNameHelp'
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='lastName'>Last name</Form.Label>
                  <Form.Control
                    type='text'
                    className='w-75'
                    id='lastName'
                    aria-label='lastName'
                    aria-describedby='lastNameHelp'
                    {...register("lastName")}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label htmlFor='emailName'>Email name</Form.Label>
                    <Form.Control
                      type='text'
                      id='emailName'
                      className='w-100'
                      {...register("emailName")}
                      aria-describedby='emailNameHelp'
                      aria-label='emailName'
                      isInvalid={!!errors.emailName}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.emailName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label htmlFor='emailDomain'>Email domain</Form.Label>
                    <Form.Control
                      as='select'
                      id='emailDomain'
                      className='w-50'
                      {...register("emailDomain")}
                      aria-describedby='emailDomainHelp'
                      aria-label='emailDomain'
                      isInvalid={!!errors.emailDomain}
                    >
                      { 
                        validEmailDomains.map(emailDomain => {
                          let emailAddress = "@" + emailDomain;
                          return (<option key={emailDomain} value={emailAddress}>{emailAddress}</option>)
                        })
                      }
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                      {errors.emailDomain?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Label htmlFor='universityID'>University ID</Form.Label>
                  <Form.Control
                    type='text'
                    className='w-75'
                    id='universityID'
                    {...register("universityID")}
                    aria-describedby='universityIDHelp'
                    aria-label='universityID'
                    isInvalid={!!errors.universityID}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.universityID?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    className='w-75'
                    id='password'
                    {...register("password")}
                    isInvalid={!!errors.password}
                    aria-label='password'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='confirmPassword'>
                    Confirm password
                  </Form.Label>
                  <Form.Control
                    type='password'
                    className='w-75'
                    id='confirmPassword'
                    aria-label='confirmPassword'
                    {...register("confirmPassword")}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.confirmPassword?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <button
                  type='submit'
                  className='btn btn-primary w-75'
                  data-testid='submit-button'
                >
                  Submit
                </button>
              </Form>
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
