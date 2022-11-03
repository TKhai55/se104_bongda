import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from "./common/header/Header";

import Home from './pages/Home/Home';
import Fixtures from './pages/Fixtures/Fixtures';
import Results from './pages/Results/Results';
import Player from './pages/Player';
import Club from './pages/Club/Club';
import Coach from './pages/Coach';
import DetailFixtures from './pages/DetailFixtures/DetailFixtures';
import Footer from './common/footer/Footer';
import Ranking from './pages/Ranking/Ranking';
import SignIn from './pages/Sign_In/SignIn';
import DetailResult from './pages/Detail_Result/Detail_Result'




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
        <Route path='/fixtures/detailfixtures'  element={<DetailFixtures />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/results/detailresults' element={<DetailResult/>}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
