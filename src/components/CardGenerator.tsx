import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface CardData {
  name: string;
  description: string;
  image: string | ArrayBuffer | null;
  id?: string;
}

interface Props {
  cardData: CardData[];
  width: string;
  height: string;
}

function CardGenerator({ cardData, width, height }: Props) {
  return (
    <Row>
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="m-3 shadow bg-body-tertiary rounded zoom-card d-flex justify-content-center"
          style={{ width: width, height: height }}
        >
          {card.id ? (
            <a href={`#${card.id}`} className="text-decoration-none text-dark">
              <Card.Img
                className="object-fit-contain img-fluid"
                variant="top w-100"
                src={card.image?.toString()}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </a>
          ) : (
            <>
              <Card.Img
                className="object-fit-contain img-fluid"
                variant="top w-100 h-65"
                src={card.image?.toString()}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </>
          )}
        </Card>
      ))}
    </Row>
  );
}

export default CardGenerator;
