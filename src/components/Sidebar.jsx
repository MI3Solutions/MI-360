function Sidebar() {
    return (
        <div
            style={{
                background: "#1e293b",
                color: "white",
                padding: "20px",
                minHeight: "100vh",
                marginBottom: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
        >
            <h3>Menu</h3>

            <ul>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Customers</li>
                <li>Plants</li>
                <li>Services</li>
                <li>Complaints</li>
                <li>Engineers</li>
                <li>Reports</li>
                <li>MIRA</li>

                
            </ul>
        </div>
    );
}

export default Sidebar;