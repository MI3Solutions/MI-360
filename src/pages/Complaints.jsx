function Complaints() {
    return (
        <div>
            <h2>Complaint Management</h2>

            <input
                type="text"
                placeholder="Complaint Number"
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Customer Name"
            />

            <br />
            <br />

            <button>
                Save Complaint
            </button>
        </div>
    );
}

export default Complaints;