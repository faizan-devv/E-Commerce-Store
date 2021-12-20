import FakeAPI from "fake-api";

// Get All Products
FakeAPI.add("GET", "/allProducts/{prodID}", (args) => {
  let { database } = args;
  console.log("Before Returning", database.get());
  const data = database.get();
  return data.products;
});

//Add Product
FakeAPI.add("POST", "/addProduct/{productID}", (args) => {
  console.log("logging args of post api", args);
  let { database, req, productID } = args;
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  temp.products.push({ ...req });
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

//Update Product
FakeAPI.add("POST", "/updateProduct/{productID}", (args) => {
  console.log("logging args of post api", args);
  let { database, req, productID } = args;
  console.log("req::", req);
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  let index = temp.products.findIndex((prod) => {
    console.log("required:", productID);
    console.log("compared:", prod.productID);
    return prod.productID == productID;
  });
  console.log("index:", index);
  temp.products[index] = { ...req };

  console.log("login before updating db:", temp.products);
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

//Delete Product
FakeAPI.add("POST", "/deleteProduct/{productID}", (args) => {
  console.log("logging args of post api", args);
  let { database, productID } = args;
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  let index = temp.products.findIndex((prod) => {
    return prod.productID === productID;
  });
  temp.products.splice(index, 1);
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

// Get All Categories
FakeAPI.add("GET", "/allCategories/{cateID}", (args) => {
  let { database } = args;
  console.log("Before Returning", database.get());
  const data = database.get();
  return data.categories;
});

//Add Category
FakeAPI.add("POST", "/addCategory/{categoryID}", (args) => {
  console.log("logging args of post api", args);
  let { database, req, categoryID } = args;
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  temp.categories.push({ ...req });
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

//Update Category
FakeAPI.add("POST", "/updateCategory/{categoryID}", (args) => {
  console.log("logging args of post api", args);
  let { database, req, categoryID } = args;
  console.log("req::", req);
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  let index = temp.categories.findIndex((category) => {
    console.log("required:", categoryID);
    console.log("compared:", category.id);
    return category.id == categoryID;
  });
  console.log("index:", index);
  temp.categories[index] = { ...req };
  console.log("login before updating db:", temp.categories);
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

//Delete Category
FakeAPI.add("POST", "/deleteCategory/{categoryID}", (args) => {
  console.log("logging args of post api", args);
  let { database, categoryID } = args;
  let data = database.get();
  if (!data) {
    database.set({ products: [], categories: [], cart: [] });
    data = database.get();
  }
  let temp = { ...data };
  let index = temp.categories.findIndex((category) => {
    console.log("required:", typeof categoryID);
    console.log("compared:", typeof category.id);
    return parseInt(category.id) === categoryID;
  });
  console.log("index:::", index);
  temp.categories.splice(index, 1);
  let newData = database.assign(temp, temp);
  database.set(newData);
  return database.get();
});

const addNewProduct = (data) => {
  FakeAPI.ajax({
    url: `/addProduct/${data.productID}`,
    method: "POST",
    data: data,
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};

const updateProduct = (data, id) => {
  FakeAPI.ajax({
    url: `/updateProduct/${id}`,
    method: "POST",
    data: data,
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};
const deleteProduct = (id) => {
  FakeAPI.ajax({
    url: `/deleteProduct/${id}`,
    method: "POST",
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};
const getAllProducts = () => {
  FakeAPI.ajax({
    url: `/allProducts/0`,
    method: "GET",
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};

const addNewCategory = (data) => {
  FakeAPI.ajax({
    url: `/addCategory/${data.id}`,
    method: "POST",
    data: data,
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};

const updateCategory = (data, id) => {
  FakeAPI.ajax({
    url: `/updateCategory/${id}`,
    method: "POST",
    data: data,
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};
const deleteCategory = (id) => {
  FakeAPI.ajax({
    url: `/deleteCategory/${id}`,
    method: "POST",
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};
const getAllCategories = () => {
  FakeAPI.ajax({
    url: `/allCategories/0`,
    method: "GET",
    progress(percent) {
      console.log("logging %age of call", percent);
    },
    done(data) {
      console.log("logging done of call", data);
    },
  });
};
const endPoints = {
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getAllCategories,
  addNewCategory,
  updateCategory,
  deleteCategory,
};
export default endPoints;
