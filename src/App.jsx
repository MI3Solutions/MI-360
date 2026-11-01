import Projects from "./pages/Projects";
import PlantCard from "./components/PlantCard";
import ServiceCard from "./components/ServiceCard";
import ComplaintCard from "./components/ComplaintCard"; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MiraSearch from "./components/MiraSearch";
import StatCard from "./components/StatCard";
import Dashboard from "./pages/Dashboard";
import AlarmCard from "./components/AlarmCard";
import AmcCard from "./components/AmcCard";
import ProjectCard from "./components/ProjectCard";
import Customers from "./pages/Customers";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px", padding: "20px" }}>
        <Sidebar />
      </div>

      <div
  style={{
    flex: 1,
    padding: "20px",
    background: "#f5f7fa",
    minHeight: "100vh",
  }}
>
        <Header />

        <MiraSearch />
        <Dashboard />

        <Customers />
        <Projects />

        <StatCard />
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <ProjectCard />
          <AlarmCard />
          <AmcCard />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
      
        </div>
      </div>
    </div>
  );
}

export default App;