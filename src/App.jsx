import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Destacados" href='#sectioncreators' element={<Home />}>Destacados</Route>
          <Route path="/Populares" href='#sectioncreators' element={<Home />}>Populares</Route>
          <Route path="/MejoresRegalos" href='#sectioncreators' element={<Home />}>MejoresRegalos</Route>
          <Route path="/Creadores" href='#sectioncreators' element={<Home />}>Creadores</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App