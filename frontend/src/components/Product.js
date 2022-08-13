import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Text as="div">
            <strong>{product.name}</strong>
          </Card.Text>
        </a>
        <a href={`/product/${product._id}`}>
          <Card.Text as="div">
            {product.rating} from {product.numReviews}
          </Card.Text>
        </a>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
