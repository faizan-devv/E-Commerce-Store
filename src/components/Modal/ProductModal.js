import { Modal, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import { useState } from "react";

function ProductsModal(props) {
  const dispatch = useDispatch();
  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(allActions.ProductActions.addProduct(props.prod));
    props.onHide();
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    console.log(props.id);
    dispatch(allActions.ProductActions.updateProduct(props.prod, props.id));
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        {props.type === "update" ? (
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Product
            </Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Product
            </Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Id"
                name="productID"
                value={props.prod.productID}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image Url"
                name="imageUrl"
                value={props.prod.imageUrl}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={props.prod.title}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={props.prod.description}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Category">
              <Form.Label>Select Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="category"
                value={props.prod.category}
                onChange={(e) => {
                  props.yolo(e);
                }}
              >
                <option> Select Category </option>
                {props.categories.map((cate) => {
                  return <option value={cate.name}>{cate.name}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Rating"
                name="rating"
                value={props.prod.rating}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder=" Enter in USDs "
                name="price"
                value={props.prod.price}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Price">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder=" Enter Quantity "
                name="quantity"
                value={props.prod.quantity}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>
            {props.type === "update" ? (
              <button
                onClick={(e) => {
                  handleUpdateProduct(e);
                }}
              >
                UPDATE PRODUCT
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleAddProduct(e);
                }}
              >
                ADD PRODUCT
              </button>
            )}
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
}
export default ProductsModal;
