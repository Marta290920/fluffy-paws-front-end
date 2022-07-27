
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    
      <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route  path="/" element={ <MainPage/> }/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    
  );
}
export default App;
