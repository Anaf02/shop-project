import { useRef, useState } from "react";
import handleAddProduct from "../firebase/handleAddProduct";

function Contact() {
  const dataRef = useRef<any>();

  const submithandler = (e: any) => {
    e.preventDefault();
    handleAddProduct(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
      <div></div>
    </>
  );
}

export default Contact;
