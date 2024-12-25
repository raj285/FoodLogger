import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <h1 className="bg-emerald-700 text-red-600 flex justify-center">
        कर्म सर्वमहत्त्वम् अस्ति।
      </h1>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
