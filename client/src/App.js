


import {Routes, Route} from 'react-router-dom';
import  Home from  './components/Home/Home';
import FormActivity from './components/Form/Form';
import Landing from './components/Landing Page/Landing';
import Detail from './components/Detail/Detail';
import axios from  'axios';
axios.defaults.baseURL = 'https://deploy-production-3362.up.railway.app/';
function App() {
        
  return (
    <>
           
               <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route path='/home' element={<Home/>}/>
                        
                        <Route path='/createActivity' element={<FormActivity/>}/>
                        <Route path='/detail/:id' element={<Detail/>}/>
               </Routes>
    </>
  );
}

export default App;


