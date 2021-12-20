import { Modal, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../../Redux/actions";

function CategoriesModal(props) {
  const dispatch = useDispatch();

  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(allActions.CategoriesActions.addCategory(props.cate));
    props.onHide();
  };
  const handleUpdateCategory = (e) => {
    e.preventDefault();
    console.log(props.id);
    dispatch(allActions.CategoriesActions.updateCategory(props.cate, props.id));
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
              Update Category
            </Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Category
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
                name="id"
                value={props.cate.id}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={props.cate.name}
                onChange={(e) => {
                  props.yolo(e);
                }}
              />
            </Form.Group>

            {props.type === "update" ? (
              <button
                onClick={(e) => {
                  handleUpdateCategory(e);
                }}
              >
                UPDATE CATEGORY
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleAddCategory(e);
                }}
              >
                ADD CATEGORY
              </button>
            )}
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
}
export default CategoriesModal;
