import React from "react";
import products from "../products.js";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.js";

const Homescreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            {/* <h3>{product.name}</h3> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homescreen;
