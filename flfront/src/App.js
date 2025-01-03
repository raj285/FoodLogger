import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
// import MainContent from "./components/MainContent";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Trends from "./pages/Trends";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <h1 className="bg-emerald-700 text-red-600 flex justify-center">
          कर्म सर्वमहत्त्वम् अस्ति।
        </h1>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <div className="flex w-screen">
                      <Sidebar />
                      <Dashboard />
                    </div>
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Mainpage />} />
            <Route
              path="/trends"
              element={
                <PrivateRoute>
                  <>
                    <Header />
                    <div className="flex w-screen">
                      <Sidebar />
                      <Trends />
                    </div>
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
