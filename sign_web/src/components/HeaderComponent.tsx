import React from "react";
import Container from "react-bootstrap/Container";
// import Grid from 'react-bootstrap/Grid';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button1 from 'react-bootstrap/Button';

{
  /* <Button border="none" color="#FFFFFF" height="65px" onClick={() => alert("You clicked on the pink circle!")} width="200px" children="Home"/> */
}
export function Header() {
  return (
    <Container>
      <Row flex-justify-content>
        <Col>
          <Button1 className="header_button">Home</Button1>
        </Col>
        <Col>
          <Button1 className="header_button">Story</Button1>
        </Col>
        <Col>
          <Button1 className="header_button">Details</Button1>
        </Col>
        <Col>
          <Button1 className="header_button">RoadMap</Button1>
        </Col>
        </Row>
    </Container>
  );
}

export default Header;
