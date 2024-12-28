import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <h1 className="bg-emerald-700 text-red-600 flex justify-center">
        कर्म सर्वमहत्त्वम् अस्ति।
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <div className="flex">
                  <Sidebar />
                  <MainContent />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
