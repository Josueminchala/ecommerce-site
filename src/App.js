import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sneakers from "./pages/sneakers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/new-arrivals" element={<h1>New Arrivals</h1>} />
        <Route path="/cart" element={<h1>Shopping Cart</h1>} />
        <Route path="/sneakers" element={<h1></h1>} />
        <Route path="/account" element={<h1>Account</h1>} />
        <Route path="/apparel" element={<h1>Apparel</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
