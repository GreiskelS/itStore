import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
// import Navbarhome from './components/Navbar/Navbarhome'

function App() {

  return (
    <>
        {/* <Navbarhome /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
