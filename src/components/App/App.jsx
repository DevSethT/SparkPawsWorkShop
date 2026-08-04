import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from '../../Pages/HomePage/HomePage.jsx'
import BuildingPage from '../../Pages/BuildingPage/BuldingPage.jsx'
import TRPage from '../../Pages/TRPage/TRPage.jsx'
import HomeLabPage from '../../Pages/HomeLabPage/HomeLabPage.jsx'
import CodingPage from '../../Pages/CodingPage/CodingPage.jsx'
// import ProjectsPage from '../../Pages/ProjectsPage/ProjectsPage.jsx'
// import ProjectPage from '../../Pages/ProjectPage/ProjectPage.jsx'
// import InvatoryPage from '../../Pages/InvatoryPage/InvatoryPage.jsx'
// import ItemPage from '../../Pages/ItemPage/ItemPage.jsx'


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coding" element={<CodingPage />} />
      <Route path="/building" element={<BuildingPage />} />
      <Route path="/teardown&repair" element={<TRPage />} />
      <Route path="/homelab" element={<HomeLabPage />} />
    {/* <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/projects/:id" element={<ProjectPage />} /> */}
    {/* <Route path="/invatory" element={<InvatoryPage />} />
    <Route path="/items/:id" element={<ItemPage />} /> */}
    </Routes>
    </>
  )
}

export default App
