import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Contact from "./pages/Contact/Contact";
import Home from "./pages/home/Home";
import Design from "./pages/Architecture/Design";
import Problem from "./pages/problem/Problem";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/arch" element={<Design/>}/>
          <Route path="/problem" element={<Problem/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  