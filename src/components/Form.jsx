import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EnergyForm({ handleFormSubmit }) {
  const [formState, setFormState] = useState({
    businessName: "",
    businessAddress: "",
    businessZip: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleFormSubmit(formState);
    setFormState({
      businessName: "",
      businessAddress: "",
      businessZip: "",
      phone: "",
      email: "",
    });
  };

  return (
    <Container className="my-5 py-5 bg-light rounded-3 col-8">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter business name"
          name="businessName"
          value={formState.businessName}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Business Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter business address"
          name="businessAddress"
          value={formState.businessAddress}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Business Zip</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter business zip"
          name="businessZip"
          value={formState.businessZip}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter phone"
          name="phone"
          value={formState.phone}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}

export default EnergyForm;
