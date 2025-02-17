import React from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

const ProductPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        {/* Image Gallery */}
        <Col md={4} className="d-flex flex-column align-items-center">
          <Image
            src="https://cartzilla-html.createx.studio/assets/img/shop/grocery/10.png"
            fluid
            className="mb-3"
          />
        </Col>

        {/* Product Details */}
        <Col md={8}>
          <h6 style={{ color: "#6c757d" }}>Cereals / Nestlé</h6>
          <h2 className="fw-bold">
            Muesli Fitness Nutritious Energy, gluten free
          </h2>
          <p>500g</p>
          <p className="text-secondary">
            <b>
              {" "}
              <a href="#" style={{ color: "#13653f", textDecoration: "none" }}>
                {" "}
                Availability : True
              </a>
            </b>
          </p>
          <h3 className="fw-bold">$2.15</h3>

          <div className="d-flex justify-content-center align-items-center mb-3">
            <Button variant="light" className="me-2">
              -
            </Button>
            <span>1</span>
            <Button variant="light" className="ms-2">
              +
            </Button>
          </div>

          <Button variant="danger" className="mb-3">
            Add to cart
          </Button>

          <p>
            Muesli Fitness Nutritious Energy is a popular breakfast cereal that
            is a healthy and nutritious way to start your day. This delicious
            cereal is made up of a combination of whole grains, nuts, seeds, and
            dried fruits.
          </p>

          <div className="d-flex gap-3 my-5">
            <span>✅ Gluten-free</span>
            <span>✅ Plant based</span>
            <span>✅ Vegan</span>
            <span>✅ Keto</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
