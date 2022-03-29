import React, { useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComponent.css";

function CardComponent({
  cart,
  addToCart,
  decrementCartQty,
  incrementCartQty,
}) {
  const cardsData = [
    {
      id: 1,
      title: "Jerseys",
      desc: " This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: "/image/images.jpg",
      price: 200,
    },
    {
      id: 2,
      title: "Trowsers",
      desc: "This card has supporting text below as a natural lead-in to additional content.",
      img: "/image/portugal 1.jpg",
      price: 350,
    },
    {
      id: 3,
      title: "Shorts",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: "/image/juv.jpg",
      price: 650,
    },
    {
      id: 4,
      title: "Jerseys",
      desc: " This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: "/image/manufullslev.jpg",
      price: 450,
    },

    {
      id: 5,
      title: "Trowsers",
      desc: "This card has supporting text below as a natural lead-in to additional content.",
      img: "/image/images (1).jpg",
      price: 500,
    },
    {
      id: 6,
      title: "Shorts",
      desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: "/image/manu.jpg",
      price: 600,
    },
  ];

  const [num, setNum] = useState(cardsData.map(() => 1));
  const [disable, setDisable] = useState(cardsData.map(() => false));

  return (
    <div id="card-component">
      <CardGroup style={{ padding: "100px" }}>
        {cardsData.map(({ id, title, desc, img, price, quantity }) => (
          <Card key={id} style={{ margin: "10px" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Text style={{ display: "none" }}>{id}</Card.Text>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Card.Text style={{ fontFamily: "fantasy" }}>${price}</Card.Text>
              <div
                className="justify-content-between"
                style={{ display: "flex" }}
              >
                <button
                  className="btn btn-danger px-3"
                  disabled={disable[0]}
                  onClick={() => decrementCartQty(id)}
                  type="button"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="btn btn-danger px-3"
                  onClick={() => incrementCartQty(id)}
                  type="button"
                >
                  +
                </button>{" "}
              </div>
              <Button
                style={{ margin: "30px" }}
                variant="primary"
                onClick={() => addToCart({ id, title, img, desc, price })}
                disabled={!!cart.find((item) => item.id === id)}
              >
                Add to cart
              </Button>{" "}
              {/* <Button
                style={{ padding: "10px" }}
                variant="danger"
                onClick={" "}
              >
                Remove
              </Button> */}
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <CardGroup style={{ padding: "100px" }}>
        {cardsData.map(({ id, title, desc, img, price, quantity }) => (
          <Card style={{ margin: "10px" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Text style={{ display: "none" }}>{id}</Card.Text>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Card.Text style={{ fontFamily: "fantasy" }}>${price}</Card.Text>
              <div
                className="justify-content-between"
                style={{ display: "flex" }}
              >
                <button
                  className="btn btn-danger px-3"
                  disabled={disable[0]}
                  onClick={() => decrementCartQty(id)}
                  type="button"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="btn btn-danger px-3"
                  onClick={() => incrementCartQty(id)}
                  type="button"
                >
                  +
                </button>{" "}
              </div>
              <Button
                style={{ margin: "30px" }}
                variant="primary"
                onClick={() => addToCart({ id, title, img, desc, price })}
                disabled={!!cart.find((item) => item.id === id)}
              >
                Add to cart
              </Button>{" "}
              {/* <Button
                style={{ padding: "10px" }}
                variant="danger"
                onClick={" "}
              >
                Remove
              </Button> */}
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default CardComponent;
