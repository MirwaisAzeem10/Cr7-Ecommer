import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import Preview from "./Preview";

function Header({ cart, setCart, decrementCartQty, incrementCartQty }) {
  const [show, setShow] = useState(false);

  function showData() {
    setShow(!show);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Navbar
        className="justify-content-between"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="/image/cr7blackwhite.png"
              style={{ filter: "brightness(0.5) invert(1)", width: "80px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#card-component">Services</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
            <FontAwesomeIcon
              style={{ paddingRight: "20px" }}
              onClick={showData}
              icon={faCartShopping}
              color="white"
            />

            {show && (
              <div
                style={{
                  position: "absolute",
                  right: 100,
                  top: 106,
                  width: 450,
                  zIndex: 100,
                  backgroundColor: "white",
                }}
              >
                {cart?.map((data) => (
                  <div
                    key={data?.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Preview
                      incrementCartQty={incrementCartQty}
                      decrementCartQty={decrementCartQty}
                      cart={cart}
                      data={data}
                      setCart={setCart}
                    />
                  </div>
                ))}
              </div>
            )}

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
