import { HashRouter,Routes,Route,Link ,BrowserRouter} from "react-router-dom";
import './App.scss';
import Popular from './page/Popular';
import Top from './page/Top';
import Upcoming from './page/Upcoming';
import Home from './page/Home';
import Context from './Context'; //데이터 불러올거임
function App() {
  return (
      <HashRouter>
        <header>
          <nav>
            <Link to ="/">Home</Link>
            <Link to ="/Top">최고의 영화</Link>
            <Link to ="/Popular/#">인기있는 영화</Link>
            <Link to ="/Upcoming">개봉될 영화</Link>
          </nav>
        </header>
    
        <main>
          <Context>
            <Routes>
              
              <Route path='/' element={<Home />}/>
              <Route path='/Top' element={<Top />}/>
              <Route path='/Popular/'element={<Popular />}/>
              <Route path='/Upcoming'element={<Upcoming />}/>

            </Routes>
          </Context>
        </main>
        
      </HashRouter>
  );
}

export default App;
