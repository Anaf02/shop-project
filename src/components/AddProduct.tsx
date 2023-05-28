import { useState } from "react";
import Product from "../models/product";
import handleAddProduct from "../firebase/handleAddProduct";
import { Button, Form } from "react-bootstrap";

function AddProduct() {
  const [formData, setFormData] = useState<Product>({
    description: "",
    image: "",
    name: "",
    section: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleAddProduct(formData);
  };

  function handleFileInputChange(e: any) {
    getBase64(e.target.files[0]);
  }

  const getBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: reader.result,
      }));
    };
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-light fw-bold fs-5">
            Product name
          </Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-light fw-bold fs-5">
            Description
          </Form.Label>
          <Form.Control
            type="textarea"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-light fw-bold fs-5">Section</Form.Label>
          <Form.Control
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            placeholder="Enter section"
          />
        </Form.Group>

        <input type="file" name="file" onChange={handleFileInputChange} />

        <Button
          variant="btn btn-outline-light"
          className="d-flex justify-content-center text-center fs-6 fw-bold mt-3"
          type="submit"
        >
          Submit to Database
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
