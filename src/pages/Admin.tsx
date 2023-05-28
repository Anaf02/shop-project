import { useRef, useState } from "react";
import handleAddProduct from "../firebase/handleAddProduct";
import AddProduct from "../components/AddProduct";
import Login from "../components/Login";

function Admin() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  if (loggedIn) {
    return <AddProduct></AddProduct>;
  } else {
    return <Login setLoggedIn={setLoggedIn}></Login>;
  }
}

export default Admin;
