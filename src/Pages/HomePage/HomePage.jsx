import "./HomePage.css";
import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header.jsx";

function HomePage() {
  return (
    <div className="homePage">
        <Header />
        <div className="welcome-banner">
          {/* maybe  put a logo or avatar here to fill the space */}
          <h1 className="welcome-heading">Welcome to SparkPaws Workshop!</h1>
          <p className="welcome-text">A personal workshop for electronic repair, coding projects, homelab experiments, and more!</p>
        </div>
        <div className="homePageBtns">
          <p className="HomePageBtnstext">Want to have a look around? here is a few good places to start!</p>
          <Link to="/repairs"><button>Repairs</button></Link>
          <Link to="/coding"><button>Coding</button></Link>
          <Link to="/homelab"><button>Homelab</button></Link>
        </div>

      <div className="CurrentProjects">
        {/* 
        show 1 project (probly the most recent) of each type


Teardown/repair                Coding                  Building
---------------           ------------------        ----------------
|              |          |                 |       |              |
|              |          |                 |       |              |
|              |          |                 |       |              |
|              |          |                 |       |              |
|              |          |                 |       |              |
|              |          |                 |       |              |
|              |          |                 |       |              |
----------------          -------------------       ----------------

        */}




      </div>

      <div className="homePageAbout">
        <h2>About SparkPaws Workshop</h2>
        <p>SparkPaws Workshop is a personal space where I document my journey in electronic repair, coding projects, and homelab experiments.</p>
      </div>
    </div>
  );
}

export default HomePage;