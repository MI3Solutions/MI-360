import CustomerForm from "../components/CustomerForm";

function Customers() {
    return (
        <div>
            <h2>Customer Master</h2>

            <CustomerForm />

            <hr />

            <h3>Customer List</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ABC Hospital</td>
                        <td>Delhi</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>XYZ Medical</td>
                        <td>Chandigarh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Customers;