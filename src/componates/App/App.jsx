import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from '../../Pages/HomePage/HomePage.jsx'
import ProjectsPage from '../../Pages/ProjectsPage/PorjectsPage.jsx'
import ProjectPage from '../../Pages/ProjectPage/ProjectPage.jsx'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
    </>
  )
}

export default App
