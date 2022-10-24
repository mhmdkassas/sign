import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import button from 'react-bootstrap/button';

export function Header(props: {
  webState: number;
}): JSX.Element {
  const webState = props.webState;
  if (webState === 1) {
    return (
      <Container>
        <Row flex-justify-content>
          <Col>
            <button className="header_button">Home</button>
          </Col>
          <Col>
            <button className="header_button">Story</button>
          </Col>
          <Col>
            <button className="header_button">Details</button>
          </Col>
          <Col>
            <button className="header_button">RoadMap</button>
          </Col>
          </Row>
      </Container>
    );
  }
  else {
    return (
      <Container className="hidden_header">
        <Row flex-justify-content>
          <Col>
            {/* <button className="hidden_header_button disabled">Home</button> */}
          </Col>
          <Col>
            {/* <button className="hidden_header_button disabled">Story</button> */}
          </Col>
          <Col>
            {/* <button className="hidden_header_button disabled">Details</button> */}
          </Col>
          <Col>
            {/* <button className="hidden_header_button disabled">RoadMap</button> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
