import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from '../../../Shared/Header';

export default class AddBook extends Component {
  render() {
    return (
      <>
        <Header title="Book Adding Form" navItems={[]} account={false} />
        <div
          className="d-flex flex-column min-vh-100"
          style={{ backgroundColor: '#F6F8FB' }}
        >
          <Container className="text-left wrapper flex-grow-1">
            <div
              className="d-block mt-5 mb-5 font-weight-light"
              style={{ fontSize: '2em' }}
            >
              Add a Book
            </div>
            <div className="d-block" style={{ fontSize: '1.232em' }}>
              <Row>
                <Col className="border-left">
                  <Form className="mb-3" data-testid="bookadding-form">
                    <Form.Group>
                      <Form.Label htmlFor="title">ISBN</Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75"
                        id="isbn"
                        aria-label="isbn"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="title">Title</Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75"
                        id="title"
                        aria-label="title"
                        aria-describedby="title"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="emailName">Subtitle</Form.Label>
                      <Form.Control
                        type="text"
                        id="subtitle"
                        className="w-75"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="originTitle">
                        Origin Title
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="originTitle"
                        className="w-75"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col className="border-left">
                  <Form className="mb-3" data-testid="bookadding-form">
                    <Form.Group>
                      <Form.Label htmlFor="author">Author</Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75"
                        id="author"
                        aria-describedby="authorHelp"
                        aria-label="author"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="publisher">Publisher</Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75"
                        id="publisher"
                        aria-label="publisher"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="publishedDate">
                        Published Date
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-75"
                        id="publishedDate"
                        aria-label="publishedDate"
                      />
                    </Form.Group>
                    <button
                      type="submit"
                      className="btn btn-primary w-75 mt-4"
                      data-testid="submit-button"
                    >
                      Add Book
                    </button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
