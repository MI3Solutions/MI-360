function Projects() {
    return (
        <div
            style={{
                marginTop: "30px",
                padding: "20px",
                background: "white",
                borderRadius: "10px",
            }}
        >
            <h2>Project Master</h2>

            <input
                type="text"
                placeholder="Project Number"
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Customer Name"
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Capacity"
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Location"
            />

            <br />
            <br />

            <select>
                <option>Production</option>
                <option>Testing</option>
                <option>Dispatch</option>
                <option>Commissioning</option>
            </select>

            <br />
            <br />

            <button>
                Save Project
            </button>
        </div>
    );
}

export default Projects;