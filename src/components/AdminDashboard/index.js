import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import ProductsModal from "../Modal/ProductModal";
import CategoriesModal from "../Modal/CategoriesModal";
import styles from "./AdminDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";

const AdminDashboard = () => {
  const productsList = useSelector((state) => state.ProductsCRUD.productsList);
  const categoriesList = useSelector(
    (state) => state.CategoriesCRUD.categoriesList
  );
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalCategoryShow, setModalCategoryShow] = useState(false);
  const [productData, setProductData] = useState({
    productID: 0,
    imageUrl: "",
    title: "",
    description: "",
    category: "",
    rating: 0,
    price: 0,
    quantity: 0,
  });
  const [categoryData, setCategoryData] = useState({
    id: 0,
    name: "",
  });
  const [editID, setEditID] = useState("");
  const [type, setType] = useState("");

  const handleUpdate = (e, prod) => {
    e.preventDefault();
    setType("update");
    setEditID(prod.productID);
    setProductData(prod);
    setModalShow(true);
  };
  const handleUpdateCategory = (e, cate) => {
    e.preventDefault();
    setType("update");
    setEditID(cate.id);
    setCategoryData(cate);
    setModalCategoryShow(true);
  };
  const handleChange = (e) => {
    let temp = { ...productData };
    temp[e.target.name] = e.target.value;
    console.log(temp);
    setProductData(temp);
  };
  const handleCategoryChange = (e) => {
    let temp = { ...categoryData };
    temp[e.target.name] = e.target.value;
    console.log(temp);
    setCategoryData(temp);
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    setEditID(id);
    dispatch(allActions.ProductActions.deleteProduct(id));
  };
  const handleDeleteCategory = (e, id) => {
    e.preventDefault();
    setEditID(id);
    dispatch(allActions.CategoriesActions.deleteCategory(id));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(allActions.ProductActions.getAllProducts());
      dispatch(allActions.CategoriesActions.getAllCategories());
      console.log("just fetched");
    }, 4000);
  }, [modalShow, editID, modalCategoryShow]);
  return (
    <div>
      <Container>
        <div className={styles.titleBar}>
          <div>
            <h5>All Categories</h5>
          </div>
          <div className={styles.ButtonColumn}>
            <button
              onClick={() => {
                setType("add");
                setModalCategoryShow(true);
              }}
            >
              Add New Category
            </button>
          </div>
        </div>
        <div className={styles.Table}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoriesList?.map((cate) => {
                return (
                  <tr key={cate.id}>
                    <td>{cate.id}</td>
                    <td>{cate.name}</td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <button
                                onClick={(e) => {
                                  handleUpdateCategory(e, cate);
                                }}
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={(e) =>
                                  handleDeleteCategory(e, cate.id)
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className={styles.titleBar}>
          <div>
            <h5>All Products</h5>
          </div>
          <div className={styles.ButtonColumn}>
            <button
              onClick={() => {
                setType("add");
                setProductData({});
                setModalShow(true);
              }}
            >
              Add New Product
            </button>
          </div>
        </div>
        <div className={styles.Table}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsList?.map((prod) => {
                return (
                  <tr key={prod.productID}>
                    <td>{prod.productID}</td>
                    <td>
                      {" "}
                      <img src={prod.imageUrl} alt={prod.title}></img>
                    </td>
                    <td>{prod.title}</td>
                    <td>{prod.description}</td>
                    <td>{prod.category}</td>
                    <td>{prod.rating}</td>
                    <td>${prod.price}</td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <button
                                onClick={(e) => {
                                  handleUpdate(e, prod);
                                }}
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={(e) => handleDelete(e, prod.productID)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <ProductsModal
          show={modalShow}
          yolo={handleChange}
          onHide={() => {
            console.log("rerendering");
            setModalShow(false);
          }}
          type={type}
          prod={productData}
          id={editID}
          categories={categoriesList}
        ></ProductsModal>
        <CategoriesModal
          show={modalCategoryShow}
          yolo={handleCategoryChange}
          onHide={() => {
            console.log("rerendering");
            setModalCategoryShow(false);
          }}
          type={type}
          cate={categoryData}
          id={editID}
        ></CategoriesModal>
      </Container>
    </div>
  );
};

export default AdminDashboard;
