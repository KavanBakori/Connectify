import First from './components/first';
import Login from './components/login';
import Req1 from './components/req1';
import Req2 from './components/req2';
import Req3 from './components/req3';
import Allreq from './components/allreq';
import Accepted from './components/accepted';
import History from './components/history';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(
   <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/req1' element={<Req1/>}/>
        <Route path='/req2' element={<Req2/>}/>
        <Route path='/req3' element={<Req3/>}/>
        <Route path='/allreq' element={<Allreq/>}/>
        <Route path='/accepted' element={<Accepted/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
