import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Home from './pages/Home/Home';
import Fixtures from './pages/Fixtures/Fixtures';
import Results from './pages/Results/Results';
import Player from './pages/Player';
import Ranking from './pages/Ranking/Ranking';
import Coach from './pages/Coach';
import Club from './pages/club/Club';
import DetailFixtures from './pages/DetailFixtures/DetailFixtures'
import DetailResult from './pages/Detail_Result/Detail_Result';
import DetailClub from './pages/Detail_Club/Detail_Club';
import DetailPlayer from './pages/DetailPlayer/DetailPlayer'
import SignIn from './pages/Sign_In/SignIn'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fixtures' element={<Fixtures />} />
        <Route path='/results' element={<Results />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/club' element={<Detail_Club />} />
        <Route path='/player' element={<Player />} />
        <Route path='/coach' element={<Coach />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/fixtures/detailfixtures' element={<DetailFixtures />} />
        <Route path='/results/detailresults' element={<DetailResult />} />
        <Route path='/club/detailclub' element={<DetailClub />} />
        <Route path='/player/detailplayer' element={<DetailPlayer />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
