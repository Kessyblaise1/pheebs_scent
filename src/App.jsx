import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./screens/landing/Landing";
import Product from "./screens/product/Product";

function App() {
  return (
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />

          {/* <Route path='/about' element={<About />} /> */}
          <Route path="/help">
            {/* <Route path='/faq' element={<FAQ />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} /> */}
          </Route>

          {/* Product Routes */}
          <Route path="/product/:id" element={<Product />} />

          {/* Auth Routes */}

          {/* Protected Routes */}
        </Routes>
      </Router>
  );
}

export default App;
