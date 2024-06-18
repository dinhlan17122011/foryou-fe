import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {routes}from './routes'
import Heart from './components/Heart/Heart';
function App() {
  return (
    <div className="App" style={{marginTop:'20px'}}>
      <Router>
      <Routes>
        {routes.map((route)=>{
          const Pages =  route.page
          return (
            <Route path={route.path} element={<Pages />} />
          )
        })}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
