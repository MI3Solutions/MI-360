import { useState } from "react";

function CustomerForm() {
    const [customerName, setCustomerName] = useState("");
    const [city, setCity] = useState("");
    const [contactPerson, setContactPerson] = useState("");

    const saveCustomer = () => {
        alert("Button Working");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Contact Person"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
            />

            <br />
            <br />

            <button
                type="button"
                onClick={saveCustomer}
            >
                Save Customer
            </button>
        </div>
    );
}

export default CustomerForm;