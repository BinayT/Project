import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

class CardComponent extends React.Component {
  render() {
    return (
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://reactstrap.github.io/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick Card text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://reactstrap.github.io/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick Card text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://reactstrap.github.io/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick Card text to build on the card title and make up the
                bulk of the card's content.
              </CardText>

              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CardComponent;
