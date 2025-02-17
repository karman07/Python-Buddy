import React from "react";
import { ListGroup, Image, Row, Col, Alert } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults = ({ searchQuery, products }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hide the results when there's no query
  if (searchQuery === "") return null;

  return (
    <div className="search-results-container">
      {filteredProducts.length > 0 ? (
        <ListGroup variant="flush" className="results-list">
          {filteredProducts.map((product, index) => (
            <ListGroup.Item key={index} className="search-item">
              <Row className="align-items-center">
                <Col xs={2}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                <Col xs={8}>
                  <h6 className="mb-0">{product.name}</h6>
                </Col>
                <Col xs={2} className="text-end">
                  <span className="price">${product.price.toFixed(2)}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Alert variant="warning" className="text-center mb-0">
          No products found
        </Alert>
      )}
    </div>
  );
};

export default SearchResults;
