import { Button, Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../resources/prints-posters.jpg";
import img2 from "../resources/tshirts.jpg";
import img3 from "../resources/notebooks.png";
import img4 from "../resources/cards.png";
import img5 from "../resources/stationery-printing.jpg";
import CardGenerator from "../components/CardGenerator";
import getProducts from "../firebase/getProducts";
import Product from "../models/product";
import { useState } from "react";

function Shop() {
  const cardData1 = [
    {
      name: "Prints/ Posters",
      description:
        "Transform your vision into reality with a captivating custom-made poster that combines artistic design and personalization to create a truly unique masterpiece.",
      image: img1,
      id: "posters",
    },
    {
      name: "T-Shirts",
      description:
        "Experience the perfect fusion of art and fabric with these custom shirt prints, showcasing intricate details and vibrant colors that elevate your style to new heights.",
      image: img2,
      id: "shirts",
    },
    {
      name: "Books/Sketchbooks",
      description:
        "The custom sketchbooks/notebooks, are an amazing blend of premium craftsmanship and inspiring illustrations.",
      image: img3,
      id: "books",
    },
    {
      name: "Cards",
      description:
        "Whether it's a birthday, anniversary, or any special occasion, my custom cards empower you to express your unique message with complete freedom of choice",
      image: img4,
      id: "cards",
    },
    {
      name: "Stationery",
      description:
        "Elevate your style and leave a lasting impression with our beautifully designed stationery, perfect for adding a touch of sophistication to your notes, messages, and professional communications.",
      image: img5,
      id: "stationery",
    },
  ];

  const [productDocs, setProductDocs] = useState<Product[]>();
  getProducts().then((result) => setProductDocs(result));
  return (
    <>
      <Row className="d-flex justify-content-center">
        <h2 className="text-light ms-5">Catalog</h2>
      </Row>
      <CardGenerator cardData={cardData1} width="25rem" height="auto" />

      <Row>
        <Col>
          <h1 id="posters">Prints/Posters</h1>
        </Col>
      </Row>

      {productDocs !== undefined ? (
        <CardGenerator
          cardData={productDocs
            ?.filter((x) => x.section === "posters")
            .map((item) => {
              return {
                name: item.name,
                description: item.description,
                image: item.image,
              };
            })}
          width="15rem"
          height="20rem"
        />
      ) : (
        ""
      )}

      <Row>
        <Col>
          <h1 id="shirts">T-Shirts</h1>
        </Col>
      </Row>

      {productDocs !== undefined ? (
        <CardGenerator
          cardData={productDocs
            ?.filter((x) => x.section === "shirts")
            .map((item) => {
              return {
                name: item.name,
                description: item.description,
                image: item.image,
              };
            })}
          width="15rem"
          height="20rem"
        />
      ) : (
        ""
      )}

      <Row>
        <Col>
          <h1 id="books">Notebooks/ Sketchbooks</h1>
        </Col>
      </Row>

      {productDocs !== undefined ? (
        <CardGenerator
          cardData={productDocs
            ?.filter((x) => x.section === "books")
            .map((item) => {
              return {
                name: item.name,
                description: item.description,
                image: item.image,
              };
            })}
          width="15rem"
          height="20rem"
        />
      ) : (
        ""
      )}

      <Row>
        <Col>
          <h1 id="cards">Cards</h1>
        </Col>
      </Row>

      {productDocs !== undefined ? (
        <CardGenerator
          cardData={productDocs
            ?.filter((x) => x.section === "cards")
            .map((item) => {
              return {
                name: item.name,
                description: item.description,
                image: item.image,
              };
            })}
          width="15rem"
          height="20rem"
        />
      ) : (
        ""
      )}

      <Row>
        <Col>
          <h1 id="stationery">Stationery</h1>
        </Col>
      </Row>

      {productDocs !== undefined ? (
        <CardGenerator
          cardData={productDocs
            ?.filter((x) => x.section === "stationery")
            .map((item) => {
              return {
                name: item.name,
                description: item.description,
                image: item.image,
              };
            })}
          width="15rem"
          height="20rem"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Shop;
