import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './components/Sidebar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <h1 className='bg-emerald-700 text-red-600'> कर्म सर्वमहत्त्वम् अस्ति।</h1>
      <h1>food log</h1>
      <Header/>
      <Sidebar/>
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;
