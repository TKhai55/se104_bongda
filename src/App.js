import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from "./common/header/Header";
import Home from './pages/Home';
import Fixtures from './pages/Fixtures/Fixtures';
import Results from './pages/Results/Results';
import Player from './pages/Player';
import Club from './pages/Club/Club';
import Ranking from './pages/Ranking';
import Coach from './pages/Coach';
import DetailFixtures from './pages/DetailFixtures/DetailFixtures';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fixtures' element={<Fixtures />} />
        <Route path='/results' element={<Results />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/club' element={<Club />} />
        <Route path='/player' element={<Player />} />
        <Route path='/coach' element={<Coach />} />
        <Route path='/fixtures/detailfixtures'  element={<DetailFixtures />} />

      </Routes>

    </div>
  );
}

export default App;
