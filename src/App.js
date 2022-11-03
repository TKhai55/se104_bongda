import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from "./common/header/Header";
import Footer from './common/footer/Footer';
import Home from './pages/Home/Home';
import Fixtures from './pages/Fixtures';
import Results from './pages/Results';
import Player from './pages/Player';
import Club from './pages/Club';
import Ranking from './pages/Ranking/Ranking';
import Coach from './pages/Coach';
import SignIn from './pages/Sign_In/SignIn';
import DetailResult from './pages/Detail_Result/Detail_Result';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes className='content'>
        <Route path='/' element={<Home />} />
        <Route path='/fixtures' element={<Fixtures />} />
        <Route path='/results' element={<Results />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/club' element={<Club />} />
        <Route path='/player' element={<Player />} />
        <Route path='/coach' element={<Coach />} />
        <Route path='/signin' element={<SignIn />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
