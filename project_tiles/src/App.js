import ProjectCards from "./components/ProjectCards";
import { WebDev } from "./data/Data";
import "./styles/main.css";

function App() {
  return (
    <div className="wrapper">
      {WebDev.map((project) => {
        return <ProjectCards key={project.id} project={project} />;
      })}
    </div>
  );
}

export default App;
