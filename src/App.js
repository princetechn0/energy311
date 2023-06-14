import "./App.css";
import EnergyForm from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const onFormSubmit = async (formData) => {
    console.log("Form submitted");
    console.log(formData);
    const formSubmitObject = {
      building_name: formData.businessName,
      address: formData.businessAddress,
      zip: formData.businessZip,
      phone: formData.phone,
      email: formData.email,
    };

    await fetch("https://energy311dev.appspot.com/a/building", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSubmitObject),
    });
    alert("Form submitted successfully");
  };

  return (
    <div className="App text-center">
      <h1 className="my-5"> Energy 311 Form</h1>
      <EnergyForm handleFormSubmit={onFormSubmit} />
    </div>
  );
}

export default App;
